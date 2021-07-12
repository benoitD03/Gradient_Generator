const colorInputs = document.querySelectorAll('.color');
const colorContainer = document.querySelector('.color-container')
const rangeInput = document.querySelector('.range-deg');
const rangeP = document.querySelector('.range-value');
const bodyBackground = document.body;
const plusBtn = document.querySelector('.plus');
const minusBtn = document.querySelector('.minus');
const alertMsg = document.querySelector('span');
const randomBtn = document.querySelector('.random');
const copyCode = document.querySelector('.copyCode');
const copyButton = document.querySelector('.copyButton');


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
copyCode.value = `background : linear-gradient(${inclinaison}deg, ${allColors})`;

//******* Inclinaison *******
rangeInput.addEventListener('input', (e) => {
    inclinaison=e.target.value * 3.6;
    bodyBackground.style.background = `linear-gradient(${inclinaison}deg, ${allColors})`;
    copyCode.value = `background : linear-gradient(${inclinaison}deg, ${allColors})`;
    rangeP.innerText = `${Math.floor(inclinaison)}°`;
})

//******* Ajout et Suppression de couleurs
plusBtn.addEventListener('click', addRemoveColor);
minusBtn.addEventListener('click', addRemoveColor);

function addRemoveColor(e) {

    alertMsg.innerText = "";
    const inputsColor = document.querySelectorAll('.color');
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    //AJOUT
    if (e.target.className === "plus") {

        if (inputsColor.length >= 8) {
            alertMsg.innerText = "Vous ne pouvez pas générer plus de 8 couleurs";
            return;
        }

        const newColor = document.createElement('input');
        newColor.value = `#${randomColor.toUpperCase()}`;
        newColor.style.background = `#${randomColor}`;
        newColor.setAttribute('data-index', indexColor);
        newColor.setAttribute('class', 'color');
        newColor.setAttribute('maxlength', 7);
        console.log(newColor);
        colorContainer.appendChild(newColor);

        allColors.push(newColor.value);
        bodyBackground.style.background = `linear-gradient(${inclinaison}deg, ${allColors})`;
        copyCode.value = `background : linear-gradient(${inclinaison}deg, ${allColors})`;
        indexColor++;
        
        newColor.addEventListener('input', updateColors);
        

    }

    //SUPPRESSION
    else if (e.target.className === "minus") {

        if (inputsColor.length === 2) {
            alertMsg.innerText = "Vous devez sélectionner au minimum 2 couleurs.";
        } else {
            allColors.pop();
            inputsColor[inputsColor.length -1].remove();
            indexColor--;
            bodyBackground.style.background = `linear-gradient(${inclinaison}deg, ${allColors})`;
            copyCode.value = `background : linear-gradient(${inclinaison}deg, ${allColors})`;
            console.log(inputsColor.length);
        }
    }
    inputsColor.forEach(input => {
        input.addEventListener('input', updateColors);
    });

}

colorInputs.forEach(input => {
    input.addEventListener('input', updateColors);
});

//******* Rentrer manuellement des couleurs  *******
function updateColors(e) {

    let currentIndex = e.target.getAttribute('data-index');
    
    e.target.value = e.target.value.toUpperCase();
    allColors[currentIndex - 1] = e.target.value.toUpperCase();
    e.target.style.background = allColors[currentIndex - 1];
    bodyBackground.style.background = `linear-gradient(${inclinaison}deg, ${allColors})`;
    copyCode.value = `background : linear-gradient(${inclinaison}deg, ${allColors})`;

}

//******* Afficher des couleurs aléatoires *******
randomBtn.addEventListener('click', () => {

    const colorsInputs = document.querySelectorAll('.color');

    for(let i = 0; i < allColors.length; i++) {

        allColors[i] = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        colorsInputs[i].value = allColors[i].toUpperCase();
        colorsInputs[i].style.background = allColors[i].toUpperCase();
        bodyBackground.style.background = `linear-gradient(${inclinaison}deg, ${allColors})`;
        copyCode.value = `background : linear-gradient(${inclinaison}deg, ${allColors})`;

    }
})



