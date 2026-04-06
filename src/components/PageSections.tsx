import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/d61b9fc4-90aa-438f-abfa-9fc27ecfd134/files/8acce4d7-7eb7-4e22-bc1c-f6375a5b301d.jpg";

const SERVICES = [
  { icon: "Car", title: "Шиномонтаж легковых", desc: "Замена, балансировка, ремонт колёс для легковых автомобилей любых марок", price: "от 300 ₽", time: "30 мин", tag: "Легковые" },
  { icon: "Truck", title: "Шиномонтаж грузовых", desc: "Полный цикл работ с шинами грузовых авто, автобусов и спецтехники", price: "от 800 ₽", time: "60 мин", tag: "Грузовые" },
  { icon: "RotateCcw", title: "Балансировка колёс", desc: "Компьютерная балансировка на современном станке 3D-технологии", price: "от 200 ₽", time: "20 мин", tag: "Точность" },
  { icon: "Wrench", title: "Ремонт шин", desc: "Заплатки, жгуты, вулканизация", price: "от 150 ₽", time: "15 мин", tag: "Ремонт" },
  { icon: "Package", title: "Хранение шин", desc: "Сезонное хранение колёс в чистом, охраняемом складе с маркировкой", price: "от 1500 ₽/сезон", time: "—", tag: "Хранение" },
  { icon: "Zap", title: "Подкачка", desc: "Накачка шин для стабильного давления", price: "от 100 ₽", time: "10 мин", tag: "Быстро" },
];

const GALLERY_ITEMS = [
  { label: "Грузовой шиномонтаж", icon: "Truck" },
  { label: "Балансировка", icon: "Settings" },
  { label: "Стоянка", icon: "Car" },
  { label: "Склад шин", icon: "Package" },
];

const REVIEWS = [
  { name: "Алексей Морозов", role: "Водитель фуры", text: "Обслуживаю грузовик уже 3 года. Быстро, качественно, без очередей. Цены честные. Рекомендую всем дальнобойщикам.", stars: 5, date: "Март 2026" },
  { name: "Наталья Семёнова", role: "Частный клиент", text: "Записалась онлайн, приехала точно ко времени — всё готово. Поменяли резину за 40 минут. Очень удобно!", stars: 5, date: "Февраль 2026" },
  { name: "Дмитрий Краснов", role: "Автопарк ООО «Логист»", text: "Обслуживаем весь автопарк из 12 машин. Корпоративные скидки, быстрый выезд, всегда отличное качество.", stars: 5, date: "Январь 2026" },
];

const PARKING_FEATURES = [
  { icon: "Shield", title: "Охрана 24/7", desc: "Видеонаблюдение и охранник на въезде круглосуточно" },
  { icon: "MapPin", title: "Удобный въезд", desc: "Широкие ворота для любого транспорта, включая фуры" },
  { icon: "Lightbulb", title: "Освещение", desc: "Полное освещение территории в тёмное время суток" },
  { icon: "CreditCard", title: "Абонементы", desc: "Дневные, ночные и месячные абонементы на выбор" },
];

const NAV_ITEMS = [
  { label: "Главная", href: "#hero" },
  { label: "Услуги", href: "#services" },
  { label: "Парковка", href: "#parking" },
  { label: "Галерея", href: "#gallery" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

interface PageSectionsProps {
  onBookingOpen: () => void;
}

export default function PageSections({ onBookingOpen }: PageSectionsProps) {
  return (
    <>
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
            <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#f97316", fontWeight: 600 }}>Работаем круглосуточно, без выходных</span>
          </div>

          <h1 className="animate-fade-in-up" style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(48px, 8vw, 96px)", fontWeight: 700, lineHeight: 1, color: "#fff", textTransform: "uppercase", letterSpacing: "0.02em", maxWidth: 800, marginBottom: 24 }}>
            ШИН<span style={{ color: "#f97316" }}>МОН</span>ТАЖ<br />
            <span style={{ fontSize: "0.55em", color: "#888", fontWeight: 400 }}>Легковой & Грузовой</span>
          </h1>

          <p className="animate-fade-in-up delay-200" style={{ fontSize: "18px", color: "#888", maxWidth: 520, lineHeight: 1.7, marginBottom: 40, opacity: 0 }}>
            Профессиональный шиномонтаж любых автомобилей. Современное оборудование, опытные мастера, гарантия качества.
          </p>

          <div className="animate-fade-in-up delay-300" style={{ display: "flex", gap: 48, marginBottom: 48, flexWrap: "wrap", opacity: 0 }}>
            {[["35+", "лет опыта"], ["5000+", "клиентов"], ["24/7", "автостоянка"]].map(([num, label]) => (
              <div key={label}>
                <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "36px", fontWeight: 700, color: "#f97316", lineHeight: 1 }}>{num}</div>
                <div style={{ fontSize: "12px", color: "#555", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>

          <div className="animate-fade-in-up delay-400" style={{ display: "flex", gap: 16, flexWrap: "wrap", opacity: 0 }}>
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
                <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.7 }}>{svc.desc}</p>
              </div>
            ))}
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

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <a
              href="https://yandex.ru/maps/-/CPfgB0~Q"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "transparent", color: "#f97316", fontWeight: 700, fontSize: "14px", letterSpacing: "0.1em", textTransform: "uppercase", padding: "16px 40px", border: "2px solid #f97316", cursor: "pointer", fontFamily: "'Oswald', sans-serif", textDecoration: "none", transition: "all 0.2s" }}
              onMouseOver={e => { e.currentTarget.style.background = "#f97316"; e.currentTarget.style.color = "#111"; }}
              onMouseOut={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#f97316"; }}
            >
              <Icon name="MessageSquarePlus" size={18} style={{ color: "inherit" }} />
              Оставить отзыв
            </a>
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
              <div>
                {[
                  { icon: "MapPin", label: "Адрес", value: "дер. Леоново, ул. Шоссейная, дом 12" },
                  { icon: "Phone", label: "Телефон", value: "8 (915) 778-33-63" },
                  { icon: "Clock", label: "Режим работы", value: "Круглосуточно" },
                  { icon: "Mail", label: "Email", value: "sprint-autoservise@list.ru" },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", gap: 20, padding: "24px 0", borderBottom: "1px solid #1e1e1e", alignItems: "center" }}>
                    <div style={{ width: 48, height: 48, background: "rgba(249,115,22,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon name={item.icon} size={20} style={{ color: "#f97316" }} />
                    </div>
                    <div>
                      <div style={{ fontSize: "11px", color: "#444", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>{item.label}</div>
                      {item.label === "Телефон" ? (
                        <a href="tel:+79157783363" style={{ fontSize: "16px", color: "#f97316", fontWeight: 500, textDecoration: "none" }}>{item.value}</a>
                      ) : item.label === "Email" ? (
                        <a href="mailto:sprint-autoservise@list.ru" style={{ fontSize: "16px", color: "#ccc", fontWeight: 500, textDecoration: "none" }}>{item.value}</a>
                      ) : (
                        <div style={{ fontSize: "16px", color: "#ccc", fontWeight: 500 }}>{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: "#181818", height: 420, border: "1px solid #2a2a2a", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
              <div className="hex-bg" style={{ position: "absolute", inset: 0 }} />
              <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                <Icon name="MapPin" size={48} style={{ color: "#f97316", marginBottom: 16 }} />
                <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "20px", color: "#fff", letterSpacing: "0.05em", textTransform: "uppercase" }}>ул. Шоссейная, дом 12</div>
                <div style={{ fontSize: "13px", color: "#444", marginTop: 8 }}>дер. Леоново</div>
                <a
                  href="https://yandex.ru/maps/-/CPfgB0~Q"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-block", marginTop: 24, background: "transparent", color: "#f97316", fontWeight: 600, fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", padding: "12px 28px", border: "1px solid #f97316", cursor: "pointer", fontFamily: "'Oswald', sans-serif", transition: "all 0.2s", textDecoration: "none" }}
                  onMouseOver={e => { e.currentTarget.style.background = "#f97316"; e.currentTarget.style.color = "#111"; }}
                  onMouseOut={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#f97316"; }}
                >
                  Открыть карту
                </a>
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
            <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "18px", fontWeight: 700, color: "#fff" }}>СПР<span style={{ color: "#f97316" }}>ИНТ</span></div>
          </div>
          <div style={{ fontSize: "13px", color: "#333" }}>© 2026 Спринт. Все права защищены.</div>
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
    </>
  );
}