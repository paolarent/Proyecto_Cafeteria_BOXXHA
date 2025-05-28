
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryLabel } from "Victory";

interface Data {
  categoria: string;
  cant: number;
}

interface Props {
  data: Data[];
}

const GraficoBarras_CategoriaVentas = ({ data }: Props) => {
  return (
    <div className="w-full text-left items-left max-w-md mx-auto">
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={20}
        horizontal
        padding={{ top: 20, bottom: 50, left: 50, right: 30 }} 
      >
        <VictoryAxis
          dependentAxis
          style={{
            tickLabels: { fontSize: 10, padding: 5 },
          }}
        />
        <VictoryAxis
          style={{
            tickLabels: { fontSize: 10 },
            grid: { stroke: "#e0e0e0" },
          }}
        />
        <VictoryBar
          data={data}
          x="categoria"
          y="cant"
          barRatio={0.7}
          style={{
            data: { fill: "#36A2EB" },
            labels: { fill: "#333", fontSize: 10 },
          }}
          labels={({ datum }) => datum.cant}
          labelComponent={<VictoryLabel dx={5} />}
        />
      </VictoryChart>
    </div>
  );
};

export default GraficoBarras_CategoriaVentas;
