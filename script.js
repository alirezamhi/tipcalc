let price = document.querySelector("#price");
let discount = document.querySelector("#discount");
let discountshow = document.querySelector("#discountshow");
let tip = document.querySelector("#tip");
let tipshow =document.querySelector("#tipshow");



let finalprice = document.querySelector(".finalprice");
let discountprice = document.querySelector(".discountprice");
let tipprice = document.querySelector(".tipprice");



let tipVal 
let discountVal =discountshow.value
tip.addEventListener("input",(e)=>{
    tipshow.value=e.target.value
})
discount.addEventListener("input",(e)=>{
    discountshow.value=e.target.value
})
price.addEventListener("input",changeAll)
discount.addEventListener("input",changeAll)
tip.addEventListener("input",changeAll)

function changeAll() {
    let $tip = (tip.value*price.value)/100;
    let $discount=(discount.value*price.value)/100;
    let $finalprice =  price.value-$discount+$tip
    finalprice.innerHTML=`قیمت نهایی${$finalprice}`
    discountprice.innerHTML=`تخفیف ${$discount}تومان`
    tipprice.innerHTML=`انعام ${$tip}تومان`
}