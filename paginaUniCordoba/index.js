
document.addEventListener('DOMContentLoaded', ()=>{
    const item = document.querySelector('#inst');
    const menu = document.querySelector('.megamenu-holder');

    item.addEventListener("mouseenter",()=>{
        menu.classList.add('megamenu-toggle');
    })

    item.addEventListener("mouseleave",()=>{
        menu.classList.remove('megamenu-toggle');
    })

    menu.addEventListener("mouseenter",()=>{
        menu.classList.add('megamenu-toggle');
    })

    menu.addEventListener("mouseleave",()=>{
        menu.classList.remove('megamenu-toggle');
    })
})