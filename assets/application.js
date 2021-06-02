// Put your applicaiton javascript here
// BEST PRACTISE SÄMTLICHEN JS CODE HIER REIN 
// AUSNAHME: wenn liquid code in scrpt tag/js code integriert werden soll
// TODO: nicht mit application.js sondern mit themejs -> nochmal anschauen 

const body = document.querySelector("body")
const menuBtn = document.querySelector(".hamburger-menu")

const menuCancelBtn = document.querySelector(".cancel-btn")
const navigationMenu = document.querySelector(".navigation-menu")

const productCarousel = document.querySelector(".product-carousel")
const productCarouselChildren = Array.prototype.slice.call(productCarousel.children)


menuBtn.addEventListener("click", function() {
    // toggle Naviation Bar
    navigationMenu.classList.add("open")
    body.style.overflow = "hidden"
})

menuCancelBtn.addEventListener("click", function() {
    navigationMenu.classList.remove("open")
    body.style.overflow = "visible"
})


productCarouselChildren.forEach(productItem => {
    const aTag = productItem.children[0]
    const productImg = aTag.children[0]
    const productTitle = aTag.children[1]

    productItem.addEventListener("mouseover", function() {
        productTitle.style.transform = 'translateY(-15px)'
        productImg.style.transform = "rotate(-3deg)"
        productImg.style.boxShadow = "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px"
        // productImg.style.boxShadow = "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
        
    })
    productItem.addEventListener("mouseleave", function() {
        productTitle.style.transform = "translateY(0px)"
        productImg.style.transform = "rotate(0deg)"
        productImg.style.boxShadow = "none" 
    })

}) 







