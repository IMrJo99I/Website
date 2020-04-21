//API HEURE //Nom de l'API//

let currentHour = addZeros(new Date().getHours());
let currentMinute = addZeros(new Date().getMinutes());
let currentSec = addZeros(new Date().getSeconds());

setTime();

document.addEventListener("click", changeBackgroundColor, false);

function changeBackgroundColor() {
    if (new Date().getSeconds() % 2 === 0) {
        document.body.style.backgroundColor = "red";
    } else {
        document.body.style.backgroundColor= "blue";
    }
    document.removeEventListener("click", changeBackgroundColor, false);
}

setInterval(() => {
    setTime();
}, 1000);
function setTime() {
    currentHour = addZeros(new Date().getHours());
    currentMinute = addZeros(new Date().getMinutes());
    currentSec = addZeros(new Date().getSeconds());
    document.getElementById("spanHour").innerText = currentHour + " : " + currentMinute + " : " + currentSec;
}
function addZeros(nb) {
    if (nb < 10) {
        return "0" + nb;
    }
    return nb;
}
function toggleHour() {
    if (document.getElementById("spanHour").style.visibility === "hidden") {
        document.getElementById("spanHour").style.visibility = "visible";
    } else {
        document.getElementById("spanHour").style.visibility = "hidden";
    }
}