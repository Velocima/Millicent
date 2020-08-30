const showMenu = () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');

    burger.addEventListener('click', (e) => {
        menu.classList.toggle('menu-active')
        burger.classList.toggle('burger-active')
    });

    document.body.addEventListener('click', (e) => {
        if(e.clientY>279 && menu.classList.value.includes('menu-active')) {
        menu.classList.toggle('menu-active');
        burger.classList.toggle('burger-active');
        }
    })
}

showMenu();