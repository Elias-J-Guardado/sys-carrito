import Swal from "sweetalert2";

function AlertaEliminar (objeto, onConfirm) {
    Swal.fire({
        title: "¿Estás seguro?",
        text: `¿Quieres eliminar "${objeto.nombre}"?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si",
        cancelButtonText: "Cancelar",
        reverseButtons: true,
    }).then((resultado) => {
        if (resultado.isConfirmed) {
            onConfirm();

            Swal.fire(
                "El Item ha sido Eliminado",
                `Se ha eliminado el item "${objeto.nombre}"`,
                "success"
            );
        }
    });
};

export {AlertaEliminar};