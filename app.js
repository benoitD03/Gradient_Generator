const colorInputs = document.querySelectorAll('.color');
const rangeInput = document.querySelector('.range-deg');
const rangeP = document.querySelector('.range-value');
const bodyBackground = document.body;


let inclinaison = 180;
let allColors = ["#E19932", "#3E96F6"];

rangeP.innerText = inclinaison + "°";
colorInputs[0].value = allColors[0];
colorInputs[0].style.background = allColors[0];
colorInputs[1].value = allColors[1];
colorInputs[1].style.background = allColors[1];
bodyBackground.style.background = `linear-gradient(${inclinaison}deg, ${allColors})`;

//Inclinaison
rangeInput.addEventListener('input', (e) => {
    inclinaison=e.target.value * 3.6;
    bodyBackground.style.background = `linear-gradient(${inclinaison}deg, ${allColors})`;

    rangeP.innerText = `${Math.floor(inclinaison)}°`;
})

