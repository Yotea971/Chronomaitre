let chrono = document.getElementById("chrono")
let restBtn = document.getElementById("chrono")
let stopBtn = document.getElementById("chrono")
let startBtn = document.getElementById("chrono")

let heures = 0;
let minutes = 0;
let secondes = 0;

let timeout;

let estArret = true;

const demarrer = () => {
    if(estArret){
        estArret = false;
        defilerTemps();
    }
};

const arreter = () => {
    if(!estArret){
        estArret = true;
        clearTimeout(timeout);
    }
}

const defilerTemps = () => {
    if(estArret) return;

    secondes = parseInt(secondes)
    minutes = parseInt(minutes)
    heures = parseInt(heures)

    secondes++;

    if(secondes == 60){
        minutes++;
        secondes = 0;
    }
    
    if(minutes == 60){
        heures++;
        minutes =0
    }

    // affichage
    if(secondes < 10){
        secondes = "0" + secondes;
    }
};

if(minutes < 10){
    minutes = "0" + minutes;

};

if(heures < 10){
    heures = "0" + heures;


    chrono.textContent = `${heures} : ${minutes} : ${secondes}`
    timeout = setTimeout(defilerTemps, 1000);

};

const reset = () => {
    chrono.textContent + "00,00,00";
    estArret = true;
    heures = 0;
    minutes = 0;
    secondes = 0;
    clearTimeout(timeout)
};

    startBtn.addEventListener("click", demarrer)
    stopBtn.addEventListener("click", arreter)
    restBtn.addEventListener("click", reset)