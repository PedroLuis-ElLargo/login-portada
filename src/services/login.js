// export function autenticarEstudiante(matricula, contrasena) {
//   const usuarioValido = {
//     matricula: "123456",
//     contrasena: "123",
//   };

//   return (
//     matricula === usuarioValido.matricula &&
//     contrasena === usuarioValido.contrasena
//   );
// }

// // services/login.js
// export async function loginUsuario({ username, password, role }) {
//   try {
//     const response = await fetch("http://localhost:3000/api/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username, password, role }),
//     });

//     const data = await response.json();
//     return { success: response.ok, data };
//   } catch (error) {
//     console.error("Error al conectar con el backend:", error);
//     return {
//       success: false,
//       error: "Error de conexión con el servidor. Inténtalo de nuevo más tarde.",
//     };
//   }
// }

export async function loginUsuario({ username, password, role }) {
  console.log("Simulando login...", { username, password, role });

  return new Promise((resolve) =>
    setTimeout(() => {
      const credencialesValidas = {
        estudiante: { username: "est123", password: "1234" },
        administracion: { username: "admin", password: "admin123" },
      };

      const credenciales = credencialesValidas[role];

      if (
        credenciales &&
        username === credenciales.username &&
        password === credenciales.password
      ) {
        resolve({
          success: true,
          data: {
            message: `Bienvenido, ${
              role === "administracion" ? "Admin" : "Estudiante"
            }`,
          },
        });
      } else {
        resolve({
          success: false,
          data: { message: "Credenciales inválidas (simulado)" },
        });
      }
    }, 1000)
  );
}
