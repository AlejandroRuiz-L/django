const ficha = document.getElementById("ficha");
const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const correo = document.getElementById("email");
const tel = document.getElementById("tel");
const skill = document.getElementById("skill");
const valido = function (elemento) {
  if (elemento.value == '') {
    console.log("Debe llenar el campo elemento.name")
  }
}
function evento_blur_vacio(elemento) {
  elemento.addEventListener('blur', () => {
    if (elemento.value == "") {
      console.log(`Debe llenar el campo'${elemento.name}'.`);
      elemento.style.borderColor = "green";
    }
  })
}
const evento_blur_validar = function (elemento) {
  elemento.addEventListener('blur', () => {
    const patt_str = /^[a-zA-Z]{3}_[0-9]{5}$/;
    if (!patt_str.test(ficha.value)) {
      console.log(`Campo '${elemento.name}' invalido.`);
      ficha.style.borderColor = 'red';
    } else {
      ficha.style.borderColor = 'skyblue';
    }
  })
}
evento_blur_validar(ficha);
evento_blur_vacio(ficha);
evento_blur_vacio(nombre);
evento_blur_vacio(apellidos);
evento_blur_vacio(correo);
evento_blur_vacio(tel);
/*
ficha.addEventListener('blur', () => {
  if (!patt_str.test(ficha.value)) {
    console.log("Solo se pueden ingresar letras.");
    ficha.style.borderColor = "red";
  } else {
    console.log("'Vacio' correcto.")
  }
})
ficha.addEventListener('blur', () => {
  if (!expresion1.test(ficha.value)) {
    console.log("El campo 'ficha' no es válido.");
    ficha.style.borderColor = "purple";
  } else {
    console.log("'Cod' correcto.");
    ficha.style.borderColor = "skyblue";
  }
})

*/