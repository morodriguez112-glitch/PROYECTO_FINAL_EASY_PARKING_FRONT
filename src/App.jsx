/*
Aca es donde conectare las pantallas.
En react un componente en este caso por ejemplo (como Form.jsx) no es toda la página;  es como una pieza de Lego o un bloque
que luego se encajará dentro de App.jsx y main.jsx. Por eso no lleva <!DOCTYPE html> ni <body> que era en el caso de html.

Para que no se me olvide:
main,jsx, manda a app,jsx, entonces tengo que importar (como añadir) form dentro de app.jsx para que pueda como arrancar en app.jsx es donde se muestran las pantallas y donde se unen. NO DEBO AGREGAR NADA EN MAIN.JSX
 */

import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'


// Importamos el componente Form desde la carpeta de Usuarios
import Form from "./Usuarios/Form.jsx";
import List from "./Usuarios/List.jsx";
import Recuperar from "./Usuarios/Recuperar.jsx";
function App() {
  return (
      <div>
        {/* Esta etiqueta <Form /> es la unica q se coloca y solo indica que en la pantalla se mostrará el formulario al usuario, así es la
         formula para ensayar y ver en el navegador*/}
        <List/>
      </div>
  );
}

export default App;