# 01 – Mobile Performance ps-sattlerei.shop (Stand 05.11.2026)

**Bearbeitung:** Web-Performance (Core Web Vitals, Shopify) · **Status:** Analyse und Maßnahmenplan. Im Shop wurde nichts geändert.

> **Wichtig: Alle Werte in diesem Dokument sind Labormessungen.** Sie stammen aus einem emulierten Gerät in einer Cloud-Umgebung und sind keine Felddaten echter Nutzer (CrUX). Die absoluten Werte hängen stark vom Netzprofil ab. Aussagekräftig sind vor allem die **Unterschiede zwischen den Seiten** und die **Ursachen**.

---

## 1. Messaufbau

| Punkt | Einstellung |
|---|---|
| Werkzeug | Playwright/Chromium, Skripte unter `/tmp/claude-0/-home-user-digitalisierung-firma/dfc58b90-42f5-5326-ac24-c04a4ca00b8c/scratchpad/perf/` (`measure.js`, `trace.js`, `analyze.js`) |
| Gerät | `devices['Pixel 7']` (412 × 915 CSS-px, DPR 2,625), Locale de-DE |
| CPU | 4-fach gedrosselt (CDP `Emulation.setCPUThrottlingRate`) |
| Netz, Profil 1 | „Fast 4G“ (DevTools-Preset): 165 ms Latenz, 9 Mbit/s down, 1,5 Mbit/s up |
| Netz, Profil 2 | „Slow 4G“, ähnlich Lighthouse/PageSpeed: 150 ms Latenz, 1,6 Mbit/s down, 0,75 Mbit/s up. Zusätzlich gemessen, weil die PageSpeed-API nicht verfügbar war. |
| Cache | Deaktiviert, für jeden Lauf ein frischer Browser (Kaltstart) |
| Wiederholungen | 3 Läufe je Seite und Profil, angegeben ist der **Median** |
| LCP / CLS / TBT | PerformanceObserver: `largest-contentful-paint`, `layout-shift` (größtes Session-Fenster), `longtask`. **TBT ist eine Näherung**: Summe von (Dauer − 50 ms) aller Long Tasks nach FCP bis 6 s nach `load`. |
| Requests | CDP-Network-Events, Übertragungsgröße (komprimiert). Gezählt bis 6 s nach `load`, ohne Scrollen. Lauf 1 je Seite wurde zusätzlich bis zum Seitenende gescrollt. |

**PageSpeed Insights API:** Der Aufruf `runPagespeed?url=https://ps-sattlerei.shop&strategy=mobile` lieferte **HTTP 429** („Quota exceeded … Queries per day“, ohne API-Schlüssel). Es gibt **keine PSI- und keine CrUX-Felddaten** in diesem Dokument. → Empfehlung: Den PSI-Test einmal im Browser unter pagespeed.web.dev ausführen oder einen API-Schlüssel hinterlegen. Interessant ist dort vor allem der Abschnitt „Erfahrungen Ihrer Nutzer“ (CrUX), falls für die Domain Daten vorliegen.

**Einschränkungen der Messung (ehrlich vermerkt):**
- Die Sandbox-Umgebung blockiert einige Drittanbieter-Hosts (`connect.facebook.net`, `cdn.powl.io`, `otlp-http-production.shopifysvc.com`, `challenges.cloudflare.com`; Fehler `ERR_TUNNEL_CONNECTION_FAILED`). Deren **Gewicht und CPU-Zeit fehlen** in den Zahlen. Bei echten Besuchern ist die Last also **höher** als gemessen.
- Slow 4G, Seite `pss-gt-r…bmw-f-reihe-rot`, Lauf 3: Der Shop antwortete mit **HTTP 429 und einer Cloudflare-Challenge-Seite** (Rate-Limit nach vielen Testaufrufen). Dieser Lauf ist ungültig. Für diese Seite sind daher die zwei gültigen Läufe einzeln angegeben.
- TBT bei 4-facher CPU-Drosselung auf einem Server-Prozessor ist nur ein Näherungswert für ein Mittelklasse-Smartphone.

---

## 2. Messwerte je Seite (Labor, Median aus 3 Läufen)

### 2.1 Profil „Slow 4G“ (vergleichbar mit PageSpeed mobil)

| Seite | TTFB | FCP | **LCP** | CLS | **TBT (Näherung)** | `load` |
|---|---|---|---|---|---|---|
| Startseite `/` | 177 ms | 1,53 s | **4,70 s** 🔴 | 0,002 | 722 ms 🔴 | 10,8 s |
| `/collections/lenkrader` | 186 ms | 1,58 s | **3,30 s** 🟠 | 0,001 | 652 ms 🔴 | 6,3 s |
| `/products/pss-design-edition-passend-fur-audi-rs6-c8` | 443 ms | 1,52 s | **3,80 s** 🟠 | 0,000 | 646 ms 🔴 | 6,9 s |
| `/products/pss-gt-r-carbon-lenkrad-bmw-f-reihe-rot` (nur 2 gültige Läufe) | 223 / 253 ms | 1,54 / 1,66 s | **2,55 / 2,04 s** 🟢–🟠 | 0,000 | 772 / 586 ms 🔴 | 5,5 s |

Schwellen (Google): LCP gut ≤ 2,5 s, schlecht > 4,0 s · CLS gut ≤ 0,1 · TBT (Lighthouse) gut ≤ 200 ms, schlecht > 600 ms.

### 2.2 Profil „Fast 4G“

| Seite | TTFB | FCP | **LCP** | CLS | **TBT (Näherung)** | `load` |
|---|---|---|---|---|---|---|
| Startseite | 280 ms | 1,00 s | **1,44 s** | 0,002 | 548 ms | 3,4 s |
| Kollektion Lenkräder | 242 ms | 0,90 s | **1,08 s** | 0,001 | 743 ms | 3,4 s |
| RS6 Design Edition | 261 ms | 0,98 s | **1,10 s** | 0,000 | 750 ms | 3,4 s |
| GT-R Carbon BMW | 253 ms | 0,91 s | **1,08 s** | 0,000 | 695 ms | 3,1 s |

**Einordnung:** Mit gutem Netz ist der LCP überall unkritisch. Mit langsamem Netz fällt die **Startseite deutlich ab**. **CLS ist auf allen Seiten sehr gut.** **TBT ist auf allen Seiten zu hoch**: Hauptlast ist JavaScript, nicht das Netz.

### 2.3 LCP-Element je Seite

| Seite | LCP-Element | Abschnitt | `loading` | `fetchpriority` | Bewertung |
|---|---|---|---|---|---|
| Startseite | `<img class="banner__image">` `rs6shop.jpg` (width=1200, 134 KB) | `slideshow` | eager | high | korrekt ausgezeichnet, konkurriert aber mit 5 weiteren früh geladenen Bildern (s. 3.1) |
| Kollektion | `titelbild_interieur.jpg` (width=1000, 96 KB) | `main-collection-banner` | eager | high | korrekt |
| RS6 | `image00213-rot_….jpg` (width=1000, ca. 114 KB) | `main-product` | eager | high | korrekt |
| GT-R BMW | `BMW_Alt-rot_….jpg` (width=1000) | `main-product` | eager | high | korrekt |

Das LCP-Bild ist auf allen Seiten richtig ausgezeichnet (`eager` und `fetchpriority="high"`). **Hier fehlt nichts.**

### 2.4 Requests und Gewicht (Fast 4G, ohne Scrollen, bis 6 s nach `load`)

| Seite | Requests | Gesamt | Bilder | JS (Script) | „Other“ (Checkout-Preload) | Fonts | CSS | HTML |
|---|---|---|---|---|---|---|---|---|
| Startseite | 114–118 | **2,5 MB** | 16 / 1,33 MB | 40 / 403 KB | 27 / 517 KB | 4 / 161 KB | 4 / 55 KB | 56 KB |
| Kollektion | 111 | 1,55 MB | 9 / 382 KB | 40 / 405 KB | 30 / 525 KB | 3 / 119 KB | 4 / 56 KB | 54 KB |
| RS6 | 112–115 | 1,72 MB | 9 / 548 KB | 39 / 401 KB | 32 / 525 KB | 3 / 119 KB | 3 / 52 KB | 56 KB |
| GT-R BMW | 108–114 | 1,36 MB | 5 / 184 KB | 40 / 405 KB | 32 / 523 KB | 3 / 119 KB | 4 / 54 KB | 55 KB |

**Nach komplettem Scrollen** (Lauf 1): Startseite 156 Requests / 3,5 MB, **zuzüglich Video** (MP4-Datei 9,1 MB, wird per Range-Request gestreamt). Kollektion 164 / 2,7 MB, RS6 162 / 3,5 MB (davon 2,25 MB Bilder), GT-R 154 / 1,7 MB.

### 2.5 Domains und Drittanbieter

| Domain / Ressource | Gewicht (gemessen) | Zuordnung |
|---|---|---|
| `ps-sattlerei.shop` | 1,2–2,4 MB | Shop selbst: Theme, Bilder, Fonts sowie Shopify-Plattform-Skripte über `/cdn/shopifycloud/…` und `/cdn/wpm/…` |
| `cdn.shopify.com` | 120 KB / 22 Req. | Shop-Pay-/„Shop“-Login-Module (`shop-js`), `standard-actions.js`, **PushOwl-App-Embed** (`extensions/…/pushowl-354/…`, davon `pushowl-shopify-main.js` 58 KB) |
| `/cdn/shopifycloud/checkout-web/…` (über `/checkouts/internal/preloads.js`) | **ca. 520 KB / ca. 30 Req.** | Shopify lädt Checkout-Dateien nach `load` vor. Das ist Teil der Plattform und nicht abschaltbar. Niedrige Priorität, wirkt sich daher nicht auf LCP aus. |
| `connect.facebook.net/en_US/fbevents.js` | nicht messbar (in der Sandbox blockiert) | **Meta-Pixel** über die App „Facebook & Instagram“ (Web-Pixel-ID 1375830112, Pixel 967825682366385) |
| `cdn.powl.io` (+ laut Pixel-Code `cdn.brevo.com`, `in-automate.brevo.com`) | nicht messbar (in der Sandbox blockiert) | **PushOwl / Brevo** (Web-Pixel-ID 1093992544, Konfiguration `subdomain: pssattlerei`; im Pixel-Code eindeutig PushOwl/Brevo) |
| `web-pixels@…/custom/…` (iframe) | – | **Benutzerdefiniertes Pixel** (Shopify „Kundenereignisse“). Inhalt ist im Storefront nicht sichtbar. **[FRAGE AN INHABER: Was steckt im Custom Pixel?]** |
| `privacy-banner.js`, `perf-kit`, `webmcp`, `shop_events_listener`, `/cdn/wpm/…` | ca. 80–110 KB JS | Shopify-Plattform (Cookie-Banner, Web-Pixel-Manager, Messung) |
| `dns-prefetch` auf `ajax.googleapis.com`, `maps.googleapis.com`, `maps.gstatic.com` | – | Fest im Theme (`layout/theme.liquid`, Zeilen 13–15), werden aber nicht genutzt |

**Nicht gefunden:** Klaviyo, Judge.me (oder eine andere Bewertungs-App), Chat-Widgets (Tidio, WhatsApp o. ä.), Google Tag Manager/gtag, Hotjar/Clarity, TikTok- oder Pinterest-Pixel. TikTok und Pinterest erscheinen nur als Social-Links bzw. Teilen-Buttons. Das Theme lädt außerdem eigene Zusatzskripte: `newsletter-popup.js` + CSS, `tab-attention.js` und `instant-page.js` (Prefetch).

### 2.6 JavaScript-CPU-Zeit (Trace, Fast 4G, CPU 4×, je 1 Lauf)

| Skript | Startseite | Kollektion | RS6 | GT-R | Thread |
|---|---|---|---|---|---|
| `/cdn/wpm/b…m.js` (Shopify Web-Pixel-Manager) | 453 ms | 385 ms | 342 ms | 359 ms | Hauptthread |
| `/cdn/wpm/s…m.js` (Web-Pixel-Manager, Sandbox) | 191 ms | 122 ms | 125 ms | 198 ms | Hauptthread/iframe |
| `theme.js` + `vendor.js` (Theme Concept) | 398 ms | 237 ms | 209 ms | 427 ms | Hauptthread |
| `shopify-perf-kit` | 169 ms | 151 ms | 153 ms | 150 ms | Hauptthread |
| Inline-Skripte im HTML (28–31 Stück, 50–67 KB) | 159 ms | 128 ms | 148 ms | 127 ms | Hauptthread |
| PushOwl/Brevo-Pixel (Worker) | 334 ms | – | 549 ms | 483 ms | Web Worker (blockiert den Hauptthread nicht direkt, kostet aber CPU/Akku) |
| Shopify-App-Pixel (Worker) | 315 ms | 263 ms | 493 ms | 334 ms | Web Worker |
| PushOwl App-Embed (`pushowl-shopify*.js`) | 28 ms | 34 ms | 22 ms | 22 ms | Hauptthread (Konfiguration in der Sandbox blockiert, real eher mehr) |

Die längsten einzelnen Long Tasks lagen bei 335–470 ms, jeweils kurz nach DOMContentLoaded (Ausführung der `defer`-Skripte und des Web-Pixel-Managers).

### 2.7 Bilder: Übergröße, Lazy Loading, Priorität

| Seite | Befund |
|---|---|
| Startseite, Abschnitt **„Shop the Look“** | 4 Produktbilder werden mit **`loading="eager"`** und **ohne `sizes`** geladen. Dadurch wählt der Browser die 1080-px-Variante, angezeigt werden sie mit **80 CSS-px** (Bedarf ca. 210 px). Das sind **ca. 450 KB** (126 + 118 + 150 + 59 KB) für Miniaturen, die erst bei ca. 4.100 px Scrolltiefe sichtbar werden. Sie starten **gleichzeitig mit dem LCP-Bild**. Ursache im Code: `sections/shop-the-look.liquid`, Aufruf `render 'product-card' … lazy_load: false`. |
| Startseite, Abschnitt **„Featured Product“** | Das erste Produktbild `image00011-Photoroom.jpg` (width=1000, 110 KB) wird mit **Priorität High** und `eager` geladen, obwohl es erst bei ca. 5.200 px Scrolltiefe erscheint. Die Thumbnails sind 324 px groß bei 24 CSS-px Anzeige (lazy, gering). |
| Startseite, **Video-Abschnitt** | Das Vorschaubild `…thumbnail.0000000000.jpg` (width=1200) wiegt **386 KB**. Es ist das größte Einzelbild der Seite und wird schon ohne Scrollen geladen (Abschnitt bei ca. 1.800 px). |
| Startseite, Wasserfall (Slow 4G) | Das LCP-Bild (134 KB) lädt von 0,38 s bis **4,57 s**, weil es sich die Leitung mit 5 weiteren früh angestoßenen Bildern teilt (ca. 560 KB). Auf der Kollektion (ohne diese Konkurrenz) dauert ein vergleichbares LCP-Bild bis 3,2 s. |
| Kollektion | Produktkarten verwenden 1080 px bei 180 CSS-px (Bedarf ca. 473 px), also gut 2-fach zu groß. Die ersten 2 Karten sind `eager`, stehen aber erst bei ca. 1.840 px. Die Kategorie-Kacheln (`pss_*_kategorie.png`, 4 Stück, ca. 30 KB je WebP) im ersten Bildschirm sind `lazy`. Das ist vertretbar, da sie nicht das LCP sind. |
| Produktseiten | Hauptbild korrekt (1000 px bei 372 CSS-px ≈ Bedarf 977 px). Weitere Galeriebilder sind `lazy`. Unterhalb der Galerie (Timeline, Video-mit-Text, Bild-mit-Text, Empfehlungen) folgen 1,7–2 MB Bilder, alle lazy. Empfehlungen: 1080 px bei 305 CSS-px (leicht zu groß). Ein Bild im Abschnitt `timeline` wird mit **width=3840** angefordert (lazy). |
| Alle Seiten | Header-Logo `SYMB-PSSwap.png` korrekt (80 px bei 40 CSS-px). Shopify liefert automatisch WebP/AVIF aus. |

### 2.8 Fonts

- Nur **Inter** über Shopify-CDN (gleiche Domain), `font-display: swap`. Preload für 400 und 700.
- Geladen werden **4 Schnitte** (400, 500, 700, 400 kursiv) mit **161 KB** auf der Startseite bzw. 3 Schnitte mit 119 KB auf den anderen Seiten. Schnitt 500 wird nicht vorgeladen und kommt spät (Slow 4G: 1,6–3,4 s). Der kursive Schnitt (42 KB) wird auf der Startseite nur für wenige Wörter nachgeladen.
- Kein Layoutsprung durch Fonts messbar (CLS ≈ 0).

### 2.9 Video auf der Startseite

- Abschnitt **„Video with text overlay“** (`sections/video-with-text-overlay.liquid`), **von Shopify gehostete MP4**, kein YouTube.
- Datei: `…HD-1080p-7.2Mbps-43596725.mp4`, **9,1 MB**, Hochformat 2160 × 3840 (Seitenverhältnis 0,563).
- Attribute: **`autoplay muted loop playsinline`, `preload="metadata"`**. Das Video wird über ein `<template>` erst eingesetzt, wenn der Abschnitt in den sichtbaren Bereich kommt (beim Scrollen beobachtet, Range-Request 206). Es beeinflusst deshalb **nicht den LCP**. Jeder Besucher, der bis dorthin scrollt, lädt aber ein 1080p-Video mit 7,2 Mbit/s. Auf Mobilfunk sind das mehrere MB Datenvolumen und Ruckeln.
- Im Theme sind die Felder **„Video (mobil)“** und **„Titelbild (mobil)“** vorhanden, aber nicht befüllt. Ebenso ist ein **eigenes Titelbild** (`cover_image`) möglich.

### 2.10 Render-blockierende Ressourcen

| Ressource | Größe (übertragen) | Anmerkung |
|---|---|---|
| `theme.css` | 42 KB (unkomprimiert **293 KB**) | Wird mit `preload` geladen, blockiert aber das Rendern. Bei Slow 4G ist sie erst nach 1,2–1,5 s fertig, das entspricht etwa dem FCP. |
| `accelerated-checkout-backwards-compat.css` | 1–2 KB | Shopify (Express-Checkout-Buttons), gering |
| `newsletter-popup.css` | 2 KB | **Wird doppelt eingebunden**: einmal asynchron (`media="print" onload`), einmal regulär im Body |
| Synchrone Skripte im `<head>` | **keine** | Alle externen Skripte sind `defer`/`async`/`module`. Das ist gut. |

### 2.11 CLS

Auf allen Seiten ≤ 0,002 (sehr gut). Die minimalen Verschiebungen kommen aus dem Slideshow- bzw. Kollektions-Banner-Text. **Kein Handlungsbedarf.**

---

## 3. Ursachen (priorisiert)

1. **Startseite: Das LCP-Bild teilt sich die Leitung mit ca. 560 KB unnötig früh geladenen Bildern** („Shop the Look“-Karten `eager` ohne `sizes`, Featured-Product-Bild `eager`/High, 386-KB-Video-Vorschaubild). Bei langsamem Netz steigt der LCP dadurch auf **4,7 s**, auf den anderen Seiten liegt er bei 2,0–3,8 s.
2. **Hohe Hauptthread-Last (TBT ≈ 550–780 ms)**. Ursachen sind der Shopify-Web-Pixel-Manager (ca. 0,5–0,65 s CPU), das Theme-JS (0,2–0,4 s), Shopify perf-kit und Inline-Skripte. Die Pixel selbst (PushOwl/Brevo, Meta, Custom) und ein Teil des Web-Pixel-Managers hängen an den **installierten Apps und Pixeln**. Weniger Pixel bedeuten weniger CPU-Last.
3. **Seitenlänge und Abschnittsanzahl der Startseite** (14 Abschnitte, 7.500 px, ca. 3,5 MB + 9 MB Video). Das betrifft weniger den LCP, aber Datenvolumen, Scroll-Ruckeln und Interaktivität (INP) auf Mobilgeräten.
4. **Produktseiten:** Der LCP ist ordentlich ausgezeichnet. Bei Slow 4G liegt die RS6-Seite trotzdem bei 3,8 s: Gründe sind ein höherer TTFB (443 ms), das render-blockierende `theme.css` (auf den anderen Seiten bei Slow 4G erst nach 1,2–1,5 s fertig) und danach das LCP-Bild mit ca. 114 KB. Unter der Galerie hängen 1,7–2 MB weitere Bilder (lazy).
5. **Theme-Altlasten:** ungenutzte `dns-prefetch`-Einträge, doppeltes Popup-CSS, 293 KB CSS (Concept-Theme komplett), 4 Font-Schnitte.

---

## 4. Maßnahmenplan

Bewertung: **Wirkung** hoch/mittel/gering · **Aufwand** S (< 30 min), M (1–3 h), L (> 3 h).

### (A) Shopify-Admin / Theme-Editor: Inhaber, ohne Code

Grundsätzlich zuerst in einer **Kopie des Live-Themes** testen und mit pagespeed.web.dev vergleichen.

| # | Maßnahme | Wo | Wirkung | Aufwand |
|---|---|---|---|---|
| A1 | **Abschnitt „Shop the Look“ auf der Startseite entfernen oder ausblenden** (Auge-Symbol). Alternativ ganz nach unten verschieben. Spart ca. 450 KB, die heute gleichzeitig mit dem Hauptbild laden. | Onlineshop → Themes → Anpassen → Startseite | **hoch** (Startseite-LCP) | S |
| A2 | **Video-Abschnitt:** (a) Ein **eigenes, leichtes Titelbild** bei „Titelbild“/„Titelbild (mobil)“ hinterlegen statt des 386-KB-Video-Standbilds. (b) Unter „Video (mobil)“ eine **kurze, kleinere Mobilversion** (z. B. 720p, ≤ 10 s, ≤ 2 MB) hochladen **oder** „Autoplay“ deaktivieren, damit das Video erst auf Tippen lädt. (c) Alternativ den Abschnitt durch ein Bild mit Text ersetzen. | Startseite → „Video with text overlay“ | **mittel–hoch** (Datenvolumen, Ruckeln) | S–M |
| A3 | **Abschnitt „Featured Product“** auf der Startseite prüfen. Er lädt sein Bild mit hoher Priorität, obwohl es weit unten steht. Entfernen oder durch eine einfache Produktliste ersetzen. | Startseite | mittel | S |
| A4 | **Startseite insgesamt kürzen** (14 Abschnitte). Vorschlag: Slideshow mit **nur einer Folie** → Kategorien → 1 Vertrauens-/Einbau-Abschnitt → Bestseller-Liste → Kontakt/Footer. Logo-Liste, Lauftext, Bildvergleich und Testimonials-Banner kritisch prüfen. **[FRAGE AN INHABER: Welche Abschnitte sind Ihnen inhaltlich wichtig?]** | Startseite | mittel | M |
| A5 | **Newsletter-Popup** in den Theme-Einstellungen deaktivieren (bzw. auf Mobil abschalten), falls nicht aktiv genutzt. Popups stören mobil zudem die Nutzung und damit die Conversion. **[FRAGE AN INHABER: Wird der Popup-Newsletter genutzt, und mit welchem Double-Opt-In?]** | Theme-Einstellungen / Abschnitt „Newsletter-Popup“ | gering–mittel | S |
| A6 | **„Tab-Aufmerksamkeit“** (`enable_tab_attention`) und **„Seitenübergang/Ladebalken“** in den Theme-Einstellungen ausschalten, falls aktiv. Das sind kleine Skripte ohne Verkaufswirkung. | Theme-Einstellungen → Animationen/Allgemein | gering | S |
| A7 | **Typografie:** Im Theme-Editor prüfen, ob die Überschrift Inter 500 nutzt. Wenn möglich auf 400/700 vereinheitlichen, das spart einen Font-Schnitt (ca. 40 KB). Kursiv vermeiden. | Theme-Einstellungen → Typografie | gering | S |
| A8 | **Kollektionsseite:** Unter „Produktkarte“ bzw. „Produktraster“ die Option für ein zweites Bild bei Hover deaktivieren, falls aktiv. Auf Mobilgeräten hat sie keinen Nutzen, kostet aber Bilder. | Theme-Einstellungen → Produktkarte | gering–mittel | S |
| A9 | **Bilder bei Upload** auf max. ca. 2.000 px Breite begrenzen (aktuell teils 3.840 px, z. B. in der Produktseiten-Timeline). Shopify skaliert zwar, aber Originalgrößen landen teils in `widths`. | Dateien / Produkte | gering | M |

### (B) Theme-Code: in einer **unveröffentlichten Theme-Kopie** umsetzen

Grundlage ist der Code des Live-Themes „Rechtssicher – Entwurf 04.11.2026“ (Concept), gelesen über die Admin-API. Die Zeilenangaben beziehen sich auf diesen Stand.

| # | Datei | Änderung | Wirkung | Aufwand |
|---|---|---|---|---|
| B1 | `sections/shop-the-look.liquid` (Zeile ca. 114, `render 'product-card'`) | `lazy_load: false` → **`lazy_load: true`**. Zusätzlich im Snippet `snippets/product-card.liquid` prüfen, dass `image_tag` ein `sizes` erhält, z. B. `sizes: '(max-width: 767px) 80px, 25vw'` bzw. passend zur tatsächlichen Kartenbreite. Ohne `sizes` nimmt der Browser `100vw`. | **hoch** (Startseite-LCP, −450 KB) | S |
| B2 | Featured-Product-Abschnitt (Datei der Section `featured-product*.liquid` bzw. das darin genutzte Medien-Snippet) | Erstes Bild nicht mit `loading: 'eager'`/`fetchpriority: 'high'` ausgeben, wenn der Abschnitt nicht der erste auf der Seite ist. Muster: `if section.index > 2` → `loading: 'lazy'`, `fetchpriority: 'low'` (`section.index` ist in Shopify verfügbar). | mittel | S |
| B3 | `snippets/product-card.liquid` (Kollektion) | `eager` nur für die erste Kartenreihe, wenn **kein** Kollektions-Banner darüber steht. Bei vorhandenem Banner alle Karten `lazy`. `widths` auf `'180,240,360,480,540,720'` begrenzen und `sizes` auf `'(max-width: 767px) 50vw, 25vw'` setzen (Mobil: 2 Spalten). | mittel | S–M |
| B4 | `sections/video-with-text-overlay.liquid` bzw. `snippets/video.liquid` | Vorschaubild-`widths` auf max. 1080 begrenzen und `sizes` an die tatsächliche Breite anpassen. Optional „Video erst laden, wenn Nutzer tippt“ (Facade) für Mobil, wenn Autoplay gewünscht bleibt nur auf Desktop: `autoplay` nur setzen, wenn `(min-width: 768px)` (per JS beim Einsetzen des `<template>`). | mittel | M |
| B5 | `layout/theme.liquid`, Zeilen 13–15 | `dns-prefetch` auf `ajax.googleapis.com`, `maps.googleapis.com`, `maps.gstatic.com` **entfernen** (werden nicht genutzt). | gering | S |
| B6 | Popup-Snippet bzw. `sections/newsletter-popup.liquid` | Die **doppelte Einbindung** von `newsletter-popup.css` entfernen (reguläres `stylesheet_tag` im Body streichen, nur die asynchrone Variante behalten). Besser: CSS und `newsletter-popup.js` nur ausgeben, wenn der Abschnitt aktiv ist. | gering | S |
| B7 | `layout/theme.liquid` (Zeile ca. 43) | Critical-CSS-Ansatz prüfen: `theme.css` ist 293 KB unkomprimiert. Kurzfristig realistisch ist das Entfernen ungenutzter Komponenten-Styles **nicht ohne Theme-Fork**. Empfehlung: Bei einem künftigen Theme-Update prüfen. Nicht vor B1–B4 angehen. | mittel | L |
| B8 | `layout/theme.liquid` (Font-Preloads, `snippets/css-variables.liquid`) | Nur die tatsächlich im ersten Bildschirm genutzten Schnitte vorladen. Wenn 500 in Überschriften/Buttons im ersten Bildschirm vorkommt, `inter_n5` vorladen und dafür `n7` streichen (vorher prüfen). Den kursiven Schnitt nicht über `@font-face` anbieten, wenn kein Kursivtext gewünscht ist. | gering | S |
| B9 | `snippets/product-media*.liquid` (Produktseite, Thumbnails) | Thumbnail-`widths` 324 → ca. 120 (Anzeige 24 CSS-px). Bilder in der Timeline auf `widths` ≤ 1200 begrenzen. | gering | S |

**Abnahme jeder Code-Änderung:** Vorher/Nachher in der Theme-Vorschau mit denselben Skripten messen (`measure.js` mit `?preview_theme_id=…`) bzw. mit pagespeed.web.dev. Erst danach veröffentlicht die Projektleitung.

### (C) Apps / Drittanbieter

| # | App / Skript | Befund | Empfehlung | Wirkung |
|---|---|---|---|---|
| C1 | **PushOwl (Brevo)**: App-Embed + Web-Pixel | Lädt auf jeder Seite ein Widget-Skript (58 KB) und ein Pixel mit Brevo-SDK (Worker-CPU 0,3–0,55 s je Seite). Web-Push braucht eine aktive Einwilligung. Bei 7 Bestellungen/Jahr ist ein Nutzen fraglich. | **Deinstallieren**, wenn keine Push- oder Brevo-Kampagnen laufen. Danach prüfen, dass App-Embed und Pixel weg sind. **[FRAGE AN INHABER: Nutzen Sie PushOwl/Brevo aktiv (Push-Abonnenten, Warenkorb-Erinnerungen)?]** | **mittel–hoch** (TBT, Requests) |
| C2 | **Benutzerdefiniertes Pixel** (Kundenereignisse) | Inhalt unbekannt, läuft in einem eigenen iframe | Unter Einstellungen → Kundenereignisse prüfen. Löschen, wenn es doppelt zu einer App misst (z. B. ein alter Meta- oder Google-Code). **[FRAGE AN INHABER: Wer hat das Custom Pixel angelegt und wofür?]** | mittel |
| C3 | **Meta-Pixel** (App „Facebook & Instagram“) | Aktiv, Datenfreigabe „optimized/share_all_events“. Im Labor wurde `fbevents.js` ohne Interaktion mit einem Cookie-Banner angefragt. Die Region des Testzugangs ist unbekannt, daher ist das kein Beweis für einen Verstoß. | Behalten, wenn Meta-Anzeigen laufen (Facebook bringt 7 % Traffic). Sonst entfernen. **Datenschutz-Prüfung** (Einwilligung nach § 25 TDDDG vor dem Laden) an Data Privacy/Legal übergeben. **[FRAGE AN INHABER: Laufen aktuell bezahlte Meta-Anzeigen?]** | mittel |
| C4 | Weitere installierte Apps ohne Storefront-Spur | Im Storefront ist nur PushOwl sichtbar. Apps, die nichts ins Theme laden, kosten keine Ladezeit. **Nach Deinstallationen bleiben aber oft Reste** in `snippets/` bzw. `layout/theme.liquid`. | In einer Theme-Kopie nach Resten suchen (`{% render '…app…' %}`, Skript-Tags fremder Domains). Im Admin unter Apps die Liste mit dem Inhaber durchgehen. | gering |
| C5 | Shopify-Plattform (Checkout-Preload ca. 520 KB, Web-Pixel-Manager, perf-kit, Cookie-Banner, Shop-Pay-Module) | Nicht durch den Shop abschaltbar | Kein Handlungsbedarf. Die Last sinkt indirekt mit weniger Pixeln (C1–C3). | – |

---

## 5. Top-5 in Reihenfolge

1. **A1/B1:** „Shop the Look“ von der Startseite entfernen **oder** `lazy_load: true` + `sizes` setzen. Erwartung: deutlich besserer Startseiten-LCP bei langsamem Netz. Wie viel genau, zeigt erst eine Nachmessung.
2. **C1:** PushOwl/Brevo deinstallieren, falls ungenutzt (−1 App-Embed, −1 Pixel, weniger CPU).
3. **A2:** Video mobil entschärfen: leichtes Titelbild, kleinere Mobilversion oder kein Autoplay.
4. **A3/B2:** Featured-Product-Bild nicht mehr mit hoher Priorität laden. Startseite auf wenige Abschnitte kürzen (A4).
5. **C2/C3:** Custom Pixel und Meta-Pixel prüfen (Nutzen und Einwilligung). Danach B5/B6 als Aufräumarbeiten.

## 6. Offene Fragen an den Inhaber

- [FRAGE AN INHABER: Nutzen Sie PushOwl/Brevo aktiv?]
- [FRAGE AN INHABER: Was enthält das benutzerdefinierte Pixel unter „Kundenereignisse“, und wer hat es angelegt?]
- [FRAGE AN INHABER: Laufen aktuell Meta-Anzeigen, die das Pixel benötigen?]
- [FRAGE AN INHABER: Ist Ihnen das Startseiten-Video wichtig? Gibt es eine kürzere Fassung?]
- [FRAGE AN INHABER: Welche Startseiten-Abschnitte dürfen entfallen? Wird das Newsletter-Popup genutzt?]

## 7. Rohdaten

- Ergebnisse: `…/scratchpad/perf/results-fast4g.json`, `…/scratchpad/perf/results-slow4g.json`, `…/scratchpad/perf/trace-summary.json`, Screenshots `shot-*.png` (Scratchpad: `/tmp/claude-0/-home-user-digitalisierung-firma/dfc58b90-42f5-5326-ac24-c04a4ca00b8c/scratchpad/perf/`). Diese Dateien sind temporär und nicht im Repository.
- Gelesene Theme-Dateien (nur lesend über die Admin-API): `layout/theme.liquid`, `sections/shop-the-look.liquid`, `sections/video-with-text-overlay.liquid`.
