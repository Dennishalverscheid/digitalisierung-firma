# 02 – SEO-Struktur ps-sattlerei.shop

**Stand:** 05.11.2026 · **Verfasser:** SEO-Strategie (Agentur-Team) · **Status:** Entwurf zur Freigabe. Im Shop wurde **nichts** geändert.
**Grundlage:** `docs/agentur/BRIEFING.md`, `docs/ps-sattlerei-seo-plan.md` (Abschnitte 1–7), `docs/ps-sattlerei-STATUS.md`, `backups/shopify/2026-11-04/collections_redirects_themes.json`, `backups/shopify/2026-11-04/paket-b-rollout.json`, `docs/ps-sattlerei-produktbereinigung.csv`.

> **Leitgedanke:** Das Hauptproblem ist die Conversion (0,4 % Sitzungen mit Warenkorb, 7 Bestellungen). Diese Struktur soll deshalb vor allem **Orientierung und Vertrauen** schaffen. Besucher sollen schneller das passende Lenkrad bzw. Paket finden, den Anfrageweg erkennen und eine echte Werkstatt sehen. Mehr Seiten sind kein Ziel an sich.

**Einschränkungen dieser Ausarbeitung**

- WebFetch auf `ps-sattlerei.shop` ist in dieser Sitzung gescheitert (DNS, Domain nicht freigegeben). Die lokalen HTML-Dateien unter `scratchpad/live2/` konnte ich ohne Dateiliste nicht öffnen. Hauptmenü, Footer-Menü und Seiten-Handles (z. B. „Versand & Zahlung“, „Vertrag widerrufen“) sind deshalb mit **[live prüfen]** markiert.
- Es gibt keine GSC-Daten. Die Kannibalisierungsprüfung erfolgt deshalb ohne GSC über Titel, H1 und Suchintention (Methode wie im SEO-Plan, Abschnitt 1). Sobald GSC verfügbar ist, mit den Dimensionen Seite + Suchanfrage wiederholen.
- Welches Produkt in „Zubehör“ liegt und wie der Handle des VW-Schalthebels lautet, geht aus den Sicherungen nicht eindeutig hervor: **[live prüfen]**.
- Alle Kollektionen sind **automatische Kollektionen** (Bedingungen). Umsortieren heißt also: die Bedingungen bzw. Tags anpassen, nicht Produkte per Hand zuordnen.

---

## 1. Seitenarchitektur

### 1.1 Bewertung der 15 Kollektionen

| # | Kollektion (Titel heute) | Handle | Produkte | Bewertung | Maßnahme |
|---|---|---|---|---|---|
| 1 | Alle Lenkräder | `lenkrader` | 44 | Hub für „Carbon Lenkrad“ (Cluster 3). Text liegt vor (SEO-Plan 4.1). Titel ist schwach. | **Behalten.** Titel/H1 „Carbon- und Leder-Lenkräder“. Handle bleibt (Umlaut-Handle nur bei ohnehin anstehendem Umbau ändern). Prüfen, ob Schaltwippen, Lenkradtasten und Race Display hier mitlaufen; falls ja, aus der Bedingung nehmen (siehe #16). |
| 2 | Audi Lenkräder | `audi-lenkrader` | 17 | gute Marken-Unterkategorie, Text liegt vor | **Behalten.** H1 „Carbon Lenkräder für Audi“. |
| 3 | BMW Lenkräder | `bmw-lenkrader` | 8 | gut, Text liegt vor | **Behalten.** H1 „Carbon Lenkräder für BMW M-Modelle“. |
| 4 | Mercedes Lenkräder | `mercedes-lenkrader` | 18 | gut, Text liegt vor | **Behalten.** H1 „Carbon- und Leder-Lenkräder für Mercedes“. |
| 5 | Volkswagen Lenkräder | `volkswagen-lenkrader` | 1 | **Falscher Inhalt:** enthält nur einen Schalthebel, kein Lenkrad. Wer „VW Lenkrad“ sucht, wird enttäuscht. Das ist eine dünne Seite mit irreführendem Titel. | **Auflösen**, 301 (siehe 1.3). Den Schalthebel in die neue Kollektion „Interieur-Teile“ (#16) aufnehmen. [FRAGE AN INHABER: Sind VW-Lenkräder (z. B. Golf 7) geplant? Wenn ja, die Kollektion erst wieder anlegen, wenn mindestens 2–3 Lenkräder vorhanden sind.] |
| 6 | Alle Interieur Pakete | `alle-interieur-pakete` | 12 | Hub für „Interieur-Veredelung“ (Cluster 8). Text liegt vor. | **Behalten.** Titel/H1 „Interieur-Pakete & Design Editionen“. Handle bleibt. |
| 7 | Audi Interieur Pakete | `audi-interieur-design-pakete` | 7 | Unterkategorie mit genug Produkten | **Behalten.** Titel/H1 „Interieur-Pakete für Audi“. |
| 8 | BMW Interieur Design Pakete | `bmw-interieur-design-pakete` | 1 | dünn, doppelt zum Produkt | **Auflösen**, 301 auf das Produkt. |
| 9 | Mercedes Interieur Pakete | `mercedes-interieur-pakete` | 1 | dünn, doppelt zum Produkt | **Auflösen**, 301 auf das Produkt. |
| 10 | Volkswagen Interieur Design Pakete | `volkswagen-interieur-design-pakete` | 1 | dünn, doppelt zum Produkt | **Auflösen**, 301 auf das Produkt. |
| 11 | Accessoires | `schlusselcover` | 22 | Hub für „Schlüsselcover Leder“ (Cluster 10). Der Titel „Accessoires“ sagt nicht, was drin ist. | **Behalten und umbenennen:** Titel „Schlüsselcover & Pflege“, H1 „Leder-Schlüsselcover & Alcantara-Pflege“. Das Alcantara-Reinigungsset hier aufnehmen. |
| 12 | Zubehör | `leder-schlussel-cover` | 1 | Platzhaltertext `<p>Beschreibung</p>` ist live, 1 Produkt, Titel und Handle passen nicht zusammen | **Auflösen**, 301 auf #11. |
| 13 | Audi Accessoires | `audi-accessoires` | 4 | Markenfilter von #11, fast gleiche Kacheln | hängt von der Entscheidung **Variante A/B** ab (SEO-Plan 2.3), siehe 1.2 |
| 14 | BMW Accessoires | `bmw-accessoires` | 12 | wie #13, 12 fast gleiche Kacheln | wie #13 |
| 15 | Mercedes Accessoires | `mercedes-accessoires` | 6 | wie #13 | wie #13 |
| **16** | **neu:** Interieur-Teile | `interieur-teile` | ca. 4 | bündelt Einzelteile, die heute verstreut liegen: LED Carbon Schaltwippen, Race Display Beifahrerseite, Digitale Lenkradtasten (alle für Audi RS6/RS7/A6/A7 C8) und VW-Schalthebel | **Neu anlegen** (Priorität 2). Bedingung z. B. Produkttyp = „Interieur-Teil“. Hinweis: Die Lenkradtasten haben heute den Produkttyp „Lenkrad“ (CSV). Das muss korrigiert werden, sonst landen sie weiter in den Lenkrad-Kollektionen. |

**Ergebnis:** 15 → 10 indexierbare Kollektionen (Variante A: 8 + Interieur-Teile = 9; Variante B: 11). Jede Kollektion hat danach mindestens 4 Produkte und eine eindeutige Suchintention.

### 1.2 Schlüsselcover: Abhängigkeit von Variante A/B

| | **Variante A** (empfohlen im SEO-Plan: 22 Produkte → 3 Produkte mit Farbe als Option) | **Variante B** (Einzelprodukte je Farbe bleiben) |
|---|---|---|
| Marken-Kollektionen #13–#15 | enthalten danach je **1 Produkt** → auflösen, 301 auf das jeweilige Sammelprodukt | **behalten** als Unterkategorien von „Schlüsselcover & Pflege“. Je 2–3 Sätze Text, Titel „Leder-Schlüsselcover für BMW“ usw. |
| Zuständige URL für „schlüsselcover leder bmw“ | Produkt `/products/pss-leder-schluesselcover-bmw` | `/collections/bmw-accessoires` |
| Navigation | Untermenü verlinkt direkt die 3 Produkte | Untermenü verlinkt die 3 Marken-Kollektionen |

[FRAGE AN INHABER: Entscheidung Variante A oder B für die Schlüsselcover.] Die Weiterleitungen unten sind für **Variante A** formuliert. Bei Variante B entfallen die Zeilen R6–R8.

### 1.3 Ziel-URLs und 301-Weiterleitungen

**Wichtig für Shopify:** Eine URL-Weiterleitung greift nur, wenn die alte Adresse **nicht mehr existiert** (404). Reihenfolge deshalb:

1. Kollektion im Vertriebskanal „Onlineshop“ **ausblenden** (umkehrbar) oder löschen. Vorher sichern (Titel, Bedingungen, Bild).
2. Weiterleitung unter *Onlineshop → Navigation → URL-Weiterleitungen* anlegen bzw. per CSV importieren.
3. Menüs anpassen (1.4), damit keine internen Links mehr auf die alte URL zeigen.
4. Stichprobe: Die alte URL muss mit **301** auf das Ziel antworten, ohne Kette.

| Nr. | Alte URL | Neue Ziel-URL (301) | Begründung |
|---|---|---|---|
| R1 | `/collections/volkswagen-lenkrader` | `/collections/interieur-teile` | Der einzige Inhalt (Schalthebel) liegt künftig dort. Alternative, falls #16 nicht angelegt wird: `/collections/lenkrader`. |
| R2 | `/collections/bmw-interieur-design-pakete` | `/products/pss-design-edition-passend-fur-bmw-m3-g-reihe` | einziges Produkt, gleiche Suchintention |
| R3 | `/collections/mercedes-interieur-pakete` | `/products/pss-design-red-classic-edition-passend-fur-mercedes-g-klasse-w463a` | einziges Produkt (live prüfen: Ist es wirklich die G-Klasse-Edition und nicht das Lenkrad „Iconic Leder Edition Royal Blue/Orange“, das in der CSV fälschlich den Produkttyp „Interieur-Paket“ trägt?) |
| R4 | `/collections/volkswagen-interieur-design-pakete` | `/products/pss-design-edition-passend-fur-volkswagen-t6-1` | einziges Produkt |
| R5 | `/collections/leder-schlussel-cover` | `/collections/schlusselcover` | „Zubehör“ geht in „Schlüsselcover & Pflege“ auf |
| R6 | `/collections/audi-accessoires` | `/products/pss-leder-schluesselcover-audi` *(nur Variante A; Handle des neuen Sammelprodukts)* | 1 Produkt nach Zusammenlegung |
| R7 | `/collections/bmw-accessoires` | `/products/pss-leder-schluesselcover-bmw` *(nur Variante A)* | wie R6 |
| R8 | `/collections/mercedes-accessoires` | `/products/pss-leder-schluesselcover-mercedes` *(nur Variante A)* | wie R6 |

**Hinweise**

- Die Produkt-Handles in R2–R4 sind laut `paket-b-rollout.json` unverändert (`handle: null`). Falls sie später noch auf `…-fuer-…` oder kurze URLs umgestellt werden, **R2–R4 sofort auf die End-URL anpassen**. Sonst entstehen Ketten.
- Variante A: Zusätzlich brauchen die 22 Farb-Produkt-URLs je eine 301 auf das Sammelprodukt, bevorzugt mit `?variant=<ID>` der jeweiligen Farbe. Diese Liste entsteht beim Zusammenlegen.
- CSV für den Import (Shopify-Format):

```csv
Redirect from,Redirect to
/collections/volkswagen-lenkrader,/collections/interieur-teile
/collections/bmw-interieur-design-pakete,/products/pss-design-edition-passend-fur-bmw-m3-g-reihe
/collections/mercedes-interieur-pakete,/products/pss-design-red-classic-edition-passend-fur-mercedes-g-klasse-w463a
/collections/volkswagen-interieur-design-pakete,/products/pss-design-edition-passend-fur-volkswagen-t6-1
/collections/leder-schlussel-cover,/collections/schlusselcover
```

(R6–R8 erst nach der Entscheidung für Variante A ergänzen.)

### 1.4 Neue Titel und H1 je Kollektion (Zuständigkeit ohne Überschneidung)

| Zuständige URL | Titel/H1 | Haupt-Keyword (gehört nur dieser URL) |
|---|---|---|
| `/` | H1 „Lenkrad- und Interieur-Manufaktur aus Bergkamen“ | Marke, „lenkrad manufaktur“ |
| `/collections/lenkrader` | Carbon- und Leder-Lenkräder | carbon lenkrad |
| `/collections/audi-lenkrader` | Carbon Lenkräder für Audi | carbon lenkrad audi |
| `/collections/bmw-lenkrader` | Carbon Lenkräder für BMW M-Modelle | carbon lenkrad bmw m |
| `/collections/mercedes-lenkrader` | Carbon- und Leder-Lenkräder für Mercedes | carbon lenkrad mercedes |
| `/collections/alle-interieur-pakete` | Interieur-Pakete & Design Editionen | interieur veredelung |
| `/collections/audi-interieur-design-pakete` | Interieur-Pakete für Audi | audi interieur paket |
| `/collections/interieur-teile` (neu) | Interieur-Teile: Schaltwippen, Displays & mehr | carbon schaltwippen (u. a.) |
| `/collections/schlusselcover` | Leder-Schlüsselcover & Alcantara-Pflege | schlüsselcover leder |
| `/pages/lenkrad-neu-beziehen` (neu) | Lenkrad neu beziehen und veredeln lassen | lenkrad neu beziehen |
| `/pages/autosattlerei-bergkamen` (neu) | Autosattlerei in Bergkamen – … | autosattlerei bergkamen |
| `/pages/ueber-uns` (neu) | Über die PS-Sattlerei: Manufaktur und Team | (Marke, E-E-A-T) |

**SEO-Felder für die neue Kollektion `interieur-teile`:**
- SEO-Titel: „Interieur-Teile: Schaltwippen & Displays | PS-Sattlerei“ (55 Zeichen)
- Meta-Beschreibung: „Carbon-Schaltwippen, Race Display und digitale Lenkradtasten für Audi C8 sowie weitere Interieur-Teile – Passform per FIN prüfen, Montage in Bergkamen.“ (151 Zeichen)
- Kurztext (oberhalb): „Hier finden Sie einzelne Bauteile, mit denen Sie Ihr Cockpit gezielt aufwerten, ohne gleich ein ganzes Interieur-Paket zu bestellen. Bitte prüfen Sie die Passform vor der Bestellung per FIN oder Teilenummer; wir helfen gern. Auf Wunsch bauen wir die Teile in Bergkamen ein.“

### 1.5 Menüstruktur

**Hauptmenü** (höchstens 5 Punkte auf oberster Ebene, weil 75 % der Besucher mobil sind):

```
Lenkräder                         → /collections/lenkrader
├─ Für Audi                       → /collections/audi-lenkrader
├─ Für BMW M-Modelle              → /collections/bmw-lenkrader
├─ Für Mercedes                   → /collections/mercedes-lenkrader
├─ Interieur-Teile                → /collections/interieur-teile
└─ Lenkrad neu beziehen           → /pages/lenkrad-neu-beziehen
Interieur-Pakete                  → /collections/alle-interieur-pakete
├─ Für Audi                       → /collections/audi-interieur-design-pakete
├─ BMW M3 G-Reihe                 → /products/pss-design-edition-passend-fur-bmw-m3-g-reihe
├─ Mercedes G-Klasse W463A        → /products/pss-design-red-classic-edition-passend-fur-mercedes-g-klasse-w463a
└─ VW T6.1                        → /products/pss-design-edition-passend-fur-volkswagen-t6-1
Schlüsselcover & Pflege           → /collections/schlusselcover
├─ Für Audi / BMW / Mercedes      → Sammelprodukte (Variante A) bzw. Marken-Kollektionen (Variante B)
└─ Alcantara Reinigungsset        → /products/pss-alcantara-reiniger-set
Manufaktur                        → /pages/ueber-uns
├─ Über uns                       → /pages/ueber-uns
├─ Autosattlerei Bergkamen        → /pages/autosattlerei-bergkamen
└─ Ratgeber                       → /blogs/news
Beratung anfragen                 → /pages/contact   (optisch als Button)
```

**Footer** (drei Spalten plus Kontaktblock):

| Shop | Service | Rechtliches |
|---|---|---|
| Carbon- und Leder-Lenkräder → `/collections/lenkrader` | Lenkrad neu beziehen → `/pages/lenkrad-neu-beziehen` | Impressum → `/policies/legal-notice` |
| Interieur-Pakete → `/collections/alle-interieur-pakete` | Autosattlerei Bergkamen → `/pages/autosattlerei-bergkamen` | Datenschutz → `/policies/privacy-policy` |
| Interieur-Teile → `/collections/interieur-teile` | Über uns → `/pages/ueber-uns` | AGB → `/policies/terms-of-service` |
| Schlüsselcover & Pflege → `/collections/schlusselcover` | Ratgeber → `/blogs/news` | Widerrufsbelehrung → `/policies/refund-policy` |
| | Versand & Zahlung → `/pages/[Handle live prüfen]` | Vertrag widerrufen → `/pages/[Handle live prüfen]` |
| | Kontakt → `/pages/contact` | Cookie-Einstellungen (Link, der das Einwilligungsbanner erneut öffnet) |

**Kontaktblock im Footer (NAP identisch mit Impressum und Google-Unternehmensprofil):** PS-Sattlerei GmbH · Marie-Curie-Straße 12 · 59192 Bergkamen · Tel. 02389 / 9953050 · sales@ps-sattlerei.com · [FRAGE AN INHABER: Öffnungszeiten bzw. „Termine nach Vereinbarung“]

---

## 2. Interne Verlinkung

**Regeln:** Ankertexte beschreiben das Ziel; kein „hier klicken“. Ein Ankertext mit Haupt-Keyword zeigt immer auf die **zuständige** URL aus 1.4. Produktkarten in Kollektionen verlinken auf `/products/…` und nicht auf `/collections/…/products/…` (SEO-Plan 2.4, live prüfen).

### 2.1 Startseite → Kollektionen und Seiten

| Abschnitt der Startseite | Ankertext | Ziel |
|---|---|---|
| Hero, Button 1 | Lenkräder entdecken | `/collections/lenkrader` |
| Hero, Button 2 | Beratung anfragen | `/pages/contact` |
| Kachel Marken | Carbon Lenkräder für Audi | `/collections/audi-lenkrader` |
| Kachel Marken | Carbon Lenkräder für BMW M-Modelle | `/collections/bmw-lenkrader` |
| Kachel Marken | Lenkräder für Mercedes | `/collections/mercedes-lenkrader` |
| Kachel Interieur | Interieur-Pakete & Design Editionen | `/collections/alle-interieur-pakete` |
| Kachel Accessoires | Leder-Schlüsselcover & Pflege | `/collections/schlusselcover` |
| Abschnitt „So läuft es ab“ | Ihr eigenes Lenkrad neu beziehen lassen | `/pages/lenkrad-neu-beziehen` |
| Abschnitt Werkstatt | Unsere Autosattlerei in Bergkamen | `/pages/autosattlerei-bergkamen` |
| Abschnitt Werkstatt | Mehr über die Manufaktur | `/pages/ueber-uns` |
| Abschnitt Zulassungshinweis | Was Sie zu Zulassung und TÜV wissen sollten | Ratgeber-Artikel 1 |

### 2.2 Kollektion ↔ Kollektion

| Quelle | Ankertext | Ziel | Platzierung |
|---|---|---|---|
| `/collections/lenkrader` | Audi Lenkräder · BMW Lenkräder · Mercedes Lenkräder | jeweilige Marken-Kollektion | Textende („Direkt zu den Marken“) |
| `/collections/lenkrader` | Einzelne Interieur-Teile wie Schaltwippen | `/collections/interieur-teile` | Text unten |
| `/collections/lenkrader` | Ihr eigenes Lenkrad neu beziehen lassen | `/pages/lenkrad-neu-beziehen` | Text unten |
| `/collections/audi-lenkrader` | Interieur-Pakete für Audi | `/collections/audi-interieur-design-pakete` | Textende |
| `/collections/audi-lenkrader` | Schaltwippen und Lenkradtasten für Audi C8 | `/collections/interieur-teile` | Abschnitt RS6/RS7 |
| `/collections/audi-lenkrader` | Alle Lenkräder im Überblick | `/collections/lenkrader` | Textende |
| `/collections/bmw-lenkrader` | Design Edition für den BMW M3 G-Reihe | Produkt BMW M3 Design Edition | Textende |
| `/collections/bmw-lenkrader` | Alle Lenkräder im Überblick | `/collections/lenkrader` | Textende |
| `/collections/mercedes-lenkrader` | Design Red Classic Edition für die G-Klasse | Produkt G-Klasse W463A | Textende |
| `/collections/mercedes-lenkrader` | Alle Lenkräder im Überblick | `/collections/lenkrader` | Textende |
| `/collections/alle-interieur-pakete` | Interieur-Pakete für Audi | `/collections/audi-interieur-design-pakete` | Liste |
| `/collections/alle-interieur-pakete` | Passende Lenkräder einzeln | `/collections/lenkrader` | Textende |
| `/collections/audi-interieur-design-pakete` | Carbon Lenkräder für Audi | `/collections/audi-lenkrader` | Textende |
| `/collections/audi-interieur-design-pakete` | Alle Interieur-Pakete & Design Editionen | `/collections/alle-interieur-pakete` | Textende |
| `/collections/interieur-teile` | Komplette Lenkräder für Audi | `/collections/audi-lenkrader` | Textende |
| `/collections/interieur-teile` | Interieur-Pakete & Design Editionen | `/collections/alle-interieur-pakete` | Textende |
| `/collections/schlusselcover` | So reinigen Sie Alcantara richtig | Ratgeber-Artikel 2 | Text unten |
| `/collections/schlusselcover` | Lenkräder aus derselben Manufaktur | `/collections/lenkrader` | Textende |

### 2.3 Produkt → Kollektion

Umsetzung am besten **einmal im Theme** (Textblock bzw. Breadcrumb im Produkt-Template), nicht in jeder Produktbeschreibung.

| Produkttyp | Ankertext | Ziel |
|---|---|---|
| Lenkrad Audi | Weitere Lenkräder für Audi | `/collections/audi-lenkrader` |
| Lenkrad BMW | Weitere Lenkräder für BMW M-Modelle | `/collections/bmw-lenkrader` |
| Lenkrad Mercedes | Weitere Lenkräder für Mercedes | `/collections/mercedes-lenkrader` |
| alle Lenkräder | Hinweis zu Zulassung und TÜV | Ratgeber-Artikel 1 |
| Interieur-Paket | Alle Interieur-Pakete & Design Editionen | `/collections/alle-interieur-pakete` |
| Interieur-Teil | Weitere Interieur-Teile | `/collections/interieur-teile` |
| Schlüsselcover | Alle Leder-Schlüsselcover | `/collections/schlusselcover` |
| Alcantara Reinigungsset | Anleitung: Alcantara-Lenkrad reinigen | Ratgeber-Artikel 2 |
| Alcantara Reinigungsset | Leder-Schlüsselcover & Pflege | `/collections/schlusselcover` |
| alle Produkte (Breadcrumb) | Startseite › [Kollektion] › [Produkt] | zuständige Kollektion |

**Farbvarianten (bei Variante B):** Jede Farbversion verlinkt mit „Diese Ausführung in anderen Farben: Schwarz · Rot · Grau …“ auf die Geschwister und auf die festgelegte **Haupt-URL** des Modells (SEO-Plan 2.3).

### 2.4 Lenkrad → passendes Interieur-Paket

Platzierung: Block „Passend dazu“ unter der Produktbeschreibung. URLs nach Stand `paket-b-rollout.json`.

| Lenkrad (Quelle) | Ankertext | Ziel |
|---|---|---|
| EVO-X Forged Carbon Lenkrad Audi RS3 8V / RS4 / RS5 (alle Farben, z. B. `/products/pss-evo-x-forged-carbon-lenkrad-audi-rs3-8v-rs4-rs5-schwarz`) | Design Edition für den Audi RS3 8V | `/products/pss-design-edition-passend-fur-audi-rs3-8v` |
| EVO-X Carbon Lenkrad Daytona Edition Audi RS6/RS7 (`/products/pss-evo-x-carbon-lenkrad-daytona-edition-fur-audi-rs6-rs7`) | Design Edition für den Audi RS6 C8 | `/products/pss-design-edition-passend-fur-audi-rs6-c8` |
| Daytona Edition (zweiter Link) | Carbon Interieur Set für RS6/RS7 C8 | `/products/pss-carbon-interieur-set-audi-rs6-rs7-a6-a7-c8` |
| EVO-X Carbon Lenkrad Ipanema Edition (`/products/pss-evo-x-carbon-lenkrad-ipanema-edition-audi-rs6-rs7`) und Digital Ipanema (`/products/pss-evo-x-digital-carbon-lenkrad-ipanema-edition-audi-rs6-rs7`) | Iconic Manufaktur Edition für den Audi RS6 C8 | `/products/pss-iconic-edition-passend-fur-audi-rs6-c8` |
| Digital Performance Wheel (`/products/pss-digital-performance-wheel-audi-rs6-c8`) | Nogaro Heritage Edition für den Audi RS6 C8 | `/products/pss-nogaro-heritage-edition-audi-rs6-c8` |
| Black Badge Lenkrad Set (`/products/pss-black-badge-lenkrad-set-audi-rs6-c8`) | Carbon Interieur Set für RS6/RS7 C8 | `/products/pss-carbon-interieur-set-audi-rs6-rs7-a6-a7-c8` |
| alle Audi-C8-Lenkräder (zusätzlich) | LED Carbon Schaltwippen für Audi C8 | `/products/pss-led-carbon-schaltwippen-passend-fur-audi-rs6-c8-rs7-c8-a6-c8-a7-c8` |
| EVO-X Carbon Lenkrad BMW G-Reihe (alle Farben) | Design Edition für den BMW M3 G-Reihe | `/products/pss-design-edition-passend-fur-bmw-m3-g-reihe` |
| GT-R Carbon Lenkrad BMW F-Reihe | Ihr Modell braucht ein ganzes Interieur? Jetzt beraten lassen | `/pages/contact` (kein passendes Paket vorhanden) |
| Mercedes-Lenkräder (EVO-X, Classic, Iconic Leder) | Design Red Classic Edition für die G-Klasse W463A | `/products/pss-design-red-classic-edition-passend-fur-mercedes-g-klasse-w463a` – **nur**, wenn das Lenkrad zur G-Klasse W463A passt. [FRAGE AN INHABER: Passen die Facelift-Lenkräder in die G-Klasse W463A?] Sonst Link auf `/collections/alle-interieur-pakete`. |
| EVO-X Carbon Lenkrad Audi R8 / TT RS | Interieur-Pakete & Design Editionen | `/collections/alle-interieur-pakete` (kein modellgleiches Paket) |

**Rückrichtung (Paket → Lenkrad):** Jede Design Edition verlinkt mit „Das Lenkrad aus diesem Paket auch einzeln“ auf das passende Lenkrad (z. B. Design Edition RS3 8V → Forged-Carbon-Lenkrad RS3, Haupt-URL). [FRAGE AN INHABER: Welches Lenkrad steckt jeweils in den Paketen?]

---

## 3. Neue Landingpages (fertige Texte)

> **Schreibregeln für alle drei Seiten:** Sie-Form. Keine Zahlen, Bewertungen oder Siegel ohne Beleg. Markennamen nur als „für …“. Alle **[FRAGE AN INHABER: …]** vor Veröffentlichung füllen oder den Satz streichen. Seiten in Shopify unter *Onlineshop → Seiten* anlegen; Handle exakt wie angegeben.

### 3a) `/pages/lenkrad-neu-beziehen`

> **Voraussetzung:** [FRAGE AN INHABER: Bieten Sie das Neubeziehen eines Kundenlenkrads als eigene Leistung an, also Leder oder Alcantara auch ohne Carbon? Für welche Marken und Modelle?] Nur bei „Ja“ veröffentlichen. Sonst entfällt die Seite, und die Inhalte wandern in den Ratgeber (SEO-Plan, Cluster 2 und 7).

| Feld | Inhalt |
|---|---|
| **H1** | Lenkrad neu beziehen und veredeln lassen |
| **SEO-Titel** | Lenkrad neu beziehen: Leder & Alcantara \| PS-Sattlerei (54 Zeichen) |
| **Meta-Beschreibung** | Lassen Sie Ihr Lenkrad in Bergkamen neu beziehen: Leder, Alcantara oder Carbon-Elemente. Per Versand oder mit Termin vor Ort – jetzt anfragen. (142 Zeichen) |
| **Handle** | `lenkrad-neu-beziehen` |

*„Carbon“ steht bewusst nicht im SEO-Titel, denn „Carbon Lenkrad“ gehört zu `/collections/lenkrader`.*

---

**Lenkrad neu beziehen und veredeln lassen**

Ihr Lenkrad ist abgegriffen, glänzt an den Griffzonen oder passt nicht mehr zu Ihrem Innenraum? In unserer Manufaktur in Bergkamen beziehen wir Lenkräder neu und veredeln sie mit Leder, Alcantara oder Carbon-Elementen. Grundlage ist das Lenkrad Ihres Fahrzeugs: Der Metallkern bleibt original. Airbag, Tasten und Steuergeräte übernehmen wir vom Serienlenkrad. So bekommen Sie ein Lenkrad, das sich anders anfühlt und anders aussieht und trotzdem zu Ihrem Fahrzeug passt.

**Leder, Alcantara oder Carbon: Welches Material passt zu Ihnen?** *(H2)*

**Leder** *(H3)*
Leder ist robust, pflegeleicht und liegt angenehm in der Hand. Es eignet sich für alle, die viel fahren und ein langlebiges Lenkrad möchten. Wir arbeiten mit [FRAGE AN INHABER: Lederarten, z. B. Glattleder, Nappa, gelocht]. Naht und Nahtbild wählen Sie passend zu Ihrem Innenraum, etwa einfarbig oder als Kontrastnaht.

**Alcantara** *(H3)*
Alcantara® fühlt sich samtig an und bietet viel Grip, auch bei sportlicher Fahrweise. Das Material braucht etwas mehr Pflege als Leder, weil Hautfett die feinen Fasern mit der Zeit verdichtet. Wie Sie es richtig reinigen, lesen Sie in unserem Ratgeber [Alcantara-Lenkrad reinigen und pflegen](/blogs/news/alcantara-lenkrad-reinigen). Das passende [Alcantara Reinigungsset](/products/pss-alcantara-reiniger-set) erhalten Sie in unserem Shop. [FRAGE AN INHABER: Bei welchen Modellen ist ein kompletter Alcantara-Bezug möglich, bei welchen nur Alcantara in den Griffzonen?]

**Carbon und Forged Carbon** *(H3)*
Wer einen deutlich sportlicheren Auftritt möchte, kombiniert das Lenkrad mit Carbon- oder Forged-Carbon-Elementen, zum Beispiel oben und unten am Kranz. Viele dieser Ausführungen finden Sie bereits fertig konfiguriert in unserer Kollektion [Carbon- und Leder-Lenkräder](/collections/lenkrader), sortiert nach Marke: [für Audi](/collections/audi-lenkrader), [für BMW M-Modelle](/collections/bmw-lenkrader) und [für Mercedes](/collections/mercedes-lenkrader).

**Details nach Ihren Wünschen** *(H3)*
Je nach Modell legen Sie zusätzlich fest:
- die Form, zum Beispiel unten abgeflacht,
- eine farbige 12-Uhr-Markierung,
- Nahtfarbe und Nahtbild,
- Akzentfarben, auch als Anfertigung in Ihrer Wunschfarbe.

Welche Optionen für Ihr Lenkrad möglich sind, besprechen wir vor dem Auftrag mit Ihnen.

**So läuft es ab: in vier Schritten zum neuen Lenkrad** *(H2)*

**1. Anfrage** *(H3)*
Schicken Sie uns über das [Kontaktformular](/pages/contact), per E-Mail an sales@ps-sattlerei.com oder telefonisch unter 02389 / 9953050 Fotos Ihres Lenkrads, die Fahrzeug-Identifizierungsnummer (FIN) oder die Teilenummer sowie Ihre Wünsche zu Material und Farbe. Wir prüfen, was bei Ihrem Lenkrad möglich ist, und senden Ihnen ein Angebot. [FRAGE AN INHABER: Preisrahmen oder „ab“-Preis nennen?]

**2. Einsenden oder Termin in Bergkamen** *(H3)*
Sie haben zwei Möglichkeiten:
- **Per Versand:** Sie senden uns Ihr Lenkrad gut verpackt zu. [FRAGE AN INHABER: Lenkrad ohne Airbag-Modul einsenden? Airbag-Module gelten beim Versand als Gefahrgut. Bitte den genauen Ablauf und die Versandadresse festlegen.] Lassen Sie den Ausbau von einer Fachwerkstatt durchführen, denn der Airbag ist ein sicherheitsrelevantes Bauteil.
- **Mit Termin vor Ort:** Sie kommen mit Ihrem Fahrzeug nach Bergkamen. Den Aus- und Einbau übernimmt bei uns Personal mit Airbag-Sachkunde. [FRAGE AN INHABER: Wie lange steht das Fahrzeug bei diesem Weg bei Ihnen? Gibt es ein Austauschverfahren?]

**3. Fertigung in der Manufaktur** *(H3)*
Wir beziehen und veredeln Ihr Lenkrad in unserer Werkstatt in Bergkamen. Die Fertigung dauert in der Regel [FRAGE AN INHABER: X–Y Wochen; heute widersprüchliche Angaben im Shop]. [FRAGE AN INHABER: Senden Sie Zwischenfotos aus der Fertigung?]

**4. Rückversand oder Einbau** *(H3)*
Nach der Fertigung senden wir Ihnen das Lenkrad zurück [FRAGE AN INHABER: Versandart, versichert, Kosten], oder wir bauen es direkt in Bergkamen ein. Wenn Sie den Einbau selbst organisieren, beauftragen Sie bitte eine Fachwerkstatt mit Airbag-Sachkunde.

**Was bleibt original und was sich ändert** *(H2)*

Original bleiben der Metallkern des Lenkrads sowie Airbag, Tasten und Steuergeräte aus Ihrem Serienlenkrad. Neu sind der Bezug, die Oberflächen und je nach Wunsch die Form des Kranzes, Carbon-Elemente, Markierung und Naht. Ob Ihre Ausstattung, etwa Lenkradheizung, Handerkennung oder Schaltwippen, unterstützt wird, prüfen wir vor dem Auftrag anhand Ihrer FIN oder Teilenummer.

**Hinweis zu Zulassung und TÜV** *(H2)*

Für unsere Lenkräder liegen **keine ABE und kein Teilegutachten** vor. Ob eine Abnahme oder Eintragung nötig ist, klären Sie bitte vorab mit einer Prüforganisation wie TÜV, DEKRA, GTÜ oder KÜS. Hintergründe finden Sie in unserem Ratgeber [Carbon-Lenkrad: Was ist bei Zulassung und TÜV zu beachten?](/blogs/news/carbon-lenkrad-zulassung-tuev). Dieser Hinweis ist keine Rechtsberatung.

**Warum PS-Sattlerei?** *(H2)*

- Eigene Manufaktur in Bergkamen (NRW): Sie können vorbeikommen und Ihr Projekt persönlich besprechen.
- Erfahrung mit Lenkrädern für Audi, BMW, Mercedes und VW. [FRAGE AN INHABER: seit wann, wie viele Jahre?]
- Einbau vor Ort durch Personal mit Airbag-Sachkunde.
- Persönliche Beratung vor dem Auftrag, mit Passform-Prüfung per FIN oder Teilenummer.
- Ehrliche Hinweise zur Zulassung statt leerer Versprechen.

Mehr über unser Team lesen Sie unter [Über uns](/pages/ueber-uns), den Weg zu uns unter [Autosattlerei Bergkamen](/pages/autosattlerei-bergkamen).

**Häufige Fragen** *(H2)*

**Was kostet es, ein Lenkrad neu beziehen zu lassen?**
Der Preis hängt vom Lenkrad, vom Material und vom Umfang ab, zum Beispiel ob Carbon-Elemente oder eine neue Form dazukommen. [FRAGE AN INHABER: Preisrahmen oder „ab“-Preis.] Nach Ihrer Anfrage mit Fotos erhalten Sie ein verbindliches Angebot.

**Wie lange muss ich auf mein Fahrzeug bzw. mein Lenkrad verzichten?**
Das hängt vom gewählten Ablauf ab. Die Fertigung dauert [FRAGE AN INHABER: X–Y Wochen]. Bei einem Termin vor Ort steht Ihr Fahrzeug [FRAGE AN INHABER: Dauer] bei uns.

**Kann ich mein Lenkrad selbst ausbauen und einsenden?**
Der Ausbau betrifft den Airbag und sollte deshalb von einer Fachwerkstatt vorgenommen werden. [FRAGE AN INHABER: Lenkrad mit oder ohne Airbag-Modul einsenden?] Alternativ übernehmen wir Aus- und Einbau in Bergkamen.

**Funktionieren Lenkradheizung, Tasten und Schaltwippen danach weiter?**
Tasten, Steuergeräte und Airbag werden vom Serienlenkrad übernommen. Ob Ihre Ausstattung mit der gewünschten Ausführung kombinierbar ist, prüfen wir vor dem Auftrag anhand Ihrer FIN oder Teilenummer.

**Muss das neu bezogene Lenkrad eingetragen werden?**
Für unsere Lenkräder liegen keine ABE und kein Teilegutachten vor. Ob eine Abnahme oder Eintragung nötig ist, entscheidet eine Prüforganisation wie TÜV, DEKRA, GTÜ oder KÜS. Bitte klären Sie das vor dem Auftrag. Diese Auskunft ist keine Rechtsberatung.

**Ihr Lenkrad, Ihre Wünsche: [Jetzt Anfrage senden](/pages/contact)** oder rufen Sie uns an: 02389 / 9953050.

*(ca. 850 Wörter ohne Platzhalter-Hinweise)*

**Interne Links dieser Seite:** `/collections/lenkrader`, `/collections/audi-lenkrader`, `/collections/bmw-lenkrader`, `/collections/mercedes-lenkrader`, `/products/pss-alcantara-reiniger-set`, Ratgeber-Artikel 1 und 2, `/pages/ueber-uns`, `/pages/autosattlerei-bergkamen`, `/pages/contact`.
**Eingehende Links:** Hauptmenü (Lenkräder), Footer (Service), Startseite („So läuft es ab“), `/collections/lenkrader`, Ratgeber-Artikel 2 und 3.

---

### 3b) `/pages/autosattlerei-bergkamen`

| Feld | Inhalt |
|---|---|
| **H1** | Autosattlerei in Bergkamen – Lenkräder & Interieur aus eigener Manufaktur |
| **SEO-Titel** | Autosattlerei Bergkamen: Lenkrad & Interieur \| PS-Sattlerei (59 Zeichen) |
| **Meta-Beschreibung** | Autosattlerei in Bergkamen für Kunden aus dem Ruhrgebiet und NRW: veredelte Lenkräder, Interieur-Pakete, Montage vor Ort. Jetzt Termin anfragen. (144 Zeichen) |
| **Handle** | `autosattlerei-bergkamen` |
| **Strukturierte Daten** | Das LocalBusiness-JSON-LD aus der Theme-Kopie (`AutomotiveBusiness`) auch auf dieser Seite ausgeben, mit derselben `@id` wie auf der Startseite. Kein `aggregateRating`. |

**Keine Doorway-Seiten:** Es gibt nur **diese eine** Standortseite. Keine Einzelseiten wie „Autosattlerei Dortmund“ oder „Autosattlerei Hamm“ mit fast gleichem Text. Die Städte werden hier einmal ehrlich als Einzugsgebiet genannt.

---

**Autosattlerei in Bergkamen – Lenkräder & Interieur aus eigener Manufaktur**

Die PS-Sattlerei ist eine Autosattlerei und Manufaktur in Bergkamen im Kreis Unna. In unserer Werkstatt veredeln wir Lenkräder mit Carbon, Forged Carbon, Leder und Alcantara und gestalten komplette Interieurs für Fahrzeuge von Audi, BMW, Mercedes und VW. Sie können uns Ihr Lenkrad zusenden oder mit Ihrem Fahrzeug direkt zu uns kommen.

**Unsere Leistungen in Bergkamen** *(H2)*

- **Lenkrad-Veredelung:** Lenkräder auf Basis Ihres Original-Lenkrads, mit Carbon-, Leder- oder Alcantara-Elementen. Zu den Modellen: [Carbon- und Leder-Lenkräder](/collections/lenkrader).
- **Lenkrad neu beziehen:** Ihr eigenes Lenkrad in neuem Material und neuer Farbe. Ablauf und Materialien: [Lenkrad neu beziehen](/pages/lenkrad-neu-beziehen).
- **Interieur-Pakete und Design Editionen:** Lenkrad, Zierteile und Lederflächen als abgestimmtes Gesamtkonzept. Beispiele: [Interieur-Pakete & Design Editionen](/collections/alle-interieur-pakete).
- **Einbau vor Ort:** Den Einbau übernimmt bei uns Personal mit Airbag-Sachkunde.
- **Accessoires:** [Leder-Schlüsselcover und Alcantara-Pflege](/collections/schlusselcover).

[FRAGE AN INHABER: Bieten Sie zusätzlich klassische Sattlerarbeiten an, z. B. Sitze neu beziehen, Reparaturen, Dachhimmel, Cabrio-Verdeck? Wenn ja, hier ergänzen. Wenn nein, so lassen.]

**So läuft ein Auftrag bei uns ab** *(H2)*

1. **Beratung:** telefonisch, per E-Mail oder vor Ort in Bergkamen. [FRAGE AN INHABER: Können Kunden Materialmuster vor Ort ansehen?]
2. **Angebot:** Wir prüfen die Passform anhand Ihrer FIN oder Teilenummer und erstellen ein Angebot.
3. **Fertigung:** in unserer Manufaktur. Dauer: [FRAGE AN INHABER: X–Y Wochen].
4. **Einbau oder Versand:** Einbau in Bergkamen oder Rückversand. Für Interieur-Pakete nennen unsere Produkttexte eine Standzeit von 3 Tagen. [FRAGE AN INHABER: Gilt das für alle Pakete? Bitte bestätigen.]

**Anfahrt und Kontakt** *(H2)*

PS-Sattlerei GmbH
Marie-Curie-Straße 12
59192 Bergkamen

Telefon: 02389 / 9953050
E-Mail: sales@ps-sattlerei.com
Öffnungszeiten: [FRAGE AN INHABER: Öffnungszeiten oder „Termine nach Vereinbarung“]

[FRAGE AN INHABER: kurze Anfahrtsbeschreibung, z. B. nächste Autobahnanschlüsse; Parkmöglichkeiten.]
*Technik:* Google Maps erst nach Einwilligung laden (§ 25 TDDDG): Vorschaubild mit dem Button „Karte laden“ und dem Hinweis auf die Datenübertragung an Google.

**Für Kunden aus dem Ruhrgebiet und ganz NRW** *(H2)*

Bergkamen liegt im östlichen Ruhrgebiet. Aus Dortmund, Unna, Kamen, Lünen, Hamm und Werne erreichen Sie uns in etwa [FRAGE AN INHABER: Fahrzeit] Minuten. Auch aus dem übrigen Nordrhein-Westfalen kommen Sie für einen Einbautermin gut zu uns. Wenn die Anfahrt zu weit ist, wählen Sie einfach den Versandweg. Das funktioniert deutschlandweit [FRAGE AN INHABER: auch Österreich/Schweiz?].

**Warum sich der Weg in die Werkstatt lohnt** *(H2)*

- Sie besprechen Material, Farbe und Details persönlich mit den Menschen, die Ihr Lenkrad fertigen.
- Wir prüfen die Passform direkt an Ihrem Fahrzeug.
- Aus- und Einbau übernimmt Personal mit Airbag-Sachkunde.
- Sie sehen vorab Beispiele aus unserer Arbeit. [FRAGE AN INHABER: Gibt es Ausstellungsstücke oder Musterlenkräder vor Ort?]

[Platz für 3–4 echte Fotos: Werkstatt, Arbeitsplatz, fertiges Lenkrad, Außenansicht. Personen nur mit schriftlicher Einwilligung, Kennzeichen unkenntlich.]

**Häufige Fragen** *(H2)*

**Brauche ich einen Termin?**
[FRAGE AN INHABER: Termin erforderlich oder feste Öffnungszeiten?] Damit wir uns Zeit für Sie nehmen können, melden Sie sich am besten vorher unter 02389 / 9953050.

**Kann ich während des Einbaus warten?**
[FRAGE AN INHABER: Wartebereich vorhanden? Wie lange dauert ein Lenkrad-Einbau?]

**Bauen Sie auch Lenkräder ein, die ich bei Ihnen online bestellt habe?**
Ja. Bei vielen Lenkrädern im Shop können Sie die Option „Montage durch PS-Sattlerei“ direkt mitbestellen. Den Termin stimmen wir danach mit Ihnen ab.

**Ich wohne nicht in der Nähe. Geht es auch ohne Besuch?**
Ja, über den Versandweg. Wie das genau abläuft, lesen Sie unter [Lenkrad neu beziehen](/pages/lenkrad-neu-beziehen).

**Für welche Fahrzeuge arbeiten Sie?**
Unser Angebot im Shop umfasst Lenkräder und Interieur-Pakete für Modelle von Audi, BMW, Mercedes und VW. Ist Ihr Modell nicht dabei, fragen Sie uns gern. [FRAGE AN INHABER: Weitere Marken auf Anfrage?]

**[Termin anfragen](/pages/contact)**

*(ca. 620 Wörter)*

**Interne Links dieser Seite:** `/collections/lenkrader`, `/pages/lenkrad-neu-beziehen`, `/collections/alle-interieur-pakete`, `/collections/schlusselcover`, `/pages/contact`.
**Eingehende Links:** Startseite (Werkstatt-Abschnitt), Footer, Hauptmenü (Manufaktur), `/pages/ueber-uns`, Google-Unternehmensprofil (Website-Link mit UTM, SEO-Plan 5.1).

---

### 3c) `/pages/ueber-uns` (Gerüst)

| Feld | Inhalt |
|---|---|
| **H1** | Über die PS-Sattlerei: Manufaktur und Team |
| **SEO-Titel** | Über uns: Manufaktur & Team \| PS-Sattlerei (42 Zeichen) |
| **Meta-Beschreibung** | Lernen Sie die PS-Sattlerei kennen: das Team hinter unseren Lenkrädern und Interieur-Paketen, unsere Werkstatt in Bergkamen und unsere Arbeitsweise. (148 Zeichen) |
| **Handle** | `ueber-uns` |

*„Lenkrad- & Interieur-Manufaktur“ steht bewusst nicht im SEO-Titel, weil die Startseite diesen Begriff besetzt.*
*Datenschutz: Namen und Fotos von Mitarbeitenden nur mit schriftlicher Einwilligung (Art. 6 Abs. 1 lit. a, Art. 7 DSGVO, § 26 BDSG, § 22 KUG). Die Einwilligung ist jederzeit widerrufbar; das Foto wird dann entfernt.*

---

**Über die PS-Sattlerei: Manufaktur und Team**

**Wer wir sind** *(H2)*
Die PS-Sattlerei GmbH ist eine Manufaktur für Lenkräder und Interieurs in Bergkamen (NRW). Gegründet wurde sie [FRAGE AN INHABER: Gründungsjahr] von [FRAGE AN INHABER: Gründer/in, Name und Funktion – nur mit Einwilligung]. [FRAGE AN INHABER: 1–2 Sätze, wie es zur Gründung kam, z. B. eigener Hintergrund in Sattlerei, Motorsport oder Fahrzeugbau.]

**Unsere Geschichte** *(H2)*
[FRAGE AN INHABER: wichtige Stationen, z. B. erste Werkstatt, Umzug an den heutigen Standort, erstes eigenes Lenkrad-Design (PSS GT-R, EVO-X), erste Design Edition, Messeauftritte. Nur Belegbares; keine Kundenzahlen ohne Nachweis.]

**Das Team** *(H2)*
Bei uns arbeiten [FRAGE AN INHABER: Teamgröße] Menschen in [FRAGE AN INHABER: Bereichen, z. B. Sattlerei, Carbon-Fertigung, Lackierung, Montage, Beratung].

[Pro Person, nur mit Einwilligung:]
- **[Vorname Name]**, [Rolle] – [Qualifikation, z. B. Ausbildung oder Meistertitel: FRAGE AN INHABER] – [ein Satz zur Person]

Den Einbau von Lenkrädern übernimmt bei uns Personal mit Airbag-Sachkunde.

**Unsere Werkstatt in Bergkamen** *(H2)*
In unserer Werkstatt an der Marie-Curie-Straße 12 entstehen unsere Lenkräder und Interieur-Pakete. [FRAGE AN INHABER: Welche Arbeitsschritte finden im Haus statt, welche bei Partnern (z. B. Carbon-Teile, Lackierung)? Bitte ehrlich angeben; „handgefertigt“ und „Made in Germany“ nur nach Bestätigung verwenden.]
[Fotos: Werkstatt, Arbeitsplätze, Materialien.]
Den Weg zu uns finden Sie auf der Seite [Autosattlerei Bergkamen](/pages/autosattlerei-bergkamen).

**So arbeiten wir** *(H2)*
- **Auf Basis Ihres Original-Lenkrads:** Der Metallkern bleibt original; Airbag, Tasten und Steuergeräte werden vom Serienlenkrad übernommen.
- **Passform zuerst:** Vor jeder Bestellung prüfen wir die Kompatibilität anhand von FIN, Teilenummer oder Fotos.
- **Ihre Farbe:** Viele Produkte fertigen wir auf Wunsch in Ihrer Wunschfarbe.
- **Ehrliche Hinweise:** Für unsere Lenkräder liegen keine ABE und kein Teilegutachten vor. Das sagen wir offen, bevor Sie bestellen.

**Was wir fertigen** *(H2)*
- [Carbon- und Leder-Lenkräder](/collections/lenkrader)
- [Interieur-Pakete & Design Editionen](/collections/alle-interieur-pakete)
- [Lenkrad neu beziehen](/pages/lenkrad-neu-beziehen)
- [Leder-Schlüsselcover & Alcantara-Pflege](/collections/schlusselcover)

**Wo Sie uns treffen** *(H2)*
[FRAGE AN INHABER: Messen bzw. Events, z. B. Essen Motor Show – nur bestätigte Termine.] Aktuelle Projekte zeigen wir auf [FRAGE AN INHABER: Instagram-/Facebook-/TikTok-URLs].

**Häufige Fragen** *(H2)*

**Seit wann gibt es die PS-Sattlerei?**
[FRAGE AN INHABER: Gründungsjahr.]

**Wie viele Menschen arbeiten bei Ihnen?**
[FRAGE AN INHABER: Teamgröße.]

**Fertigen Sie selbst oder lassen Sie fertigen?**
[FRAGE AN INHABER: ehrliche Antwort, welche Schritte im Haus und welche bei Partnern stattfinden.]

**Kann ich die Werkstatt besuchen?**
[FRAGE AN INHABER: Besuche nach Terminvereinbarung möglich?] Kontakt: 02389 / 9953050 oder sales@ps-sattlerei.com.

**Arbeiten Sie mit den Fahrzeugherstellern zusammen?**
Nein. Die PS-Sattlerei ist ein unabhängiges Unternehmen. Markennamen wie Audi, BMW, Mercedes oder VW nennen wir nur, um zu beschreiben, für welche Fahrzeuge unsere Produkte gedacht sind. [FRAGE AN INHABER: bestätigen.]

**Firmenangaben:** PS-Sattlerei GmbH · Marie-Curie-Straße 12 · 59192 Bergkamen · [Impressum](/policies/legal-notice)

---

## 4. Ratgeber-Redaktionsplan (`/blogs/news`)

**Grundsätze**
- Blog-Handle bleibt `news` (er existiert bereits). Im Theme den Blog-Titel auf „Ratgeber“ setzen und im Hauptmenü als „Ratgeber“ verlinken.
- Artikel bedienen die **informationelle** Suchintention. Kein Artikel nutzt im Titel ein Haupt-Keyword, das einer Kollektion oder Landingpage gehört (siehe 1.4).
- Jeder Artikel hat: Autor mit Rolle in der Sattlerei ([FRAGE AN INHABER: wer schreibt bzw. gibt frei?]), Datum, eigene Werkstattfotos, 2–3 interne Links und am Ende einen Beratungshinweis.
- Rhythmus: 1 Artikel pro Monat. Jeden Artikel als Instagram-Karussell oder Reel weiterverwenden.
- **Suchvolumen:** Liegt nicht vor. Vor dem Schreiben per Google Keyword Planner und Google Trends (Region DE) prüfen.

| # | Titel (H1) | Keyword-Fokus | Suchintention | Gliederung (H2) | Interne Links | Monat |
|---|---|---|---|---|---|---|
| 1 | Carbon-Lenkrad: Was ist bei Zulassung und TÜV zu beachten? | carbon lenkrad tüv | informational (Vertrauen) | **fertig, siehe 4.1** | `/collections/lenkrader`, `/pages/lenkrad-neu-beziehen`, `/pages/contact` | 11/2026 |
| 2 | Alcantara-Lenkrad reinigen und pflegen: Anleitung aus der Sattlerei | alcantara lenkrad reinigen | informational → transaktional | **fertig, siehe 4.2** | `/products/pss-alcantara-reiniger-set`, `/pages/lenkrad-neu-beziehen`, `/collections/schlusselcover` | 11/2026 |
| 3 | Lenkrad abgegriffen oder glänzend? Ursachen und was wirklich hilft | lenkrad abgegriffen | informational (Problem) → Dienstleistung | Woran man Verschleiß erkennt · Leder, Alcantara, Kunststoff: typische Schäden · Reinigen, aufbereiten oder neu beziehen? · Was Lackstifte und Sprays leisten und was nicht · Wann sich ein neuer Bezug lohnt | `/pages/lenkrad-neu-beziehen`, Artikel 2, `/products/pss-alcantara-reiniger-set` | 12/2026 |
| 4 | Leder oder Alcantara am Lenkrad? Vor- und Nachteile im Vergleich | lenkrad leder oder alcantara | informational (Entscheidung) | Griff und Haptik · Haltbarkeit und Pflegeaufwand · Optik und Kombinationen (Griffzonen) · Für wen eignet sich was? · Mischformen mit Carbon | `/pages/lenkrad-neu-beziehen`, `/collections/lenkrader`, Artikel 2 | 01/2027 |
| 5 | Passt das Lenkrad? So prüfen Sie die Kompatibilität per FIN und Teilenummer | lenkrad teilenummer herausfinden | informational (senkt Fehlkäufe) | Warum Generation und Ausstattung entscheiden · FIN und Teilenummer finden · Audi 8V/C8, BMW F/G, Mercedes VFL/FL: worauf achten · Was Sie uns schicken sollten (Fotos-Checkliste) | `/collections/audi-lenkrader`, `/collections/bmw-lenkrader`, `/collections/mercedes-lenkrader`, `/pages/contact` | 02/2027 |
| 6 | Blick in die Werkstatt: So entsteht ein veredeltes Lenkrad | lenkrad veredeln lassen | kommerziell/Vertrauen (E-E-A-T) | Annahme und Prüfung · Demontage (Airbag-Sachkunde) · Bezug, Carbon, Naht · Qualitätskontrolle · Einbau oder Rückversand | `/pages/lenkrad-neu-beziehen`, `/pages/autosattlerei-bergkamen`, `/pages/ueber-uns` | 03/2027 |
| 7 | Forged Carbon oder klassisches Sichtcarbon: Unterschiede in Optik und Herstellung | forged carbon was ist das | informational | Was Carbon ist · Gewebe-Carbon vs. Forged Carbon · Optik, jedes Teil ein Unikat · Pflege und Kratzer · Wo Forged Carbon am Lenkrad eingesetzt wird | Forged-Carbon-Lenkrad RS3 (Haupt-URL), `/collections/audi-lenkrader` | 04/2027 |
| 8 | Abgeflachtes Lenkrad: Vorteile, Nachteile und für wen es sich eignet | abgeflachtes lenkrad vorteile | informational | Herkunft aus dem Motorsport · Beinfreiheit und Ein-/Ausstieg · Lenkgefühl im Alltag · Kombination mit 12-Uhr-Markierung · Welche Modelle wir anbieten | `/collections/lenkrader`, `/collections/bmw-lenkrader` | 05/2027 |
| 9 | Mercedes-Lenkrad: Facelift oder Vor-Facelift? So erkennen Sie den Unterschied | mercedes lenkrad facelift unterschied | informational (Kompatibilität) | Woran Sie die Generation erkennen [FRAGE AN INHABER: Merkmale] · Betroffene Baureihen [FRAGE AN INHABER] · Was das für die Lenkradwahl bedeutet | `/collections/mercedes-lenkrader`, Artikel 5 | 06/2027 |
| 10 | Projektbericht: Ein Audi RS6 C8 bekommt ein neues Interieur | rs6 c8 innenraum individualisieren | kommerziell (Inspiration) | Ausgangslage und Wunsch des Kunden · Materialien und Farben · Umsetzung in Bildern · Ergebnis · Was so ein Projekt umfasst | Design Edition RS6 C8, `/collections/audi-interieur-design-pakete`. **Nur mit schriftlicher Freigabe des Fahrzeughalters**, Kennzeichen unkenntlich. Keyword bewusst nicht „rs6 c8 interieur“, das gehört dem Produkt. | 07/2027 |
| 11 | Autoleder richtig pflegen: Glattleder, Nappa und Alcantara im Vergleich | autoleder pflegen | informational | Ledertypen erkennen · Reinigung je Material · Was Sie vermeiden sollten · Pflege-Rhythmus · Wann der Profi ran sollte | Artikel 2, `/products/pss-alcantara-reiniger-set`, `/collections/schlusselcover` | 08/2027 |
| 12 | Verlängerte Schaltwippen: Was bringen sie im Alltag? | schaltwippen verlängert | informational → kommerziell | Was verlängerte Schaltwippen sind · Bedienung und Ergonomie · Carbon und LED-Varianten · Passform und Einbau | `/collections/interieur-teile`, LED Carbon Schaltwippen Audi C8, `/collections/bmw-lenkrader` | 09/2027 |

**Reihenfolge-Empfehlung:** Artikel 1, 2, 5 und 6 zahlen am direktesten auf Vertrauen und Conversion ein. Sie sollten zuerst erscheinen, auch vor Artikeln mit vermutlich mehr Suchvolumen.

---

### 4.1 Artikel 1 (fertig)

| Feld | Inhalt |
|---|---|
| **H1** | Carbon-Lenkrad: Was ist bei Zulassung und TÜV zu beachten? |
| **URL** | `/blogs/news/carbon-lenkrad-zulassung-tuev` |
| **SEO-Titel** | Carbon-Lenkrad: Zulassung & TÜV – was gilt? \| PS-Sattlerei (58 Zeichen) |
| **Meta-Beschreibung** | Carbon-Lenkrad nachrüsten: Was Sie zu ABE, Teilegutachten, Abnahme und Eintragung wissen sollten – sachlich erklärt, ohne Rechtsberatung. (137 Zeichen) |
| **Freigabe** | **Vor Veröffentlichung von einem Sachverständigen einer Prüforganisation oder einer Anwältin/einem Anwalt für Verkehrsrecht gegenlesen lassen.** Die Normzitate sind allgemein gehalten und auf dem Stand der Erstellung. |

*Begriffsregel: „ABE“ kommt nur als Erklärung bzw. in der Aussage „keine ABE“ vor, nie als Eigenschaft unserer Produkte.*

---

**Carbon-Lenkrad: Was ist bei Zulassung und TÜV zu beachten?**

*Hinweis: Dieser Artikel gibt einen allgemeinen Überblick. Er ist keine Rechtsberatung und ersetzt nicht die Auskunft einer Prüforganisation oder Zulassungsstelle. Stand: [Datum der Veröffentlichung].*

Ein Lenkrad aus Carbon oder mit Carbon-Elementen verändert das Cockpit deutlich: Es sieht sportlicher aus, liegt anders in der Hand und hat oft eine neue Form. Bevor Sie umrüsten, sollten Sie wissen, was das für die Zulassung Ihres Fahrzeugs bedeutet. In diesem Artikel erklären wir die wichtigsten Begriffe und zeigen, wie Sie sinnvoll vorgehen.

**Vorab: Unsere Lenkräder haben keine ABE und kein Teilegutachten** *(H2)*

Wir sagen es gleich am Anfang, weil es für Ihre Entscheidung wichtig ist: Für die Lenkräder der PS-Sattlerei liegen **keine Allgemeine Betriebserlaubnis (ABE) und kein Teilegutachten** vor. Ob und wie das veredelte Lenkrad in Ihrem Fahrzeug abgenommen oder eingetragen werden muss, klärt eine Prüforganisation im Einzelfall. Deshalb empfehlen wir, dieses Gespräch **vor** dem Kauf zu führen.

**Warum das Lenkrad ein sicherheitsrelevantes Bauteil ist** *(H2)*

Das Lenkrad ist mehr als ein Bedienelement. Es überträgt Ihre Lenkbewegungen, trägt den Fahrer-Airbag und beeinflusst, wie gut Sie Instrumente und Warnleuchten sehen. Form, Durchmesser, Griffigkeit und die Befestigung des Airbags spielen deshalb für die Sicherheit eine Rolle. Aus diesem Grund schauen Prüfer bei Änderungen am Lenkrad genau hin.

**Die wichtigsten Begriffe kurz erklärt** *(H2)*

**ABE (Allgemeine Betriebserlaubnis für Fahrzeugteile)** *(H3)*
Eine ABE erteilt das Kraftfahrt-Bundesamt für ein bestimmtes Teil (§ 22 StVZO). Liegt sie vor und werden ihre Auflagen eingehalten, ist in der Regel keine gesonderte Abnahme nötig. Das Dokument führen Sie dann meist im Fahrzeug mit.

**Teilegutachten** *(H3)*
Ein Teilegutachten beschreibt, unter welchen Bedingungen ein Teil verbaut werden darf. Nach dem Einbau prüft ein Sachverständiger den ordnungsgemäßen Anbau (Änderungsabnahme nach § 19 Abs. 3 StVZO). Je nach Gutachten müssen Sie die Änderung anschließend in die Fahrzeugpapiere eintragen lassen.

**Einzelbegutachtung** *(H3)*
Gibt es weder ABE noch Teilegutachten, kann eine Prüforganisation das konkrete Fahrzeug mit dem verbauten Teil einzeln begutachten (§ 21 StVZO). Ob das möglich ist und welche Unterlagen oder Nachweise dafür nötig sind, entscheidet der Prüfer. Eine Einzelbegutachtung kann auch zu dem Ergebnis kommen, dass eine Änderung nicht abgenommen wird.

**Eintragung** *(H3)*
Wenn eine Änderung die Angaben in der Zulassungsbescheinigung betrifft, wird sie nach der Abnahme bei der Zulassungsstelle eingetragen. Ob das bei Ihrem Lenkrad nötig ist, steht im Prüfbericht.

**Was passiert, wenn die Betriebserlaubnis erlischt?** *(H2)*

Nach § 19 Abs. 2 StVZO kann die Betriebserlaubnis eines Fahrzeugs erlöschen, wenn Teile verändert werden und dadurch zum Beispiel eine Gefährdung anderer Verkehrsteilnehmer zu erwarten ist. Mögliche Folgen sind ein Bußgeld, Probleme bei der Hauptuntersuchung oder Schwierigkeiten mit der Versicherung im Schadensfall. Wie eine Änderung im Einzelfall zu bewerten ist, kann nur ein Sachverständiger beurteilen. Verlassen Sie sich deshalb nicht auf mündliche Aussagen wie „das fällt nicht auf“ oder „das muss nicht eingetragen werden“, sondern lassen Sie sich die Bewertung schriftlich geben.

**So gehen Sie Schritt für Schritt vor** *(H2)*

1. **Vor dem Kauf zur Prüforganisation:** Sprechen Sie TÜV, DEKRA, GTÜ oder KÜS in Ihrer Nähe an. Nehmen Sie Fotos und die Produktbeschreibung des gewünschten Lenkrads mit und fragen Sie, ob und wie eine Abnahme möglich ist.
2. **Unterlagen bei uns anfordern:** Wir stellen Ihnen auf Anfrage [FRAGE AN INHABER: welche Unterlagen, z. B. Produktbeschreibung, Materialangaben, Fotos des Aufbaus?] zur Verfügung.
3. **Einbau durch Fachpersonal:** Weil der Airbag betroffen ist, gehört der Einbau in die Hände von geschultem Fachpersonal. In Bergkamen übernimmt das bei uns Personal mit Airbag-Sachkunde.
4. **Prüfung und ggf. Eintragung:** Führen Sie das Fahrzeug nach dem Einbau wie mit dem Prüfer besprochen vor. Ist eine Eintragung nötig, erledigen Sie diese bei Ihrer Zulassungsstelle.
5. **Versicherung informieren:** Fragen Sie bei Ihrer Kfz-Versicherung nach, ob Sie die Änderung melden müssen.

**Was bei unserer Veredelung original bleibt** *(H2)*

Bei unseren Lenkrädern bleibt der Metallkern des Original-Lenkrads erhalten. Airbag, Tasten und Steuergeräte übernehmen wir vom Serienlenkrad. Diese Punkte sind für viele Prüfer eine wichtige Information. Sie ersetzen aber **keine** Prüfung und sind **keine** Aussage darüber, ob eine Abnahme gelingt.

**Häufige Missverständnisse** *(H2)*

- **„Echtcarbon ist automatisch zulässig.“** Nein. Entscheidend ist nicht das Material allein, sondern wie das Lenkrad als Ganzes aufgebaut und verbaut ist.
- **„Wenn der Airbag original ist, ist alles in Ordnung.“** Der Original-Airbag ist wichtig, aber nur ein Teil der Bewertung. Form, Durchmesser und Befestigung spielen ebenfalls eine Rolle.
- **„Bei der Hauptuntersuchung schaut niemand aufs Lenkrad.“** Darauf sollten Sie sich nicht verlassen. Spätestens im Schadensfall kann die Frage wichtig werden.

**Fazit** *(H2)*

Ein Carbon-Lenkrad ist eine schöne Aufwertung für Ihr Fahrzeug. Weil unsere Lenkräder keine ABE und kein Teilegutachten haben, sollten Sie die Frage der Abnahme vor dem Kauf mit einer Prüforganisation klären. Wir unterstützen Sie dabei mit Informationen zum Aufbau Ihres Lenkrads.

Sie möchten sich unsere Modelle ansehen? Hier geht es zu den [Carbon- und Leder-Lenkrädern](/collections/lenkrader). Wenn Sie Ihr eigenes Lenkrad neu gestalten lassen möchten, finden Sie alles Wichtige unter [Lenkrad neu beziehen](/pages/lenkrad-neu-beziehen). Fragen beantworten wir gern persönlich: [Kontakt](/pages/contact) oder 02389 / 9953050.

*(ca. 900 Wörter)*

---

### 4.2 Artikel 2 (fertig)

| Feld | Inhalt |
|---|---|
| **H1** | Alcantara-Lenkrad reinigen und pflegen: Anleitung aus der Sattlerei |
| **URL** | `/blogs/news/alcantara-lenkrad-reinigen` |
| **SEO-Titel** | Alcantara-Lenkrad reinigen: Anleitung \| PS-Sattlerei (52 Zeichen) |
| **Meta-Beschreibung** | Alcantara-Lenkrad speckig oder hart geworden? So reinigen und pflegen Sie Alcantara schonend – Schritt für Schritt, mit Tipps aus der Sattlerei. (144 Zeichen) |
| **Freigabe** | [FRAGE AN INHABER: Inhalt des Reinigungssets und empfohlene Anwendung laut Hersteller; Anleitung fachlich gegenlesen.] |

---

**Alcantara-Lenkrad reinigen und pflegen: Anleitung aus der Sattlerei**

Alcantara fühlt sich samtig an und gibt viel Grip. Genau das macht es am Lenkrad so beliebt. Mit der Zeit verändert sich die Oberfläche aber: Die Griffzonen werden dunkler, glänzen und fühlen sich hart an. Die gute Nachricht: In vielen Fällen lässt sich das mit der richtigen Reinigung deutlich verbessern. Hier zeigen wir Ihnen, wie Sie dabei vorgehen und welche Fehler Sie vermeiden sollten.

**Was ist Alcantara eigentlich?** *(H2)*

Alcantara® ist ein Markenname für ein Mikrofasermaterial aus Polyester und Polyurethan. Es sieht ähnlich aus wie Wildleder, ist aber kein Leder. Die feinen Fasern stehen leicht auf und sorgen für die typische weiche Oberfläche. Werden diese Fasern durch Schmutz und Fett verklebt und flachgedrückt, geht der samtige Griff verloren.

**Warum ein Alcantara-Lenkrad speckig wird** *(H2)*

Am Lenkrad trifft das Material auf Hautfett, Schweiß, Handcreme und Staub. Diese Mischung setzt sich zwischen die Fasern und verklebt sie. Das Ergebnis:
- dunklere, glänzende Stellen an den Griffzonen,
- eine harte, „verfilzte“ Oberfläche,
- weniger Grip.

Je früher Sie reinigen, desto leichter lässt sich das rückgängig machen.

**Was Sie für die Reinigung brauchen** *(H2)*

- einen Reiniger, der für Alcantara geeignet ist, zum Beispiel unser [Alcantara Reinigungsset](/products/pss-alcantara-reiniger-set) [FRAGE AN INHABER: Inhalt des Sets nennen, z. B. Reiniger, Bürste, Tuch],
- eine weiche Bürste,
- zwei saubere, trockene Mikrofasertücher,
- etwas Zeit und Geduld.

**Schritt für Schritt: So reinigen Sie Ihr Alcantara-Lenkrad** *(H2)*

1. **Vorbereiten:** Stellen Sie das Fahrzeug ab und lassen Sie das Lenkrad abkühlen, falls die Lenkradheizung lief oder die Sonne darauf geschienen hat.
2. **Trocken ausbürsten:** Bürsten Sie losen Staub mit der weichen Bürste in leichten Bewegungen aus.
3. **Reiniger aufs Tuch, nicht aufs Lenkrad:** Geben Sie den Reiniger auf das Tuch oder die Bürste, nicht direkt auf das Lenkrad. So vermeiden Sie, dass Flüssigkeit in Nähte, Elektronik oder den Bereich der Airbag-Abdeckung gelangt. [FRAGE AN INHABER: Anwendung laut Hersteller des Reinigers ergänzen, z. B. Sprühstöße, Einwirkzeit.]
4. **Abschnittsweise arbeiten:** Reinigen Sie in kleinen Abschnitten mit wenig Druck. Lösen Sie den Schmutz und nehmen Sie ihn mit einem sauberen Tuch auf. Lieber zweimal sanft als einmal mit Kraft.
5. **Trocknen lassen:** Lassen Sie das Material bei Raumtemperatur vollständig trocknen. Bitte keinen Föhn und keine Lenkradheizung zum Trocknen verwenden.
6. **Aufbürsten:** Bürsten Sie die Fasern nach dem Trocknen leicht auf. So kommt die samtige Oberfläche zurück.

**Tipp:** Testen Sie jeden Reiniger zuerst an einer wenig sichtbaren Stelle, zum Beispiel an der Rückseite des Kranzes.

**Diese Fehler sollten Sie vermeiden** *(H2)*

- **Zu viel Feuchtigkeit:** Das Material darf nie durchnässt werden.
- **Ungeeignete Reiniger:** Kein Allzweck-, Glas- oder Lösungsmittelreiniger und keine unverdünnten alkoholhaltigen Mittel.
- **Lederpflege:** Öle und Wachse für Glattleder verkleben Alcantara.
- **Schmutzradierer und harte Bürsten:** Sie rauen die Fasern auf und beschädigen die Oberfläche.
- **Dampfreiniger:** Hitze und Nässe können dem Material und der Verklebung schaden.

**Wie oft sollten Sie reinigen?** *(H2)*

Das hängt davon ab, wie viel Sie fahren und ob Sie mit oder ohne Handschuhe unterwegs sind. Bewährt hat sich ein regelmäßiges trockenes Ausbürsten und eine gründliche Reinigung, sobald die Griffzonen dunkler werden. [FRAGE AN INHABER: Empfehlung aus der Werkstatt, z. B. „alle paar Wochen ausbürsten, alle paar Monate reinigen“.]

**So beugen Sie vor** *(H2)*

- Fahren Sie möglichst mit sauberen, trockenen Händen.
- Cremen Sie Ihre Hände nicht direkt vor der Fahrt ein.
- Bürsten Sie das Lenkrad zwischendurch trocken aus, das dauert nur eine Minute.

**Wenn Reinigen nicht mehr hilft** *(H2)*

Ist das Material durchgescheuert, eingerissen oder dauerhaft verhärtet, hilft auch die beste Reinigung nicht mehr. Dann ist ein neuer Bezug die bessere Lösung. Wie das bei uns abläuft und welche Materialien zur Wahl stehen, lesen Sie unter [Lenkrad neu beziehen](/pages/lenkrad-neu-beziehen).

**Auch für Sitze und Verkleidungen** *(H2)*

Die gleichen Grundregeln gelten für andere Alcantara-Flächen im Fahrzeug, etwa Sitze, Mittelarmlehne oder Türverkleidungen: wenig Feuchtigkeit, sanfter Druck, gründlich trocknen lassen. Unser [Alcantara Reinigungsset](/products/pss-alcantara-reiniger-set) ist laut Produktbeschreibung für Lenkrad, Sitze und Verkleidungen aus Alcantara gedacht. Weitere Pflegeprodukte und Accessoires finden Sie unter [Schlüsselcover & Pflege](/collections/schlusselcover).

**Fragen zur Pflege?** *(H2)*

Sie sind unsicher, ob Ihr Lenkrad noch zu retten ist? Schicken Sie uns ein Foto über das [Kontaktformular](/pages/contact). Wir sagen Ihnen ehrlich, ob Reinigung reicht oder ein neuer Bezug sinnvoller ist.

*(ca. 900 Wörter)*

---

## 5. Startseite

### 5.1 Meta-Daten (aus SEO-Plan 2.2 / 7 übernommen)

- **SEO-Titel:** PS-Sattlerei – Lenkrad- & Interieur-Manufaktur Bergkamen (56 Zeichen); einzutragen unter *Onlineshop → Einstellungen*
- **Meta-Beschreibung:** Veredelte Lenkräder aus Carbon, Leder & Alcantara sowie Interieur-Pakete für Audi, BMW, Mercedes & VW – Manufaktur in Bergkamen (NRW). (134 Zeichen)
- **Nur eine H1.** Der Produkttitel im Abschnitt „Hervorgehobenes Produkt“ wird zu H2 (Theme-Kopie „SEO-Korrekturen“, STATUS Punkt 1).

### 5.2 Empfohlene Abschnittsreihenfolge mit Texten

| # | Abschnitt (Theme-Block) | Überschrift-Ebene | Text |
|---|---|---|---|
| 1 | **Hero** (Bild oder Video, mobil: Bild; Video nur nach Klick/Einwilligung) | **H1** | **Lenkrad- und Interieur-Manufaktur aus Bergkamen** · Unterzeile: „Wir veredeln Lenkräder mit Carbon, Leder und Alcantara und gestalten Interieurs für Audi, BMW, Mercedes und VW, auf Basis Ihres Original-Lenkrads.“ · Buttons: „Lenkräder entdecken“ → `/collections/lenkrader` · „Beratung anfragen“ → `/pages/contact` |
| 2 | **Vertrauensleiste** (4 Symbole mit Kurztext, direkt unter dem Hero) | – (Fließtext) | „Metallkern, Airbag und Tasten bleiben original“ · „Einbau in Bergkamen durch Personal mit Airbag-Sachkunde“ · „Passform-Check per FIN vor dem Kauf“ · „Auf Wunsch in Ihrer Wunschfarbe gefertigt“ |
| 3 | **Kategorien** (Kachelraster, 2 Spalten mobil) | H2 „Was möchten Sie veredeln?“ | Kacheln: „Carbon Lenkräder für Audi“, „Carbon Lenkräder für BMW M-Modelle“, „Lenkräder für Mercedes“, „Interieur-Pakete & Design Editionen“, „Leder-Schlüsselcover & Pflege“, „Ihr Lenkrad neu beziehen“ |
| 4 | **Nutzenversprechen** (Bild + Text) | H2 „Ihr Lenkrad. Neu gedacht.“ | „Ein Lenkrad halten Sie bei jeder Fahrt in der Hand. Deshalb gestalten wir es so, wie Sie es sich wünschen: mit Carbon oder Forged Carbon, mit Leder oder Alcantara, mit farbiger 12-Uhr-Markierung und auf Wunsch unten abgeflacht. Grundlage ist immer Ihr Original-Lenkrad. Der Metallkern bleibt erhalten, Airbag, Tasten und Steuergeräte übernehmen wir vom Serienlenkrad.“ · Link: „Zu den Lenkrädern“ |
| 5 | **So läuft es ab** (4 Schritte) | H2 „In vier Schritten zu Ihrem Lenkrad“ | 1 „Anfrage: Fotos, FIN oder Teilenummer schicken“ · 2 „Passform-Check und Angebot“ · 3 „Fertigung in unserer Manufaktur in Bergkamen“ · 4 „Einbau vor Ort oder Rückversand“ · Link: „Ablauf im Detail“ → `/pages/lenkrad-neu-beziehen` |
| 6 | **Hervorgehobene Design Edition** (Featured Product, heute RS6 C8 Carbon Interieur Set) | H2 (Produkttitel) | Einleitung: „Für das ganze Cockpit: Bei einer Design Edition stimmen wir Lenkrad, Zierteile und Lederflächen aufeinander ab. Umfang und Farben legen wir gemeinsam mit Ihnen fest.“ · Button „Beratung anfragen“ (bei 10.000–40.000 € statt nur „In den Warenkorb“) · Link „Alle Interieur-Pakete“ |
| 7 | **Werkstatt / Manufaktur** (echte Fotos) | H2 „Aus unserer Werkstatt in Bergkamen“ | „Unsere Lenkräder und Interieurs entstehen in unserer Manufaktur in Bergkamen. Sie können uns besuchen, Ihr Projekt persönlich besprechen und Ihr Fahrzeug direkt bei uns umrüsten lassen. [FRAGE AN INHABER: ein Satz zum Team bzw. zur Erfahrung, z. B. seit wann es die Manufaktur gibt.]“ · Links: „Mehr über uns“ → `/pages/ueber-uns` · „Anfahrt“ → `/pages/autosattlerei-bergkamen` |
| 8 | **Kundenstimmen** (nur wenn echte Bewertungen vorliegen) | H2 „Was unsere Kunden sagen“ | Nur echte Zitate mit Einwilligung und **Quellenangabe** (z. B. „Google-Bewertung vom …“). Darunter der Pflichthinweis nach § 5b Abs. 3 UWG: „[FRAGE AN INHABER: Ob und wie wird sichergestellt, dass die Bewertungen von echten Kunden stammen?]“. Ohne belegte Bewertungen den Abschnitt **weglassen**. Keine Sternedurchschnitte und keine Kundenzahlen ohne Beleg. |
| 9 | **Ehrlicher Zulassungshinweis** (schmaler Textblock) | H2 „Gut zu wissen: Zulassung“ | „Für unsere Lenkräder liegen keine ABE und kein Teilegutachten vor. Ob eine Abnahme oder Eintragung nötig ist, klären Sie bitte vorab mit einer Prüforganisation. Wir helfen Ihnen mit Informationen zu Ihrem Lenkrad.“ · Link: „Was Sie zu Zulassung und TÜV wissen sollten“ → Artikel 1 |
| 10 | **FAQ** (4–5 Fragen, ohne Fettdruck im Fragetext) | H2 „Häufige Fragen“ | z. B. „Passt das Lenkrad in mein Fahrzeug?“ · „Kann ich das Lenkrad in meiner Wunschfarbe bekommen?“ · „Bauen Sie das Lenkrad auch ein?“ · „Wie lange dauert die Fertigung?“ [FRAGE AN INHABER] · „Wie läuft eine Bestellung per Versand ab?“ Keine Dubletten zu den FAQ der Landingpages, sondern kurze Antworten mit Link dorthin. |
| 11 | **Ratgeber** (letzte 3 Artikel) | H2 „Ratgeber aus der Sattlerei“ | automatisch aus `/blogs/news` |
| 12 | **Kontakt-CTA** | H2 „Sprechen Sie mit uns“ | „Sie haben eine Idee für Ihr Fahrzeug? Rufen Sie uns an unter 02389 / 9953050, schreiben Sie an sales@ps-sattlerei.com oder senden Sie uns eine Anfrage mit Fotos. PS-Sattlerei GmbH, Marie-Curie-Straße 12, 59192 Bergkamen.“ · Button „Anfrage senden“ |

**Vertrauenselemente ohne erfundene Zahlen, Übersicht:**
- belegbare Prozessfakten (Metallkern original, Airbag-Sachkunde, FIN-Check, Wunschfarbe),
- echte Werkstatt- und Teamfotos (mit Einwilligung),
- vollständige Kontaktdaten mit Adresse und Telefon,
- offener Zulassungshinweis,
- Zahlungsarten-Symbole (werden automatisch eingeblendet),
- Bewertungen erst, wenn sie echt, belegt und mit Quelle versehen sind (Bewertungs-App oder Google-Profil, SEO-Plan 5.1).

**Nicht verwenden:** „Nr. 1“, „Bestseller“, „über 2.000 Kunden“, Sternedurchschnitte ohne Quelle, „TÜV-geprüft“, „eintragungsfrei“, „OEM“, fremde Fotos.

---

## 6. Umsetzungsreihenfolge (Vorschlag)

| Prio | Maßnahme | Aufwand | Voraussetzung |
|---|---|---|---|
| 1 | Startseite: H1, Abschnittsreihenfolge, Vertrauensleiste, Zulassungshinweis (Abschnitt 5) | M | Theme-Kopie, Freigabe Inhaber |
| 2 | Kollektionen zusammenlegen bzw. umbenennen und 301 R1–R5 (Abschnitt 1.3) | S | Sicherung; Menüs gleichzeitig anpassen |
| 3 | Hauptmenü und Footer neu (1.5) | S | nach Prio 2 |
| 4 | Standortseite Bergkamen (3b) | M | Öffnungszeiten, Fotos, Fahrzeiten |
| 5 | Interne Links Produkt → Kollektion und Lenkrad → Paket im Theme (2.3, 2.4) | M | Theme-Kopie |
| 6 | Ratgeber-Artikel 1 und 2 veröffentlichen | S | Gegenlesen (Artikel 1 fachlich bzw. rechtlich) |
| 7 | Landingpage „Lenkrad neu beziehen“ (3a) | S | nur wenn die Leistung angeboten wird |
| 8 | Über uns (3c) | S | Antworten des Inhabers, Einwilligungen |
| 9 | Variante A/B Schlüsselcover und R6–R8 | M–L | Entscheidung Inhaber |
| 10 | Neue Kollektion Interieur-Teile, Produkttyp der Lenkradtasten korrigieren | S | – |

## 7. Offene Fragen an den Inhaber (gesammelt)

1. Neubeziehen eines Kundenlenkrads (Leder/Alcantara ohne Carbon) als Leistung: ja/nein, für welche Modelle?
2. Ablauf beim Versand: Lenkrad mit oder ohne Airbag-Modul einsenden? Austauschverfahren?
3. Fertigungsdauer Lenkräder und Pakete; gilt „3 Tage Standzeit“ für alle Pakete?
4. Preisrahmen bzw. „ab“-Preise für das Neubeziehen
5. Öffnungszeiten bzw. Termine nach Vereinbarung; Anfahrt, Parken, Wartebereich, Materialmuster vor Ort
6. Gründungsjahr, Teamgröße, Geschichte, Qualifikationen; welche Arbeitsschritte im Haus stattfinden
7. Klassische Sattlerarbeiten (Sitze, Himmel, Verdeck) im Angebot?
8. VW-Lenkräder geplant? Handle des VW-Schalthebels; welches Produkt liegt in „Zubehör“?
9. Variante A/B für die Schlüsselcover
10. Welches Lenkrad steckt in welcher Design Edition? Passen Mercedes-Facelift-Lenkräder in die G-Klasse W463A?
11. Inhalt und Anwendung des Alcantara-Reinigungssets
12. Welche Unterlagen erhalten Kunden für die Prüforganisation?
13. Echte Bewertungen mit Quelle vorhanden? Wie wird ihre Echtheit sichergestellt (§ 5b Abs. 3 UWG)?
14. Social-Media-URLs, Messetermine, Autor bzw. Freigabe für Ratgeber-Artikel
