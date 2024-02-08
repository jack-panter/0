function openUploadOption() {
    localStorage.setItem("canUpload", "true");
    console.log("Opción de subir dibujos activada.");
}

function closeUploadOption() {
    localStorage.setItem("canUpload", "false");
    console.log("Opción de subir dibujos desactivada.");
}

function deleteDrawing() {
    var imgSrc = prompt("Introduce la URL del dibujo que deseas eliminar:");
    if (imgSrc) {
        var savedDrawings = localStorage.getItem("drawings");
        if (savedDrawings) {
            var drawings = JSON.parse(savedDrawings);
            var updatedDrawings = drawings.filter(function(drawing) {
                return drawing.imgSrc !== imgSrc;
            });
            localStorage.setItem("drawings", JSON.stringify(updatedDrawings));
            console.log("Dibujo eliminado.");
        } else {
            console.log("No hay dibujos almacenados.");
        }
    } else {
        console.log("No se proporcionó ninguna URL.");
    }
}
