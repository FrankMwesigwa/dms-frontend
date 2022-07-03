import React from "react";
import { Line } from "react-chartjs-2"
import {Chart as ChartJs, LineElement, PointElement, CategoryScale, LinearScale} from "chart.js"

ChartJs.register(
    PointElement,
    LineElement,
    CategoryScale,
    LinearScale
)

const LineChart = ({products}) => {
  const data = {
    labels: products && products.map(x =>x.productname),
    datasets: [
      {
        label: "Stock Quantity By Category",
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
      <Line height={200} data={data} options={option} />
      </>
  );
};

export default LineChart;
