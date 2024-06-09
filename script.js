
let COLORMODE = false;
let OPACITYMODE = false;
const divContainer = document.querySelector("#div-container");
const sliderText = document.querySelector("#slider-value");

const createDiv = function(flexBasis) {

    let flex = 100/flexBasis;

    newDiv = document.createElement("div");
    newDiv.classList.add("grid-div");
    newDiv.style.flexBasis = `${flex}%`;

    divContainer.appendChild(newDiv);
}


const colorButton = document.querySelector(".color-mode");
colorButton.addEventListener("click", () => {

    if (COLORMODE) {
        COLORMODE = false;
        colorButton.style.backgroundColor = "";
    }
    else {
        COLORMODE = true;
        colorButton.style.backgroundColor = "green";
    }
})

const opacityButton = document.querySelector(".opacity-mode");
opacityButton.addEventListener("click", () => {
    if (OPACITYMODE) {
        OPACITYMODE=false;
        opacityButton.style.backgroundColor = "";    
    }
    else {
        OPACITYMODE=true;
        opacityButton.style.backgroundColor = "green";
    }
})


const resetButton = document.querySelector(".grid-resetter");
resetButton.addEventListener("click", () => {

    divContainer.textContent = "";

    sliderText.textContent = 0;

    mySlider.value = 16;
});


const mySlider = document.querySelector(".slider");
mySlider.onchange = function() {

    divContainer.textContent = "";

    let sliderValue = mySlider.value;
    sliderText.textContent = sliderValue;
    let divCounter = sliderValue * sliderValue;

    for (i = 0; i < divCounter; i++) {
        createDiv(sliderValue)
    }

    let gridDivs = document.querySelectorAll(".grid-div");
    gridDivs.forEach(div =>  div.addEventListener("mouseenter", (e) => {
        e.stopPropagation();

        if (OPACITYMODE) {
            let opacity = Number(div.style.opacity);
            if (opacity <= 10) {
                opacity += 0.1;
            }
            div.style.opacity = `${opacity}`
        }

        if (!COLORMODE) {div.style.backgroundColor = "black";}
        else {
            let randomNum = Math.floor(Math.random() * 888888);
            div.style.backgroundColor = `#${randomNum}`}
        
        
    }));
};



