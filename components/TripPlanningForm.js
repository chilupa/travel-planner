import { DropDownList } from "@progress/kendo-react-dropdowns";
import { DatePicker } from "@progress/kendo-react-dateinputs";
import { Button } from "@progress/kendo-react-buttons";
import { NumericTextBox, Switch } from "@progress/kendo-react-inputs";

export default function TripPlanningForm({
  selectedCity,
  setSelectedCity,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  travelers,
  setTravelers,
  includeFlights,
  setIncludeFlights,
  onPlanTrip,
  loading,
  getTripDuration
}) {
  const cities = ["Orlando", "Miami", "New York", "Las Vegas", "Los Angeles"];

  return (
    <div style={{ textAlign: "center", marginBottom: "40px" }}>
      <h1
        style={{
          fontSize: "2.5rem",
          margin: "0 0 20px 0",
          color: "#333",
          fontWeight: "600",
        }}
      >
        🌍 Travel Planner
      </h1>

      <div
        style={{
          display: "flex",
          gap: "15px",
          alignItems: "end",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <DropDownList
          data={cities}
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.value)}
          style={{ width: "180px" }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <label
            style={{
              fontSize: "12px",
              color: "#666",
              fontWeight: "500",
              marginBottom: "4px",
            }}
          >
            From
          </label>
          <DatePicker
            value={startDate}
            onChange={(e) => setStartDate(e.value)}
            style={{ width: "150px" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <label
            style={{
              fontSize: "12px",
              color: "#666",
              fontWeight: "500",
              marginBottom: "4px",
            }}
          >
            To
          </label>
          <DatePicker
            value={endDate}
            onChange={(e) => setEndDate(e.value)}
            min={startDate}
            style={{ width: "150px" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <label
            style={{
              fontSize: "12px",
              color: "#666",
              fontWeight: "500",
              marginBottom: "4px",
            }}
          >
            Travelers
          </label>
          <NumericTextBox
            value={travelers}
            onChange={(e) => setTravelers(e.value)}
            min={1}
            max={10}
            style={{ width: "80px" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <label
            style={{
              fontSize: "12px",
              color: "#666",
              fontWeight: "500",
              marginBottom: "4px",
            }}
          >
            Include Flights
          </label>
          <Switch
            checked={includeFlights}
            onChange={(e) => setIncludeFlights(e.value)}
          />
        </div>

        <Button
          onClick={onPlanTrip}
          disabled={loading}
          primary
          style={{
            padding: "12px 30px",
            backgroundColor: loading ? "#ccc" : "#ff6358",
            borderColor: loading ? "#ccc" : "#ff6358",
            color: "white",
          }}
        >
          {loading ? "Planning..." : `Plan ${getTripDuration()}-Day Trip`}
        </Button>
      </div>
    </div>
  );
}