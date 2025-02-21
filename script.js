const output =document.getElementById('output')
const sketchpad = document.getElementById('sketchpad');

const slider = document.getElementById('myRange');
let displayDimensions = document.getElementById('displayDimensions');

//function will record slider value as it moves (check)
//the function will add the sqrt to slide.value of empty divs that will act as a the pixels
//divs will automatical have the flex:1 property to take the most amount of space using CCS and class selection
//after each slider.value change, the function will delete all divs in the sketchpad container and reinput new divs equal to the value of new slide.value
slider.addEventListener('mousedown',function() {
    slider.addEventListener('mousemove',function() { 
        console.log('slider value ' + slider.value);
        let gridPixel = document.createElement('div');
        gridPixel.style.width = "6px"
        gridPixel.classList.add("gridPixel");
        gridPixel.style.backgroundColor = "black"
        sketchpad.appendChild(gridPixel);
    })
})

