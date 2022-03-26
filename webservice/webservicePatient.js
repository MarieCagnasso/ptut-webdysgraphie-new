$('document').ready(function () {
    let url = 'http://localhost:8080/';

    function ajoutPatient(dataJson){
        $.ajax({
            url: url + 'patient' ,
            data : dataJson,
            method: 'POST'
        })
            .done((data)=> {})
            .fail((data) => {})
    }
})