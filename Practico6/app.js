const fetch = require("node-fetch");

fetch("https://swapi.dev/api/people/1")
  .then(promesaFetch => promesaFetch.json())
  .then(contenido => console.log(contenido));

  // se conecta a una api en linea para consultar un dato JSON