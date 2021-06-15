const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1"); 


// 현재 시각을 알려준다. 
function getTime(){
    const Today = new Date();
    const hours = 24 - Today.getHours();
    const minutes = 60 - Today.getMinutes();
    const seconds = 60 - Today.getSeconds();
    clockTitle.innerText = 
    `${hours < 10 ? `0${hours}` : hours }:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds}`;
}


function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();