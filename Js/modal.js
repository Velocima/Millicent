const modal = document.querySelector('.modal');
const body = document.querySelector('.body');
const modalImage1 = document.querySelector('.image-1');
const modalImage2 = document.querySelector('.image-2');
const images = document.querySelectorAll('.content img');
const burger = document.querySelector('.burger');
let currentImage = {
    src: "",
    index: 0,
}

const openModal = () => {
    images.forEach((image, index) => {
        image.addEventListener('click', (preview) => {
            modal.classList.add('modal-open');
            body.classList.add('hide-scroll');
            burger.classList.add('hide-burger');
            currentImage.src = preview.toElement.src;
            currentImage.index = index;
            if (modalImage2.classList.contains('hide-image')) {
                modalImage1.src = `${preview.toElement.src.replace('.jpg', '-full.jpg')}`;
            }
            else {
                modalImage2.src = `${preview.toElement.src.replace('.jpg', '-full.jpg')}`;
            }
            
        })
    })
}

const closeModal = () => {
    const button = document.querySelector('.close');

    button.addEventListener('click', () => {
        modal.classList.remove('modal-open');
        body.classList.remove('hide-scroll');
        burger.classList.remove('hide-burger');
    })

    body.addEventListener('keydown', (e) => {
        if(e.key === 'Escape' && modal.classList.contains('modal-open')) {
            modal.classList.remove('modal-open');
            body.classList.remove('hide-scroll');
            burger.classList.remove('hide-burger');
        }
    })

}

// Throttling function 
const throttled = (delay, fn) => {
    let lastCall = 0;
    return function (...args) {
        const now = (new Date).getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        return fn(...args);
    }
}

const setNextImage = () => {
    if (currentImage.index === images.length - 1) return;
    modalImage1.classList.toggle('hide-image');
    modalImage2.classList.toggle('hide-image');
    if(modalImage1.classList.contains('hide-image')) {
        modalImage2.src = `${images[currentImage.index + 1].src.replace('.jpg', '-full.jpg')}`
    }
    else {
        modalImage1.src = `${images[currentImage.index + 1].src.replace('.jpg', '-full.jpg')}`
    }
    currentImage.src = images[currentImage.index + 1].src;
    currentImage.index++;
}

const nextImage = () => {
    const right = document.querySelector('.right');

    right.addEventListener('click', throttled(600, setNextImage));

    body.addEventListener('keydown', throttled(700, (e) => {if(modal.classList.contains('modal-open') && e.key==='ArrowRight') setNextImage()}));
}

const setPreviousImage = () => {
    if (currentImage.index === 0) return;
    modalImage1.classList.toggle('hide-image');
    modalImage2.classList.toggle('hide-image');
    if(modalImage1.classList.contains('hide-image')) {
        modalImage2.src = `${images[currentImage.index - 1].src.replace('.jpg', '-full.jpg')}`
    }
    else {
        modalImage1.src = `${images[currentImage.index - 1].src.replace('.jpg', '-full.jpg')}`  
    }
    
    currentImage.src = images[currentImage.index - 1].src;
    currentImage.index--;
}

const previousImage = () => {
    const left = document.querySelector('.left');

    left.addEventListener('click', throttled(600, setPreviousImage));

    body.addEventListener('keydown', throttled(600, (e) => {if(modal.classList.contains('modal-open') && e.key==='ArrowLeft') setPreviousImage()}));
}



openModal();
closeModal();
nextImage();
previousImage();