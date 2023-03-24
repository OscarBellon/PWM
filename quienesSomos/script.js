fetch('pruebacargar.json')
  .then(response => response.json())
  .then(data => {
    let quienesSomos = data.quienesSomos;
    let quienesSomosDiv = document.getElementById('quienesSomos');
    
    quienesSomos.forEach(producto => {
      let contenedorDescripcionDiv = document.createElement('div');
      contenedorDescripcionDiv.idName = 'contenedorDescripcion';
      
      let descripcion = document.createElement('p');
      descripcion.idName = 'descripcion';
      descripcion.textContent = quienesSomos.descripcion;
      contenedorDescripcionDiv.appendChild(descripcion);
      
      contenedorDescripcionDiv.appendChild(contenedorDescripcionDiv);
      
      
      
    });
  })
  .catch(error => console.error(error));