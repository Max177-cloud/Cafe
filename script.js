const burger_btn=document.querySelector(`.burger_btn`)
const burger_box=document.querySelector(`.burger_box`)
const close_btn=document.querySelector(`.close_btn`)
const model=document.querySelector(`.model`)
const model_name=document.querySelector(`.model_name`)
const model_tell=document.querySelector(`.model_tell`)
const model_date=document.querySelector(`.model_date`)
const promo_btn=document.querySelector(`.promo_btn`)
const model_close=document.querySelector(`.model_close`)
const model_form=document.querySelector(`.model_form`)
const form_error=document.querySelector(`.form_error`)
const success=document.querySelector(`.success`)


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
function sendMessage(event){
    event.preventDefault()
    const valueName=model_name.value
    const valueTell=+model_tell.value
    let flag=true
    if(valueName.length<=1 && /\d/.test(valueName)){
        form_error.textContent=`Некорректное имя`
        flag=false
        return
    }
    if(isNaN(valueTell)){
    form_error.textContent=`Некорректный телефон`
    flag=false
    return
    }
    if(flag==true){
        form_error.textContent=``
        success.classList.add(`form_active`)
        setTimeout(() => {
            success.classList.remove(`form_active`)
        }, 4000);
    }
}
model_form.addEventListener(`submit`,()=>sendMessage(event))