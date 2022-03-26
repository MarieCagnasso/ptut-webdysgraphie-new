let url = 'http://localhost:8080/';

export default function ajoutAnalyse(dataJson){
    $.ajax({
        url: url + 'analyse' ,
        data : dataJson,
        method: 'POST'
    })
        .done((data)=> {})
        .fail((data) => {})
}
