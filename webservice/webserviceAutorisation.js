let url = 'http://localhost:8080/';

export default function ajoutAutorisation(dataJson){
    $.ajax({
        url: url + 'autorisation' ,
        data : dataJson,
        method: 'POST'
    })
        .done((data)=> {})
        .fail((data) => {})
}
