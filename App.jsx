import { useState } from "react";

export default function App() {
  const [materias, setMaterias] = useState([]);
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");

  const agregarMateria = () => {
    if (!nombre || !fecha) return;
    setMaterias([...materias, { nombre, fecha }]);
    setNombre("");
    setFecha("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Mi Cursada</h1>

        <div className="space-y-2 mb-4">
          <input
            className="w-full border rounded-lg p-2"
            placeholder="Nombre de la materia"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="date"
            className="w-full border rounded-lg p-2"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
          <button
            onClick={agregarMateria}
            className="w-full bg-blue-600 text-white rounded-lg p-2"
          >
            Agregar parcial
          </button>
        </div>

        <ul className="space-y-2">
          {materias.map((m, i) => (
            <li key={i} className="border rounded-lg p-2">
              <p className="font-semibold">{m.nombre}</p>
              <p className="text-sm text-gray-500">Parcial: {m.fecha}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
