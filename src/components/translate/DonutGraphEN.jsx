import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const backgroundColors = [
  "rgba(54, 162, 235, 0.8)",
  "rgba(255, 206, 86, 0.8)",
  "rgba(255, 99, 132, 0.8)",
  "rgba(75, 192, 192, 0.8)",
  "rgba(153, 102, 255, 0.8)",
];

const borderColors = [
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(255, 99, 132, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
];

const DonutGraphEN = ({ getSortedWords }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = null;

    const createChart = () => {
      if (chartInstance) {
        chartInstance.destroy();
      }

      const labels = getSortedWords
        .filter((word) => word.word.includes("-en"))
        .slice(0, 5)
        .map((word) => `#WORD: ${word.word.slice(0, -3).toUpperCase()}`);
      const data = getSortedWords
        .filter((word) => word.word.includes("-en"))
        .slice(0, 5)
        .map((word) => word.frequency);

      const chartData = {
        labels,
        datasets: [
          {
            label: "Times Translation: ",
            data,
            backgroundColor: backgroundColors,
            borderColor: borderColors,
            borderWidth: 1,
          },
        ],
      };

      if (chartRef.current) {
        chartInstance = new Chart(chartRef.current, {
          type: "doughnut",
          data: chartData,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "top",
                labels: {
                  font: {
                    size: 14,
                  },
                  color: "white",
                },
              },
            },
          },
        });
      }
    };

    createChart();

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [getSortedWords]);

  return (
    <div
      className="bg-dark rounded mx-auto p-4 mt-3 d-flex 
                justify-content-center align-items-center border"
      style={{ width: "90%", backgroundColor: "var(--bs-darker)" }}
    >
      <canvas
        ref={chartRef}
        className="text-white"
        style={{ color: "white" }}
        aria-label="donut chart"
        role="img"
      ></canvas>
    </div>
  );
};

export default DonutGraphEN;
