let ScrollOver = require("./lib/ScrollOver.js")
let animateScroll = require("./lib/animatescroll.js")

let body = document.querySelectorAll("body")[0]

let slideOne = document.querySelectorAll(".slide--one")[0]
let slideTwo = document.querySelectorAll(".slide--two")[0]
let sectionOne = document.querySelectorAll(".section--one")[0]
let sectionTwo = document.querySelectorAll(".section--two")[0]
let sectionThree = document.querySelectorAll(".section--three")[0]
let sectionFour = document.querySelectorAll(".section--four")[0]

let scrollTopButton = document.querySelectorAll(".button--scrolltop")[0]
let scrollToFeatures = document.querySelectorAll(".nav__item-features")[0]
//
setTimeout(() => body.classList.add("shown"), 400)
//

if(scrollTopButton) { scrollTopButton.addEventListener('click', function(event){
    animateScroll(slideOne, 600, "easeInOutCubic", 0)
    event.preventDefault()
  })
}

if(scrollToFeatures) { scrollToFeatures.addEventListener('click', function(event){
    animateScroll(slideTwo, 600, "easeInOutCubic", 0)
    event.preventDefault()
  })
}

//
// if(document.querySelectorAll(".button--unavailable")[0]) {
//   document.querySelectorAll(".button--unavailable")[0].addEventListener('click', function(event){
//     event.preventDefault()
//   })
// }
//
// if(document.querySelectorAll(".button--prtcpt")[0]) {
//   document.querySelectorAll(".button--prtcpt")[0].addEventListener('click', function(event){
//       animateScroll(slideTwo, 600, "easeInOutCubic", 0)
//       event.preventDefault()
//   })
// }
//
// if(document.querySelectorAll(".nav__item--participate")[0]) {
//   document.querySelectorAll(".nav__item--participate")[0].addEventListener('click', function(event){
//       animateScroll(slideTwo, 600, "easeInOutCubic", 0)
//       event.preventDefault()
//   })
// }
//
//
new ScrollOver({
  keyframes : [
    {
      element : sectionOne,
      reveal:
        {
          when : 120,
          className: "section--shown"
        }
    },
    {
      element : sectionTwo,
      reveal:
        {
          when : 500,
          className: "section--shown"
        }
    },
    {
      element : sectionThree,
      reveal:
        {
          when : 900,
          className: "section--shown"
        }
    },
    {
      element : sectionFour,
      reveal:
        {
          when : 1280,
          className: "section--shown"
        }
    }

  ]
 }).init()
