/*--------------------------------------------------------
CUSTOM JS FUNCTIONS
FOR KIMHNGUYEN.COM - SEPTEMBER 2023
--------------------------------------------------------*/

//--------------- logo sparkling effect -----------------//
// selecting tags
const star1 = document.querySelector("svg g.star1")
const star2 = document.querySelector("svg g.star2")
const logo = document.querySelector("div.logo")

function sparkle(elem) {
  var idName = elem.className.baseVal
  elem.setAttribute("id", idName)
}

function stopSparkle(elem) {
  elem.setAttribute("id", "none")
}

logo.addEventListener("mouseover", (event) => {
  sparkle(star1)
  sparkle(star2)
})

logo.addEventListener("mouseleave", (event) => {
  stopSparkle(star1)
  stopSparkle(star2)
})










