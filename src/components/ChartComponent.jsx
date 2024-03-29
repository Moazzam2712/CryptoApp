import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title
} from "chart.js";

ChartJS.register(
  CategoryScale, 
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title
);
const ChartComponent = ({ array = [], currency, days }) => {
  const prices = [];
  const dates = [];
  const data={
    labels: dates,
    datasets: [
      {
        label: `Prices in ${currency}`,
        data: prices,
        borderColor:"rgb(255,99,132)",
        backgroundColor:"rgba(255,99,132,0.5)"
      },
    ],
  }

  for (let i = 0; i < array.length; i++) {
    if (days==="24h") dates.push(new Date(array[i][0]).toLocaleTimeString())  
    else dates.push(new Date(array[i][0]).toLocaleDateString())    
    prices.push(array[i][1])
  }

  return (
    <Line
      options={{
        responsive: true,
      }}
      data={data}
    />
  );
};

export default ChartComponent;
