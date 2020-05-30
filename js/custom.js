//create a variable to monitor the input checkbox
const colorSwitch = document.getElementById("input-color-switch");
//create a variable to monitor the color mode
const colorMode = document.getElementById("color-mode");

//when the input is clicked verify the state of the checkbox
colorSwitch.addEventListener("click", checkMode);

// Check which state the checkbox is in.
function checkMode() {
    //if it is checked, enable the light mode by adding the class (light-mode) to the body.
    if (colorSwitch.checked) {
        lightModeOn();
        colorMode.textContent = "Light Mode";
    } else {
        // if it is not checked remove light mode by removing the class (light-mode) from the body.
        darkModeOff();
        colorMode.textContent = "Dark Mode";
    }
}

function lightModeOn() {
    document.body.classList.add("light-mode");
}

function darkModeOff() {
    document.body.classList.remove("light-mode");
}
// -------- End Checkbox for change theme --------
