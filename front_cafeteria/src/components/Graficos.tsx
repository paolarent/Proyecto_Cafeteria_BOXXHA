// ../src/components/Graficos.tsx 

import { VictoryPie } from "Victory";

interface Data {
  categoria: string,
  cant: number,
}

interface Props {
  data: Data [];
}
const colores = ["#dde5b6", "#adc178", "#a98467", "#6c584c"];

const GraficoVentas = ({ data }: Props) => {
  return(
    <div className="flex flex-row w-full max-w-xs mx-auto aspect-square gap-2 pb-40">
      <VictoryPie 
        data={data} 
        x="categoria"
        y="cant"
        colorScale={colores}
        padding={{ top: 5, bottom: 5, left: 5, right: 5 }}
        width={250}
        height={250}
        innerRadius={3} 
        padAngle={3}
        labels={() => ""} //ocultar las etiquetas
      />
      <div className="w-full space-y-4 text-sm p-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <span
              className="inline-block w-3 h-3 rounded-full"
              style={{ backgroundColor: colores[index % colores.length] }}
            ></span>
            <span>{item.categoria}: {item.cant}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GraficoVentas;
