import BookingForm from "../components/BookingForm";

import bgImg from "../assets/image.png";

function Booking() {
  return (
    // booking background image
    <div
      className="h-full w-full bg-cover bg-center "
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <BookingForm />
    </div>
  );
}
export default Booking;