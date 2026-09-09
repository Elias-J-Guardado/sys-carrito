import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { supabase } from "../supabaseClient";



function AgregarInventario({ show, handleClose, onGuardar, productoEditar = null }) {

    const [nombre, setNombre] = useState(productoEditar?.nombre ?? "");
    const [cantidad, setCantidad] = useState(productoEditar?.cantidad ?? "");
    const [descripcion, setDescripcion] = useState(productoEditar?.descripcion ?? "");
    const [imagen_url, setImagenUrl] = useState(productoEditar?.imagen_url ?? "");


    const handleEnviar = () => {
        onGuardar({ nombre, cantidad, imagen_url: imagen_url, descripcion })
        handleClose()
    }

    // Añadiendo supabase
    const handleImagen = async (e) => {
        const file = e.target.files[0];
        const nombreFile = `${Date.now()}-${file.name}`;

        const { data, error } = await supabase.storage
            .from("imagen-inventario")
            .upload(nombreFile, file);

        
        console.log("upload error: ", error)

        if (error) {
            console.error(error);
            return;
        }

        const { data: urlData } = supabase.storage
            .from("imagen-inventario")
            .getPublicUrl(nombreFile);

        setImagenUrl(urlData.publicUrl)

        console.log("imagen: ", urlData.publicUrl);
    }

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton onHide={handleClose}>
                <Modal.Title>{productoEditar ? "Editar Producto" : "Nuevo Producto"}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <form id="formulario" className="d-flex flex-column p-2 gap-4 mx-auto">
                    <div className="mb-3 d-flex flex-column">
                        <label htmlFor="formulario-label">Producto: </label>
                        <input className="form-control" value={nombre} id="producto-nombre" name="producto-nombre" type="text" onChange={(e) => setNombre(e.target.value)} />
                    </div>
                    <div className="mb-3 d-flex flex-column">
                        <label htmlFor="cantidad-label">Cantidad: </label>
                        <input className="form-control" value={cantidad} id="cantidad-nombre" name="cantidad-nombre" type="text" onChange={(e) => setCantidad(e.target.value)} />
                    </div>
                    <div className="mb-3 d-flex flex-column">
                        <label htmlFor="Imagen-label">Imagen: </label>
                        <input className="form-control" type="file" accept="image/*" onChange={handleImagen} />
                    </div>
                    <div className="mb-3 d-flex flex-column form-outline">
                        <label htmlFor="descripcion-label">Descripcion: </label>
                        <textarea className="form-control" value={descripcion} style={{ resize: "none" }} name="descripción" id="descripcion" onChange={(e) => setDescripcion(e.target.value)}></textarea>
                    </div>

                </form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
                <Button variant="primary" onClick={handleEnviar}>{productoEditar ? "Guardar cambios" : "Guardar"}</Button>
            </Modal.Footer>

        </Modal>
    );
}

export { AgregarInventario };