const burger_btn=document.querySelector(`.burger_btn`)
const burger_box=document.querySelector(`.burger_box`)
const close_btn=document.querySelector(`.close_btn`)
const model=document.querySelector(`.model`)
const model_name=document.querySelector(`.model_name`)
const model_tell=document.querySelector(`.model_tell`)
const model_date=document.querySelector(`.model_date`)
const promo_btn=document.querySelector(`.promo_btn`)
const model_close=document.querySelector(`.model_close`)


function openBurger(){
    burger_box.classList.add(`active_burger`)
}
burger_btn.addEventListener(`click`,()=>openBurger())
function closeBurger(){
        burger_box.classList.remove(`active_burger`)
}
close_btn.addEventListener(`click`,()=>closeBurger())
function openModel(){
    model.classList.add(`active_model`)
    document.body.classList.add(`no_scroll`)
}
promo_btn.addEventListener(`click`,()=>openModel())
function closeModel(){
        model.classList.remove(`active_model`)
        document.body.classList.remove(`no_scroll`)
}
model_close.addEventListener(`click`,()=>closeModel())