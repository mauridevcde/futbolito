
export function api_get_AllEquipos() {
  let result = new Promise((resolve, reject) => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("htpp://ec2-3-144-74-245.us-east-2.compute.amazonaws.com:5050/futbolito/equiposGetAll", requestOptions)
      .then(response => response.text())
      .then(result => {
        //let data = JSON.parse(result)
        resolve(JSON.parse(result));
      })
      .catch(error => console.log('error', error));
  });
  return result;
}

export function api_post_Equipos(data) {
  console.log('api nuevo cliente VER:', data);

  let result = new Promise((resolve, reject) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      nombre: data.nombre,
      nro: data.nro
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    }; 

    fetch("htpp://ec2-3-144-74-245.us-east-2.compute.amazonaws.com:5050/futbolito/equiposPost/", requestOptions)
      .then(response => response.text())
      .then(result => { resolve(JSON.parse(result)); })
      .catch(error => console.log('error', error));
  })
  return result;
}

export function api_put_Equipo(data) {

  let result = new Promise((resolve, reject) => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "id": data.id,
        "nombre": data.nombre,
        "nro": data.nro
      });

      var requestOptions = {
          method: 'PUT',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
      };

      fetch("htpp://ec2-3-144-74-245.us-east-2.compute.amazonaws.com:5050/futbolito/equiposUpdate/", requestOptions)
          .then(response => response.text())
          .then(result => { resolve(JSON.parse(result)); })
          .catch(error => console.log('error', error));

  });
  return result;
}