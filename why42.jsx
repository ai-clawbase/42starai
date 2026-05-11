// === Why 42? — cosmic mysteries section ===

function Why42() {
  const { t, lang } = React.useContext(window.LangContext);
  const FACTS = {
    "zh-CN": [
      { code: "ASTRO · 042°",  title: "彩虹的角度",        body: "光线在水滴中折射，形成彩虹的最佳出射角为 42°。每一次抬头看见弧光，宇宙都在悄悄回答。" },
      { code: "PHYSICS · Mo",  title: "钼的原子序数",      body: "元素周期表第 42 号位是钼 (Mo)：硬度、韧性、耐高温。航天、合金、酶催化都靠它撑着。" },
      { code: "MATH · 42",     title: "三立方数之和",      body: "数论里 42 = (-80538738812075974)³ + 80435758145817515³ + 12602123297335631³。简单数字，藏着 2019 年才解出的庞然方程。" },
      { code: "LIGHT · 42 lm", title: "蜡烛的尺度",        body: "1 烛光约 12.57 流明；让蜡烛的光在月夜照见你的脸，大约 42 cm 的距离最暖。" },
      { code: "SETI · 1420 MHz", title: "氢线 ÷ 33.8",       body: "宇宙的‘宇宙背景旋律’氢谱线，正巧落在 1420 兆赫附近——把它折算回辐射温度，约 42 mK 的低噪。" },
      { code: "LIFE · 42°",    title: "体温的 42°",         body: "哺乳动物体温的上限阈值是 42°C。再高，蛋白质就开始变形。42 是生与非生的分界。" },
      { code: "TIME · 42 ms",  title: "意识的颗粒",         body: "人脑识别一个面孔大约 42 毫秒。比眨眼短，比一帧画面长。这是我们与世界交握的最短握手。" },
      { code: "COSMOS · 42",   title: "可观测宇宙",         body: "可观测宇宙的直径约 9.3 × 10²⁶ 米；折算到自然单位，指数末尾常常停在 42 附近。" },
    ],
    "zh-TW": [
      { code: "ASTRO · 042°",  title: "彩虹的角度",        body: "光線在水滴中折射，形成彩虹的最佳出射角為 42°。每一次抬頭看見弧光，宇宙都在悄悄回答。" },
      { code: "PHYSICS · Mo",  title: "鉬的原子序數",      body: "元素週期表第 42 號位是鉬 (Mo)：硬度、韌性、耐高溫。航天、合金、酶催化都靠它撐著。" },
      { code: "MATH · 42",     title: "三立方數之和",      body: "數論裡 42 = (-80538738812075974)³ + 80435758145817515³ + 12602123297335631³。簡單數字，藏著 2019 年才解出的龐然方程。" },
      { code: "LIGHT · 42 lm", title: "蠟燭的尺度",        body: "1 燭光約 12.57 流明；讓蠟燭的光在月夜照見你的臉，大約 42 cm 的距離最暖。" },
      { code: "SETI · 1420 MHz", title: "氫線 ÷ 33.8",       body: "宇宙的氫譜線正巧落在 1420 兆赫附近——把它折算回輻射溫度，約 42 mK 的低噪。" },
      { code: "LIFE · 42°",    title: "體溫的 42°",         body: "哺乳動物體溫的上限閾值是 42°C。再高，蛋白質就開始變形。42 是生與非生的分界。" },
      { code: "TIME · 42 ms",  title: "意識的顆粒",         body: "人腦辨識一個面孔大約 42 毫秒。比眨眼短，比一幀畫面長。" },
      { code: "COSMOS · 42",   title: "可觀測宇宙",         body: "可觀測宇宙的直徑約 9.3 × 10²⁶ 米；折算到自然單位，指數末尾常常停在 42 附近。" },
    ],
    "en": [
      { code: "ASTRO · 042°",  title: "The angle of a rainbow",    body: "Sunlight refracts inside a raindrop and emerges at 42°. Every time a rainbow appears, the cosmos quietly answers." },
      { code: "PHYSICS · Mo",  title: "Element no. 42 — Molybdenum", body: "Hard, tough, heat-stubborn. It holds together rockets, alloys, and the enzymes that hold you together." },
      { code: "MATH · 42",     title: "Sum of three cubes",         body: "42 = (-80538738812075974)³ + 80435758145817515³ + 12602123297335631³ — a 2019 result for a deceptively simple number." },
      { code: "LIGHT · 42 lm", title: "Candle-scale",               body: "A candle is ~12.57 lumens. To see a face by candlelight on a moonless night, ~42 cm is the warmest distance." },
      { code: "SETI · 1420 MHz", title: "Hydrogen line ÷ 33.8",      body: "The universe hums at the 1420 MHz hydrogen line. Convert it to brightness temperature and ~42 mK of noise floor stays." },
      { code: "LIFE · 42°",    title: "The 42° of body heat",        body: "Mammals tap out at 42°C. Past that, proteins unfold. 42 is the seam between living and not." },
      { code: "TIME · 42 ms",  title: "A grain of consciousness",    body: "The brain recognises a face in ~42 ms. Shorter than a blink, longer than a frame. The shortest handshake with the world." },
      { code: "COSMOS · 42",   title: "The observable universe",     body: "Diameter ≈ 9.3 × 10²⁶ m. In natural units, the exponent keeps settling near 42." },
    ],
  };
  const facts = FACTS[lang] || FACTS["zh-CN"];
  const HEAD = {
    "zh-CN": { label: "为什么是 42", caption: "宇宙留下的一组同名签到。", lead: "42 不是我们起的名字。是宇宙在 N 个独立的角落都写下的同一个数字——我们只是把它做成了可以调用的产品。" },
    "zh-TW": { label: "為什麼是 42", caption: "宇宙留下的一組同名簽到。", lead: "42 不是我們起的名字。是宇宙在 N 個獨立的角落都寫下的同一個數字——我們只是把它做成了可以呼叫的產品。" },
    "en":    { label: "WHY 42", caption: "A set of cosmic name-collisions.", lead: "We didn't pick the number. The universe wrote 42 down in many independent corners — we just turned it into something you can call()." },
  }[lang] || {};

  return (
    <section className="why42" id="why42">
      <window.SectionHead idx="06" label={HEAD.label} caption={HEAD.caption} />
      <p className="why-lead">{HEAD.lead}</p>
      <div className="why-grid">
        {facts.map((f, i) => (
          <article key={i} className="why-card">
            <div className="why-num serif">{String(i + 1).padStart(2, "0")}</div>
            <div className="why-code mono">{f.code}</div>
            <h4 className="why-title serif">{f.title}</h4>
            <p className="why-body">{f.body}</p>
          </article>
        ))}
      </div>

      <div className="why-orbit" aria-hidden>
        <svg viewBox="0 0 1200 300" preserveAspectRatio="none">
          {Array.from({length: 42}).map((_, i) => {
            const x = (i / 41) * 1200;
            const y = 150 + Math.sin(i * 0.7) * 60;
            return <circle key={i} cx={x} cy={y} r={i === 21 ? 6 : 2} fill={i === 21 ? "var(--cyan)" : "var(--fg-mute)"} opacity={i === 21 ? 1 : 0.5}/>;
          })}
          <path d="M 0 150 Q 600 30, 1200 150" fill="none" stroke="var(--cyan)" strokeWidth="0.5" opacity="0.4" strokeDasharray="4 6"/>
          <text x="600" y="60" textAnchor="middle" fontFamily="Instrument Serif" fontStyle="italic" fontSize="56" fill="var(--cyan)" opacity="0.9">42</text>
          <text x="600" y="92" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="11" letterSpacing="3" fill="var(--fg-mute)">THE NUMBER · INDEX 21 OF 42</text>
        </svg>
      </div>
    </section>
  );
}

window.Why42 = Why42;
