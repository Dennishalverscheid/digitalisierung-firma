# SEO-Plan ps-sattlerei.shop

**Stand:** 04.11.2026 · **Erstellt für:** PS-Sattlerei GmbH, Bergkamen · **Status:** Entwurf zur Freigabe. Im Shop wurde nichts geändert.

> **Grundsatz:** Das Kernproblem ist die Conversion (0,4 % Warenkorb-Rate, 7 Bestellungen bei 30.416 Sitzungen), nicht der Traffic. SEO soll deshalb vor allem **passende Besucher mit Kaufabsicht** bringen und Vertrauen aufbauen (klare Produkt- und Kollektionsseiten, ehrliche Hinweise, lokale Sichtbarkeit). Mehr Besucher ohne bessere Conversion bringen wenig.

---

## 0. Datenbasis und Einschränkungen

| Quelle | Stand | Genutzt für |
|---|---|---|
| `docs/ps-sattlerei-STATUS.md`, `docs/ps-sattlerei-shop-check.md` | 04.11.2026 | Kennzahlen, bekannte Mängel (2 × H1, Meta-Titel, 0 Alt-Texte, Dubletten) |
| `docs/ps-sattlerei-produktbereinigung.csv` | 04.11.2026 | Titel- und URL-Planung Paket B |
| `backups/shopify/2026-11-04/products.json`, `collections_redirects_themes.json`, `aenderungsprotokoll.md` | 04.11.2026 | SEO-Felder, Handles, Kollektionen, Weiterleitungen |
| **Live-Shop per WebFetch** | **nicht möglich** | Die Domain `ps-sattlerei.shop` ist in der Netzwerkfreigabe dieser Sitzung nicht freigegeben (DNS-Fehler). |

**Folge:** Die Befunde zu Canonicals, strukturierten Daten und dem gerenderten `<title>` beruhen auf dem bekannten Verhalten von Shopify und des Concept-Themes. Sie sind mit **„live prüfen“** markiert. Die Checkliste dafür steht in Abschnitt 2.8.

**Ebenfalls nicht vorhanden:** Daten aus Google Search Console (GSC), Suchvolumina und Rankings. Deshalb enthält dieser Plan **keine Suchvolumina**. Die Prüfung auf Keyword-Kannibalisierung erfolgt vorerst ohne GSC, nur über Titel, H1 und Suchintention. Sobald die GSC verfügbar ist, wird sie mit den Dimensionen Seite + Suchanfrage wiederholt (Abschnitt 6, Schritt 1).

---

## 1. Keyword-Cluster mit Suchintention und Ziel-URL

**Regel:** Für jedes Haupt-Keyword ist genau **eine URL zuständig**. Andere Seiten verlinken auf diese URL, verwenden das Keyword aber nicht im eigenen Title oder H1.

**Suchvolumen:** Für alle Cluster gilt „Volumen per Google Keyword Planner prüfen“. Ergänzend sollte Google Trends (Region Deutschland) genutzt werden, um saisonale Schwankungen zu sehen (z. B. vor der Essen Motor Show oder zum Saisonstart im Frühjahr).

| # | Cluster | Beispiel-Keywords (Varianten) | Suchintention | Zuständige URL | Status der URL | Volumen |
|---|---|---|---|---|---|---|
| 1 | **Marke** | ps sattlerei, ps-sattlerei bergkamen, pss lenkrad | navigational | `/` (Startseite) | vorhanden | Volumen per Google Keyword Planner prüfen |
| 2 | **Lenkrad neu beziehen** (Dienstleistung) | lenkrad neu beziehen lassen, lenkrad neu beledern, lenkrad aufbereiten lassen, lenkrad leder erneuern | transaktional/lokal | **neu:** `/pages/lenkrad-neu-beziehen` | **fehlt**, Leistungsumfang mit Inhaber klären | Volumen per Google Keyword Planner prüfen |
| 2a | Lenkrad beziehen (Information) | lenkrad neu beziehen kosten, lenkrad beziehen leder oder alcantara, lenkrad selbst beziehen | informational | **neu:** Ratgeber-Artikel (Abschnitt 5.3, Thema 1) | fehlt | Volumen per Google Keyword Planner prüfen |
| 3 | **Carbon Lenkrad allgemein** | carbon lenkrad, carbon lenkrad kaufen, forged carbon lenkrad, lenkrad unten abgeflacht | kommerziell | `/collections/lenkrader` („Alle Lenkräder“) | vorhanden, ohne Text | Volumen per Google Keyword Planner prüfen |
| 4 | **Carbon Lenkrad Audi** | carbon lenkrad audi, audi rs lenkrad carbon | kommerziell | `/collections/audi-lenkrader` | vorhanden, ohne Text | Volumen per Google Keyword Planner prüfen |
| 4a | **Carbon Lenkrad Audi RS3** | carbon lenkrad audi rs3, rs3 8v lenkrad, forged carbon lenkrad rs3 | kommerziell/transaktional | Produkt „PSS EVO-X Forged Carbon Lenkrad Iconic Edition … RS3 8V / RS4 / RS5“, **eine Haupt-URL** festlegen (siehe 2.3) | vorhanden, 4 Farbdubletten | Volumen per Google Keyword Planner prüfen |
| 4b | **Carbon Lenkrad Audi RS6 / RS7 C8** | rs6 c8 lenkrad, carbon lenkrad rs6, audi rs7 lenkrad carbon | kommerziell/transaktional | Produkt „PSS EVO-X Carbon Lenkrad Daytona Edition für Audi RS6 / RS7“ (Vorschlag als Haupt-URL; Ipanema, Digital Performance Wheel und Black Badge verlinken als Alternativen) | vorhanden | Volumen per Google Keyword Planner prüfen |
| 4c | Audi R8 / TT RS | r8 lenkrad carbon, tt rs lenkrad carbon | kommerziell | Produkt „PSS EVO-X Carbon Lenkrad Iconic Edition für Audi R8 / TTRS 4S / TTS“ (Haupt-URL ohne Farbe) | vorhanden, Dubletten | Volumen per Google Keyword Planner prüfen |
| 5 | **Carbon Lenkrad BMW M** | carbon lenkrad bmw m3, m4 g82 lenkrad, f80 carbon lenkrad, bmw m lenkrad carbon | kommerziell | `/collections/bmw-lenkrader`; Modellreihen: F-Reihe → GT-R-Produkt, G-Reihe → EVO-X-Produkt | vorhanden | Volumen per Google Keyword Planner prüfen |
| 6 | **Carbon/Leder Lenkrad Mercedes** | carbon lenkrad mercedes, amg lenkrad carbon, mercedes lenkrad facelift carbon | kommerziell | `/collections/mercedes-lenkrader`; „vor Facelift“ / „Facelift ab 2018“ → jeweilige EVO-X-Haupt-URL | vorhanden | Volumen per Google Keyword Planner prüfen |
| 7 | **Alcantara Lenkrad** | alcantara lenkrad, lenkrad alcantara beziehen | kommerziell/Dienstleistung | Abschnitt „Alcantara“ auf `/pages/lenkrad-neu-beziehen` (**keine eigene Seite**, solange es kein Alcantara-Produkt gibt) | fehlt | Volumen per Google Keyword Planner prüfen |
| 7a | Alcantara-Pflege | alcantara reinigen, alcantara lenkrad reinigen, alcantara reiniger | informational → transaktional | Ratgeber-Artikel (Thema 3) → verlinkt auf Produkt „PSS Alcantara Reinigungsset“ | Produkt vorhanden | Volumen per Google Keyword Planner prüfen |
| 8 | **Interieur-Veredelung** | interieur veredelung, auto innenraum veredeln, interieur individualisieren, design edition | kommerziell (hoher Beratungsbedarf) | `/collections/alle-interieur-pakete` | vorhanden, ohne Text | Volumen per Google Keyword Planner prüfen |
| 8a | Interieur nach Modell | rs6 c8 interieur, audi rs6 interieur umbau, g klasse interieur rot, t6.1 interieur | kommerziell | jeweiliges Produkt (Design Edition RS6 C8, G-Klasse W463A, VW T6.1, BMW M3 G-Reihe, RS3 8V) | vorhanden | Volumen per Google Keyword Planner prüfen |
| 9 | **Autosattlerei lokal** | autosattlerei bergkamen, autosattlerei dortmund, autosattler ruhrgebiet, autosattlerei nrw, autosattler in der nähe | lokal/transaktional | **Google-Unternehmensprofil** und **neu:** `/pages/autosattlerei-bergkamen` (Standortseite) | fehlt | Volumen per Google Keyword Planner prüfen |
| 10 | **Schlüsselcover Leder** | schlüsselcover leder, schlüsselhülle leder bmw, autoschlüssel cover mercedes | kommerziell/transaktional | allgemein: `/collections/schlusselcover` („Accessoires“); markenbezogen: `/collections/bmw-accessoires`, `/collections/audi-accessoires`, `/collections/mercedes-accessoires` | vorhanden, ohne Text | Volumen per Google Keyword Planner prüfen |

**Hinweise zu den Clustern**

- **Kein eigenes Seitennetz für Städte.** Einzelseiten wie „Autosattlerei Dortmund“, „Autosattlerei Hamm“ usw. mit fast gleichem Text gelten bei Google als Doorway-Seiten und werden abgewertet. Sinnvoll ist **eine** Standortseite in Bergkamen, die das Einzugsgebiet ehrlich nennt (z. B. „Kunden aus Dortmund, Unna, Hamm und Lünen erreichen uns in ca. [PLATZHALTER: Fahrzeit] Minuten“).
- **Markennamen** (Audi, BMW, Mercedes, VW, RS, M, AMG) nur beschreibend verwenden, z. B. „passend für“ oder „für“ (§ 23 MarkenG). Den bestehenden Markenhinweis auf den Produktseiten beibehalten.
- **Startseite:** Sie soll für den Markennamen und für „Lenkrad- & Interieur-Manufaktur“ ranken, aber **nicht** für „Carbon Lenkrad“. Dieser Begriff gehört zu `/collections/lenkrader`.
- **Offene Frage an den Inhaber:** Bietet die Sattlerei auch klassisches Neubeziehen an, also ein Kundenlenkrad mit Leder oder Alcantara ohne Carbon? Nur dann sind die Cluster 2 und 7 als Dienstleistungsseite sinnvoll. Sonst entfällt die Seite, und die Begriffe werden im Ratgeber behandelt.

---

## 2. Technische SEO-Befunde

### 2.1 H1-Struktur

| Seite | Befund | Maßnahme |
|---|---|---|
| Startseite | **2 × H1** (Shop-Check) | Nur eine H1, z. B. „Lenkrad- und Interieur-Manufaktur aus Bergkamen“. Die zweite Überschrift im Theme-Editor in ein H2 ändern (Abschnitt „Überschrift“/„Rich Text“ → Größe/Tag) oder den Slider-Titel ohne Überschriften-Tag ausgeben. |
| Produktseiten | Der Produkttitel ist vermutlich H1 (Theme). Die Beschreibung beginnt zusätzlich mit einem `<h2>`, das den Titel wiederholt (z. B. „PSS GT-R Carbon Lenkrad – für BMW F-Reihe“). | Kein Fehler. Das erste H2 lieber als Nutzenaussage formulieren, z. B. „Echtcarbon, abgeflachte Unterseite, Original-Elektronik“. |
| Kollektionen | H1 = Kollektionstitel (z. B. „Alle Lenkräder“, „Accessoires“, „Zubehör“). Diese Titel sind schwach. | H1-Vorschläge in Abschnitt 4. |
| Kollektion `leder-schlussel-cover` („Zubehör“) | Die Beschreibung lautet wörtlich `<p>Beschreibung</p>` (Platzhalter ist live). Die Kollektion enthält nur 1 Produkt. | Platzhalter entfernen. Kollektion mit „Accessoires“ zusammenlegen und per 301 weiterleiten. |

### 2.2 Meta-Titel und Meta-Beschreibungen

| Befund | Beleg | Maßnahme |
|---|---|---|
| Der Startseiten-Titel ist lang und nennt die Marke doppelt („PS Sattlerei … – PS-Sattlerei“). | Shop-Check | Wahrscheinliche Ursache: Das Theme hängt „– Shopname“ an, wenn der Titel den Shopnamen nicht **exakt** enthält. „PS Sattlerei“ ohne Bindestrich wird deshalb nicht erkannt. **Live prüfen** in `layout/theme.liquid`. Neuer Titel: „PS-Sattlerei – Lenkrad- & Interieur-Manufaktur Bergkamen“ (56 Zeichen). Neue Beschreibung: „Veredelte Lenkräder aus Carbon, Leder & Alcantara sowie Interieur-Pakete für Audi, BMW, Mercedes & VW – Manufaktur in Bergkamen (NRW).“ (134 Zeichen) |
| 14 von 15 Kollektionen haben keinen SEO-Titel und keine SEO-Beschreibung (`seo.title: null`). Nur „Alle Lenkräder“ hat den Titel „Lenkräder“. | `collections_redirects_themes.json` | Siehe Abschnitt 4 |
| Produkt-SEO-Beschreibungen sind Textbausteine: Viele BMW-Lenkräder haben dieselbe Beschreibung („Carbon Lenkrad Highlights: echtes Carbon, 12‐Uhr‐Markierung …“). Bei RS3-Varianten wurde „Kyalami Green“ in andere Farben kopiert. | `products.json`, STATUS Punkt 6 | Paket B (Abschnitt 3) |
| Der SEO-Titel aus dem Testlauf ist zu lang: „Forged Carbon Lenkrad für Audi RS3 8V, RS4, RS5 – Rot \| PS-Sattlerei“ hat **68 Zeichen**. | Änderungsprotokoll | Kürzen auf „Forged Carbon Lenkrad Audi RS3 8V – Rot \| PS-Sattlerei“ (54 Zeichen). RS4 und RS5 in die Meta-Beschreibung verschieben. |
| Die Meta-Beschreibung aus dem Testlauf (Schlüsselcover Türkis) hat **162 Zeichen**. | Änderungsprotokoll | Kürzen, z. B. „Handgefertigtes Leder-Schlüsselcover für Ihren BMW-Schlüssel in Türkis – auch in Wunschfarbe. Aus der PS-Sattlerei Manufaktur in Bergkamen.“ (≈137 Zeichen) |
| Uneinheitliche Ansprache: Produkttexte duzen („Du greifst hin …“), SEO-Texte und Rechtstexte siezen. | `products.json` | Eine Form festlegen. Empfehlung bei Preisen bis 40.000 €: **Sie**. Die Anpassung kann beim Paket-B-Rollout mitlaufen. |

### 2.3 Duplicate Content durch Farbvarianten-Produkte

**Befund:** Rund 67 aktive Produkte, aber nur etwa 25 eigenständige Modelle. Beispiele:

- 12 Produkte „PSS Leder Schlüsselcover passend für BMW“
- 6 Produkte für Mercedes, 4 für Audi
- je 3–4 Farb-Kopien der Mercedes-, BMW- und RS3-Lenkräder

Die Kopien haben fast identischen Text und dieselben Bilder-Sets. Ihre URLs heißen z. B. `…-copy-copy-copy-copy`. Damit konkurrieren bis zu 12 URLs um dieselbe Suchanfrage: aktive Kannibalisierung. Außerdem sind Kollektionen wie „BMW Accessoires“ mit 12 fast gleichen Kacheln schwer zu überblicken, gerade mobil (75 % der Besucher).

**Zwei Wege. Der Inhaber entscheidet:**

| | Variante A: **Zusammenlegen** (1 Produkt, Farbe als Option) | Variante B: **Eindeutige Einzelprodukte** (aktueller Paket-B-Plan) |
|---|---|---|
| SEO | Stärkste Lösung: 1 URL bündelt alle Signale. Die Farbe wird per `?variant=` angesteuert, der Canonical zeigt auf das Produkt. | Exakte Dubletten verschwinden, aber die Texte bleiben fast gleich (Near-Duplicate). Die Seiten konkurrieren weiter, nur schwächer. |
| Nutzer | 1 Seite mit Farbwahl, übersichtliche Kollektionen | jede Farbe als eigene Kachel, gut für Shopping-Anzeigen je Farbe |
| Aufwand | höher: Varianten neu anlegen, Bilder den Varianten zuordnen, 301 von allen alten URLs | mittel: Titel, URL, SEO, Alt-Texte je Produkt (Vorlage liegt vor) |
| **Empfehlung** | **Schlüsselcover** (22 Produkte → 3 Produkte: Audi, BMW, Mercedes) | **Lenkräder**, wenn sich die Farbversionen sichtbar unterscheiden (eigene Bilder). Dann je Modell eine **Haupt-URL** festlegen, die von den anderen Farben verlinkt wird. |

**Vor dem Rollout zu klären:**

- **Schwarz doppelt:** In der CSV haben zwei Mercedes-Schlüsselcover den Titel „– Schwarz“ (7536785031264 und 7536783949920). Daraus würde die URL `…-schwarz-schwarz` entstehen. Inhaber fragen, welcher Farbton gemeint ist.
- **URL-Schema uneinheitlich:** Im Testlauf wurden kurze URLs verwendet (`/products/pss-leder-schluesselcover-bmw-tuerkis`), in der CSV lange (`…-passend-fuer-bmw-tuerkis`). Eine Form festlegen (Empfehlung: kurz, siehe Abschnitt 3) und die CSV vor dem Rollout anpassen.
- **Ketten- und Fehlweiterleitungen:** Einige bestehende Weiterleitungen zeigen auf Handles, die Paket B umbenennt, z. B.:
  - `…/pss-gt-r-carbon-lenkrad-unten-abgeflacht-passend-fur-bmw-m` → `…-2014-2015-2016-2017-2018`
  - `…daytona-edition-fur-audi-rs6-rs7-copy` → `…daytona-edition-fur-audi-rs6-rs7`

  Nach dem Rollout würden daraus Ketten (A → B → C). Deshalb danach **alle Weiterleitungsziele auf die End-URL setzen**.

  Außerdem führt `…/pss-gt-r-carbon-lenkrad-unten-abgeflacht-fur-bmw-m-copy` (ein GT-R-Handle) auf das **EVO-X**-Lenkrad, ein anderes Modell. Inhaber fragen, ob das gewollt ist.

### 2.4 Canonicals (live prüfen)

Shopify setzt standardmäßig selbstreferenzierende Canonicals. Zu prüfen sind:

1. `/collections/<kollektion>/products/<produkt>` → der Canonical muss auf `/products/<produkt>` zeigen. Zusätzlich prüfen, ob das Concept-Theme in Kollektionen auf diese Pfade verlinkt. Wenn ja, `within: collection` in den Produktkarten entfernen, damit die interne Verlinkung direkt auf die kanonische URL zeigt.
2. Filter- und Sortier-URLs (`?filter.…`, `?sort_by=`) → Canonical ohne Parameter. Die Shopify-`robots.txt` sperrt diese Parameter bereits weitgehend.
3. Paginierung `?page=2` → selbstreferenzierender Canonical, **nicht** auf Seite 1.
4. Nach Paket B: Der Canonical jedes Produkts zeigt auf die neue URL, und die alte `-copy`-URL antwortet mit 301.

### 2.5 Strukturierte Daten (live prüfen)

Prüfung mit dem [Rich Results Test](https://search.google.com/test/rich-results) und dem [Schema Markup Validator](https://validator.schema.org/).

| Typ | Erwartung bei Shopify/Concept | Maßnahme |
|---|---|---|
| **Product** | wird in der Regel vom Theme ausgegeben (`name`, `image`, `offers`, `price`, `availability`) | Prüfen, ob `brand` = **„PS-Sattlerei“** ist und nicht „Audi“ oder „BMW“ (Markenrecht). `sku`/`mpn` ergänzen, sobald SKUs vergeben sind. `shippingDetails` und `hasMerchantReturnPolicy` ergänzen (bei Wunschfarbe: kein Widerrufsrecht). **Kein `aggregateRating`** ohne echte Bewertungen. Erst nach Einbau einer Bewertungs-App mit echten Bewertungen nutzen. |
| **Organization** | oft auf der Startseite vorhanden, aber unvollständig | `name`, `legalName` „PS-Sattlerei GmbH“, `logo`, `url`, `sameAs` (Instagram, Facebook, TikTok, YouTube) ergänzen |
| **LocalBusiness** | fehlt bei Shopify standardmäßig | Als JSON-LD auf der Startseite und der Standortseite ergänzen, Typ `AutomotiveBusiness` (oder `AutoBodyShop`, je nach tatsächlichem Leistungsschwerpunkt). Vorlage siehe unten. |
| **BreadcrumbList** | je nach Theme | auf Produkt- und Kollektionsseiten ergänzen, falls nicht vorhanden |
| **FAQPage** | – | Bringt seit 2023 bei Google für Shops kaum noch Rich Results. FAQ-Inhalte trotzdem als sichtbaren Text pflegen (Nutzen für Besucher und KI-Antworten). |

**Vorlage LocalBusiness** (alle Werte mit dem Impressum abgleichen, Platzhalter ausfüllen):

```json
{
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  "name": "PS-Sattlerei GmbH",
  "url": "https://ps-sattlerei.shop/",
  "logo": "[PLATZHALTER: Logo-URL]",
  "image": "[PLATZHALTER: Foto Werkstatt/Manufaktur]",
  "telephone": "[PLATZHALTER: Telefon wie im Impressum]",
  "email": "[PLATZHALTER: E-Mail wie im Impressum]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[PLATZHALTER: Straße Nr.]",
    "postalCode": "[PLATZHALTER: PLZ]",
    "addressLocality": "Bergkamen",
    "addressRegion": "NRW",
    "addressCountry": "DE"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "[PLATZHALTER]", "longitude": "[PLATZHALTER]" },
  "openingHoursSpecification": "[PLATZHALTER: Öffnungszeiten bzw. Termine nach Vereinbarung]",
  "areaServed": ["Bergkamen", "Kreis Unna", "Dortmund", "Hamm", "Ruhrgebiet"],
  "sameAs": ["[PLATZHALTER: Instagram-URL]", "[PLATZHALTER: Facebook-URL]", "[PLATZHALTER: Google-Unternehmensprofil-URL]"]
}
```

Diese Vorlage enthält **keine** Bewertungen (`aggregateRating`) und **keine** Preisspanne.

### 2.6 Bilder und Alt-Texte

| Befund | Maßnahme |
|---|---|
| **0 Alt-Texte** bei allen Produktbildern (außer den 2 Testprodukten). Auch alle 15 Kollektionsbilder haben `altText: null`. | Alt-Texte im Rollout von Paket B ergänzen. Schema in Abschnitt 3. Das ist auch für Barrierefreiheit (BFSG) relevant. |
| Die Alt-Texte aus dem Testlauf („… – Bild 1/2“) sind wenig aussagekräftig. | Stattdessen die Ansicht beschreiben, z. B. „… – Frontansicht“, „… – Detail 12-Uhr-Markierung“, „… – eingebaut im Fahrzeug“. |
| Dateinamen wie `image_8.jpg`, `image02270.jpg`, `pss_rs6_kategorie.png` | Neue Bilder vor dem Hochladen sprechend benennen (`carbon-lenkrad-audi-rs3-8v-rot-front.jpg`). Bestehende Bilder nicht umbenennen, der Aufwand ist zu hoch. |
| Kategoriebilder als PNG | Shopify liefert über das CDN automatisch WebP/AVIF aus. Trotzdem die Originalgröße prüfen und große Bilder unter ca. 300 KB halten. Für den LCP auf Mobilgeräten **live prüfen** mit PageSpeed Insights (Ziel: LCP < 2,5 s, INP < 200 ms, CLS < 0,1). |
| YouTube-Video (Design Editionen), Google Maps (Kontakt) | Erst nach Einwilligung laden (§ 25 TDDDG, STATUS Punkt 3). Ein Vorschaubild mit Klick-zum-Laden verbessert zusätzlich die Ladezeit. |

### 2.7 Indexierung von „-copy“-URLs und weitere Indexierungsfragen

| Befund | Maßnahme |
|---|---|
| Ca. 45 aktive Produkte haben `-copy`, `-copy-1` … `-copy-copy-copy-copy` im Handle (CSV). Sie stehen in der Sitemap und sind vermutlich indexiert. | **Live prüfen:** `site:ps-sattlerei.shop inurl:copy` und den GSC-Bericht „Seiten“. Lösung über Paket B: neues Handle mit 301 von der alten URL. **Nicht** vorher auf `noindex` setzen, sonst geht die 301-Weitergabe verloren. |
| 12 Entwürfe (u. a. „… (Copy)“) | Entwürfe stehen nicht in der Sitemap. Löschen oder behalten entscheidet der Inhaber (STATUS Punkt 6). |
| Dünne Kollektionen mit nur 1 Produkt: Volkswagen Lenkräder, Mercedes-, BMW- und VW-Interieur-Pakete, Zubehör | Zusammenlegen (z. B. VW/BMW/Mercedes-Interieur in „Alle Interieur Pakete“ mit Markenfilter) und alte URLs per 301 umleiten, **oder** mit eigenem Text ausstatten, sobald es mehr Produkte gibt. |
| Kollektions-Handles ohne Umlaut-Umschreibung (`lenkrader`, `schlusselcover`); das Handle `schlusselcover` heißt im Shop „Accessoires“ | Geringe Wirkung. Nur ändern, wenn ohnehin umgebaut wird, dann mit 301. |
| GSC und Bing Webmaster Tools | **Prüfen**, ob die Domain-Property verifiziert ist und `sitemap.xml` eingereicht wurde. Ohne GSC ist keine Erfolgsmessung möglich. |

### 2.8 Checkliste Live-Prüfung (sobald die Domain freigegeben ist)

- [ ] Startseite: Anzahl H1, gerenderter `<title>`, Meta-Beschreibung, JSON-LD-Typen
- [ ] 3–4 Produktseiten (Lenkrad, Design Edition RS6 C8, Schlüsselcover, Reinigungsset): Canonical, Product-JSON-LD (`brand`!), Alt-Texte, H1
- [ ] `/collections/all`, `/collections/lenkrader`, `/collections/audi-lenkrader`: Canonical, Paginierung, Links mit `/collections/…/products/…`
- [ ] `/sitemap.xml` und die Unter-Sitemaps: Anzahl Produkt-URLs, Anteil `-copy`
- [ ] `robots.txt` unverändert (Shopify-Standard)
- [ ] PageSpeed Insights mobil: Startseite und ein Produkt

---

## 3. Vorlage Paket B: Titel, URL, SEO-Titel, Meta-Beschreibung

### 3.1 Regeln

- **SEO-Titel höchstens 60 Zeichen inklusive „ | PS-Sattlerei“** (15 Zeichen). Für den Inhalt bleiben also etwa 45 Zeichen. Wenn die Marke im Titel steht, hängt das Theme sie nicht noch einmal an (live prüfen, siehe 2.2).
- **Meta-Beschreibung höchstens 155 Zeichen**, mit Nutzen, Unterscheidungsmerkmal (Farbe/Modell) und Handlungsaufforderung.
- **URL:** Kleinbuchstaben, Umlaute umschreiben (ä → ae, ö → oe, ü → ue, ß → ss), **ohne** „passend-fuer“ und Füllwörter, höchstens etwa 8 Wörter. Schema wie im Testlauf (kurz).
- **Pflicht:** Jede alte URL wird per 301 auf die neue umgeleitet. In Shopify beim Ändern des Handles das Häkchen „Weiterleitung erstellen“ gesetzt lassen.
- **Verbotene oder heikle Begriffe (UWG, Zulassung):** „ABE“, „TÜV-geprüft“, „eintragungsfrei“, „StVZO-konform“, „zulassungsfrei“, „legal“, „Original Audi/BMW“, „OEM“, „Nr. 1“, „Bestseller“, „über 2.000 Kunden“ sowie jede Kundenzahl oder Bewertung ohne Beleg. „Handgefertigt“, „Nappaleder“ und „Echtcarbon“ nur verwenden, wenn es auf das jeweilige Produkt zutrifft.
- **Markennamen:** nur „für …“ oder „passend für …“ verwenden.

### 3.2 Schema je Produkttyp

| Produkttyp | Produkttitel (H1) | URL | SEO-Titel (≤ 60) | Meta-Beschreibung (≤ 155) | Alt-Text |
|---|---|---|---|---|---|
| **Lenkrad** | `PSS [Linie] [Material] Lenkrad [Edition] passend für [Marke] [Modelle] – [Farbe]` | `/products/pss-[linie]-[material]-lenkrad-[marke]-[leitmodell]-[farbe]` | `[Material] Lenkrad [Marke] [Leitmodell] – [Farbe] \| PS-Sattlerei` | `[Material] Lenkrad für [Marke] [Modelle] in [Farbe] – veredelt auf Basis des Original-Lenkrads. Optional mit Montage in Bergkamen.` | `[Linie] [Material] Lenkrad für [Marke Modell] in [Farbe] – [Ansicht]` |
| **Interieur-Paket / Design Edition** | `PSS [Edition] passend für [Marke] [Modell]` | `/products/pss-[edition]-[marke]-[modell]` | `[Edition] Interieur für [Marke] [Modell] \| PS-Sattlerei` | `Individuelles Interieur-Paket für den [Marke Modell] aus unserer Manufaktur in Bergkamen. Umfang & Farben nach Absprache – jetzt Beratung anfragen.` | `[Edition] Interieur im [Marke Modell] – [Bereich: Cockpit/Türverkleidung/Sitze]` |
| **Schlüsselcover** | `PSS Leder Schlüsselcover passend für [Marke] – [Farbe]` (Variante A: ohne Farbe) | `/products/pss-leder-schluesselcover-[marke]-[farbe]` | `Leder Schlüsselcover für [Marke] in [Farbe] \| PS-Sattlerei` | `Handgefertigtes Leder-Schlüsselcover für Ihren [Marke]-Schlüssel in [Farbe] – auch in Wunschfarbe. Aus der PS-Sattlerei Manufaktur in Bergkamen.` | `Leder Schlüsselcover für [Marke]-Autoschlüssel in [Farbe] – [Ansicht]` |
| **Interieur-Teil** (Schaltwippen, Display, Lenkradtasten, Schalthebel) | `PSS [Bauteil] passend für [Marke] [Modelle]` | `/products/pss-[bauteil]-[marke]-[leitmodell]` | `[Bauteil] für [Marke] [Leitmodell] \| PS-Sattlerei` | `[Bauteil] für [Marke] [Modelle] – [1 Merkmal aus Produkttext]. Passform vorab per FIN prüfen, optional mit Montage in Bergkamen.` | `[Bauteil] für [Marke Modell] – [Ansicht]` |
| **Pflege** | `PSS [Produkt] – [Nutzen]` | `/products/pss-[produkt]` | `[Produkt] für Auto-Interieur \| PS-Sattlerei` | `[Produkt] aus der Sattlerei-Praxis: [Inhalt/Anwendung laut Hersteller]. Für [Materialien]. [PLATZHALTER: Inhalt/Menge].` | `[Produkt] – [Inhalt/Anwendung]` |

> **Hinweis „Beratung anfragen“:** Diese Handlungsaufforderung nur verwenden, wenn auf der Seite wirklich ein Anfrage-Button vorhanden ist (STATUS Punkt 9). Bis dahin „Details ansehen“.

### 3.3 Drei fertige Beispiele (Zeichen gezählt)

**Beispiel 1: Lenkrad** (Produkt 7543398858848)

| Feld | Wert |
|---|---|
| Titel | PSS EVO-X Forged Carbon Lenkrad Iconic Edition passend für Audi RS3 8V / RS4 / RS5 – Grau |
| URL alt → neu | `/products/pss-evo-x-forged-carbon-lenkrad-iconic-edition-passend-fur-audi-rs3-8v-rs4-rs5-copy-copy-copy-copy` → `/products/pss-evo-x-forged-carbon-lenkrad-audi-rs3-8v-rs4-rs5-grau` (301) |
| SEO-Titel | Forged Carbon Lenkrad Audi RS3 8V – Grau \| PS-Sattlerei **(55 Zeichen)** |
| Meta-Beschreibung | Forged Carbon Lenkrad für Audi RS3 8V, RS4 & RS5 in Grau – veredelt auf Basis des Original-Lenkrads. Optional mit Montage in Bergkamen. **(134 Zeichen)** |
| Alt-Texte | „PSS EVO-X Forged Carbon Lenkrad für Audi RS3 8V in Grau – Frontansicht“ · „… – Detail 12-Uhr-Markierung“ |
| Prüfen | 12-Uhr-Markierung und Akzentfarbe laut Bild; Kyalami-Green-Text in der Beschreibung entfernen, falls er nicht zutrifft |

**Beispiel 2: Design Edition** (Produkt 7564657295456)

| Feld | Wert |
|---|---|
| Titel | PSS Design Edition passend für Audi RS6 C8 (unverändert) |
| URL alt → neu | `/products/pss-design-edition-passend-fur-audi-rs6-c8` → `/products/pss-design-edition-audi-rs6-c8` (301) |
| SEO-Titel | Design Edition Interieur für Audi RS6 C8 \| PS-Sattlerei **(55 Zeichen)** |
| Meta-Beschreibung | Individuelles Interieur-Paket für den Audi RS6 C8 aus unserer Manufaktur in Bergkamen. Umfang & Farben nach Absprache – jetzt Beratung anfragen. **(144 Zeichen)** |
| Alt-Texte | „PSS Design Edition Interieur im Audi RS6 C8 – Cockpit“ · „… – Türverkleidung“ · „… – Lenkrad“ (je nach Bildinhalt) |

**Beispiel 3: Schlüsselcover** (Produkt 7536784506976)

| Feld | Wert |
|---|---|
| Titel | PSS Leder Schlüsselcover passend für Mercedes – Rot |
| URL alt → neu | `/products/lederschlusselcover-fur-mercedes-autoschlussel-copy-2` → `/products/pss-leder-schluesselcover-mercedes-rot` (301) |
| SEO-Titel | Leder Schlüsselcover für Mercedes in Rot \| PS-Sattlerei **(55 Zeichen)** |
| Meta-Beschreibung | Handgefertigtes Leder-Schlüsselcover für Ihren Mercedes-Schlüssel in Rot – auch in Wunschfarbe. Aus der PS-Sattlerei Manufaktur in Bergkamen. **(141 Zeichen)** |
| Alt-Texte | „Leder Schlüsselcover für Mercedes-Autoschlüssel in Rot – Vorderseite“ · „… – mit Schlüssel“ |
| Prüfen | „handgefertigt“ bestätigen; passende Schlüsselgenerationen [PLATZHALTER] im Produkttext nennen |

---

## 4. Kollektionstexte (Entwürfe)

**Platzierung:** Kurzer Einleitungstext (2–3 Sätze) oberhalb der Produkte, der Rest unterhalb. So stehen auf dem Handy zuerst die Produkte. Ob das Concept-Theme einen Bereich unterhalb unterstützt, ist **live zu prüfen**. Sonst den ganzen Text oberhalb einsetzen und mit „Mehr lesen“ einklappen.

**Ansprache:** Sie. **Interne Links** sind als `→ Link` markiert.

### 4.1 Alle Lenkräder (`/collections/lenkrader`)

- **H1 (Kollektionstitel):** Carbon- und Leder-Lenkräder
- **SEO-Titel:** Carbon Lenkräder für Audi, BMW & Mercedes | PS-Sattlerei (56 Zeichen)
- **Meta-Beschreibung:** Veredelte Lenkräder aus Carbon, Leder & Alcantara für Audi, BMW, Mercedes & VW – auf Basis des Original-Lenkrads. Optional mit Montage in Bergkamen. (148 Zeichen)

> Ein Lenkrad halten Sie bei jeder Fahrt in der Hand. Deshalb lohnt sich hier eine Veredelung. In unserer Manufaktur in Bergkamen gestalten wir Original-Lenkräder für Audi, BMW, Mercedes und VW mit Carbon, Forged Carbon, Leder und [PLATZHALTER: Alcantara – bei welchen Modellen verfügbar?] neu. Der Metallkern bleibt original. Airbag, Tasten und Steuergeräte werden vom Serienlenkrad übernommen.
>
> Je nach Modell wählen Sie die Form (z. B. unten abgeflacht), die 12-Uhr-Markierung, die Nahtfarbe und die Zierteile. Sie können eine Standardfarbe wählen oder Ihr Lenkrad in Ihrer Wunschfarbe anfertigen lassen. Die Fertigung dauert [PLATZHALTER: X–Y Wochen]. Auf Wunsch bauen wir das Lenkrad in Bergkamen ein; das übernimmt Personal mit Airbag-Sachkunde. Alternativ läuft die Bestellung per Versand ab: [PLATZHALTER: Ablauf Austauschverfahren/Einsenden des Original-Lenkrads].
>
> Sie sind unsicher, ob das Lenkrad passt? Schicken Sie uns FIN, Teilenummer oder Fotos Ihres Lenkrads. Wir prüfen die Kompatibilität vor der Bestellung.
>
> **Hinweis zur Zulassung:** Für unsere Lenkräder liegt keine ABE und kein Teilegutachten vor. Ob eine Abnahme oder Eintragung nötig ist, klären Sie bitte vorab mit einer Prüforganisation (z. B. TÜV, DEKRA, GTÜ).
>
> Direkt zu den Marken: → Audi Lenkräder · → BMW Lenkräder · → Mercedes Lenkräder · → VW Lenkräder

*(ca. 180 Wörter)*

### 4.2 Audi Lenkräder (`/collections/audi-lenkrader`)

- **H1:** Carbon Lenkräder für Audi
- **SEO-Titel:** Carbon Lenkrad für Audi RS3, RS6 & R8 | PS-Sattlerei (52 Zeichen)
- **Meta-Beschreibung:** Carbon Lenkräder für Audi RS3 8V, RS4, RS5, RS6/RS7 C8, R8 & TT RS – veredelt in Bergkamen, wahlweise mit Montage vor Ort. Modelle & Varianten ansehen. (151 Zeichen)

> Für Audi-RS-Modelle fertigen wir veredelte Lenkräder in unterschiedlichen Formen und Editionen. Grundlage ist immer ein Original-Lenkrad, dessen Metallkern und Elektronik erhalten bleiben.
>
> - **Audi RS3 8V, RS4 und RS5:** EVO-X Forged Carbon Lenkrad, Iconic Edition. Die markante Forged-Carbon-Struktur gibt es in mehreren Akzentfarben. → Produkt
> - **Audi RS6 C8 und RS7 C8 (auch A6/A7 C8):** EVO-X Carbon Lenkrad in der Daytona Edition und der Ipanema Edition, das Digital Performance Wheel und das Black Badge Lenkrad Set. Passend dazu gibt es LED-Carbon-Schaltwippen und digitale Lenkradtasten. → Produkte
> - **Audi R8, TT RS 4S und TTS:** EVO-X Carbon Lenkrad, Iconic Edition. → Produkt
>
> [PLATZHALTER: Weitere Modelle, z. B. RS3 8Y, auf Anfrage?]
>
> Alle Lenkräder erhalten Sie in der gezeigten Ausführung oder als Anfertigung in Ihrer Wunschfarbe. Die Passform hängt von Lenkrad-Generation, Tastenlayout und Ausstattung ab, etwa Lenkradheizung oder Schaltwippen. Bitte prüfen Sie die Passform vor der Bestellung per FIN oder Teilenummer. Wir helfen Ihnen gern dabei. Auf Wunsch bauen wir das Lenkrad direkt in Bergkamen ein.
>
> **Hinweis:** Keine ABE und kein Teilegutachten. Ob eine Abnahme oder Eintragung nötig ist, klären Sie bitte vorab mit TÜV, DEKRA oder GTÜ.
>
> Für Ihr ganzes Cockpit: → Audi Interieur-Pakete

*(ca. 170 Wörter)*

### 4.3 BMW Lenkräder (`/collections/bmw-lenkrader`)

- **H1:** Carbon Lenkräder für BMW M-Modelle
- **SEO-Titel:** Carbon Lenkrad für BMW M2, M3, M4 & M5 | PS-Sattlerei (53 Zeichen)
- **Meta-Beschreibung:** Carbon Lenkräder für BMW M2, M3, M4, M5 & weitere M-Modelle der F- und G-Reihe – veredelt in Bergkamen, optional mit Montage. Passform per FIN prüfen. (149 Zeichen)

> Für BMW-M-Modelle bieten wir zwei Lenkradformen an, je nach Fahrzeuggeneration:
>
> - **GT-R Carbon Lenkrad für die F-Reihe** (Vorfacelift, ca. 2014–2018): unten abgeflacht, oben und unten Echtcarbon, dazwischen tiefgeprägtes Leder. Laut Kompatibilitätsliste passend u. a. für M2 (F87), M3 (F80), M4 (F82/F83), M5 (F10/F90), M6 sowie X5 M (F85) und X6 M (F86). → Produkt
> - **EVO-X Carbon Lenkrad für die G-Reihe** (ab 2018): kräftiger Kranz, unten abgeflacht, mit oder ohne Handerkennung (HOD). Passend u. a. für M2 (G87), M3 (G80/G81), M4 (G82), M5 (G90/G99), M8, X3 M, X5 M und XM. → Produkt
>
> Beide Lenkräder gibt es mit farbiger 12-Uhr-Markierung in mehreren Standardfarben oder als Anfertigung in Ihrer Wunschfarbe. Verlängerte Carbon-Schaltwippen gehören jeweils zum Lieferumfang. Airbag, Tasten und Steuergeräte werden vom Original übernommen. Die Passform hängt von der Ausstattung ab, etwa Lenkradheizung, HOD oder Schaltwippen. Senden Sie uns vor der Bestellung FIN, Teilenummer oder Fotos.
>
> **Hinweis:** Keine ABE und kein Teilegutachten. Ob eine Abnahme oder Eintragung nötig ist, klären Sie bitte vorab mit einer Prüforganisation.
>
> Ganzes Interieur: → BMW Design Edition M3 G-Reihe

*(ca. 175 Wörter. Modelllisten 1:1 aus den Produkttexten übernommen. Vor Veröffentlichung gegenlesen lassen.)*

### 4.4 Mercedes Lenkräder (`/collections/mercedes-lenkrader`)

- **H1:** Carbon- und Leder-Lenkräder für Mercedes
- **SEO-Titel:** Carbon & Leder Lenkrad für Mercedes | PS-Sattlerei (50 Zeichen)
- **Meta-Beschreibung:** Carbon- und Leder-Lenkräder für Mercedes vor und nach Facelift (ab 2018) – veredelt in Bergkamen, in Standard- oder Wunschfarbe. Jetzt ansehen. (143 Zeichen)

> Für Mercedes-Modelle veredeln wir Lenkräder in zwei Generationen: **vor Facelift** und **Facelift ab 2018**. Welche Generation in Ihrem Fahrzeug verbaut ist, erkennen Sie an [PLATZHALTER: Unterscheidungsmerkmal, z. B. Tastenlayout/Touch-Control]. Alternativ prüfen wir das anhand Ihrer FIN.
>
> - **EVO-X Carbon Lenkrad:** sportliche Form mit Carbon-Elementen, für beide Generationen, in Schwarz, Rot, Gelb oder Silber. → Produkte
> - **Classic Carbon Lenkrad (Facelift ab 2018):** klassische Form mit Carbon-Akzenten, u. a. in Rot, Gelb oder Weiß. → Produkt
> - **Leder-Editionen:** z. B. die Iconic Leder Edition „Royal Blue | Orange“ für alle, die es auffällig mögen. → Produkt
>
> Kompatible Baureihen: [PLATZHALTER: Liste der Baureihen/Modelle je Generation].
>
> Der Metallkern und die Original-Elektronik bleiben erhalten. Auf Wunsch übernehmen wir den Einbau in Bergkamen; das macht Personal mit Airbag-Sachkunde.
>
> **Hinweis:** Keine ABE und kein Teilegutachten. Ob eine Abnahme oder Eintragung nötig ist, klären Sie bitte vorab mit TÜV, DEKRA oder GTÜ.
>
> Für das ganze Interieur: → Design Red Classic Edition für die G-Klasse W463A

*(ca. 150 Wörter)*

### 4.5 Alle Interieur Pakete (`/collections/alle-interieur-pakete`)

- **H1:** Interieur-Veredelung & Design Editionen
- **SEO-Titel:** Interieur-Veredelung & Design Editionen | PS-Sattlerei (54 Zeichen)
- **Meta-Beschreibung:** Design Editionen & Interieur-Pakete für Audi RS6/RS3, BMW M3, Mercedes G-Klasse & VW T6.1 – Manufaktur-Veredelung aus Bergkamen. Beratung anfragen. (147 Zeichen)

> Mit einer Design Edition gestalten wir den Innenraum Ihres Fahrzeugs als Gesamtkonzept: Lenkrad, Zierteile und Lederflächen werden in Material und Farbe aufeinander abgestimmt. Wir fertigen das in unserer Manufaktur in Bergkamen, in Handarbeit und nach Ihren Vorgaben.
>
> Aktuelle Editionen und Sets:
>
> - **Audi RS6 C8:** Design Edition, Iconic Manufaktur Edition, Nogaro Heritage Edition, Carbon Interieur Set (auch für RS7, A6 und A7 C8)
> - **Audi RS3 8V** und **Audi RSQ8:** Design Edition bzw. Carbon Interieur Set
> - **BMW M3 G-Reihe:** Design Edition
> - **Mercedes G-Klasse W463A:** Design Red Classic Edition
> - **VW T6.1:** Design Edition
>
> Jedes Paket ist ein individuelles Projekt. Umfang, Materialien und Farben legen wir in einem persönlichen Beratungsgespräch fest, gern auch vor Ort mit Materialmustern. Die Umsetzung dauert in der Regel [PLATZHALTER: X–Y Wochen, Abgleich mit Versandprofil 3–6 Wochen]. Eine Finanzierung ist über [PLATZHALTER: Klarna/Leasing – nur nennen, wenn verfügbar] möglich.
>
> Ihr Modell ist nicht dabei? Fragen Sie uns. [PLATZHALTER: Welche weiteren Modelle sind auf Anfrage möglich?]
>
> → Beratung anfragen [PLATZHALTER: Link auf Anfrageformular, sobald vorhanden]

*(ca. 160 Wörter. „In Handarbeit“ vom Inhaber bestätigen lassen.)*

**Danach (Priorität 2):** Accessoires bzw. Schlüsselcover, Audi Interieur Pakete und die Marken-Accessoires. Die Kollektionen mit nur 1 Produkt zuerst zusammenlegen (2.7).

---

## 5. Lokales SEO und Ratgeber

### 5.1 Google-Unternehmensprofil

| Bereich | Empfehlung |
|---|---|
| Inhaberschaft | Prüfen, ob ein Profil existiert und wer Zugriff hat. Das Profil auf die GmbH verifizieren. |
| Name | Exakt wie im Impressum („PS-Sattlerei GmbH“ oder „PS-Sattlerei“). **Keine Keywords im Namen** (z. B. nicht „PS-Sattlerei – Carbon Lenkrad Dortmund“). Das verstößt gegen die Google-Richtlinien und kann zur Sperrung führen. |
| Kategorien | Hauptkategorie: die passendste aus der Google-Liste, z. B. „Autosattlerei“ oder „Autopolsterei“. Nebenkategorien z. B. „Autozubehörgeschäft“ oder „Autotuning-Werkstatt“. **Die verfügbaren Bezeichnungen im Profil prüfen.** |
| NAP | Name, Adresse und Telefon **identisch** in Profil, Impressum, Shop-Footer, JSON-LD (2.5) und Branchenverzeichnissen |
| Öffnungszeiten | [PLATZHALTER: Öffnungszeiten / „Termine nach Vereinbarung“] einschließlich Feiertage |
| Website-Link | Auf die Startseite oder die Standortseite verlinken, mit UTM-Parametern (`?utm_source=google&utm_medium=organic&utm_campaign=gbp`). So lassen sich die Anfragen aus dem Profil messen (Conversion-Problem!). |
| Leistungen/Produkte | Lenkrad-Veredelung, Lenkrad neu beziehen (falls angeboten), Design Editionen, Schlüsselcover, Montage, jeweils mit Link auf die zuständige Shop-URL aus Abschnitt 1. Preise nur nennen, wenn sie mit dem Shop übereinstimmen. |
| Fotos | Echte Fotos von Werkstatt, Team (nur mit Einwilligung), Vorher-Nachher-Bildern und Kundenfahrzeugen (nur mit Einwilligung, Kennzeichen unkenntlich machen). Regelmäßig neue Fotos ergänzen, z. B. monatlich. |
| Beiträge | Neue Projekte, Messetermine (Essen Motor Show), neue Produkte. Inhalte mit Instagram teilen. |
| Bewertungen | Alle Kunden nach dem Auftrag um eine Bewertung bitten (Link/QR-Code auf der Rechnung oder bei der Übergabe). **Keine Gegenleistung** für Bewertungen, **kein Vorfiltern** (nur zufriedene Kunden fragen), keine gekauften Bewertungen. Das ist nach UWG und den Google-Richtlinien unzulässig. Auf jede Bewertung sachlich antworten, ohne personenbezogene Details. |
| Branchenverzeichnisse | Einheitliche Einträge bei Apple Business Connect, Bing Places, Das Örtliche, Gelbe Seiten, 11880 und ggf. bei der Handwerkskammer Dortmund (falls Mitglied: [PLATZHALTER]). Einträge nur mit echten Daten. |
| Karte auf der Website | Google Maps auf der Kontaktseite **erst nach Einwilligung** laden (STATUS Punkt 3) |

### 5.2 Standortseite `/pages/autosattlerei-bergkamen` (neu)

- **H1:** „Autosattlerei in Bergkamen – Lenkräder & Interieur aus eigener Manufaktur“
- **Inhalt:** Leistungen (mit Links zu den Kollektionen), Ablauf (Beratung → Angebot → Fertigung → Einbau oder Versand), echte Werkstattfotos, Anfahrt mit Adresse, Einzugsgebiet ehrlich formuliert (Dortmund, Unna, Hamm, Lünen, Kamen: [PLATZHALTER: Fahrzeit]), Kontakt- bzw. Terminformular, LocalBusiness-JSON-LD.
- **Wirkung auf die Conversion:** Die Seite schafft Vertrauen bei hochpreisigen Paketen, weil Besucher eine echte Werkstatt sehen.
- **Abgrenzung:** Die Startseite verlinkt auf diese Seite, bewirbt aber nicht selbst „Autosattlerei Dortmund“.

### 5.3 Ratgeber- und Blog-Struktur

**Struktur:** Ein Shopify-Blog „Ratgeber“ unter `/blogs/ratgeber` mit drei Schlagwörtern (Tags): *Lenkrad*, *Interieur*, *Pflege*.

**Jeder Artikel enthält:**
- Autor mit kurzer Info (Rolle in der Sattlerei, Erfahrung: [PLATZHALTER])
- eigene Fotos aus der Werkstatt
- Datum
- 2–3 interne Links zur zuständigen Kollektion oder zum Produkt
- am Ende einen Hinweis auf Beratung bzw. Kontakt

**Artikel und Kollektionen teilen sich die Keywords so auf:** Artikel bedienen die **informationelle** Suchintention, Kollektionen und Produkte die **kaufbezogene**. Ein Artikel verwendet deshalb nie dasselbe Haupt-Keyword im Titel wie eine Kollektion.

| # | Arbeitstitel | Haupt-Keyword (Volumen per Google Keyword Planner prüfen) | Intention | Verlinkt auf |
|---|---|---|---|---|
| 1 | Lenkrad neu beziehen: Leder, Alcantara oder Carbon – was passt zu Ihnen? | lenkrad neu beziehen leder oder alcantara | informational | `/pages/lenkrad-neu-beziehen`, `/collections/lenkrader` |
| 2 | Forged Carbon vs. klassisches Sichtcarbon: Unterschiede in Optik und Herstellung | forged carbon | informational | Audi-RS3-Forged-Produkt, `/collections/audi-lenkrader` |
| 3 | Alcantara-Lenkrad reinigen und pflegen: Anleitung aus der Sattlerei | alcantara lenkrad reinigen | informational → transaktional | Produkt „PSS Alcantara Reinigungsset“ |
| 4 | Carbon-Lenkrad und Zulassung: Was Sie zu ABE, Teilegutachten und Eintragung wissen sollten | carbon lenkrad tüv | informational (Vertrauen) | `/collections/lenkrader`. Sachlich, mit Verweis auf TÜV, DEKRA und GTÜ, **keine Zulassungsversprechen**, Hinweis „keine Rechtsberatung“, Inhalt vorher rechtlich prüfen lassen |
| 5 | Passt das Lenkrad? So prüfen Sie Kompatibilität per FIN und Teilenummer (Audi 8V/C8, BMW F/G, Mercedes Facelift) | lenkrad teilenummer herausfinden | informational (senkt Rückfragen und Fehlkäufe) | alle Marken-Lenkrad-Kollektionen |
| 6 | So entsteht ein veredeltes Lenkrad: Ablauf in unserer Manufaktur, vom Einsenden bis zur Montage | lenkrad veredeln lassen ablauf | kommerziell/Vertrauen (E-E-A-T) | `/collections/lenkrader`, Standortseite |
| 7 | Audi RS6 C8 Interieur individualisieren: Möglichkeiten einer Design Edition (Projektbericht) | rs6 c8 interieur | kommerziell | Design Edition RS6 C8, `/collections/alle-interieur-pakete`. Nur mit Freigabe des Fahrzeughalters |
| 8 | Leder im Auto richtig pflegen: Glattleder, Nappa und Alcantara im Vergleich | autoleder pflegen | informational | Pflegeprodukte, `/collections/schlusselcover` |

**Rhythmus:** 1 Artikel pro Monat ist realistisch. Mit Artikel 4–6 beginnen, weil sie direkt auf Vertrauen und Conversion einzahlen. Jeden Artikel auch als Instagram-Karussell oder Reel verwerten.

---

## 6. Prioritäten nach Aufwand und Wirkung

Aufwand: **S** = unter 2 Std., **M** = 2–8 Std., **L** = mehr als 1 Tag (Schätzung). Wirkung: bezogen auf Sichtbarkeit **und** Conversion.

| Prio | Maßnahme | Aufwand | Wirkung | Voraussetzung / Hinweis |
|---|---|---|---|---|
| 1 | Domain `ps-sattlerei.shop` für die Live-Prüfung freigeben und die Checkliste 2.8 abarbeiten | S | hoch (Grundlage) | Netzwerkfreigabe |
| 2 | Google Search Console prüfen bzw. einrichten, Sitemap einreichen; Bing Webmaster Tools | S | hoch (Messbarkeit) | Zugang Inhaber |
| 3 | Startseite: nur noch eine H1, neuer Meta-Titel und neue Meta-Beschreibung (2.2), Theme-Logik für Shopname prüfen | S | mittel | an der Theme-Kopie; der Inhaber veröffentlicht |
| 4 | Google-Unternehmensprofil vervollständigen, mit Bewertungsprozess (5.1) | S–M | hoch (lokal + Vertrauen) | echte Daten, Fotos |
| 5 | Kannibalisierungsprüfung mit GSC (Seite + Suchanfrage) für die Cluster 3–6 und 10; Haupt-URL je Modell festlegen | M | hoch | Prio 2 |
| 6 | Entscheidung Variante A/B (2.3); offene Punkte klären (Schwarz doppelt, URL-Schema, Weiterleitungsziele) | S | hoch | Inhaber |
| 7 | **Paket-B-Rollout:** Titel, URLs mit 301, SEO-Felder, Alt-Texte nach Vorlage (Abschnitt 3); Schlüsselcover nach Variante A zusammenlegen | L | hoch | Prio 6; vorher Sicherung und Testlauf wie vereinbart |
| 8 | Weiterleitungsketten nach dem Rollout auflösen | S | mittel | nach Prio 7 |
| 9 | Kollektionstexte und SEO-Felder für die 5 Kollektionen (Abschnitt 4), Platzhalter füllen | M | hoch | Fakten vom Inhaber |
| 10 | Kollektionen mit 1 Produkt und „Zubehör“ zusammenlegen, mit 301 | S | mittel | nach Prio 9 |
| 11 | Strukturierte Daten: LocalBusiness/Organization ergänzen, Product prüfen (`brand`, Rückgabe, Versand) | M | mittel | Theme-Kopie |
| 12 | Standortseite Autosattlerei Bergkamen (5.2) | M | mittel–hoch (lokal + Vertrauen) | Fotos, Adresse, Anfrageformular |
| 13 | Seite „Lenkrad neu beziehen“ (Cluster 2 und 7) | M | mittel | nur wenn die Leistung angeboten wird |
| 14 | Ratgeber starten: Artikel 4, 5, 6 zuerst | M je Artikel | mittel (wächst über Monate) | eigene Fotos, Fachwissen des Inhabers |
| 15 | Ansprache Du/Sie vereinheitlichen, Kyalami-Green-Fehler korrigieren | M | mittel (Vertrauen) | kann im Paket-B-Rollout mitlaufen |
| 16 | Ladezeit mobil optimieren (Bildgrößen, YouTube und Maps erst nach Klick laden) | M | mittel | PageSpeed-Messung |
| 17 | Branchenverzeichnisse mit einheitlichen Angaben | M | niedrig–mittel | nach Prio 4 |
| 18 | Kollektions-Handles mit Umlaut-Umschreibung | S | niedrig | nur bei ohnehin anstehendem Umbau |

**Realistische Erwartung:** Technische Korrekturen und das Bereinigen der Dubletten wirken nach etwa 4–12 Wochen in der GSC. Kollektionstexte und Ratgeber brauchen eher 3–6 Monate. Der größere Hebel für Umsatz bleibt die Conversion (Anfrageweg, Vertrauen, Bewertungen). SEO zahlt darauf vor allem über bessere Seiten und die lokale Sichtbarkeit ein.

---

## Offene Angaben (Platzhalter) für den Inhaber

- [ ] Angebot Alcantara: bei welchen Lenkrädern? Klassisches Neubeziehen als Dienstleistung ja/nein?
- [ ] Fertigungszeit Lenkräder und Interieur-Pakete (heute widersprüchlich: 3–5, 4 bzw. 3–6 Wochen)
- [ ] Ablauf Versand/Austauschverfahren (Original-Lenkrad einsenden?)
- [ ] Kompatible Mercedes-Baureihen je Generation; Unterscheidungsmerkmal vor Facelift/Facelift
- [ ] Weitere Modelle auf Anfrage (z. B. Audi RS3 8Y)
- [ ] „Handgefertigt“ / „Nappaleder“ für Schlüsselcover bestätigen; passende Schlüsselgenerationen
- [ ] Adresse, Telefon, Öffnungszeiten, Geo-Koordinaten (wie Impressum); Social-Media-URLs
- [ ] Finanzierungsmöglichkeiten für Pakete
- [ ] Zugang zu GSC und zum Google-Unternehmensprofil
- [ ] Entscheidung Variante A/B für Farbdubletten; Farbton der doppelten „Schwarz“-Schlüsselcover

---

## 7. Live-Prüfung 04.11.2026 (per curl, nach Runde SEO-1)

| Prüfpunkt | Befund (Beleg) | Maßnahme |
|---|---|---|
| Startseite `<title>` | „Online Shop der PS Sattlerei - Hochwertige Auto Individualisierungen – PS-Sattlerei“ (83 Zeichen, Marke doppelt) | Inhaber: Onlineshop → Einstellungen (Präferenzen) → Titel „PS-Sattlerei – Lenkrad- & Interieur-Manufaktur Bergkamen“ |
| Startseite Meta-Beschreibung | „…Autosattlerei in der Nähe von Dortmund, die genau nach deinen Vorstellungen…“ (Du-Form, abgeschnitten) | Ersetzen durch: „Veredelte Lenkräder aus Carbon, Leder & Alcantara sowie Interieur-Pakete für Audi, BMW, Mercedes & VW – Manufaktur in Bergkamen (NRW).“ |
| Startseite H1 | 2 × H1: „PS-Sattlerei“ und „PSS Carbon Interieur Set passend für Audi RS6 C8“ (Abschnitt „Hervorgehobenes Produkt“) | Theme: Produkttitel im Featured-Product-Abschnitt als `h2` ausgeben (an unveröffentlichter Kopie) |
| Startseite JSON-LD | nur `ProductGroup` (aus Featured Product), **kein Organization/LocalBusiness** | LocalBusiness-JSON-LD (Abschnitt 5) ins Theme |
| Startseite Bilder | 34 `<img>`, davon 19 ohne/mit leerem Alt-Text | Alt-Texte für Slider/Bildabschnitte im Theme-Editor |
| Kollektionen | Neue SEO-Titel/-Beschreibungen live, Canonical korrekt (`/collections/…`), 1 × H1, JSON-LD `CollectionPage` | ✅ – H1-Titel ggf. später umbenennen (Abschnitt 4) |
| Produktseiten (Testprodukte) | Titel/Beschreibung neu und live, Canonical ohne Kollektionspfad ✅, 1 × H1 ✅, JSON-LD `ProductGroup` mit `brand: PS-Sattlerei` ✅ + `FAQPage` | FAQ-Fragen enthalten `<strong>`-HTML im Fragetext → im FAQ-Block Formatierung entfernen |
| Sitemap Produkte | 68 Produkt-URLs, davon **48 mit „-copy“** im Handle | Paket-B-Rollout: neue Handles + 301 |
| Sitemap Seiten | nur `/pages/contact` gelistet | Prüfen, ob „Versand & Zahlung“ / „Vertrag widerrufen“ sichtbar sind (Sitemap aktualisiert sich ggf. verzögert) |
| Blog | `/blogs/news` vorhanden, Ratgeber (Abschnitt 5.3) kann dort starten | – |
| robots.txt | Shopify-Standard, Sitemap verlinkt | ✅ |
| Alcantara | Produkttext RS3-Lenkrad: „Alcantara in den Grip-Zonen“, „Handgefertigt in Deutschland“ | Platzhalter „Alcantara“ in 4.1 damit teilweise belegt – Inhaber bestätigen |
