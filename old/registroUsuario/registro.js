const nombre = document.getElementById("nombre")
const correo = document.getElementById("correo")
const contraseña = document.getElementById("pass")
const confirmar = document.getElementById("cpass")
const salida = document.getElementById("feedback")

form.addEventListener("submit", e=>{
  e.preventDefault()

  let aviso = false
  let warnings = ""
  let mailchk = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/

  if(nombre.value.length < 4){
    warnings += `El nombre es demasiado corto <br>`
    aviso = true
  }       

  if(mailchk.text(correo.value)){
    warnings += `El email no es válido <br>`
    aviso = true
  }

  if(contraseña.value.length < 6){
    warnings += `La contraseña debe ser de 6 o más caracteres <br>`
    aviso = true
  }

  if(contraseña.value != confirmar.value){
    warnings += `Las contraseñas deben coincidir <br>`
    aviso = true
  }

  if(aviso){
    salida.innerHTML = warnings
  }

})