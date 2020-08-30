const showMenu = () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    const line = document.querySelectorAll('.line');


    burger.addEventListener('click', (e) => {
        menu.classList.toggle('menu-active');
        burger.classList.toggle('burger-active');
        line[0].classList.toggle('line-active');
        line[1].classList.toggle('line-active');
        line[2].classList.toggle('line-active');
    });

    document.body.addEventListener('click', (e) => {
        if(e.clientY > menu.clientHeight && menu.classList.value.includes('menu-active')) {
            menu.classList.toggle('menu-active');
            burger.classList.toggle('burger-active');
            line[0].classList.toggle('line-active');
            line[1].classList.toggle('line-active');
            line[2].classList.toggle('line-active');
        }
    })
}

showMenu();