import { useState } from "react"; // esta etiqueta "useState" para que react, recuerde si ya se le dio clic al botón y se bloquee y cambia al estado "cargando"

function Recuperar() {
    // "cargando" empieza en false (apagado). Cuando cambie a true, sabremos que está cargando.
    const [cargando, setCargando] = useState(false);

    return (
        // En React no ponemos <body> aquí adentro; usamos un <div> normal porque el body ya existe en index.html.
        // "min-h-screen" hace que el fondo ocupe todo el alto de la pantalla.
        <div className="antialiased bg-gradient-to-br from-green-100 to-white min-h-screen">
            <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
                <h1 className="text-4xl font-medium">Recuperar Contraseña</h1>
                <p className="text-slate-500">
                    Diligencie el formulario para restablecer su contraseña
                </p>

                <form action="" className="my-10">
                    <div className="flex flex-col space-y-5">
                        {/* En react se usa "htmlFor" en vez de "for" para conectar el label con el input */}
                        <label htmlFor="email">
                            <p className="font-medium text-slate-700 pb-2">
                                Correo electrónico
                            </p>
                            {/* En react toda etiqueta como <input> debe cerrarse con /> al final */}
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                placeholder="Ingrese su correo electrónico"
                            />
                        </label>

                        {/* En vez de buscar el botón con document.querySelector y addEventListener:
                        type="button" evita que el botón envíe/recargue el formulario por accidente mientras probamos.
                        disabled={cargando} bloquea el botón cuando "cargando" en true.
                        onClick={() => setCargando(true)} es lo que pasa cuando el usuario hace clic. */}
                        <button
                            type="button"
                            disabled={cargando}
                            onClick={() => setCargando(true)}
                            className="w-full py-3 font-medium text-white bg-[#1D4526] hover:bg-green-500 rounded-lg border-green-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                            {/* En react los atributos con guion como stroke-width o stroke-linecap van en camelCase */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                                />
                            </svg>

                            {/* Si "cargando" es true muestra "Cargando..."; si es false muestra "Recuperar Contraseña" */}
                            <span>{cargando ? "Cargando..." : "Recuperar Contraseña"}</span>
                        </button>

                        <p className="text-center">
                            ¿Aún no tienes cuenta?{" "}
                            {/* Quitamos th:href de Thymeleaf porque aquí estamos en React */}
                            <a
                                href="#"
                                className="text-indigo-600 font-medium inline-flex space-x-1 items-center">
                                <span>Registrarse ahora </span>
                                <span>
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </span>
                            </a>
                            </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Recuperar;