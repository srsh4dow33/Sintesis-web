document.addEventListener("DOMContentLoaded", function () {
    console.log("Página de Trabaja con Nosotros cargada correctamente");

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

    // Validación del formulario de aplicación
    const applyForm = document.getElementById("apply-form");
    const formMessage = document.getElementById("form-message");

    applyForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const cv = document.getElementById("cv").files[0];

        if (!name || !email || !cv) {
            formMessage.textContent = "Por favor, completa todos los campos.";
            formMessage.style.color = "red";
            return;
        }

        formMessage.textContent = "¡Currículum enviado con éxito!";
        formMessage.style.color = "green";
        applyForm.reset();
    });
});