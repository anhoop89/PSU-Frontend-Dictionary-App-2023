import React from "react";
import { Bar } from "react-chartjs-2";

const ThesaurusChart = ({ stats }) => {
  const words = stats.map((stat) => stat?.word);
  const value = stats.map((stat) => stat?.frequency?.diversity);

  const data = {
    labels: words,
    datasets: [
      {
        label: "Diversity",
        data: value,
        backgroundColor: "rgba(36, 161, 177, 0.671)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.6)",
        hoverBorderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <p className="px-4">
        The diversity score is a numeric value between 0 and 1 that indicates
        the frequency of a word's occurrence in text. A higher diversity score
        signifies that the word is more commonly used.
      </p>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ThesaurusChart;
