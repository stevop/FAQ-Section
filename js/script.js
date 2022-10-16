const mainText = document.querySelector(".main-text");
const additionalText = document.querySelector(".additional-text");

mainText.addEventListener("click", ()=>{
    additionalText.classList.toggle("hidden");
})