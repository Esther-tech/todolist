let darkMode = localStorage.getItem("darkMode");
const darkModeButton = document.getElementById("toggle-dark");

//Functions
const darkModeOn = () => {
    //add class to body
    document.body.classList.add("darkmode");
    //update localStorage
    localStorage.setItem("darkMode", "on");
}

const darkModeOff = () => {
    //remove class from body
    document.body.classList.remove("darkmode");
    //update local Storage
    localStorage.setItem("darkMode", null)
}

if (darkMode === "on") {
    darkModeOn();
} else {
    darkModeOff();
}

//Event listener
darkModeButton.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "on") {
        darkModeOn();
    } else {
        darkModeOff();
    }
});