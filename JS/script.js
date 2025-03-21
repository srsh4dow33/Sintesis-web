document.addEventListener("DOMContentLoaded", function () {
    console.log("Página cargada correctamente");

    // Menú desplegable
    const dropdownTrigger = document.getElementById("dropdown-trigger");
    const dropdownMenu = document.getElementById("dropdown-menu");

    dropdownTrigger.addEventListener("click", function (event) {
        event.stopPropagation();
        dropdownMenu.classList.toggle("show");
    });

    document.addEventListener("click", function (event) {
        if (!dropdownTrigger.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove("show");
        }
    });

    // Botón de contacto rápido
    document.getElementById("contact-button").addEventListener("click", function () {
        window.location.href = "contact.html";
    });
});