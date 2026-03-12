import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";

const APP_STORE_URL =
  "https://apps.apple.com/app/apple-store/id6753856530?pt=128074005&ct=Instagram%20bio%20link&mt=8";
const PRIVACY_URL =
  "https://www.notion.so/2904d92eda8680b58fa0f58ddc39824d?source=copy_link";
const TERMS_URL =
  "https://www.apple.com/legal/internet-services/itunes/dev/stdeula";
const SUPPORT_URL =
  "https://www.notion.so/Support-URL-2904d92eda8680539b22edc91c29cf1f?source=copy_link";

function t(lang, zh, en) {
  return lang === "zh" ? zh : en;
}

export default function App() {
  const [lang, setLang] = useState(() => {
    const savedLang = localStorage.getItem("moneytalks_lang");
    return savedLang === "en" ? "en" : "zh";
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.dataset.lang = lang;
    document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
    localStorage.setItem("moneytalks_lang", lang);
  }, [lang]);

  return (
    <>
      <div className="page-bg">
        <span className="orb orb-1" aria-hidden="true"></span>
        <span className="orb orb-2" aria-hidden="true"></span>
        <span className="orb orb-3" aria-hidden="true"></span>
        <span className="dot dot-1" aria-hidden="true"></span>
        <span className="dot dot-2" aria-hidden="true"></span>
        <span className="dot dot-3" aria-hidden="true"></span>
      </div>

      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top">
            <img className="brand-icon" src="/icon.png" alt="Money Talks app icon" />
            <span className="brand-text">
              <span className="brand-en">出口成帳</span>
            </span>
          </a>

          <button
            className="menu-toggle"
            aria-label={t(lang, "打開選單", "Open navigation")}
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
          >
            ☰
          </button>

          <nav className={`main-nav${menuOpen ? " open" : ""}`} aria-label="Main navigation">
            <button
              className="lang-switch"
              id="langSwitch"
              type="button"
              aria-label={t(lang, "Switch to English", "切換到中文")}
              onClick={() => setLang((current) => (current === "zh" ? "en" : "zh"))}
            >
              {lang === "zh" ? "English" : "中文"}
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="container hero-grid">
            <div className="hero-copy">
              <h1>{t(lang, "說話就能記帳", "Speak. Snap. Track.")}</h1>
              <p className="subtitle">
                {t(
                  lang,
                  "簡單直接的記帳，說出你的消費，出口成帳幫你分類、分帳。",
                  "Simple and direct expense tracking. Speak your spend and let Money Talks auto-categorize it."
                )}
              </p>
              <div className="hero-actions">
                <a
                  className="store-link hero-store-link"
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="appstore-icon" src="/app_store_icon.png" alt="" aria-hidden="true" />
                  <span>{t(lang, "前往 App Store", "App Store")}</span>
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="phone-shell">
                <video
                  className="hero-screenshot"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  poster="/screenshot.png"
                  aria-label="Money Talks app screen recording"
                >
                  <source src="/0304.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>

        <section className="stats">
          <div className="container stats-grid">
            <article>
              <h3>6000+</h3>
              <p>{t(lang, "下載", "Downloads")}</p>
            </article>
            <article>
              <h3>4.4/5</h3>
              <p>{t(lang, "App 評分", "App Rating")}</p>
            </article>
            <article>
              <h3>{t(lang, "社群推薦", "Featured by")}</h3>
              <p>
                {t(
                  lang,
                  "Meet 創意小聚・科技島・ifans 愛瘋生活",
                  "Meet Creative Meetup ・ Tech Island ・ ifans"
                )}
              </p>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <h3>出口成帳（Money Talks）</h3>
            <p>{t(lang, "客服信箱：harryhou1107@gmail.com", "Support Email: harryhou1107@gmail.com")}</p>
          </div>
          <div className="footer-links">
            <a href={PRIVACY_URL} target="_blank" rel="noopener noreferrer">
              {t(lang, "隱私權政策", "Privacy Policy")}
            </a>
            <a href={TERMS_URL} target="_blank" rel="noopener noreferrer">
              {t(lang, "使用條款", "Terms of Use")}
            </a>
            <a href={SUPPORT_URL} target="_blank" rel="noopener noreferrer">
              {t(lang, "客戶支援", "Customer Support")}
            </a>
          </div>
        </div>
      </footer>
      <Analytics />
    </>
  );
}
