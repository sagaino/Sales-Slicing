import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartItem = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sales Chart',
      },
    },
  };
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Rating Sales',
        data: labels.map((e) => {
          if(e === "January") return 1000000;
          else if(e === "February") return 1400000;
          else if(e === "March") return 1400000;
          else if(e === "April") return 1600000;
          else if(e === "May") return 1500000;
          else if(e === "June") return 1200000;
          else if(e === "July") return 1300000;
        }),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  return (
    <div className="chart-item-section">
      <Line options={options} data={data} />
    </div>
  );
};

export default ChartItem;
