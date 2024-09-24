Registro de Usuario
1. Validación de campos vacíos:
Descripción: Al intentar registrar un nuevo usuario, se validan todos los campos obligatorios. Si alguno de ellos está vacío, se muestra una alerta solicitando al usuario completar los datos.
2. Validación de correo ya registrado:
Descripción: Antes de proceder con el registro, se verifica si el correo ya está registrado en la base de datos. Si el correo existe, se notifica al usuario con un mensaje de alerta que indica "Correo ya registrado".
3. Validación de contraseña:
Descripción: Se utiliza una expresión regular para garantizar que la contraseña cumpla con los siguientes requisitos:
Mínimo de 8 caracteres.
Al menos una letra mayúscula, una minúscula, un número y un carácter especial.
4. Validación de espacios en los datos:
Descripción: Antes de enviar los datos al servidor, se eliminan los espacios en blanco al inicio y al final de cada campo. De esta forma, los datos se registran correctamente y sin errores.
5. Validación del campo de nombre:
Descripción: El campo "nombre" solo permite un nombre. Si el usuario intenta ingresar más de un nombre, se muestra una alerta solicitando ingresar solo un nombre. Además, este campo tiene un placeholder que indica "Ingrese solo 1 nombre".
6. Funcionalidad de registro:
Descripción: Si todas las validaciones se cumplen, los datos del usuario son enviados al backend para su registro en la base de datos.
Inicio de Sesión (Login)
1. Validación de correo no registrado:
Descripción: Si el usuario intenta iniciar sesión con un correo que no está en la base de datos, se muestra un mensaje que indica "Correo no registrado".
2. Validación de contraseña incorrecta:
Descripción: Si el correo está registrado pero la contraseña no coincide, se muestra un mensaje indicando "Contraseña incorrecta".
3. Inicio de sesión exitoso:
Descripción: Si el correo está registrado y la contraseña coincide, el usuario puede iniciar sesión exitosamente en la plataforma.
Obtener Hábitos por Usuario
Funcionalidad: Permite listar todos los hábitos creados por un usuario en particular.
Endpoint: /api/habitos/usuario/{usuarioId}
Método HTTP: GET
Descripción: Devuelve una lista de todos los hábitos asociados al usuario cuyo ID se proporciona en la ruta. Esta funcionalidad permite a los usuarios ver sus hábitos registrados en la aplicación.
