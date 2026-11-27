// RECORDATORIO: useState es la "memoria" del componente (archivo) me sirve para guardar un dato que
// va a cambiar (actualizarse) y avisarle a React que vuelva a pintar la pantalla.
// Solo se pone cuando algo va a cambia, si la pantalla es estática, no es obligatorio.

import { useState } from "react";

function Home() {
    // Estado para bloquear el botón y mostrar "Cargando..." al hacer clic en Iniciar Sesión
    const [cargando, setCargando] = useState(false);

  return (
      <div>
          <div className="antialiased bg-gradient-to-br from-green-100 to-white">
          <div className="container px-6 mx-auto">
              <div
                  className="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center">
                  <div className="flex flex-col w-full">
                      <div>
                          <svg
                              className="w-20 h-20 mx-auto md:float-left fill-stroke text-gray-800"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                          </svg>
                      </div>
                      {/*Controla y supervisa los datos de mi sitio web desde el panel de control */}
                      <h1 className="text-5xl text-gray-800 font-bold">Easy Parking</h1>
                      <br /> {/* salto de línea literal*/}
                      <p className="w-5/12 mx-auto md:mx-0 text-gray-500">Encuentra y reserva tu espacio de estacionamiento de manera fácil y rápida</p>
                  </div>
                  <div className="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
                      <div className="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
                          <h2 className="text-2xl font-bold text-gray-800 text-left mb-5">
                              Iniciar sesión
                          </h2>

                          <form action="" className="w-full">
                              <div id="input" className="flex flex-col w-full my-5">
                                  <label htmlFor="usuario" className="text-gray-500 mb-2">
                                      Usuario
                                  </label>
                                  <input
                                      type="text"
                                      id="usuario"
                                      placeholder="Por favor ingrese su usuario"
                                      className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"/>
                              </div>
                              <div id="input" className="flex flex-col w-full my-5">
                                  <label htmlFor="contraseña" className="text-gray-500 mb-2">
                                      Contraseña
                                  </label>
                                  <input
                                      type="contraseña"
                                      id="contraseña"
                                      placeholder="Por favor ingrese su contraseña"
                                      className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"/>
                              </div>
                              <div id="button" className="flex flex-col w-full my-5">
                                  <button
                                      type="button"
                                      className="w-full py-4 font-medium text-white bg-green-600 hover:bg-green-500 rounded-lg border-green-500 hover:shadow inline-flex space-x-2 items-center justify-center"
                                  >
                                      <div className="flex flex-row items-center justify-center">
                                          <div className="mr-2">
                                              <svg
                                                  className="w-6 h-6"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  viewBox="0 0 24 24"
                                                  xmlns="http://www.w3.org/2000/svg">
                                                  <path
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"
                                                      stroke-width="2"
                                                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1">
                                                  </path>
                                              </svg>
                                          </div>
                                          {/* RECORDATORIO: El DOM es el esqueleto vivo que Chrome arma en su memoria al leer el HTML/JSX */}
                                          <div className="font-bold">
                                              {cargando ? "Cargando..." : "Iniciar Sesión"}
                                          </div>
                                      </div>
                                  </button>
                                  <div className="flex justify-evenly mt-5">
                                      <a
                                          href="#/recuperar"
                                          className="w-full text-center font-medium text-indigo-600">
                                          {/* debo pasarlo a "href="#/" (ya que ahora estoy con react) ahora lo paso para conectar el botón con esa pantalla */}
                                          Recuperar Contraseña
                                      </a>

                                      <a
                                          href="#/usuarios/form"
                                          className="w-full text-center font-medium text-indigo-600">
                                          Registrarse
                                        </a>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
          </div>
      </div>
  );
}

export default Home;