// import  ajoutAnalyse from '/webservice/webserviceAnalyse.js';
// import start from "./assets/js/timer";
$(document).ready(function() {
    $( "#container" ).load( "page/analyseChoix.html" );

})

function analysechoice(choix){
    // ajoutAnalyse({});
    localStorage.setItem("analyse",choix);
    $( "#container" ).load( "page/materiel.html" );

}
function materielchoice(choix){
    // ajoutAnalyse({});
    $( "#container" ).load( "page/autorisation.html" );
}

function autorisation(){
    // ajoutAnalyse({});
    $( "#container" ).load( "page/infoPatient.html" );
}
function information(){
    let age = $("#addPatientage").val();
    let nom = $("#addPatientLibelle").val();
    let classe = $("#addPatientclasse").val();
    let sexe = $("#addPatientsexe").val();
    let dateExam = $("#addPatientdateExamen").val();
    let anonymat = $("#addPatientAnonymat").val();
    let evaluation = $("#addPatientEvaluation").val();
    let evaluationComparer = $("#addPatientEvaluationAComparer").val();
    console.log(age,nom,classe,sexe,dateExam,anonymat,evaluation,evaluationComparer)

    if (age==''){
    }if (nom==''){
    }if (classe==''){
    }if (sexe==''){
    }if (dateExam==''){
    }if (anonymat==''){
    }if (evaluation==''){
    }if (evaluationComparer==''){
    }

    if(localStorage.getItem("analyse")==="BHK") {
        $( "#container" ).load( "page/consigneBHK.html" );
    } else $( "#container" ).load( "page/consignePangramme.html" );
}
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

    let totalTime = 1 * 60 ;
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
            console.log("fini")
            alert("Temps écoulé.")
        }
    }, 1000);
    return totalTime;
}