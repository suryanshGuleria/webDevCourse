// variables to fetch all the elements from dom 

const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDispaly]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

// setting default values of few variables

let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider();
// set strengthCircle color to grey
setIndicator("#ccc"," 0 0 20px #ccc");


//set passwordLength (used to reflect password length screen in response to slider slide)
function handleSlider(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
    const min = inputSlider.min;
    const max = inputSlider.max;
    inputSlider.style.backgroundSize = ((passwordLength - min)*100/(max-min)) + "% 100%"
}

function setIndicator(color,shadow){
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = shadow;
    //shadow    
}


//function to generate random numbers and characters


function getRndInteger(min, max){
     return Math.floor(Math.random()*(max-min))+min;
}

function generateRandomNumber(){
    return getRndInteger(0,9);
}

function generateUpperCase(){
    return String.fromCharCode(getRndInteger(65,91))
}

function generateLowerCase() {  
    return String.fromCharCode(getRndInteger(97,123))
}

function generateSymbol(){
    const randNum = getRndInteger(0, symbols.length);
    return symbols.charAt(randNum);
}

//Working with CheckBoxes

function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if (uppercaseCheck.checked) hasUpper = true;
    if (lowercaseCheck.checked) hasLower = true;
    if (numbersCheck.checked) hasNum = true;
    if (symbolsCheck.checked) hasSym = true;
  
    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
      setIndicator("#0f0","0 0 20px #0f0" );
    } else if (
      (hasLower || hasUpper) &&
      (hasNum || hasSym) &&
      passwordLength >= 6
    ) {
        setIndicator("#ff0","0 0 20px #ff0");
    } else {
        setIndicator("#f00","0 0 20px #f00");
    }
}

function handleCheckBoxChange(){
    checkCount = 0;
    allCheckBox.forEach((checkbox)=>{
        if(checkbox.checked){
            checkCount++;
        }
    })


    //special condition

    if(passwordLength<checkCount){
        passwordLength = checkCount;
        handleSlider();
    }
}

allCheckBox.forEach((checkbox)=>{
     checkbox.addEventListener('change', handleCheckBoxChange);
})

// To copy the password to the clipboard

async function copyContent(){
    try{
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "copied";
    }
    catch(e){
        copyMsg.innerText = "Failed";
    }

    //to change visibility of copy span

    copyMsg.classList.add("active");

    setTimeout(()=>{
       copyMsg.classList.remove("active");
    },2000);
}


//To shuffle the password
function shufflePassword(array){
   //Fisher Yates Method
   for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
 let str = "";
 array.forEach((el) => (str += el));
 return str;
}

//Adding Event Listners


inputSlider.addEventListener('input', (e)=>{
    passwordLength = e.target.value;
    handleSlider();
})

copyBtn.addEventListener('click', ()=>{
    if(passwordDisplay.value){
        copyContent();
    }
})


generateBtn.addEventListener('click', ()=>{
    // if none of the checkbox are selected

    if(checkCount <= 0) return;

    if(passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider();
    }

    // to find new password

    // 1st remove old password

    password = "";

    // 2nd Let's put the checked(mandatory) stuff

    let funcArr = [];

    if(uppercaseCheck.checked) funcArr.push(generateUpperCase);

    if(lowercaseCheck.checked) funcArr.push(generateLowerCase);

    if(numbersCheck.checked) funcArr.push(generateRandomNumber);

    if(symbolsCheck.checked) funcArr.push(generateSymbol);

    // compulsoury addition

    for(let i = 0; i<funcArr.length; i++){
        password += funcArr[i]();
    }

    // remaining additions

    for(let i = 0; i<passwordLength - funcArr.length; i++){
        let randIndex = getRndInteger(0, funcArr.length);
        password += funcArr[randIndex]();
    }


    // shuffle the password

    password = shufflePassword(Array.from(password));
   
    // show in ui

    passwordDisplay.value = password;

    // calculate strength

    calcStrength();

})


