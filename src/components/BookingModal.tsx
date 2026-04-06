import Icon from "@/components/ui/icon";

const SERVICES = [
  { title: "Шиномонтаж легковых", price: "от 300 ₽" },
  { title: "Шиномонтаж грузовых", price: "от 800 ₽" },
  { title: "Балансировка колёс", price: "от 200 ₽" },
  { title: "Ремонт шин", price: "от 150 ₽" },
  { title: "Хранение шин", price: "от 1500 ₽/сезон" },
  { title: "Подкачка и азот", price: "от 100 ₽" },
];

const TIME_SLOTS = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"];

interface BookingModalProps {
  open: boolean;
  selectedService: string;
  setSelectedService: (v: string) => void;
  selectedDate: string;
  setSelectedDate: (v: string) => void;
  selectedTime: string;
  setSelectedTime: (v: string) => void;
  carType: string;
  setCarType: (v: string) => void;
  name: string;
  setName: (v: string) => void;
  phone: string;
  setPhone: (v: string) => void;
  submitted: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onClose: () => void;
}

export default function BookingModal({
  open,
  selectedService, setSelectedService,
  selectedDate, setSelectedDate,
  selectedTime, setSelectedTime,
  carType, setCarType,
  name, setName,
  phone, setPhone,
  submitted,
  onSubmit,
  onClose,
}: BookingModalProps) {
  if (!open) return null;

  const today = new Date().toISOString().split("T")[0];

  return (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(0,0,0,0.88)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div style={{ background: "#181818", width: "100%", maxWidth: 560, border: "1px solid #2a2a2a", borderTop: "3px solid #f97316", maxHeight: "90vh", overflowY: "auto" }}>
        <div style={{ padding: "28px 32px 24px", borderBottom: "1px solid #222", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "24px", fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Онлайн <span style={{ color: "#f97316" }}>Запись</span>
            </div>
            <div style={{ fontSize: "13px", color: "#444", marginTop: 4 }}>Выберите услугу, дату и время</div>
          </div>
          <button
            onClick={onClose}
            style={{ background: "transparent", border: "1px solid #2a2a2a", color: "#666", width: 36, height: 36, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <Icon name="X" size={16} style={{ color: "#666" }} />
          </button>
        </div>

        {submitted ? (
          <div style={{ padding: "60px 32px", textAlign: "center" }}>
            <div style={{ width: 80, height: 80, borderRadius: "50%", background: "rgba(249,115,22,0.12)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
              <Icon name="CheckCircle" size={40} style={{ color: "#f97316" }} />
            </div>
            <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "28px", fontWeight: 700, color: "#fff", marginBottom: 12, textTransform: "uppercase" }}>Запись принята!</div>
            <p style={{ fontSize: "15px", color: "#666", lineHeight: 1.7, marginBottom: 32 }}>
              Мы свяжемся с вами по номеру <strong style={{ color: "#f97316" }}>{phone}</strong> для подтверждения записи.
            </p>
            <div style={{ background: "#111", padding: "20px", marginBottom: 32, textAlign: "left" }}>
              <div style={{ fontSize: "11px", color: "#444", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Детали записи</div>
              <div style={{ fontSize: "14px", color: "#888" }}><span style={{ color: "#f97316" }}>Услуга:</span> {selectedService}</div>
              <div style={{ fontSize: "14px", color: "#888", marginTop: 6 }}><span style={{ color: "#f97316" }}>Дата:</span> {selectedDate} в {selectedTime}</div>
              <div style={{ fontSize: "14px", color: "#888", marginTop: 6 }}><span style={{ color: "#f97316" }}>Тип авто:</span> {carType}</div>
            </div>
            <button
              onClick={onClose}
              style={{ background: "#f97316", color: "#111", fontWeight: 700, fontSize: "14px", letterSpacing: "0.1em", textTransform: "uppercase", padding: "16px 40px", border: "none", cursor: "pointer", fontFamily: "'Oswald', sans-serif" }}
            >
              Закрыть
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} style={{ padding: "32px" }}>
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: "block", fontSize: "11px", color: "#f97316", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 12, fontWeight: 600 }}>Тип автомобиля</label>
              <div style={{ display: "flex", gap: 3 }}>
                {["Легковой", "Грузовой"].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setCarType(type)}
                    style={{ flex: 1, padding: "14px", background: carType === type ? "#f97316" : "#111", color: carType === type ? "#111" : "#555", fontWeight: 700, fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", border: `1px solid ${carType === type ? "#f97316" : "#2a2a2a"}`, cursor: "pointer", fontFamily: "'Oswald', sans-serif", transition: "all 0.2s", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
                  >
                    <Icon name={type === "Легковой" ? "Car" : "Truck"} size={16} style={{ color: carType === type ? "#111" : "#444" }} />
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: 24 }}>
              <label style={{ display: "block", fontSize: "11px", color: "#f97316", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 12, fontWeight: 600 }}>Услуга</label>
              <select
                required
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                style={{ width: "100%", padding: "14px 16px", background: "#111", color: selectedService ? "#e5e5e5" : "#444", border: "1px solid #2a2a2a", fontSize: "14px", outline: "none", cursor: "pointer", fontFamily: "'IBM Plex Sans', sans-serif" }}
              >
                <option value="">Выберите услугу...</option>
                {SERVICES.map((s) => <option key={s.title} value={s.title}>{s.title} — {s.price}</option>)}
              </select>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
              <div>
                <label style={{ display: "block", fontSize: "11px", color: "#f97316", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 12, fontWeight: 600 }}>Дата</label>
                <input
                  required
                  type="date"
                  min={today}
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  style={{ width: "100%", padding: "14px 16px", background: "#111", color: "#e5e5e5", border: "1px solid #2a2a2a", fontSize: "14px", outline: "none", fontFamily: "'IBM Plex Sans', sans-serif", boxSizing: "border-box" as const, colorScheme: "dark" }}
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "11px", color: "#f97316", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 12, fontWeight: 600 }}>Время</label>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 4, maxHeight: 160, overflowY: "auto" }}>
                  {TIME_SLOTS.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTime(slot)}
                      style={{ padding: "8px 4px", background: selectedTime === slot ? "#f97316" : "#111", color: selectedTime === slot ? "#111" : "#555", fontWeight: 600, fontSize: "12px", border: `1px solid ${selectedTime === slot ? "#f97316" : "#2a2a2a"}`, cursor: "pointer", fontFamily: "'IBM Plex Sans', sans-serif", transition: "all 0.2s" }}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }}>
              <div>
                <label style={{ display: "block", fontSize: "11px", color: "#f97316", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 12, fontWeight: 600 }}>Ваше имя</label>
                <input
                  required
                  type="text"
                  placeholder="Иван Иванов"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ width: "100%", padding: "14px 16px", background: "#111", color: "#e5e5e5", border: "1px solid #2a2a2a", fontSize: "14px", outline: "none", fontFamily: "'IBM Plex Sans', sans-serif", boxSizing: "border-box" as const }}
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "11px", color: "#f97316", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 12, fontWeight: 600 }}>Телефон</label>
                <input
                  required
                  type="tel"
                  placeholder="+7 (999) 000-00-00"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{ width: "100%", padding: "14px 16px", background: "#111", color: "#e5e5e5", border: "1px solid #2a2a2a", fontSize: "14px", outline: "none", fontFamily: "'IBM Plex Sans', sans-serif", boxSizing: "border-box" as const }}
                />
              </div>
            </div>

            <button
              type="submit"
              style={{ width: "100%", background: "#f97316", color: "#111", fontWeight: 700, fontSize: "15px", letterSpacing: "0.1em", textTransform: "uppercase", padding: "18px", border: "none", cursor: "pointer", fontFamily: "'Oswald', sans-serif", transition: "background 0.2s", display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}
              onMouseOver={e => (e.currentTarget.style.background = "#ea6c0a")}
              onMouseOut={e => (e.currentTarget.style.background = "#f97316")}
            >
              <Icon name="CalendarCheck" size={18} style={{ color: "#111" }} />
              Подтвердить запись
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
