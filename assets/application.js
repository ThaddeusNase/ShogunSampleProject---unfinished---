// Put your applicaiton javascript here
// BEST PRACTISE SÄMTLICHEN JS CODE HIER REIN 
// AUSNAHME: wenn liquid code in scrpt tag/js code integriert werden soll
// TODO: nicht mit application.js sondern mit themejs -> nochmal anschauen 

const menuBtn = document.querySelector(".hamburger-menu")
const menuCancelBtn = document.querySelector(".cancel-btn")
const navigationMenu = document.querySelector(".navigation-menu")


menuBtn.addEventListener("click", function() {
    // toggle Naviation Bar
    navigationMenu.classList.toggle("open")
    console.log("worksssssss");
})

menuCancelBtn.addEventListener("click", function() {
    navigationMenu.classList.toggle("open")
})



