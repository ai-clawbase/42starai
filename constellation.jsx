// === Product constellation — interactive star map ===

function Constellation() {
  const { t } = React.useContext(window.LangContext);
  const [active, setActive] = React.useState(null);
  const [hover, setHover] = React.useState(null);
  const products = window.PRODUCTS;
  const planes = window.PLANES;
  const tp = (id, k) => (window.TP[id] && window.TP[id][window.__LANG__] && window.TP[id][window.__LANG__][k]) || "";

  const edges = [
    ["starclaw", "starwork"], ["starclaw", "staryme"],
    ["starclaw", "clawclip"], ["starclaw", "clawuuid"],
    ["clawbase", "clawfin"], ["clawbase", "clawtax"],
    ["clawbase", "clawcoco"], ["clawbase", "clawher"],
    ["clawpkg", "clawlego"], ["clawuuid", "clawlego"],
    ["clawbase", "clawpkg"], ["clawbase", "clawuuid"],
    ["starclaw", "clawpkg"], ["starclaw", "clawlego"],
  ];
  const byId = Object.fromEntries(products.map(p => [p.id, p]));
  const cur = active ? byId[active] : (hover ? byId[hover] : null);
  const planeLabels = window.PLANE_LABELS[window.__LANG__] || window.PLANE_LABELS["zh-CN"];

  return (
    <section className="constellation" id="constellation">
      <window.SectionHead idx="04" label={t("s4_label")} caption={t("s4_caption")} />
      <div className="const-wrap">
        <div className="const-map">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none">
            <g opacity="0.4">
              {[0,25,50,75,100].map(v => (
                <g key={v}>
                  <line x1={v} y1="0" x2={v} y2="100" stroke="var(--line)" strokeWidth="0.1"/>
                  <line x1="0" y1={v} x2="100" y2={v} stroke="var(--line)" strokeWidth="0.1"/>
                </g>
              ))}
            </g>
            {edges.map(([a, b], i) => {
              const A = byId[a], B = byId[b]; if (!A || !B) return null;
              const isActive = cur && (cur.id === a || cur.id === b);
              return <line key={i} x1={A.coord.x} y1={A.coord.y} x2={B.coord.x} y2={B.coord.y}
                stroke={isActive ? "var(--cyan)" : "var(--line-strong)"} strokeWidth={isActive ? "0.25" : "0.12"}
                strokeDasharray={isActive ? "0" : "0.6 0.8"} opacity={isActive ? 0.9 : 0.55}/>;
            })}
            {products.map(p => {
              const isCur = cur && cur.id === p.id;
              const color = planes[p.plane].hue;
              return (
                <g key={p.id} onMouseEnter={() => setHover(p.id)} onMouseLeave={() => setHover(null)}
                   onClick={() => setActive(active === p.id ? null : p.id)} style={{cursor:"pointer"}}>
                  <circle cx={p.coord.x} cy={p.coord.y} r={isCur ? 3 : 2.2} fill={color} opacity={isCur ? 1 : 0.75}/>
                  <circle cx={p.coord.x} cy={p.coord.y} r={isCur ? 5.5 : 4} fill="none" stroke={color} strokeWidth="0.18" opacity="0.6"/>
                  {isCur && (
                    <circle cx={p.coord.x} cy={p.coord.y} r="8" fill="none" stroke={color} strokeWidth="0.12" opacity="0.4">
                      <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite"/>
                      <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite"/>
                    </circle>
                  )}
                  <text x={p.coord.x + 3} y={p.coord.y + 0.8} fill={isCur ? "var(--fg)" : "var(--fg-dim)"} fontFamily="var(--f-mono)" fontSize="2" opacity={isCur ? 1 : 0.7}>{p.code}</text>
                  <text x={p.coord.x + 3} y={p.coord.y + 3.6} fill={isCur ? "var(--fg)" : "var(--fg-mute)"} fontFamily="var(--f-sans)" fontSize="2.2" fontWeight="500">{p.name}</text>
                </g>
              );
            })}
          </svg>
          <div className="const-axes mono dim">
            <span className="ax ax-tl">{t("ax_tl")}</span>
            <span className="ax ax-tr">{t("ax_tr")}</span>
            <span className="ax ax-bl">{t("ax_bl")}</span>
            <span className="ax ax-br">{t("ax_br")}</span>
          </div>
        </div>
        <aside className="const-panel">
          <div className="const-panel-head mono upper dim">
            <span><i className="dot-cyan"></i>{t("cn_panel")}</span>
            <span>{cur ? cur.code : "—"}</span>
          </div>
          {!cur && (
            <div className="const-empty">
              <div className="serif" style={{fontSize: 28, lineHeight: 1.2}}>{t("cn_empty_t")}</div>
              <p className="dim">{t("cn_empty_p")}</p>
              <div className="const-legend">
                {Object.entries(planes).map(([k, v]) => (
                  <div key={k} className="leg-row">
                    <span className="leg-dot" style={{background: v.hue}}></span>
                    <span className="mono">{planeLabels[k]}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {cur && (
            <div className="const-detail">
              <div className="mono upper" style={{color: planes[cur.plane].hue, fontSize: 11}}>
                {planeLabels[cur.plane]} · {cur.form}
              </div>
              <h3 className="serif">{cur.name}</h3>
              <div className="mono dim" style={{marginTop: -8, marginBottom: 16, fontSize: 12}}>{tp(cur.id, "tag")}</div>
              <p>{tp(cur.id, "pitch")}</p>
              <div className="const-stat mono">{cur.stat}</div>
              <button className="cta" style={{marginTop: 16}}>{t("cn_open")} {cur.name} →</button>
            </div>
          )}
        </aside>
      </div>
    </section>
  );
}

window.Constellation = Constellation;
