
let COLORMODE = "black";
const divContainer = document.querySelector("#div-container");
const sliderText = document.querySelector("#slider-value");

const createDiv = function(flexBasis) {

    let flex = 100/flexBasis;

    newDiv = document.createElement("div");
    newDiv.classList.add("div-grid");
    newDiv.style.flexBasis = `${flex}%`;

    divContainer.appendChild(newDiv);
}


const colorButton = document.querySelector(".color-mode");
colorButton.addEventListener("click", () => {

    if (COLORMODE === "black") {
        COLORMODE = "color";
        colorButton.textContent = "B/W mode";
    }
    else {
        COLORMODE = "black";
        colorButton.textContent = "Color Mode";
    }
})


let resetButton = document.querySelector(".grid-resetter");
resetButton.addEventListener("click", () => {

    divContainer.textContent = "";

    sliderText.textContent = 0;

    mySlider.value = 16;
});


let mySlider = document.querySelector(".slider");
mySlider.onchange = function() {

    divContainer.textContent = "";

    let sliderValue = mySlider.value;
    sliderText.textContent = sliderValue;
    let divCounter = sliderValue * sliderValue;

    for (i = 0; i < divCounter; i++) {
        createDiv(sliderValue)
    }

    let gridDivs = document.querySelectorAll(".div-grid");
    gridDivs.forEach(div =>  div.addEventListener("mouseenter", (e) => {
        e.stopPropagation();

        if (COLORMODE === "black") {div.style.backgroundColor = "black";}
        else {
            let randomNum = Math.floor(Math.random() * 888888);
            console.log(randomNum);
            div.style.backgroundColor = `#${randomNum}`}
    }));
};



