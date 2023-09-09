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
const wkcTag = document.querySelector("div#wkc")
const mutualTag = document.querySelector("div#mutual-aid")
const gilmoresTag = document.querySelector("div#gilmores")

function toggle(div) {
  const imgOn = div.querySelector("img.visible")
  const imgOff = div.querySelector("img.hidden")

  imgOn.className = "hidden"
  imgOff.className = "visible"
}

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



