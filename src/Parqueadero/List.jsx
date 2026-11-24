import { useState, useEffect } from "react";

// Componente para listar los parqueaderos
function ListaParqueaderos() {
    // Aca es la lista de parqueaderos que llega del backend (Spring Boot)
    const [parqueaderos, setParqueaderos] = useState([]);
    // aca es para mostrar un mensaje mientras carga o si ocurre un error de conexión
    const [cargando, setCargando] = useState(true);

    // useEffect se ejecuta automáticamente cuando aparece en pantalla
    useEffect(() => {
        // Llamamos al endpoint REST de tu backend en Spring Boot
        fetch("http://localhost:8080/api/parqueaderos")
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error("No se pudo obtener la lista de parqueaderos");
                }
                return respuesta.json();
            })
            .then((datos) => {
                setParqueaderos(datos);
                setCargando(false);
            })
            .catch((error) => {
                console.error("Error cargando parqueaderos:", error);
                setCargando(false);
            });
    }, []);

    // Función para eliminar un parqueadero (reemplaza al <form th:action="..."> de Thymeleaf)
    const handleEliminar = (idParqueadero) => {
        const confirmar = window.confirm(
            `¿Seguro que deseas eliminar el parqueadero con ID ${idParqueadero}?`
        );
        if (!confirmar) return;

        fetch(`http://localhost:8080/api/parqueaderos/${idParqueadero}`, {
            method: "DELETE",
        })
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error("Error al eliminar el parqueadero");
                }
                // Quitamos el parqueadero eliminado de la tabla sin recargar toda la página
                setParqueaderos((prevLista) =>
                    prevLista.filter((item) => item.id_parqueadero !== idParqueadero)
                );
            })
            .catch((error) => console.error("Error al eliminar:", error));
    };

    return (
        /* Contenedor tipo tarjeta doble definido en tu index.css */
        <div className="user-dashboard-container">
            {/* Panel izquierdo: título y descripción corta */}
            <div className="user-sidebar-panel">
                <h2>Lista de Parqueaderos</h2>
                <p>
                    Consulta, edita o administra los espacios de parqueadero registrados
                    en Easy Parking.
                </p>
            </div>

            {/* Panel derecho: tabla con tus estilos .styled-table */}
            <div className="user-content-panel">
                {/* Botón superior para ir a crear un nuevo parqueadero */}
                <div className="mb-4 flex justify-end">
                    <a
                        href="/parqueaderos/formulario"
                        className="inline-block rounded-lg bg-[#1e4d2b] px-4 py-2 text-sm font-semibold text-white hover:bg-[#163a20] transition"
                    >
                        + Agregar Nuevo Parqueadero
                    </a>
                </div>

                {cargando ? (
                    <p className="text-slate-500">Cargando parqueaderos...</p>
                ) : (
                    /* Si algún día quieres la tabla azul, cambias className a "styled-table styled-table-blue" */
                    <table className="styled-table">
                        <thead>
                        <tr>
                            <th>Acciones</th>
                            <th>ID Parqueadero</th>
                            <th>Número</th>
                            <th>Tipo</th>
                            <th>Estado</th>
                            <th>Id_usuario</th>
                        </tr>
                        </thead>
                        <tbody>
                        {parqueaderos.length === 0 ? (
                            <tr>
                                <td colSpan="6" className="text-center text-slate-500">
                                    No hay parqueaderos registrados todavía.
                                </td>
                            </tr>
                        ) : (
                            /* En React usamos .map() en lugar de th:each para recorrer la lista */
                            parqueaderos.map((parqueadero) => (
                                <tr key={parqueadero.id_parqueadero}>
                                    <td className="flex items-center gap-2">
                                        {/* Enlace para editar (reemplaza th:href) */}
                                        <a
                                            href={`/parqueaderos/editar/${parqueadero.id_parqueadero}`}
                                            className="rounded bg-amber-500 px-2.5 py-1 text-xs font-semibold text-white hover:bg-amber-600"
                                        >
                                            Editar
                                        </a>

                                        {/* Botón para eliminar (reemplaza el <form method="post"> de Thymeleaf) */}
                                        <button
                                            type="button"
                                            onClick={() => handleEliminar(parqueadero.id_parqueadero)}
                                            className="rounded bg-red-600 px-2.5 py-1 text-xs font-semibold text-white hover:bg-red-700 cursor-pointer"
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                    <td>{parqueadero.id_parqueadero}</td>
                                    <td>{parqueadero.numero}</td>
                                    <td>{parqueadero.tipo}</td>
                                    <td>{parqueadero.estado}</td>
                                    <td>{parqueadero.id_usuario ?? "Sin asignar"}</td>
                                </tr>
                            ))
                        )}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default ListaParqueaderos;