// === Product matrix — categorized grid ===

function Matrix() {
  const { t } = React.useContext(window.LangContext);
  const products = window.PRODUCTS;
  const planes = window.PLANES;
  const groups = ["personal", "enterprise", "vertical", "standard", "hardware"];
  const planeLabels = window.PLANE_LABELS[window.__LANG__] || window.PLANE_LABELS["zh-CN"];
  return (
    <section className="matrix" id="matrix">
      <window.SectionHead idx="05" label={t("s5_label")} caption={t("s5_caption")} />
      <div className="mx-list">
        {groups.map(g => {
          const list = products.filter(p => p.plane === g);
          return (
            <div className="mx-group" key={g}>
              <div className="mx-group-head">
                <div className="mono upper" style={{fontSize: 11, color: planes[g].hue}}>{t("mx_plane")} · {planes[g].code}</div>
                <div className="serif mx-group-title">{planeLabels[g]}</div>
                <div className="mono mute" style={{fontSize: 12}}>{list.length} {t("mx_products")}</div>
              </div>
              <div className="mx-cards">
                {list.map(p => <ProductCard key={p.id} p={p} plane={planes[p.plane]} />)}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ProductCard({ p, plane }) {
  const tp = (k) => (window.TP[p.id] && window.TP[p.id][window.__LANG__] && window.TP[p.id][window.__LANG__][k]) || "";
  return (
    <a className="pcard" href={`#${p.id}`} onClick={(e) => e.preventDefault()}>
      <div className="pcard-top">
        <span className="mono dim" style={{fontSize: 11}}>{p.code}</span>
        <span className="mono upper" style={{fontSize: 10, color: plane.hue}}>{plane.code}</span>
      </div>
      <div className="pcard-icon" aria-hidden><FormGlyph form={p.form} /></div>
      <div className="pcard-name serif">{p.name}</div>
      <div className="pcard-tag mono dim">{tp("tag")}</div>
      <p className="pcard-pitch">{tp("pitch")}</p>
      <div className="pcard-foot">
        <span className="mono mute" style={{fontSize: 11}}>{p.stat}</span>
        <span className="pcard-arrow mono">→</span>
      </div>
    </a>
  );
}

function FormGlyph({ form }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.2, strokeLinecap: "round", strokeLinejoin: "round" };
  if (form === "mobile") return (<svg viewBox="0 0 48 48" width="40" height="40"><rect x="14" y="6" width="20" height="36" rx="3" {...c}/><line x1="20" y1="38" x2="28" y2="38" {...c}/><line x1="14" y1="12" x2="34" y2="12" {...c} opacity="0.4"/></svg>);
  if (form === "desktop") return (<svg viewBox="0 0 48 48" width="40" height="40"><rect x="4" y="10" width="40" height="26" rx="2" {...c}/><line x1="18" y1="42" x2="30" y2="42" {...c}/><line x1="24" y1="36" x2="24" y2="42" {...c}/><circle cx="24" cy="23" r="3" {...c}/></svg>);
  if (form === "platform") return (<svg viewBox="0 0 48 48" width="40" height="40"><rect x="6" y="8" width="36" height="8" rx="1" {...c}/><rect x="6" y="20" width="36" height="8" rx="1" {...c}/><rect x="6" y="32" width="36" height="8" rx="1" {...c}/><circle cx="11" cy="12" r="1" fill="currentColor"/><circle cx="11" cy="24" r="1" fill="currentColor"/><circle cx="11" cy="36" r="1" fill="currentColor"/></svg>);
  if (form === "saas") return (<svg viewBox="0 0 48 48" width="40" height="40"><path d="M10 30 Q10 18 22 18 Q26 10 34 14 Q42 14 42 24 Q42 32 32 32 L14 32 Q10 32 10 30 Z" {...c}/><circle cx="24" cy="38" r="1.4" fill="currentColor"/><circle cx="20" cy="40" r="1" fill="currentColor"/><circle cx="28" cy="40" r="1" fill="currentColor"/></svg>);
  if (form === "spec") return (<svg viewBox="0 0 48 48" width="40" height="40"><path d="M14 6 L30 6 L38 14 L38 42 L14 42 Z" {...c}/><polyline points="30,6 30,14 38,14" {...c}/><line x1="18" y1="22" x2="34" y2="22" {...c} opacity="0.6"/><line x1="18" y1="28" x2="34" y2="28" {...c} opacity="0.6"/><line x1="18" y1="34" x2="28" y2="34" {...c} opacity="0.6"/></svg>);
  if (form === "marketplace") return (<svg viewBox="0 0 48 48" width="40" height="40"><rect x="6" y="6" width="16" height="16" {...c}/><rect x="26" y="6" width="16" height="16" {...c}/><rect x="6" y="26" width="16" height="16" {...c}/><rect x="26" y="26" width="16" height="16" {...c} strokeDasharray="2 2"/></svg>);
  if (form === "device") return (<svg viewBox="0 0 48 48" width="40" height="40"><rect x="10" y="14" width="28" height="20" rx="3" {...c}/><circle cx="24" cy="24" r="4" {...c}/><line x1="6" y1="24" x2="10" y2="24" {...c}/><line x1="38" y1="24" x2="42" y2="24" {...c}/></svg>);
  return null;
}

window.Matrix = Matrix;
