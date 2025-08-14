const anaSecond = document.querySelector("[data-second-hand]");
const anaMinute = document.querySelector("[data-minute-hand]");
const anaHour = document.querySelector("[data-hour-hand]");




function setClock() {
    const currentDate = new Date();

    const theSecond = currentDate.getSeconds();
    const theMinutes = currentDate.getMinutes();
    const theHours = currentDate.getHours();

    const secoundRatio = theSecond / 60;
    const minuteRatio = (secoundRatio +theMinutes) / 60;
    const hourRatio = ( minuteRatio +theHours ) / 12;
    setRatio(anaSecond,secoundRatio);
    setRatio(anaMinute,minuteRatio);
    setRatio(anaHour,hourRatio);


}


function setRatio (elem, rotationRatio){
    elem.style.setProperty("--rotation", rotationRatio * 360);

}

setInterval(setClock, 1000);

setClock();