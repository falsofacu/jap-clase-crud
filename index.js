document.addEventListener("DOMContentLoaded", () => {
  const botonEnviar = document.getElementById("enviar-form");
  const nombre = document.getElementById("nombre");
  const apellido = document.getElementById("apellido");
  const grupo = document.getElementById("grupo");

  botonEnviar.addEventListener("click", () => {
    fetch("https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo255", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        nombre: nombre.value,
        apellido: apellido.value,
        grupo: grupo.value,
      }),
    })
  });
});
