const mainText = document.querySelectorAll(".main-text");
mainText.forEach(function(question){

    question.addEventListener("click", function(){
        question.parentNode.classList.toggle("active")
       
    })
})


// toto cele je funkcne kdyby neco:
// const mainText = document.querySelectorAll(".main-text");
// mainText.forEach(function(question){

//     question.addEventListener("click", function(){
//         question.parentNode.classList.toggle("active")
       
//     })
// })