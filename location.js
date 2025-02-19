let posicion = navigator.geolocation.getCurrentPosition(posicion=>{console.log(posicion.coords.longitude);console.log(posicion.coords.latitude)});

let latitud = posicion.coords.longitude
let longitud = posicion.coords.latitude