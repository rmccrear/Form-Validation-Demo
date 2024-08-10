
function tooShort(firstName) {
    if(firstName.length < 6) {
        return true;
    } else {
        return false;
    }
}

function hasI(firstName) {
    if(firstName.includes("i")){
        return true;
    } else {
        return false;
    }
}

let marryEarlyElm = document.getElementById("marry-early");
let marryNowElm = document.getElementById("marry-now");
// This is the input element
let firstNameInput = document.getElementById("firstname");

function handleChangeInMarryEarly() {
    console.log("Hello world");
    // This is how I get the contents (value) of the input
    let input = firstNameInput.value;
    // is it tooShort?
    let isShort = tooShort(input);
    if(isShort) {
        marryEarlyElm.style.color = "green";
        console.log("You meet a mysterious stranger very soon!");
    } else {
        marryEarlyElm.style.color = "red";
        console.log("You will not marry soon!");
    }
}

function handleChangeInI() {
    let input = firstNameInput.value;
    let i = hasI(input);
    if(i) {
        marryNowElm.style.color = "green";
    } else {
        marryNowElm.style.color = "red";
    }
}

// Add an event listener
// (can listen for "input" or "change")
firstNameInput.addEventListener("input", handleChangeInMarryEarly)
// Add a second event listener.
firstNameInput.addEventListener("input", handleChangeInI)