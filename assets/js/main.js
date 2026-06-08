(function () {
  const site = window.SITE;
  const pageKey = document.body.dataset.page || "home";
  const org = site.org;
  const app = document.getElementById("app");

  function esc(text) {
    return String(text || "").replace(/[&<>"]/g, s => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;" }[s]));
  }

  function header() {
    const nav = site.nav.map(([label, href, key]) => `<a class="${key === pageKey ? "active" : ""}" href="${href}">${label}</a>`).join("");
    return `
      <header class="site-header">
        <div class="header-inner">
          <a class="brand" href="index.html" aria-label="返回首页">
            <img src="assets/img/logo.svg" alt="${org.shortName}标识">
            <span>
              <span class="brand-title">${org.shortName}</span>
              <span class="brand-subtitle">${org.enName}</span>
            </span>
          </a>
          <button class="nav-toggle" type="button" aria-label="打开导航">菜单</button>
          <nav class="nav" aria-label="主导航">${nav}</nav>
        </div>
      </header>`;
  }

  function footer() {
    const links = site.nav.map(([label, href]) => `<a href="${href}">${label}</a>`).join("");
    return `
      <footer class="site-footer">
        <div class="footer-inner">
          <div>
            <h2>${org.shortName}</h2>
            <p>以真实世界研究为方法，以公众健康改善为目标，连接科学、政策、产业与生活。</p>
            <p>${org.address}<br>${org.email} · ${org.phone}</p>
          </div>
          <div class="footer-links">${links}</div>
        </div>
        <div class="copyright">© ${new Date().getFullYear()} ${org.name}. 保留所有权利。</div>
      </footer>`;
  }

  function home() {
    const h = site.home;
    return `
      <section class="hero">
        <div class="hero-grid">
          <div>
            <span class="kicker">${h.kicker}</span>
            <h1>${h.title}</h1>
            <p>${h.desc}</p>
            <div class="hero-actions">
              <a class="btn primary" href="research.html">了解研究体系</a>
              <a class="btn secondary" href="partnership.html">探索合作方向</a>
            </div>
          </div>
          <div class="hero-panel">
            <img src="assets/img/logo.svg" alt="中心科技蓝视觉标识">
            <h3>数据—证据—决策—实施—转化</h3>
            <p>围绕真实世界健康问题，构建全链条科研与产业转化体系。</p>
            <div class="metric-grid">${h.metrics.map(([num, label]) => `<div class="metric"><b>${num}</b><span>${label}</span></div>`).join("")}</div>
          </div>
        </div>
      </section>
      <section class="section compact">
        <div class="section-head">
          <div><span class="eyebrow">Positioning</span><h2>${h.intro.title}</h2></div>
          <p>${h.intro.text}</p>
        </div>
        <div class="split">
          <div class="glass"><h3>中心定位</h3><p>真实世界研究高地、公共卫生数据智库、健康科学转化平台和复合型人才培养基地。</p></div>
          <div class="pipeline">${h.intro.pipeline.map((item, i) => `<div class="pipeline-item"><span>${item}</span><span>0${i + 1}</span></div>`).join("")}</div>
        </div>
      </section>
      <section class="feature-band"><div class="section">
        <div class="section-head"><div><span class="eyebrow">Highlights</span><h2>官网重点呈现方向</h2></div><p>首页突出中心的科学定位、区域优势与转化能力，为政府、科研机构和产业伙伴建立第一印象。</p></div>
        <div class="cards">${cards(h.cards)}</div>
      </div></section>`;
  }

  function pageTitle(page) {
    return `<section class="page-title"><div class="page-title-inner"><div class="breadcrumb">首页 / ${page.title}</div><span class="kicker">${page.eyebrow || "RWS"}</span><h1>${page.title}</h1><p>${page.desc}</p></div></section>`;
  }

  function cards(items) {
    return items.map(item => `<article class="card"><span class="tag">${item.title.slice(0, 8)}</span><h3>${item.title}</h3><p>${item.text}</p>${item.points ? `<ul>${item.points.map(p => `<li>${p}</li>`).join("")}</ul>` : ""}</article>`).join("");
  }

  function sectionBlock(s) {
    let body = "";
    if (s.p) body += s.p.map(p => `<p>${p}</p>`).join("");
    if (s.quote) body += `<blockquote>${s.quote}</blockquote>`;
    if (s.list) body += `<ul>${s.list.map(i => `<li>${i}</li>`).join("")}</ul>`;
    if (s.cards) body += `<div class="cards">${cards(s.cards)}</div>`;
    return `<section id="${esc(s.h)}"><h2>${s.h}</h2>${body}</section>`;
  }

  function generic(page) {
    const side = page.anchors ? `<aside class="card side-card"><h3>本页导航</h3>${page.anchors.map(a => `<a href="#${esc(a)}">${a}</a>`).join("")}</aside>` : "";
    let content = "";
    if (page.cards) content += `<div class="cards">${cards(page.cards)}</div>`;
    if (page.sections) content += `<div class="prose">${page.sections.map(sectionBlock).join("")}</div>`;
    if (page.timeline) content += `<div class="timeline">${page.timeline.map(i => `<article class="timeline-item"><h3>${i.title}</h3><p>${i.text}</p></article>`).join("")}</div>`;
    if (page.contacts) content += contact(page);
    return `${pageTitle(page)}<section class="section"><div class="${side ? "content-grid" : ""}">${side}<div>${content}</div></div></section>`;
  }

  function contact(page) {
    return `<div class="split">
      <div class="prose"><h2>合作咨询</h2><div class="contact-box">${page.contacts.map(([k, v]) => `<div class="contact-line"><b>${k}</b><span>${v}</span></div>`).join("")}</div></div>
      <div class="prose"><h2>发送合作意向</h2><form class="form" action="mailto:${org.email}" method="post" enctype="text/plain"><input name="name" placeholder="姓名 / 机构" required><input name="email" type="email" placeholder="邮箱" required><input name="topic" placeholder="合作主题"><textarea name="message" placeholder="请简要说明您的合作需求"></textarea><button class="btn primary" type="submit">发送邮件</button></form></div>
    </div>`;
  }

  app.innerHTML = header() + `<main>${pageKey === "home" ? home() : generic(site.pages[pageKey])}</main>` + footer();
  document.querySelector(".nav-toggle")?.addEventListener("click", () => document.querySelector(".nav")?.classList.toggle("open"));
})();
