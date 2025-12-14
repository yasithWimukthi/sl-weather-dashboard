import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip
} from "chart.js";

import { Line } from "react-chartjs-2";
import { FaExclamationTriangle } from "react-icons/fa";
import Card from "../layout/Card";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip
);

const ExtremeWeatherLineChart = () => {

    const data = {
        labels: ["2019", "2020", "2021", "2022", "2023"],
        datasets: [
            {
                label: "Extreme Weather Days",
                data: [22, 28, 35, 41, 46],
                fill: true,
                backgroundColor: "rgba(229,57,53,0.2)",
                borderColor: "#e53935"
            }
        ]
    };

    const options = {
        plugins: {
            legend: { display: false }
        }
    };

    return (
        <Card
            title="Trend of Extreme Weather Events"
            icon={<FaExclamationTriangle color="#e53935" />}
                >
                <Line data={data} options={options} />
                </Card>
                );
            };

export default ExtremeWeatherLineChart;
