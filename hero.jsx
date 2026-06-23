// === Hero / boot sequence ===
const { useState, useEffect, useRef, useMemo, useContext } = React;

function Starfield() {
  const stars = useMemo(() => {
    const arr = []; let seed = 42;
    const rng = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    for (let i = 0; i < 120; i++) arr.push({ x: rng()*100, y: rng()*100, r: rng()*1.3+0.2, o: rng()*0.7+0.15, d: rng()*3+2 });
    return arr;
  }, []);
  return (
    <div className="stars">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        {stars.map((s, i) => (
          <circle key={i} cx={s.x} cy={s.y} r={s.r * 0.18} fill="white" opacity={s.o}>
            <animate attributeName="opacity" values={`${s.o};${s.o * 0.2};${s.o}`} dur={`${s.d}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </svg>
    </div>
  );
}

function TopNav() {
  const { t, lang, setLang } = useContext(window.LangContext);
  return (
    <header className="topnav">
      <div className="brand">
        <span className="brand-mark">
          <svg viewBox="0 0 24 24" width="22" height="22">
            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
            <path d="M12 2 L12 6 M12 18 L12 22 M2 12 L6 12 M18 12 L22 12" stroke="currentColor" strokeWidth="1" opacity="0.6" />
          </svg>
        </span>
        <span className="brand-text"><span className="brand-num">42</span>Star<span className="dim">.ai</span></span>
      </div>
      <nav className="nav-links">
        <a href="#vision">{t("nav_vision")}</a>
        <a href="#embodied">{t("nav_embodied")}</a>
        <a href="#constellation">{t("nav_constellation")}</a>
        <a href="#matrix">{t("nav_matrix")}</a>
        <a href="#manifesto">{t("nav_manifesto")}</a>
        <a href="#plans">{t("nav_plans")}</a>
        <a href="#download">{t("nav_download")}</a>
      </nav>
      <div className="nav-right">
        <LangSwitcher lang={lang} setLang={setLang} />
        <span className="mono dim" style={{fontSize: 11}}>{t("nav_est")}</span>
        <button className="cta ghost">{t("nav_signin")}</button>
      </div>
    </header>
  );
}

function LangSwitcher({ lang, setLang }) {
  const opts = [
    { v: "zh-CN", l: "简中" },
    { v: "zh-TW", l: "繁中" },
    { v: "en",    l: "EN"   },
  ];
  return (
    <div className="lang-switch" role="tablist" aria-label="Language">
      {opts.map((o, i) => (
        <React.Fragment key={o.v}>
          <button
            className={"lang-opt " + (lang === o.v ? "is-on" : "")}
            onClick={() => setLang(o.v)}
            role="tab" aria-selected={lang === o.v}
          >{o.l}</button>
          {i < opts.length - 1 && <span className="lang-sep">·</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

function BootLine({ children, delay }) {
  const [shown, setShown] = useState(false);
  useEffect(() => { const t = setTimeout(() => setShown(true), delay); return () => clearTimeout(t); }, [delay]);
  if (!shown) return null;
  return <div className="boot-line">{children}</div>;
}

function Hero() {
  const { t } = useContext(window.LangContext);
  const [now, setNow] = useState(new Date());
  useEffect(() => { const i = setInterval(() => setNow(new Date()), 1000); return () => clearInterval(i); }, []);
  const stamp = now.toISOString().replace("T", " ").slice(0, 19) + " UTC";
  const sub = t("h_sub");
  const thesis = t("h_thesis_cn");

  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        <aside className="hero-side">
          <div className="tag"><span className="dot"></span>SYS · ONLINE</div>
          <div className="boot">
            <BootLine delay={0}><span className="mute">$</span> 42star --boot</BootLine>
            <BootLine delay={400}><span className="cyan">✓</span> {t("h_boot1")} <span className="mute">… 0.042s</span></BootLine>
            <BootLine delay={800}><span className="cyan">✓</span> {t("h_boot2")} <span className="mute">… 0.018s</span></BootLine>
            <BootLine delay={1200}><span className="cyan">✓</span> {t("h_boot3")} <span className="mute">… 0.011s</span></BootLine>
            <BootLine delay={1600}><span className="amber">⟳</span> {t("h_boot4")}<span className="caret"></span></BootLine>
          </div>
          <div className="hero-clock mono dim">
            <div>LOCAL · {stamp}</div>
            <div>OBSERVATORY · 42°N 116°E</div>
          </div>
        </aside>

        <div className="hero-main">
          <div className="hero-prelude mono upper dim">{t("h_prelude")}</div>
          <div className="kw-strip">
            {t("h_kw").map((k, i) => (
              <React.Fragment key={i}>
                <span className={"kw" + (i === 2 ? " kw-hot" : "")}>{k}</span>
                {i < 4 && <span className="kw-sep">/</span>}
              </React.Fragment>
            ))}
          </div>
          <h1 className="hero-title">
            <span className="serif">{t("h_t1")}</span>{" "}
            <span className="forty-two">{t("h_t2")}</span>
            <br />
            <span className="serif">{t("h_t3")}</span>{" "}
            <span className="under">{t("h_t4")}</span>
          </h1>
          <div className="hero-tagline">
            <span className="mono upper amber" style={{fontSize: 11}}>// {t("h_thesis")}</span>
            <div className="serif tagline-cn">{thesis[0]}<span className="tagline-hot">{thesis[1]}</span>{thesis[2]}</div>
            <div className="mono dim" style={{fontSize: 12, letterSpacing: "0.18em"}}>{t("h_thesis_en")}</div>
          </div>
          <p className="hero-sub">
            {sub[0]}<span className="cyan">{sub[1]}</span><span className="serif" style={{color:"var(--amber)"}}>{sub[2]}</span>
          </p>
          <div className="hero-ctas">
            <button className="cta">{t("h_cta1")}</button>
            <button className="cta ghost">{t("h_cta2")}</button>
          </div>

          <div className="hero-stats">
            <Stat k={t("h_stat1")} v="13" sub={t("h_stat1s")} />
            <Stat k={t("h_stat2")} v="9.4M" sub={t("h_stat2s")} tick />
            <Stat k={t("h_stat3")} v="2.1M" sub={t("h_stat3s")} />
            <Stat k={t("h_stat4")} v="4 × 2h" sub={t("h_stat4s")} />
          </div>
        </div>

        <span className="crosshair" style={{ top: 24, right: 24 }}></span>
        <span className="crosshair" style={{ bottom: 24, left: 24 }}></span>
      </div>
    </section>
  );
}

function Stat({ k, v, sub, tick }) {
  const [val, setVal] = useState(v);
  useEffect(() => {
    if (!tick) return;
    const i = setInterval(() => { const n = 9 + Math.random() * 1.5; setVal(n.toFixed(1) + "M"); }, 1400);
    return () => clearInterval(i);
  }, [tick]);
  return (
    <div className="stat">
      <div className="stat-k mono upper">{k}</div>
      <div className="stat-v">{val}</div>
      <div className="stat-sub mono">{sub}</div>
    </div>
  );
}

window.Hero = Hero;
window.TopNav = TopNav;
window.Starfield = Starfield;
