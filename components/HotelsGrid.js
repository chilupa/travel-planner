import { Grid, GridColumn } from "@progress/kendo-react-grid";

export default function HotelsGrid({ hotels, onBooking }) {
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
        🏨 Hotels ({hotels.length} items)
      </h3>
      <div style={{ height: "300px", overflow: "hidden" }}>
        <Grid data={hotels} style={{ height: "100%" }}>
          <GridColumn field="name" title="Hotel" />
          <GridColumn field="price" title="Price" format="{0:c}" />
          <GridColumn field="rating" title="Rating" />
          <GridColumn field="distance" title="Distance" />
          <GridColumn
            title="Book"
            cell={(props) => (
              <td>
                <button
                  onClick={() => onBooking(props.dataItem)}
                  style={{
                    padding: "6px 12px",
                    backgroundColor: "#28a745",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  Book
                </button>
              </td>
            )}
          />
        </Grid>
      </div>
    </div>
  );
}