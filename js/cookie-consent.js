/**
 * KOLEX Cheerleaders — Cookie Consent Banner
 * Google Consent Mode v2 compatible
 * Supports: KO / EN / JA / ZH
 */
(function () {
  'use strict';

  var CONSENT_KEY = 'kolex_cookie_consent';
  var LANG_KEY = 'kolexLang';

  var texts = {
    ko: {
      msg: '이 사이트는 광고 최적화 및 방문 통계를 위해 쿠키를 사용합니다.',
      accept: '동의',
      decline: '거부',
      policy: '개인정보 처리방침',
      policyUrl: '/privacy-policy.html'
    },
    en: {
      msg: 'This site uses cookies for analytics and personalized advertising.',
      accept: 'Accept',
      decline: 'Decline',
      policy: 'Privacy Policy',
      policyUrl: '/privacy-policy.html'
    },
    ja: {
      msg: 'このサイトでは、分析および広告最適化のためにCookieを使用しています。',
      accept: '同意する',
      decline: '拒否',
      policy: 'プライバシーポリシー',
      policyUrl: '/privacy-policy.html'
    },
    zh: {
      msg: '本網站使用Cookie進行統計分析及廣告優化。',
      accept: '同意',
      decline: '拒絕',
      policy: '隱私權政策',
      policyUrl: '/privacy-policy.html'
    }
  };

  function getLang() {
    var stored = localStorage.getItem(LANG_KEY);
    if (stored && texts[stored]) return stored;
    var nav = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (nav.indexOf('ja') === 0) return 'ja';
    if (nav.indexOf('zh') === 0) return 'zh';
    if (nav.indexOf('ko') === 0) return 'ko';
    return 'en';
  }

  function updateConsent(granted) {
    if (typeof gtag === 'function') {
      gtag('consent', 'update', {
        ad_storage:          granted ? 'granted' : 'denied',
        analytics_storage:   granted ? 'granted' : 'denied',
        ad_user_data:        granted ? 'granted' : 'denied',
        ad_personalization:  granted ? 'granted' : 'denied'
      });
    }
  }

  function removeBanner(banner) {
    if (!banner || !banner.parentNode) return;
    banner.style.transition = 'opacity 0.3s, transform 0.3s';
    banner.style.opacity = '0';
    banner.style.transform = 'translateY(100%)';
    setTimeout(function () {
      if (banner.parentNode) banner.parentNode.removeChild(banner);
    }, 350);
  }

  function showBanner() {
    var lang = getLang();
    var t = texts[lang];

    var banner = document.createElement('div');
    banner.id = 'kolex-cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Cookie consent');
    banner.style.cssText = [
      'position:fixed', 'bottom:0', 'left:0', 'right:0', 'z-index:99999',
      'background:#1a1d24', 'border-top:1px solid #2a2d36',
      'padding:14px 20px', 'display:flex', 'align-items:center',
      'justify-content:space-between', 'flex-wrap:wrap', 'gap:10px',
      "font-family:'Segoe UI','Noto Sans KR','Noto Sans JP',sans-serif",
      'font-size:13px', 'color:#c0c0d0',
      'box-shadow:0 -4px 20px rgba(0,0,0,0.5)'
    ].join(';');

    var msgDiv = document.createElement('div');
    msgDiv.style.cssText = 'flex:1;min-width:200px;line-height:1.5;';
    msgDiv.innerHTML = t.msg + ' <a href="' + t.policyUrl +
      '" style="color:#E31837;text-decoration:none;white-space:nowrap;">' +
      t.policy + '</a>';

    var btnDiv = document.createElement('div');
    btnDiv.style.cssText = 'display:flex;gap:8px;flex-shrink:0;';

    function makeBtn(label, primary) {
      var btn = document.createElement('button');
      btn.textContent = label;
      btn.style.cssText = primary ? [
        'background:#E31837', 'color:#fff', 'border:none',
        'padding:8px 22px', 'border-radius:6px', 'cursor:pointer',
        'font-weight:700', 'font-size:13px', 'white-space:nowrap'
      ].join(';') : [
        'background:transparent', 'color:#8b8fa8',
        'border:1px solid #2a2d36', 'padding:8px 16px',
        'border-radius:6px', 'cursor:pointer',
        'font-size:13px', 'white-space:nowrap'
      ].join(';');
      return btn;
    }

    var acceptBtn = makeBtn(t.accept, true);
    acceptBtn.onclick = function () {
      localStorage.setItem(CONSENT_KEY, 'accepted');
      updateConsent(true);
      removeBanner(banner);
    };

    var declineBtn = makeBtn(t.decline, false);
    declineBtn.onclick = function () {
      localStorage.setItem(CONSENT_KEY, 'declined');
      updateConsent(false);
      removeBanner(banner);
    };

    btnDiv.appendChild(acceptBtn);
    btnDiv.appendChild(declineBtn);
    banner.appendChild(msgDiv);
    banner.appendChild(btnDiv);
    document.body.appendChild(banner);
  }

  function init() {
    var stored = localStorage.getItem(CONSENT_KEY);
    if (stored === 'accepted') { updateConsent(true);  return; }
    if (stored === 'declined') { updateConsent(false); return; }
    showBanner();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
