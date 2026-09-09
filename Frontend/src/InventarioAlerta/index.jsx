import Swal from "sweetalert2";

function InventarioAlerta(objeto) {
    Swal.fire({
        title: "<strong>Error</strong>",
        icon: "info",
        html: `
        El "${objeto.nombre}" que intenta añadir ya se encuentra en favoritos...
    `,
        showCloseButton: true,
        closeButtonText: "Cerrar"
    })
}

export { InventarioAlerta };