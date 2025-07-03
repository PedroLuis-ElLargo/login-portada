// controllers/animaciones.js
export function iniciarAnimaciones() {
  console.log("Animaciones iniciadas");

  // Ejemplo de animación inicial (puedes modificar o quitar esto)
  const formBoxes = document.querySelectorAll(".form-box");
  formBoxes.forEach((box) => {
    box.classList.add("fade-in"); // clase CSS que tú defines
  });
}
