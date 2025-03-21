document.addEventListener("DOMContentLoaded", function () {
    console.log("Página de Preguntas Frecuentes cargada correctamente");

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

    // Interactividad en preguntas frecuentes
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        item.addEventListener("click", function () {
            const answer = this.querySelector(".faq-answer");
            answer.style.display = answer.style.display === "block" ? "none" : "block";
        });
    });
});