import { iniciarAnimaciones } from "./controllers/animaciones.js";
import { autenticarEstudiante } from "./services/login.js";

iniciarAnimaciones();

document.addEventListener("DOMContentLoaded", () => {
  const formEstudiante = document.querySelector(".form-box.estudiante form");

  formEstudiante?.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputMatricula = formEstudiante.querySelector('input[type="text"]');
    const inputContrasena = formEstudiante.querySelector(
      'input[type="password"]'
    );

    const matricula = inputMatricula.value.trim();
    const contrasena = inputContrasena.value;

    if (!matricula || !contrasena) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Autenticación
    if (autenticarEstudiante(matricula, contrasena)) {
      window.location.href = "views/dashboard.html";
    } else {
      alert("Credenciales incorrectas. Inténtalo de nuevo.");
      inputMatricula.value = "";
      inputContrasena.value = "";
      inputMatricula.focus();
    }
  });
});
