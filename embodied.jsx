// === Embodied & Ambient AI section ===

function Embodied() {
  const { t } = React.useContext(window.LangContext);
  const planes = [
    { k: "body",  code: "EM-01", color: "var(--cyan)",   units: "12,840", qps: "—",      glyph: <HumanoidGlyph/>,    nodes: ["Humanoid", "Quadruped", "Workcell arm", "Service bot"] },
    { k: "wear",  code: "EM-02", color: "var(--amber)",  units: "2.1M",   qps: "94K",    glyph: <GlassesGlyph/>,     nodes: ["AR glasses", "Earpiece", "Ring", "Patch"] },
    { k: "home",  code: "EM-03", color: "var(--violet)", units: "480K",   qps: "1.2M",   glyph: <RoomGlyph/>,        nodes: ["Smart wall", "Desk surface", "Ambient lamp", "ClawClip dock"] },
    { k: "cloud", code: "EM-04", color: "var(--cyan)",   units: "42",     qps: "9.4M",   glyph: <CloudGlyph/>,       nodes: ["Clawbase cluster", "Public inference", "Edge POP", "Standard registry"] },
  ];
  return (
    <section className="embodied" id="embodied">
      <window.SectionHead idx="03" label={t("s3_label")} caption={t("s3_caption")} />
      <p className="emb-intro">{t("eb_intro")}</p>

      <div className="emb-diagram" aria-hidden>
        <div className="emb-rings">
          {[1,2,3,4].map(i => <div key={i} className={`emb-ring r${i}`} />)}
          <div className="emb-core">
            <svg viewBox="-20 -20 40 40">
              <circle r="14" fill="none" stroke="var(--cyan)" strokeWidth="0.5" opacity="0.7"/>
              <circle r="6" fill="var(--cyan)" opacity="0.9"/>
              <text y="2" textAnchor="middle" fontFamily="Instrument Serif" fontStyle="italic" fontSize="9" fill="var(--bg-0)">42</text>
            </svg>
          </div>
          {/* satellites placed around the rings */}
          {[
            { c: "🦾", a: -85, r: 28, label: "Humanoid" },
            { c: "🐕", a: -50, r: 27, label: "Quad" },
            { c: "👓", a: -25, r: 35, label: "AR" },
            { c: "💍", a:  10, r: 33, label: "Ring" },
            { c: "🏠", a:  45, r: 38, label: "Home" },
            { c: "💡", a:  75, r: 37, label: "Lamp" },
            { c: "🛰", a: 115, r: 42, label: "POP" },
            { c: "☁",  a: 160, r: 44, label: "Cloud" },
            { c: "🚗", a: 200, r: 36, label: "Vehicle" },
            { c: "📎", a: 235, r: 30, label: "ClawClip" },
            { c: "🎧", a: 270, r: 26, label: "Earpiece" },
            { c: "🪞", a: 305, r: 33, label: "Mirror" },
          ].map((s, i) => {
            const x = 50 + Math.cos(s.a * Math.PI / 180) * s.r;
            const y = 50 + Math.sin(s.a * Math.PI / 180) * s.r;
            return (
              <div key={i} className="emb-sat" style={{ left: `${x}%`, top: `${y}%` }}>
                <div className="emb-sat-dot" />
                <div className="emb-sat-label mono">{s.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="emb-grid">
        {planes.map(p => (
          <article key={p.k} className="emb-card" style={{ "--c": p.color }}>
            <div className="emb-card-head">
              <span className="mono dim" style={{fontSize: 11}}>{p.code}</span>
              <span className="mono upper" style={{fontSize: 10, color: p.color}}>{t("eb_legend")}</span>
            </div>
            <div className="emb-glyph" style={{color: p.color}}>{p.glyph}</div>
            <h3 className="serif emb-title">{t("eb_" + p.k)}</h3>
            <p className="emb-desc">{t("eb_" + p.k + "_d")}</p>
            <ul className="emb-nodes">
              {p.nodes.map(n => <li key={n} className="mono">{n}</li>)}
            </ul>
            <div className="emb-stats mono">
              <div><span className="dim">{t("eb_units")}</span><b>{p.units}</b></div>
              <div><span className="dim">{t("eb_qps")}</span><b>{p.qps}</b></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function HumanoidGlyph() {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round" };
  return (
    <svg viewBox="0 0 48 48" width="44" height="44">
      <circle cx="24" cy="10" r="5" {...c}/>
      <line x1="24" y1="15" x2="24" y2="32" {...c}/>
      <line x1="24" y1="20" x2="14" y2="26" {...c}/>
      <line x1="24" y1="20" x2="34" y2="26" {...c}/>
      <line x1="24" y1="32" x2="18" y2="44" {...c}/>
      <line x1="24" y1="32" x2="30" y2="44" {...c}/>
      <circle cx="14" cy="26" r="1.2" fill="currentColor"/>
      <circle cx="34" cy="26" r="1.2" fill="currentColor"/>
    </svg>
  );
}
function GlassesGlyph() {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round" };
  return (
    <svg viewBox="0 0 48 48" width="44" height="44">
      <rect x="6" y="18" width="14" height="10" rx="2" {...c}/>
      <rect x="28" y="18" width="14" height="10" rx="2" {...c}/>
      <line x1="20" y1="23" x2="28" y2="23" {...c}/>
      <line x1="6" y1="23" x2="2" y2="20" {...c}/>
      <line x1="42" y1="23" x2="46" y2="20" {...c}/>
      <circle cx="13" cy="23" r="1.5" fill="currentColor" opacity="0.7"/>
    </svg>
  );
}
function RoomGlyph() {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round" };
  return (
    <svg viewBox="0 0 48 48" width="44" height="44">
      <path d="M6 18 L24 6 L42 18 L42 40 L6 40 Z" {...c}/>
      <rect x="20" y="26" width="8" height="14" {...c}/>
      <circle cx="14" cy="24" r="1.5" fill="currentColor"/>
      <circle cx="34" cy="24" r="1.5" fill="currentColor"/>
      <line x1="6" y1="40" x2="42" y2="40" {...c} strokeWidth="0.6" opacity="0.5"/>
    </svg>
  );
}
function CloudGlyph() {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round" };
  return (
    <svg viewBox="0 0 48 48" width="44" height="44">
      <path d="M10 30 Q10 18 22 18 Q26 10 34 14 Q42 14 42 24 Q42 32 32 32 L14 32 Q10 32 10 30 Z" {...c}/>
      <line x1="14" y1="38" x2="14" y2="42" {...c}/>
      <line x1="24" y1="38" x2="24" y2="42" {...c}/>
      <line x1="34" y1="38" x2="34" y2="42" {...c}/>
    </svg>
  );
}

window.Embodied = Embodied;
