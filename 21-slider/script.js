const next = document.getElementById('next')
const prev = document.getElementById('prev')
const slides = document.querySelectorAll('.slide') //array
let slideInterval;

function nextSlide() {
    const activeSlide = document.querySelector('.active')
    activeSlide.classList.remove('active')

    if (activeSlide.nextElementSibling) {
        activeSlide.nextElementSibling.classList.add('active')
    } else {
        slides[0].classList.add('active')
    }
}
function prevSlide() {
    const activeSlide = document.querySelector('.active')
    activeSlide.classList.remove('active')

    if (activeSlide.previousElementSibling) {
        activeSlide.previousElementSibling.classList.add('active')
    } else {
        slides[slides.length - 1].classList.add('active')
    }
}

next.addEventListener('click', () => {
    nextSlide();
        clearInterval(slideInterval)
        slideInterval = setInterval(nextSlide, 5000)
})

prev.addEventListener('click', () => {
    prevSlide();
        clearInterval(slideInterval)
        slideInterval = setInterval(nextSlide, 5000)
})


slideInterval = setInterval(nextSlide, 5000)
