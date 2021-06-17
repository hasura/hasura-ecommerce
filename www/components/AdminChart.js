import * as React from "react";
import Chart from "chart.js";

const AdminChart = ({ data }) => {
  const chart = React.useRef(null);

  React.useEffect(() => {
    let chartSales = new Chart(chart.current, {
      type: "bar",
      data: {
        labels: data.map((r) => r.key.slice(0, 5)).reverse(),
        datasets: [
          {
            label: "Total",
            backgroundColor: "#1E40AF",
            data: data.map((r) => r.value.total.toFixed(2)).reverse(),
          },
        ],
      },
      maintainAspectRatio: false,
      options: {
        legend: {
          display: false,
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
          callbacks: {
            label: function (t, d) {
              var xLabel = d.datasets[t.datasetIndex].label;
              var yLabel = t.yLabel;
              return xLabel + ": $" + yLabel;
            },
          },
        },
        elements: {
          point: {
            radius: 0,
          },
        },
        scales: {
          xAxes: [
            {
              stacked: true,
              scaleLabel: {
                display: true,
                labelString: "Date (2 Weeks)",
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
              },
            },
          ],
          yAxes: [
            {
              stacked: true,
              scaleLabel: {
                display: true,
                labelString: "$ Sales",
              },
              gridLines: {},
              callback: function (value, index, values) {
                return value + "%";
              },
            },
          ],
        },
      },
    });
  }, [data]);

  return (
    <div className="col-8 pr-xs">
      <div className="shadow card mb-sm pad-sm">
        <p className="mb-xs">Sales - Last 2 Weeks</p>
        <canvas
          ref={chart}
          id="chartSales"
          style={{ width: "100%", height: 242 }}
        />
      </div>
    </div>
  );
};

export default AdminChart;
