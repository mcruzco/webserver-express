const http = require('http');


http.createServer((req,res) => {

  res.writeHead(200,{'ContentType':'application/json'});
  
  let salida = {
    nombre: "miguel",
    url: req.url,
    edad: 8
  }
  res.write(JSON.stringify(salida));
  res.end();

})
.listen(8080);

console.log('Escuchando el puerto 8080');