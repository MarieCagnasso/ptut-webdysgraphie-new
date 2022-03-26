$('document').ready(function () {
    let url = 'http://localhost:8080/';

    function ajoutMateriel(dataJson){
        $.ajax({
            url: url + 'materiel' ,
            data : dataJson,
            method: 'POST'
        })
            .done((data)=> {})
            .fail((data) => {})
    }
})