// slider


divCounter = 16;
divContainer = document.querySelector("#div-container");
sliderText = document.querySelector("#slider-value");

const createDiv = function(i, flexBasis) {

    let flex = 100/flexBasis;

    newDiv = document.createElement("div");
    newDiv.classList.add("div-grid");
    newDiv.style.flexBasis = `${flex}%`;

    divContainer.appendChild(newDiv);
}

let resetButton = document.querySelector("#grid-resetter");
resetButton.addEventListener("click", () => {
    divContainer.textContent = "";
    sliderText.textContent = 0;
    mySlider.value = 0;
});

let mySlider = document.querySelector(".slider");
mySlider.onchange = function() {

    divContainer.textContent = "";
    let sliderValue = mySlider.value;
    sliderText.textContent = sliderValue;

    divCounter = sliderValue * sliderValue;
    for (i = 0; i < divCounter; i++) {
        createDiv(i, sliderValue)
    }

    let gridDivs = document.querySelectorAll(".div-grid");
    gridDivs.forEach(div =>  div.addEventListener("mouseenter", (e) => {
        e.stopPropagation();
        e.target.id = "div-black";
    }));
};



