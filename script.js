document.getElementById('formulario-contacto').addEventListener('submit', function(e) {
      e.preventDefault(); // Evita recargar la página

      // Obtener valores de los campos
      const nombre = document.getElementById('fnombre').value.trim();
      const correo = document.getElementById('fcorreo').value.trim();
      const asunto = document.getElementById('fasunto').value.trim();
      const telefono = document.getElementById('ftelefono').value.trim();
      const mensaje = document.getElementById('fmensaje').value.trim();

      const errores = [];

      // Validaciones simples
      if (!nombre) errores.push("El nombre es obligatorio.");
      if (!correo || !correo.includes("@") || !correo.includes(".")) errores.push("El correo electrónico no es válido.");
      if (!asunto) errores.push("El asunto es obligatorio.");
      if (!mensaje) errores.push("El mensaje es obligatorio.");
      if (telefono && !/^\d+$/.test(telefono)) errores.push("El teléfono solo debe contener números.");

      const contenedorErrores = document.getElementById('errores');
      contenedorErrores.innerHTML = "";

      if (errores.length > 0) {
        contenedorErrores.innerHTML = errores.join("<br>");
        document.getElementById('mensaje-exito').style.display = "none";
      } else {
        contenedorErrores.innerHTML = "";
        document.getElementById('mensaje-exito').style.display = "block";
        this.reset(); // Limpia el formulario
      }
    });