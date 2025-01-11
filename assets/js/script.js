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
stickers10.addEventListener("click", comprarstickers);

function comprarstickers() {
  let sticker1 = parseInt(document.getElementById("sticker1").value) || 0;
  let sticker2 = parseInt(document.getElementById("sticker2").value) || 0;
  let sticker3 = parseInt(document.getElementById("sticker3").value) || 0;

  let totalStickers = sticker1 + sticker2 + sticker3;

  if (totalStickers > 10) {
    alert("¡Llevas demasiados stickers!");
  } else if (totalStickers === 10) {
    alert("¡Llevas exactamente 10 stickers!");
  } else {
    alert("¡Aún te faltan stickers!");
  }
}

let Botonclave = document.getElementById("boton");
Botonclave.addEventListener("click", botoncomprobar);

function botoncomprobar() {
  let number1 = document.getElementById("number1").value;
  let number2 = document.getElementById("number2").value;
  let number3 = document.getElementById("number3").value;

  if (number1 == 9 && number2 == 1 && number3 == 1) {
    alert("Contraseña1 correcta");
  } else if (number1 == 7 && number2 == 1 && number3 == 4) {
    alert("Contraseña2 correcta");
  } else {
    alert("Contraseña incorrecta");
  }
}
