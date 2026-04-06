import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import PageSections from "@/components/PageSections";
import BookingModal from "@/components/BookingModal";

export default function Index() {
  const [activeNav, setActiveNav] = useState("hero");
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [carType, setCarType] = useState("Легковой");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "services", "parking", "gallery", "reviews", "contacts"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            setActiveNav(id);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBookingOpen = () => setBookingOpen(true);

  const handleBookingClose = () => {
    setBookingOpen(false);
    setSubmitted(false);
    setName("");
    setPhone("");
    setSelectedDate("");
    setSelectedTime("");
    setSelectedService("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#111111", color: "#e5e5e5", fontFamily: "'IBM Plex Sans', sans-serif" }}>
      <Navbar activeNav={activeNav} onBookingOpen={handleBookingOpen} />
      <PageSections onBookingOpen={handleBookingOpen} />
      <BookingModal
        open={bookingOpen}
        selectedService={selectedService}
        setSelectedService={setSelectedService}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
        carType={carType}
        setCarType={setCarType}
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        submitted={submitted}
        onSubmit={handleSubmit}
        onClose={handleBookingClose}
      />
    </div>
  );
}
