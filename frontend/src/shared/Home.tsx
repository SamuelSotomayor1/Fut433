import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <div className="flex min-h-screen flex-col">
          {/* Navbar */}
          <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold">Fut433</span>
              </div>
              <nav className="hidden md:flex items-center gap-6">
                <Link to="/" className="text-sm font-medium text-green-600">
                  Inicio
                </Link>
                <Link to="/equipos" className="text-sm font-medium transition-colors hover:text-green-600">
                  Equipos
                </Link>
                <Link to="/player" className="text-sm font-medium transition-colors hover:text-green-600">
                  Jugadores
                </Link>
                <Link to="/estadisticas" className="text-sm font-medium transition-colors hover:text-green-600">
                  Estadísticas
                </Link>
                <Link to="/calendario" className="text-sm font-medium transition-colors hover:text-green-600">
                  Calendario
                </Link>
              </nav>
              <button className="md:hidden rounded-md border p-2">
                <span className="sr-only">Abrir menú</span>
                <div className="h-5 w-5 flex flex-col justify-center gap-1">
                  <span className="block h-0.5 w-5 bg-current"></span>
                  <span className="block h-0.5 w-5 bg-current"></span>
                  <span className="block h-0.5 w-5 bg-current"></span>
                </div>
              </button>
            </div>
          </header>
    
          <main className="flex-1">
            {/* Hero Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-900 to-green-950 text-white">
              <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12">
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                      <span className="inline-block rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
                        Temporada 2025
                      </span>
                      <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                        Toda la información del fútbol chileno en un solo lugar
                      </h1>
                      <p className="max-w-[600px] text-gray-200 md:text-xl">
                        Sigue la actualidad del campeonato nacional, estadísticas, resultados y toda la información de tus
                        equipos favoritos.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                      <Link
                        to="/equipos"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-green-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                      >
                        Ver Equipos
                      </Link>
                      <Link
                        to="/calendario"
                        className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                      >
                        Próximos Partidos
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
    
            {/* Main Content Section */}
            <section className="w-full py-12 md:py-24 lg:py-32">
              <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Campeonato Nacional 2025</h2>
                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      Sigue la actualidad del fútbol chileno con la tabla de posiciones actualizada y las últimas noticias.
                    </p>
                  </div>
                </div>
    
                {/* Tabs Navigation */}
                <div className="mt-8">
                  <div className="border-b">
                    <div className="flex -mb-px">
                      <button className="text-sm font-medium border-b-2 border-red-600 text-red-600 py-2 px-4">
                        Tabla de Posiciones
                      </button>
                      <button className="text-sm font-medium text-gray-500 hover:text-gray-700 py-2 px-4">
                        Próximos Partidos
                      </button>
                      <button className="text-sm font-medium text-gray-500 hover:text-gray-700 py-2 px-4">
                        Últimas Noticias
                      </button>
                    </div>
                  </div>
    
                  {/* Tabla de Posiciones */}
                  <div className="mt-6">
                    <div className="rounded-lg border bg-white p-6 shadow-sm">
                      <div className="mb-4 flex items-center">
                        <h3 className="text-lg font-semibold">Tabla de Posiciones - Primera División</h3>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="border-b">
                              <th className="py-3 text-left font-medium">Pos</th>
                              <th className="py-3 text-left font-medium">Equipo</th>
                              <th className="py-3 text-center font-medium">PJ</th>
                              <th className="py-3 text-center font-medium">G</th>
                              <th className="py-3 text-center font-medium">E</th>
                              <th className="py-3 text-center font-medium">P</th>
                              <th className="py-3 text-center font-medium">GF</th>
                              <th className="py-3 text-center font-medium">GC</th>
                              <th className="py-3 text-center font-medium">DG</th>
                              <th className="py-3 text-center font-medium">Pts</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b bg-green-50">
                              <td className="py-3 text-left">1</td>
                              <td className="py-3 text-left font-medium">Colo Colo</td>
                              <td className="py-3 text-center">15</td>
                              <td className="py-3 text-center">10</td>
                              <td className="py-3 text-center">3</td>
                              <td className="py-3 text-center">2</td>
                              <td className="py-3 text-center">28</td>
                              <td className="py-3 text-center">12</td>
                              <td className="py-3 text-center">+16</td>
                              <td className="py-3 text-center font-bold">33</td>
                            </tr>
                            <tr className="border-b bg-green-50">
                              <td className="py-3 text-left">2</td>
                              <td className="py-3 text-left font-medium">Universidad Católica</td>
                              <td className="py-3 text-center">15</td>
                              <td className="py-3 text-center">9</td>
                              <td className="py-3 text-center">4</td>
                              <td className="py-3 text-center">2</td>
                              <td className="py-3 text-center">25</td>
                              <td className="py-3 text-center">14</td>
                              <td className="py-3 text-center">+11</td>
                              <td className="py-3 text-center font-bold">31</td>
                            </tr>
                            <tr className="border-b bg-green-50">
                              <td className="py-3 text-left">3</td>
                              <td className="py-3 text-left font-medium">Universidad de Chile</td>
                              <td className="py-3 text-center">15</td>
                              <td className="py-3 text-center">8</td>
                              <td className="py-3 text-center">5</td>
                              <td className="py-3 text-center">2</td>
                              <td className="py-3 text-center">22</td>
                              <td className="py-3 text-center">13</td>
                              <td className="py-3 text-center">+9</td>
                              <td className="py-3 text-center font-bold">29</td>
                            </tr>
                            <tr className="border-b bg-blue-50">
                              <td className="py-3 text-left">4</td>
                              <td className="py-3 text-left font-medium">Unión Española</td>
                              <td className="py-3 text-center">15</td>
                              <td className="py-3 text-center">7</td>
                              <td className="py-3 text-center">4</td>
                              <td className="py-3 text-center">4</td>
                              <td className="py-3 text-center">19</td>
                              <td className="py-3 text-center">15</td>
                              <td className="py-3 text-center">+4</td>
                              <td className="py-3 text-center font-bold">25</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-3 text-left">5</td>
                              <td className="py-3 text-left font-medium">Everton</td>
                              <td className="py-3 text-center">15</td>
                              <td className="py-3 text-center">6</td>
                              <td className="py-3 text-center">5</td>
                              <td className="py-3 text-center">4</td>
                              <td className="py-3 text-center">18</td>
                              <td className="py-3 text-center">16</td>
                              <td className="py-3 text-center">+2</td>
                              <td className="py-3 text-center font-bold">23</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-3 text-left">6</td>
                              <td className="py-3 text-left font-medium">Huachipato</td>
                              <td className="py-3 text-center">15</td>
                              <td className="py-3 text-center">6</td>
                              <td className="py-3 text-center">4</td>
                              <td className="py-3 text-center">5</td>
                              <td className="py-3 text-center">17</td>
                              <td className="py-3 text-center">16</td>
                              <td className="py-3 text-center">+1</td>
                              <td className="py-3 text-center font-bold">22</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-3 text-left">7</td>
                              <td className="py-3 text-left font-medium">Palestino</td>
                              <td className="py-3 text-center">15</td>
                              <td className="py-3 text-center">5</td>
                              <td className="py-3 text-center">6</td>
                              <td className="py-3 text-center">4</td>
                              <td className="py-3 text-center">16</td>
                              <td className="py-3 text-center">15</td>
                              <td className="py-3 text-center">+1</td>
                              <td className="py-3 text-center font-bold">21</td>
                            </tr>
                            <tr className="border-b bg-red-50">
                              <td className="py-3 text-left">16</td>
                              <td className="py-3 text-left font-medium">Deportes Iquique</td>
                              <td className="py-3 text-center">15</td>
                              <td className="py-3 text-center">1</td>
                              <td className="py-3 text-center">3</td>
                              <td className="py-3 text-center">11</td>
                              <td className="py-3 text-center">9</td>
                              <td className="py-3 text-center">28</td>
                              <td className="py-3 text-center">-19</td>
                              <td className="py-3 text-center font-bold">6</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="mt-4 flex flex-col gap-2 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full bg-green-50"></div>
                          <span>Clasificación a Copa Libertadores</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full bg-blue-50"></div>
                          <span>Clasificación a Copa Sudamericana</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full bg-red-50"></div>
                          <span>Descenso a Primera B</span>
                        </div>
                      </div>
                    </div>
                  </div>
    
                  {/* Próximos Partidos (oculto por defecto) */}
                  <div className="mt-6 hidden">
                    <div className="rounded-lg border bg-white p-6 shadow-sm">
                      <div className="mb-4 flex items-center">
                        <h3 className="text-lg font-semibold">Próximos Partidos - Fecha 16</h3>
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        {[
                          {
                            local: "Colo Colo",
                            visitante: "Universidad de Chile",
                            fecha: "Sábado 18 de Mayo, 16:00",
                            estadio: "Estadio Monumental",
                          },
                          {
                            local: "Universidad Católica",
                            visitante: "Unión Española",
                            fecha: "Domingo 19 de Mayo, 15:00",
                            estadio: "Estadio San Carlos de Apoquindo",
                          },
                          {
                            local: "Everton",
                            visitante: "Huachipato",
                            fecha: "Sábado 18 de Mayo, 19:00",
                            estadio: "Estadio Sausalito",
                          },
                          {
                            local: "Palestino",
                            visitante: "Deportes Iquique",
                            fecha: "Domingo 19 de Mayo, 17:30",
                            estadio: "Estadio Municipal de La Cisterna",
                          },
                        ].map((partido, index) => (
                          <div key={index} className="rounded-lg border bg-white shadow-sm overflow-hidden">
                            <div className="p-4">
                              <div className="grid grid-cols-3 items-center gap-4">
                                <div className="text-right font-medium">{partido.local}</div>
                                <div className="text-center text-sm text-gray-500">VS</div>
                                <div className="text-left font-medium">{partido.visitante}</div>
                              </div>
                              <div className="mt-4 text-center text-sm text-gray-500">{partido.fecha}</div>
                              <div className="text-center text-xs text-gray-500">{partido.estadio}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
    
                  {/* Últimas Noticias (oculto por defecto) */}
                  <div className="mt-6 hidden">
                    <div className="rounded-lg border bg-white p-6 shadow-sm">
                      <div className="mb-4 flex items-center">
                        <h3 className="text-lg font-semibold">Últimas Noticias</h3>
                      </div>
                      <div className="grid gap-6 md:grid-cols-2">
                        {[
                          {
                            titulo: "Colo Colo se prepara para el Superclásico con equipo completo",
                            resumen:
                              "El técnico del Cacique confirmó que contará con todos sus jugadores para el importante duelo ante Universidad de Chile.",
                            fecha: "15 de Mayo, 2025",
                          },
                          {
                            titulo: "Universidad Católica anuncia nuevo refuerzo para el segundo semestre",
                            resumen:
                              "El club cruzado confirmó la llegada de un delantero internacional que se sumará al plantel en julio.",
                            fecha: "14 de Mayo, 2025",
                          },
                          {
                            titulo: "La 'U' recupera a su capitán para el clásico ante Colo Colo",
                            resumen:
                              "Tras superar una lesión, el mediocampista estará disponible para el importante encuentro del fin de semana.",
                            fecha: "14 de Mayo, 2025",
                          },
                          {
                            titulo: "ANFP confirma horarios para las próximas tres fechas del campeonato",
                            resumen:
                              "Se dieron a conocer los días y horarios de los partidos correspondientes a las fechas 16, 17 y 18 del torneo nacional.",
                            fecha: "13 de Mayo, 2025",
                          },
                        ].map((noticia, index) => (
                          <div key={index} className="flex flex-col gap-2">
                            <h3 className="font-bold">{noticia.titulo}</h3>
                            <p className="text-sm text-gray-500">{noticia.resumen}</p>
                            <div className="text-xs text-gray-500">{noticia.fecha}</div>
                          </div>
                        ))}
                      </div>
                      <button className="mt-6 w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                        Ver todas las noticias
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
    
          {/* Footer */}
          <footer className="border-t bg-gray-50">
            <div className="border-t py-6">
              <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
                <p className="text-center text-sm text-gray-500">
                  &copy; {new Date().getFullYear()} Fut433. Todos los derechos reservados.
                </p>
              </div>
            </div>
          </footer>
        </div>
      )
}