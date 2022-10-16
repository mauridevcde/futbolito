export function api_get_AllEntrenador() {
  let result = new Promise((resolve, reject) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://ec2-18-216-42-40.us-east-2.compute.amazonaws.com:5050/futbolito/entrenadoresGetAll", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        //let data = JSON.parse(result)
        resolve(JSON.parse(result));
      })
      .catch((error) => console.log("error", error));
  });
  return result;
}

export function api_post_Entrenador(data) {
  console.log("api nuevo cliente VER:", data);

  let result = new Promise((resolve, reject) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      nombre: data.nombre,
      equipo_id: data.equipo_id,
      equipo_nombre: data.equipo_nombre,
      estado: true,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://ec2-18-216-42-40.us-east-2.compute.amazonaws.com:5050/futbolito/entrenadorPost", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        resolve(JSON.parse(result));
      })
      .catch((error) => console.log("error", error));
  });
  return result;
}

export function api_put_Entrenador(data) {

  let result = new Promise((resolve, reject) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      id: data.id,
      nombre: data.nombre,
      equipo_id: data.equipo_id,
      equipo_nombre: data.equipo_nombre,
      estado: true,

    });

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://ec2-18-216-42-40.us-east-2.compute.amazonaws.com:5050/futbolito/entrenadorUpdate", requestOptions)
      .then(response => response.text())
      .then(result => { resolve(JSON.parse(result)); })
      .catch(error => console.log('error', error));

  });
  return result;
}
