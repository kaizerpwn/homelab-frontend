"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  scales: {
    y: {
      ticks: { color: "#fff", beginAtZero: true },
    },
    x: {
      ticks: { color: "#fff", beginAtZero: true },
    },
  },
  plugins: {
    legend: {
      labels: {
        color: "#FFFFFF",
      },
      position: "top" as const,
    },
  },
};

const labels = [
  "01:00 H",
  "02:00 H",
  "03:00 H",
  "04:00 H",
  "05:00 H",
  "06:00 H",
  "07:00 H",
  "08:00 H",
  "09:00 H",
  "10:00 H",
  "11:00 H",
  "12:00 H",
  "13:00 H",
  "14:00 H",
  "15:00 H",
  "16:00 H",
  "17:00 H",
  "18:00 H",
  "19:00 H",
  "20:00 H",
  "21:00 H",
  "22:00 H",
  "23:00 H",
  "24:00 H",
];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Temperatura po satu",
      data: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 11, 12, 13, 14, 15, 3, 17, 18, 19, 12, 4,
        22, 1, 12,
      ],
      borderColor: "#A78BFA",
      backgroundColor: "rgba(167, 139, 250, 0.5)",
      fontColor: "#FFFFFF",
      color: "#FFFFFF",
    },
  ],
};

const TemperatureGraph = () => {
  return (
    <div className="text-white mt-10 h-40">
      <div className="border-l-3 border-primaryColor/70 pl-4">
        <h1 className="text-2xl">Temperature po satu</h1>
        <h3 className="text-md text-gray-400">Statistika zadnjih 24h</h3>
      </div>
      <Line options={options} data={data} className="max-h-[240px]" />
    </div>
  );
};

export default TemperatureGraph;
