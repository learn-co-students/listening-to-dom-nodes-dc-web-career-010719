// add a popup with the embedded message
const main = document.getElementById('main')
main.addEventListener('click', function (event) {
  alert('I was clicked!')
})

// track which keys are pressed on an input
const input = document.querySelector('input')
input.addEventListener('keydown', function (e) {
  console.log(e.key)
})

// prevent certain keys being pressed for the input
input.addEventListener('keydown', function (e) {
  if (e.key === 'g') {
    return e.preventDefault()
  } else {
    console.log(e.key)
  }
})

// bubbling v. capturing
let divs = document.querySelectorAll('div')
function bubble (e) {
  console.log(this.firstChild.nodeValue.trim() + ' bubbled')
}
for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble)
}

// setting third arg of EventListener to true allows capturing instead of bubbling
function capture (e) {
  console.log(this.firstChild.nodeValue.trim() + ' captured')
}
for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', capture, true)
}

// if we wanted to prevent propagation
function bubble (e) {
  e.stopPropagation()
  console.log(this.firstChild.nodeValue.trim() + ' bubbled')
}
for (i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble)
}
