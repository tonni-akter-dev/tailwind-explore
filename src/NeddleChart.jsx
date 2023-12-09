import { useState, useEffect } from "react";
import GaugeChart from "react-gauge-chart";

const chartStyle = {
  height: 500,
  width: 500,
};

const NeddleChart = () => {
  
  const [value, setValue] = useState(0.5); // Initial value

  return (
    <div>
      <GaugeChart
        id="gauge-chart1"
        style={chartStyle}
        nrOfLevels={20}
        arcsLength={[0.2, 0.2, 0.2, 0.2, 0.2]}
        colors={["#FF5F6D", "#FFB200", "#F2FF00", "#00FFDD", "#00FF00"]}
        // percent={value}
        arcPadding={0.02}
        textColor="black"
        formatTextValue={(value) => `${value.toFixed(2)}%`}
      />
    </div>
  );
};

export default NeddleChart;
