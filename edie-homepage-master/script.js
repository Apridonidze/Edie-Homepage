let responsiveBarToggle = document.querySelector(".bar-toggle");
let responsiveBtnActivate = document.querySelector(".bar-hambrug");
let responsiveBtnClose = document.querySelector(".toggle-left")
let toggleA = document.getElementsByClassName("a");

responsiveBtnClose.addEventListener("click",() => {
    responsiveBarToggle.style.display = "none";
});
responsiveBtnActivate.addEventListener("click", ()=> {
    responsiveBarToggle.style.display = "flex";
});
toggleA.addEventListener("click",()=> {
    responsiveBarToggle.style.display = "none"
})