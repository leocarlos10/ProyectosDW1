document.addEventListener("DOMContentLoaded", ()=>{
    const botones = [document.querySelector(".menu_language"), document.querySelector('.menu_access'),document.querySelector('.search'), document.querySelector('#menu-login-action')];
    const contenedores = [document.querySelector('.cont-menu-lenguage'), document.querySelector('.cont-menu-access'), document.querySelector('.expandable-holder'), document.querySelector('.mdl-menu2')];

    botones[0].addEventListener('click',()=>{
        contenedores[0].classList.toggle('cont-menu-toggle');
    });

    botones[1].addEventListener("click", ()=>{
        contenedores[1].classList.toggle('cont-menu-toggle');
    })

    botones[2].addEventListener('click',()=>{
        contenedores[2].classList.toggle('cont-menu-toggle');
    })

    botones[3].addEventListener('click',()=>{
        contenedores[3].classList.toggle('mdl-menu2-toggle');
    })

    document.addEventListener('click',(e)=>{

        const clickFuera = !contenedores.some(c => c.contains(e.target)) &&
                     !botones.some(b => b.contains(e.target)); // ✅ también ignora los botones

        if (clickFuera) {
            contenedores.forEach(c =>{ 
                c.classList.remove('cont-menu-toggle');
                c.classList.remove('mdl-menu2-toggle');
            });
        }
    })
})