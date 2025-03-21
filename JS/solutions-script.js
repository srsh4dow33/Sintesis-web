document.addEventListener("DOMContentLoaded", function () {
    console.log("Página de Soluciones y Tecnologías cargada correctamente");

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

    // Interactividad en secciones de soluciones
    const solutionItems = document.querySelectorAll(".solution-item");

    solutionItems.forEach(item => {
        item.addEventListener("click", function () {
            const description = this.querySelector(".solution-description");
            const details = this.querySelector(".solution-details");
            
            if (description) {
                description.style.display = description.style.display === "block" ? "none" : "block";
            }

            if (details) {
                details.style.display = details.style.display === "block" ? "none" : "block";
            }
        });
    });
});