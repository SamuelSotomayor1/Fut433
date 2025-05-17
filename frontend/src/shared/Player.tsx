export const Player = () => {
        return(
        <>
        <div className="bg-white text-gray-800 p-6 max-w-6xl mx-auto font-sans">
            <div className="flex items-center gap-6">
                <img
                src="/lamine.png"
                alt=""
                className="w-36 h-48 object-cover rounded-xl border"
                />
                <div>
                <h1 className="text-3xl font-bold"></h1>
                <p className="text-sm mt-1">Fecha de nacimiento: </p>
                <p className="text-sm">Origen: </p>
                <p className="text-sm">Demarcación: </p>
                <p className="text-sm">Títulos: </p>
                </div>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-6 text-center">
                
            </div>

            <h2 className="text-xl font-semibold mt-8 mb-2">Por Temporada</h2>
            <table className="w-full text-sm text-left border">
                <thead className="bg-gray-200">
                <tr>
                    <th className="p-2">Temporada</th>
                    <th className="p-2">Partidos</th>
                    <th className="p-2">Minutos</th>
                    <th className="p-2">Goles</th>
                    <th className="p-2">Asistencias</th>
                    <th className="p-2">T. Amarillas</th>
                </tr>
                </thead>
                <tbody>
                    <tr className="border-t">
                    <td className="p-2"></td>
                    <td className="p-2"></td>
                    <td className="p-2"></td>
                    <td className="p-2"></td>
                    <td className="p-2"></td>
                    <td className="p-2"></td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}