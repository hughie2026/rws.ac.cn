/* =========================================================
   横琴真研健康科学中心官网 · 高级版视觉设计
   文件路径：assets/css/styles.css
   适用：GitHub Pages 静态官网
   ========================================================= */

/* ---------- 基础变量 ---------- */
:root {
  --bg: #f5f8fc;
  --bg-soft: #eef4fb;
  --bg-deep: #071a33;

  --primary: #0b4a8f;
  --primary-dark: #063766;
  --primary-light: #1d7fd1;
  --cyan: #22b7e8;
  --teal: #1fc7b6;

  --text: #102033;
  --text-soft: #5f7188;
  --text-light: #eef7ff;

  --white: #ffffff;
  --line: rgba(11, 74, 143, 0.12);
  --line-strong: rgba(11, 74, 143, 0.22);

  --shadow-sm: 0 10px 30px rgba(6, 35, 71, 0.08);
  --shadow-md: 0 20px 60px rgba(6, 35, 71, 0.14);
  --shadow-lg: 0 30px 90px rgba(6, 35, 71, 0.22);

  --radius-sm: 12px;
  --radius-md: 20px;
  --radius-lg: 32px;

  --container: 1180px;
}

/* ---------- 全局重置 ---------- */
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    "PingFang SC",
    "Hiragino Sans GB",
    "Microsoft YaHei",
    Arial,
    sans-serif;
  color: var(--text);
  background:
    radial-gradient(circle at top left, rgba(34, 183, 232, 0.15), transparent 30%),
    radial-gradient(circle at top right, rgba(31, 199, 182, 0.12), transparent 28%),
    linear-gradient(180deg, #f8fbff 0%, #eef4fb 42%, #f7fafd 100%);
  line-height: 1.75;
  -webkit-font-smoothing: antialiased;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

button,
input,
textarea {
  font: inherit;
}

::selection {
  color: #fff;
  background: var(--primary);
}

/* ---------- 顶部导航 ---------- */
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(248, 251, 255, 0.82);
  backdrop-filter: blur(22px);
  border-bottom: 1px solid rgba(11, 74, 143, 0.1);
}

.header-inner {
  width: min(var(--container), calc(100% - 40px));
  margin: 0 auto;
  min-height: 78px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  min-width: 280px;
}

.brand img {
  width: 46px;
  height: 46px;
  border-radius: 14px;
  padding: 6px;
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.96), rgba(230, 244, 255, 0.9));
  box-shadow: 0 12px 26px rgba(11, 74, 143, 0.16);
}

.brand-title {
  display: block;
  font-size: 18px;
  font-weight: 800;
  line-height: 1.25;
  letter-spacing: -0.02em;
  color: var(--primary-dark);
}

.brand-subtitle {
  display: block;
  margin-top: 3px;
  max-width: 320px;
  font-size: 11px;
  line-height: 1.3;
  color: var(--text-soft);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2px;
  flex-wrap: wrap;
}

.nav a {
  position: relative;
  padding: 9px 11px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 650;
  color: #38526c;
  transition:
    color 0.25s ease,
    background 0.25s ease,
    transform 0.25s ease;
}

.nav a:hover {
  color: var(--primary-dark);
  background: rgba(11, 74, 143, 0.08);
}

.nav a.active {
  color: #fff;
  background:
    linear-gradient(135deg, var(--primary), var(--primary-light));
  box-shadow: 0 10px 24px rgba(11, 74, 143, 0.22);
}

.nav-toggle {
  display: none;
  border: 0;
  color: #fff;
  cursor: pointer;
  font-weight: 700;
  padding: 10px 16px;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  box-shadow: 0 12px 28px rgba(11, 74, 143, 0.22);
}

/* ---------- 通用布局 ---------- */
main {
  overflow: hidden;
}

.section {
  width: min(var(--container), calc(100% - 40px));
  margin: 0 auto;
  padding: 86px 0;
}

.section.compact {
  padding-top: 72px;
  padding-bottom: 72px;
}

.section-head {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(280px, 1.1fr);
  align-items: end;
  gap: 54px;
  margin-bottom: 34px;
}

.section-head h2,
.prose h2,
.page-title h1 {
  margin: 0;
  letter-spacing: -0.05em;
}

.section-head h2 {
  font-size: clamp(30px, 4vw, 48px);
  line-height: 1.12;
  color: var(--primary-dark);
}

.section-head p {
  margin: 0;
  color: var(--text-soft);
  font-size: 17px;
}

.eyebrow,
.kicker {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  margin-bottom: 16px;
  padding: 7px 13px;
  border-radius: 999px;
  color: var(--primary);
  background: rgba(34, 183, 232, 0.11);
  border: 1px solid rgba(34, 183, 232, 0.22);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.eyebrow::before,
.kicker::before {
  content: "";
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--cyan), var(--teal));
  box-shadow: 0 0 0 5px rgba(34, 183, 232, 0.11);
}

/* ---------- 首页 Hero ---------- */
.hero {
  position: relative;
  min-height: calc(100vh - 78px);
  display: flex;
  align-items: center;
  padding: 86px 0;
  background:
    linear-gradient(115deg, rgba(7, 26, 51, 0.96), rgba(5, 52, 93, 0.92)),
    radial-gradient(circle at 78% 18%, rgba(34, 183, 232, 0.34), transparent 26%),
    radial-gradient(circle at 68% 86%, rgba(31, 199, 182, 0.22), transparent 32%);
  color: var(--text-light);
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
  background-size: 54px 54px;
  mask-image: linear-gradient(180deg, black 0%, transparent 78%);
  pointer-events: none;
}

.hero::after {
  content: "";
  position: absolute;
  right: -160px;
  top: 40px;
  width: 560px;
  height: 560px;
  border-radius: 999px;
  border: 1px solid rgba(34, 183, 232, 0.25);
  background:
    radial-gradient(circle, rgba(34, 183, 232, 0.18), transparent 62%);
  pointer-events: none;
}

.hero-grid {
  position: relative;
  z-index: 1;
  width: min(var(--container), calc(100% - 40px));
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(360px, 0.9fr);
  align-items: center;
  gap: 72px;
}

.hero .kicker {
  color: #bdefff;
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.18);
}

.hero h1 {
  margin: 0;
  max-width: 760px;
  font-size: clamp(44px, 7vw, 82px);
  line-height: 1.02;
  letter-spacing: -0.07em;
  font-weight: 900;
}

.hero p {
  max-width: 690px;
  margin: 28px 0 0;
  color: rgba(238, 247, 255, 0.82);
  font-size: 18px;
  line-height: 1.9;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 36px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 22px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 800;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    background 0.25s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn.primary {
  color: #05223f;
  background: linear-gradient(135deg, #ffffff, #bdefff);
  box-shadow: 0 18px 38px rgba(34, 183, 232, 0.28);
}

.btn.secondary {
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.28);
  background: rgba(255, 255, 255, 0.08);
}

.btn.secondary:hover {
  background: rgba(255, 255, 255, 0.14);
}

.hero-panel {
  position: relative;
  padding: 34px;
  border-radius: var(--radius-lg);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.07));
  border: 1px solid rgba(255, 255, 255, 0.22);
  box-shadow: var(--shadow-lg);
  backdrop-filter: blur(20px);
  overflow: hidden;
}

.hero-panel::before {
  content: "";
  position: absolute;
  width: 220px;
  height: 220px;
  right: -70px;
  top: -70px;
  border-radius: 999px;
  background: rgba(34, 183, 232, 0.24);
  filter: blur(4px);
}

.hero-panel img {
  position: relative;
  width: 94px;
  height: 94px;
  padding: 12px;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
}

.hero-panel h3 {
  position: relative;
  margin: 28px 0 10px;
  font-size: 26px;
  line-height: 1.26;
  letter-spacing: -0.04em;
}

.hero-panel p {
  position: relative;
  margin-top: 0;
  color: rgba(238, 247, 255, 0.74);
  font-size: 15px;
}

.metric-grid {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  margin-top: 28px;
}

.metric {
  padding: 20px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.14);
}

.metric b {
  display: block;
  font-size: 30px;
  line-height: 1;
  color: #ffffff;
}

.metric span {
  display: block;
  margin-top: 10px;
  font-size: 13px;
  color: rgba(238, 247, 255, 0.72);
}

/* ---------- 首页定位区 ---------- */
.split {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(320px, 1.1fr);
  gap: 28px;
  align-items: stretch;
}

.glass {
  padding: 34px;
  border-radius: var(--radius-lg);
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.88), rgba(233, 244, 255, 0.78));
  border: 1px solid var(--line);
  box-shadow: var(--shadow-sm);
}

.glass h3 {
  margin: 0 0 14px;
  color: var(--primary-dark);
  font-size: 26px;
  letter-spacing: -0.04em;
}

.glass p {
  margin: 0;
  color: var(--text-soft);
}

.pipeline {
  display: grid;
  gap: 14px;
}

.pipeline-item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 74px;
  padding: 0 24px;
  border-radius: 22px;
  background: var(--white);
  border: 1px solid var(--line);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
}

.pipeline-item::before {
  content: "";
  position: absolute;
  inset: 0 auto 0 0;
  width: 5px;
  background: linear-gradient(180deg, var(--primary-light), var(--cyan), var(--teal));
}

.pipeline-item span:first-child {
  font-size: 18px;
  font-weight: 850;
  color: var(--primary-dark);
}

.pipeline-item span:last-child {
  font-size: 15px;
  font-weight: 900;
  color: rgba(11, 74, 143, 0.22);
}

/* ---------- 特色背景区 ---------- */
.feature-band {
  position: relative;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.44), rgba(232, 242, 251, 0.62));
  border-top: 1px solid rgba(11, 74, 143, 0.08);
  border-bottom: 1px solid rgba(11, 74, 143, 0.08);
}

/* ---------- 通用卡片 ---------- */
.cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.card {
  position: relative;
  min-height: 220px;
  padding: 28px;
  border-radius: 28px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(246, 251, 255, 0.96));
  border: 1px solid var(--line);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}

.card::after {
  content: "";
  position: absolute;
  right: -70px;
  top: -70px;
  width: 150px;
  height: 150px;
  border-radius: 999px;
  background:
    radial-gradient(circle, rgba(34, 183, 232, 0.17), transparent 70%);
  transition: transform 0.25s ease;
}

.card:hover {
  transform: translateY(-6px);
  border-color: var(--line-strong);
  box-shadow: var(--shadow-md);
}

.card:hover::after {
  transform: scale(1.25);
}

.tag {
  display: inline-flex;
  margin-bottom: 18px;
  padding: 6px 11px;
  border-radius: 999px;
  color: var(--primary);
  background: rgba(11, 74, 143, 0.08);
  font-size: 12px;
  font-weight: 800;
}

.card h3 {
  position: relative;
  z-index: 1;
  margin: 0 0 14px;
  color: var(--primary-dark);
  font-size: 22px;
  line-height: 1.35;
  letter-spacing: -0.035em;
}

.card p {
  position: relative;
  z-index: 1;
  margin: 0;
  color: var(--text-soft);
}

.card ul {
  position: relative;
  z-index: 1;
  margin: 18px 0 0;
  padding: 0;
  list-style: none;
}

.card li {
  position: relative;
  padding-left: 18px;
  margin-top: 9px;
  color: #52687f;
  font-size: 14px;
}

.card li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.8em;
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--primary-light), var(--cyan));
}

/* ---------- 子页面标题 ---------- */
.page-title {
  position: relative;
  padding: 92px 0 78px;
  color: #fff;
  background:
    linear-gradient(115deg, rgba(7, 26, 51, 0.96), rgba(8, 65, 114, 0.92)),
    radial-gradient(circle at 84% 22%, rgba(34, 183, 232, 0.24), transparent 30%);
  overflow: hidden;
}

.page-title::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.038) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.038) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: linear-gradient(180deg, black 0%, transparent 78%);
}

.page-title::after {
  content: "";
  position: absolute;
  right: 10%;
  bottom: -130px;
  width: 360px;
  height: 360px;
  border-radius: 999px;
  border: 1px solid rgba(34, 183, 232, 0.25);
  background: rgba(34, 183, 232, 0.08);
}

.page-title-inner {
  position: relative;
  z-index: 1;
  width: min(var(--container), calc(100% - 40px));
  margin: 0 auto;
}

.breadcrumb {
  margin-bottom: 18px;
  color: rgba(238, 247, 255, 0.62);
  font-size: 14px;
}

.page-title .kicker {
  color: #bdefff;
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.18);
}

.page-title h1 {
  max-width: 780px;
  font-size: clamp(42px, 6vw, 72px);
  line-height: 1.05;
  font-weight: 900;
}

.page-title p {
  max-width: 800px;
  margin: 24px 0 0;
  color: rgba(238, 247, 255, 0.78);
  font-size: 18px;
}

/* ---------- 子页面内容 ---------- */
.content-grid {
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  gap: 34px;
  align-items: start;
}

.side-card {
  position: sticky;
  top: 104px;
  min-height: auto;
}

.side-card h3 {
  margin-bottom: 18px;
}

.side-card a {
  display: block;
  padding: 11px 0;
  color: var(--text-soft);
  border-bottom: 1px solid rgba(11, 74, 143, 0.08);
  font-size: 14px;
  font-weight: 700;
}

.side-card a:hover {
  color: var(--primary);
}

.prose {
  display: grid;
  gap: 34px;
}

.prose section {
  padding: 34px;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid var(--line);
  box-shadow: var(--shadow-sm);
}

.prose h2 {
  margin-bottom: 18px;
  color: var(--primary-dark);
  font-size: clamp(26px, 3vw, 38px);
  line-height: 1.18;
}

.prose p {
  margin: 0 0 14px;
  color: var(--text-soft);
  font-size: 16px;
}

.prose p:last-child {
  margin-bottom: 0;
}

.prose ul {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin: 18px 0 0;
  padding: 0;
  list-style: none;
}

.prose li {
  position: relative;
  padding: 15px 16px 15px 42px;
  border-radius: 16px;
  color: #40576f;
  background: rgba(11, 74, 143, 0.045);
  border: 1px solid rgba(11, 74, 143, 0.08);
}

.prose li::before {
  content: "";
  position: absolute;
  left: 18px;
  top: 23px;
  width: 9px;
  height: 9px;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--primary-light), var(--cyan));
}

blockquote {
  position: relative;
  margin: 0;
  padding: 32px 34px;
  border-radius: 26px;
  color: var(--primary-dark);
  background:
    linear-gradient(135deg, rgba(34, 183, 232, 0.11), rgba(31, 199, 182, 0.08));
  border: 1px solid rgba(34, 183, 232, 0.22);
  font-size: 22px;
  font-weight: 850;
  line-height: 1.65;
  letter-spacing: -0.03em;
}

blockquote::before {
  content: "“";
  position: absolute;
  right: 26px;
  top: -18px;
  color: rgba(11, 74, 143, 0.12);
  font-size: 96px;
  font-family: Georgia, serif;
}

/* ---------- 时间线 ---------- */
.timeline {
  position: relative;
  display: grid;
  gap: 18px;
  padding-left: 28px;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 7px;
  top: 10px;
  bottom: 10px;
  width: 2px;
  background: linear-gradient(180deg, var(--primary-light), var(--cyan), var(--teal));
}

.timeline-item {
  position: relative;
  padding: 28px 30px;
  border-radius: 26px;
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid var(--line);
  box-shadow: var(--shadow-sm);
}

.timeline-item::before {
  content: "";
  position: absolute;
  left: -28px;
  top: 34px;
  width: 14px;
  height: 14px;
  border-radius: 999px;
  background: var(--cyan);
  box-shadow:
    0 0 0 6px rgba(34, 183, 232, 0.14),
    0 0 0 12px rgba(34, 183, 232, 0.07);
}

.timeline-item h3 {
  margin: 0 0 10px;
  color: var(--primary-dark);
  font-size: 23px;
  letter-spacing: -0.035em;
}

.timeline-item p {
  margin: 0;
  color: var(--text-soft);
}

/* ---------- 联系页面 ---------- */
.contact-box {
  display: grid;
  gap: 12px;
}

.contact-line {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 18px;
  padding: 16px;
  border-radius: 18px;
  background: rgba(11, 74, 143, 0.045);
  border: 1px solid rgba(11, 74, 143, 0.08);
}

.contact-line b {
  color: var(--primary-dark);
}

.contact-line span {
  color: var(--text-soft);
}

.form {
  display: grid;
  gap: 14px;
}

.form input,
.form textarea {
  width: 100%;
  border: 1px solid rgba(11, 74, 143, 0.14);
  border-radius: 18px;
  padding: 15px 17px;
  color: var(--text);
  background: #fff;
  outline: none;
  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}

.form textarea {
  min-height: 150px;
  resize: vertical;
}

.form input:focus,
.form textarea:focus {
  border-color: rgba(34, 183, 232, 0.75);
  box-shadow: 0 0 0 4px rgba(34, 183, 232, 0.12);
}

.form .btn.primary {
  border: 0;
  cursor: pointer;
  color: #fff;
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
}

/* ---------- 页脚 ---------- */
.site-footer {
  color: rgba(238, 247, 255, 0.76);
  background:
    radial-gradient(circle at 82% 0%, rgba(34, 183, 232, 0.16), transparent 34%),
    linear-gradient(135deg, #06172d, #082946 62%, #06172d);
}

.footer-inner {
  width: min(var(--container), calc(100% - 40px));
  margin: 0 auto;
  padding: 64px 0 36px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 0.9fr);
  gap: 48px;
}

.footer-inner h2 {
  margin: 0 0 16px;
  color: #fff;
  font-size: 28px;
  letter-spacing: -0.04em;
}

.footer-inner p {
  max-width: 620px;
  margin: 0 0 16px;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.footer-links a {
  padding: 12px 14px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.055);
  border: 1px solid rgba(255, 255, 255, 0.09);
  color: rgba(238, 247, 255, 0.78);
  font-weight: 700;
  transition:
    background 0.25s ease,
    color 0.25s ease;
}

.footer-links a:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
}

.copyright {
  width: min(var(--container), calc(100% - 40px));
  margin: 0 auto;
  padding: 22px 0 28px;
  color: rgba(238, 247, 255, 0.48);
  border-top: 1px solid rgba(255, 255, 255, 0.09);
  font-size: 14px;
}

/* ---------- 无障碍与细节 ---------- */
a:focus-visible,
button:focus-visible,
input:focus-visible,
textarea:focus-visible {
  outline: 3px solid rgba(34, 183, 232, 0.45);
  outline-offset: 3px;
}

/* ---------- 响应式 ---------- */
@media (max-width: 1080px) {
  .header-inner {
    flex-wrap: wrap;
    padding: 14px 0;
  }

  .brand {
    flex: 1;
  }

  .nav-toggle {
    display: inline-flex;
  }

  .nav {
    display: none;
    width: 100%;
    justify-content: flex-start;
    padding: 12px 0 4px;
  }

  .nav.open {
    display: flex;
  }

  .hero-grid,
  .section-head,
  .split,
  .footer-inner {
    grid-template-columns: 1fr;
  }

  .hero {
    min-height: auto;
  }

  .hero-panel {
    max-width: 620px;
  }

  .cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .content-grid {
    grid-template-columns: 1fr;
  }

  .side-card {
    position: relative;
    top: auto;
  }
}

@media (max-width: 720px) {
  .header-inner,
  .hero-grid,
  .section,
  .page-title-inner,
  .footer-inner,
  .copyright {
    width: min(100% - 28px, var(--container));
  }

  .brand {
    min-width: 0;
  }

  .brand-title {
    font-size: 16px;
  }

  .brand-subtitle {
    max-width: 220px;
  }

  .nav {
    gap: 8px;
  }

  .nav a {
    width: calc(50% - 4px);
    text-align: center;
    background: rgba(11, 74, 143, 0.055);
  }

  .hero {
    padding: 64px 0;
  }

  .hero h1 {
    font-size: clamp(38px, 12vw, 58px);
  }

  .hero p,
  .page-title p {
    font-size: 16px;
  }

  .hero-actions {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }

  .hero-panel {
    padding: 24px;
    border-radius: 26px;
  }

  .metric-grid,
  .cards,
  .prose ul,
  .footer-links {
    grid-template-columns: 1fr;
  }

  .section {
    padding: 58px 0;
  }

  .page-title {
    padding: 64px 0 56px;
  }

  .page-title h1 {
    font-size: clamp(36px, 12vw, 54px);
  }

  .card,
  .prose section {
    padding: 24px;
    border-radius: 24px;
  }

  .contact-line {
    grid-template-columns: 1fr;
    gap: 4px;
  }

  .timeline {
    padding-left: 22px;
  }

  .timeline-item::before {
    left: -23px;
  }
}

@media (max-width: 430px) {
  .brand img {
    width: 42px;
    height: 42px;
  }

  .brand-subtitle {
    display: none;
  }

  .nav a {
    width: 100%;
  }

  .hero-panel img {
    width: 78px;
    height: 78px;
  }

  .metric {
    padding: 18px;
  }
}
