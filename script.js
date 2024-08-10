
function tooShort(firstName) {
    if(firstName.length < 6) {
        return true;
    } else {
        return false;
    }
}

let marryEarlyElm = document.getElementById("marry-early");
let firstNameInput = document.getElementById("firstname");

function handleChangeInMarryEarly() {
    console.log("Hello world");
}

firstNameInput.addEventListener("change", handleChangeInMarryEarly)