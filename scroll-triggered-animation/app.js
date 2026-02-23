// select all elements we want to animate

const hiddenElements = document.querySelectorAll('.hidden-left, .hidden-right')

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
    })
})

hiddenElements.forEach(el => observer.observe(el))