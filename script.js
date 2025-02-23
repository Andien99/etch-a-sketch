const output =document.getElementById('output')
const sketchpad = document.getElementById('sketchpad');
const slider = document.getElementById('myRange');
let displayDimensions = document.getElementById('displayDimensions');
const reset = document.getElementById('reset')

const blackColour = document.getElementById('blackColour')
const blueColour = document.getElementById('blueColour')
const greenColour = document.getElementById('greenColour')
const redColour = document.getElementById('redColour')
const eraser = document.getElementById('eraser')
let currentColour = 'black'
 


greenColour.addEventListener ('click', () => {
    currentColour = '#90be6d'
})
blackColour.addEventListener ('click', () => {
    currentColour = 'black'
})
blueColour.addEventListener ('click', () => {
    currentColour = '#277da1'
})
redColour.addEventListener ('click', () => {
    currentColour = '#f94144'
})
eraser.addEventListener ('click', () => {
    currentColour = 'white'
})

//function to change colour on hover and setup the first 16x16 pixels of the sketchpad
function firstInitialisation () {
    for (j = 1; j <= 16; j++) {
        let gridRows = document.createElement('div');
            gridRows.classList.add("gridRows");
            sketchpad.appendChild(gridRows);
                for (i = 1; i <= 16; i++) {
                    let gridPixel = document.createElement('div');
                    gridPixel.classList.add("gridPixel");
                    gridRows.appendChild(gridPixel);
                    gridPixel.addEventListener('mouseover', () => {
                        gridPixel.style.backgroundColor = currentColour
                    })
                    reset.addEventListener('click', () => {
                    gridPixel.style.backgroundColor = "white"});
                }
    }
}

firstInitialisation ()






