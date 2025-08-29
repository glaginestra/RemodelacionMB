const nav = document.getElementById("menu");
const abrir = document.getElementById("abrir");
const cerrar = document.getElementById("cerrar");

abrir.addEventListener("click", function () {
    nav.classList.add("visible");  // Asegúrate de que esta clase está definida en CSS para mostrar el menú
    cerrar.style.display = "block";
});

cerrar.addEventListener("click", function () {
    nav.classList.remove("visible");
    abrir.style.display = "block";
});


