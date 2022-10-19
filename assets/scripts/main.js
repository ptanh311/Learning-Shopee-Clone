let mobileMenuIcon = document.querySelector(".menu-bar-icon");
let mobileMenu = document.querySelector(".menu-bar-mobile__wrap");
let mobileMenuPar = document.querySelector(".menu-bar-mobile");

let searchIcon = document.querySelector(".h-search-icon__icon");
let searchInput = document.querySelector(".header__search-inp.toogle-on-mobile");

mobileMenuIcon.onclick = (e) => {
    mobileMenuPar.style.display = "flex";
    mobileMenu.style.animation = "fadeInX 0.2s linear";
    mobileMenu.style.transform = "translateX(0%)";
}

mobileMenuPar.onclick = (e) => {
    if(e.target === e.currentTarget){
        mobileMenu.style.animation = "fadeOut 0.2s linear";
        mobileMenu.style.transform = "translateX(-100%)";
        setTimeout(()=>{mobileMenuPar.style.display = "none"},200); 
    }
    
}

searchIcon.onclick = (e) => {
    e.stopPropagation();
    if (searchInput.style.display === "flex") {
        searchInput.style.display = "none";
    } else {
        searchInput.style.display = "flex";
        searchInput.style.animation = "fadeInY 0.2s linear";
        searchInput.style.transform = "translateY(0%)";
    }
}

document.onclick = (e) => {
    if((searchInput.style.display === "flex") && !searchInput.contains(e.target)) {
        searchInput.style.display = "none";
    }
}


