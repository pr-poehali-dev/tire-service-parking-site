import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { label: "Главная", href: "#hero" },
  { label: "Услуги", href: "#services" },
  { label: "Парковка", href: "#parking" },
  { label: "Галерея", href: "#gallery" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

interface NavbarProps {
  activeNav: string;
  onBookingOpen: () => void;
}

export default function Navbar({ activeNav, onBookingOpen }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
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
              onClick={onBookingOpen}
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
              onClick={() => { onBookingOpen(); setMenuOpen(false); }}
              style={{ marginTop: 16, width: "100%", background: "#f97316", color: "#111", fontWeight: 700, fontSize: "14px", letterSpacing: "0.08em", textTransform: "uppercase", padding: "14px", border: "none", cursor: "pointer", fontFamily: "'Oswald', sans-serif" }}
            >
              Записаться онлайн
            </button>
          </div>
        )}
      </nav>
    </>
  );
}
