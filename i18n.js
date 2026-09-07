/* i18n.js — TR varsayılan (HTML içeriği), EN/DE data-en / data-de'den gelir.
   Element içeriği innerHTML olarak değiştirilir; tercih localStorage'da tutulur. */
(function () {
  var LANGS = ['tr', 'en', 'de'];

  function initialLang() {
    try { var s = localStorage.getItem('lang'); if (LANGS.indexOf(s) >= 0) return s; } catch (e) {}
    var n = (navigator.language || 'tr').slice(0, 2).toLowerCase();
    return LANGS.indexOf(n) >= 0 ? n : 'tr';
  }

  function apply(lang) {
    document.documentElement.lang = lang;
    var els = document.querySelectorAll('[data-en]');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (el.getAttribute('data-tr') === null) el.setAttribute('data-tr', el.innerHTML.trim());
      var val = lang === 'tr' ? el.getAttribute('data-tr')
                              : (el.getAttribute('data-' + lang) || el.getAttribute('data-tr'));
      if (el.innerHTML !== val) el.innerHTML = val;
    }
    try { localStorage.setItem('lang', lang); } catch (e) {}
    var btns = document.querySelectorAll('.lang button');
    for (var j = 0; j < btns.length; j++) {
      var on = btns[j].getAttribute('data-lang') === lang;
      btns[j].classList.toggle('active', on);
      btns[j].setAttribute('aria-pressed', on ? 'true' : 'false');
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var btns = document.querySelectorAll('.lang button');
    for (var i = 0; i < btns.length; i++) {
      (function (b) { b.addEventListener('click', function () { apply(b.getAttribute('data-lang')); }); })(btns[i]);
    }
    apply(initialLang());
  });

  window.setLang = apply;
})();
