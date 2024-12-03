/*--------------------------------------------------------
CUSTOM JS FUNCTIONS
FOR KIMHNGUYEN.COM - SEPTEMBER 2023
--------------------------------------------------------*/

//--------------- logo sparkling effect -----------------//
// selecting tags
const star1 = document.querySelector("svg g.star1")
const star2 = document.querySelector("svg g.star2")
const logo = document.querySelector("div.logo")

function twinkle(elem) {
  var idName = elem.className.baseVal
  elem.setAttribute("id", idName)
}

function untwinkle(elem) {
  elem.setAttribute("id", "none")
}

logo.addEventListener("mouseenter", (event) => {
  twinkle(star1)
  twinkle(star2)
})

logo.addEventListener("mouseleave", (event) => {
  untwinkle(star1)
  untwinkle(star2)
})

//--------------- gif on hover -----------------//
const ubiTag = document.querySelector("div#ubi")
const colorsTag = document.querySelector("div#colors")
const geoTag = document.querySelector("div#geo")
const wkcTag = document.querySelector("div#wkc")
const mutualTag = document.querySelector("div#mutual-aid")
const gilmoresTag = document.querySelector("div#gilmores")

function toggle(div) {
  const imgOn = div.querySelector("img.visible")
  const imgOff = div.querySelector("img.hidden")
  const screenWidth = window.innerWidth
  
  // only toggle on non-mobile screens
  if (screenWidth > 760) {
    imgOn.className = "hidden"
    imgOff.className = "visible"
  }
}

ubiTag.addEventListener("mouseenter", (event) => {
  toggle(ubiTag)
})

ubiTag.addEventListener("mouseleave", (event) => {
  toggle(ubiTag)
})

colorsTag.addEventListener("mouseenter", (event) => {
  toggle(colorsTag)
})

colorsTag.addEventListener("mouseleave", (event) => {
  toggle(colorsTag)
})

geoTag.addEventListener("mouseenter", (event) => {
  toggle(geoTag)
})

geoTag.addEventListener("mouseleave", (event) => {
  toggle(geoTag)
})

wkcTag.addEventListener("mouseenter", (event) => {
  toggle(wkcTag)
})

wkcTag.addEventListener("mouseleave", (event) => {
  toggle(wkcTag)
})

mutualTag.addEventListener("mouseenter", (event) => {
  toggle(mutualTag)
})

mutualTag.addEventListener("mouseleave", (event) => {
  toggle(mutualTag)
})

gilmoresTag.addEventListener("mouseenter", (event) => {
  toggle(gilmoresTag)
})

gilmoresTag.addEventListener("mouseleave", (event) => {
  toggle(gilmoresTag)
})



