let url = 'http://localhost:8081/';
function analysechoice(choix){
    let oldtoken = localStorage.getItem('token')
    if ( oldtoken!=null){
        console.log('token old',oldtoken)
        deleteEnregistrement();
    }
    ajoutAnalyse(JSON.stringify({typeAnalyse:choix}))
    localStorage.setItem("analyse",choix);

}
function deleteEnregistrement(){
    $.ajax({
        url : url + 'remove',
        data: {'token':localStorage.getItem('token')},
        method: 'DELETE',
        contentType: 'application/json',
    }).done((data)=>{
        console.log("sucess : ",data)
    }).fail((data) =>{
        console.log("fail : ",data)
    })
}
function ajoutAnalyse(dataJson){
    console.log(dataJson)
    $.ajax({
        url: url + 'analyse',
        data: dataJson,
        method: 'POST',
        contentType: 'application/json',

        success: (data) => {
            console.log(data, data.token)
            localStorage.setItem("token", data.token);
            $("#container").load("page/materiel.html");
        },
        error: (data) => {
            console.log('erreur : ', data)
            $("#container").load("page/materiel.html");
        }
    })
    // $.ajax({
    //     url: url + 'analyse' ,
    //     data : dataJson,
    //     method: 'POST',
    //     contentType:'application/json'
    // })
    //     .done((data)=> {
    //         console.log(data,data.token)
    //         localStorage.setItem("token",data.token);
    //         $( "#container" ).load( "page/materiel.html" );
    //     })
    //     .fail((data) => {
    //         console.log('erreur : ' ,data)
    //     })
}
