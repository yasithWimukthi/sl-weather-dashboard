import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

import { Doughnut } from "react-chartjs-2";
import { FaTemperatureHigh } from "react-icons/fa";
import Card from "../layout/Card";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

const TemperaturePercentageChart = () => {

    const percentage = 58.3;

    const data = {
        labels: ["Above 30°C", "Below 30°C"],
        datasets: [
            {
                data: [percentage, 100 - percentage],
                backgroundColor: ["#fb8c00", "#eceff1"]
            }
        ]
    };

    return (
        <Card
            title="Months Above 30°C (Colombo - 2023)"
            icon={<FaTemperatureHigh color="#fb8c00"/>}
        >
                <Doughnut data={data} />
                <p style={{ textAlign: "center", fontWeight: "600" }}>
            {percentage}% of months exceeded 30°C
        </p>
        </Card>
    );
}

export default TemperaturePercentageChart;
