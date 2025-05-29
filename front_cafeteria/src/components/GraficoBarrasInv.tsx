import { BoldIcon } from "@heroicons/react/24/outline";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryLabel } from "Victory";

interface Data {
  categoria: string;
  cant: number;
}

interface Props {
  data: Data[];
}

const GraficoBarras_CategoriaVentas = ({ data }: Props) => {
  // Mapa de colores por categoría
  const mapaColores: Record<string, string> = {
    "beb. caliente": "#dde5b6",
    "beb. fria": "#adc178",
    "postres": "#a98467",
    "frappe": "#6c584c"
  };

  return (
    <div className="w-full h-full text-left items-left max-w-md mx-auto">
      <VictoryChart
        width={400}
        height={395}
        theme={VictoryTheme.material}
        domainPadding={20}
        horizontal
        padding={{ left: 85, right: 30 }} 
      >
        <VictoryAxis
          dependentAxis
          style={{
            tickLabels: { fontSize: 11, padding: 6, fill: "#000" },
          }}
        />
        <VictoryAxis
          style={{
            tickLabels: { fontSize: 11, fill: "#000" },
            grid: { stroke: "#e0e0e0" },
          }}
        />
        <VictoryBar
          data={data}
          x="categoria"
          y="cant"
          barRatio={0.8}
          style={{
            data: {
              fill: ({ datum }) => mapaColores[datum.categoria] || "#adc178", // color por categoría
            },
            labels: { fill: "#000", fontSize: 14, fontWeight: 600 },
          }}
          labels={({ datum }) => datum.cant}
          labelComponent={<VictoryLabel dx={5} />}
        />
      </VictoryChart>
    </div>
  );
};

export default GraficoBarras_CategoriaVentas;
