// variables
const headSelect = document.querySelector('.head');
const tempSection = document.querySelector('.temp');
const lenSection = document.querySelector('.len');
const massSection = document.querySelector('.mass');
const inputField = document.querySelector('.input');
const resultField = document.querySelectorAll('.results'); //returns a nodeList: a collection of DOM elements 
const tempUnitInput = document.querySelector('#units_temp');
const tempUnitResult = document.querySelector('#units_temps');
const lenUnitInput = document.querySelector('#units_len');
const lenUnitResult = document.querySelector('#units_lens');
const massUnitInput = document.querySelector('#units_mass');
const massUnitResult = document.querySelector('#units_masss');
const convertBtn = document.querySelector('#convert');
const clearBtn = document.querySelector('#clear');

// Changing head opt acc to their values
headSelect.addEventListener('change', () => {
  const selectedOption = headSelect.value;

  // Hide all sections
  tempSection.style.display = 'none';
  lenSection.style.display = 'none';
  massSection.style.display = 'none';

  // Show the selected section based on the option value
  if (selectedOption === 'Temperature') {
    tempSection.style.display = 'block';
    lenSection.style.display = 'none';
    massSection.style.display = 'none';
  } else if (selectedOption === 'Length') {
    tempSection.style.display = 'none';
    lenSection.style.display = 'block';
    massSection.style.display = 'none';
  } else if (selectedOption === 'Mass') {
    tempSection.style.display = 'none';
    lenSection.style.display = 'none';
    massSection.style.display = 'block';
  }
});

// convert button functionality
convertBtn.addEventListener('click', () => {
  const selectedOption = headSelect.value;

  if (selectedOption === 'Temperature') {
    convertTemperature();
  } else if (selectedOption === 'Length') {
    convertLength();
  } else if (selectedOption === 'Mass') {
    convertMass();
  }
});

// Add event listener to the clear button
clearBtn.addEventListener('click', () => {
  inputField.value = '0'; // for input
  resultField[0].value = '0' // for temp
  resultField[1].value = '0' // for length
  resultField[2].value = '0' // for mass
});

// Temperature 
function convertTemperature() {
  const inputValue = parseFloat(inputField.value);
  const inputUnit = tempUnitInput.value;
  const resultUnit = tempUnitResult.value;

  let result = 0;

  
  switch(inputUnit+resultUnit){
    //celcius
    case 'CelciusCelcius':
        result =inputValue;
        break;
    case 'CelciusFarenhite':
        result = (inputValue * 9 / 5) + 32;
        break;
    case 'CelciusKelvin':
        result = inputValue + 273.15;
        break;
    //farenhite    
    case 'FarenhiteCelcius':
        result = (inputValue - 32) * 5 / 9;
        break;
    case 'FarenhiteFarenhite':
        result = inputValue;
        break;
    case 'FarenhiteKelvin':
        result = (inputValue + 459.67) * 5 / 9;
        break
    // kelvin
    case 'KelvinCelcius':
        result = inputValue - 273.15;
        break
    case 'KelvinFarenhite':
        result = (inputValue * 9 / 5) - 459.67;
        break
    case 'KelvinKelvin':
        result = inputValue;
        break       
    
  }
  resultField[0].value = result.toFixed(2);  //Note resultField is a Nodelist thats why in a [(.results) element] temperture is the 1st item so we assign its result to its appropriate field
  
  
}

// Length 
function convertLength() {
  const inputValue = parseFloat(inputField.value);
  const inputUnit = lenUnitInput.value;
  const resultUnit = lenUnitResult.value;

  let result = 0;

  
  switch(inputUnit+resultUnit){
    //meters
    case 'MetersMeters':
        result = inputValue;
        break;
    case 'MetersKilometers':
        result = inputValue / 1000;
        break;
    case 'MetersCentimeters':
        result = inputValue * 100;
        break;
    //Kilometers
    case 'KilometersMeters':
        result = inputValue * 1000;
        break;   
    case 'KilometersKilometers':
        result = inputValue;
        break;   
    case 'KilometersCentimeters':
        result = inputValue * 100000;
        break;   
    //centimeters
    case 'CentimetersMeters':
        result = inputValue / 100;
        break
    case 'CentimetersKilometers':
        result = inputValue / 100000;
        break
    case 'CentimetersCentimeters':
        result = inputValue;
        break
}

  resultField[1].value = result.toFixed(2);  //Note resultField is a Nodelist thats why in a [(.results) element] Length is the 2nd item so we assign its result to its appropriate field
  
}

// Mass 
function convertMass() {
  const inputValue = parseFloat(inputField.value);
  const inputUnit = massUnitInput.value;
  const resultUnit = massUnitResult.value;

  let result = 0;


  switch(inputUnit+resultUnit){
    //kg
    case 'KgKg':
        result = inputValue;
        break;
    case 'Kggrams':
        result = inputValue * 1000;
        break;
    case 'KgPonds':
        result = inputValue * 2.20462;
        break;
    //grams
    case 'gramsKg':
        result = inputValue / 1000;
        break;   
    case 'gramsgrams':
        result = inputValue;
        break;   
    case 'gramsPonds':
        result = inputValue * 0.00220462;
        break;   
    //Ponds
    case 'PondsKg':
        result = inputValue * 0.453592;
        break
    case 'Pondsgrams':
        result = inputValue / 0.00220462;
        break
    case 'PondsPonds':
        result = inputValue;
        break
}
  
  resultField[2].value = result.toFixed(2);  //Note resultField is a Nodelist thats why in a [(.results) element] Mass is the 3rd item so we assign its result to its appropriate field
  
} 
