const output =document.getElementById('output')
const sketchpad = document.getElementById('sketchpad');
const slider = document.getElementById('myRange');
let displayDimensions = document.getElementById('displayDimensions');
const reset = document.getElementById('reset')
const gridDimensionText = document.getElementById('gridDimensionText')
const blackColour = document.getElementById('blackColour')
const blueColour = document.getElementById('blueColour')
const greenColour = document.getElementById('greenColour')
const redColour = document.getElementById('redColour')
const eraser = document.getElementById('eraser')
let colourNotification = document.getElementById('colourNotification')
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
//inital grid dimensions
let gridDimensions = 16
generateGrid();
//function to change colour on hover and setup the first 16x16 pixels of the sketchpad
function generateGrid () {
    for (j = 1; j <= gridDimensions; j++) {
        let gridRows = document.createElement('div');
            gridRows.classList.add("gridRows");
            sketchpad.appendChild(gridRows);
                for (i = 1; i <= gridDimensions; i++) {
                    //makes a 16x16 grid
                    let gridPixel = document.createElement('div');
                    let isMouseDown = false;
                    gridPixel.classList.add("gridPixel");
                    gridRows.appendChild(gridPixel);
                    //toggles colour to be true on mousedown
                    sketchpad.addEventListener('mousedown', () => {
                        isMouseDown = true;
                    })
                    //allows gridpixels to be coloured
                    gridPixel.addEventListener('mouseover', () => {
                        if (isMouseDown == true) {
                                gridPixel.style.backgroundColor = currentColour
                            }
                    });
                    //toggles colour to be false on mouseup
                    sketchpad.addEventListener('mouseup', () => {
                        isMouseDown = false;
                    })
                    //converts all gridpixels to white
                    reset.addEventListener('click', () => {
                    gridPixel.style.backgroundColor = "white"});
                }
    }
}
slider.addEventListener('change', () => {
    sketchpad.innerHTML= ""
    gridDimensions = slider.value;
    generateGrid ()
    gridDimensionText.textContent = slider.value + 'X' + slider.value;
    colourNotification.textContent = "You have selected" + currentColour
})

gridDimensionText.textContent = slider.value + 'X' + slider.value;