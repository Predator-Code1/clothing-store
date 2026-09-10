const blocks = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible')
        }
    });
});

blocks.forEach(function(block) {
    observer.observe(block);
});

const headers = document.querySelectorAll('.accordion-header');

headers.forEach(function(header) {
    header.addEventListener('click', function() {
        const content = header.nextElementSibling;
        content.classList.toggle('open')
    });
});

const products = document.querySelectorAll('.product');

products.forEach(function(product) {
    product.addEventListener('click', function() {
        const modal = product.nextElementSibling;
        modal.classList.add('open');
    });
});

const modals = document.querySelectorAll('.modal-overlay');

modals.forEach(function(modal) {
    const box = modal.querySelector('.modal-box');
    const closeBtn = modal.querySelector('.modal-close');

    closeBtn.addEventListener('click', function() {
        modal.classList.remove('open');
    });

    modal.addEventListener('click', function() {
        modal.classList.remove('open');
    });

    box.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    const nextArrow = modal.querySelector('.next-arrow');
    const prevArrow = modal.querySelector('.prev-arrow');

    if (nextArrow) {
        const photos = modal.querySelectorAll('.modal-photo');
        let currentIndex = 0;

        nextArrow.addEventListener('click', function() {
            photos[currentIndex].classList.remove('active-photo');
            currentIndex = currentIndex + 1;
            if (currentIndex >= photos.length) {
                currentIndex = 0;
            }
            photos[currentIndex].classList.add('active-photo');
        });

        prevArrow.addEventListener('click', function() {
            photos[currentIndex].classList.remove('active-photo');
            currentIndex = currentIndex - 1;
            if (currentIndex < 0) {
                currentIndex = photos.length - 1;
            }
            photos[currentIndex].classList.add('active-photo');
        });
    }
});