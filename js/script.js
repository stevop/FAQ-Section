const mainText = document.querySelectorAll(".main-text");

mainText.forEach(question => question.addEventListener("click", () => {
    question.parentNode.classList.toggle("active")
}))