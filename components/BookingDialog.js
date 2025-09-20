import { Dialog } from "@progress/kendo-react-dialogs";
import { Button } from "@progress/kendo-react-buttons";

export default function BookingDialog({ 
  showBookingDialog, 
  selectedBooking, 
  onClose 
}) {
  if (!showBookingDialog) return null;

  return (
    <Dialog title="Booking Details" onClose={onClose}>
      <div style={{ padding: "30px" }}>
        <h4 style={{ margin: "0 0 20px 0", fontWeight: "600" }}>
          {selectedBooking?.name}
        </h4>
        <p>Price: ${selectedBooking?.price}/night</p>
        <p>Rating: {selectedBooking?.rating}/5</p>
        <p>Distance: {selectedBooking?.distance}</p>
        <div style={{ marginTop: "30px", display: "flex", gap: "15px" }}>
          <Button primary>Confirm Booking</Button>
          <Button onClick={onClose}>Cancel</Button>
        </div>
      </div>
    </Dialog>
  );
}