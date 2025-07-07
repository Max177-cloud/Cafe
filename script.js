const burger_btn=document.querySelector(`.burger_btn`)
const burger_box=document.querySelector(`.burger_box`)
const close_btn=document.querySelector(`.close_btn`)
function openBurger(){
    burger_box.classList.add(`active_burger`)
}
burger_btn.addEventListener(`click`,()=>openBurger())
function closeBurger(){
        burger_box.classList.remove(`active_burger`)
}
close_btn.addEventListener(`click`,()=>closeBurger())
