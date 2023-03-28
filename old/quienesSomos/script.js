fetch('http://localhost:3000/pruebaCargar.json')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
   /*.then(response => response.json())
   .then(data => console.log(data))
   .then(data => {
      const contenedorDescripcion = document.querySelector('#contenedorDescripcion');
      data.quienesSomos.forEach(elemento => {
         const p = document.createElement('p');
         p.textContent = `${elemento.descripcion}`;
         contenedorDescripcion.appendChild(p);
      });
   })
   .catch(error => {
      console.error('Error al obtener los datos del archivo JSON:', error);
   });*/