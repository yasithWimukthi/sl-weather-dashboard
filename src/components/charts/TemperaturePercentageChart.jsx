import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip
} from "chart.js";

import { Bar } from "react-chartjs-2";
import { FaTemperatureHigh } from "react-icons/fa";
import Card from "../layout/Card";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip
);

const TemperaturePercentageChart = () => {

    const data = {
        labels: ["Colombo", "Jaffna", "Anuradhapura", "Kandy", "Nuwara Eliya"],
        datasets: [
            {
                data: [58.3, 75.0, 83.3, 41.6, 0],
                backgroundColor: "#fb8c00",
                borderRadius: 8
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: (ctx) => `${ctx.raw}%`
                }
            }
        },
        scales: {
            y: {
                max: 100,
                title: {
                    display: true,
                    text: "Percentage (%)"
                }
            }
        }
    };

    return (
        <Card
            title="Months with Mean Temperature > 30°C"
            icon={<FaTemperatureHigh color="#fb8c00" />}
        >
            <p style={{ fontSize: "13px", color: "#607d8b" }}>
                Percentage of months exceeding 30°C in 2023
            </p>
            <Bar data={data} options={options} />
        </Card>
    );
};

export default TemperaturePercentageChart;
