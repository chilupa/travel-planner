import { Scheduler } from "@progress/kendo-react-scheduler";

export default function ItineraryScheduler({ itinerary, startDate }) {
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
        📅 Itinerary ({itinerary.length} items)
      </h3>
      <div
        style={{
          height: "400px",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          overflow: "auto",
        }}
      >
        <Scheduler
          data={itinerary}
          defaultDate={startDate}
          view="week"
          workDayStart="06:00"
          workDayEnd="22:00"
          showWorkHours={false}
          style={{ height: "100%" }}
        />
      </div>
    </div>
  );
}