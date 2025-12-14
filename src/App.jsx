import './App.css'
import Dashboard from "./components/layout/Dashboard.jsx";
import TopDistrictsChart from "./components/charts/TopDistrictsChart.jsx";
import PrecipitationSeasonChart from "./components/charts/PrecipitationSeasonChart.jsx";
import TemperaturePercentageChart from "./components/charts/TemperaturePercentageChart.jsx";
import ExtremeWeatherChart from "./components/charts/ExtremeWeatherChart.jsx";
import TemperaturePercentageBarChart from "./components/charts/TemperaturePercentageBarChart.jsx";
import ExtremeWeatherLineChart from "./components/charts/ExtremeWeatherLineChart.jsx";

function App() {

  return (
      <Dashboard>
          <TopDistrictsChart />
          <PrecipitationSeasonChart />
          <TemperaturePercentageChart />
          <TemperaturePercentageBarChart />
          <ExtremeWeatherChart />
          <ExtremeWeatherLineChart />
      </Dashboard>
  )
}

export default App
