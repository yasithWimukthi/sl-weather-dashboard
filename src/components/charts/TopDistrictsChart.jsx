import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip
} from "chart.js";

import { Bar } from "react-chartjs-2";
import { FaTrophy } from "react-icons/fa";
import Card from "../layout/Card";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip
);

const TopDistrictsChart = () => {

    const labels = ["Galle", "Colombo", "Ratnapura", "Kandy", "Kalutara"];
    const values = [48750, 46230, 45110, 42980, 41860];

    const data = {
        labels,
        datasets: [
            {
                data: values,
                borderRadius: 8,
                backgroundColor: [
                    "#1565c0",
                    "#1e88e5",
                    "#42a5f5",
                    "#64b5f6",
                    "#90caf9"
                ]
            }
        ]
    };

    const options = {
        indexAxis: "y",
        responsive: true,
        animation: {
            duration: 1200,
            easing: "easeOutQuart"
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: (context) =>
                        ` ${context.raw.toLocaleString()} mm`
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    callback: (value) => value.toLocaleString()
                },
                title: {
                    display: true,
                    text: "Total Precipitation (mm)"
                }
            },
            y: {
                ticks: {
                    font: {
                        weight: "600"
                    }
                }
            }
        }
    };

    return (
        <Card
            title="Top 5 Districts by Total Precipitation"
            icon={<FaTrophy color="#fb8c00" size={18} />}
        >
            <p style={{ fontSize: "13px", marginBottom: "10px", color: "#546e7a" }}>
                🏆 Highest rainfall recorded in <b>Galle</b> district
            </p>
            <Bar data={data} options={options} />
        </Card>
    );
};

export default TopDistrictsChart;
