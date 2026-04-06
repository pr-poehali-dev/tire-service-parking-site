import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/d61b9fc4-90aa-438f-abfa-9fc27ecfd134/files/8acce4d7-7eb7-4e22-bc1c-f6375a5b301d.jpg";

const SERVICES = [
  {
    icon: "Car",
    title: "Шиномонтаж легковых",
    desc: "Замена, балансировка, ремонт колёс для легковых автомобилей любых марок",
    price: "от 300 ₽",
    time: "30 мин",
    tag: "Легковые",
  },
  {
    icon: "Truck",
    title: "Шиномонтаж грузовых",
    desc: "Полный цикл работ с шинами грузовых авто, автобусов и спецтехники",
    price: "от 800 ₽",
    time: "60 мин",
    tag: "Грузовые",
  },
  {
    icon: "RotateCcw",
    title: "Балансировка колёс",
    desc: "Компьютерная балансировка на современном станке 3D-технологии",
    price: "от 200 ₽",
    time: "20 мин",
    tag: "Точность",
  },
  {
    icon: "Wrench",
    title: "Ремонт шин",
    desc: "Заплатки, жгуты, вулканизация — восстановим любое повреждение",
    price: "от 150 ₽",
    time: "15 мин",
    tag: "Ремонт",
  },
  {
    icon: "Package",
    title: "Хранение шин",
    desc: "Сезонное хранение колёс в чистом, охраняемом складе с маркировкой",
    price: "от 1500 ₽/сезон",
    time: "—",
    tag: "Хранение",
  },
  {
    icon: "Zap",
    title: "Подкачка и азот",
    desc: "Накачка азотом для стабильного давления и защиты дисков от коррозии",
    price: "от 100 ₽",
    time: "10 мин",
    tag: "Быстро",
  },
];

const GALLERY_ITEMS = [
  { label: "Грузовой шиномонтаж", icon: "Truck" },
  { label: "Балансировка", icon: "Settings" },
  { label: "Стоянка", icon: "Car" },
  { label: "Склад шин", icon: "Package" },
];

const REVIEWS = [
  {
    name: "Алексей Морозов",
    role: "Водитель фуры",
    text: "Обслуживаю грузовик уже 3 года. Быстро, качественно, без очередей. Цены честные. Рекомендую всем дальнобойщикам.",
    stars: 5,
    date: "Март 2026",
  },
  {
    name: "Наталья Семёнова",
    role: "Частный клиент",
    text: "Записалась онлайн, приехала точно ко времени — всё готово. Поменяли резину за 40 минут. Очень удобно!",
    stars: 5,
    date: "Февраль 2026",
  },
  {
    name: "Дмитрий Краснов",
    role: "Автопарк ООО «Логист»",
    text: "Обслуживаем весь автопарк из 12 машин. Корпоративные скидки, быстрый выезд, всегда отличное качество.",
    stars: 5,
    date: "Январь 2026",
  },
];

const PARKING_FEATURES = [
  { icon: "Shield", title: "Охрана 24/7", desc: "Видеонаблюдение и охранник на въезде круглосуточно" },
  { icon: "MapPin", title: "Удобный въезд", desc: "Широкие ворота для любого транспорта, включая фуры" },
  { icon: "Lightbulb", title: "Освещение", desc: "Полное освещение территории в тёмное время суток" },
  { icon: "CreditCard", title: "Абонементы", desc: "Дневные, ночные и месячные абонементы на выбор" },
];

const TIME_SLOTS = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"];

const NAV_ITEMS = [
  { label: "Главная", href: "#hero" },
  { label: "Услуги", href: "#services" },
  { label: "Парковка", href: "#parking" },
  { label: "Галерея", href: "#gallery" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

export default function Index() {
  const [activeNav, setActiveNav] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [carType, setCarType] = useState("Легковой");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const today = new Date().toISOString().split("T")[0];

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#111111", color: "#e5e5e5", fontFamily: "'IBM Plex Sans', sans-serif" }}>

      {/* TICKER BAR */}
      <div style={{ overflow: "hidden", background: "#f97316", height: "36px", display: "flex", alignItems: "center" }}>
        <div className="animate-ticker" style={{ whiteSpace: "nowrap", display: "flex", gap: "48px", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", color: "#111", textTransform: "uppercase" }}>
          {Array(4).fill(null).map((_, i) => (
            <span key={i} style={{ display: "flex", gap: "48px", alignItems: "center" }}>
              <span>⚙ Грузовой шиномонтаж</span>
              <span>⚙ Легковой шиномонтаж</span>
              <span>⚙ Балансировка колёс</span>
              <span>⚙ Автостоянка 24/7</span>
              <span>⚙ Хранение шин</span>
              <span>⚙ Онлайн-запись</span>
            </span>
          ))}
        </div>
      </div>

      {/* NAVBAR */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(17,17,17,0.96)", backdropFilter: "blur(10px)", borderBottom: "1px solid #2a2a2a" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
          <a href="#hero" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#f97316", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Icon name="Settings" size={20} style={{ color: "#111" }} />
            </div>
            <div>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "20px", fontWeight: 700, color: "#fff", letterSpacing: "0.05em" }}>ШИН<span style={{ color: "#f97316" }}>МАСТЕР</span></div>
              <div style={{ fontSize: "10px", color: "#666", letterSpacing: "0.15em", textTransform: "uppercase", lineHeight: 1 }}>Шиномонтаж & Стоянка</div>
            </div>
          </a>

          <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="hidden md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link"
                style={{
                  color: activeNav === item.href.slice(1) ? "#f97316" : "#888",
                  textDecoration: "none",
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                  paddingBottom: 4,
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <button
              onClick={() => setBookingOpen(true)}
              className="hidden md:block"
              style={{ background: "#f97316", color: "#111", fontWeight: 700, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", padding: "10px 20px", border: "none", cursor: "pointer", fontFamily: "'Oswald', sans-serif" }}
            >
              Записаться
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden"
              style={{ background: "transparent", border: "1px solid #333", color: "#aaa", padding: "8px 12px", cursor: "pointer" }}
            >
              <Icon name={menuOpen ? "X" : "Menu"} size={20} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div style={{ background: "#1a1a1a", borderTop: "1px solid #2a2a2a", padding: "16px 24px" }}>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{ display: "block", color: "#ccc", textDecoration: "none", padding: "12px 0", fontSize: "15px", borderBottom: "1px solid #2a2a2a", fontWeight: 500 }}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => { setBookingOpen(true); setMenuOpen(false); }}
              style={{ marginTop: 16, width: "100%", background: "#f97316", color: "#111", fontWeight: 700, fontSize: "14px", letterSpacing: "0.08em", textTransform: "uppercase", padding: "14px", border: "none", cursor: "pointer", fontFamily: "'Oswald', sans-serif" }}
            >
              Записаться онлайн
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${HERO_IMAGE})`, backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.25)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(17,17,17,0.97) 0%, rgba(17,17,17,0.55) 60%, rgba(249,115,22,0.08) 100%)" }} />
        <div className="hex-bg" style={{ position: "absolute", inset: 0, opacity: 0.5 }} />

        <div style={{ position: "absolute", right: "-100px", top: "50%", transform: "translateY(-50%)", width: "520px", height: "520px", opacity: 0.03 }} className="animate-rotate-slow">
          <Icon name="Settings" size={520} style={{ color: "#fff" }} />
        </div>

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1280, margin: "0 auto", padding: "80px 24px" }}>
          <div className="animate-fade-in-left" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(249,115,22,0.12)", border: "1px solid rgba(249,115,22,0.35)", padding: "6px 16px", marginBottom: 24 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e" }} className="animate-pulse-orange" />
            <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#f97316", fontWeight: 600 }}>Работаем ежедневно 08:00 – 22:00</span>
          </div>

          <h1 className="animate-fade-in-up" style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(48px, 8vw, 96px)", fontWeight: 700, lineHeight: 1, color: "#fff", textTransform: "uppercase", letterSpacing: "0.02em", maxWidth: 800, marginBottom: 24 }}>
            ШИН<span style={{ color: "#f97316" }}>МОН</span>ТАЖ<br />
            <span style={{ fontSize: "0.55em", color: "#888", fontWeight: 400 }}>Легковой & Грузовой</span>
          </h1>

          <p className="animate-fade-in-up delay-200" style={{ fontSize: "18px", color: "#888", maxWidth: 520, lineHeight: 1.7, marginBottom: 40, opacity: 0 }}>
            Профессиональный шиномонтаж любых автомобилей. Современное оборудование, опытные мастера, гарантия качества.
          </p>

          <div className="animate-fade-in-up delay-300" style={{ display: "flex", gap: 48, marginBottom: 48, flexWrap: "wrap", opacity: 0 }}>
            {[["10+", "лет опыта"], ["5000+", "клиентов"], ["24/7", "автостоянка"], ["100%", "гарантия"]].map(([num, label]) => (
              <div key={label}>
                <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "36px", fontWeight: 700, color: "#f97316", lineHeight: 1 }}>{num}</div>
                <div style={{ fontSize: "12px", color: "#555", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>

          <div className="animate-fade-in-up delay-400" style={{ display: "flex", gap: 16, flexWrap: "wrap", opacity: 0 }}>
            <button
              onClick={() => setBookingOpen(true)}
              style={{ background: "#f97316", color: "#111", fontWeight: 700, fontSize: "15px", letterSpacing: "0.1em", textTransform: "uppercase", padding: "18px 40px", border: "none", cursor: "pointer", fontFamily: "'Oswald', sans-serif", display: "flex", alignItems: "center", gap: 10, transition: "all 0.2s" }}
              onMouseOver={e => { e.currentTarget.style.background = "#ea6c0a"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseOut={e => { e.currentTarget.style.background = "#f97316"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <Icon name="CalendarCheck" size={18} style={{ color: "#111" }} />
              Записаться онлайн
            </button>
            <a
              href="#services"
              style={{ background: "transparent", color: "#ddd", fontWeight: 600, fontSize: "15px", letterSpacing: "0.05em", textTransform: "uppercase", padding: "18px 40px", border: "1px solid #444", cursor: "pointer", fontFamily: "'Oswald', sans-serif", textDecoration: "none", display: "flex", alignItems: "center", gap: 10, transition: "all 0.2s" }}
              onMouseOver={e => { e.currentTarget.style.borderColor = "#f97316"; e.currentTarget.style.color = "#f97316"; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = "#444"; e.currentTarget.style.color = "#ddd"; }}
            >
              Наши услуги
              <Icon name="ChevronDown" size={18} />
            </a>
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "200px", background: "linear-gradient(to top, #111 0%, transparent 100%)" }} />
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ marginBottom: 64 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
              <div style={{ height: "2px", width: "40px", background: "#f97316" }} />
              <span style={{ fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#f97316", fontWeight: 600 }}>Что мы делаем</span>
            </div>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.03em" }}>
              Наши <span style={{ color: "#f97316" }}>Услуги</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "2px" }}>
            {SERVICES.map((svc) => (
              <div
                key={svc.title}
                style={{ background: "#181818", padding: "36px", position: "relative", overflow: "hidden", cursor: "pointer", transition: "all 0.3s", borderLeft: "3px solid transparent" }}
                onMouseOver={e => { (e.currentTarget as HTMLElement).style.borderLeftColor = "#f97316"; (e.currentTarget as HTMLElement).style.background = "#1e1e1e"; }}
                onMouseOut={e => { (e.currentTarget as HTMLElement).style.borderLeftColor = "transparent"; (e.currentTarget as HTMLElement).style.background = "#181818"; }}
              >
                <div style={{ position: "absolute", top: 20, right: 20, fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#f97316", background: "rgba(249,115,22,0.1)", padding: "3px 10px", fontWeight: 600 }}>
                  {svc.tag}
                </div>
                <div style={{ width: 52, height: 52, background: "rgba(249,115,22,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                  <Icon name={svc.icon} size={24} style={{ color: "#f97316" }} />
                </div>
                <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "22px", fontWeight: 600, color: "#fff", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.03em" }}>{svc.title}</h3>
                <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.7, marginBottom: 28 }}>{svc.desc}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #2a2a2a", paddingTop: 20 }}>
                  <div style={{ fontSize: "20px", fontWeight: 700, color: "#f97316", fontFamily: "'Oswald', sans-serif" }}>{svc.price}</div>
                  {svc.time !== "—" && (
                    <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#555", fontSize: "13px" }}>
                      <Icon name="Clock" size={14} style={{ color: "#555" }} />
                      {svc.time}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <button
              onClick={() => setBookingOpen(true)}
              style={{ background: "transparent", color: "#f97316", fontWeight: 700, fontSize: "14px", letterSpacing: "0.1em", textTransform: "uppercase", padding: "16px 40px", border: "2px solid #f97316", cursor: "pointer", fontFamily: "'Oswald', sans-serif", transition: "all 0.2s" }}
              onMouseOver={e => { e.currentTarget.style.background = "#f97316"; e.currentTarget.style.color = "#111"; }}
              onMouseOut={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#f97316"; }}
            >
              Записаться на любую услугу
            </button>
          </div>
        </div>
      </section>

      {/* PARKING */}
      <section id="parking" style={{ background: "#0d0d0d", padding: "100px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                <div style={{ height: "2px", width: "40px", background: "#f97316" }} />
                <span style={{ fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#f97316", fontWeight: 600 }}>Парковка</span>
              </div>
              <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.03em", marginBottom: 24 }}>
                Авто<span style={{ color: "#f97316" }}>стоянка</span><br />24/7
              </h2>
              <p style={{ fontSize: "16px", color: "#666", lineHeight: 1.8, marginBottom: 40 }}>
                Охраняемая стоянка для легковых и грузовых автомобилей. Круглосуточное видеонаблюдение, освещённая территория, удобный въезд.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 40 }}>
                {PARKING_FEATURES.map((feat) => (
                  <div key={feat.title} style={{ padding: "20px", background: "#181818", borderTop: "2px solid #f97316" }}>
                    <Icon name={feat.icon} size={22} style={{ color: "#f97316", marginBottom: 10 }} />
                    <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "15px", fontWeight: 600, color: "#fff", marginBottom: 6, textTransform: "uppercase" }}>{feat.title}</div>
                    <div style={{ fontSize: "13px", color: "#555", lineHeight: 1.5 }}>{feat.desc}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
                {[["Легковые", "от 100 ₽/ч"], ["Грузовые", "от 200 ₽/ч"], ["Месяц", "от 3500 ₽"]].map(([type, price]) => (
                  <div key={type}>
                    <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "24px", fontWeight: 700, color: "#f97316" }}>{price}</div>
                    <div style={{ fontSize: "12px", color: "#555", textTransform: "uppercase", letterSpacing: "0.1em" }}>{type}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Parking visual */}
            <div style={{ background: "#181818", padding: "36px", border: "1px solid #2a2a2a" }}>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "13px", color: "#f97316", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 24, display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e" }} />
                Стоянка — Схема
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 5, marginBottom: 12 }}>
                {Array(18).fill(null).map((_, i) => (
                  <div key={i} style={{ height: 48, background: i < 14 ? "#1a1a1a" : "rgba(249,115,22,0.15)", border: `1px solid ${i < 14 ? "#252525" : "#f97316"}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {i < 14
                      ? <Icon name="Car" size={14} style={{ color: "#2e2e2e" }} />
                      : <span style={{ fontSize: "9px", color: "#f97316", fontWeight: 700 }}>FREE</span>
                    }
                  </div>
                ))}
              </div>
              <div style={{ borderTop: "2px dashed #2a2a2a", paddingTop: 12, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 5 }}>
                {Array(3).fill(null).map((_, i) => (
                  <div key={i} style={{ height: 64, background: "#1a1a1a", border: "1px solid #252525", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 4 }}>
                    <Icon name="Truck" size={18} style={{ color: "#2e2e2e" }} />
                    <span style={{ fontSize: "8px", color: "#333", textTransform: "uppercase", letterSpacing: "0.05em" }}>Грузовое</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 16, display: "flex", gap: 20, fontSize: "11px", color: "#444" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}><span style={{ display: "inline-block", width: 12, height: 12, background: "#1a1a1a", border: "1px solid #252525" }} />Занято</span>
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}><span style={{ display: "inline-block", width: 12, height: 12, background: "rgba(249,115,22,0.15)", border: "1px solid #f97316" }} />Свободно</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ marginBottom: 64 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
              <div style={{ height: "2px", width: "40px", background: "#f97316" }} />
              <span style={{ fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#f97316", fontWeight: 600 }}>Фото</span>
            </div>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.03em" }}>
              Гале<span style={{ color: "#f97316" }}>рея</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gridTemplateRows: "300px 300px", gap: "3px" }}>
            <div style={{ gridRow: "span 2", position: "relative", overflow: "hidden" }}>
              <img
                src={HERO_IMAGE}
                alt="Шиномонтаж"
                style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.65, transition: "all 0.5s" }}
                onMouseOver={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; }}
                onMouseOut={e => { (e.currentTarget as HTMLElement).style.opacity = "0.65"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
              />
              <div style={{ position: "absolute", bottom: 20, left: 20 }}>
                <div style={{ background: "#f97316", color: "#111", fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", padding: "4px 12px" }}>Основной зал</div>
              </div>
            </div>
            {GALLERY_ITEMS.map((item, i) => (
              <div key={i} style={{ background: "#181818", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #1e1e1e", overflow: "hidden", cursor: "pointer", transition: "background 0.3s" }}
                onMouseOver={e => (e.currentTarget.style.background = "#1f1f1f")}
                onMouseOut={e => (e.currentTarget.style.background = "#181818")}
              >
                <div style={{ textAlign: "center" }}>
                  <Icon name={item.icon} size={44} style={{ color: "#2d2d2d" }} />
                  <div style={{ marginTop: 12, fontSize: "11px", color: "#3a3a3a", textTransform: "uppercase", letterSpacing: "0.12em" }}>{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" style={{ background: "#0d0d0d", padding: "100px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ marginBottom: 64 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
              <div style={{ height: "2px", width: "40px", background: "#f97316" }} />
              <span style={{ fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#f97316", fontWeight: 600 }}>Мнение клиентов</span>
            </div>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.03em" }}>
              От<span style={{ color: "#f97316" }}>зывы</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 3 }}>
            {REVIEWS.map((rev) => (
              <div key={rev.name} style={{ background: "#181818", padding: "36px", borderBottom: "3px solid #f97316" }}>
                <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
                  {Array(rev.stars).fill(null).map((_, i) => (
                    <span key={i} style={{ color: "#f97316", fontSize: "16px" }}>★</span>
                  ))}
                </div>
                <p style={{ fontSize: "15px", color: "#888", lineHeight: 1.8, marginBottom: 28, fontStyle: "italic" }}>"{rev.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 16, borderTop: "1px solid #222", paddingTop: 20 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(249,115,22,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: "18px", fontWeight: 700, color: "#f97316" }}>{rev.name[0]}</span>
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: "#ddd", fontSize: "15px" }}>{rev.name}</div>
                    <div style={{ fontSize: "12px", color: "#444" }}>{rev.role} · {rev.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
            <div style={{ height: "2px", width: "40px", background: "#f97316" }} />
            <span style={{ fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#f97316", fontWeight: 600 }}>Как нас найти</span>
          </div>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.03em", marginBottom: 64 }}>
            Кон<span style={{ color: "#f97316" }}>такты</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
            <div>
              <div style={{ marginBottom: 48 }}>
                {[
                  { icon: "MapPin", label: "Адрес", value: "ул. Промышленная, 42, Москва" },
                  { icon: "Phone", label: "Телефон", value: "+7 (495) 123-45-67" },
                  { icon: "Clock", label: "Режим работы", value: "Ежедневно 08:00 – 22:00" },
                  { icon: "Mail", label: "Email", value: "info@shinmaster.ru" },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", gap: 20, padding: "24px 0", borderBottom: "1px solid #1e1e1e", alignItems: "center" }}>
                    <div style={{ width: 48, height: 48, background: "rgba(249,115,22,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon name={item.icon} size={20} style={{ color: "#f97316" }} />
                    </div>
                    <div>
                      <div style={{ fontSize: "11px", color: "#444", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>{item.label}</div>
                      <div style={{ fontSize: "16px", color: "#ccc", fontWeight: 500 }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setBookingOpen(true)}
                style={{ width: "100%", background: "#f97316", color: "#111", fontWeight: 700, fontSize: "15px", letterSpacing: "0.1em", textTransform: "uppercase", padding: "20px", border: "none", cursor: "pointer", fontFamily: "'Oswald', sans-serif", transition: "background 0.2s", display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}
                onMouseOver={e => (e.currentTarget.style.background = "#ea6c0a")}
                onMouseOut={e => (e.currentTarget.style.background = "#f97316")}
              >
                <Icon name="CalendarCheck" size={20} style={{ color: "#111" }} />
                Записаться на шиномонтаж
              </button>
            </div>

            <div style={{ background: "#181818", height: 420, border: "1px solid #2a2a2a", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
              <div className="hex-bg" style={{ position: "absolute", inset: 0 }} />
              <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                <Icon name="MapPin" size={48} style={{ color: "#f97316", marginBottom: 16 }} />
                <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "20px", color: "#fff", letterSpacing: "0.05em", textTransform: "uppercase" }}>ул. Промышленная, 42</div>
                <div style={{ fontSize: "13px", color: "#444", marginTop: 8 }}>Москва, Промышленный район</div>
                <button
                  style={{ marginTop: 24, background: "transparent", color: "#f97316", fontWeight: 600, fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", padding: "12px 28px", border: "1px solid #f97316", cursor: "pointer", fontFamily: "'Oswald', sans-serif", transition: "all 0.2s" }}
                  onMouseOver={e => { e.currentTarget.style.background = "#f97316"; e.currentTarget.style.color = "#111"; }}
                  onMouseOut={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#f97316"; }}
                >
                  Открыть карту
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#0a0a0a", borderTop: "1px solid #1e1e1e", padding: "40px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#f97316", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name="Settings" size={18} style={{ color: "#111" }} />
            </div>
            <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "18px", fontWeight: 700, color: "#fff" }}>ШИН<span style={{ color: "#f97316" }}>МАСТЕР</span></div>
          </div>
          <div style={{ fontSize: "13px", color: "#333" }}>© 2026 ШинМастер. Все права защищены.</div>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={{ fontSize: "12px", color: "#444", textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.08em", transition: "color 0.2s" }}
                onMouseOver={e => (e.currentTarget.style.color = "#f97316")}
                onMouseOut={e => (e.currentTarget.style.color = "#444")}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* BOOKING MODAL */}
      {bookingOpen && (
        <div
          style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(0,0,0,0.88)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}
          onClick={(e) => { if (e.target === e.currentTarget) { setBookingOpen(false); setSubmitted(false); } }}
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
                onClick={() => { setBookingOpen(false); setSubmitted(false); }}
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
                  onClick={() => { setBookingOpen(false); setSubmitted(false); setName(""); setPhone(""); setSelectedDate(""); setSelectedTime(""); setSelectedService(""); }}
                  style={{ background: "#f97316", color: "#111", fontWeight: 700, fontSize: "14px", letterSpacing: "0.1em", textTransform: "uppercase", padding: "16px 40px", border: "none", cursor: "pointer", fontFamily: "'Oswald', sans-serif" }}
                >
                  Закрыть
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ padding: "32px" }}>
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
      )}
    </div>
  );
}