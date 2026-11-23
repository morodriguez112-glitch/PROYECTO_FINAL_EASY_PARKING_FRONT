/*
  ESTO ES EL FRONT DE REACT
"form" es la ruta donde se REGISTRAN los nuevos usuarios y también donde se EDITAN los usuarios existentes.
Tiene las cajitas de texto (inputs) donde la persona escribe la información.
Es lo que ve el usuario cuando entra a la aplicación.

OJO IMPORTANTE
Siempre empiezo escribiendo una función cuyo nombre va con la primera letra en mayúscula (en este caso Form)
y que tiene un return (...) con lo que quiero mostrar en pantalla. Ejemplo de como va:

  function Form() {
    return (
      <div>
        {//Aquí va lo que se ve en pantalla //}
</div>
);
}
*/

// En React, un componente es una función y su nombre va en Mayúscula (por ejemplo Form)
function Form() {
    return (
        /* cuadrito general que da forma de tarjeta doble */
        // En JSX se escribe className en lugar de class como era en html
        <div className="user-dashboard-container">
            <div className="user-sidebar-panel">
                <h2>Gestión de Usuarios</h2>
                <p>Aquí puedes visualizar, administrar y controlar el acceso de todos los usuarios.</p>
            </div>

            {/* Lado derecho del diseño de la tabla */}
            {/* En JSX los comentarios dentro del return se escriben así: {/* ... *\/} */}
            <div className="user-content-panel">

                {/* aca es, si el usuario no tiene id, el porque va a registrar un usuario, si ya tiene id se va a editar el usuario */}
                <h1>Formulario Usuario</h1>

                {/* aca le estoy diciendo la ruta para guardar */}
                {/* En JSX las etiquetas sin cierre se cierran con / al final (<hr />) */}
                <hr /> {/* recordar que esto es una etiqueta para hacer una liniecita horizontal, para separar */}

                {/* Antes tenías th:action y th:object de Thymeleaf; en React lo quitamos de aquí
            porque luego lo manejaremos con JavaScript/API */}
                <form method="post">

                    {/* ESTE CAMPO ES OCULTAR EL ID, PORQUE SE AUTOINCREMENTA, NO OLVIDAR */}
                    <input type="hidden" name="id_usuario" />

                    <table>
                        {/* En React es buena práctica envolver las filas <tr> dentro de <tbody> */}
                        <tbody>
                        <tr>
                            <td><label>Nombre:</label></td>
                            <td><input type="text" name="nombre" required /></td>
                        </tr>
                        <tr>
                            <td><label>Apellido:</label></td>
                            <td><input type="text" name="apellido" required /></td>
                        </tr>
                        <tr>
                            <td><label>Documento:</label></td>
                            <td><input type="text" name="documento" required /></td>
                        </tr>
                        <tr>
                            <td><label>Correo:</label></td>
                            <td><input type="text" name="correo" required /></td>
                        </tr>
                        <tr>
                            <td><label>Teléfono:</label></td>
                            <td><input type="text" name="telefono" required /></td>
                        </tr>

                        {/* ESTE ES PARA HACER EL ROL VACIO, PORQUE LO TENEMOS COMO LLAVE FORANEA

- <tr>: Significa "Table Row" (Fila de la tabla). Es la línea horizontal que organiza los elementos.
- <td>: Significa "Table Data" (Celda de la tabla). Es la cajita o columna donde metemos la información dentro de la fila.
- <select>: Es el menú desplegable que le muestra opciones al usuario para que elija una (evitando que escriba texto libre y rompa el sistema). */}

                        <tr>
                            <td><label>Rol:</label></td>
                            <td>
                                {/* En React usamos defaultValue="" en el <select> en vez de poner "selected" en el <option> */}
                                <select name="rol" defaultValue="" required>
                                    <option value="" disabled>Seleccione un rol</option>
                                    <option value="RESIDENTE">RESIDENTE</option>
                                    <option value="VISITANTE">VISITANTE</option>
                                    <option value="ADMINISTRADOR">ADMINISTRADOR</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td><label>Placa:</label></td>
                            <td><input type="text" name="placa" required /></td>
                        </tr>
                        <tr>
                            <td><label>Contraseña:</label></td>
                            <td>
                                <input type="password" name="contrasena" />
                                <span>
                    (Dejar en blanco si no desea cambiar la contraseña que ya tiene)
                  </span>
                            </td>
                        </tr>
                        <tr>
                            {/* En JSX "colspan" se escribe en camelCase: colSpan */}
                            <td colSpan="2">
                                <button type="submit">
                                    Guardar
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>

                <br /> {/* recodar esto "salto de línea" */}
                <a href="#/usuarios">Volver a la Lista de Usuarios</a>
            </div>
        </div>
    );
}

/* Cuando coloco acá al final "export default Form" estoy diendole a react "Hey, este es el componente principal
de este archivo; si alguien en otro lado (como App.jsx) quiere mostrar este formulario, aquí está disponible" */
export default Form;