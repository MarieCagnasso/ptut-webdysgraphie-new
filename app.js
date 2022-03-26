// import  ajoutAnalyse from '/webservice/webserviceAnalyse.js';

$(document).ready(function() {
    $( "#container" ).load( "page/analyseChoix.html" );

})

function analysechoice(choix){
    // ajoutAnalyse({});
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
}
