# 03 – KI-Sichtbarkeit (AEO/GEO) für ps-sattlerei.shop

**Stand:** 05.11.2026 · **Verantwortlich:** KI-Sichtbarkeit (Agentur-Team) · **Grundlage:** Live-Prüfung per `curl` am 05.11.2026 (ca. 10:05–10:30 Uhr), `backups/shopify/2026-11-04/paket-b-rollout.json`, `products.json`, Shopify-Entwicklerdokumentation
**Wichtig:** Im Shop wurde nichts geändert. Alle Code-Vorschläge sind für eine **unveröffentlichte Theme-Kopie** gedacht. Die Projektleitung setzt um, der Inhaber veröffentlicht.

Ziel: Wenn jemand ChatGPT, Perplexity, Gemini, Claude oder die Google AI Overviews z. B. fragt: „Wer veredelt Carbon-Lenkräder für den Audi RS6 C8?“, „Autosattlerei Ruhrgebiet Lenkrad neu beziehen“ oder „Design Edition Interieur RS6“, soll die PS-Sattlerei genannt und mit Link zitiert werden.

---

## 0. Kurzbefund (Scorecard)

| Ebene | Prüfpunkt | Status | Beleg / Detail |
|---|---|---|---|
| Zugang | `robots.txt` erlaubt KI-Crawler | ✅ | Shopify-Standard, `User-agent: *` mit `Allow: /`, keine Sperre für KI-Bots |
| Zugang | Bot-Schutz (Shopify/Cloudflare) lässt KI-User-Agents durch | ✅ (mit Einschränkung) | 13 User-Agents × 5 URLs = alle **200**, kein Challenge. Getestet von einer Rechenzentrums-IP in den USA, nicht von den echten Bot-IP-Bereichen (siehe 1.2) |
| Zugang | Inhalte ohne JavaScript lesbar | ✅ | Produkt- und Kollektionstexte stehen im Server-HTML |
| Discovery | `/llms.txt` vorhanden | ⚠️ | **Existiert (200, `text/markdown`)**, enthält aber nur Shopifys generische Agenten-Anleitung (UCP/Shop-Pay). **Kein Wort über Lenkräder, Interieur, Bergkamen** |
| Discovery | `/agents.md`, `/.well-known/ucp`, `sitemap_agentic_discovery.xml` | ✅ | Von Shopify automatisch, Shopping-Agenten finden den Shop technisch |
| Discovery | Sitemap | ✅ | 15 Kollektionen, 3 Seiten, Blog; alle 65 Produkt-URLs aus dem Rollout liefern 200 |
| Struktur | `ProductGroup` mit `brand: PS-Sattlerei` | ✅ | Shopify-Filter `structured_data` |
| Struktur | `shippingDetails` / `hasMerchantReturnPolicy` | ❌ | fehlen in allen Offers |
| Struktur | `Organization`/`LocalBusiness` live | ❌ | nur in Theme-Kopie „SEO-Korrekturen“ (ID 188204875872), nicht veröffentlicht |
| Struktur | `BreadcrumbList` | ❌ | Kollektionen zeigen eine sichtbare Brotkrumen-Navigation, aber kein JSON-LD; Produktseiten haben keins von beidem |
| Struktur | `FAQPage` | ⚠️ | Nur auf „Alle Interieur Pakete“ und Produktseiten. Fehler: Fragen mit `<strong>`-HTML, die Akkordeon-Reiter „Produktbeschreibung“/„Wichtige Informationen“ werden als FAQ-Fragen ausgegeben, 2 × `FAQPage` je Produktseite, Antworten in Du-Form |
| Struktur | `CollectionPage` | ✅ | vorhanden, aber nur `name`, `description`, `image` |
| Entität | Social-Links im Footer | ❌ | **Facebook- und YouTube-Link sind kaputt** (ohne `https://`, führen zu `ps-sattlerei.shop/facebook.com/pssattlerei` → **404**). Instagram/TikTok korrekt |
| Inhalt | Zitierfähige Frage-Antwort-Texte | ⚠️ | Viele Fakten in Produkttexten, aber keine kurzen, eigenständigen Antworten zu Ablauf, Zulassung, Pflege, Standort |
| Inhalt | Seitengröße (Token-Budget) | ✅ | Sichtbarer Text 500–2.800 Token pro Seite, also weit unter jedem Budget |

**Foundation-Score: 8 von 15 Prüfpunkten erfüllt (53 %). Ziel in 30 Tagen: 13/15 (87 %).**
Die Technik ist nicht das Problem. Es fehlen **Inhalte, die eine KI zitieren kann**, und **Signale außerhalb des Shops**.

---

## 1. Technischer Zugang für KI-Crawler

### 1.1 `robots.txt` (live, 05.11.2026)

`https://ps-sattlerei.shop/robots.txt` → **200**. Es gibt nur zwei Gruppen: `User-agent: *` und `User-agent: adsbot-google`. Kein KI-Bot wird namentlich genannt, also gilt für alle die `*`-Gruppe mit `Allow: /`. Gesperrt sind nur Warenkorb, Checkout, Konto, Filter-/Sortier-URLs und interne Shopify-Pfade, für KI-Sichtbarkeit genau richtig.
Neu bei Shopify: Der Kopf der Datei verweist auf `/agents.md`, `/.well-known/ucp` und den MCP-Endpunkt `/api/ucp/mcp` (Universal Commerce Protocol für Shopping-Agenten).

| Crawler | Betreiber | Zweck | Status laut robots.txt |
|---|---|---|---|
| GPTBot | OpenAI | Training | erlaubt (über `*`) |
| OAI-SearchBot | OpenAI | Index für die ChatGPT-Suche (**wichtig für Zitate**) | erlaubt |
| ChatGPT-User | OpenAI | Abruf, wenn ein Nutzer in ChatGPT eine Seite öffnen lässt | erlaubt (OpenAI behandelt nutzerausgelöste Abrufe teils unabhängig von robots.txt) |
| PerplexityBot | Perplexity | Index für Perplexity-Antworten | erlaubt |
| ClaudeBot | Anthropic | Training | erlaubt |
| Google-Extended | Google | **nur ein Steuer-Token, kein eigener Crawler.** Regelt die Nutzung für Gemini-Training und -Grounding. **Wirkt nicht auf Google AI Overviews**, die laufen über den normalen Googlebot | erlaubt |
| Applebot-Extended | Apple | Steuer-Token für Apple-KI-Training (gecrawlt wird mit Applebot) | erlaubt |
| CCBot | Common Crawl | offener Datensatz, Grundlage vieler KI-Modelle | erlaubt |

**Befund:** Kein Handlungsbedarf für den Zugang. Ein eigenes `robots.txt.liquid` ist **optional** (siehe 1.3).

### 1.2 Bot-Schutz Shopify/Cloudflare: Test mit echten User-Agent-Strings

Die Domain läuft über Shopifys Cloudflare-Infrastruktur (`server: cloudflare`, `powered-by: Shopify`). Der Händler hat **keinen eigenen Zugriff auf Cloudflare-Einstellungen**. Es gibt also keinen Schalter „KI-Bots blockieren“, den jemand versehentlich aktiviert haben könnte.

Test am 05.11.2026, je ein `GET` mit dem offiziellen User-Agent-String des Betreibers:

| User-Agent | `/` | `/robots.txt` | `/llms.txt` | `/collections/lenkrader` | `/products/pss-design-edition-passend-fur-audi-rs6-c8` |
|---|---|---|---|---|---|
| GPTBot/1.3 | 200 | 200 | 200 | 200 | 200 |
| OAI-SearchBot/1.3 | 200 | 200 | 200 | 200 | 200 |
| ChatGPT-User/1.0 | 200 | 200 | 200 | 200 | 200 |
| PerplexityBot/1.0 | 200 | 200 | 200 | 200 | 200 |
| Perplexity-User/1.0 | 200 | 200 | 200 | 200 | 200 |
| ClaudeBot/1.0 | 200 | 200 | 200 | 200 | 200 |
| Claude-User/1.0 | 200 | 200 | 200 | 200 | 200 |
| Claude-SearchBot/1.0 | 200 | 200 | 200 | 200 | 200 |
| Googlebot (Smartphone) | 200 | 200 | 200 | 200 | 200 |
| Applebot | 200 | 200 | 200 | 200 | 200 |
| CCBot/2.0 | 200 | 200 | 200 | 200 | 200 |
| bingbot/2.0 | 200 | 200 | 200 | 200 | 200 |
| Chrome (Kontrolle) | 200 | 200 | 200 | 200 | 200 |

- Alle Antworten enthielten das vollständige HTML (ca. 278 KB, korrekter `<title>`), **keine Challenge- oder Captcha-Seite**.
- 15 schnelle Abrufe hintereinander mit GPTBot → 15 × 200, keine Drosselung (429).
- Google-Extended und Applebot-Extended haben keinen eigenen User-Agent und lassen sich deshalb nicht per curl testen.

**Einschränkung (ehrlich):** Getestet wurde von einer Rechenzentrums-IP (USA, über einen Proxy) mit gefälschtem User-Agent. Shopify/Cloudflare können echte Bots zusätzlich an ihren IP-Bereichen oder per Web Bot Auth erkennen und anders behandeln. Das Ergebnis heißt also: **Es gibt keine Sperre nach User-Agent.** Ob die echten Bots kommen, lässt sich nur über deren Werkzeuge belegen, da Shopify keine Server-Logs herausgibt:
- **Bing Webmaster Tools** (Domain verifizieren, Sitemap einreichen; Bing speist Copilot und teilweise ChatGPT-Suche). Crawl-Statistik prüfen.
- **Google Search Console** → Einstellungen → Crawling-Statistik (Googlebot = Basis für AI Overviews und Gemini).
- Monatliche Prompt-Tests (Abschnitt 6): Zitiert Perplexity/ChatGPT eine Shop-URL, war der Bot da.

### 1.3 Vorschlag `templates/robots.txt.liquid` (optional)

**Empfehlung:** Nur einbauen, wenn der Inhaber die KI-Politik ausdrücklich dokumentieren möchte. Der Zugang funktioniert bereits.
Zwei Dinge sind bei Shopify wichtig:
1. **Ein Bot liest nur die spezifischste Gruppe.** Bekommt `GPTBot` eine eigene Gruppe mit nur `Allow: /`, ignoriert er alle `*`-Sperren (Checkout, Filter-Fallen). Deshalb übernimmt der Code unten die Standardregeln der `*`-Gruppe für die KI-Gruppe.
2. Das Template **ersetzt** Shopifys generierte Datei. Der Kommentar-Kopf mit den Hinweisen auf `agents.md`/UCP gehört nicht zu `robots.default_groups`, deshalb wird er unten von Hand nachgebildet. Die Regeln selbst bleiben dynamisch (`robots.default_groups`), Shopify-Updates kommen also weiter an. Vor dem Veröffentlichen die alte Ausgabe sichern und vergleichen (Shopify-Empfehlung).

**Datei:** `templates/robots.txt.liquid` (in der Theme-Kopie neu anlegen: Code bearbeiten → Templates → Neue Datei)

```liquid
{%- comment -%}
  PS-Sattlerei – robots.txt (Entwurf 05.11.2026, Agentur KI-Sichtbarkeit)
  Entscheidung Inhaber KI-Training: [FRAGE AN INHABER: erlauben (Variante A, empfohlen) oder sperren (Variante B)?]
  Shopify-Standardregeln werden dynamisch übernommen; nichts davon hart codieren.
{%- endcomment -%}
# PS-Sattlerei GmbH, Bergkamen – Onlineshop für veredelte Lenkräder und Interieur-Pakete.
# Agent instructions: https://ps-sattlerei.shop/agents.md
# Store summary for language models: https://ps-sattlerei.shop/llms.txt
# UCP discovery: https://ps-sattlerei.shop/.well-known/ucp

{%- assign pss_ki_bots = 'OAI-SearchBot,ChatGPT-User,GPTBot,PerplexityBot,Perplexity-User,ClaudeBot,Claude-SearchBot,Claude-User,Google-Extended,Applebot-Extended,CCBot,Applebot,bingbot' | split: ',' -%}

{% for group in robots.default_groups %}
{{- group.user_agent }}
{%- for rule in group.rules %}
{{ rule }}
{%- endfor %}
{%- if group.sitemap != blank %}
{{ group.sitemap }}
{%- endif %}

{% if group.user_agent.value == '*' -%}
# KI- und Antwortmaschinen: ausdrücklich erlaubt (Variante A).
# Gleiche Sperren wie für alle Bots (Checkout, Konto, Filter), weil ein Bot nur seine spezifischste Gruppe liest.
{% for bot in pss_ki_bots -%}
User-agent: {{ bot }}
{% endfor -%}
{%- for rule in group.rules %}
{{ rule }}
{%- endfor %}

{% endif -%}
{% endfor %}
```

**Variante B (nur falls der Inhaber Training ausschließen will, Zitate aber behalten):** `GPTBot`, `ClaudeBot`, `Google-Extended`, `Applebot-Extended`, `CCBot` aus `pss_ki_bots` entfernen und nach der Schleife ergänzen:

```text
User-agent: GPTBot
User-agent: ClaudeBot
User-agent: Google-Extended
User-agent: Applebot-Extended
User-agent: CCBot
Disallow: /
```

**Abwägung für den Inhaber (Entscheidung liegt bei ihm):** Variante B verhindert nicht, dass ChatGPT-Suche, Perplexity, Claude-Suche und Google AI Overviews den Shop zitieren. Diese Dienste nutzen andere Bots. Sie verhindert aber, dass die Modelle die PS-Sattlerei „aus dem Gedächtnis“ kennen, also ohne Websuche. Für eine kleine Marke, die bekannter werden will, **empfehlen wir Variante A**.

**Prüfung nach Veröffentlichung:** `curl -s https://ps-sattlerei.shop/robots.txt` → muss die `*`-Gruppe, die KI-Gruppe mit denselben `Disallow`-Zeilen, die `adsbot-google`-Gruppe und `Sitemap:` enthalten. Zusätzlich im robots.txt-Bericht der Google Search Console prüfen.

---

## 2. `llms.txt`

### 2.1 Befund und Korrektur der Annahme aus dem Auftrag

- `curl https://ps-sattlerei.shop/llms.txt` → **200, `Content-Type: text/markdown; charset=utf-8`**, 5,8 KB. Das gilt ebenso für `/llms-full.txt` und `/agents.md` (Header `pageType: llms_txt`, `etag: …LlmsTxtController…`).
- **Inhalt:** Shopifys automatische Agenten-Anleitung (Shop-Skill, UCP, WebMCP, Links auf Datenschutz/AGB/Widerruf/Versand und Werbung für shopify.com). **Kein Satz zu Lenkrädern, Interieur, Marken, Bergkamen oder Kontakt.** Für Antwortmaschinen ist die Datei damit wertlos, für Shopping-Agenten nützlich.
- **Shopify kann `/llms.txt` inzwischen direkt ausliefern.** Laut Shopify-Changelog vom 28.05.2026 („Customize /llms.txt, /llms-full.txt and /agents.md“) und der Theme-Dokumentation gibt es drei Liquid-Templates:
  - `templates/agents.md.liquid` → steuert `/agents.md` und ist Standard für die beiden anderen
  - `templates/llms.txt.liquid` → **nur `/llms.txt`**
  - `templates/llms-full.txt.liquid` → nur `/llms-full.txt`
  Reihenfolge: eigenes Template → `agents.md.liquid` → Shopify-Standard. Der Content-Type bleibt `text/markdown`.
- **Die Umwege aus dem Auftrag sind damit überflüssig, und sie würden auch nicht funktionieren:**
  - Seite `/pages/llms` mit `page.llms.liquid`: Shopify liefert Seiten-Templates immer als `text/html` im Theme-Layout aus. Mit `{% layout none %}` verschwindet zwar das Layout, der Content-Type bleibt aber HTML.
  - 301 von `/llms.txt`: Shopify-URL-Weiterleitungen greifen nur bei Pfaden, die sonst 404 liefern würden. `/llms.txt` liefert bereits 200, die Weiterleitung würde also nie ausgelöst.

**Einschränkungen (laut Shopify-Doku):**
- Das Template läuft in einem eingeschränkten Liquid-Kontext. Verfügbar sind nur `request` und `agents`; **`shop`, `collections`, `products` sind nicht verfügbar.** Produktlisten müssen deshalb **von Hand gepflegt** werden. Das heißt: Bei neuen Produkten, URL-Änderungen oder Preisänderungen die Datei anpassen. Eine vierteljährliche Prüfung ist Pflicht (siehe 6.4).
- Templates gehören zum Theme. Die Datei muss im **veröffentlichten** Theme liegen. Live ist derzeit „Rechtssicher“ (ID 188199272544). Bei jedem Theme-Wechsel mitnehmen.
- Shopify rät, in `agents.md` keine Kontaktdaten auszugeben, weil die Datei breit gecacht wird. Die Firmendaten der PS-Sattlerei stehen ohnehin öffentlich im Impressum, und einheitliche Firmendaten (NAP) sind hier gewollt. Wir nehmen sie deshalb **nur in `llms.txt`** auf und lassen `/agents.md` auf dem Shopify-Standard.

**Empfehlung:** Nur `templates/llms.txt.liquid` anlegen. `/agents.md` und `/llms-full.txt` bleiben bei Shopify, damit Shopping-Agenten weiter die aktuellen UCP-Endpunkte bekommen. Unten in der llms.txt verweisen wir auf `/agents.md`.

**Realistische Erwartung:** llms.txt ist eine verbreitete Community-Konvention (Vorschlag von Jeremy Howard, 2024), **kein Standard**. Keiner der großen Anbieter hat bestätigt, dass seine Antworten auf llms.txt beruhen. Der Aufwand ist klein und die Datei schadet nicht. Die Wirkung kommt aber vor allem aus den Abschnitten 3–5.

### 2.2 Vollständiger Inhalt: `templates/llms.txt.liquid`

Alle URLs wurden am 05.11.2026 live geprüft (200). Produkt-Handles stammen aus `paket-b-rollout.json`; wo das Feld `handle` leer ist, bleibt das bisherige Handle gültig. Preise sind Shop-Preise vom Stand 04.11.2026 inkl. MwSt.

```liquid
{%- comment -%}
  PS-Sattlerei – /llms.txt (Entwurf 05.11.2026). Eingeschränkter Liquid-Kontext: nur request und agents.
  PFLEGE: Bei neuen Produkten, URL- oder Preisänderungen anpassen. Spätestens vierteljährlich prüfen.
  Letzte Prüfung: 05.11.2026
{%- endcomment -%}
# PS-Sattlerei GmbH

> Autosattlerei und Manufaktur in Bergkamen (Kreis Unna, NRW, östliches Ruhrgebiet). Die PS-Sattlerei veredelt Lenkräder mit Echtcarbon, Forged Carbon, Nappaleder und Alcantara und fertigt Interieur-Pakete („Design Editionen“) sowie Leder-Schlüsselcover, passend für Audi, BMW, Mercedes und VW. Einbau in der eigenen Werkstatt in Bergkamen oder Versand.

Alle Marken- und Modellnamen dienen nur der Angabe der Passform („passend für“). Die PS-Sattlerei steht in keiner Verbindung zu den Fahrzeugherstellern.

## Unternehmen

- Name: PS-Sattlerei GmbH (Marke „PSS“)
- Adresse: Marie-Curie-Straße 12, 59192 Bergkamen, Deutschland
- Telefon: +49 2389 9953050
- E-Mail: sales@ps-sattlerei.com
- Kundenservice laut Website: Montag bis Freitag, 9–17 Uhr. Einbau, Beratung und Abholung nach Terminvereinbarung
- Handelsregister: Amtsgericht Hamm, HRB 10651
- Website/Shop: https://ps-sattlerei.shop/
- Instagram: https://www.instagram.com/pssattlerei_/
- TikTok: https://www.tiktok.com/@pssattlerei
- Kontakt: https://ps-sattlerei.shop/pages/contact

## Leistungen

- **Veredelte Lenkräder:** Basis ist ein originales Serienlenkrad. Der Metallkern bleibt original. Kranz, Griffzonen, Spange und Schaltwippen werden mit Carbon, Forged Carbon, Nappaleder oder Alcantara veredelt, 12-Uhr-Markierung und Naht in Wunschfarbe. Airbag, Tasten und Steuergeräte sind nicht enthalten, sie werden aus dem Fahrzeuglenkrad übernommen. Preise ab 1.690 €.
- **Einbau:** in Bergkamen durch Personal mit Sachkunde für Airbag-Systeme (Variante „Montage durch PS-Sattlerei“). Bei Versand wird der Einbau durch einen Fachbetrieb empfohlen.
- **Interieur-Pakete / Design Editionen:** Armaturenbrett, Türverkleidungen, Mittelkonsole, Einstiegsleisten, je nach Paket auch Sitze und Dachhimmel, in Alcantara, Nappaleder und Carbon. Austauschverfahren: Die Teile werden vorab in ca. 3–6 Wochen gefertigt, das Fahrzeug steht für den Tausch ca. 3 Werktage in Bergkamen. Preise 9.990–39.900 €.
- **Carbon-Interieur-Sets und Lenkrad-Zubehör** für Audi C8 und RSQ8 (Zierleisten, Black-Badge-Set, LED-Carbon-Schaltwippen, digitale Lenkradtasten).
- **Leder-Schlüsselcover** aus Nappaleder, passend für Audi-, BMW- und Mercedes-Schlüssel, 199 € (Wunschfarbe 249 €).
- **Pflege:** Alcantara-Reinigungsset (Reiniger und Spezialbürste), 19,90 €.
- **Sonderanfertigungen:** Wunschfarben, Materialien und Nahtbilder nach Kundenvorgabe, auch für Fahrzeuge, die nicht im Shop stehen (Anfrage über Kontakt).

## Wichtige Hinweise

- Zulassung: Für die veredelten Lenkräder liegen **keine ABE und kein Teilegutachten** vor. Vor der Nutzung im Straßenverkehr mit einer Prüforganisation (z. B. TÜV, DEKRA, GTÜ) klären, ob eine Begutachtung oder Eintragung erforderlich ist.
- Passform: Sie hängt von Lenkrad-Generation, Nabe und Ausstattung ab (Lenkradheizung, Hands-On-Erkennung, Schaltwippen). Vor der Bestellung per FIN, Teilenummer oder Fotos prüfen lassen.
- Widerruf: 14 Tage für Standardausführungen. Kein Widerrufsrecht bei Sonderanfertigungen (z. B. Wunschfarbe, individuelle Materialien/Nähte/Prägungen, Veredelung eigener Bauteile, konfigurierte Interieur-Pakete).
- Versand: Deutschland 4,90 €, EU 9,90 €, weitere Länder laut Versandseite 14,90 €, jeweils ab 199 € Bestellwert kostenlos. Interieur-Pakete per Spedition für 450 €, nur innerhalb Deutschlands. Abholung in Bergkamen nach Absprache kostenlos.

## Kollektionen

- [Alle Lenkräder](https://ps-sattlerei.shop/collections/lenkrader): veredelte Carbon-, Leder- und Alcantara-Lenkräder
- [Lenkräder passend für Audi](https://ps-sattlerei.shop/collections/audi-lenkrader): RS3 8V, RS4, RS5, RS6/RS7 C8, A6/A7 C8, R8, TT RS
- [Lenkräder passend für BMW](https://ps-sattlerei.shop/collections/bmw-lenkrader): M-Modelle der F- und G-Reihe
- [Lenkräder passend für Mercedes](https://ps-sattlerei.shop/collections/mercedes-lenkrader): vor Facelift und Facelift ab 2018
- [Lenkräder passend für VW](https://ps-sattlerei.shop/collections/volkswagen-lenkrader)
- [Alle Interieur-Pakete](https://ps-sattlerei.shop/collections/alle-interieur-pakete): Design Editionen und Manufaktur-Editionen
- [Interieur-Pakete passend für Audi](https://ps-sattlerei.shop/collections/audi-interieur-design-pakete)
- [Interieur-Pakete passend für BMW](https://ps-sattlerei.shop/collections/bmw-interieur-design-pakete)
- [Interieur-Pakete passend für Mercedes](https://ps-sattlerei.shop/collections/mercedes-interieur-pakete)
- [Interieur-Pakete passend für VW](https://ps-sattlerei.shop/collections/volkswagen-interieur-design-pakete)
- [Schlüsselcover und Accessoires](https://ps-sattlerei.shop/collections/schlusselcover)

## Wichtige Produkte

### Lenkräder
- [EVO-X Carbon Lenkrad Daytona Edition, passend für Audi RS6/RS7 C8](https://ps-sattlerei.shop/products/pss-evo-x-carbon-lenkrad-daytona-edition-fur-audi-rs6-rs7): mattes Echtcarbon, Nappaleder, ab 1.990 €
- [EVO-X Carbon Lenkrad Ipanema Edition, passend für Audi RS6/RS7 C8](https://ps-sattlerei.shop/products/pss-evo-x-carbon-lenkrad-ipanema-edition-audi-rs6-rs7): ab 1.990 €
- [Digital Performance Wheel, passend für Audi RS6/RS7/A6/A7 C8](https://ps-sattlerei.shop/products/pss-digital-performance-wheel-audi-rs6-c8): Alcantara, digitale Tasten, LED-Schaltwippen, 3.490 € inkl. Einbau
- [EVO-X Forged Carbon Lenkrad, passend für Audi RS3 8V/RS4/RS5](https://ps-sattlerei.shop/products/pss-evo-x-forged-carbon-lenkrad-audi-rs3-8v-rs4-rs5-schwarz): ab 1.690 €
- [EVO-X Carbon Lenkrad, passend für Audi R8/TT RS](https://ps-sattlerei.shop/products/pss-evo-x-carbon-lenkrad-audi-r8-tt-rs-schwarz): ab 1.990 €
- [GT-R Carbon Lenkrad, passend für BMW M-Modelle F-Reihe](https://ps-sattlerei.shop/products/pss-gt-r-carbon-lenkrad-bmw-f-reihe-schwarz): u. a. M2 F87, M3 F80, M4 F82/F83, ab 1.690 €
- [EVO-X Carbon Lenkrad, passend für BMW M-Modelle G-Reihe](https://ps-sattlerei.shop/products/pss-evo-x-carbon-lenkrad-bmw-g-reihe-schwarz): u. a. M2 G87, M3 G80/G81, M4 G82, ab 1.990 €
- [Classic Carbon Lenkrad, passend für Mercedes Facelift ab 2018](https://ps-sattlerei.shop/products/pss-classic-carbon-lenkrad-mercedes-facelift-rot): ab 1.690 €
- [EVO-X Carbon Lenkrad, passend für Mercedes vor Facelift](https://ps-sattlerei.shop/products/pss-evo-x-carbon-lenkrad-mercedes-vor-facelift-schwarz): ab 1.690 €
- [Iconic Leder Edition, passend für Mercedes Facelift ab 2018](https://ps-sattlerei.shop/products/pss-iconic-leder-lenkrad-mercedes-royal-blue-orange): Einzelstück, 2.490 €

### Interieur-Pakete
- [Design Edition, passend für Audi RS6 C8](https://ps-sattlerei.shop/products/pss-design-edition-passend-fur-audi-rs6-c8): ab 14.990 €
- [Nogaro Heritage Edition, passend für Audi RS6 C8](https://ps-sattlerei.shop/products/pss-nogaro-heritage-edition-audi-rs6-c8): ab 24.990 €
- [Iconic Manufaktur Edition, passend für Audi RS6 C8](https://ps-sattlerei.shop/products/pss-iconic-edition-passend-fur-audi-rs6-c8): 39.900 €
- [Design Edition, passend für Audi RS3 8V](https://ps-sattlerei.shop/products/pss-design-edition-passend-fur-audi-rs3-8v): ab 12.900 €
- [Design Edition, passend für BMW M3 G-Reihe](https://ps-sattlerei.shop/products/pss-design-edition-passend-fur-bmw-m3-g-reihe): ab 9.990 €
- [Design Red Classic Edition, passend für Mercedes G-Klasse W463A](https://ps-sattlerei.shop/products/pss-design-red-classic-edition-passend-fur-mercedes-g-klasse-w463a): ab 15.990 €
- [Design Edition, passend für VW T6.1](https://ps-sattlerei.shop/products/pss-design-edition-passend-fur-volkswagen-t6-1): ab 12.990 €
- [Carbon Interieur Set, passend für Audi RS6 C8](https://ps-sattlerei.shop/products/pss-carbon-interieur-set-audi-rs6-c8): ab 3.990 €
- [Carbon Interieur Set, passend für Audi RSQ8](https://ps-sattlerei.shop/products/pss-carbon-interieur-set-audi-rsq8): ab 3.490 €

### Zubehör und Pflege
- [Leder-Schlüsselcover, passend für Audi](https://ps-sattlerei.shop/products/pss-leder-schluesselcover-audi-schwarz), [BMW](https://ps-sattlerei.shop/products/pss-leder-schluesselcover-bmw-schwarz), [Mercedes](https://ps-sattlerei.shop/products/pss-leder-schluesselcover-mercedes-schwarz): 199 €
- [Alcantara-Reinigungsset](https://ps-sattlerei.shop/products/pss-alcantara-reiniger-set): 19,90 €

## Service und Recht

- [Versand & Zahlung](https://ps-sattlerei.shop/pages/versand-und-zahlung)
- [Widerrufsbelehrung](https://ps-sattlerei.shop/policies/refund-policy)
- [Vertrag widerrufen](https://ps-sattlerei.shop/pages/vertrag-widerrufen)
- [AGB](https://ps-sattlerei.shop/policies/terms-of-service)
- [Impressum](https://ps-sattlerei.shop/policies/legal-notice)
- [Datenschutzerklärung](https://ps-sattlerei.shop/policies/privacy-policy)

## Für Shopping-Agenten

- Anleitung für Agenten (UCP/MCP, Checkout): {{ agents.store_url }}/agents.md
- UCP-Discovery: {{ agents.ucp_discovery_url }}
- Sitemap: {{ agents.sitemap_url }}
```

**Abnahme nach Veröffentlichung:**
`curl -sI https://ps-sattlerei.shop/llms.txt` → `200`, `content-type: text/markdown`. `curl -s …/llms.txt | head -3` → beginnt mit `# PS-Sattlerei GmbH`. `curl -s …/agents.md | head -1` → weiterhin `# Agent Instructions — PS-Sattlerei` (Shopify-Standard).
Hinweis: Sobald der Ratgeber-Blog (SEO-Plan 5.3) oder die Standortseite `/pages/autosattlerei-bergkamen` online ist, in der llms.txt ergänzen.

---

## 3. Strukturierte Daten

### 3.1 Live-Befund (05.11.2026)

| Seite | JSON-LD live | Probleme |
|---|---|---|
| Startseite | `ProductGroup` (aus dem Abschnitt „Hervorgehobenes Produkt“) | kein `Organization`/`LocalBusiness`/`WebSite`; 2 × H1 |
| `/collections/lenkrader`, `/audi-lenkrader` | `CollectionPage` (`name`, `description`, `image`) | kein `BreadcrumbList`, keine FAQ |
| `/collections/alle-interieur-pakete` | `CollectionPage` + `FAQPage` (3 Fragen) | Fragen enthalten `<strong>FAQ: …</strong>`, Antworten in Du-Form |
| Produktseiten (geprüft: Design Edition RS6 C8, EVO-X Daytona) | `ProductGroup` (Shopify-Filter `structured_data`, `brand: PS-Sattlerei` ✅), Offers mit Preis, Währung, Verfügbarkeit | **kein `shippingDetails`, kein `hasMerchantReturnPolicy`**, kein `BreadcrumbList`; **2 × `FAQPage`**, wobei die Akkordeon-Reiter „Produktbeschreibung“ und „Wichtige Informationen“ als „Fragen“ ausgegeben werden; Frage mit `<strong>`; Text „Wichtige Informationen“ nennt auf der Design Edition „PSS Iconic Edition“ (Kopierfehler) |
| `/pages/contact` | keins | keine H1 |

**Sofortkorrekturen ohne neuen Code** (Theme-Kopie, Theme-Editor):
1. Beim Akkordeon/„Collapsible tabs“-Block der Produktseite die Option „Als FAQ/strukturierte Daten ausgeben“ ausschalten, falls das Theme „Concept“ sie anbietet. Sonst muss der Block im Code die FAQ-Ausgabe verlieren [Projektleitung: Einstellung im Theme-Editor prüfen]. Ziel: **höchstens eine `FAQPage` pro Seite**, nur mit echten Fragen.
2. `<strong>` und „FAQ:“ aus den Fragentexten entfernen (Fragen auf „Alle Interieur Pakete“ sowie „Kann ich mein Fahrzeug individuell anpassen lassen?“; Letzteres steht schon in STATUS Punkt 1).
3. Footer: Facebook- und YouTube-Link in den Theme-Einstellungen (Social Media) mit `https://www.` eintragen. Beide führen derzeit zu 404.

**Zur Erwartung:** Google zeigt FAQ-Rich-Results seit 2023 praktisch nur noch für Behörden- und Gesundheitsseiten. FAQ-Markup lohnt sich hier trotzdem, weil KI-Systeme Frage-Antwort-Strukturen gut extrahieren. Voraussetzung: **Der Text muss auch sichtbar auf der Seite stehen.**

### 3.2 Organization/LocalBusiness + WebSite (Ausbau der vorhandenen Theme-Kopie)

**Datei:** `snippets/social-meta-tags.liquid` in der Theme-Kopie „SEO-Korrekturen – Entwurf 04.11.2026“ (ID 188204875872). Den bestehenden Block `{%- if request.page_type == 'index' -%} … {%- endif -%}` (Typ `AutoPartsStore`) **vollständig durch** diesen Block ersetzen. Neu sind: `legalName`, `vatID`, `contactPoint`, korrekte `sameAs`, organisationsweite Rückgabe-Richtlinie, `WebSite`-Knoten. Alles ist mit dem Impressum abgeglichen. Unbekanntes steht als Liquid-Kommentar im Code, damit das JSON gültig bleibt.

```liquid
{%- comment -%} PS-Sattlerei: Unternehmensangaben für Suchmaschinen und KI (nur Startseite). Werte = Impressum. Stand 05.11.2026 {%- endcomment -%}
{%- if request.page_type == 'index' -%}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AutoPartsStore",
      "@id": "https://ps-sattlerei.shop/#organization",
      "name": "PS-Sattlerei",
      "legalName": "PS-Sattlerei GmbH",
      "alternateName": ["PSS", "PS Sattlerei"],
      "url": "https://ps-sattlerei.shop/",
      {%- if settings.logo %}
      "logo": "https:{{ settings.logo | image_url: width: 600 }}",
      "image": "https:{{ settings.logo | image_url: width: 1200 }}",
      {%- endif %}
      "description": "Autosattlerei und Manufaktur in Bergkamen für veredelte Lenkräder aus Carbon, Forged Carbon, Leder und Alcantara sowie Interieur-Pakete, passend für Audi, BMW, Mercedes und VW.",
      "telephone": "+49 2389 9953050",
      "email": "sales@ps-sattlerei.com",
      "vatID": "DE351002702",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Marie-Curie-Straße 12",
        "postalCode": "59192",
        "addressLocality": "Bergkamen",
        "addressRegion": "Nordrhein-Westfalen",
        "addressCountry": "DE"
      },
      {%- comment -%} [FRAGE AN INHABER: Geokoordinaten der Werkstatt → dann ergänzen:
      "geo": {"@type": "GeoCoordinates", "latitude": 51.xxxx, "longitude": 7.xxxx}, ] {%- endcomment %}
      {%- comment -%} [FRAGE AN INHABER: Sind Mo–Fr 9–17 Uhr auch Werkstatt-/Abholzeiten oder nur Telefonzeiten? Erst nach Bestätigung ergänzen:
      "openingHoursSpecification": [{"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "17:00"}], ] {%- endcomment %}
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "telephone": "+49 2389 9953050",
        "email": "sales@ps-sattlerei.com",
        "availableLanguage": ["de"]
      },
      "areaServed": [
        {"@type": "Country", "name": "Deutschland"},
        {"@type": "AdministrativeArea", "name": "Ruhrgebiet"}
      ],
      "knowsAbout": ["Lenkrad-Veredelung", "Carbon-Lenkrad", "Forged Carbon", "Alcantara-Lenkrad", "Lederlenkrad", "Autosattlerei", "Interieur-Veredelung", "Fahrzeug-Interieur Alcantara und Nappaleder"],
      "sameAs": [
        "https://www.instagram.com/pssattlerei_/",
        "https://www.tiktok.com/@pssattlerei",
        "https://www.facebook.com/pssattlerei",
        "https://www.youtube.com/@pssattlerei1566"
        {%- comment -%} [FRAGE AN INHABER: Facebook- und YouTube-URL bestätigen; Google-Unternehmensprofil-URL (maps.google.com/?cid=…) ergänzen, sobald verifiziert] {%- endcomment %}
      ],
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": ["DE","AT","BE","BG","CY","CZ","DK","EE","ES","FI","FR","GR","HR","HU","IE","IT","LT","LU","LV","MT","NL","PL","PT","RO","SE","SI","SK"],
        "returnPolicyCountry": "DE",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": 14,
        "returnMethod": "https://schema.org/ReturnByMail",
        "returnFees": "https://schema.org/ReturnFeesCustomerResponsibility",
        "merchantReturnLink": "https://ps-sattlerei.shop/policies/refund-policy"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://ps-sattlerei.shop/#website",
      "name": "PS-Sattlerei",
      "url": "https://ps-sattlerei.shop/",
      "inLanguage": "de-DE",
      "publisher": {"@id": "https://ps-sattlerei.shop/#organization"}
    }
  ]
}
</script>
{%- endif -%}
```

Hinweise:
- Die organisationsweite Rückgabe-Richtlinie beschreibt den **Regelfall** (Standardausführungen). Ausnahmen für Sonderanfertigungen regelt 3.4 auf Ebene der einzelnen Angebote. Google wertet Angaben am Angebot vorrangig.
- **Kein** `aggregateRating`/`review`, solange keine echten, überprüfbaren Bewertungen vorliegen (UWG § 5b Abs. 3).
- `vatID` steht ohnehin öffentlich im Impressum. Falls der Inhaber sie nicht im Code möchte, die Zeile ersatzlos löschen.

### 3.3 BreadcrumbList (Produkt- und Kollektionsseiten)

**Neue Datei:** `snippets/pss-breadcrumb-jsonld.liquid`

```liquid
{%- comment -%}
  PS-Sattlerei: BreadcrumbList für Produkt- und Kollektionsseiten (Entwurf 05.11.2026).
  Produktseite ohne Kollektionskontext: Es gilt die erste passende Kollektion aus pss_prio (spezifisch vor allgemein).
  Aufruf in layout/theme.liquid vor </head>:
  {% render 'pss-breadcrumb-jsonld', product: product, collection: collection %}
{%- endcomment -%}
{%- liquid
  assign pss_prio = 'audi-lenkrader,bmw-lenkrader,mercedes-lenkrader,volkswagen-lenkrader,audi-interieur-design-pakete,bmw-interieur-design-pakete,mercedes-interieur-pakete,volkswagen-interieur-design-pakete,audi-accessoires,bmw-accessoires,mercedes-accessoires,alle-interieur-pakete,lenkrader,schlusselcover' | split: ','
  assign pss_bc = nil
  if request.page_type == 'collection'
    assign pss_bc = collection
  elsif request.page_type == 'product'
    if collection
      assign pss_bc = collection
    else
      for pss_h in pss_prio
        for pss_c in product.collections
          if pss_c.handle == pss_h
            assign pss_bc = pss_c
            break
          endif
        endfor
        if pss_bc
          break
        endif
      endfor
    endif
  endif
-%}
{%- if request.page_type == 'product' or request.page_type == 'collection' -%}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Startseite", "item": {{ shop.url | append: '/' | json }}}
    {%- if pss_bc -%}
    ,{"@type": "ListItem", "position": 2, "name": {{ pss_bc.title | strip_html | json }}, "item": {{ shop.url | append: '/collections/' | append: pss_bc.handle | json }}}
    {%- endif -%}
    {%- if request.page_type == 'product' -%}
    ,{"@type": "ListItem", "position": {% if pss_bc %}3{% else %}2{% endif %}, "name": {{ product.title | strip_html | json }}, "item": {{ shop.url | append: '/products/' | append: product.handle | json }}}
    {%- endif -%}
  ]
}
</script>
{%- endif -%}
```

**Einbau:** In `layout/theme.liquid` direkt vor `</head>` die Zeile `{% render 'pss-breadcrumb-jsonld', product: product, collection: collection %}` einfügen. Die URLs im Markup sind immer die kanonischen (`/products/…`, `/collections/…`) und passen damit zum Canonical.

### 3.4 Produkt-JSON-LD mit `shippingDetails` und `hasMerchantReturnPolicy`

**Problem:** Das Produkt-Markup erzeugt der Shopify-Filter `{{ product | structured_data }}`. Dieser lässt sich nicht erweitern. Ein zweites Product-Markup daneben würde zwei widersprüchliche Produkt-Entitäten erzeugen.
**Lösung:** In der Theme-Kopie die Stelle mit `structured_data` suchen (Code-Editor → Suche nach `structured_data`, bei Concept meist in `sections/main-product.liquid` oder einem Produkt-Snippet) und die Zeile **ersetzen** durch `{% render 'pss-product-jsonld', product: product %}`.

**Vorbereitung im Admin (Tags, ohne Code):**
- Tag `versand-spedition` an alle Produkte, die **per Spedition** gehen (Design Editionen, Manufaktur-Editionen). [FRAGE AN INHABER: Gehen auch die Carbon-Interieur-Sets (Zierleisten) per Spedition oder als Paket?]
- Tag `sonderanfertigung` an alle Produkte, die **immer** nach Kundenkonfiguration gefertigt werden (laut Widerrufsbelehrung: Interieur-Pakete und Design Editionen). Varianten mit „Wunschfarbe“ erkennt der Code automatisch.

**Neue Datei:** `snippets/pss-product-jsonld.liquid`

```liquid
{%- comment -%}
  PS-Sattlerei: ProductGroup-JSON-LD mit Versand und Rückgabe (Entwurf 05.11.2026).
  Ersetzt {{ product | structured_data }}. Versand: siehe /pages/versand-und-zahlung. Rückgabe: siehe /policies/refund-policy.
  Rechtlich maßgeblich sind allein Widerrufsbelehrung und AGB; dieses Markup muss ihnen entsprechen (UWG § 5).
  Tags: versand-spedition = Speditionsversand 450 € nur DE; sonderanfertigung = kein Widerrufsrecht.
{%- endcomment -%}
{%- liquid
  assign pss_eu = 'AT,BE,BG,CY,CZ,DK,EE,ES,FI,FR,GR,HR,HU,IE,IT,LT,LU,LV,MT,NL,PL,PT,RO,SE,SI,SK' | split: ','
  assign pss_de_eu = 'DE,AT,BE,BG,CY,CZ,DK,EE,ES,FI,FR,GR,HR,HU,IE,IT,LT,LU,LV,MT,NL,PL,PT,RO,SE,SI,SK' | split: ','
  assign pss_spedition = false
  if product.tags contains 'versand-spedition'
    assign pss_spedition = true
  endif
  assign pss_sonder_produkt = false
  if product.tags contains 'sonderanfertigung'
    assign pss_sonder_produkt = true
  endif
  assign pss_montage_index = -1
  for pss_opt in product.options_with_values
    if pss_opt.name contains 'Montage'
      assign pss_montage_index = forloop.index0
    endif
  endfor
  assign pss_url = shop.url | append: '/products/' | append: product.handle
  assign pss_desc = product.description | strip_html | strip_newlines | replace: '  ', ' ' | truncate: 1000
-%}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProductGroup",
  "@id": {{ pss_url | append: '#product' | json }},
  "productGroupID": {{ product.id | json }},
  "name": {{ product.title | strip_html | json }},
  "url": {{ pss_url | json }},
  "description": {{ pss_desc | json }},
  {%- if product.featured_media %}
  "image": {{ product.featured_media | image_url: width: 1200 | prepend: 'https:' | json }},
  {%- endif %}
  {%- if product.type != blank %}
  "category": {{ product.type | json }},
  {%- endif %}
  "brand": {"@type": "Brand", "name": "PS-Sattlerei"},
  "manufacturer": {"@id": "https://ps-sattlerei.shop/#organization"},
  "hasVariant": [
    {%- for variant in product.variants -%}
    {%- liquid
      assign v_sonder = pss_sonder_produkt
      if variant.title contains 'Wunschfarbe'
        assign v_sonder = true
      endif
      assign v_montage = false
      if pss_montage_index >= 0 and variant.options[pss_montage_index] == 'Ja'
        assign v_montage = true
      endif
      assign v_url = pss_url | append: '?variant=' | append: variant.id
    -%}
    {
      "@type": "Product",
      "@id": {{ v_url | append: '#variant' | json }},
      "name": {{ product.title | append: ' – ' | append: variant.title | strip_html | json }},
      {%- if variant.sku != blank %}"sku": {{ variant.sku | json }},{% endif %}
      {%- if variant.barcode != blank %}"gtin": {{ variant.barcode | json }},{% endif %}
      {%- if variant.image %}"image": {{ variant.image | image_url: width: 1200 | prepend: 'https:' | json }},{% endif %}
      "offers": {
        "@type": "Offer",
        "url": {{ v_url | json }},
        "price": {{ variant.price | divided_by: 100.0 }},
        "priceCurrency": {{ cart.currency.iso_code | json }},
        "availability": "{% if variant.available %}https://schema.org/InStock{% else %}https://schema.org/OutOfStock{% endif %}",
        "seller": {"@id": "https://ps-sattlerei.shop/#organization"},
        {%- unless v_montage %}
        "shippingDetails": [
          {%- if pss_spedition -%}
          {
            "@type": "OfferShippingDetails",
            "shippingDestination": {"@type": "DefinedRegion", "addressCountry": "DE"},
            "shippingRate": {"@type": "MonetaryAmount", "value": 450.00, "currency": "EUR"}
          }
          {%- else -%}
          {
            "@type": "OfferShippingDetails",
            "shippingDestination": {"@type": "DefinedRegion", "addressCountry": "DE"},
            "shippingRate": {"@type": "MonetaryAmount", "value": {% if variant.price >= 19900 %}0{% else %}4.90{% endif %}, "currency": "EUR"}
          },
          {
            "@type": "OfferShippingDetails",
            "shippingDestination": {"@type": "DefinedRegion", "addressCountry": {{ pss_eu | json }}},
            "shippingRate": {"@type": "MonetaryAmount", "value": {% if variant.price >= 19900 %}0{% else %}9.90{% endif %}, "currency": "EUR"}
          }
          {%- endif -%}
        ],
        {%- endunless %}
        "hasMerchantReturnPolicy": {
          "@type": "MerchantReturnPolicy",
          "applicableCountry": {{ pss_de_eu | json }},
          {%- if v_sonder %}
          "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted",
          {%- else %}
          "returnPolicyCountry": "DE",
          "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
          "merchantReturnDays": 14,
          "returnMethod": "https://schema.org/ReturnByMail",
          "returnFees": "https://schema.org/ReturnFeesCustomerResponsibility",
          {%- endif %}
          "merchantReturnLink": "https://ps-sattlerei.shop/policies/refund-policy"
        }
      }
    }{% unless forloop.last %},{% endunless %}
    {%- endfor -%}
  ]
}
</script>
```

**Vorsichtige Formulierung, Begründung und Grenzen:**
- Schema.org kennt nur „Rückgabe erlaubt (x Tage)“ oder „nicht erlaubt“. Das **gesetzliche Widerrufsrecht** ist damit nur angenähert abgebildet. Rechtlich gilt ausschließlich die Widerrufsbelehrung. Das Markup darf ihr nicht widersprechen, sonst droht eine Irreführung nach UWG § 5.
- `MerchantReturnNotPermitted` steht **nur** an Varianten „Wunschfarbe“ und an Produkten mit Tag `sonderanfertigung`. Das entspricht dem Ausschluss nach § 312g Abs. 2 Nr. 1 BGB, wie ihn die Widerrufsbelehrung des Shops formuliert.
- **[FRAGE AN INHABER: Sind Lenkräder in den Standardfarben vorgefertigt (dann 14 Tage Widerruf) oder werden auch sie erst nach der Bestellung gefertigt bzw. auf Basis des eingesandten Kundenlenkrads veredelt (dann ggf. Ausschluss)?]** Bis zur Antwort bleibt der Code beim Regelfall laut Widerrufsbelehrung (Standardausführung = 14 Tage). Die Frage gehört vor Veröffentlichung in die anwaltliche Prüfung (STATUS Punkt 4).
- `returnFees: ReturnFeesCustomerResponsibility` entspricht „Sie tragen die unmittelbaren Kosten der Rücksendung“ in der Belehrung.
- Varianten „Montage durch PS-Sattlerei: Ja“ bekommen kein `shippingDetails`, weil die Ware in Bergkamen eingebaut wird.
- Länder außerhalb der EU (14,90 €) sind bewusst nicht im Markup. Sie können als dritter Block ergänzt werden, sobald die Versandzonen in Shopify bestätigt sind.
- **Fehlt bewusst:** `deliveryTime` (Bearbeitungs- und Lieferzeit), weil es keine belastbaren Angaben gibt. [FRAGE AN INHABER: Fertigungszeit Lenkräder in Werktagen?] `itemCondition` fehlt ebenfalls, weil auf einem originalen Serienlenkrad aufgebaut wird. [FRAGE AN INHABER: Ist das Basis-Lenkrad neu oder gebraucht/aufbereitet? Das ist für Google Merchant Center relevant.]
- **Widerspruch im Shop:** Die FAQ auf „Alle Interieur Pakete“ sagt „per Spedition deutschland- und europaweit“. Die Versandseite sagt „ausschließlich innerhalb Deutschlands“. [FRAGE AN INHABER: Was gilt?] Danach die FAQ angleichen. Der Code folgt der Versandseite.
- Versand und Rückgabe zusätzlich im **Google Merchant Center** hinterlegen (App „Google & YouTube“). Die dortigen Einstellungen haben bei Google Vorrang vor dem Markup.

**Abnahme:** In der Vorschau der Theme-Kopie 3 Seitentypen im [Rich Results Test](https://search.google.com/test/rich-results) und im [Schema Markup Validator](https://validator.schema.org/) prüfen: Lenkrad (Standardfarbe und Wunschfarbe), Design Edition, Reinigungsset (Preis unter 199 € → 4,90 €). Erwartung: 0 Fehler; genau 1 `ProductGroup`, 1 `BreadcrumbList`, höchstens 1 `FAQPage` je Seite.

### 3.5 FAQPage auf Kollektionen (Metaobjekt + Abschnitt)

Kollektionen teilen sich ein Template. Damit jede Kollektion eigene Fragen bekommt, werden die Inhalte über ein **Metaobjekt** gepflegt und über einen kleinen Abschnitt ausgegeben, sichtbar als Akkordeon **und** als JSON-LD aus derselben Quelle. Sichtbarer Text und Markup stimmen so immer überein.

**Admin (ohne Code):**
1. Einstellungen → Benutzerdefinierte Daten → Metaobjekte → Definition `pss_faq` („FAQ-Eintrag“) mit den Feldern `frage` (Einzeiliger Text, Pflicht) und `antwort` (Mehrzeiliger Text, Pflicht).
2. Kollektionen → Metafeld-Definition `custom.faq`, Typ „Metaobjekt-Referenz (Liste)“ → `pss_faq`.
3. Einträge aus Abschnitt 4 anlegen und den Kollektionen zuordnen (Zuordnung siehe Tabelle 4.10).

**Neue Datei:** `sections/pss-collection-faq.liquid`

```liquid
{%- comment -%} PS-Sattlerei: FAQ je Kollektion aus Metafeld custom.faq (Entwurf 05.11.2026) {%- endcomment -%}
{%- assign pss_faq = collection.metafields.custom.faq.value -%}
{%- if pss_faq != blank -%}
<section class="pss-faq page-width" aria-labelledby="pss-faq-titel-{{ section.id }}">
  <h2 id="pss-faq-titel-{{ section.id }}" class="pss-faq__titel">Häufige Fragen: {{ collection.title | escape }}</h2>
  {%- for eintrag in pss_faq -%}
    <details class="pss-faq__eintrag"{% if forloop.first %} open{% endif %}>
      <summary class="pss-faq__frage">{{ eintrag.frage.value | escape }}</summary>
      <div class="pss-faq__antwort">{{ eintrag.antwort.value | escape | newline_to_br }}</div>
    </details>
  {%- endfor -%}
</section>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {%- for eintrag in pss_faq -%}
    {
      "@type": "Question",
      "name": {{ eintrag.frage.value | strip_html | json }},
      "acceptedAnswer": {"@type": "Answer", "text": {{ eintrag.antwort.value | strip_html | json }}}
    }{% unless forloop.last %},{% endunless %}
    {%- endfor -%}
  ]
}
</script>
<style>
  .pss-faq{margin:3rem auto;max-width:860px;padding:0 16px}
  .pss-faq__titel{margin-bottom:1rem}
  .pss-faq__eintrag{border-bottom:1px solid rgba(0,0,0,.12);padding:.9rem 0}
  .pss-faq__frage{cursor:pointer;font-weight:600;line-height:1.4}
  .pss-faq__antwort{margin-top:.6rem;line-height:1.6}
</style>
{%- endif -%}

{% schema %}
{
  "name": "PSS FAQ (Metafeld)",
  "tag": "div",
  "enabled_on": { "templates": ["collection"] },
  "presets": [{ "name": "PSS FAQ (Metafeld)" }]
}
{% endschema %}
```

**Einbau:** Theme-Editor → Kollektionsvorlage → Abschnitt „PSS FAQ (Metafeld)“ unter dem Produktraster hinzufügen. **Achtung bei „Alle Interieur Pakete“:** Dort gibt es schon einen FAQ-Abschnitt mit `FAQPage`. Entweder dessen 3 Fragen in Metaobjekte überführen und den alten Abschnitt entfernen oder dieser Kollektion kein Metafeld geben. **Nie zwei `FAQPage` auf einer Seite.**

---

## 4. Zitierfähige Inhalte („Answer-first“): 25 Frage-Antwort-Paare

**Regeln:** Jede Antwort steht für sich, nennt die Marke „PS-Sattlerei“, ist sachlich und hat 40–80 Wörter. Marken nur als „passend für“. Alle Fakten stammen aus den Produkttexten (`products.json`), der Versandseite, der Widerrufsbelehrung, dem Impressum oder dem Briefing. Preise: Shop, Stand 04.11.2026, inkl. MwSt. Diese Preise bei jeder Preisänderung anpassen, weil KI-Systeme sie wörtlich übernehmen. Ansprache: Sie-Form.
**Einsatz:** (a) als Metaobjekte für die Kollektions-FAQ (3.5), (b) gesammelt auf einer Seite `/pages/haeufige-fragen` (sichtbar, mit Sprungmarken), (c) als Grundlage für Ratgeberartikel und Google-Unternehmensprofil-Beiträge. **[FRAGE AN INHABER]-Stellen vor Veröffentlichung klären und den Platzhalter entfernen.**

### Lenkrad allgemein

**4.1 Wer veredelt Carbon-Lenkräder im Ruhrgebiet?**
Die PS-Sattlerei GmbH in Bergkamen (Kreis Unna, östliches Ruhrgebiet) veredelt Lenkräder mit Echtcarbon, Forged Carbon, Nappaleder und Alcantara. Grundlage ist jeweils ein originales Serienlenkrad: Der Metallkern bleibt original, Airbag, Tasten und Elektronik werden aus Ihrem Fahrzeuglenkrad übernommen. Es gibt Ausführungen passend für Audi, BMW, Mercedes und VW, wahlweise mit Versand oder mit Einbau in der Werkstatt in Bergkamen.
→ Link: `/collections/lenkrader`

**4.2 Was kostet ein veredeltes Carbon-Lenkrad?**
Im Onlineshop der PS-Sattlerei beginnen veredelte Carbon-Lenkräder bei 1.690 € inkl. MwSt. (Stand November 2026), etwa passend für BMW M-Modelle der F-Reihe, Mercedes-Modelle oder Audi RS3 8V, RS4 und RS5. Ausführungen passend für Audi RS6 und RS7 C8 beginnen bei 1.990 €. Eine Wunschfarbe oder der Einbau in Bergkamen können den Preis erhöhen. Den genauen Betrag zeigt die jeweilige Variante im Shop.
→ Link: `/collections/lenkrader`

**4.3 Kann ich mein Lenkrad mit Leder oder Alcantara neu beziehen lassen?**
Die PS-Sattlerei bietet im Shop vor allem fertig veredelte Lenkräder auf Basis originaler Serienlenkräder an, mit Nappaleder, Alcantara oder Carbon in den Griffzonen und Ziernähten in Wunschfarbe. [FRAGE AN INHABER: Wird auch das kundeneigene Lenkrad neu bezogen (Einsendung, Preis, Dauer)?] Für individuelle Wünsche erreichen Sie die Sattlerei in Bergkamen unter 02389 9953050 oder per E-Mail an sales@ps-sattlerei.com.
→ Link: `/pages/contact`

### Audi

**4.4 Wer veredelt Carbon-Lenkräder für den Audi RS6 C8?**
Die PS-Sattlerei aus Bergkamen bietet veredelte Carbon-Lenkräder passend für Audi RS6 C8 und RS7 C8 (auch A6/A7 C8) an, zum Beispiel die EVO-X Daytona Edition mit mattem Echtcarbon, Nappaleder-Griffzonen und lackierter 12-Uhr-Markierung oder die Ipanema Edition. Basis ist ein originales Serienlenkrad; Airbag und Elektronik werden übernommen. Preis ab 1.990 € inkl. MwSt., der Einbau in Bergkamen ist wählbar.
→ Link: `/products/pss-evo-x-carbon-lenkrad-daytona-edition-fur-audi-rs6-rs7`

**4.5 Funktionieren Lenkradheizung und Hands-On-Erkennung nach dem Umbau weiter?**
Laut Produktbeschreibung der PS-Sattlerei sind die seitlichen Griffbereiche der EVO-X-Lenkräder passend für Audi C8 so gestaltet, dass die Lenkradheizung dort nutzbar bleibt. Die Hands-On-Erkennung des Spurhalteassistenten bleibt bei korrekter Übernahme der Elektronik grundsätzlich erhalten. Da die Ausstattung je nach Fahrzeug und Baujahr abweicht, wird die Kompatibilität vorab anhand von FIN, Teilenummer oder Fotos geprüft.
→ Link: `/products/pss-evo-x-carbon-lenkrad-daytona-edition-fur-audi-rs6-rs7`

**4.6 Gibt es ein Lenkrad mit digitalen Tasten für den Audi RS6 C8?**
Ja. Das PSS Digital Performance Wheel der PS-Sattlerei verbindet einen Alcantara-Lenkradkranz, digitale Lenkradtasten und LED-Carbon-Schaltwippen mit Schaltblitz, passend für Audi RS6, RS7, A6 und A7 der Baureihe C8. Über die Tasten lassen sich je nach Ausstattung unter anderem Drive-Select-Modi, Ambientelicht und Tacho-Ansicht steuern. Der Preis beträgt laut Shop 3.490 € inkl. MwSt., einschließlich Einbau in Bergkamen.
→ Link: `/products/pss-digital-performance-wheel-audi-rs6-c8`

**4.7 Was umfasst die Design Edition für den Audi RS6 C8?**
Die PSS Design Edition der PS-Sattlerei ist ein Interieur-Paket passend für den Audi RS6 C8. Oberes und unteres Armaturenbrett, Mittelkonsole mit Armauflage und Einstiegsleisten werden mit Alcantara und Nappaleder veredelt, Nahtfarbe nach Wunsch. Die Teile werden vorab gefertigt; für den Einbau steht das Fahrzeug ca. 3 Werktage in Bergkamen. Preis laut Shop ab 14.990 € inkl. MwSt.
→ Link: `/products/pss-design-edition-passend-fur-audi-rs6-c8`

### BMW

**4.8 Gibt es ein Carbon-Lenkrad für den BMW M3 G80 oder M4 G82?**
Ja. Die PS-Sattlerei bietet das PSS EVO-X Carbon Lenkrad passend für BMW M-Modelle der G-Reihe an, laut Shop unter anderem für M2 (G87), M3 (G80/G81), M4 (G82), M5 (G90/G99), M8, X3 M, X5 M und XM. Es hat einen unten abgeflachten Carbon-Kranz und verlängerte Carbon-Schaltwippen; die Elektronik wird übernommen. Preis ab 1.990 € inkl. MwSt.
→ Link: `/collections/bmw-lenkrader`

**4.9 Welches Carbon-Lenkrad passt in einen BMW M3 F80 oder M2 F87?**
Für BMW M-Modelle der F-Reihe (ca. 2014–2018) führt die PS-Sattlerei das PSS GT-R Carbon Lenkrad, laut Shop passend unter anderem für M2 (F87), M3 (F80), M4 (F82/F83), M5, M6, X5 M (F85) und X6 M (F86). Es hat tiefgeprägtes Leder in den Griffzonen, eine Carbon-Spange und verlängerte Carbon-Schaltwippen. Preis ab 1.690 € inkl. MwSt., wahlweise mit Einbau in Bergkamen.
→ Link: `/products/pss-gt-r-carbon-lenkrad-bmw-f-reihe-schwarz`

**4.10 Gibt es ein Interieur-Paket für den BMW M3 der G-Reihe?**
Ja. Die PSS Design Edition der PS-Sattlerei, passend für den BMW M3 der G-Reihe, veredelt Interieurteile mit einem Materialmix aus Alcantara und Nappaleder; Farbe und Nahtbild wählen Sie selbst. Die Bauteile werden vorab in der Manufaktur vorbereitet, für den Umbau steht das Fahrzeug ca. 3 Werktage in Bergkamen. Preis laut Shop ab 9.990 € inkl. MwSt.
→ Link: `/products/pss-design-edition-passend-fur-bmw-m3-g-reihe`

### Mercedes

**4.11 Welches Carbon-Lenkrad passt in einen Mercedes ab Facelift 2018?**
Für Mercedes-Modelle ab dem Facelift 2018 bietet die PS-Sattlerei Classic-Carbon- und EVO-X-Carbon-Lenkräder sowie die Iconic Leder Edition an. Laut Shop passen sie unter anderem in A-, CLA-, GLA- und GLB-Klasse, C-Klasse (W205, Modellpflege 2018–2021) sowie E-Klasse und GLC bis 2022, nicht jedoch in den GLS (X167). Die Preise beginnen bei 1.690 € inkl. MwSt.
→ Link: `/collections/mercedes-lenkrader`

**4.12 Gibt es Carbon-Lenkräder für Mercedes vor dem Facelift?**
Ja. Für Mercedes-Modelle vor dem Facelift 2018 führt die PS-Sattlerei das PSS EVO-X Carbon Lenkrad mit Akzenten in Schwarz, Rot, Gelb oder Silber, ab 1.690 € inkl. MwSt. Welche Baureihen genau passen, hängt von Lenkrad-Generation, Nabe und Tastenlayout ab. [FRAGE AN INHABER: Liste der passenden Baureihen vor Facelift.] Die Passform wird vorab anhand von FIN, Teilenummer oder Fotos geprüft.
→ Link: `/products/pss-evo-x-carbon-lenkrad-mercedes-vor-facelift-schwarz`

**4.13 Wer veredelt das Interieur der Mercedes G-Klasse W463A?**
Die PS-Sattlerei bietet die PSS Design Red Classic Edition passend für die Mercedes G-Klasse W463A an: Armaturenbrett und Türverkleidungen in rotem Nappaleder, dazu ein passendes PSS-Lenkrad. Die Bauteile werden in ca. 3–6 Wochen vorbereitet, während Sie weiterfahren; der Tausch dauert ca. 3 Werktage. Airbag, Elektronik und Sensorik bleiben original. Preis laut Shop ab 15.990 € inkl. MwSt.
→ Link: `/products/pss-design-red-classic-edition-passend-fur-mercedes-g-klasse-w463a`

### Interieur-Pakete

**4.14 Was kostet eine Interieur-Veredelung mit Alcantara und Leder?**
Die Design Editionen und Manufaktur-Editionen der PS-Sattlerei kosten laut Shop (Stand November 2026) zwischen 9.990 € und 39.900 € inkl. MwSt., je nach Fahrzeug und Umfang. Carbon-Interieur-Sets für Audi C8 und RSQ8 beginnen bei 2.990 €. Der Preis hängt von Material, Umfang und der Wahl zwischen Einbau in Bergkamen und Speditionsversand ab. Für Fahrzeuge außerhalb des Sortiments erstellt die Sattlerei individuelle Angebote.
→ Link: `/collections/alle-interieur-pakete`

**4.15 Wie lange steht mein Auto bei einer Design Edition in der Werkstatt?**
Bei den Design Editionen der PS-Sattlerei steht das Fahrzeug laut Produkttexten nur ca. 3 Werktage in Bergkamen. Möglich macht das ein Austauschverfahren: Die Sattlerei hält Basisteile vorrätig und veredelt sie in ca. 3–6 Wochen nach Ihrer Konfiguration, während Sie Ihr Auto weiter nutzen. Beim Termin werden die veredelten Teile eingebaut, Ihre Originalteile verbleiben im Austausch bei der Sattlerei.
→ Link: `/collections/alle-interieur-pakete`

**4.16 Kann eine Design Edition in meiner eigenen Werkstatt eingebaut werden?**
Laut FAQ der PS-Sattlerei ja: Die fertig veredelten Bauteile können per Spedition an Ihre Werkstatt oder an eine Partnerwerkstatt geliefert werden. Nach dem Einbau gehen Ihre originalen Kunststoffteile im Austausch zurück nach Bergkamen. Der Speditionsversand kostet 450 € und ist laut Versandseite nur innerhalb Deutschlands möglich. [FRAGE AN INHABER: FAQ nennt „europaweit“; bitte klären.]
→ Link: `/pages/versand-und-zahlung`

### Ablauf und Einbau

**4.17 Wie läuft die Bestellung eines veredelten Lenkrads ab?**
Bei der PS-Sattlerei wählen Sie im Shop Lenkrad, Farbe und ob Sie Versand oder Einbau in Bergkamen wünschen. Weil Lenkradheizung, Hands-On-Erkennung und Schaltwippen je nach Fahrzeug variieren, empfiehlt die Sattlerei vor der Bestellung eine Passformprüfung anhand von FIN, Teilenummer oder Fotos der Vorder- und Rückseite Ihres Lenkrads. [FRAGE AN INHABER: Fertigungsdauer; was passiert mit dem Serienlenkrad?]
→ Link: `/collections/lenkrader`

**4.18 Wer darf ein Lenkrad mit Airbag einbauen?**
Beim Lenkradtausch werden Airbag, Tasten und Steuergeräte aus dem Serienlenkrad übernommen. Das ist sicherheitsrelevant und gehört in fachkundige Hände. Die PS-Sattlerei bietet den Einbau in ihrer Werkstatt in Bergkamen durch Personal mit Sachkunde für Airbag-Systeme an; die Option „Montage durch PS-Sattlerei“ wählen Sie direkt beim Produkt. Bei Versand empfiehlt die Sattlerei einen qualifizierten Fachbetrieb.
→ Link: `/collections/lenkrader`

**4.19 Wo sitzt die PS-Sattlerei und wie bekomme ich einen Termin?**
Die PS-Sattlerei GmbH sitzt in der Marie-Curie-Straße 12, 59192 Bergkamen (Kreis Unna, NRW), im östlichen Ruhrgebiet zwischen Dortmund und Hamm. Einbau, Beratung und Abholung erfolgen nach Terminvereinbarung. Erreichbar ist die Sattlerei unter 02389 9953050 oder per E-Mail an sales@ps-sattlerei.com; der Kundenservice ist laut Website montags bis freitags von 9 bis 17 Uhr erreichbar.
→ Link: `/pages/contact`

### Zulassung

**4.20 Braucht ein veredeltes Carbon-Lenkrad eine ABE oder eine TÜV-Eintragung?**
Für die veredelten Lenkräder der PS-Sattlerei liegen keine ABE und kein Teilegutachten vor. Veredelt wird ein originales Serienlenkrad: Metallkern, Airbag, Tasten und Elektronik bleiben original beziehungsweise werden übernommen. Ob für Ihr Fahrzeug eine Begutachtung oder Eintragung erforderlich ist, klären Sie bitte vor der Nutzung im Straßenverkehr mit einer Prüforganisation wie TÜV, DEKRA oder GTÜ.
→ Link: `/collections/lenkrader`

**4.21 Bleibt der Airbag bei einem veredelten Lenkrad original?**
Ja. Laut Produktbeschreibungen der PS-Sattlerei sind Airbag, Tasten, Steuergeräte und Sensorik nicht im Lieferumfang der Lenkräder; sie werden beim Einbau aus Ihrem Serienlenkrad übernommen. Veredelt werden Kranz, Spange und Anbauteile, der Metallkern bleibt original. Auch bei den Interieur-Paketen veredelt die Sattlerei nur Kunststoff- und Dekorteile; sicherheitsrelevante Komponenten werden 1:1 übernommen.
→ Link: `/collections/lenkrader`

### Pflege

**4.22 Wie reinige ich ein Alcantara-Lenkrad?**
Für Alcantara an Lenkrad, Sitzen und Verkleidungen bietet die PS-Sattlerei ein eigenes Alcantara-Reinigungsset für 19,90 € an, bestehend aus Reiniger und feiner Spezialbürste. Der Reiniger löst Fett und Schmutz aus den Fasern, die Bürste richtet die Fasern wieder auf, damit die matte Oberfläche zurückkommt. [FRAGE AN INHABER: Anwendung Schritt für Schritt, z. B. Menge, Einwirkzeit, Trocknung.]
→ Link: `/products/pss-alcantara-reiniger-set`

**4.23 Wie pflege ich ein Lenkrad aus Carbon und Leder?**
Die Carbon- und Lackflächen der PS-Sattlerei-Lenkräder sind laut Produkttext mehrschichtig klarversiegelt und für den Alltag ausgelegt; übliche Gebrauchsspuren lassen sich dennoch nicht ganz ausschließen. Für Leder empfiehlt die Sattlerei bei ihren Lederprodukten ein leicht feuchtes Tuch, anschließendes Trockenreiben und keine aggressiven Reiniger. [FRAGE AN INHABER: Pflegeempfehlung speziell für Carbon-Klarlack und Nappa am Lenkrad.]
→ Link: `/blogs/news` (später Ratgeberartikel „Leder im Auto richtig pflegen“, SEO-Plan 5.3)

### Schlüsselcover

**4.24 Wo bekomme ich ein Lederschlüsselcover für meinen Audi-, BMW- oder Mercedes-Schlüssel?**
Die PS-Sattlerei fertigt Schlüsselcover aus Nappaleder in Automobilqualität, passend für Autoschlüssel von Audi, BMW und Mercedes, mit handgeschliffenen, lackierten Kanten und Lederschlaufe mit Metallniete. Der Schlüssel wird von oben eingeschoben. Im Shop gibt es zahlreiche Farben für 199 € inkl. MwSt.; eine Wunschfarbe kostet 249 €. Kontrastnaht oder Prägung sind auf Anfrage möglich.
→ Link: `/collections/schlusselcover`

**4.25 Passt das Schlüsselcover auch für andere Marken oder Schlüsseltypen?**
Die Lederschlüsselcover der PS-Sattlerei passen laut Shop für die Schlüssel gängiger Modelle und Generationen von Audi, BMW und Mercedes; für andere Marken sind sie ebenfalls realisierbar, wenn Sie Modell und Schlüsseltyp angeben. Bitte beachten Sie: Cover in Wunschfarbe oder mit Prägung sind Sonderanfertigungen und vom Widerrufsrecht ausgeschlossen. [FRAGE AN INHABER: Liste der unterstützten Schlüsseltypen.]
→ Link: `/collections/schlusselcover`

### 4.26 Zuordnung zu den Kollektionen (Metafeld `custom.faq`)

| Kollektion | Fragen |
|---|---|
| `lenkrader` | 4.1, 4.2, 4.17, 4.18, 4.20, 4.21 |
| `audi-lenkrader` | 4.4, 4.5, 4.6, 4.20 |
| `bmw-lenkrader` | 4.8, 4.9, 4.20 |
| `mercedes-lenkrader` | 4.11, 4.12, 4.20 |
| `alle-interieur-pakete` | 4.14, 4.15, 4.16 (bestehende FAQ dort ersetzen, siehe 3.5) |
| `audi-interieur-design-pakete` | 4.7, 4.15 |
| `bmw-interieur-design-pakete` | 4.10, 4.15 |
| `mercedes-interieur-pakete` | 4.13, 4.15 |
| `schlusselcover` | 4.24, 4.25 |
| neue Seite `/pages/haeufige-fragen` | alle 25 (plus 4.19, 4.22, 4.23 nur hier) |

**Warum das wirkt:** KI-Systeme zerlegen Seiten in Abschnitte und übernehmen gern einen Absatz, der eine Frage vollständig beantwortet. Die Kombination aus Marke, Modell, Ort und Preis in einem Absatz von 40–80 Wörtern ist genau das Format, das Perplexity und Google AI Overviews zitieren.

---

## 5. Entitäts-Signale außerhalb des Shops

KI-Systeme empfehlen eher Firmen, die sie **aus mehreren unabhängigen Quellen übereinstimmend** kennen. Der Shop allein genügt nicht.

### 5.1 Einheitliche Firmendaten (NAP), überall exakt so

| Feld | Verbindlicher Wert |
|---|---|
| Name | **PS-Sattlerei GmbH** (Profile ohne Keywords im Namen) |
| Adresse | Marie-Curie-Straße 12, 59192 Bergkamen |
| Telefon | 02389 9953050 (international +49 2389 9953050). Im Footer steht „+49 (0) 2389 995 30 50“: Die Schreibweise ist egal, die Ziffern müssen gleich sein |
| E-Mail | sales@ps-sattlerei.com |
| Website | https://ps-sattlerei.shop/ |
| Kategorie | Autosattlerei (Hauptkategorie), ergänzend z. B. Autozubehör, Autotuning, je nach Verzeichnis |
| Kurzbeschreibung (für alle Profile gleich) | „Autosattlerei und Manufaktur in Bergkamen: veredelte Lenkräder aus Carbon, Leder und Alcantara sowie Interieur-Pakete, passend für Audi, BMW, Mercedes und VW. Einbau vor Ort oder Versand.“ |

**[FRAGE AN INHABER: Die Domain ps-sattlerei.com (E-Mail-Domain) leitet auf www.ps-sattlerei.com weiter. Gibt es dort eine zweite Website? Falls ja: auf ps-sattlerei.shop umleiten (301) oder klar abgrenzen. Zwei Websites mit unterschiedlichen Inhalten schwächen die Entität.]**

### 5.2 Google-Unternehmensprofil (höchste Priorität für AI Overviews und Gemini)

Details siehe SEO-Plan 5.1. Speziell für die KI-Sichtbarkeit:
- Inhaberschaft prüfen und verifizieren, Kategorie „Autosattlerei“, Website-Link mit UTM.
- **Leistungen** einzeln anlegen, mit den Formulierungen aus Abschnitt 4: „Carbon-Lenkrad veredeln“, „Lenkrad Alcantara“, „Interieur-Veredelung (Design Edition)“, „Lenkrad-Einbau mit Airbag-Sachkunde“, „Leder-Schlüsselcover“.
- **Q&A und Beiträge:** monatlich ein Beitrag aus Abschnitt 4, mit Foto aus der Werkstatt.
- **Bewertungen:** jeden Kunden nach Auftragsabschluss fragen, ohne Gegenleistung und ohne Vorauswahl. In Bewertungen tauchen von selbst Begriffe wie „RS6 Lenkrad“ auf, und genau die werten KI-Systeme aus.
- Danach die Profil-URL in `sameAs` (3.2) eintragen.

### 5.3 Branchenverzeichnisse Deutschland (einmalig, ca. 2–3 Stunden)

| Verzeichnis | Warum | Hinweis |
|---|---|---|
| **Bing Places for Business** | Bing ist Datenquelle für Microsoft Copilot und teilweise für die ChatGPT-Suche | Import aus dem Google-Profil möglich; gleichzeitig **Bing Webmaster Tools** einrichten und Sitemap einreichen |
| **Apple Business Connect** | Apple Maps, Siri, Apple Intelligence | Mit Apple-Account; Logo, Fotos, Kategorie |
| **Gelbe Seiten** | stark verlinkt, wird von KI häufig als Quelle zitiert | Grundeintrag kostenlos; kostenpflichtige Pakete sind **nicht nötig** |
| **Das Örtliche** | dto. | Eintrag/Änderung über das Portal bzw. den Telefonbuchverlag |
| **11880.com** | dto., mit Bewertungen | Grundeintrag kostenlos |
| Optional: Handwerkskammer Dortmund / IHK zu Dortmund | Behördennahe Quelle mit hoher Glaubwürdigkeit | [FRAGE AN INHABER: Mitglied in HWK (Sattler-/Raumausstatterhandwerk) oder IHK? Gibt es eine Betriebs- oder Meistersuche mit Eintrag?] |

Regeln: Nur echte Daten und überall dieselbe Kurzbeschreibung (5.1). Keine bezahlten „Eintragsdienste“, die ungefragt hunderte Verzeichnisse befüllen; deren Daten lassen sich später kaum korrigieren. Einträge in einer Liste festhalten (Verzeichnis, Login, Datum).

### 5.4 Wikidata: derzeit **nicht** empfohlen

Wikidata nimmt Firmen auf, die durch seriöse, öffentlich zugängliche Quellen eindeutig belegt sind. Ein Handelsregistereintrag reicht formal oft, aber ein Eintrag ohne unabhängige Quellen (Presse, Messeberichte, Fachmagazine) wird leicht gelöscht und bringt wenig. **Wieder prüfen, sobald mindestens 2–3 unabhängige redaktionelle Berichte vorliegen** (z. B. Lokalpresse WA/Ruhr Nachrichten, Tuning-Magazin, Bericht von der Essen Motor Show). Dann einen Eintrag „PS-Sattlerei GmbH“ mit Rechtsform, Sitz, Website und Belegen anlegen. Ein Wikipedia-Artikel ist nicht realistisch und nicht anzustreben.

### 5.5 YouTube und Instagram als Quellen

- **YouTube** (`@pssattlerei1566`, Link im Footer reparieren!): Google nutzt YouTube-Inhalte direkt in AI Overviews und Gemini. Pro Kernprodukt ein kurzes Video mit **sprechendem Titel und Beschreibung**, z. B. „Carbon-Lenkrad passend für Audi RS6 C8 – Veredelung und Einbau | PS-Sattlerei Bergkamen“. Die Beschreibung beginnt mit 2–3 Sätzen aus Abschnitt 4 und enthält den Link zur Produktseite. Kapitelmarken setzen, deutsche Untertitel hochladen (KI liest Transkripte). Kundenfahrzeuge nur mit Einwilligung, Kennzeichen unkenntlich.
- **Instagram/TikTok:** In der Bio Ort und Leistung nennen („Autosattlerei Bergkamen · Lenkräder & Interieur · Shop-Link“). Bildunterschriften mit Fahrzeugmodell und Leistung in Klartext, keine reinen Hashtag-Listen. Werbekennzeichnung beachten, sobald Partner beteiligt sind.
- Auf den Produktseiten können die eingebetteten YouTube-Videos bleiben, aber erst nach Einwilligung laden (§ 25 TDDDG, STATUS Punkt 3).

### 5.6 Foren und Communities, ohne Spam

KI-Systeme, vor allem Perplexity und Google, zitieren auffällig oft Forenbeiträge und Reddit.
- **Wo:** Motor-Talk (Unterforen der jeweiligen Modelle: Audi RS6/RS7, BMW M2/M3/M4, Mercedes C-/E-Klasse, G-Klasse, VW T6.1), modellbezogene Facebook-Gruppen, Reddit (r/Audi, r/BMW, r/mercedes_benz), bei internationalem Interesse die Modellforen von Bimmerpost (z. B. g80.bimmerpost.com). [FRAGE AN INHABER: In welchen Foren und Gruppen sind Ihre Kunden aktiv? Welche Clubs oder Stammtische kennen Sie?]
- **Wie:**
  1. Mit einem **erkennbaren Firmenkonto** („PS-Sattlerei – [Vorname]“), nie verdeckt als „zufriedener Kunde“. Verdeckte Werbung verstößt gegen UWG § 5a Abs. 4 und gegen die Forenregeln.
  2. Fachfragen beantworten (Passform per Teilenummer, Unterschied Forged/Sichtcarbon, Zulassungsfrage sachlich mit Verweis auf Prüforganisationen), **ohne** in jeder Antwort einen Link zu setzen.
  3. Eigene Projektberichte (Bauthread einer Design Edition mit Fotos) nur dort, wo Gewerbetreibende posten dürfen, und nur mit Freigabe des Fahrzeughalters.
  4. Kunden **nicht** auffordern, Lob in Foren zu posten, und keine Gegenleistung für Erwähnungen anbieten.
- **Messe/Presse:** Essen Motor Show 2026 (STATUS Punkt 10): Pressemitteilung mit Fotos an Lokal- und Fachpresse. Redaktionelle Berichte sind das stärkste unabhängige Signal.

### 5.7 Shopify-Kanäle für KI-Shopping

Der Shop ist über UCP/`agents.md` technisch für Shopping-Agenten erschlossen. [Projektleitung: Im Shopify-Admin prüfen, ob es unter Vertriebskanäle bzw. Einstellungen eine Freigabe für KI-Kanäle gibt (Shopify Catalog/„Agentic Storefronts“ für ChatGPT, Perplexity, Copilot) und ob sie für Deutschland verfügbar ist. Nicht ohne Freigabe des Inhabers aktivieren.]

---

## 6. Testprotokoll: monatliche Prüfung der KI-Sichtbarkeit

### 6.1 Durchführung

- **Wann:** jeden ersten Montag im Monat, ca. 45 Minuten. Erster Termin: **vor** Umsetzung der Maßnahmen (Nullmessung).
- **Wo:** ChatGPT (mit Websuche), Perplexity, Google (AI Overview bzw. KI-Modus), Gemini, Claude (mit Websuche). Jeweils **abgemeldet bzw. im privaten Fenster**, Sprache Deutsch, Standort Deutschland. Prompts **wörtlich** eingeben, ohne Nachfragen.
- **Umfang:** Alle 15 Prompts in ChatGPT, Perplexity und Google. Die Kern-Prompts P1, P2, P3, P7, P12 zusätzlich in Gemini und Claude (zusammen 55 Tests).
- **Dokumentation:** Screenshot der Antwort, genannte Quellen-URLs, Datum. Tabelle unten in einer Tabelle/Excel fortführen.

### 6.2 Die 15 Prompts

| # | Prompt | Erwartete Ziel-URL |
|---|---|---|
| P1 | Wer veredelt Carbon-Lenkräder für den Audi RS6 C8? | `/products/pss-evo-x-carbon-lenkrad-daytona-edition-fur-audi-rs6-rs7` |
| P2 | Autosattlerei Ruhrgebiet Lenkrad neu beziehen | `/collections/lenkrader` oder Startseite |
| P3 | Design Edition Interieur RS6 | `/products/pss-design-edition-passend-fur-audi-rs6-c8` |
| P4 | Carbon Lenkrad BMW M3 G80 kaufen Deutschland | `/collections/bmw-lenkrader` |
| P5 | Forged Carbon Lenkrad Audi RS3 8V | `/products/pss-evo-x-forged-carbon-lenkrad-audi-rs3-8v-rs4-rs5-schwarz` |
| P6 | Wo kann ich in NRW mein Lenkrad mit Alcantara veredeln lassen? | Startseite / `/pages/contact` |
| P7 | Was kostet ein Carbon-Lenkrad mit Einbau? | `/collections/lenkrader` |
| P8 | Mercedes C-Klasse W205 Facelift Carbon Lenkrad | `/collections/mercedes-lenkrader` |
| P9 | Interieur Alcantara Mercedes G-Klasse W463A veredeln | `/products/pss-design-red-classic-edition-passend-fur-mercedes-g-klasse-w463a` |
| P10 | Braucht ein Carbon-Lenkrad eine ABE oder TÜV-Eintragung? | `/collections/lenkrader` (FAQ 4.20) |
| P11 | Lederschlüsselcover BMW Nappaleder | `/collections/schlusselcover` |
| P12 | Was ist die PS-Sattlerei und was bietet sie an? | Startseite / `llms.txt` |
| P13 | Interieur-Veredelung ohne lange Standzeit Austauschverfahren | `/collections/alle-interieur-pakete` |
| P14 | Alcantara Lenkrad reinigen, welches Set? | `/products/pss-alcantara-reiniger-set` |
| P15 | Digitale Lenkradtasten Audi RS6 C8 nachrüsten | `/products/pss-digital-performance-wheel-audi-rs6-c8` |

P12 ist ein **Marken-Prompt**: Er prüft, ob die KI die Firma korrekt beschreibt (Ort, Leistungen, keine falschen Zulassungsaussagen). Die übrigen sind **generische Prompts**, bei denen die PS-Sattlerei gegen Wettbewerber antritt.

### 6.3 Bewertungsschema (je Prompt und KI)

| Punkte | Kriterium |
|---|---|
| 0 | PS-Sattlerei wird nicht genannt |
| 1 | Genannt, aber ohne Link oder nur am Rand (z. B. in einer langen Liste) |
| 2 | Genannt **mit** Link auf ps-sattlerei.shop (oder Google-Profil), Fakten korrekt |
| 3 | Als **erste oder einzige** Empfehlung genannt, mit Link auf die passende Ziel-URL, Fakten korrekt |
| **F** (Fehler-Flag, zusätzlich) | Falsche Aussage über die PS-Sattlerei, z. B. „mit ABE“, „TÜV-geprüft“, falscher Ort, falscher Preis, „Original-Audi-Teil“. **Jeder F-Fall kommt sofort zur Projektleitung:** Quelle der Falschinfo suchen und korrigieren |

**Kennzahlen pro Monat:**
- **Sichtbarkeitsquote** = Anteil der Tests mit ≥ 1 Punkt (Ziel nach 3 Monaten: 30 %, nach 6 Monaten: 50 %)
- **Zitierquote** = Anteil der Tests mit ≥ 2 Punkten
- **Punktzahl** = Summe (maximal 55 × 3 = 165)
- **F-Fälle** = Ziel 0
- Zusätzlich notieren: Welche **Wettbewerber** und welche **Quellen** (Foren, Verzeichnisse, YouTube) werden genannt? Daraus ergeben sich die nächsten Maßnahmen für Abschnitt 5.

**Vorlage (pro Monat eine Zeile pro Prompt):**

| Datum | Prompt | ChatGPT | Perplexity | Google AIO | Gemini | Claude | Zitierte Quellen | Wettbewerber | F-Fall / Notiz |
|---|---|---|---|---|---|---|---|---|---|
| [TT.MM.JJJJ] | P1 | | | | | | | | |

KI-Antworten schwanken auch bei gleichem Prompt. Einzelwerte deshalb nicht überbewerten und auf den **Trend über 3 Monate** achten.

### 6.4 Wartung (fester Rhythmus)

| Rhythmus | Aufgabe |
|---|---|
| monatlich | Testprotokoll; `curl -sI https://ps-sattlerei.shop/llms.txt` (200, text/markdown); Stichprobe Bot-Test (1.2) |
| bei jeder Produkt-/URL-/Preisänderung | `llms.txt` und betroffene FAQ-Antworten anpassen |
| vierteljährlich | `llms.txt` vollständig gegen Sitemap prüfen (alle Links 200?); Verzeichniseinträge (NAP) stichprobenartig prüfen; Liste der KI-User-Agents aktualisieren |
| bei Theme-Wechsel | `templates/llms.txt.liquid`, Snippets `pss-*` und ggf. `robots.txt.liquid` ins neue Theme übernehmen |

---

## 7. Maßnahmenplan (Reihenfolge)

| # | Maßnahme | Aufwand | Wirkung | Wer |
|---|---|---|---|---|
| 1 | Nullmessung Testprotokoll (6) | 45 min | Basis für Erfolgskontrolle | Inhaber |
| 2 | Footer: Facebook-/YouTube-Link mit `https://` reparieren; FAQ-Doppelungen und `<strong>` entfernen (3.1) | 15 min | mittel | Projektleitung (Theme-Kopie) |
| 3 | `templates/llms.txt.liquid` (2.2) | 30 min | mittel | Projektleitung |
| 4 | Organization/WebSite (3.2) + BreadcrumbList (3.3) in Theme-Kopie, testen, Inhaber veröffentlicht | 1–2 h | mittel–hoch | Projektleitung / Inhaber |
| 5 | Tags setzen + Produkt-JSON-LD mit Versand/Rückgabe (3.4), nach Klärung der Widerrufsfrage | 2 h | mittel (Google-Shopping-Darstellung) | Projektleitung |
| 6 | FAQ-Seite + Kollektions-FAQ (3.5, Abschnitt 4), nach Klärung der [FRAGE]-Stellen | 3 h | **hoch** | Projektleitung / Inhaber |
| 7 | Google-Unternehmensprofil, Bing Places + Webmaster Tools, Apple Business Connect, Gelbe Seiten, Das Örtliche, 11880 (5.2/5.3) | 3 h | **hoch** | Inhaber |
| 8 | YouTube: 3 Videos mit sprechenden Titeln/Beschreibungen (5.5) | laufend | hoch | Inhaber / Content |
| 9 | Foren-Präsenz mit Firmenkonto (5.6) | laufend | mittel | Inhaber |
| 10 | `robots.txt.liquid` (1.3), nur bei Wunsch nach dokumentierter KI-Politik | 30 min | gering | Projektleitung |

---

## 8. Offene Fragen an den Inhaber (gesammelt)

1. **Widerruf Lenkräder:** Sind Standardfarben vorgefertigt (14 Tage Widerruf) oder werden sie nach Bestellung bzw. auf Basis des Kundenlenkrads gefertigt? (3.4)
2. **Lenkrad neu beziehen** als Dienstleistung für das kundeneigene Lenkrad: ja/nein, Preis, Dauer, Einsendung? (4.3)
3. **Fertigungszeit** Lenkräder; was passiert mit dem Serienlenkrad (Austausch/Rücksendung)? (4.17, 3.4)
4. **Spedition europaweit oder nur Deutschland?** (FAQ ↔ Versandseite) Gehen Carbon-Interieur-Sets per Spedition? (3.4, 4.16)
5. **Öffnungszeiten:** Ist Mo–Fr 9–17 Uhr auch Werkstatt-/Abholzeit? Geokoordinaten? (3.2)
6. **Social Media:** Facebook- und YouTube-URL bestätigen; Google-Unternehmensprofil vorhanden/verifiziert? (3.2, 5.2)
7. **Domain ps-sattlerei.com:** zweite Website oder nur Weiterleitung? (5.1)
8. **Basis-Lenkrad neu oder aufbereitet?** (Merchant Center, `itemCondition`)
9. **KI-Training erlauben (Variante A) oder sperren (Variante B)?** (1.3)
10. Pflegeanleitung Alcantara-Set und Carbon/Nappa; Liste Schlüsseltypen; passende Mercedes-Baureihen vor Facelift; HWK/IHK-Mitgliedschaft; relevante Foren/Clubs. (4.12, 4.22, 4.23, 4.25, 5.3, 5.6)
11. Digital Performance Wheel (Schaltblitz-LEDs, digitale Tasten): Gibt es einen eigenen Zulassungshinweis? Der Lenkrad-Hinweis im Snippet `pss-produktsicherheit` greift nur, wenn „Lenkrad“ im Text steht. Für diese Produkte sollte er sinngemäß ebenfalls erscheinen. [Projektleitung/rechtliche Prüfung]
