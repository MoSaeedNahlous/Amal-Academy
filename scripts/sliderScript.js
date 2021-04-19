
const track = document.querySelector('.slider-track')
const slides = Array.from(track.children)
const next = document.querySelector('.right-arrow');
const prev = document.querySelector('.left-arrow');
const dotsNav = document.querySelector('.slider-nav');
const dots = Array.from(dotsNav.children)

const slideSize = slides[0].getBoundingClientRect()
const slideWidth = slideSize.width

//arrange the slides next to one another

// slides[0].style.left = slideWidth * 0 + "px"
// slides[1].style.left = slideWidth * 1 + "px"
// slides[2].style.left = slideWidth * 2 + "px"
//etc...

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index +'px'
}

slides.forEach(setSlidePosition)

const moveToSlide = (track,currentSlide,targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide')
    targetSlide.classList.add('current-slide')
}

const updateDots = (currentDot,targetDot) => {
    currentDot.classList.remove('current-slide')
    targetDot.classList.add('current-slide')
}

const hideShowArrows = (slides,prev,next,targetIndex) => {
    if (targetIndex === 0) {
        prev.classList.add('is-hidden')
        next.classList.remove('is-hidden')
    } else if (targetIndex === slides.length - 1) {
        prev.classList.remove('is-hidden')
        next.classList.add('is-hidden')
        
    } else {
        prev.classList.remove('is-hidden')
        next.classList.remove('is-hidden')
    }
}
    

//right butto (next)
next.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide')
    const nextSlide = currentSlide.nextElementSibling
    // const amountToMove = nextSlide.style.left
    // track.style.transform = 'translateX(-' + amountToMove + ')';
    // currentSlide.classList.remove('current-slide')
    // nextSlide.classList.add('current-slide')

    moveToSlide(track, currentSlide, nextSlide)
    const currentDot = dotsNav.querySelector('.current-slide')
    const nextDot = currentDot.nextElementSibling
    updateDots(currentDot, nextDot)
    
    const nextIndex = slides.findIndex(slide => slide === nextSlide)
    

    hideShowArrows(slides,prev,next,nextIndex)
})

//left button
prev.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide')
    const prevSlide = currentSlide.previousElementSibling
    // const amountToMove = prevSlide.style.left
    // track.style.transform = 'translateX(-' + amountToMove + ')';
    // currentSlide.classList.remove('current-slide')
    // prevSlide.classList.add('current-slide')

    moveToSlide(track,currentSlide,prevSlide)
    const currentDot = dotsNav.querySelector('.current-slide')
    const prevDot = currentDot.previousElementSibling
    updateDots(currentDot, prevDot)
    
     const prevIndex = slides.findIndex(slide => slide === prevSlide)
    

    hideShowArrows(slides,prev,next,prevIndex)
})

//nav indicators

dotsNav.addEventListener('click', e => {
    //what indicator was clicked on?
    const targetDot = e.target.closest('button')

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide')
    const currentDot = dotsNav.querySelector('.current-slide')
    //getting the index
    const targetIndex = dots.findIndex(dot => dot === targetDot)
    
    const targetSlide = slides[targetIndex]

    moveToSlide(track, currentSlide, targetSlide)

    // currentDot.classList.remove('current-slide')
    // targetDot.classList.add('current-slide')
    updateDots(currentDot, targetDot)
    
    // if (targetIndex === 0) {
    //     prev.classList.add('is-hidden')
    //     next.classList.remove('is-hidden')
    // } else if (targetIndex === slides.length - 1) {
    //     prev.classList.remove('is-hidden')
    //     next.classList.add('is-hidden')
        
    // } else {
    //     prev.classList.remove('is-hidden')
    //     next.classList.remove('is-hidden')
    // }

    hideShowArrows(slides,prev,next,targetIndex)
})


