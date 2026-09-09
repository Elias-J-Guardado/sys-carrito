import { InventarioItem } from "../InventarioItem";
import { useState, useEffect } from "react";
import { InventarioLoading } from '../InventarioLoading';

const listaVacia = "No hay ningun item en la lista, por favor agrega uno";


function InventarioLista({ items, onEliminar, onEditar, onFavorito, favoritos }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000);
    }, [])

    if (isLoading) {
        return <InventarioLoading />
    }

    if (items.length === 0) {
        return <p className="h3 text-info text-center pt-5">{listaVacia}</p>
    }

    return (
        <>
            <div className="container pb-8">
                <div className="row g-4 mt-4 justify-content-center">
                    {items.map((item, index) => (
                        <InventarioItem key={index} item={item} onEliminar={onEliminar} onEditar={onEditar} favoritos={favoritos} onFavorito={onFavorito} />
                    ))}
                </div>
            </div>
        </>
    )
}

export { InventarioLista };