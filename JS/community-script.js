document.addEventListener("DOMContentLoaded", function () {
    console.log("Comunidad cargada correctamente");

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

    // Manejo del formulario de preguntas
    const questionForm = document.getElementById("question-form");
    const questionInput = document.getElementById("question-input");
    const questionList = document.getElementById("question-list");

    questionForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const questionText = questionInput.value.trim();
        if (questionText === "") return;

        const questionItem = document.createElement("li");
        questionItem.textContent = questionText;

        questionList.appendChild(questionItem);
        questionInput.value = "";
    });
});