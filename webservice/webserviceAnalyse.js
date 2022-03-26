$('document').ready(function () {
    let url = 'http://localhost:8080/';

    function ajoutAunalyse(dataJson){
        $.ajax({
            url: url + 'analyse' ,
            data : dataJson,
            method: 'POST'
        })
            .done((data)=> {})
            .fail((data) => {})
    }
})