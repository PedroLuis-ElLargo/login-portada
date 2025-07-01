// animaciones.js
export function iniciarAnimaciones() {
  console.log("Animaciones iniciadas");
  const container = document.querySelector(".container");
  const estudianteForm = container.querySelector(".form-box.estudiante");
  const adminForm = container.querySelector(".form-box.administracion");
  const linkAccesoAdmin = document.getElementById("link_acceso_admin");
  const linkAccesoEstudiante = document.getElementById(
    "link_acceso_estudiante"
  );

  // Alternar entre formularios
  linkAccesoAdmin?.addEventListener("click", (e) => {
    e.preventDefault();
    container.classList.add("admin-active");
    adminForm?.classList.add("visible");
    estudianteForm?.classList.remove("visible");
  });

  linkAccesoEstudiante?.addEventListener("click", (e) => {
    e.preventDefault();
    container.classList.remove("admin-active");
    estudianteForm?.classList.add("visible");
    adminForm?.classList.remove("visible");
  });

  // Mostrar/Ocultar contraseña
  container.addEventListener("change", (e) => {
    if (e.target.matches(".show-password-checkbox")) {
      const checkbox = e.target;
      const formBox = checkbox.closest(".form-box");
      const passwordInput = formBox?.querySelector(".input-contrasena");
      if (passwordInput) {
        passwordInput.type = checkbox.checked ? "text" : "password";
      }
    }
  });
}
