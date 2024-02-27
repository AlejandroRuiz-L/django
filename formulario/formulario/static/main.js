const ficha = document.getElementById("ficha");
const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const correo = document.getElementById("email");
const tel = document.getElementById("tel");
const genero = document.getElementById('genero');
const skill = document.getElementById("skill");

const evento_blur_vacio = function (elemento) {
  elemento.addEventListener('blur', () => {
    if (elemento.value == "") {
      console.log(`Debe llenar el campo'${elemento.name}'.`);
      elemento.style.borderColor = "salmon";
    }
  })
}
const evento_blur_ficha = function (elemento) {
  elemento.addEventListener('blur', () => {
    const patt_str = /^cod_[0-9]{5}$/;
    if (!patt_str.test(ficha.value)) {
      console.log(`Campo '${elemento.name}' invalido.`);
      elemento.style.borderColor = 'red';
    } else {
      console.log(`Campo '${elemento.name}' válido.`);
      elemento.style.borderColor = 'skyblue';
    }
  })
}
const evento_blur_email = function (elemento) {
  elemento.addEventListener('blur', () => {
    const patt_email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!patt_email.test(elemento.value)) {
      console.log(`Campo '${elemento.name}' invalido.`);
      elemento.style.borderColor = "red";
    } else {
      console.log(`Campo '${elemento.name}' valido.`);
      elemento.style.borderColor = 'skyblue';
    }
  })
}
const evento_blur_str = function (elemento) {
  elemento.addEventListener('blur', () => {
    const patt_str = /^[a-zA-Z]+/;
    if (!patt_str.test(elemento.value)) {
      console.log(`Campo '${elemento.name}' invalido.`);
      elemento.style.borderColor = "red";
    } else {
      console.log(`Campo '${elemento.name}' válido.`);
      elemento.style.borderColor = "skyblue";
    }
  })
}
const letras = function (e) {
  const key = e.keyCode || e.which;
  const tecla = String.fromCharCode(key).toLocaleLowerCase();
  const letras = "áéíóúabcdefghijklmnñopqrstuvwxyz";
  const especiales = ['8', '32', '37', '39', '46'];
  let tecla_especial = false;
  for (const i in especiales) {
    tecla_especial = true;
    break;
  }
  if (letras.indexOf(tecla) == -1 && !tecla_especial) {
    e.preventDefault();
  }
}
evento_blur_ficha(ficha);
evento_blur_vacio(ficha);
evento_blur_vacio(nombre);
evento_blur_str(nombre);
evento_blur_vacio(apellidos);
evento_blur_str(apellidos);
evento_blur_vacio(correo);
evento_blur_vacio(tel);
evento_blur_email(correo);
letras(tel);
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