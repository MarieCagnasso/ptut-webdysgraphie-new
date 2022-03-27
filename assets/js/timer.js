// If anyone going through my code then it might look kind of messy to you coz I'm a beginner 😅, your suggestions, improvements(making the code shorter) will be welcomed 😇. Thank You!

// getting Display minutes and seconds elements
const disMinutes = document.querySelector(".minute");
const disSeconds = document.querySelector(".seconds");

const circleSvg = document.querySelector("circle");

// making the timer
let interval;
let totalTime;

function textCorrection(element, value) {
    element.innerHTML = value < 10 ? "0" + value : value;
}

// making the start button work
export default function start (){
    console.log('start')
    totalTime = 5 * 60 ;

    circleSvg.style.animation = `Loop ${totalTime}s linear 1s`;
    circleSvg.style.animationPlayState = "running";
    disMinutes.innerHTML = "00";
    disSeconds.innerHTML = "00";


    interval = setInterval(() => {
        const minutes = Math.floor(totalTime / 60);
        const seconds = totalTime % 60;

        if (totalTime <= 10) {
            circleSvg.style.stroke = "var(--clr-primary)";
            disMinutes.style.animation = "popup 800ms infinite ease-in-out";
            disMinutes.style.animationPlayState = "running";

            disSeconds.style.animation = "popup 800ms infinite ease-in-out";
            disSeconds.style.animationPlayState = "running";
        } else {
            circleSvg.style.stroke = "var(--clr-remaining)";
            disMinutes.style.animation = "none";
            disSeconds.style.animation = "none";
        }

        textCorrection(disMinutes, minutes);
        textCorrection(disSeconds, seconds);

        if (totalTime > 0) {
            totalTime--;
        } else {
            circleSvg.style.animation = "none";
        }
    }, 1000);


    return totalTime;
}