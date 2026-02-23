const smoothThreshold = []

for (let i = 0; i <= 100; i++) {
    smoothThreshold.push(i / 100)
}

const options = {
    root: null,
    rootMargin: '0px',
    threshold: smoothThreshold
}

const callback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const ratio = entry.intersectionRatio

            entry.target.style.backgroundColor = `rgba(0,255,0, ${ratio})`
            console.log(`visible`)
        }
        else {
            entry.target.style.backgroundColor = 'lightCoral'
        }
    })
}

const observer = new IntersectionObserver(callback,options)

observer.observe(document.querySelector('.box'))