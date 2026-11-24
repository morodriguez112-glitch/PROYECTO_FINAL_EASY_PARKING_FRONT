/*
Aca es donde conectare las pantallas.
En react un componente en este caso por ejemplo (como Form.jsx) no es toda la página;  es como una pieza de Lego o un bloque
que luego se encajará dentro de App.jsx y main.jsx. Por eso no lleva <!DOCTYPE html> ni <body> que era en el caso de html.

Para que no se me olvide:
main,jsx, manda a app,jsx, entonces tengo que importar (como añadir) form dentro de app.jsx para que pueda como arrancar en app.jsx es donde se muestran las pantallas y donde se unen. NO DEBO AGREGAR NADA EN MAIN.JSX
 */

import { useState, useEffect } from "react";
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'


// Importamos el componente Form desde la carpeta de Usuarios
import Form from "./Usuarios/Form.jsx";
import List from "./Usuarios/List.jsx";
import Recuperar from "./Usuarios/Recuperar.jsx";
function App() {

    // ESTA ES LA FORMULA PARA UNIR ALGUNOS BOTONES ENTRE LAS PANTALLAS DE LIST Y FORM DE USUARIOS

    const [ruta, setRuta] = useState(window.location.hash || "#/usuarios/form"); // 1. este es el primer paso para empezar a conectar la pantalla, en este caso el "useState(#/usuarios/nuevo)" es la ruta del botón de agregar nuevo usuario, dejamos de primeras el "window.location.hash" para que arranque según la URL que tenga el navegador. */}
    useEffect(() => {
        // 2. Función que lee lo que quedó después del '#' en la URL y actualiza la ruta (la de usuarios/nuevo)
        const alCambiarHash = () => {
            setRuta(window.location.hash);
        };

        // Escucha cuando cambia el # en la URL y llama a alCambiarHash para actualizar ruta (no olvidar que en esta caso es usuarios/nuevo)
        window.addEventListener("hashchange", alCambiarHash);

        // Esto es para borrar lo que va a mostrar de "hashchange" del navegador cuando App deja de mostrarse, para que no se acumulen escuchas repetidas.
        return () => window.removeEventListener("hashchange", alCambiarHash);
    }, []);

    // 3. Si la ruta guardada es "#/usuarios/form", mostramos el componente Form y salimos de la función
    // El triple igual (===) pregunta si lo que hay en "ruta" es exactamente igual a "#/usuarios/form" (la ruta del botón Agregar Nuevo Usuario).
    // Si son iguales, muestra el componente Form. Si no, sigue bajando y muestra List.
    // if (ruta === "#/usuarios/form") {
    if (ruta === "#/usuarios/form") {
        return <Form />;
    }

    // ESTA FORMULA PARA ENSAYAR LAS PANTALLAS, SOLO CAMBIAR "list, form, ect" PARA VER CUAL SE MUESTRA EN EL NAVEGADOR

    return (
      <div>
        {/* Esta etiqueta <List /> es la unica q se coloca y solo indica que en la pantalla se mostrará el formulario al usuario, así es la
         formula para ensayar y ver en el navegador*/}
        <List/>
      </div>
  );
}

export default App;