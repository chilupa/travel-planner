import { Grid, GridColumn } from "@progress/kendo-react-grid";

export default function FlightsGrid({ flights, includeFlights }) {
  if (!includeFlights || flights.length === 0) return null;

  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        marginBottom: "30px",
      }}
    >
      <h3
        style={{ margin: "0 0 20px 0", color: "#333", fontWeight: "600" }}
      >
        ✈️ Flights ({flights.length} items)
      </h3>
      <div style={{ height: "300px", overflow: "hidden" }}>
        <Grid data={flights} style={{ height: "100%" }}>
          <GridColumn field="airline" title="Airline" />
          <GridColumn field="price" title="Price" format="{0:c}" />
          <GridColumn field="duration" title="Duration" />
          <GridColumn field="departure" title="Departure" />
        </Grid>
      </div>
    </div>
  );
}