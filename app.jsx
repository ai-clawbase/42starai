// === App shell + manifesto + footer + lang provider ===

function Manifesto() {
  const { t } = React.useContext(window.LangContext);
  const items = t("man");
  return (
    <section className="manifesto" id="manifesto">
      <window.SectionHead idx="06" label={t("s6_label")} caption={t("s6_caption")} />
      <div className="man-grid">
        <div className="man-art">
          <svg viewBox="0 0 200 200">
            <defs>
              <radialGradient id="mg" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="var(--cyan)" stopOpacity="0.9"/>
                <stop offset="60%" stopColor="var(--cyan)" stopOpacity="0.05"/>
                <stop offset="100%" stopColor="var(--cyan)" stopOpacity="0"/>
              </radialGradient>
            </defs>
            <circle cx="100" cy="100" r="80" fill="url(#mg)"/>
            <circle cx="100" cy="100" r="60" fill="none" stroke="var(--cyan)" strokeWidth="0.5" opacity="0.4"/>
            <circle cx="100" cy="100" r="40" fill="none" stroke="var(--cyan)" strokeWidth="0.5" opacity="0.6"/>
            <circle cx="100" cy="100" r="22" fill="var(--bg-0)" stroke="var(--cyan)" strokeWidth="1"/>
            <text x="100" y="111" textAnchor="middle" fontFamily="Instrument Serif" fontStyle="italic" fontSize="36" fill="var(--cyan)">42</text>
            {Array.from({length: 24}).map((_, i) => {
              const a = (i / 24) * Math.PI * 2;
              const x1 = 100 + Math.cos(a) * 88, y1 = 100 + Math.sin(a) * 88;
              const x2 = 100 + Math.cos(a) * (i % 6 === 0 ? 80 : 84);
              const y2 = 100 + Math.sin(a) * (i % 6 === 0 ? 80 : 84);
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--fg-dim)" strokeWidth={i % 6 === 0 ? 1 : 0.4}/>;
            })}
          </svg>
        </div>
        <ol className="man-list">
          {items.map(([title, body], i) => (
            <li key={i}><span className="mono cyan">{String(i + 1).padStart(3, "0")} ·</span> <strong>{title}</strong>
              <p className="dim">{body}</p></li>
          ))}
        </ol>
      </div>

      <div className="man-pullquote serif">
        {t("pull")}
        <div className="mono dim" style={{fontSize: 11, marginTop: 16, letterSpacing: "0.18em"}}>{t("pull_sig")}</div>
      </div>
    </section>
  );
}

function CTABanner() {
  const { t } = React.useContext(window.LangContext);
  const ct = t("cta_t");
  return (
    <section className="ctab">
      <div className="ctab-inner">
        <div>
          <div className="mono upper cyan" style={{fontSize: 11}}>{t("cta_kicker")}</div>
          <h3 className="serif" style={{fontSize: "clamp(36px, 5vw, 56px)", margin: "12px 0"}}>
            {ct[0]}<span className="dim">{ct[1]}</span>{ct[2]}
          </h3>
          <p className="dim" style={{maxWidth: 540}}>{t("cta_p")}</p>
        </div>
        <div className="ctab-right">
          <button className="cta">{t("cta_b1")}</button>
          <button className="cta ghost">{t("cta_b2")}</button>
          <div className="mono mute" style={{fontSize: 11, marginTop: 12}}>{t("cta_note")}</div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = React.useContext(window.LangContext);
  const planes = window.PLANES;
  const products = window.PRODUCTS;
  const labels = window.PLANE_LABELS[window.__LANG__] || window.PLANE_LABELS["zh-CN"];
  const byPlane = (k) => products.filter(p => p.plane === k);
  return (
    <footer className="footer">
      <div className="foot-grid">
        <div className="foot-brand">
          <div className="brand">
            <span className="brand-mark">
              <svg viewBox="0 0 24 24" width="22" height="22">
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
                <circle cx="12" cy="12" r="2" fill="currentColor"/>
                <path d="M12 2 L12 6 M12 18 L12 22 M2 12 L6 12 M18 12 L22 12" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
              </svg>
            </span>
            <span className="brand-text"><span className="brand-num">42</span>Star<span className="dim">.ai</span></span>
          </div>
          <p className="dim" style={{maxWidth: 280, marginTop: 18}}>{t("foot_p")}</p>
          <div className="tag" style={{marginTop: 20}}><span className="dot"></span>{t("foot_obs")}</div>
        </div>
        {Object.entries(planes).map(([k, v]) => (
          <div key={k} className="foot-col">
            <div className="mono upper" style={{fontSize: 10, color: v.hue}}>{labels[k]}</div>
            <ul>
              {byPlane(k).map(p => (
                <li key={p.id}><a href={`#${p.id}`}>{p.name} <span className="mute mono" style={{fontSize: 11}}>{p.code}</span></a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <hr className="hairline" style={{margin: "48px 0 24px"}}/>
      <div className="foot-bot mono dim">
        <span>© 2042–∞  42Star.ai  ·  Beijing · Hangzhou · Orbit</span>
        <span>v0.42.0</span>
        <span>Privacy · Terms · Charter</span>
      </div>
    </footer>
  );
}

function App() {
  const [lang, setLangState] = React.useState(() => {
    try { return localStorage.getItem("42star.lang") || "zh-CN"; } catch (e) { return "zh-CN"; }
  });
  React.useEffect(() => {
    window.__LANG__ = lang;
    document.documentElement.lang = lang;
    try { localStorage.setItem("42star.lang", lang); } catch (e) {}
  }, [lang]);
  window.__LANG__ = lang;
  const setLang = (v) => setLangState(v);
  const t = (k) => { const d = window.T[lang] || window.T["zh-CN"]; return d[k] !== undefined ? d[k] : k; };
  const ctx = { lang, setLang, t };
  return (
    <window.LangContext.Provider value={ctx}>
      <div className="ambient"></div>
      <window.Starfield />
      <main>
        <window.TopNav />
        <window.Hero />
        <window.VisionSection />
        <window.Embodied />
        <window.Constellation />
        <window.Matrix />
        <window.Why42 />
        <Manifesto />
        <CTABanner />
        <Footer />
      </main>
    </window.LangContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
