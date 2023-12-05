const countValue = document.querySelector('#counter');

function increment(){
    let value = parseInt(countValue.innerText);
    value += 1;
    countValue.innerText = value;
}

function decrement(){
    let value = parseInt(countValue.innerText);
    value -= 1;
    countValue.innerText = value;
}