# SEO-Audit & Maßnahmenplan – PS-Sattlerei (ps-sattlerei.shop)

Stand: 04.11.2026 · Status: **Entwurf zur Freigabe – im Shop wurde nichts geändert.**

---

## 0. Datenbasis und Einschränkungen (bitte zuerst lesen)

| Quelle | Status |
|---|---|
| Produktexport `daten/produkte-uebersicht.json` (79 Produkte, davon 67 aktiv, 12 Entwurf) | vollständig ausgewertet |
| Live-Seiten (Startseite, Kollektionen, Produktseiten, robots.txt, sitemap.xml) per WebFetch | **nicht möglich** – `ps-sattlerei.shop` ist in dieser Sitzung netzwerkseitig gesperrt (DNS-Fehler „ENOTFOUND“). Die Domain muss in den Netzwerkeinstellungen der Sitzung freigegeben werden, dann kann Teil 1 live nachgeprüft werden. |
| Google-Dokumentation (developers.google.com) | ebenfalls gesperrt; Quellen unten sind die offiziellen URLs, der Wortlaut sollte vor einer Weitergabe einmal live gegengelesen werden. |
| Websuche | verfügbar; daraus Standort- und Presseangaben (siehe Quellen) |
| Google Search Console / Analytics / Keyword-Planer | **kein Zugriff** → alle Suchvolumina sind **Einschätzungen**, keine Messwerte. Kannibalisierungs-Prüfung erfolgt nach der „Pre-GSC“-Methode (Titel/H1/Intent), muss mit GSC-Daten bestätigt werden. |

Hinweis zum Datenstand: Im Export tragen erst 2 Produkte die Farbe im Namen (Türkis, Rot). Falls die heutige Umbenennung („… – Rot“) danach erfolgte, ist der Export älter als der Live-Stand. Die Analyse ändert sich dadurch kaum (siehe 1.3).

---

## 1. Technisch & Onpage

### 1.1 Befunde aus den Produktdaten (belegt)

| # | Befund | Umfang (gezählt im Export) | Schwere |
|---|---|---|---|
| 1 | **Farb-Kopien desselben Modells als eigene Produkte** (identischer Text, identischer SEO-Titel, identische Meta-Beschreibung) | 47 der 67 aktiven Produkt-URLs gehören zu 11 Modellgruppen (Details in 1.3) | kritisch |
| 2 | **Alt-Texte fehlen** | 6 von 230 Bildern haben Alt-Text (3 Produkte à 2 Bilder) | hoch |
| 3 | **Kein eigener SEO-Titel** | 35 von 79 Produkten | hoch |
| 4 | **Falsche/kopierte Meta-Beschreibungen**: Der R8-Text „Carbon Lenkrad Highlights: Echtcarbon, rote Nähte … Iconic Edition“ steht auch auf Alcantara-Reinigungsset, LED-Schaltwippen, Race Display, Lenkradtasten, Carbon-Interieur-Set, Black-Badge-Set, Ipanema/Daytona-Lenkrädern, Digital Performance Wheel | 10 aktive Produkte, auf die der Text nicht passt; zusätzlich Zeilenumbruch („\n“) im Text | hoch |
| 5 | **Falsche Preise in Meta-Beschreibungen** (UWG-/PAngV-Risiko, § 5 UWG irreführende Angaben): Nogaro RS6 „ab 19.990 €“ (Shop: ab 24.990 €), VW T6.1 „ab 9.990 €“ (Shop: ab 12.990 €), Iconic RS6 „ab 39.990 €“ (Shop: 39.900 €) | 3 Produkte | **sofort beheben** |
| 6 | **SEO-Titel passt nicht zum Produkt**: Nogaro Heritage Edition trägt SEO-Titel „Iconic Edition“; alle 4 BMW-EVO-X-Kopien (grau/schwarz/rot) heißen „Iconic Deep Blue“; Mercedes-VFL-Titel „Black&Badge AMG“ ohne „passend für“ | 9 Produkte | hoch |
| 7 | **Irreführende/unsaubere URL-Handles**: „-copy“, „-copy-copy-copy-copy“; RSQ8-Set liegt unter `…carbon-paket-passend-fur-audi-rs6-c8`; Digital Performance Wheel unter `…ipanema-edition…-copy`; Lenkradtasten unter `…digital-performance-wheel…-copy`; Black-Badge-Set unter `…carbon-interieur-set…-copy`; Race Display unter `…led-carbon-schaltwippen…-copy`; Ipanema-Lenkrad unter `…iconic-edition-fur-audi-r8…` | > 40 URLs | mittel |
| 8 | **Zwei Produkte mit gleichem Namen „Carbon Interieur Set … Audi RS6 C8“** (7536844963936 und 7547781709920), unterschiedliche Preise → Kannibalisierung + Kundenverwirrung | 2 | hoch |
| 9 | **Lager ≤ 0 bei aktiven Produkten**: 27 von 67 aktiven Produkten haben Bestand 0 (Daytona: −1). Gleichzeitig liegen die „Master“-Entwürfe mit allen Farben (z. B. 7525505138784, 7544602427488, 7525021220960) mit Bestand im Entwurf. Ob die aktiven Seiten kaufbar sind, hängt von „Weiterverkaufen bei 0“ ab → **prüfen**. Ausverkauft = keine Shopping-Einträge, schlechtere Klickrate. | 27 | **kritisch für Umsatz** |
| 10 | **Bild-Dateinamen nicht sprechend** (`IMG_7525.jpg`, `image00011-Photoroom.jpg`, `rs6..jpg`, `rs6iconicshop...jpg`); einige Produkte haben nur **1 Bild** (Lenkradtasten, LED-Schaltwippen, Race Display, Reinigungsset); Bilder mehrfach für verschiedene Produkte verwendet (`rs6shopiconic.jpg`, `ledrs6.jpg`, `rs6carbonshop..jpg`) | > 150 Dateien | mittel |
| 11 | **Sonderzeichen im Namen**: „GT‐R“ mit Unicode-Bindestrich (U+2010) statt normalem „-“ → wird bei Suche nach „GT-R“ ggf. nicht als identisch erkannt | 5 Produkte | niedrig |
| 12 | **Optionsnamen uneinheitlich** („Farbe“, „Color“, „Akzent Farbe“, „Rot“, „Ipanema Braun“, „neon gelb“ als Optionsname; „Montage durch PS-Sattlerei“ vs. „Montage durch PS Sattlerei?“) → erschwert Filter, Varianten-Markup und Merchant-Feed | fast alle | mittel |
| 13 | **Kollektionen mit nur einem Produkt** (BMW Interieur, Mercedes Interieur, VW Interieur, Zubehör) und **leere Kollektion** „Volkswagen Lenkräder“ (enthält nur einen Entwurf) → Thin Content, Kollektion konkurriert mit dem Produkt | 5 | mittel |
| 14 | **Markenrechtlich prüfen**: Editionsnamen „Black Badge“ (von Rolls-Royce verwendet), „Daytona“, „Ipanema“, „Kyalami Green“, „Nogaro“ (Audi-Farbbezeichnungen). Fahrzeugmarken nur beschreibend („passend für“, § 23 Nr. 3 MarkenG). → Legal Compliance Checker / Anwalt | 6+ | prüfen |

### 1.2 Live-Prüfungen – Checkliste (offen, weil Domain gesperrt)

Shopify erzeugt `robots.txt`, `sitemap.xml` und Canonical-Tags automatisch. Folgendes bitte nach Freigabe der Domain (oder manuell im Browser) prüfen:

| Prüfpunkt | Wie | Soll-Zustand |
|---|---|---|
| robots.txt | `https://ps-sattlerei.shop/robots.txt` | Shopify-Standard (u. a. `/cart`, `/checkout`, `/search`, gefilterte Kollektionen gesperrt), `Sitemap:`-Zeile vorhanden, **keine** Sperre von `/products/` oder `/collections/` |
| sitemap.xml | `/sitemap.xml` → Unter-Sitemaps products/collections/pages/blogs | Nur aktive Produkte; nach Varianten-Zusammenlegung nur noch Master-URLs. In GSC einreichen. |
| Domain-Varianten | `www.` / ohne `www.` / `http://` | 301 auf eine Hauptdomain; Canonical zeigt auf dieselbe Domain |
| Title/Meta | Quelltext jeder Vorlage | Pro Seite einzigartig; Shopify-Themes (z. B. Dawn) hängen „ – PS-Sattlerei“ automatisch an, wenn der Shopname nicht im Titel steht |
| H1 | Startseite, Kollektion, Produkt | Genau eine H1; Startseite oft ohne H1 oder mit Bild-Logo als H1 → Text-H1 ergänzen |
| Canonical | Produktseite über Kollektion aufrufen (`/collections/x/products/y`) | Canonical = `/products/y`; `?variant=`-URLs canonicalisieren auf Produkt-URL |
| Strukturierte Daten | [Rich-Results-Test](https://search.google.com/test/rich-results) auf 3 Produktseiten | `Product` mit `offers` (Preis, `EUR`, `availability`), `brand` = **PS-Sattlerei** (nicht Audi/BMW – Shopify nimmt dafür oft das Feld „Anbieter/Vendor“!), `image`, `description`; nach Zusammenlegung `ProductGroup` mit `hasVariant`/`variesBy` |
| Organisation | Startseite | `Organization` bzw. `LocalBusiness`-Markup mit Name, Logo, Adresse, Telefon, `sameAs` (Instagram etc.) |
| Ladezeit | [PageSpeed Insights](https://pagespeed.web.dev/) mobil, Startseite + 1 Produkt | LCP < 2,5 s, INP < 200 ms, CLS < 0,1. Typische Shopify-Bremsen: große Hero-Videos/Slider, viele Apps (Bewertungen, Chat, Pop-ups), nicht genutzte App-Skripte nach Deinstallation |
| Rechtstexte | Footer | Impressum (§ 5 DDG), Datenschutzerklärung, AGB, Widerrufsbelehrung + Muster-Widerrufsformular, Versand-/Zahlungsinfos; von jeder Seite mit max. 2 Klicks erreichbar. Shopify-Pfade: `/policies/legal-notice`, `/policies/privacy-policy`, `/policies/terms-of-service`, `/policies/refund-policy`, `/policies/shipping-policy` |
| Widerruf bei Wunschfarbe | Widerrufsbelehrung | Für Sonderanfertigungen nach Kundenwunsch greift ggf. die Ausnahme § 312g Abs. 2 Nr. 1 BGB; Montage = Dienstleistung mit eigenen Regeln → **vom Anwalt/Legal Compliance Checker prüfen lassen**, nicht selbst formulieren |
| Cookie-Banner | Erster Seitenaufruf | Einwilligung vor Tracking/Pixel/Google-Maps-Einbettung (§ 25 TDDDG) |

### 1.3 Duplicate Content durch Farb-Kopien

**Modellgruppen (aktive URLs):**

| Modell | Aktive Kopien (Produkt-IDs) | Entwurf mit allen Farben vorhanden? |
|---|---|---|
| Leder-Schlüsselcover BMW | 12: 7536785522784, 7536785555552, 7536785588320, 7536802234464, 7536802332768, 7536802398304, 7536802496608, 7536805380192, 7536805511264, 7536806002784, 7536806035552, 7536806297696 | nein |
| Leder-Schlüsselcover Mercedes | 6: 7536754262112, 7536783949920, 7536784080992, 7536784375904, 7536784506976, 7536785031264 (davon 1 × Schlüsseltyp „464“ statt „223“ → zweite Option „Schlüsseltyp“ nötig) | nein |
| Leder-Schlüsselcover Audi | 4: 7536816619616, 7536816750688, 7536816881760, 7536816980064 | nein |
| GT-R Carbon Lenkrad BMW F-Reihe | 4: 7524697800800, 7542917202016, 7542923231328, 7542923362400 | nein |
| EVO-X Carbon Lenkrad BMW G-Reihe | 4: 7524701208672, 7542946988128, 7542947119200, 7542947676256 | nein |
| EVO-X Carbon Lenkrad Mercedes Vor-Facelift | 4: 7543393124448, 7543393157216, 7543393288288, 7543393845344 | ja: 7525021220960, 7543393812576 |
| EVO-X Forged Carbon Lenkrad Audi RS3/RS4/RS5 | 4: 7543398006880, 7543398236256, 7543398563936, 7543398858848 | ja: 7525505138784 |
| Classic Carbon Lenkrad Mercedes Facelift | 3: 7543388504160, 7543388569696, 7543388766304 | ja: 7524706779232, 7543388471392 |
| EVO-X Carbon Lenkrad Mercedes Facelift | 3: 7543391617120, 7543391649888, 7543392010336 | ja: 7525012340832, 7543391551584 |
| EVO-X Carbon Lenkrad Audi R8/TT RS | 3: 7544602525792, 7544602591328, 7544602624096 | ja: 7525506449504, 7544602427488, 7547767717984 |
| EVO-X Carbon Lenkrad Audi RS6/RS7 (Ipanema / Daytona) | 2: 7544602689632, 7547762147424 | nein |

→ **47 aktive URLs für 11 Produkte.** Google wählt bei nahezu identischen Seiten selbst eine kanonische URL und blendet die übrigen aus; Signale (Links, Klicks, später Bewertungen) verteilen sich auf viele Seiten.

**Wichtig zur heutigen Umbenennung:** Wo ein eigener SEO-Titel gesetzt ist (z. B. alle 12 BMW-Schlüsselcover: „Nappaleder Schlüsselcover passend für Ihren BMW Autoschlüssel“), ändert der neue Produktname den `<title>` **nicht** – die Seiten bleiben im Suchergebnis identisch. Nur bei Produkten ohne SEO-Titel wird der Farbname übernommen. Der Text bleibt in allen Fällen gleich.

**Optionen im Vergleich:**

| | A) Zusammenlegen zu einem Produkt mit Farbvarianten (**Empfehlung**) | B) Kopien behalten, `rel=canonical` auf Master | C) Kopien behalten, jede mit eigenem Text |
|---|---|---|---|
| SEO | Alle Signale auf 1 URL; sauberes `ProductGroup`-Markup möglich; 36 dünne Seiten fallen weg | Canonical ist für Google nur ein **Hinweis**, kein Befehl; Kopien werden meist ausgeblendet, Signale werden weitgehend gebündelt | Hoher Aufwand, für Farbe allein kaum eigenes Suchinteresse (Einschätzung) → wenig Ertrag |
| Shopify-Aufwand | Mittel: Varianten anlegen, Variantenbilder zuordnen, 301-Weiterleitungen (CSV-Import möglich) | Theme-Anpassung nötig (Shopify setzt Canonical standardmäßig selbstreferenzierend; Override z. B. per Metafeld im `theme.liquid`) | Hoch: 47 Texte |
| Nutzer/Conversion | Ein Produkt, Farbauswahl mit Bildwechsel, Bewertungen gebündelt, Lager pro Variante | Kollektion zeigt weiter 4–12 fast gleiche Kacheln → unübersichtlich | wie B |
| Kollektion-Optik | Farbwahl als Swatches in der Kachel (Theme-Einstellung/App) statt vieler Kacheln | bleibt „voll“ | bleibt „voll“ |
| Risiko | Kurzfristige Ranking-Schwankung durch Umleitung (wenige Wochen, Einschätzung) | Google kann Canonical ignorieren; Instagram-/Ads-Links auf Kopien funktionieren weiter | keins, aber kein Effekt |

**Vorgehen Option A (je Modellgruppe):**
1. In GSC (Leistung → Seiten) prüfen, welche Kopie bereits Impressionen/Klicks hat → diese URL wird Master (Kannibalisierungsregel: die Seite mit den meisten Impressionen behält die Anfrage). Ohne Daten: Kopie mit dem saubersten Handle (Vorschläge in Tabelle 5.1).
2. Wo ein Entwurf mit allen Farben existiert, Varianten/Bilder von dort übernehmen – den Entwurf selbst nicht zusätzlich aktivieren.
3. Optionen vereinheitlichen: `Farbe` · `Montage durch PS-Sattlerei` · ggf. `Handerkennung (HOD)` / `Spurhalteassistent` / `Schlüsseltyp`.
4. Jedem Farbwert sein Bild zuordnen (Variantenbild).
5. Kopien auf Entwurf/Archiv setzen und **301-Weiterleitung** alte URL → Master-URL anlegen (Online Store → Navigation → URL-Weiterleitungen, CSV-Import möglich).
6. Interne Links, Instagram-Linkbaum, Google-Ads- und Merchant-Feed-URLs aktualisieren.
7. Nach 2–4 Wochen in GSC prüfen: Master indexiert, alte URLs als „Seite mit Weiterleitung“.

Falls die Farb-Kacheln in der Kollektion aus Vertriebssicht gewünscht sind: Shopify „Combined Listings“ (nur Shopify Plus) oder eine Swatch-App. Option B nur als Übergangslösung.

### 1.4 Kannibalisierung – Zuordnung ohne GSC (vorläufig)

| Konflikt | Betroffene Seiten | Vorgeschlagener Eigentümer | Maßnahme |
|---|---|---|---|
| Farb-Kopien (11 Gruppen) | siehe 1.3 | je 1 Master | Zusammenlegen (A) |
| „Carbon Interieur Set Audi RS6 C8“ | 7536844963936 und 7547781709920 | 7547781709920 (mehr Modelle, Bestand 2) – **Unterschied klären** | Zusammenlegen oder klar abgrenzen (z. B. „Lasur-Paket“) |
| „Interieur Audi RS6 C8“ | Kollektion Audi Interieur, Design Edition, Nogaro, Iconic Manufaktur | Kollektion = generisch „Interieur Veredelung Audi RS6“; Produkte = Editionsname + Material | Titel wie in 5.1/5.2 differenzieren |
| „Schlüsselcover BMW/Mercedes/Audi“ | Marken-Accessoires-Kollektion + Master-Produkt (nach Zusammenlegung je 1 Produkt) | Produkt | Marken-Accessoires-Kollektionen auf `noindex` oder aus Navigation entfernen; Hauptkollektion „Accessoires“ besitzt „Leder Schlüsselcover“ |
| „G-Klasse/M3/T6.1 Interieur“ | Ein-Produkt-Kollektion + Produkt | Produkt | Kollektion vorerst `noindex` oder in „Alle Interieur Pakete“ aufgehen lassen, bis weitere Produkte kommen |
| „Alcantara reinigen“ | künftiger Ratgeber + Reinigungsset | Ratgeber = Anleitung (informational); Produkt = „Alcantara Reiniger Set“ (transaktional) | im Ratgeber auf Produkt verlinken, Produkttitel ohne „reinigen“ |

---

## 2. Keywords & Keyword-Map

**Alle Volumenangaben sind Einschätzungen** (Kategorien sehr niedrig / niedrig / mittel), keine Messwerte. Vor der Umsetzung im Google-Keyword-Planer (Google-Ads-Konto) bzw. nach 4–8 Wochen mit GSC-Daten verifizieren.

| Keyword (Cluster) | Suchintention | Volumen (Einschätzung) | Zielseite | Status |
|---|---|---|---|---|
| ps sattlerei, ps-sattlerei lenkrad | navigational | niedrig | Startseite | vorhanden |
| carbon lenkrad, alcantara lenkrad, carbon lenkrad kaufen | kommerziell | mittel | Kollektion „Alle Lenkräder“ | vorhanden, Titel fehlt |
| carbon lenkrad audi, audi rs lenkrad carbon | kommerziell | mittel | Kollektion „Audi Lenkräder“ | vorhanden |
| carbon lenkrad audi rs3 / rs3 8v lenkrad | transaktional | niedrig–mittel | Produkt EVO-X Forged RS3 (Master) | zusammenlegen |
| rs6 c8 lenkrad carbon, rs6 lenkrad | transaktional | niedrig–mittel | Produkt EVO-X RS6/RS7 (Master) | zusammenlegen |
| rs6 digital lenkrad, rs6 performance lenkrad | transaktional | sehr niedrig–niedrig | Digital Performance Wheel / Digital Carbon Ipanema | vorhanden |
| rs6 led schaltwippen, rs6 carbon schaltwippen | transaktional | niedrig | LED Carbon Schaltwippen | vorhanden |
| r8 carbon lenkrad, tt rs lenkrad carbon | transaktional | niedrig | EVO-X R8/TT RS (Master) | zusammenlegen |
| carbon lenkrad bmw, m3 / m4 lenkrad carbon | kommerziell | mittel | Kollektion „BMW Lenkräder“ | vorhanden |
| bmw m lenkrad g80 / g82 carbon, lenkrad handerkennung | transaktional | niedrig | EVO-X BMW G-Reihe (Master) | zusammenlegen |
| bmw m3 f80 lenkrad carbon, lenkrad abgeflacht bmw | transaktional | niedrig | GT-R BMW F-Reihe (Master) | zusammenlegen |
| amg carbon lenkrad, mercedes carbon lenkrad | kommerziell | mittel | Kollektion „Mercedes Lenkräder“ | vorhanden |
| c63 / e63 carbon lenkrad (vor/nach Facelift) | transaktional | niedrig | EVO-X Mercedes FL bzw. VFL, Classic Carbon FL | zusammenlegen |
| lenkrad neu beziehen, lenkrad beziehen lassen, lenkrad leder neu beziehen kosten | kommerziell/Dienstleistung | mittel (höchstes Potenzial der Liste, Einschätzung) | **neu: Leistungsseite „Lenkrad neu beziehen“** + Ratgeber Kosten | fehlt – **nur wenn die Leistung angeboten wird [vom Inhaber bestätigen]** |
| alcantara lenkrad neu beziehen | kommerziell | niedrig–mittel | Leistungsseite (s. o.) | fehlt |
| lenkrad sattlerei, lenkrad sattler, autosattlerei | lokal/kommerziell | niedrig–mittel | Standortseite Bergkamen + Unternehmensprofil | fehlt |
| autosattlerei bergkamen / dortmund / unna / hamm | lokal | niedrig | Standortseite Bergkamen | fehlt |
| interieur veredelung, innenraum veredeln, auto innenraum neu beziehen | kommerziell | niedrig–mittel | Kollektion „Alle Interieur Pakete“ | vorhanden |
| interieur veredelung rs6, rs6 c8 interieur | kommerziell | niedrig | Kollektion „Audi Interieur Pakete“ | vorhanden |
| g klasse interieur, g63 innenausstattung leder | kommerziell | niedrig | Produkt Design Red G-Klasse | vorhanden |
| t6.1 innenausstattung, bulli interieur leder | kommerziell | niedrig | Produkt Design Edition T6.1 | vorhanden |
| schlüsselcover leder bmw / mercedes / audi, **schlüsselhülle leder** bmw … | transaktional | niedrig–mittel (Synonym „Schlüsselhülle“ vermutlich häufiger als „Schlüsselcover“ – Einschätzung, prüfen) | je Master-Produkt; „Schlüsselhülle“ in Text und Meta aufnehmen | zusammenlegen |
| alcantara reiniger, alcantara reinigungsset | transaktional | niedrig–mittel | Produkt Reinigungsset | vorhanden, Meta falsch |
| alcantara lenkrad reinigen, alcantara reinigen | informational | mittel | **neu: Ratgeber** | fehlt |
| carbon lenkrad tüv / eintragung / legal | informational (Kaufhürde) | niedrig | **neu: Ratgeber/FAQ** | fehlt |

---

## 3. Lokales SEO

**Belegte Standortangabe:** PS-Sattlerei GmbH, Marie-Curie-Str. 12, Bergkamen (laut Ausstellerverzeichnis der Essen Motor Show; Postleitzahl, Telefon und Öffnungszeiten **[vom Inhaber bestätigen]**). Die Montage-Option („Montage durch PS-Sattlerei: Ja“) ist bei fast allen Produkten wählbar – das ist ein starker lokaler Kaufgrund, der bisher keine eigene Seite hat.

### 3.1 Google-Unternehmensprofil (Checkliste)
- Profil beanspruchen/verifizieren; Name **exakt wie im Impressum**, keine Keywords im Namen (Verstoß gegen die Google-Richtlinien zur Darstellung von Unternehmen).
- Primärkategorie: passende Kategorie aus der Google-Liste wählen (z. B. „Autosattler“/„Autosattlerei“ – Verfügbarkeit im Profil prüfen); Zusatzkategorien z. B. Autozubehör.
- NAP (Name, Adresse, Telefon) identisch in Impressum, Footer, Standortseite, Unternehmensprofil, Branchenverzeichnissen (Gelbe Seiten, Das Örtliche, 11880, Apple Maps, Bing Places).
- Website-Link → Standortseite (nicht nur Startseite); Termin-Link → Kontakt/Anfrage.
- Leistungen anlegen: Lenkrad-Montage, Interieur-Veredelung, ggf. Lenkrad neu beziehen [bestätigen].
- Produkte im Profil: Top-Lenkräder und Interieur-Pakete (verlinkt auf Master-URLs). Alternativ über Merchant Center (Produktmodul im Profil).
- Echte Fotos: Werkstatt, Team, Arbeitsschritte, fertige Fahrzeuge (nur mit Einverständnis der Fahrzeughalter, Kennzeichen unkenntlich).
- Bewertungen: nach jeder Montage aktiv um eine Bewertung bitten (Link/QR-Code). **Keine** Anreize für Bewertungen, keine Vorauswahl nur zufriedener Kunden (Google-Richtlinien für Beiträge; § 5b Abs. 3 UWG und Nr. 23b/23c Anhang UWG). Auf jede Bewertung antworten.
- Regelmäßig Beiträge (Projekt der Woche) – kann der Social-Media-Content-Creator mitbedienen.

### 3.2 Standortseite „Montage vor Ort in Bergkamen“ (neu, `/pages/lenkrad-montage-bergkamen`)
- **Title:** „Lenkrad-Montage & Autosattlerei in Bergkamen“ (44 Zeichen)
- **Meta:** „Carbon-Lenkräder und Interieur-Pakete montieren lassen: PS-Sattlerei in Bergkamen, gut erreichbar aus Dortmund, Unna und Hamm. Termin anfragen.“ (146 Zeichen)
- **H1:** „Montage vor Ort in unserer Sattlerei in Bergkamen“
- Inhalte: Ablauf der Montage (Terminvereinbarung → Fahrzeugannahme → Umbau → Übergabe), Standzeit je Produktgruppe **[Zahlen vom Inhaber]**, Anfahrt (Autobahnanbindung **[bestätigen]**), Öffnungszeiten, Fotos der Werkstatt, Team (E-E-A-T: Sattlermeister/Qualifikation **[bestätigen]**), FAQ (Garantie, Airbag, TÜV – nur belegte Aussagen), Kontaktformular, Liste der montierbaren Produkte (interne Links auf Kollektionen).
- Karte: Google-Maps-Einbettung nur nach Einwilligung (2-Klick-Lösung oder statisches Bild mit Link, § 25 TDDDG).
- Strukturierte Daten: `LocalBusiness`-Untertyp (z. B. `AutomotiveBusiness`/`AutoRepair`) mit Adresse, Geo, Öffnungszeiten, Telefon, `url`, `image`.
- Verlinkung: Footer, Produktseiten (beim Optionsfeld „Montage“ → „Mehr zur Montage in Bergkamen“), Unternehmensprofil.
- Keine Pseudo-Standortseiten für Dortmund/Unna/Hamm ohne echten Standort (Doorway-Pages verstoßen gegen Googles Spam-Richtlinien). Einzugsgebiet im Text nennen genügt.

---

## 4. Content-Plan (Ratgeber/Blog, kaufnah)

Jeder Artikel: Autor mit Namen und Funktion, eigene Fotos aus der Werkstatt, klare Verlinkung auf genau **eine** Ziel-Kollektion/ein Produkt, keine Preis- oder Leistungsversprechen ohne Beleg.

| Prio | Arbeitstitel | Ziel-Keyword (Einschätzung) | Verlinkt auf | Vorbedingung |
|---|---|---|---|---|
| 1 | Lenkrad neu beziehen lassen: Kosten, Ablauf und Dauer | lenkrad neu beziehen kosten | Leistungsseite „Lenkrad neu beziehen“ / Kollektion Lenkräder | Preisrahmen **[vom Inhaber]**; nur, wenn Leistung angeboten wird |
| 2 | Alcantara-Lenkrad reinigen – Anleitung aus der Sattlerei | alcantara lenkrad reinigen | Alcantara Reinigungsset | eigene Schritt-Fotos/Video |
| 3 | Carbon-Lenkrad: Was ist beim TÜV, beim Airbag und bei der Eintragung zu beachten? | carbon lenkrad tüv | Kollektion Alle Lenkräder | technische/rechtliche Fakten **[vom Inhaber/Gutachten]** |
| 4 | Carbon, Forged Carbon, Alcantara oder Leder – welches Lenkrad passt zu mir? | forged carbon lenkrad, alcantara oder leder lenkrad | Alle Lenkräder | – |
| 5 | Austauschlenkrad oder eigenes Lenkrad umbauen? So läuft es bei uns | lenkrad umbauen lassen | Standortseite | Ablauf **[bestätigen]** |
| 6 | Alcantara-Lenkrad abgegriffen oder speckig – reinigen, auffrischen oder neu beziehen? | alcantara lenkrad abgenutzt | Ratgeber 2 + Leistungsseite | – |
| 7 | Lenkrad mit Handerkennung (HOD) bei BMW: Was beim Tausch wichtig ist | bmw lenkrad handerkennung | EVO-X BMW G-Reihe | technische Fakten **[bestätigen]** |
| 8 | Schlüsselhülle aus Leder: Welche passt auf meinen BMW-, Mercedes- oder Audi-Schlüssel? | schlüsselhülle leder bmw | Kollektion Accessoires | Liste der passenden Schlüsseltypen **[bestätigen]** |
| 9 | Projektberichte: „Audi RS6 C8 Iconic Manufaktur Edition“, „G-Klasse Design Red“, „RS3 Alcantara meets Carbon“ | Marken-/Projekt-Longtail | jeweiliges Produkt | Freigabe der Kunden; Presseartikel (s. Quellen) verlinken |
| 10 | 12-Uhr-Markierung am Lenkrad: Wozu sie dient und welche Farben möglich sind | lenkrad 12 uhr markierung | Alle Lenkräder | – |

Zusatzhebel Reichweite/Links: Die PS-Sattlerei wurde bereits in Fachmedien berichtet (Carscoops, tiresandparts.net, Essen Motor Show). Diese Projekte auf der eigenen Seite als Referenzen dokumentieren und bei Medien um einen Link auf die jeweilige Produkt-/Projektseite bitten (Digital PR, nur mit Einwilligung bzw. als Antwort auf bestehende Kontakte – keine Kalt-E-Mails ohne Einwilligung, § 7 UWG).

---

## 5. Fertige Vorschläge Titel & Meta (zur Freigabe)

Regeln: Titel ≤ 60 Zeichen, Meta ≤ 155 Zeichen (Zeichen gezählt inkl. Leerzeichen). Fahrzeugmarken nur „passend für“. Keine Preise in Meta-Beschreibungen (veralten schnell, Preis zeigt Google über strukturierte Daten). Das Theme hängt voraussichtlich „ – PS-Sattlerei“ an – deshalb steht der Shopname nicht im Titel.
**Vor dem Einpflegen prüfen:** Material- und Leistungsangaben gegen den jeweiligen Produkttext; Passformangaben (Modelle/Baujahre) gegen die tatsächliche Kompatibilität; „ca. 3 Tage Standzeit“ und „Montage in Bergkamen“ nur, wenn zutreffend.

### 5.1 Die 15 wichtigsten aktiven Produkte

Auswahl: höchster Warenwert (Interieur-Pakete), Lenkrad-Master je Modellgruppe (nach Zusammenlegung), Produkte mit falscher Meta.

| # | Produkt-ID | Produkt (Master) | SEO-Titel (Zeichen) | Meta-Beschreibung (Zeichen) |
|---|---|---|---|---|
| 1 | 7548027666528 | Iconic Manufaktur Edition RS6 C8 | Iconic Manufaktur Interieur passend für Audi RS6 C8 (51) | Interieur-Veredelung passend für Audi RS6 C8: Armaturenbrett, Türverkleidungen, Lenkrad & Mittelarmlehne aus der Manufaktur – inkl. Montage in Bergkamen. (153) |
| 2 | 7536826646624 | Nogaro Heritage Edition RS6 C8 | Nogaro Heritage Interieur passend für Audi RS6 C8 (49) | Nogaro Heritage Edition: Interieur-Veredelung passend für Audi RS6 C8, gefertigt in unserer Sattlerei-Manufaktur. Mit oder ohne Montage vor Ort. (144) |
| 3 | 7564657295456 | Design Edition RS6 C8 | Alcantara Interieur passend für Audi RS6 C8 – Design Edition (60) | Alcantara & Leder passend für Audi RS6 C8: im Austauschverfahren vorgefertigt, daher nur ca. 3 Tage Standzeit. Mit oder ohne Montage in Bergkamen. (146) |
| 4 | 7536750035040 | Design Edition RS3 8V | Interieur Design Edition passend für Audi RS3 8V (48) | Design Edition passend für Audi RS3 8V: Interieur-Veredelung mit Akzentfarbe Rot, Schwarz, Hellgrau, Blau oder Wunschfarbe. Optional mit Montage. (145) |
| 5 | 7536750887008 | Design Edition BMW M3 G-Reihe | Interieur Design Edition passend für BMW M3 G-Reihe (51) | Design Edition passend für BMW M3 der G-Reihe: Armaturenbrett, Türverkleidungen, Lenkrad & Mittelarmlehne veredelt, Naht in Orange oder Wunschfarbe. (148) |
| 6 | 7525513298016 | Design Red Classic G-Klasse W463A | Design Red Interieur passend für Mercedes G-Klasse W463A (56) | Interieur-Veredelung passend für Mercedes G-Klasse W463A: Armaturenbrett, Türverkleidungen, Lenkrad & Mittelarmlehne mit roter Naht oder Wunschfarbe. (149) |
| 7 | 7536826843232 | Design Edition VW T6.1 | Interieur Design Edition passend für VW T6.1 (44) | Design Edition passend für VW T6.1: hochwertiges Interieur-Upgrade aus der Sattlerei, Naht in Hellgrau oder Wunschfarbe. Versand oder Montage vor Ort. (150) |
| 8 | 7547781709920 | Carbon Interieur Set RS6/RS7/A6/A7 C8 | Carbon Interieur Set passend für Audi RS6/RS7 C8, A6/A7 (55) | Carbon-Interieurteile passend für Audi RS6, RS7, A6 und A7 (C8) – Finish matt, glänzend oder mit farbiger Lasur. Versand oder Montage vor Ort. (142) |
| 9 | 7548800270432 | EVO-X Digital Carbon Lenkrad Ipanema | Digital Carbon Lenkrad passend für Audi RS6/RS7 – Ipanema (57) | EVO-X Digital Carbon Lenkrad passend für Audi RS6/RS7, Akzente in Ipanema Braun oder Wunschfarbe. Nur mit Montage durch PS-Sattlerei erhältlich. (144) |
| 10 | 7547778728032 | Digital Performance Wheel RS6/RS7 C8 | Digital Performance Lenkrad passend für Audi RS6/RS7 C8 (55) | PSS Digital Performance Wheel passend für Audi RS6, RS7, A6 und A7 (C8) – Akzent in Neongelb oder Wunschfarbe. Nur mit Montage durch PS-Sattlerei. (146) |
| 11 | 7544602689632 | EVO-X Carbon Lenkrad RS6/RS7 (Master für Ipanema + Daytona 7547762147424) | EVO-X Carbon Lenkrad passend für Audi RS6 / RS7 (47) | EVO-X Carbon Lenkrad passend für Audi RS6/RS7: Akzente in Ipanema Braun, Daytona Grau oder Wunschfarbe. Versand oder Montage in unserer Sattlerei. (146) |
| 12 | 7543398563936 | EVO-X Forged Carbon Lenkrad RS3/RS4/RS5 (Master, Handle neu: `pss-evo-x-forged-carbon-lenkrad-audi-rs3-8v-rs4-rs5`) | Forged Carbon Lenkrad passend für Audi RS3 8V, RS4, RS5 (55) | EVO-X Forged Carbon Lenkrad passend für Audi RS3 8V, RS4 & RS5: Akzentfarbe in Grün, Rot, Grau, Schwarz oder Wunschfarbe. Optional mit Montage. (143) |
| 13 | 7524701208672 | EVO-X Carbon Lenkrad BMW G-Reihe (Master, sauberes Handle vorhanden) | EVO-X Carbon Lenkrad passend für BMW M2, M3, M4 (G-Reihe) (57) | EVO-X Carbon Lenkrad passend für BMW M-Modelle der G-Reihe (z. B. M2, M3, M4): Echtcarbon, Handerkennung (HOD) optional, Akzentfarbe nach Wahl. (143) |
| 14 | 7524697800800 | GT-R Carbon Lenkrad BMW F-Reihe (Master, sauberes Handle vorhanden) | GT-R Carbon Lenkrad passend für BMW M2, M3, M4 (F-Reihe) (56) | GT-R Carbon Lenkrad, unten abgeflacht, passend für BMW M-Modelle der F-Reihe (2014–2018): Echtcarbon, geprägtes Leder, Akzentfarbe nach Wahl. (141) |
| 15 | 7543393157216 | EVO-X Carbon Lenkrad Mercedes Vor-Facelift (Master) | EVO-X Carbon Lenkrad passend für Mercedes-AMG 2014–2018 (55) | EVO-X Carbon Lenkrad passend für Mercedes-AMG Modelle vor Facelift (2014–2018): dickerer Kranz, Carbonflächen, Spurhalteassistent optional. (139) |

### 5.2 Weitere aktive Produkte (Master bzw. falsche Meta korrigieren)

| Produkt-ID | Produkt | SEO-Titel (Zeichen) | Meta-Beschreibung (Zeichen) |
|---|---|---|---|
| 7548939173984 | Alcantara Reinigungsset | Alcantara Reiniger Set für Lenkrad & Interieur (46) | Alcantara Reinigungsset aus der Sattlerei für die schonende Pflege von Lenkrad und Interieur aus Alcantara – markenunabhängig einsetzbar. (137) |
| 7543391649888 | EVO-X Carbon Lenkrad Mercedes Facelift (Master) | EVO-X Carbon Lenkrad passend für Mercedes-AMG ab 2018 (53) | EVO-X Carbon Lenkrad passend für Mercedes-AMG Facelift ab 2018: verlängerte, modellierte Form, Alcantara, rote Ziernaht, Akzentfarbe nach Wahl. (143) |
| 7543388569696 | Classic Carbon Lenkrad Mercedes Facelift (Master) | Classic Carbon Lenkrad passend für Mercedes-AMG ab 2018 (55) | Classic Carbon Lenkrad mit Alcantara passend für Mercedes-AMG Facelift ab 2018: 12-Uhr-Markierung, Carbon-Schaltwippen, Plug-and-Play-Anbauteile. (145) |
| 7524705075296 | Iconic Leder Edition Royal Blue / Orange | Leder Lenkrad Royal Blue passend für Mercedes ab 2018 (53) | Vollleder-Lenkrad in Royal Blue mit orangefarbener 12-Uhr-Markierung, passend für Mercedes Facelift ab 2018 – Iconic Leder Edition der PS-Sattlerei. (148) |
| 7544602591328 | EVO-X Carbon Lenkrad R8 / TT RS (Master) | EVO-X Carbon Lenkrad passend für Audi R8, TT RS, TTS (52) | EVO-X Carbon Lenkrad Iconic Edition passend für Audi R8 (4S), TT RS & TTS: Echtcarbon, rote Nähte, 12-Uhr-Markierung, Akzentfarbe nach Wahl. (140) |
| 7536785588320 | Leder-Schlüsselcover BMW (Master, Handle `schlusselcover-fur-bmw-autoschlussel`) | Leder Schlüsselcover passend für BMW Autoschlüssel (50) | Handgefertigtes Schlüsselcover aus Nappaleder passend für BMW Autoschlüssel – in 12 Farben oder Wunschfarbe. Schützt Ihren Schlüssel im Alltag. (143) |
| 7536754262112 | Leder-Schlüsselcover Mercedes (Master) | Leder Schlüsselcover passend für Mercedes Autoschlüssel (55) | Handgefertigtes Schlüsselcover aus Nappaleder passend für Mercedes Autoschlüssel – in fünf Farben oder Wunschfarbe. Schützt Ihren Schlüssel im Alltag. (150) |
| 7536816619616 | Leder-Schlüsselcover Audi (Master) | Leder Schlüsselcover passend für Audi Autoschlüssel (51) | Handgefertigtes Schlüsselcover aus Nappaleder passend für Audi Autoschlüssel – in vier Farben oder Wunschfarbe. Schützt Ihren Schlüssel im Alltag. (145) |
| 7548023013472 | Black Badge Lenkrad Set RS6/RS7 C8 | Lenkradblenden Set schwarz passend für Audi RS6/RS7 C8 (54) | Lenkradtasten, Schaltwippen und Lenkradspange in Schwarz, passend für Audi RS6, RS7, A6 und A7 (C8). Versand oder Montage durch PS-Sattlerei. (141) |
| 7548051619936 | LED Carbon Schaltwippen | LED Carbon Schaltwippen passend für Audi RS6/RS7 C8 (51) | Carbon-Schaltwippen mit LED passend für Audi RS6, RS7, A6 und A7 (C8) – aus der PS-Sattlerei. Versand oder Montage in unserer Werkstatt. (136) |
| 7548058402912 | Race Display Beifahrerseite | Race Display Beifahrerseite passend für Audi RS6/RS7 C8 (55) | Race Display für die Beifahrerseite, passend für Audi RS6, RS7, A6 und A7 (C8). Nur mit Montage durch die PS-Sattlerei erhältlich. (130) |
| 7547781087328 | Digitale Lenkradtasten | Digitale Lenkradtasten passend für Audi RS6/RS7 C8 (50) | Digitale Lenkradtasten passend für Audi RS6, RS7, A6 und A7 (C8). Nur mit Montage durch die PS-Sattlerei erhältlich. (116) |
| 7536843456608 | Carbon Interieur Set RSQ8 (Handle auf `…audi-rsq8` ändern) | Carbon Interieur Set passend für Audi RSQ8 (42) | Carbon-Interieurteile passend für Audi RSQ8 – Finish matt, glänzend oder mit farbiger Lasur. Versand oder Montage durch die PS-Sattlerei. (137) |

Offen: 7536844963936 (zweites „Carbon Interieur Set RS6 C8“) – erst Unterschied zu 7547781709920 klären, dann zusammenlegen oder umbenennen. Die Meta-Beschreibungen der Schlüsselcover sollten zusätzlich das Wort „Schlüsselhülle“ im Produkttext enthalten (Synonym).

### 5.3 Kollektionen

| Kollektion | Empfehlung | SEO-Titel (Zeichen) | Meta-Beschreibung (Zeichen) |
|---|---|---|---|
| Alle Lenkräder | indexieren | Carbon & Alcantara Lenkräder passend für Audi, BMW, Mercedes (60) | Carbon- und Alcantara-Lenkräder aus der PS-Sattlerei, passend für Audi RS, BMW M und Mercedes-AMG. Akzentfarbe nach Wahl, Versand oder Montage vor Ort. (151) |
| Audi Lenkräder | indexieren | Carbon Lenkrad passend für Audi RS3, RS6, R8 & mehr (51) | Carbon-Lenkräder passend für Audi RS3 8V, RS4, RS5, RS6/RS7 und R8 – veredelt in der PS-Sattlerei. Akzentfarbe nach Wahl, Versand oder Montage. (143) |
| BMW Lenkräder | indexieren | Carbon Lenkrad passend für BMW M2, M3, M4 & M5 (46) | Carbon-Lenkräder passend für BMW M-Modelle der F- und G-Reihe: GT-R und EVO-X, Akzentfarbe nach Wahl, optional mit Handerkennung (HOD) und Montage. (147) |
| Mercedes Lenkräder | indexieren | Carbon & Leder Lenkrad passend für Mercedes-AMG (47) | Carbon- und Leder-Lenkräder passend für Mercedes-AMG vor und nach Facelift 2018: EVO-X, Classic und Iconic Edition. Versand oder Montage vor Ort. (145) |
| Volkswagen Lenkräder | **ausblenden/noindex**, bis aktive Produkte vorhanden | Lenkrad & Interieur-Teile passend für Volkswagen (48) | [erst nach Befüllung formulieren] |
| Alle Interieur Pakete | indexieren | Interieur Veredelung passend für Audi, BMW, Mercedes, VW (56) | Interieur-Pakete aus der PS-Sattlerei passend für Audi RS, BMW M, Mercedes G-Klasse und VW T6.1: Leder, Alcantara & Carbon, Montage in Bergkamen. (145) |
| Audi Interieur Pakete | indexieren | Interieur Veredelung passend für Audi RS6 C8 & RS3 (50) | Interieur-Veredelung passend für Audi RS6 C8 und RS3 8V: Design, Nogaro Heritage und Iconic Edition sowie Carbon-Sets. Montage in Bergkamen möglich. (148) |
| BMW Interieur Design Pakete | noindex, solange 1 Produkt | Interieur Veredelung passend für BMW M3 (G-Reihe) (49) | Interieur-Design-Pakete passend für BMW M3 der G-Reihe: Armaturenbrett, Türverkleidungen, Lenkrad und Mittelarmlehne veredelt in der PS-Sattlerei. (146) |
| Mercedes Interieur Pakete | noindex, solange 1 Produkt | Interieur Veredelung passend für Mercedes G-Klasse (50) | Interieur-Veredelung passend für Mercedes G-Klasse W463A: Design Red Classic Edition aus der PS-Sattlerei, Nahtfarbe nach Wunsch, Montage vor Ort. (146) |
| Volkswagen Interieur Design Pakete | noindex, solange 1 Produkt | Interieur Veredelung passend für VW T6.1 (40) | Interieur-Design-Paket passend für VW T6.1 aus der PS-Sattlerei: hochwertige Veredelung, Nahtfarbe nach Wunsch, Versand oder Montage vor Ort. (141) |
| Accessoires | indexieren (besitzt „Leder Schlüsselcover“) | Leder Schlüsselcover passend für Audi, BMW & Mercedes (53) | Handgefertigte Schlüsselcover aus Nappaleder passend für Audi, BMW und Mercedes – viele Farben oder Wunschfarbe. Accessoires aus der PS-Sattlerei. (146) |
| BMW Accessoires | noindex nach Zusammenlegung (nur noch 1 Produkt) | Schlüsselcover & Accessoires passend für BMW (44) | Accessoires aus der PS-Sattlerei passend für BMW: Schlüsselcover aus Nappaleder, handgefertigt, in vielen Farben oder Wunschfarbe. (130) |
| Mercedes Accessoires | noindex nach Zusammenlegung | Schlüsselcover & Accessoires passend für Mercedes (49) | Accessoires aus der PS-Sattlerei passend für Mercedes: Schlüsselcover aus Nappaleder, handgefertigt, in vielen Farben oder Wunschfarbe. (135) |
| Audi Accessoires | noindex nach Zusammenlegung | Schlüsselcover & Accessoires passend für Audi (45) | Accessoires aus der PS-Sattlerei passend für Audi: Schlüsselcover aus Nappaleder, handgefertigt, in vielen Farben oder Wunschfarbe. (131) |
| Zubehör | in „Accessoires“ integrieren oder umbenennen in „Pflege“ | Alcantara Pflege & Zubehör aus der Sattlerei (44) | Pflege und Zubehör aus der PS-Sattlerei: Alcantara Reinigungsset für Lenkrad und Interieur – markenunabhängig für Audi, BMW, Mercedes und VW nutzbar. (149) |

Zusätzlich je Kollektion: 80–150 Wörter Einleitungstext oberhalb oder unterhalb der Produktliste (Was ist das, für welche Modelle, Montage-Hinweis, Link zum Ratgeber).
**Startseite** (Vorschlag): Titel „PS-Sattlerei – Carbon & Alcantara Lenkräder, Interieur“ (54); H1 als Text, z. B. „Carbon-Lenkräder und Interieur-Veredelung aus Bergkamen“.

### 5.4 Muster für Bild-Alt-Texte und Dateinamen

**Alt-Text-Schema** (ca. 80–125 Zeichen, beschreibt das Bild, kein Keyword-Stapeln):
`[Produkt/Bauteil] [Material] mit [Farbdetail], [Ansicht/Perspektive], passend für [Marke Modell]`

| Bild (Beispiel) | Alt-Text |
|---|---|
| `Audi_RS-rot_….jpg` | EVO-X Forged Carbon Lenkrad mit roter 12-Uhr-Markierung, Seitenansicht, passend für Audi RS3 8V |
| `Audi_RS_Front-rot_….jpg` | EVO-X Forged Carbon Lenkrad mit roten Akzenten, Frontansicht mit Schaltwippen, passend für Audi RS3 8V |
| `SchlusselCover_BMW_Orange_Nappa-Photoroom.jpg` | Schlüsselcover aus orangefarbenem Nappaleder mit Ziernaht, Vorderseite, passend für BMW Autoschlüssel |
| `…_Ruckseite-Photoroom.jpg` | Rückseite des orangefarbenen Leder-Schlüsselcovers für BMW Autoschlüssel |
| `gklasse_rot_interieur_fahrerseite.jpg` | Interieur der Mercedes G-Klasse W463A mit roten Ziernähten an Armaturenbrett und Lenkrad, Blick von der Fahrerseite |
| `alcantara_reiniger_….jpg` | PSS Alcantara Reinigungsset mit Reinigungsmittel und Bürste [Inhalt bestätigen] |

**Dateinamen für neue Uploads** (vor dem Hochladen umbenennen; nachträgliches Umbenennen bestehender Bilder lohnt sich nur bei den wichtigsten Produkten):
`pss-[produkt]-[modell]-[farbe]-[ansicht].jpg`, z. B. `pss-evo-x-forged-carbon-lenkrad-audi-rs3-8v-rot-front.jpg` – Kleinbuchstaben, Bindestriche, keine Umlaute (ae/oe/ue), keine doppelten Punkte.

Umsetzung: 224 fehlende Alt-Texte lassen sich mit einem Bulk-Editor oder einer SEO-App befüllen; Entwurf je Bild kann ich auf Wunsch als CSV aus dem Export erzeugen (Freigabe vorausgesetzt).

---

## 6. Maßnahmenplan (priorisiert nach Wirkung auf Umsatz × Aufwand)

| Prio | Maßnahme | Wirkung | Aufwand | Wer |
|---|---|---|---|---|
| **1 – sofort** | Falsche Preise und falsche/kopierte Meta-Beschreibungen ersetzen (5.1/5.2), fehlende SEO-Titel setzen | Rechtsrisiko weg, bessere Klickrate | 2–3 h | Shop-Team nach Freigabe |
| **1 – sofort** | Lagerlogik klären: 27 aktive Produkte mit Bestand ≤ 0 – kaufbar machen („Weiterverkaufen“ + Lieferzeit) oder bewusst ausblenden | direkt Umsatz | 1 h | Inhaber |
| **2 – diese Woche** | Farb-Kopien zu 11 Master-Produkten mit Varianten zusammenlegen, 301-Weiterleitungen, saubere Handles | Bündelung aller Signale, bessere Nutzerführung | 1–2 Tage | Shop-Team |
| **2** | Google Merchant Center + kostenlose Produkteinträge aktivieren (Shopify-App „Google & YouTube“), `brand` = PS-Sattlerei, `identifier_exists` = nein | Sichtbarkeit im Shopping-Tab/Bildersuche ohne Klickkosten | ½ Tag | Shop-Team |
| **2** | Google-Unternehmensprofil vollständig pflegen + Standortseite „Montage in Bergkamen“ | lokale Anfragen, Vertrauen | 1 Tag | Inhaber/Marketing |
| **3 – 2–4 Wochen** | Alt-Texte für alle Bilder; weitere Bilder für Ein-Bild-Produkte | Bildersuche, Barrierefreiheit (BFSG-relevant für Shops) | 1 Tag | Shop-Team |
| **3** | Kollektionstexte, noindex für Ein-Produkt-Kollektionen, VW-Lenkräder ausblenden | weniger Thin Content | ½ Tag | Shop-Team |
| **3** | Leistungsseite „Lenkrad neu beziehen“ (falls angeboten) + Ratgeber 1–3 | neue kaufnahe Nachfrage | 3–5 Tage | Content Creator + Inhaber |
| **4 – laufend** | Bewertungen nach jeder Montage, Projektberichte, Presse-Referenzen verlinken | Vertrauen, Links | laufend | Inhaber |
| **4** | GSC einrichten/prüfen, Kannibalisierungs-Check mit echten Daten, Core Web Vitals messen | Kontrolle | 2 h + monatlich | SEO |

Realistische Erwartung: Korrekturen an Titel/Meta und Merchant-Einträge wirken typischerweise innerhalb weniger Wochen; Rankings aus neuen Inhalten und lokale Sichtbarkeit bauen sich über Monate auf (Einschätzung, keine Zusage).

---

## Quellen

Google (offizielle Dokumentation; in dieser Sitzung nicht live abrufbar, Wortlaut vor Weitergabe gegenlesen):
- Doppelte URLs zusammenfassen / Canonical als Hinweis: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- Strukturierte Daten für Produktvarianten (ProductGroup, hasVariant, variesBy): https://developers.google.com/search/docs/appearance/structured-data/product-variants und Ankündigung https://developers.google.com/search/blog/2024/02/product-variants
- Product-Markup / Händlereinträge: https://developers.google.com/search/docs/appearance/structured-data/product
- URL-Struktur für E-Commerce-Websites: https://developers.google.com/search/docs/specialty/ecommerce/designing-a-url-structure-for-ecommerce-sites
- Titellinks (Title-Elemente): https://developers.google.com/search/docs/appearance/title-link
- Snippets / Meta-Beschreibungen: https://developers.google.com/search/docs/appearance/snippet
- Bilder-SEO (Alt-Text, Dateinamen): https://developers.google.com/search/docs/appearance/google-images
- LocalBusiness-Markup: https://developers.google.com/search/docs/appearance/structured-data/local-business
- Hilfreiche, verlässliche Inhalte (E-E-A-T): https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Spam-Richtlinien (Doorway-Pages): https://developers.google.com/search/docs/essentials/spam-policies
- Core Web Vitals: https://developers.google.com/search/docs/appearance/core-web-vitals
- Kostenlose Produkteinträge (Merchant Center): https://support.google.com/merchants/answer/13889434
- Richtlinien zur Darstellung von Unternehmen (Unternehmensprofil): https://support.google.com/business/answer/3038177

Firma/Presse (per Websuche gefunden):
- Ausstellerprofil Essen Motor Show (Adresse Marie-Curie-Str. 12, Bergkamen): https://essen-motorshow.de/car-exhibition/exhibitor-list/detail/ps-sattlerei-gmbh-dace2
- Carscoops (Panamera-Projekt, Evo-Lenkrad): https://www.carscoops.com/?p=2130336
- tiresandparts.net (Panamera): https://tiresandparts.net/news/ps-sattlerei-porsche-panamera-turbo-s/
- tiresandparts.net (Audi RS 3, „Alcantara meets Carbon“): https://tiresandparts.net/news/alcantara-meets-carbon-first-class-interior-for-the-audi-rs-3/

Shopify (Sekundärquellen zur Weiterleitung bei Handle-Änderung): https://community.shopify.com/t/anderung-der-url-einzelner-produkte/320826

Recht (DE): § 5, § 5b Abs. 3, § 7 UWG; § 23 Nr. 3 MarkenG; § 5 DDG; § 25 TDDDG; § 312g Abs. 2 Nr. 1 BGB; PAngV – rechtliche Bewertung durch Legal Compliance Checker bzw. Anwalt.
