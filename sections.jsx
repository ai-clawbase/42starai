// === Vision (4×2 + cyber-self) ===

function VisionSection() {
  const { t } = React.useContext(window.LangContext);
  const v_title = t("v_title");
  const v_p1 = t("v_p1");
  const v_p2 = t("v_p2");
  return (
    <section className="vision" id="vision">
      <SectionHead idx="01" label={t("s1_label")} caption={t("s1_caption")} />
      <div className="vision-grid">
        <div className="vision-left">
          <h2 className="serif">{v_title[0]}<br /><span className="dim">{v_title[1]}</span></h2>
          <p className="dim">{v_p1[0]}<span className="cyan">{v_p1[1]}</span>{v_p1[2]}</p>
          <p className="dim"><span className="amber">{v_p2[0]}</span>{v_p2[1]}</p>
        </div>
        <WeekVisualizer />
      </div>

      <hr className="hairline" style={{ margin: "80px 0 64px" }} />

      <SectionHead idx="02" label={t("s2_label")} caption={t("s2_caption")} />
      <CyberSelf />
    </section>
  );
}

function SectionHead({ idx, label, caption }) {
  return (
    <div className="sec-head">
      <span className="sec-idx mono">{idx}</span>
      <div className="sec-meta">
        <div className="mono upper cyan" style={{fontSize: 11}}>{label}</div>
        <div className="serif sec-cap">{caption}</div>
      </div>
      <span className="sec-line" />
    </div>
  );
}

function WeekVisualizer() {
  const { t } = React.useContext(window.LangContext);
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const split = t("week_split");
  return (
    <div className="week-vis">
      <div className="week-head mono upper dim">
        <span>{t("week_total")}</span>
        <span>{split[0]}<span className="cyan">{split[1]}</span>{split[2]}<span className="amber">{split[3]}</span></span>
      </div>
      <div className="week-rows">
        {days.map((d, di) => {
          const isWorkDay = di < 4;
          return (
            <div className="week-row" key={d}>
              <div className="week-day mono">{d}</div>
              <div className="week-cells">
                {Array.from({ length: 24 }).map((_, hi) => {
                  let cls = "wcell";
                  if (isWorkDay && hi >= 10 && hi < 12) cls += " wcell-active";
                  else if (hi >= 7 && hi < 23) cls += " wcell-life";
                  return <div key={hi} className={cls} title={`${hi}:00`} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="week-legend mono dim">
        <span><i className="sw sw-active"></i> {t("week_active")}</span>
        <span><i className="sw sw-life"></i> {t("week_life")}</span>
        <span><i className="sw sw-sleep"></i> {t("week_sleep")}</span>
      </div>
    </div>
  );
}

function CyberSelf() {
  const { t } = React.useContext(window.LangContext);
  const orbits = [
    { r: 38, speed: 22, agents: [
      { name: "Health", ang: 0 }, { name: "Calendar", ang: 120 }, { name: "Inbox", ang: 240 }] },
    { r: 56, speed: 36, agents: [
      { name: "Finance", ang: 30 }, { name: "Home", ang: 110 }, { name: "Learning", ang: 200 }, { name: "Travel", ang: 290 }] },
    { r: 76, speed: 60, agents: [
      { name: "Research", ang: 20 }, { name: "Code", ang: 95 }, { name: "Writing", ang: 175 }, { name: "Comms", ang: 250 }, { name: "Memory", ang: 320 }] },
  ];
  const youLabel = t("cs_l0t");
  return (
    <div className="cyber">
      <div className="cyber-orbits">
        <svg viewBox="-100 -100 200 200">
          {orbits.map((o, i) => (
            <circle key={i} cx="0" cy="0" r={o.r} fill="none" stroke="var(--line-strong)" strokeWidth="0.3" strokeDasharray="0.6 1.2" />
          ))}
          {[0, 45, 90, 135].map(a => (
            <line key={a}
              x1={Math.cos(a*Math.PI/180)*-92} y1={Math.sin(a*Math.PI/180)*-92}
              x2={Math.cos(a*Math.PI/180)*92}  y2={Math.sin(a*Math.PI/180)*92}
              stroke="var(--line)" strokeWidth="0.2" />
          ))}
          <circle cx="0" cy="0" r="14" fill="var(--bg-1)" stroke="var(--cyan)" strokeWidth="0.6" />
          <circle cx="0" cy="0" r="6" fill="var(--cyan)" opacity="0.8">
            <animate attributeName="r" values="5;7;5" dur="3s" repeatCount="indefinite" />
          </circle>
          <text x="0" y="2" textAnchor="middle" fill="var(--bg-0)" fontFamily="var(--f-mono)" fontSize={youLabel.length > 2 ? "3.2" : "4.5"} fontWeight="600">{youLabel}</text>

          {orbits.map((o, oi) => (
            <g key={oi}>
              <animateTransform attributeName="transform" type="rotate" from="0 0 0" to={`${oi % 2 ? -360 : 360} 0 0`} dur={`${o.speed}s`} repeatCount="indefinite" />
              {o.agents.map((a, ai) => {
                const x = Math.cos(a.ang * Math.PI / 180) * o.r;
                const y = Math.sin(a.ang * Math.PI / 180) * o.r;
                return (
                  <g key={ai} transform={`translate(${x} ${y})`}>
                    <circle r="2.2" fill="var(--amber)" opacity="0.95" />
                    <circle r="4" fill="none" stroke="var(--amber)" strokeWidth="0.3" opacity="0.5" />
                    <g>
                      <animateTransform attributeName="transform" type="rotate" from="0" to={`${oi % 2 ? 360 : -360}`} dur={`${o.speed}s`} repeatCount="indefinite" />
                      <text x="0" y="-5" textAnchor="middle" fill="var(--fg-dim)" fontFamily="var(--f-mono)" fontSize="2.6">{a.name}</text>
                    </g>
                  </g>
                );
              })}
            </g>
          ))}
        </svg>
      </div>
      <div className="cyber-meta">
        {["l0","l1","l2","l3"].map((k, i) => {
          const color = i === 0 ? "cyan" : i === 2 ? "amber" : i === 3 ? "" : "cyan";
          const colStyle = i === 3 ? {color: "var(--violet)"} : {};
          return (
            <div className="cyber-block" key={k}>
              <div className={"mono upper " + color} style={{fontSize: 11, ...colStyle}}>{t("cs_" + k)}</div>
              <div className="serif" style={{fontSize: i === 0 ? 26 : 22}}>{t("cs_" + k + "t")}</div>
              <p className="dim">{t("cs_" + k + "p")}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

window.VisionSection = VisionSection;
window.SectionHead = SectionHead;
