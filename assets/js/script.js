let imageKimi = document.getElementById("Kimi");
imageKimi.addEventListener("click", imgKimifun);

function imgKimifun() {
  if (imageKimi.style.border != "2px solid red") {
    imageKimi.style.border = "2px solid red";
  } else if (imageKimi.style.border == "2px solid red") {
    imageKimi.style.border = "none";
  }
}

let stickers10 = document.getElementById("boton_stickers");
stickers10.addEventListener("click", comprarStickers);

function comprarStickers() {
  let sticker1 = parseInt(document.getElementById("sticker1").value) || 0;
  let sticker2 = parseInt(document.getElementById("sticker2").value) || 0;
  let sticker3 = parseInt(document.getElementById("sticker3").value) || 0;

  let totalStickers = sticker1 + sticker2 + sticker3;

  function modificarParrafo(mensaje) {
    const parrafo = document.getElementById("Parrafo");
    parrafo.textContent = mensaje;
  }

  if (totalStickers > 10) {
    modificarParrafo("¡Llevas demasiados stickers!");
  } else if (totalStickers === 10) {
    modificarParrafo("¡Llevas exactamente 10 stickers!");
  } else {
    modificarParrafo("¡Aún te faltan stickers!");
  }
}

let botonClave = document.getElementById("boton");
botonClave.addEventListener("click", botonComprobar);

function botonComprobar() {
  let number1 = parseInt(document.getElementById("number1").value) || 0;
  let number2 = parseInt(document.getElementById("number2").value) || 0;
  let number3 = parseInt(document.getElementById("number3").value) || 0;

  if (number1 === 9 && number2 === 1 && number3 === 1) {
    modificarParrafo_password("Contraseña1 correcta");
  } else if (number1 === 7 && number2 === 1 && number3 === 4) {
    modificarParrafo_password("Contraseña2 correcta");
  } else {
    modificarParrafo_password("Contraseña incorrecta");
  }
}
function modificarParrafo_password(mensaje) {
  const parrafo = document.getElementById("Parrafo_password");
  parrafo.textContent = mensaje;
}
