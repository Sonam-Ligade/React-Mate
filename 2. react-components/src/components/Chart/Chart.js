import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const datapointValueArray = props.datapoints.map(
    (datapoint) => datapoint.value
  );
  const maximumValue = Math.max(...datapointValueArray);

  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={maximumValue}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
