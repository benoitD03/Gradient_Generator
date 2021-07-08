const colorInputs = document.querySelectorAll('.color');
const colorContainer = document.querySelector('.color-container')
const rangeInput = document.querySelector('.range-deg');
const rangeP = document.querySelector('.range-value');
const bodyBackground = document.body;
const plusBtn = document.querySelector('.plus');
const minusBtn = document.querySelector('.minus');
const alertMsg = document.querySelector('span');


let inclinaison = 180;
let allColors = ["#E19932", "#3E96F6"];
let indexColor = 3;

//******* Initialisation des 2 1eres couleurs *******
rangeP.innerText = inclinaison + "°";
colorInputs[0].value = allColors[0];
colorInputs[0].style.background = allColors[0];
colorInputs[1].value = allColors[1];
colorInputs[1].style.background = allColors[1];
bodyBackground.style.background = `linear-gradient(${inclinaison}deg, ${allColors})`;

//******* Inclinaison *******
rangeInput.addEventListener('input', (e) => {
    inclinaison=e.target.value * 3.6;
    bodyBackground.style.background = `linear-gradient(${inclinaison}deg, ${allColors})`;

    rangeP.innerText = `${Math.floor(inclinaison)}°`;
})

//******* Ajout et Suppression de couleurs
plusBtn.addEventListener('click', moreLessColor);
minusBtn.addEventListener('click', moreLessColor);

function moreLessColor(e) {

    alertMsg.innerText = "";
    const colorInputs = document.querySelectorAll('.color');
    const randomColor = Math.floor(Math.random()*18379314).toString(16);
    //AJOUT
    if (e.target.className === "plus") {

        if (colorInputs.length >= 8) {
            return;
        }

        const newColor = document.createElement('input');
        newColor.value = `#${randomColor.toUpperCase()}`;
        newColor.style.background = `#${randomColor}`;
        newColor.setAttribute('data-index', indexColor);
        newColor.setAttribute('class', 'color');
        newColor.setAttribute('maxlength', 7);
        colorContainer.appendChild(newColor);

        allColors.push(newColor.value);
        bodyBackground.style.background = `linear-gradient(${inclinaison}deg, ${allColors})`;
        indexColor++;
 
    }
    //SUPPRESSION
    else if (e.target.className === "minus") {

        if (colorInputs.length === 2) {
            alertMsg.innerText = "Il est nécessaire d'avoir 2 couleurs minimum";
        } else {
            colorInputs[colorInputs.length -1].remove();
            allColors.pop();
            bodyBackground.style.background = `linear-gradient(${inclinaison}deg, ${allColors})`;
            indexColor--;
        }
    }

}

