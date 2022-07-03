import React from "react";
import { Doughnut } from "react-chartjs-2"
import {Chart as ChartJs, ArcElement, Tooltip, Legend} from "chart.js"

ChartJs.register(
    Tooltip,
    Legend,
    ArcElement
)

const DoughnutChart = ({products}) => {
  const data = {
    labels: products && products.map(x =>x.productname),
    datasets: [
      {
        label: "Sales Analytics",
        backgroundColor: [
            "rgba(52, 195, 143, 0.8)",
            "rgba(245, 40, 145, 0.8)",
            "rgba(97, 77, 245, 0.61)",
            "rgba(210, 141, 113, 0.61)",
            "rgba(210, 141, 39, 0.91)",
            "rgba(210, 69, 39, 0.91)",
            "rgba(23, 218, 23, 0.91)",
        ],
        borderColor: [
            "rgba(52, 195, 143, 0.8)",
            "rgba(245, 40, 145, 0.8)",
            "rgba(97, 77, 245, 0.61)",
            "rgba(210, 141, 113, 0.61)",
            "rgba(210, 141, 39, 0.91)",
            "rgba(210, 69, 39, 0.91)",
            "rgba(23, 218, 23, 0.91)",
        
        ],
        borderWidth: 1,
        hoverBackgroundColor: "rgba(52, 195, 143, 0.9)",
        hoverBorderColor: "rgba(52, 195, 143, 0.9)",
        data: products && products.map(x =>x.quantity),
      },
    ],
  }

  const option = {
    scales: {
      y: 
        {
          beginAtZero: true,
        },
    },
  }

  return (
      <>
      <Doughnut height={200} data={data} options={option} />
      </>
  );
};

export default DoughnutChart;
