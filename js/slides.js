// pick all images and layer them based on z-index
const slideArea = document.querySelector("div.slides")
const images = slideArea.querySelectorAll("img")

// keep track of two things: slide and its z-index
let currentSlide = 0
let z = 1

// when click slide area, change slide by z-index
slideArea.addEventListener("click", function () {
  currentSlide = currentSlide + 1
  
  if (currentSlide > images.length - 1) {
    currentSlide = 1
  }
  
  z = z + 1
  
  // remove animation from the style for every image
  images.forEach(image => {
    image.style.animation = ""
    
  })
  
  // pick right image
  images[currentSlide].style.zIndex = z
  images[currentSlide].style.animation = "fade 0.5s"
})

// when cursor is hovered over slide area, position images randomly on hover
slideArea.addEventListener("mouseover", function () {
  images.forEach(image => {
    // Applying grid snapping
    const x = 25 * (Math.floor(Math.random() * 5)) - 50
    const y = 25 * (Math.floor(Math.random() * 5)) - 50
    
    image.style.transform = `translate(${x}px, ${y}px`
    
  })
})

// when cursor is moved away from slide area, put the images back below each other
slideArea.addEventListener("mouseout", function () {
  images.forEach(image => {
    image.style.transform = ""
    
  })
})
