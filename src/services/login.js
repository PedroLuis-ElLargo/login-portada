export function autenticarEstudiante(matricula, contrasena) {
  const usuarioValido = {
    matricula: "123456",
    contrasena: "123",
  };

  return (
    matricula === usuarioValido.matricula &&
    contrasena === usuarioValido.contrasena
  );
}
