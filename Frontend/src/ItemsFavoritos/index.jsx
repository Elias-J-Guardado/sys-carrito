import { Button, Modal } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import { AlertaEliminar } from "../AlertaEliminar";

function ItemsFavoritos({ showFavoritos, handleCloseFavoritos, favoritos, onEliminarFavorito}) {
    return (
        <>
            <Modal show={showFavoritos} onHide={handleCloseFavoritos} centered>
                <Modal.Header closeButton onHide={handleCloseFavoritos}>
                    <Modal.Title className="text-primary fw-bold">Items Guardados</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {favoritos.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.nombre} </td>
                                    <td>cantidad: {item.cantidad} </td>
                                    <td> <button className="btn btn-danger" onClick={() => AlertaEliminar(item, () => onEliminarFavorito(item))}> <FaTrash /> </button> </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseFavoritos}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export { ItemsFavoritos };
