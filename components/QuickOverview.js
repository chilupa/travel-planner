import { PanelBar, PanelBarItem } from "@progress/kendo-react-layout";

export default function QuickOverview({ itinerary, formatActivityDate }) {
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
        📍 Quick Overview
      </h3>
      <div style={{ height: "300px", overflow: "auto" }}>
        <PanelBar>
          <PanelBarItem title="🎯 Activities" expanded>
            {itinerary.length > 0 ? (
              itinerary.map((activity, index) => (
                <div
                  key={index}
                  style={{
                    padding: "10px 0",
                    borderBottom: "1px solid #f0f0f0",
                  }}
                >
                  <div style={{ fontWeight: "500", marginBottom: "4px" }}>
                    {activity.title}
                  </div>
                  <div style={{ fontSize: "12px", color: "#666" }}>
                    {formatActivityDate(activity)}
                  </div>
                </div>
              ))
            ) : (
              <div
                style={{
                  padding: "20px",
                  textAlign: "center",
                  color: "#999",
                }}
              >
                Select dates and click "Plan Trip"
              </div>
            )}
          </PanelBarItem>
        </PanelBar>
      </div>
    </div>
  );
}