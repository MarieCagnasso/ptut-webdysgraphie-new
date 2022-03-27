function startTest(){
    if(localStorage.getItem("analyse")==="BHK") {
        $( "#container" ).load( "page/bhkTest.html" , function (){
            startTimer();
        });
    } else $( "#container" ).load( "page/consignePangramme.html" );
}

function startTimer(){
    const textCorrection = (element, value) => {
        element.innerHTML = value < 10 ? "0" + value : value;
    }
    let disMinutes = document.querySelector(".minute");
    let disSeconds = document.querySelector(".seconds");
    let circleSvg = document.querySelector("circle");
    let interval;
// Temps du timer
    let totalTime = 5 * 60 ;
    disMinutes.innerHTML = "00";
    disSeconds.innerHTML = "00";

    circleSvg.style.animation = `Loop ${totalTime}s linear 1s`;
    circleSvg.style.animationPlayState = "running";

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
            alert("Temps écoulé.")
            clearInterval(interval);
        }
    }, 1000);
    return totalTime;
}