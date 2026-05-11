import { useState } from 'react'
// import frankenstain from '/img/frankenstein.jpg'
// import './App.css'

import { InventarioHeader } from './InventarioHeader';
import { ItemSearch } from './ItemSearch';
import { InventarioLista } from './InventarioLista';
import { InventarioItem } from './InventarioItem';
import { CreateItemBtn } from './CreateItemBtn';
import { InventarioFooter } from './InventarioFooter';
import { AgregarInventario } from './AgregarInventario/';
import { ItemsFavoritos } from './ItemsFavoritos/'
import { supabase } from './supabaseClient';
import { InventarioAlerta } from './InventarioAlerta';
import { InventarioLoading } from './InventarioLoading';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [busqueda, setBusqueda] = useState("");

  //Favoritos
  const [showFavoritos, setOpenFavoritos] = useState(false);

  const handleOpenFavoritos = () => setOpenFavoritos(true)
  const handleCloseFavoritos = () => {
    setOpenFavoritos(false)
  }

  // console.log(showFavoritos)

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false)
    setProductoEditar(null);
  }

  // localStorage
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("inventarioLS")) || []
  );

  const [favoritos, setFavoritos] = useState(
    JSON.parse(localStorage.getItem("favoritosLS")) || []
  );

  //Editar
  const [productoEditar, setProductoEditar] = useState(null);

  const handleGuardar = (nuevoItem) => {
    const listaActualizada = [...items, nuevoItem];
    localStorage.setItem("inventarioLS", JSON.stringify(listaActualizada));
    setItems(listaActualizada);
  }

  const handleEliminar = async (item) => {

    const nombreArchivo = decodeURIComponent(item.imagen_url.split("/").pop());
    console.log("nombreArchivo:", nombreArchivo);

    const { data, error } = await supabase.storage
      .from("imagen-inventario")
      .remove([nombreArchivo]);

    console.log("data: ", data)
    console.log("error: ", error)

    const listaActualizada = items.filter(i => i !== item);
    localStorage.setItem("inventarioLS", JSON.stringify(listaActualizada));
    setItems(listaActualizada);
  }

  const handleFavoritos = async item => {
    const inFavorito = favoritos.some(f => f.nombre === item.nombre)
    const favoritosActualizados = [...favoritos, item]
    if (inFavorito) {
      // const sinItem = favoritos.filter(i => i.nombre !== item.nombre)
      // localStorage.setItem("favoritosLS", JSON.stringify(sinItem))
      // setFavoritos(sinItem)
      InventarioAlerta(item);
    } else {
      localStorage.setItem("favoritosLS", JSON.stringify(favoritosActualizados));
      const itemActualizado = [...favoritos, item]
      setFavoritos(itemActualizado)
    }
  }


  const handleEliminarFavoritos = (item) => {
    const favoritosActualizados = favoritos.filter(i => i.nombre !== item.nombre)
    localStorage.setItem("favoritosLS", JSON.stringify(favoritosActualizados));
    setFavoritos(favoritosActualizados)
  }

  const filtrarItem = items.filter(item =>
    item.nombre.toLowerCase().includes(busqueda.toLocaleLowerCase())
  );

  const handleEditar = (item) => {
    setProductoEditar(item);
    setShowModal(true)
  }

  const handleGuardarEdicion = itemEditado => {
    localStorage.setItem("inventarioLS", JSON.stringify(listaActualizada));
    setItems(listaActualizada);
    setProductoEditar(null);
  }

  return (
    <>
      <InventarioHeader onOpenFavoritos={handleOpenFavoritos} />
      {showFavoritos && <ItemsFavoritos
        showFavoritos={showFavoritos}
        handleCloseFavoritos={handleCloseFavoritos}
        favoritos={favoritos}
        onEliminarFavorito={handleEliminarFavoritos}
      />}
      <ItemSearch busqueda={busqueda} onSearch={setBusqueda} />

      <InventarioLista
        items={filtrarItem}
        onEliminar={handleEliminar}
        onEditar={handleEditar}
        onFavorito={handleFavoritos}
        favoritos={favoritos}
      >
        <InventarioItem />
      </InventarioLista >

      <CreateItemBtn onClick={handleOpenModal} />
      {showModal && <AgregarInventario
        show={showModal}
        handleClose={handleCloseModal}
        productoEditar={productoEditar}
        onGuardar={productoEditar ? handleGuardarEdicion : handleGuardar} />}

      <InventarioFooter />

    </>
  );
}


export default App
