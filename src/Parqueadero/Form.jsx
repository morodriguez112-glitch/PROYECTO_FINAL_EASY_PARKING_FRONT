function ParqueaderoForm() {
    return (
        <div>
            {/* Recordemos que esta es la ruta para indicar, que es para guardar (cuando conectemos el backend) */}
            <h1>Formulario Parqueadero</h1>
            <hr />

            {/* En React no usamos th:action ni th:object de Thymeleaf */}
            <form>
                {/* EN ESTE CAMPO ES EL DE OCULTAR EL ID, PORQUE SE AUTOINCREMENTA, NO OLVIDAR */}
                <input name="id_parqueadero" type="hidden" />

                <table>
                    <tbody>
                    <tr>
                        <td><label htmlFor="numero">Numero:</label></td>
                        {/* En JSX se usa htmlFor en vez de for, y las etiquetas deben cerrarse con /> */}
                        <td><input id="numero" name="numero" type="text" required /></td>
                    </tr>

                    <tr>
                        <td><label htmlFor="tipo">Tipo:</label></td>
                        <td><input id="tipo" name="tipo" type="text" required /></td>
                    </tr>

                    <tr>
                        <td><label htmlFor="estado">Estado:</label></td>
                        <td><input id="estado" name="estado" type="text" required /></td>
                    </tr>

                    {/* ESTE ES PARA HACER EL ID USUARIO VACIO, PORQUE LO TENGO COMO LA LLAVE FORANEA */}
                    <tr>
                        <td><label htmlFor="id_usuario">id_usuario:</label></td>
                        <td>
                            <input id="id_usuario" name="id_usuario" type="text" required />
                        </td>
                    </tr>
                    </tbody>
                </table>

                {/* RECORDATORIO: ahorita es button normal; cuando lo conecte con el back cambia */}
                <button
                    type="button"
                    className="rounded bg-[#1D4526] px-2.5 py-1 text-xs font-semibold text-white hover:bg-green-500 rounded-lg">
                    Guardar
                </button>
            </form>

            <br />

            {/* RECORDATORIO: la etiqueta "<a" hace la acción de navegar hacia otra pantalla dentro del front;
                cuando vaya a unir el front con el back, tendré que revisar la navegación según el flujo que quiero y que tengo en mente */}
            <a href="#/parqueadero/list"
            className="inline-block rounded bg-green-500 rounded-lg px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#1D4526]">
            Volver a la Lista de Parqueaderos
            </a>
        </div>
    );
}

export default ParqueaderoForm;