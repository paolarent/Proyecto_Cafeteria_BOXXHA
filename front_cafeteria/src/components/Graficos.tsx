// ../src/components/Graficos.tsx 

import { VictoryPie } from "Victory";

interface Data {
  categoria: string,
  cant: number,
}

interface Props {
  data: Data [];
}

const GraficoVentas = ({ data }: Props) => {
  return(
    <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl mb-6 border-b-2 border-gray-200 pb-2 font-semibold">Distribución de Ventas</h2>
      <VictoryPie 
        data={data} 
        x="categoria"
        y="cant"
        colorScale={["#FF6384", "#36A2EB", "#FFCE56", "#8AFFC1"]}
        labels={({ datum }) => `${datum.categoria}: ${datum.cant}`}
        style={{
          labels: { fontSize: 14, fill: "#333" }
        }}
        width={350}
        height={350}
        innerRadius={50}
        padAngle={3}
      />
    </div>
  );
};

export default GraficoVentas;
