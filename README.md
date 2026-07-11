# Ekin Atasoy — Portföy

Kişisel portföy sitesi. Geliştirdiğim iOS uygulamalarını ve oyunlarını tek yerde
topluyor; her uygulamanın kendi tanıtım (landing) sayfası, App Store indirme linki
ve gizlilik politikası var. Ayrıca özgeçmiş sayfası ve PDF indirme bağlantısı.

> Build yok, framework yok, bağımlılık yok — saf HTML + CSS + JS.

## Uygulamalar

| Uygulama | Ne yapar | Detay | App Store |
|---|---|---|---|
| **Beybim** | Türkiye'ye özel anne-bebek rehberi (planlama → ilk yaş) | [beybim.html](beybim.html) | [İndir](https://apps.apple.com/tr/app/beybim-hamilelik-bebek/id6781028251) |
| **SUPKANO** | SUP & kano topluluğu, GPS rota takibi | [supkano.html](supkano.html) | [İndir](https://apps.apple.com/app/id6778418946) |
| **VizeLungo** | Schengen vize süre takibi + topluluk istatistikleri · [vizelungo.com](https://vizelungo.com) | [vizelungo.html](vizelungo.html) | [İndir](https://apps.apple.com/tr/app/vizelungo-schengen-vize-s%C3%BCre/id6788135971) |
| **GALACTICDEF: TD** | Neon vektör tower defense oyunu | [galacticdef.html](galacticdef.html) | [İndir](https://apps.apple.com/tr/app/galacticdef-td/id6787936194) |
| **Reaction: Brain Training** | 11 mini oyunlu zihin antrenmanı | [reaction.html](reaction.html) | [İndir](https://apps.apple.com/tr/app/reaction-brain-training/id6782079111) |
| **Bloomendy Merge Pop** | Rahatlatıcı merge bulmaca oyunu | [bloomendy.html](bloomendy.html) | _Çok yakında_ |

## Yapı

```
index.html          → ana sayfa (tüm uygulamaların listesi)
cv.html             → özgeçmiş + PDF indirme
<app>.html          → her uygulamanın landing sayfası
style.css           → tüm sayfaların paylaştığı tema
app.js              → ortak script (yıl + scroll animasyonu)
assets/
  <app>/            → ikon + ekran görüntüleri
  Download_on_the_App_Store_Badge_*.svg
privacy/
  <app>/            → gizlilik / KVKK / kullanım şartları sayfaları
Cv/                 → özgeçmiş PDF'i
```

## Teknik

- **Tek dosyalık statik site** — `index.html`'i çift tıklayıp tarayıcıda açman yeterli.
- **Tek tema:** tüm sayfalar `style.css`'i paylaşır; her uygulamanın rengi tek bir
  `--accent` CSS değişkeniyle belirlenir.
- **Fontlar:** Fraunces (başlıklar) + Hanken Grotesk (metin) + Space Mono (etiketler).
- **iOS landing şablonu:** telefon çerçeveli ekran görüntüleri, özellik kartları,
  resmi App Store badge'i.
- Responsive, `prefers-reduced-motion` uyumlu, hafif scroll-reveal animasyonları.

## Yayınlama

GitHub Pages ile yayınlanabilir: **Settings → Pages → Branch: `main` / root**.
Alternatif: klasörü [netlify.com/drop](https://app.netlify.com/drop)'a sürükle.

## Nasıl yapıldı

Bu site [Claude Code](https://claude.com/claude-code) (Claude Opus) ile adım adım,
birlikte kuruldu:

1. Tek dosyalık bir portföy iskeletiyle başladık.
2. Her uygulamanın içeriğini kaynağından topladık — açıklamalar ve gizlilik
   politikaları GitHub depolarından, ikon/ekran görüntüsü/metinler App Store'dan.
3. Her uygulama için iOS tanıtım sayfası ürettik; ayrı depolardaki gizlilik
   politikalarını tek repoda birleştirdik.
4. Özgeçmiş sayfasını PDF'ten oluşturduk ve indirme bağlantısı ekledik.
5. Resmi App Store badge'leri, gerçek ekran görüntüleri ve VizeLungo için web
   sitesi mockup'ı ile tamamladık.

---

© Ekin Emre Atasoy · iOS Developer · [GitHub](https://github.com/ekinemreatasoy) · [LinkedIn](https://www.linkedin.com/in/ekinemreatasoy)
