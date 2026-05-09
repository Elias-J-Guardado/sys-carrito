import ReactLoading from "react-loading";
import InventarioLoading from "./InventarioLoading.css"


function InventarioLoading() {
    return(
        <>
            <div className="d-flex justify-content-center gap-2">
                <div className="spinner-border text-primary" role="status" >
                </div>
                <span className="text-primary">Estamos cargando tus items :D ...</span>
            </div>
        </>
    )
}

export {InventarioLoading};