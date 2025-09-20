import { useState } from "react";
import axios from "axios";
import TripPlanningForm from "../components/TripPlanningForm";
import BudgetChart from "../components/BudgetChart";
import QuickOverview from "../components/QuickOverview";
import HotelsGrid from "../components/HotelsGrid";
import FlightsGrid from "../components/FlightsGrid";
import ItineraryScheduler from "../components/ItineraryScheduler";
import BookingDialog from "../components/BookingDialog";

import "@progress/kendo-theme-default/dist/all.css";

export default function TravelPlanner() {
  const [selectedCity, setSelectedCity] = useState("Orlando");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
  ); // 3 days later
  const [showBookingDialog, setShowBookingDialog] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [itinerary, setItinerary] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [budget, setBudget] = useState([]);
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [travelers, setTravelers] = useState(2);
  const [includeFlights, setIncludeFlights] = useState(false);



  const handlePlanTrip = async () => {
    setLoading(true);
    try {
      const result = await axios.post("/api/plan-trip", {
        city: selectedCity,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        includeFlights,
      });
      const itineraryWithDates = result.data.itinerary.map((item) => ({
        ...item,
        start: new Date(item.start),
        end: new Date(item.end),
      }));
      setItinerary(itineraryWithDates);
      setHotels(result.data.hotels);
      setFlights(result.data.flights || []);
      setBudget(
        result.data.budget.map((item) => ({
          ...item,
          category: `${item.category} ($${item.amount})`,
        }))
      );
    } catch (error) {
      console.error("Planning error:", error);
    }
    setLoading(false);
  };

  const handleBooking = (item) => {
    setSelectedBooking(item);
    setShowBookingDialog(true);
  };

  const getTripDuration = () => {
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const formatActivityDate = (activity) => {
    try {
      if (!activity.start) return "Date not available";
      const date =
        activity.start instanceof Date
          ? activity.start
          : new Date(activity.start);
      if (isNaN(date.getTime())) return "Invalid date";

      return `${date.toLocaleDateString()} at ${date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })}`;
    } catch (error) {
      return "Date error";
    }
  };

  return (
    <>
      <style jsx global>{`
        * {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", sans-serif !important;
        }
      `}</style>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 20px",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
        }}
      >
        <TripPlanningForm
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          travelers={travelers}
          setTravelers={setTravelers}
          includeFlights={includeFlights}
          setIncludeFlights={setIncludeFlights}
          onPlanTrip={handlePlanTrip}
          loading={loading}
          getTripDuration={getTripDuration}
        />

        {/* Budget and Overview - Side by Side */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px",
          }}
        >
          <BudgetChart budget={budget} />
          <QuickOverview itinerary={itinerary} formatActivityDate={formatActivityDate} />
        </div>

        <HotelsGrid hotels={hotels} onBooking={handleBooking} />

        <FlightsGrid flights={flights} includeFlights={includeFlights} />

        <ItineraryScheduler itinerary={itinerary} startDate={startDate} />

        <BookingDialog
          showBookingDialog={showBookingDialog}
          selectedBooking={selectedBooking}
          onClose={() => setShowBookingDialog(false)}
        />
      </div>
    </>
  );
}
