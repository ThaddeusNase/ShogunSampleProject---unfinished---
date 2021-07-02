// Put your applicaiton javascript here
// BEST PRACTISE SÄMTLICHEN JS CODE HIER REIN 
// AUSNAHME: wenn liquid code in scrpt tag/js code integriert werden soll
// TODO: nicht mit application.js sondern mit themejs -> nochmal anschauen 

const body = document.querySelector("body")
const menuBtn = document.querySelector(".hamburger-menu")

const menuCancelBtn = document.querySelector(".cancel-btn")
const navigationMenu = document.querySelector(".navigation-menu")
const leftCarouselBtn = document.querySelector(".carousel-btn.left")
const leftBtnPath = document.querySelector(".left.carousel-btn-svg-path")
const rigthCarouselBtn = document.querySelector(".carousel-btn.right")
const rightBtnPath = document.querySelector(".right.carousel-btn-svg-path")

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


// ----- Hover effect product-carousel -----
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




// ----- product-carousel btn  -----
let products = document.querySelectorAll('.product-item')
let r = 0;  // pultyplyer
// mobile_view	

function moveRight() {
    if (r >= products.length - 1) {
        disableCarouselBtn(rigthCarouselBtn, rightBtnPath)
        return
    } else {
        enableCarouselBtn(rigthCarouselBtn, rightBtnPath)
        r = products.length == 1 ? 0 : r+=1
        products.forEach((product) => {
            product.style.transform = `translateX(calc(-100% * ${r}))`;
        })
    }
    if (r <= 1 ) enableCarouselBtn(leftCarouselBtn, leftBtnPath)
    if (r == products.length - 1) disableCarouselBtn(rigthCarouselBtn, rightBtnPath)
}


function moveLeft() {
    if (r == 0) {
        leftBtnPath.style.stroke = disableCarouselBtn(leftCarouselBtn, leftBtnPath)
        return 
    } else {
        leftBtnPath.style.stroke = "white"
        r = products.length == 1 ? 0 : r-=1
        products.forEach((product) => {
            product.style.transform = `translateX(calc(-100% * ${r}))`;
        })
    }
    if (r == 0) disableCarouselBtn(leftCarouselBtn, leftBtnPath)
    if (r != 0) enableCarouselBtn(rigthCarouselBtn, rightBtnPath)
}


// ---- btn Helper functions
function disableCarouselBtn(btn, btnSvgPath) {
    btnSvgPath.style.stroke = "rgba(149, 149, 149, 0.28)"
    btn.classList.add("btnZoom")
    btn.style.cursor = "default"
}

function enableCarouselBtn(btn, btnSvgPath) {
    btnSvgPath.style.stroke = "white"
    btn.style.cursor = "pointer"
    btn.classList.remove("btnZoom")
}


leftCarouselBtn.addEventListener("click", moveLeft)
rigthCarouselBtn.addEventListener("click", moveRight)






// --------- product-page image-selector background handeling ---------
// TODO: refactoren: 
// -> PROBLEM: code der in application.js ausgeführt wird, wird immer ausgeführt! d.h. 
// wenn wir hier code bezogen auf product.liquid ausführen, aber der user soch auf der index.liquid page befindet
// wird der nachfolgeende code trotzdem ausgführt, s. line 119 const imageSelectors = document.querySelectorAll(".image-selection-selector") 
// und line 126: latestClickedSelector.classList.add("active-selector")
// daher checken ob diese selektoren überhaupt existieren

const imageSelectors = document.querySelectorAll(".image-selection-selector")
const productPageBg = document.querySelector(".product-bg")

// latestClickedSelector benötigt um border von aktivem selector item zu entfernen 
let latestClickedSelector = imageSelectors[0]

// Default background settings (wenn product-page zum ersteln mal aufgerufen wird)
if (imageSelectors !== undefined && productPageBg !== undefined && imageSelectors.length !== 0) {
    console.log(imageSelectors);
    latestClickedSelector.classList.add("active-selector")
    productPageBg.style.backgroundImage = `url('${latestClickedSelector.dataset.bgurl}')`

    imageSelectors.forEach((imgSelector) => {
        imgSelector.addEventListener("click", function() {
            const bgUrl = imgSelector.dataset.bgurl
            productPageBg.style.backgroundImage = `url('${bgUrl}')`
            handleSwitchSelector(imgSelector)
        })
    })
}

function handleSwitchSelector(imgSelector) {
    latestClickedSelector.classList.remove("active-selector")
    latestClickedSelector = imgSelector
    latestClickedSelector.classList.add("active-selector")
}




