import { FaHeart, FaTrash, FaMarker } from "react-icons/fa";
import { AlertaEliminar } from "../AlertaEliminar";

function InventarioItem({ item, onEliminar, onEditar,onFavorito ,favoritos }) {
  return (
    <>
      <div className="col-6 col-md-4">
        <div className="card shadow-sm d-flex align-items-center">
          {item.imagen_url && <img className="img-fluid img-thumbnail" style={{
            height: "190px",
          }} src={item.imagen_url} alt={item.nombre} />}
          <p>{item.nombre}</p>
          <p>Cantidad: {item.cantidad}</p>
          <div className="d-flex p-1 gap-2 mt-2">
            <button className='btn btn-danger' onClick={() => AlertaEliminar(item, () => onEliminar(item))}><FaTrash /></button>
            <button className="btn btn-primary" onClick={() => onFavorito(item)} ><FaHeart /></button>
            <button className="btn btn-warning" onClick={() => onEditar(item)}><FaMarker /></button>
          </div>
        </div>
      </div>
    </>
  );
}

export { InventarioItem };