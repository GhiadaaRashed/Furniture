const nav=document.querySelector('nav')
const svg=document.querySelector('nav svg')
const navul=document.querySelector('nav .navul')
const cancel=document.querySelector('.cancel')
svg.addEventListener('click',()=>{
    navul.style.display='block'
})
cancel.addEventListener('click',()=>{
    navul.style.display='none'
})

window.addEventListener('scroll',()=>{
    if(window.scrollY>=200){
        nav.style.backgroundColor='rgb(210, 204, 204)'
    }
    else if(window.scrollY<=200){
        nav.style.backgroundColor=""
    }
})