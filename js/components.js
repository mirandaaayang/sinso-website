/* =========================================================
   Sinso Printing — Shared Header / Footer Components
   ========================================================= */

const HEADER_HTML = `
<!-- Top Bar -->
<div class="top-bar">
  <div class="container">
    <div class="top-bar-left">
      <div class="top-bar-item">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.72 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.63 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16z"/></svg>
        <a href="tel:+864008299008">+86 400-8299-008</a>
      </div>
      <div class="top-bar-item">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        <a href="mailto:sales@sinsoprinting.com">sales@sinsoprinting.com</a>
      </div>
    </div>
    <div class="top-bar-right">
      <div class="lang-toggle" role="group" aria-label="Language selector">
        <button class="lang-btn" data-lang-switch="en" aria-label="Switch to English">
          <span class="flag">🇺🇸</span> EN
        </button>
        <button class="lang-btn" data-lang-switch="zh" aria-label="切换到中文">
          <span class="flag">🇨🇳</span> 中文
        </button>
      </div>
    </div>
  </div>
</div>

<!-- Main Header -->
<header class="site-header">
  <div class="container">
    <div class="header-inner">

      <!-- Logo -->
      <a href="index.html" class="logo">
        <div class="logo-mark">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        </div>
        <div class="logo-text">
          <span class="logo-name">Sinso Printing</span>
          <span class="logo-tagline" data-lang="en">Premium Packaging Since 1998</span>
          <span class="logo-tagline" data-lang="zh">专业包装印刷 · 创立于1998</span>
        </div>
      </a>

      <!-- Desktop Nav -->
      <nav class="main-nav" aria-label="Main navigation">
        <a href="index.html" class="nav-link" data-lang="en">Home</a>
        <a href="index.html" class="nav-link" data-lang="zh">首页</a>
        <a href="products.html" class="nav-link" data-lang="en">Products</a>
        <a href="products.html" class="nav-link" data-lang="zh">产品</a>
        <a href="Solutions.html" class="nav-link" data-lang="en">Solutions</a>
        <a href="Solutions.html" class="nav-link" data-lang="zh">解决方案</a>
        <a href="rgb-printing.html" class="nav-link" data-lang="en">RGB Printing</a>
        <a href="rgb-printing.html" class="nav-link" data-lang="zh">RGB印刷</a>
        <a href="Company-Overview.html" class="nav-link" data-lang="en">About</a>
        <a href="Company-Overview.html" class="nav-link" data-lang="zh">关于我们</a>
        <a href="news.html" class="nav-link" data-lang="en">News</a>
        <a href="news.html" class="nav-link" data-lang="zh">新闻</a>
        <a href="contactus.html" class="nav-link" data-lang="en">Contact</a>
        <a href="contactus.html" class="nav-link" data-lang="zh">联系我们</a>
      </nav>

      <!-- Header Right: CTA only (lang toggle is in the top bar) -->
      <div class="header-right">
        <a href="contactus.html" class="btn btn-primary" data-lang="en">Get a Quote</a>
        <a href="contactus.html" class="btn btn-primary" data-lang="zh">获取报价</a>
      </div>

      <!-- Mobile toggle -->
      <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>
    </div>

    <!-- Mobile Nav -->
    <nav class="mobile-nav" aria-label="Mobile navigation">
      <div class="mobile-lang">
        <button class="header-lang-btn" data-lang-switch="en" style="flex:1;justify-content:center;">
          <span class="flag">🇺🇸</span> English
        </button>
        <button class="header-lang-btn" data-lang-switch="zh" style="flex:1;justify-content:center;">
          <span class="flag">🇨🇳</span> 中文
        </button>
      </div>
      <a href="index.html" class="nav-link" data-lang="en">Home</a>
      <a href="index.html" class="nav-link" data-lang="zh">首页</a>
      <a href="products.html" class="nav-link" data-lang="en">Products</a>
      <a href="products.html" class="nav-link" data-lang="zh">产品</a>
      <a href="Solutions.html" class="nav-link" data-lang="en">Solutions</a>
      <a href="Solutions.html" class="nav-link" data-lang="zh">解决方案</a>
      <a href="rgb-printing.html" class="nav-link" data-lang="en">RGB Printing</a>
      <a href="rgb-printing.html" class="nav-link" data-lang="zh">RGB印刷</a>
      <a href="Company-Overview.html" class="nav-link" data-lang="en">About</a>
      <a href="Company-Overview.html" class="nav-link" data-lang="zh">关于我们</a>
      <a href="news.html" class="nav-link" data-lang="en">News</a>
      <a href="news.html" class="nav-link" data-lang="zh">新闻</a>
      <a href="contactus.html" class="nav-link" data-lang="en">Contact</a>
      <a href="contactus.html" class="nav-link" data-lang="zh">联系我们</a>
      <div style="padding:8px 4px;margin-top:4px;">
        <a href="contactus.html" class="btn btn-primary" style="width:100%;justify-content:center;" data-lang="en">Get a Quote</a>
        <a href="contactus.html" class="btn btn-primary" style="width:100%;justify-content:center;" data-lang="zh">获取报价</a>
      </div>
    </nav>
  </div>
</header>
`;

const FOOTER_HTML = `
<footer class="site-footer">
  <div class="container">
    <div class="footer-main">

      <!-- Brand col -->
      <div>
        <a href="index.html" class="logo" style="margin-bottom:16px;display:inline-flex;">
          <div class="logo-mark">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
          </div>
          <div class="logo-text">
            <span class="footer-logo-name">Sinso Printing</span>
            <span class="logo-tagline" style="color:rgba(255,255,255,0.35)">宁波新兆印业有限公司</span>
          </div>
        </a>
        <p class="footer-desc" data-lang="en">Established 1998. G7 &amp; GMI certified premium packaging manufacturer in Ningbo, China. Trusted supplier to Walmart, Target, Disney, Home Depot, and more.</p>
        <p class="footer-desc" data-lang="zh">创立于1998年。宁波G7及GMI认证高端包装制造商，是沃尔玛、塔吉特、迪士尼、家得宝等知名品牌的指定供应商。</p>
        <div class="footer-social">
          <a href="https://v.douyin.com/SDY17XM/" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="抖音 Douyin" title="关注我们的抖音">
            <!-- Douyin / TikTok China icon -->
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>
          </a>
          <span class="social-link" aria-label="WeChat" title="微信：搜索 sinsoprinting" style="cursor:default;opacity:0.6;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.295.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-3.897-6.348-7.601-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.107.24-.24 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-7.063-6.122zm-3.494 3.033c.529 0 .956.434.956.969a.963.963 0 0 1-.956.969.963.963 0 0 1-.955-.969c0-.535.427-.969.955-.969zm6.992 0c.529 0 .955.434.955.969a.963.963 0 0 1-.955.969.963.963 0 0 1-.956-.969c0-.535.427-.969.956-.969z"/></svg>
          </span>
        </div>
        <div style="margin-top:10px;font-size:0.75rem;color:rgba(255,255,255,0.3);">
          WeChat: <strong style="color:rgba(255,255,255,0.5);">sinsoprinting</strong>
        </div>
      </div>

      <!-- Products col -->
      <div class="footer-col">
        <h5 data-lang="en">Products</h5>
        <h5 data-lang="zh">产品</h5>
        <ul class="footer-links">
          <li><a href="products.html#packaging-boxes" data-lang="en">Packaging Boxes</a></li>
          <li><a href="products.html#packaging-boxes" data-lang="zh">包装盒</a></li>
          <li><a href="products.html#paper-cards" data-lang="en">Paper Cards</a></li>
          <li><a href="products.html#paper-cards" data-lang="zh">纸卡</a></li>
          <li><a href="products.html#rfid" data-lang="en">RFID Labels</a></li>
          <li><a href="products.html#rfid" data-lang="zh">RFID标签</a></li>
          <li><a href="rgb-printing.html" data-lang="en">RGB Printing Tech</a></li>
          <li><a href="rgb-printing.html" data-lang="zh">RGB超广色域印刷</a></li>
        </ul>
      </div>

      <!-- Company col -->
      <div class="footer-col">
        <h5 data-lang="en">Company</h5>
        <h5 data-lang="zh">公司</h5>
        <ul class="footer-links">
          <li><a href="Company-Overview.html" data-lang="en">About Us</a></li>
          <li><a href="Company-Overview.html" data-lang="zh">关于我们</a></li>
          <li><a href="Solutions.html" data-lang="en">Solutions</a></li>
          <li><a href="Solutions.html" data-lang="zh">解决方案</a></li>
          <li><a href="news.html" data-lang="en">News</a></li>
          <li><a href="news.html" data-lang="zh">新闻动态</a></li>
          <li><a href="contactus.html" data-lang="en">Contact</a></li>
          <li><a href="contactus.html" data-lang="zh">联系我们</a></li>
        </ul>
      </div>

      <!-- Contact col -->
      <div class="footer-col">
        <h5 data-lang="en">Contact</h5>
        <h5 data-lang="zh">联系方式</h5>
        <div class="footer-contact-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <div>
            <span data-lang="en">No. 118, Huiming Road,<br>Fenghua Hi-Tech Zone,<br>Ningbo, Zhejiang, China</span>
            <span data-lang="zh">浙江省宁波市奉化高新<br>技术开发区汇明路118号</span>
          </div>
        </div>
        <div class="footer-contact-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.72 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.63 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16z"/></svg>
          <a href="tel:+864008299008">+86 400-8299-008</a>
        </div>
        <div class="footer-contact-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          <a href="mailto:sales@sinsoprinting.com">sales@sinsoprinting.com</a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div>
        <span data-lang="en">&copy; 2025 Ningbo Sinso Printing Co., Ltd. All rights reserved.</span>
        <span data-lang="zh">&copy; 2025 宁波新兆印业有限公司 版权所有</span>
      </div>
      <div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;justify-content:center;">
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">浙ICP备17013210号-1</a>
        <span style="color:rgba(255,255,255,0.12)">|</span>
        <a href="contactus.html" data-lang="en">Privacy Policy</a>
        <a href="contactus.html" data-lang="zh">隐私政策</a>
      </div>
    </div>
  </div>
</footer>
`;

// Inject header and footer
document.addEventListener('DOMContentLoaded', () => {
  const headerMount = document.getElementById('header-mount');
  const footerMount = document.getElementById('footer-mount');
  if (headerMount) headerMount.innerHTML = HEADER_HTML;
  if (footerMount) footerMount.innerHTML = FOOTER_HTML;
});
