# Shop-Check ps-sattlerei.shop – Phase 1

**Stand:** 04.11.2026 · **Grundlage:** öffentlich abrufbare Daten (Startseite, `products.json`, Kollektionen, Seiten, Rechtstexte, Sitemap, robots.txt, eine Beispiel-Produktseite).
**Nicht geprüft (kein Zugriff):** Shopify-Admin, Checkout, Umsätze/Conversion, Google Search Console, GA4/Werbekonten, mobile Darstellung/Ladezeit im Browser.

> Keine Rechtsberatung. Die rechtlichen Punkte sind Hinweise zur Prüfung durch Anwalt oder Rechtstexte-Dienst (z. B. Händlerbund, IT-Recht Kanzlei, Trusted Shops).

---

## Ist-Zustand in Zahlen

| Kennzahl | Wert |
|---|---|
| Produkte im Shop | 67 |
| davon eigenständige Modelle (ohne Farbdubletten) | ca. 25 |
| Preisspanne | 19,90 € (Alcantara-Reinigungsset) bis 39.900 € (Iconic Manufaktur Edition RS6 C8) |
| Marken-Fokus | Audi, BMW, Mercedes, VW (T6.1) |
| Kollektionen | 15, **alle ohne Beschreibungstext** |
| Blogartikel | 0 |
| Produktbilder mit Alt-Text | **0** |
| Produkte mit SKU | **0** |
| Produkte mit Produkttyp | **0** |
| Theme | Concept 5.1.0 |
| Zahlarten | Apple Pay, Google Pay, PayPal, Klarna, Kreditkarten, Vorkasse (lt. AGB) |
| Versand | „Kostenloser Versand ab 199 €“, Fertigung 3–5 Wochen (AGB) bzw. „Versandfertig in 4 Wochen“ (Produktseite) |

**Stärken:** klare Nische (Carbon-Lenkräder & Interieur für Performance-Modelle), hochwertige Produkttexte mit Kompatibilitätsliste, Airbag-/Montagehinweis und sauberem Markenhinweis („passend für“, keine Verbindung zu BMW AG usw.), Abholung/Montage vor Ort als Option, Impressum vollständig, Social-Kanäle verlinkt, Präsenz auf der Essen Motor Show.

---

## Shop-Kennzahlen (Shopify Analytics, Nov 2025 – 04.11.2026)

| Kennzahl | Wert |
|---|---|
| Sitzungen / Besucher | 30.416 / 26.658 |
| Sitzungen mit „In den Warenkorb“ | 127 (**0,4 %**) |
| Checkout erreicht / abgeschlossen | 25 / 4 |
| Bestellungen | 7, davon 3 im Nov 2025 mit 98 % Rabatt (vermutlich Testbestellungen, zu prüfen) |
| Nettoumsatz Online-Shop | **2.452,69 €**, davon 2.190 € aus einem einzigen Lenkrad (Mai 2026) |
| Conversion-Rate | **0,01 %** (üblich im E-Commerce: ca. 1–3 %) |
| Trafficquellen (90 Tage) | direkt 61 %, Google 19 %, Facebook 7 %, eigene Website 7 %, Instagram 4 % |
| Geräte (90 Tage) | Mobil 75 %, Desktop 24 % |
| Shop-Zeitzone | **EST** statt Europe/Berlin, verfälscht Tages- und Zeitauswertungen |

**Kernbefund:** Das Problem ist nicht der Traffic, sondern die Conversion. Besucher kommen, legen aber fast nichts in den Warenkorb. Mehr Werbung würde derzeit Geld verbrennen. Zuerst müssen Vertrauen, Produktseiten (mobil!) und der Anfrageweg für hochpreisige Produkte verbessert werden. Offen ist, wie viele Aufträge über Telefon, Instagram oder Werkstatt zustande kommen, nachdem Kunden den Shop gesehen haben. Diese Anfragen müssen künftig gemessen werden.

---

## Mängelliste nach Priorität

### 🔴 Sofort (Recht & Umsatzverlust)

| # | Befund | Warum wichtig | Maßnahme | Agent |
|---|---|---|---|---|
| 1 | **Elektronischer Widerrufsbutton nicht gefunden.** Seit 19.06.2026 müssen Online-Shops eine Widerrufsfunktion bereitstellen (EU-Richtlinie 2023/2673, umgesetzt im BGB). Im Shop gibt es nur den Footer-Link zur Widerrufsbelehrung. | Abmahnrisiko | Funktion „Vertrag widerrufen“ einrichten (Shopify-App oder Rechtstexte-Anbieter), Rechtslage bestätigen lassen | Legal Compliance Checker |
| 2 | **Widerrufsausschluss unklar:** AGB schließen „individuelle Sonderanfertigungen“ aus, aber dieselben Produkte gibt es auch in Standardfarben. Zudem „Austauschverfahren“: Original-Teile müssen eingeschickt werden. | Streit bei Rückgaben, Abmahnrisiko | Pro Produkt festlegen: Standardware (Widerruf möglich) vs. Anfertigung nach Kundenvorgabe (§ 312g Abs. 2 Nr. 1 BGB). Auf der Produktseite deutlich kennzeichnen. | Legal Compliance Checker |
| 3 | **AGB sehr knapp** (ca. 2.100 Zeichen): u. a. keine Angaben zu Vertragstextspeicherung, Vertragssprache, Eigentumsvorbehalt, Streitbeilegung. Impressum zitiert noch **§ 5 TMG / § 55 RStV** (seit 2024: § 5 DDG / § 18 MStV). | Abmahnrisiko | Rechtstexte über einen Dienst mit Update-Service beziehen | Legal Compliance Checker |
| 4 | **Versandseite fehlt** (`/policies/shipping-policy` → 404). Versandkosten unter 199 € und Auslandsversand sind nirgends sichtbar. | Pflichtangabe (PAngV), Kaufabbrüche | Versand- und Zahlungsseite anlegen, im Footer und auf Produktseiten verlinken („zzgl. Versandkosten“) | Legal Compliance Checker |
| 5 | **Datenschutzerklärung = Shopify-Standardvorlage.** Newsletter, Gewinnspiel, Instagram/TikTok/YouTube, Klarna/PayPal und Google Maps (falls eingebunden) fehlen. | DSGVO-Risiko | Datenschutzerklärung auf deutsche Vorlage umstellen, alle Dienste aufnehmen. Cookie-Banner (Shopify-Banner ist vorhanden) gegen § 25 TDDDG prüfen. | Data Privacy Officer |
| 6 | **Gewinnspielseite veraltet** (Ziehung 09.12.2025) und **ohne Teilnahmebedingungen**. Teilnahme ist an Newsletter und Instagram-Follow gekoppelt. | UWG/DSGVO-Risiko, wirkt verlassen | Seite offline nehmen oder für 2026 neu aufsetzen, dann mit Teilnahmebedingungen und getrennter Newsletter-Einwilligung | Legal Compliance Checker, Email Marketing Strategist |
| 7 | **„Bereits über 2.000+ Kunden“** auf jeder Produktseite (dazu doppelt formuliert). | Irreführung nach § 5 UWG, falls nicht belegbar | Zahl belegen oder entfernen. Schreibweise korrigieren. | Brand Guardian |
| 8 | **Produktsicherheit (GPSR):** Hersteller-Kontaktangaben und Sicherheitshinweise fehlen als feste Angaben auf den Produktseiten. Es gibt keinen Hinweis zu **ABE, Teilegutachten oder Eintragung**. | Pflicht seit 12/2024, Haftung bei sicherheitsrelevanten Teilen (Lenkrad/Airbag) | Herstellerblock und Sicherheitshinweis in die Produktvorlage aufnehmen. Zulassungsfrage je Produkt klären (z. B. mit TÜV/DEKRA) und offen kommunizieren. | Legal Compliance Checker |
| 9 | **Barrierefreiheit (BFSG, seit 28.06.2025):** 0 Alt-Texte bei allen Bildern | Pflicht, außer für Kleinstunternehmen (unter 10 Beschäftigte **und** höchstens 2 Mio. € Umsatz); zugleich ein SEO-Verlust | Prüfen, ob die Ausnahme greift. Alt-Texte in jedem Fall ergänzen. | Legal Compliance Checker, SEO Specialist |

### 🟠 Bald (Sichtbarkeit & Conversion)

| # | Befund | Maßnahme | Agent |
|---|---|---|---|
| 10 | **Farbdubletten:** z. B. 12× „PSS Leder Schlüsselcover passend für BMW“, 4× Mercedes-Lenkrad usw. Alle mit identischem Titel, fast identischem Text und URLs wie `…-copy-copy-copy-copy`. Das führt zu Duplicate Content: Die Seiten konkurrieren gegeneinander um dieselben Suchbegriffe, und die Kollektionen wirken unübersichtlich. | Entweder zusammenlegen (1 Produkt, Farbe als Variante) **oder** eindeutige Titel/URLs/Texte je Farbe („… in Rot“). Alte URLs per 301-Weiterleitung umleiten. | SEO Specialist |
| 11 | **Fehlerhafte Streichpreise:** 8 BMW-Lenkräder haben einen „Vergleichspreis“ von 1.390 €, der *unter* dem Verkaufspreis von 1.690–1.990 € liegt. | Vergleichspreise löschen. Streichpreise nur mit niedrigstem Preis der letzten 30 Tage verwenden (§ 11 PAngV). | Pricing Analyst |
| 12 | **Versandfehler:** „Design Edition Audi RS6 C8“, Variante „Nein (Versand)“, ist als *nicht versandpflichtig* angelegt. Im Checkout wird dann keine Lieferadresse abgefragt. | Variante auf „Versand erforderlich“ setzen. Gewichte pflegen (239 von 245 Varianten haben 0 g). | – |
| 13 | **Stammdaten fehlen:** kein Produkttyp, keine SKU, Hersteller dreifach geschrieben („PS Sattlerei“, „PS-Sattlerei“, „PSSattlerei“) | Einheitlich „PS-Sattlerei“, Produkttypen (Lenkrad, Interieur-Paket, Accessoire, Pflege), SKUs. **Voraussetzung für Google Shopping.** | Tracking & Measurement Specialist |
| 14 | **Kollektionen ohne Text, Blog leer, Kontaktseite ohne Text** | Je Kollektion 150–300 Wörter (z. B. „Carbon Lenkrad für BMW M3/M4“). Ratgeber-Blog starten. | SEO Specialist, Content Creator |
| 15 | **Startseite hat zwei H1-Überschriften**, Meta-Titel ist lang und doppelt („PS Sattlerei … – PS-Sattlerei“) | Eine H1, Titel z. B. „Carbon Lenkräder & Interieur für Audi, BMW, Mercedes – PS-Sattlerei“ | SEO Specialist |
| 16 | **Keine Kundenbewertungen** im Shop | Bewertungs-App (z. B. Judge.me) plus Bewertungsanfrage nach dem Kauf. Google-Unternehmensprofil pflegen. | Customer Success Manager |
| 17 | **Tracking nicht erkennbar:** Im Quelltext gibt es kein GA4, Google-Tag oder Meta-Pixel. Es kann trotzdem über die Shopify-Kundenereignisse laufen. | Im Admin prüfen. Vor jeder Werbung GA4, Google Ads Conversion und Meta CAPI mit Consent Mode v2 einrichten. | Tracking & Measurement Specialist |

### 🟢 Später (Wachstum)

| # | Idee | Agent |
|---|---|---|
| 18 | **Hochpreisige Pakete (10.000–40.000 €)** verkauft kaum jemand mit „In den Warenkorb“. Besser: Button „Beratung/Termin anfragen“, Konfigurator-Formular, Finanzierung (Klarna ist vorhanden, Leasing prüfen). | Sales Engineer, Offer & Lead Gen Strategist |
| 19 | **Google Shopping/Performance Max** für Lenkräder und Schlüsselcover (199–3.990 €). Voraussetzung: Punkte 13 und 17. | PPC Campaign Strategist |
| 20 | **Content-Motor:** Vorher-Nachher-Reels, Werkstatt-Einblicke, Kundenautos (nur mit Einwilligung) für Instagram, TikTok und YouTube | Instagram Curator, TikTok Strategist, Short-Video Editing Coach |
| 21 | **Essen Motor Show 2026:** Gewinnspiel rechtssicher neu auflegen, Messe-Landingpage, Newsletter mit Double-Opt-In | Email Marketing Strategist, Offer & Lead Gen Strategist |
| 22 | **Sortiment erweitern:** naheliegend sind weitere Modelle (z. B. Porsche, BMW M2/M3 Interieur-Sets, Audi RS3 8Y), Pflegeprodukte und Gutscheine als günstiger Einstieg | Trend Researcher, Pricing Analyst |
| 23 | **B2B:** Partnerprogramm für Tuner und Werkstätten (Referenzen wie Urban Automotive, Vest Automotive bereits verlinkt) | Account Strategist |

---

## Vorschlag Reihenfolge (4 Wochen)

| Woche | Fokus |
|---|---|
| 1 | Rechtliches (Punkte 1–9) an Anwalt/Rechtstexte-Dienst geben, Versandseite, Streichpreise und Versandfehler korrigieren, „2.000+ Kunden“ klären |
| 2 | Produktdaten bereinigen (Dubletten, Typen, SKUs, Gewichte, Alt-Texte), Tracking einrichten |
| 3 | SEO-Texte für Kollektionen, Startseite und Meta-Titel, Bewertungs-App, „Beratung anfragen“ bei Paketen |
| 4 | Google Merchant Center und Shopping-Kampagne (Testbudget: **[Platzhalter €/Monat]**), Content-Plan Social, Messe-Aktion |

## Offene Angaben (Platzhalter)

- [ ] Umsatz/Bestellungen der letzten 12 Monate, Conversion-Rate, Anteil Shop vs. Werkstatt
- [ ] Margen je Produktgruppe
- [ ] Mitarbeiterzahl/Umsatz (für BFSG-Ausnahme)
- [ ] Werbebudget pro Monat
- [ ] Zulassungsstatus (ABE/Gutachten/Eintragung) je Produkt
- [ ] Beleg für „2.000+ Kunden“
- [ ] Termine der Essen Motor Show 2026 und geplante Aktion
