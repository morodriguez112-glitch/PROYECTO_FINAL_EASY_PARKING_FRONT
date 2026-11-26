/*
OJO IMPORTANTE
Siempre empiezo escribiendo una función cuyo nombre va con la primera letra en mayúscula (en este caso Form)
y que tiene un return (...) con lo que quiero mostrar en pantalla. Ejemplo de como va:

    function List() {
        return (
            <div>
                {//Aquí va lo que se ve en pantalla //}
                    </div>
                    );
                }
*/
import { useState, useEffect } from "react";
// En React, un componente es una función y su nombre va en Mayúscula (por ejemplo List)
function List() {
    // Creamos la lista "usuarios" vacía al inicio (antes venía sola desde Thymeleaf)
    const [usuarios, setUsuarios] = useState([]);

    // Al cargar la pantalla, pedimos los usuarios a mi API en controllerusuarios
    useEffect(() => {
        fetch("http://localhost:8080/api/usuarios")
            .then((res) => res.json())
            .then((data) => setUsuarios(data))
            .catch((error) => console.error("Error trayendo usuarios:", error));
    }, []);
    return (
        // En JSX se escribe className en lugar de class como era en html
        <div className="user-dashboard-container">
            <div className="user-sidebar-panel">
                <h2>Gestión de Usuarios</h2>
                <p>Easy parking, gestión de parqueaderos comunales.</p>
            </div>

            <div className="user-content-panel">
                <h1>Lista de Usuarios</h1>
                <p>Aquí puedes ver todos los usuarios registrados en el sistema.</p>
                <table className="styled-table">

                    {/* thead engloba un conjunto de filas de tabla */}
                    <thead>
                    {/*indicando que constituyen la cabecera de una tabla con información sobre sus columnas */}
                    <tr>
                        <th>Acciones</th>
                        <th>ID Usuario</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Contraseña</th>
                        <th>telefono</th>
                        <th>Correo</th>
                        <th>Documento</th>
                        <th>Placa</th>
                        <th>Rol</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* "esta función "{usuarios.length === 0 ? (" revisa si la lista usuarios está vacía (0 elementos) si sí está vacía, muestra el mensaje
                    "No hay usuarios registrados"; si no, dibuja las filas de la tabla */}
                    {usuarios.length === 0 ? (
                        <tr>
                            <td colSpan="10">No hay usuarios registrados.</td>
                        </tr>
                    ) : ( //Significa "DE LO CONTRARIO" cierra el aviso y abre la lista real. De acuerdo a la pregunta que hice en "{usuarios.length === 0 ? (

                        /* className es el equivalente a class en HTML y sirve para asignarle clases de estilo
                              (de Tailwind CSS o de tu index.css) y darle apariencia (color, tamaño, bordes, espacios) a una etiqueta,
                              no para hacer acciones ni movimientos. */
                        /* cuando quiera cambiar el color solo debo poner el #del color y lo pongo entre [] así: bg-[#292e1e] */


                        /* Esta etiqueta "usuarios.map" Recorre cada usuario y dibuja su fila en la tabla */
                        usuarios.map((usuario) => (
                            <tr key={usuario.id_usuario}>
                              <td className="flex items-center gap-2">
                                    <button
                                        type="button"
                                        className="rounded bg-[#90be6d] px-2.5 py-1 text-xs font-semibold text-white hover:bg-[#1D4526] cursor-pointer">
                                        Editar
                                    </button>
                                        <button
                                            type="button"
                                            className="rounded bg-red-600 px-2.5 py-1 text-xs font-semibold text-white hover:bg-red-700 cursor-pointer">
                                        Eliminar
                                        </button>
                                </td>
                                <td>{usuario.id_usuario}</td>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.apellido}</td>
                                <td>{usuario.contrasena}</td>
                                <td>{usuario.telefono}</td>
                                <td>{usuario.correo}</td>
                                <td>{usuario.documento}</td>
                                <td>{usuario.placa}</td>
                                <td>{usuario.rol}</td>
                            </tr>
                        ))
                    )}
                    </tbody>
                </table>
                <br />
                <td className="flex items-center gap-2">
                    <a
                        href="#/usuarios/form"
                        className="inline-block rounded bg-[#1D4526] px-3 py-1.5 text-xs font-semibold text-white hover:bg-green-500 rounded-lg">
                        Agregar Nuevo Usuario
                    </a>
                 </td>
            </div>
        </div>
    );
}

export default List;



