const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img.smile')
images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active')
        const img = document.createElement('img')
        img.src = image.src
        while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
        const div = document.createElement('div')
        lightbox.appendChild(div)
        div.textContent += (image.title)
    })
})

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})

var image = document.getElementById('peony');
image.addEventListener('mouseover', function(){
  image.src = "peony1.gif"
})
image.addEventListener('mouseout', function(){
    image.src = "peony1.png"
  })

