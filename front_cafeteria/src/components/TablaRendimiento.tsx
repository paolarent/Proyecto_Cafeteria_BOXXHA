// src/components/TablaRendimiento.tsx

// Crear el tipo Empleado rendimiento

interface EmpleadoRend  {
    nombre: string,
    apellido: string,
    ventas: number,
}

// Datos que recibira el grafico

interface Props {
    data: EmpleadoRend [];
}

const TablaRendimiento = ({data}: Props) => {
    return(
        <div className="overflow-x-auto w-full">
      <table className="min-w-full divide-y divide-gray-200 shadow rounded-lg overflow-hidden text-sm">
        <thead className="bg-[#311808] text-white">
          <tr>
            <th className="px-4 py-2 text-left">Empleado</th>
            <th className="px-4 py-2 text-left">Ventas realizadas</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {data.map((empleado, idx) => (
            <tr key={idx}>
              <td className="px-4 py-2">{`${empleado.nombre} ${empleado.apellido}`}</td>
              <td className="px-4 py-2">{empleado.ventas}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
};

export default TablaRendimiento;
