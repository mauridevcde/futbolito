export function api_get_AllJugadores() {
    let result = new Promise((resolve, reject) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://ec2-3-144-74-245.us-east-2.compute.amazonaws.com:5050/futbolito/jugadoresGetAll", requestOptions)
            .then(response => response.text())
            .then(result => {
                //let data = JSON.parse(result)
                resolve(JSON.parse(result));
            })
            .catch(error => console.log('error', error));
    });
    return result;
}

export function api_post_Jugadores(data) {
    console.log('api nuevo cliente VER:', data);

    let result = new Promise((resolve, reject) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            nombre: data.nombre,
            nro: data.nro,
            titular: data.titular,
            equipo_id: data.equipo_id,
            equipo_nombre: data.equipo_nombre
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://ec2-3-144-74-245.us-east-2.compute.amazonaws.com:5050/futbolito/jugadorPost", requestOptions)
            .then(response => response.text())
            .then(result => { resolve(JSON.parse(result)); })
            .catch(error => console.log('error', error));
    })
    return result;
}

export function api_put_Jugadores(data) {

    let result = new Promise((resolve, reject) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            id: data.id,
            nombre: data.nombre,
            nro: data.nro,
            titular: data.titular,
            equipo_id: data.equipo_id,
            equipo_nombre: data.equipo_nombre
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://ec2-3-144-74-245.us-east-2.compute.amazonaws.com:5050/futbolito/jugadorUpdate", requestOptions)
            .then(response => response.text())
            .then(result => { resolve(JSON.parse(result)); })
            .catch(error => console.log('error', error));

    });
    return result;
}