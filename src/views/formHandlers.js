// views/formHandlers.js
import { loginUsuario } from "../services/login.js";

export function manejarLoginEstudiante(form, messageContainer) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const matricula = form.querySelector('input[name="matricula"]').value;
    const password = form.querySelector('input[name="contrasena"]').value;

    messageContainer.textContent = "";

    const { success, data, error } = await loginUsuario({
      username: matricula,
      password,
      role: "estudiante",
    });

    if (success) {
      messageContainer.style.color = "green";
      messageContainer.textContent = data.message || "Login exitoso.";
      window.location.href = "./views/dashboard.html";
    } else {
      messageContainer.style.color = "red";
      messageContainer.textContent = data?.message || error;
    }
  });
}

export function manejarLoginAdmin(form, messageContainer) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const usuario = form.querySelector('input[name="usuarioAdmin"]').value;
    const password = form.querySelector('input[name="contrasenaAdmin"]').value;

    messageContainer.textContent = "";

    const { success, data, error } = await loginUsuario({
      username: usuario,
      password,
      role: "administracion",
    });

    if (success) {
      messageContainer.style.color = "green";
      messageContainer.textContent =
        data.message || "Login de administrador exitoso.";
      window.location.href = "/admin-dashboard.html";
    } else {
      messageContainer.style.color = "red";
      messageContainer.textContent = data?.message || error;
    }
  });
}
