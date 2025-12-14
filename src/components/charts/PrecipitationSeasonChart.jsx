import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";
import { WiRain } from "react-icons/wi";
import Card from "../layout/Card";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
);

const PrecipitationSeasonChart = () => {

    const data = {
        labels: ["Colombo", "Kandy", "Galle", "Jaffna", "Badulla"],
        datasets: [
            {
                label: "Avg Precipitation (mm)",
                data: [340, 290, 380, 210, 260],
                backgroundColor: "#1e88e5",
                borderRadius: 6
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: (ctx) => `${ctx.raw} mm`
                }
            }
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: "Precipitation (mm)"
                }
            }
        }
    };

    return (
        <Card
            title="Most Precipitous Month per District"
            icon={<WiRain color="#1e88e5" size={22} />}
        >
            <p style={{ fontSize: "13px", color: "#607d8b" }}>
                Highest average monthly rainfall recorded (2010–2024)
            </p>
            <Bar data={data} options={options} />
        </Card>
    );
};

export default PrecipitationSeasonChart;
