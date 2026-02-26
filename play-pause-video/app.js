const video = document.querySelector('video'); // query selector is for the type of data
// (query selector is searching inside the html document)
const statusText = document.querySelector('.status') // . is for classes

const options = {
    root: null,
    threshold: 0.5
}

const callback = (entries) => {
    entries.forEach(entry => {
       if (entry.isIntersecting) {
        video.play();
        statusText.textContent = "Status: Playing"
        statusText.style.color = "lightgreen"
       } 
       else {
        video.pause();
        statusText.textContent = "Status: Paused"
        statusText.style.color = "lightcoral"
       }
    });
}

const observer = new IntersectionObserver(callback, options)

observer.observe(video)