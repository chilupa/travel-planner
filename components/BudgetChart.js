import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartLegend,
} from "@progress/kendo-react-charts";

export default function BudgetChart({ budget }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      }}
    >
      <h3
        style={{ margin: "0 0 20px 0", color: "#333", fontWeight: "600" }}
      >
        💰 Budget Breakdown
      </h3>
      <div style={{ height: "300px" }}>
        <Chart style={{ height: "100%" }}>
          <ChartLegend position="bottom" />
          <ChartSeries>
            <ChartSeriesItem
              type="pie"
              data={budget}
              field="amount"
              categoryField="category"
            />
          </ChartSeries>
        </Chart>
      </div>
    </div>
  );
}