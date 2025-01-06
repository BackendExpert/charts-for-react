import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  const labels = Object.keys(data);
  const values = labels.map((key) => data[key].value)
  const colors = labels.map((key) => data[key].color)

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Usage",
        data: values,
        backgroundColor: colors,
        borderColor: ["#ffffff"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-center text-xl font-bold mb-4">Pie Chart Example</h2>
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
