const mainText = document.querySelectorAll(".main-text");
const additionalText = document.querySelectorAll(".additional-text");

//tu sa vsetkym additionalText prida class .hidden
const hideText = additionalText.forEach(answer => {
    answer.classList.add("hidden")
})

// tu sa na kliknutie togglne class hidden:
const toggleText = mainText.forEach(question => {
    question.addEventListener("click", function(){
        question.nextElementSibling.classList.toggle("hidden")

    
    })
})


//teraz treba aby som ostatnym pridal hidden ak nejaky odoberiem
