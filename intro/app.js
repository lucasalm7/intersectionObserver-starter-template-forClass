const box = document.querySelector('.box') //select element we want to watch


// define the options used for when we trigger animations
const options = {
    root: null,
    threshold: 0.5, //what amount has the object to be in view to start animating (trigger when 50% of element is visible)
    rootMargin: '-200px'
}

const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log("box is visible")
            entry.target.classList.add('active')
        }

        else {
            console.log("box is hidden")
            entry.target.classList.remove('active')
        }
    })
}

const observer = new IntersectionObserver(callback, options)

observer.observe(box)