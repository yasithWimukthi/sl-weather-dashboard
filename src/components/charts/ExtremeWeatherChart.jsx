import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip
} from "chart.js";

import { Bar } from "react-chartjs-2";
import { FaExclamationTriangle } from "react-icons/fa";
import Card from "../layout/Card";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip
);

const ExtremeWeatherChart = () => {

    const data = {
        labels: ["Colombo", "Galle", "Jaffna", "Batticaloa", "Badulla"],
        datasets: [
            {
                data: [145, 168, 62, 91, 104],
                backgroundColor: "#e53935",
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
                    label: (ctx) => `${ctx.raw} days`
                }
            }
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: "Number of Days"
                }
            }
        }
    };

    return (
        <Card
            title="Extreme Weather Events"
            icon={<FaExclamationTriangle color="#e53935" />}
        >
            <p style={{ fontSize: "13px", color: "#607d8b" }}>
                Days with high precipitation & wind gusts
            </p>
            <Bar data={data} options={options} />
        </Card>
    );
};

export default ExtremeWeatherChart;
