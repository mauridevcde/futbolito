export function api_get_jugadasAll() {
    let result = new Promise((resolve, reject) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("htpp://ec2-3-144-74-245.us-east-2.compute.amazonaws.com:5050/futbolito/jugadasALLGet/", requestOptions)
            .then(response => response.text())
            .then(result => {
                //let data = JSON.parse(result)
                resolve(JSON.parse(result));
            })
            .catch(error => console.log('error', error));
    });
    return result;
}

export function api_post_jugadasAll(data) {
    console.log('api jugadas All post:', data);

    let result = new Promise((resolve, reject) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            nombre: data.nombre,
            jugadas : data.jugadas
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("htpp://ec2-3-144-74-245.us-east-2.compute.amazonaws.com:5050/futbolito/jugadasAllPost", requestOptions)
            .then(response => response.text())
            .then(result => { resolve(JSON.parse(result)); })
            .catch(error => console.log('error', error));
    })
    return result;
}

export function api_delete_jugadasAll(data) {

    let result = new Promise((resolve, reject) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            id: data.id,

        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("/futbolito/jugadasAllDelete", requestOptions)
            .then(response => response.text())
            .then(result => { resolve(JSON.parse(result)); })
            .catch(error => console.log('error', error));

    });
    return result;
}