# 04 – Shop-Bewertung aus Kundensicht & Conversion-Plan

**Shop:** https://ps-sattlerei.shop · **Stand:** 04.11.2026 · **Status:** Entwurf, nur Vorschläge – nichts geändert, niemand kontaktiert

---

## 0. Wichtiger Hinweis zur Datengrundlage

**Der Live-Shop konnte nicht abgerufen werden.** In dieser Cloud-Sitzung ist die Domain `ps-sattlerei.shop` nicht freigegeben (DNS-Fehler „ENOTFOUND“). Das Gleiche gilt für `essen-motorshow.de`. Damit konnten Startseite, Kollektionsseiten, Produktseiten im Frontend, Warenkorb, Zahlungsarten, Footer, Rechtstexte und die mobile Darstellung **nicht** von außen geprüft werden.

Grundlage dieses Berichts:
1. `daten/produkte-uebersicht.json` (Shopify-Export: 77 Produkteinträge mit Status, Preisen, Bestand, Bildern, Alt-Texten, Optionen, Kollektionen, Tags, SEO-Titel/-Beschreibung, URL-Handles). Diese Daten bestimmen, was Kunden und Google sehen. Fast alle Befunde unten sind deshalb belastbar.
2. Websuche: Der Shop selbst wird nicht als Treffer gefunden. Eine Ausstellerseite der Essen Motor Show führt eine „PS-Sattlerei GmbH“ mit Sitz in Bergkamen (Fahrzeug-Interieur, Carbon-/Alcantara-Lenkräder). Bergkamen als Montageort steht auch in einer SEO-Beschreibung im Export.

**Damit Abschnitt 2 vervollständigt werden kann:** `ps-sattlerei.shop` in den Netzwerk-Einstellungen der Sitzung freigeben (oder den Shopify-MCP mit Lesezugriff auf Theme/Seiten/Richtlinien nutzen). Danach die Checkliste in Abschnitt 2.2 abarbeiten. Alle Aussagen, die die Frontend-Prüfung brauchen, sind mit **[LIVE PRÜFEN]** markiert.

---

## 1. Kurzbewertung (vorläufig)

| Bereich | Bewertung | Grundlage |
|---|---|---|
| Sortiment & Preisstruktur | gut – klare Premium-Positionierung, schlüssige Leiter von 19,90 € bis 39.900 € | Export |
| Katalog-Hygiene (Dubletten, URLs, Optionen) | mangelhaft | Export |
| SEO-/Shopping-Daten (Meta-Texte, Alt-Texte) | mangelhaft – zum Teil falsche Texte und Preisangaben | Export |
| Verfügbarkeit/Bestand | kritisch – viele aktive Produkte mit Bestand 0, Schlüsselcover nur mit Bestand 1 | Export |
| Hochpreis-Anfrageweg (Pakete 10–40 T€) | im Export nicht erkennbar – nur „In den Warenkorb“-Logik mit Option „Montage Ja/Nein“ | Export, [LIVE PRÜFEN] |
| Vertrauen, Navigation, Mobile, Zahlungsarten, Rechtstexte | nicht bewertbar | [LIVE PRÜFEN] |

**Vorläufige Schulnote: 4 (ausreichend)** – gilt nur für die Daten-/Katalogebene. Produkt und Handwerk wirken stark: echtes Carbon/Alcantara, Wunschfarben, Austauschverfahren mit ca. 3 Tagen Standzeit, eigene Montage. Der Katalog bremst den Verkauf aber spürbar: Dutzende Farbkopien als Einzelprodukte mit „-copy-copy“-URLs, falsche Meta-Beschreibungen mit abweichenden Preisen, kaum Alt-Texte, viele aktive Artikel mit Bestand 0. Die Gesamtnote kann nach der Live-Prüfung um eine Note nach oben oder unten gehen.

---

## 2. Bewertung aus Kundensicht

### 2.1 Befunde aus den Produktdaten (belastbar)

#### A. Farbvarianten als eigene Produkte → Dubletten, „-copy“-URLs, zersplitterte Bewertungen
Nach Prüfung des Exports ist fast jedes Lenkrad und jedes Schlüsselcover **pro Farbe als eigenes Produkt** angelegt. Daneben gibt es oft ein **Entwurfs-Masterprodukt mit allen Farben**:

| Modell | aktive Einzelprodukte | Entwurf (Master mit allen Farben) |
|---|---|---|
| GT-R Carbon BMW F-Reihe | 4 (grau, rot, schwarz, hellblau) | – |
| EVO-X Carbon BMW G-Reihe | 4 (blau, grau, schwarz, rot) | – |
| Classic Carbon Mercedes FL | 3 | 2 Entwürfe (Bestand 14 bzw. 2) |
| EVO-X Carbon Mercedes FL | 3 | 2 Entwürfe (Bestand 10/10, einer ohne Bilder) |
| EVO-X Carbon Mercedes VFL | 4 | 2 Entwürfe (Bestand 30 bzw. 16, einer mit „(Copy)“ im Titel) |
| EVO-X Forged Carbon Audi RS3/RS4/RS5 | 4 | 1 Entwurf (Bestand 20) |
| EVO-X Carbon Audi R8/TTRS | 3 | 2 Entwürfe (Bestand 16/20 bzw. 2) |
| Leder-Schlüsselcover | 22 Produkte (6 Mercedes, 12 BMW, 4 Audi), fast alle mit gleichem Titel | – |

Folgen für Kunden:
- In Kollektion und Suche erscheint dasselbe Lenkrad 3- bis 4-mal mit **identischem Titel** („PSS Leder Schlüsselcover passend für BMW“ gibt es 11-mal plus einmal „– Türkis“). Das wirkt unaufgeräumt, und Kunden können nicht vergleichen.
- Die URLs enden auf `-copy`, `-copy-copy-copy-copy` usw. Das wirkt beim Teilen (WhatsApp, Instagram) unprofessionell, und die Seiten machen sich in der Google-Suche gegenseitig Konkurrenz.
- Bewertungen, Verkaufszahlen und Google-Shopping-Signale verteilen sich auf viele Einzelseiten statt auf ein starkes Produkt.
- Entwürfe mit hohem Bestand (z. B. „Classic Black Badge Leather Iconic Edition“ Mercedes mit **Bestand 600**, Entwurf) sehen nach Datenfehlern aus. Sie sind im Shop unsichtbar, also auch nicht verkaufbar.

**Empfehlung:** Pro Modell **ein** Produkt mit Farbvarianten, Variantenbildern und Farbfeldern im Theme. Die alten Einzel-URLs per 301-Weiterleitung auf das Hauptprodukt umleiten (Shopify: Navigation → URL-Weiterleitungen). Falls die Farben bewusst einzeln in der Kollektion erscheinen sollen, gibt es Theme-/App-Lösungen, die Varianten als eigene Kacheln zeigen. Die Entscheidung gehört zum Inhaber. Die Daten sprechen klar für die Zusammenführung.

#### B. Falsche oder kopierte Meta-Beschreibungen, abweichende Preise (UWG-/PAngV-Risiko)
Die Meta-Beschreibung erscheint als Text unter dem Treffer in der Google-Suche:
- **Alcantara-Reinigungsset, Digitale Lenkradtasten, Carbon Interieur Set RS6/RS7, Black Badge Lenkrad Set, LED-Schaltwippen, Race Display, Digital Performance Wheel:** Alle tragen die Beschreibung „Carbon Lenkrad Highlights: Echtcarbon, rote Nähte, 12-Uhr-Markierung …“. Beim Reinigungsset ist das sachlich falsch.
- **Nogaro Heritage Edition RS6 C8:** Die Meta-Beschreibung sagt „ab 19.990 €“, der Preis im Export ist 24.990–26.990 €. Der SEO-Titel lautet „Iconic Edition“ statt „Nogaro Heritage“.
- **Design Edition VW T6.1:** Meta „ab 9.990 €“, Preis im Export 12.990–14.990 €.
- **Iconic Manufaktur Edition RS6 C8:** Meta „ab 39.990 €“, Preis im Export 39.900 €.
- Bei Paketen bis 40.000 € steht in der Meta-Beschreibung „jetzt online bestellen“. Das passt nicht zum tatsächlichen Kaufprozess (siehe Abschnitt 3).

Ein falscher „ab“-Preis in den Suchergebnissen kann als irreführende Preisangabe gelten (§ 5 UWG). Auch unabhängig davon verliert der Shop Vertrauen, wenn Google einen anderen Preis zeigt als der Shop. **Schnell korrigieren.** Die rechtliche Einordnung bitte vom Legal Compliance Checker bzw. einer Anwältin oder einem Anwalt prüfen lassen.

Außerdem fehlt bei vielen Produkten ein eigener SEO-Titel (`seo_title: null`), unter anderem bei RS3 Design Edition, RS6-Carbon-Sets, Classic Carbon Mercedes und Audi-Lenkrädern.

#### C. Alt-Texte fehlen fast vollständig
Nur bei 3 Produkten sind Alt-Texte gepflegt (je 2: Audi RS3 Forged grau-Master, RS3 Rot, Schlüsselcover Türkis). Alle anderen Bilder haben keinen Alt-Text. Das schadet der Barrierefreiheit: Für Online-Shops gilt seit 28.06.2025 das Barrierefreiheitsstärkungsgesetz (BFSG). Ob Ausnahmen für Kleinstunternehmen greifen, muss im Einzelfall geprüft werden. Außerdem bringt die Google-Bildersuche so keine Besucher.

#### D. Verfügbarkeit: viele aktive Produkte mit Bestand 0
Mit Bestand ≤ 0 und Status AKTIV sind unter anderem: GT-R BMW (grau), drei EVO-X BMW G, alle drei aktiven EVO-X Mercedes FL, drei EVO-X Mercedes VFL, drei Audi RS3 Forged, alle drei aktiven Audi R8, Ipanema, Daytona (Bestand −1), Digital Performance Wheel, Digitale Lenkradtasten, LED-Schaltwippen, Race Display, EVO-X Digital Ipanema, beide Carbon-Sets RSQ8/RS6 sowie 2 Schlüsselcover. Die übrigen Schlüsselcover haben **je 1 Stück**.

**[LIVE PRÜFEN]:** Zeigt der Shop hier „Ausverkauft“? Dann verliert er genau die Kunden, die schon kaufen wollen. Bei Manufakturware ist „Auf Bestellung gefertigt – Lieferzeit ca. X Wochen“ ehrlicher und verkaufsstärker. In Shopify geht das mit „Verkauf fortsetzen, wenn nicht vorrätig“ plus einer klaren Lieferzeitangabe auf der Produktseite. Die Lieferzeit muss der Inhaber festlegen: **[PLATZHALTER Lieferzeit je Produktgruppe]**. Wichtig: Die Lieferzeitangabe muss stimmen und gehört zu den Pflichtinformationen im Fernabsatz.

#### E. Optionsnamen und Zuordnung
- Uneinheitliche Optionsnamen: „Farbe“, „Color“, „Akzent Farbe“, „Nahtfarbe“, dazu Optionen, die nach einer Farbe benannt sind („Rot“, „neon gelb“, „Ipanema Braun“, „Daytona Grau“). Im Produktformular und im Google-Feed steht dann z. B. „Rot: Wunschfarbe“. Außerdem uneinheitlich: „Montage durch PS-Sattlerei“ vs. „Montage durch PS Sattlerei?“ und „Nein Versand“ vs. „Nein (Versand)“.
- **„Wunschfarbe“** ist überall eine Variante. **[LIVE PRÜFEN]:** Wie teilt der Kunde seine Wunschfarbe mit? Fehlt ein Freitextfeld oder ein Farbmuster-Prozess, entstehen Rückfragen und Abbrüche.
- Falsche Kollektionen: „Digitale Lenkradtasten“ und „Race Display“ liegen unter *Interieur Pakete*. „Carbon Schalthebel VW Golf 7“ (Entwurf) liegt unter *Lenkräder*. Die Carbon-Sets RSQ8/RS6 sind nur in „Alle Interieur Pakete“, nicht in „Audi Interieur Pakete“.
- Irreführende URL-Handles: RSQ8-Set → `pss-carbon-paket-passend-fur-audi-rs6-c8`, Digital Performance Wheel → `…ipanema-edition…-copy`, Carbon Interieur Set → `pss-digitale-lenkradtasten…-copy`, Black Badge Set → `pss-carbon-interieur-set…-copy`.
- Preisabweichungen zur Briefing-Angabe: Das Reinigungsset steht im Export mit 20 € (Briefing: 19,90 €), das BMW-M3-Paket startet bei 9.990 € (Briefing: Pakete ab 12.000 €). **[PRÜFEN]**, welcher Preis gilt.

#### F. Bilder
- Lenkräder und Schlüsselcover haben meist nur **2 Bilder** (seitlich + frontal, freigestellt mit Photoroom). Bilder im eingebauten Zustand, Detailbilder von Naht und Carbonstruktur sowie Größenvergleiche fehlen nach den Dateinamen.
- Die **Nogaro Heritage Edition (24.990 €)** hat nur 2 Bilder. Für ein Produkt in dieser Preisklasse ist das zu wenig.
- Positiv: Iconic Manufaktur RS6 (10 Bilder), RS3 Design (8 Bilder, darunter ein echtes Foto `IMG_6826`), G-Klasse (5 Innenraumbilder).
- Bilder aus der Werkstatt (Handarbeit, Team, Montage) sind in den Dateinamen nicht erkennbar. **[LIVE PRÜFEN]**, ob es sie auf Startseite oder „Über uns“ gibt.

#### G. Stärken, die stärker ausgespielt werden sollten
- **Austauschverfahren mit ca. 3 Tagen Standzeit**: ein echtes Alleinstellungsmerkmal, das bislang nur in SEO-Titeln steht.
- **Montage in eigener Werkstatt (Bergkamen)**: Damit ist regionales Marketing möglich (Ruhrgebiet/NRW, Termin vor Ort).
- **Wunschfarbe bei jedem Produkt**: Manufaktur-Argument.
- **Modell-Tags bereits gepflegt** (m2, m3, c63, g63, rs3, rs6, ttrs …): Daraus lässt sich eine Fahrzeugauswahl nach Marke → Modell bauen, ohne die Daten neu zu erfassen.

### 2.2 Checkliste für die Live-Prüfung (sobald die Domain freigegeben ist)

| Prüfpunkt | Worauf achten | Ergebnis |
|---|---|---|
| Erster Eindruck Startseite (Desktop + Mobil) | Ist in 5 Sekunden klar, was PS-Sattlerei macht, für welche Fahrzeuge, und dass es eine Manufaktur in Deutschland ist? | [OFFEN] |
| Vertrauen | Bewertungen (Shop/Google), Referenzfahrzeuge, Werkstattbilder, Team, „Über uns“, Gründungsjahr, Messen (Essen Motor Show – **nur wenn belegt**) | [OFFEN] |
| Kontakt | Telefon, WhatsApp, E-Mail, Adresse, Öffnungszeiten, Anfahrt Werkstatt | [OFFEN] |
| Navigation | Menü nach Marke → Modell? Filter in Kollektionen (Marke, Modell, Baujahr, Farbe)? Funktioniert die Suche mit „RS6“, „C63“ oder „M3“? | [OFFEN] |
| Produktseite | Nutzenargumente oben, Kompatibilität (Baujahre, Ausstattung, Airbag/HOD/Spurhalteassistent), Lieferzeit, Montageablauf, FAQ, Garantie, Altteil-Rückgabe beim Austausch | [OFFEN] |
| Preisangaben (PAngV) | Gesamtpreis inkl. MwSt., Hinweis auf Versandkosten, ggf. Grundpreis (Reinigungsset: Füllmenge!) | [OFFEN] |
| Handlungsaufrufe | Gibt es bei Paketen neben „In den Warenkorb“ auch „Beratung anfragen“ oder „Termin buchen“? | [OFFEN] |
| Zahlungsarten | PayPal, Klarna, Kreditkarte, Vorkasse/Überweisung, Ratenzahlung bzw. Finanzierung | [OFFEN] |
| Warenkorb | Cross-Selling, Versandkostenhinweis, Vertrauenselemente, Express-Checkout | [OFFEN] |
| Rechtstexte | Impressum, AGB (inkl. Austauschverfahren/Altteil, Montage, Sonderanfertigung), Widerrufsbelehrung inkl. Ausnahme für Sonderanfertigungen (§ 312g Abs. 2 Nr. 1 BGB), Datenschutzerklärung (Pixel, Metricool, Apps), Versand-/Zahlungsseite | [OFFEN] |
| Cookie-Banner | Pixel (Meta, Google) erst nach Einwilligung (§ 25 TDDDG), „Ablehnen“ gleichwertig zu „Akzeptieren“ | [OFFEN] |
| Mobil | Ladezeit, Bildgrößen, klebender Kauf-/Anfrage-Button, Lesbarkeit der Optionen | [OFFEN] |

---

## 3. Hochpreis-Logik: Wie aus Interesse an einem Interieur-Paket eine Anfrage wird

Pakete von rund 10.000 bis 40.000 € werden nach aller Erfahrung im Premium-Bereich selten spontan in den Warenkorb gelegt. Kunden wollen das Material sehen, die Passform für ihr Fahrzeug geklärt haben, einen Termin abstimmen und die Finanzierung klären. Aktuell sind die Pakete laut Export ganz normale Warenkorb-Produkte mit „Montage Ja/Nein (Versand)“. Ein Paket im Austauschverfahren „per Versand“ wirft zudem Fragen auf: Wie läuft der Ausbau, wie die Altteil-Rückgabe? Das ist zu klären.

### Empfohlener Anfrageweg („Zwei-Spur-Prinzip“)
Auf jeder Paket-Seite zwei gleichwertige Buttons:

1. **Primär: „Beratung & Wunschtermin anfragen“** → kurzes Formular (Fahrzeug, Baujahr/FIN optional, Wunschfarbe, Wunschzeitraum, bevorzugter Kontaktweg, Rückrufzeit). Mit einer Datenschutz-Information nach Art. 13 DSGVO. Eine Einwilligung ist für die Bearbeitung der Anfrage nicht nötig (Art. 6 Abs. 1 lit. b DSGVO). Eine Newsletter-Einwilligung nur als **separate, nicht vorangekreuzte** Checkbox.
2. **Sekundär: „Direkt reservieren“** per **Anzahlung** (Betrag **[PLATZHALTER, Inhaber]**), z. B. als eigenes „Reservierungsprodukt“ oder per Teilzahlungs-/Vorbestell-App. Die Restzahlung erfolgt bei Montage. Vorteil: verbindlicher Montageslot, weniger No-Shows. Anzahlung, Stornobedingungen und Widerrufsrecht müssen in den AGB sauber geregelt sein → Rechtsprüfung.

Ergänzend:
- **WhatsApp-Button** (WhatsApp Business) auf Paket- und Lenkradseiten. Datenschutz beachten: Hinweis in der Datenschutzerklärung, Button als Link ohne eingebettetes Skript vor der Einwilligung.
- **Rückruf-Option** im Formular („Rückruf heute zwischen … und …“).
- **Terminbuchung für Werkstattbesuch/Materialberatung** (Kalender-Tool, z. B. Shopify-App oder externer Dienst mit AV-Vertrag).
- **„Muster-Box“ / Materialproben** (Alcantara, Leder, Nahtfarben) gegen Gebühr, verrechenbar mit dem späteren Auftrag. Preis **[PLATZHALTER]**. Das wäre ein starkes Einstiegsprodukt für Pakete.
- **Konfigurator light**: Fahrzeug → Paket → Naht-/Akzentfarbe → Vorschaubild aus vorhandenen Fotos → Anfrage. Ein voller 3D-Konfigurator ist erst sinnvoll, wenn sich die Anfragen über das Formular bewährt haben.
- **Ablauf-Grafik „In 4 Schritten zum neuen Interieur“**: Beratung → Fertigung des Austauschsatzes → 3 Tage Montage in Bergkamen → Abholung. Dazu ein Hinweis auf die Altteil-Rückgabe. Auf allen Paketseiten und auf einer eigenen Seite „So funktioniert's“.

### Finanzierung
- **Für Lenkräder (1.690–3.990 €)**: Raten- oder Später-Zahlung über Zahlungsdienstleister (z. B. PayPal Ratenzahlung, Klarna), soweit über Shopify verfügbar. Kreditentscheidung und Pflichtinformationen liegen dann beim Anbieter. Die verfügbaren Betragsgrenzen beim jeweiligen Anbieter prüfen. **[PRÜFEN]**
- **Für Pakete (10–40 T€)**: Finanzierung über eine Partnerbank. Achtung: Wer Verbraucherdarlehen vermittelt, braucht unter Umständen eine Erlaubnis nach § 34c GewO. Wer mit Zinsen oder Raten wirbt („ab X € im Monat“), muss die Pflichtangaben nach § 17 PAngV machen (repräsentatives Beispiel). **Erst rechtlich klären, dann bewerben.** Bis dahin reicht der Satz „Finanzierung auf Anfrage möglich“, wenn das tatsächlich zutrifft.

---

## 4. Funnel & Wachstum

### 4.1 Einstiegsprodukte als Türöffner
| Produkt | Rolle | Vorschlag |
|---|---|---|
| Alcantara-Reinigungsset (19,90 €/20 €) | Erstkauf mit geringem Risiko, Pflege-Bedarf jedes Alcantara-Besitzers | Eigene saubere Produktseite (Meta-Text korrigieren, mehrere Bilder, Anwendungsvideo, Grundpreis/Füllmenge prüfen). Als Zusatzartikel bei jedem Lenkrad/Paket anbieten. TikTok/Reels-Content „Alcantara-Lenkrad reinigen“ als Einstieg. |
| Nappa-Schlüsselcover (199–249 €) | Geschenk, Markenerlebnis, ohne Montage | Zu je 1 Produkt pro Marke/Schlüsseltyp zusammenführen, Farbfelder zeigen, „Wunschfarbe“ gut erklären. Geschenk-Story (Weihnachten!) mit Geschenkverpackung oder Gutschein. |
| Black Badge Lenkrad Set (690–790 €), LED-Schaltwippen (490–690 €) | Mittelstufe vor dem Lenkrad | Als „Upgrade ohne neues Lenkrad“ positionieren |
| **Neu: Gutschein** (Shopify-Geschenkkarte) | Weihnachtsgeschäft | Kurzfristig einrichtbar |
| **Neu: Materialprobe/Muster-Box** | Vorstufe zur Paket-Anfrage | siehe Abschnitt 3 |

### 4.2 Cross-Selling
- **Lenkrad → Reinigungsset + Schlüsselcover in Lenkrad-Akzentfarbe** („Passend zu Ihrem Lenkrad“). Umsetzung mit Shopify Search & Discovery (ergänzende Produkte) bzw. Theme-Block „Komplementärprodukte“.
- **Paket → Lenkrad-Upgrade, Schlüsselcover, Pflegeset** im Angebot/in der Beratung.
- **Bundle „Signature Set“** (Lenkrad + Schlüsselcover + Pflegeset) zu einem Paketpreis. Ob es einen Rabatt gibt und wie hoch, entscheidet der Inhaber. Kein „statt“-Preis ohne tatsächlich verlangten Vorpreis (§ 11 PAngV beachten).
- Die Fahrzeug-Tags machen das gezielt möglich: Ein RS6-Lenkrad schlägt RS6-Schaltwippen und das Audi-Schlüsselcover vor.

### 4.3 E-Mail-Erfassung (rechtssicher)
- **Double-Opt-In** über Shopify Email/Shopify Forms oder ein Tool mit AV-Vertrag. Einwilligung protokollieren (Nachweispflicht). Werbung per E-Mail nur mit Einwilligung (§ 7 Abs. 2 Nr. 2 UWG). Die Bestandskunden-Ausnahme nach § 7 Abs. 3 UWG gilt nur für eigene ähnliche Waren, mit Widerspruchshinweis bei Erhebung und in jeder Mail.
- **Anreiz statt Rabattschlacht** (passt besser zu Premium): „Pflege-Guide Alcantara & Carbon“ (PDF) oder „Vorab-Info zu neuen Editionen“. Ein Rabatt ist möglich, muss aber transparent sein.
- **Pop-up:** Nicht beim ersten Seitenaufruf, gut schließbar, mobil nicht bildschirmfüllend. Das Pop-up selbst braucht keine Cookie-Einwilligung, solange es keine nicht notwendigen Cookies oder Tracking setzt. Bei Pop-up-Apps genau das prüfen (§ 25 TDDDG).
- **Willkommensstrecke** (nach DOI, 3–4 Mails): Manufaktur-Story und Werkstatt → Bestseller nach Fahrzeug → Austauschverfahren und Beratung → Bewertungen/Referenzen.

### 4.4 Warenkorb- und Checkout-Abbrecher
- Erinnerungs-Mails an Kaufabbrecher sind in Deutschland rechtlich umstritten. Sicher ist der Versand nur an Personen mit **Werbeeinwilligung**. Shopify bietet im Checkout eine Marketing-Checkbox an (darf nicht vorausgewählt sein). Ohne Einwilligung keine Erinnerungs-Mail. Vor dem Start rechtlich abnehmen lassen.
- Ohne E-Mail: **Retargeting** über Meta/Google, nur mit Cookie-Einwilligung (§ 25 TDDDG, Google Consent Mode v2).
- **Größter Hebel bei Hochpreis-Abbrechern:** Ein persönlicher Kontakt wirkt meist besser als eine Automatik-Mail. Wer eine Anfrage gestellt hat, bekommt innerhalb von **[PLATZHALTER: z. B. 1 Werktag]** einen Rückruf.

### 4.5 Bewertungen sammeln
- Eine Bewertungs-App (z. B. Judge.me, Shopify-Produktbewertungen) mit **Prüfhinweis**: Nach § 5b Abs. 3 UWG muss angegeben werden, ob und wie geprüft wird, dass Bewertungen von echten Käufern stammen.
- **Google-Unternehmensprofil Bergkamen**: Jeder Kunde mit Montage vor Ort bekommt bei der Abholung eine Karte oder einen QR-Code. Nicht nur positive Bewertungen anfragen und keine Gegenleistung ohne Kennzeichnung (UWG).
- **Vorher-Nachher-Fotos** der Kundenfahrzeuge (mit schriftlicher Einwilligung, Kennzeichen unkenntlich) für Referenzgalerie, Produktseiten und Social Media.
- Bewertungs-Mail nach Lieferung bzw. Montage: als Service-Mail zulässig, solange sie keine Werbung enthält. Die Abgrenzung ist umstritten, daher im Zweifel nur mit Einwilligung versenden.

### 4.6 B2B: Autohäuser, Tuner, Händler
- **Seite „Für Händler & Werkstätten“** mit Anfrageformular (Firma, USt-ID, Fahrzeugschwerpunkte, Volumen). Händlerkonditionen **[PLATZHALTER]**.
- Zielgruppen: AMG-/M-/RS-Händler und Performance-Center (Auslieferungs-Upgrade, Gebrauchtwagen-Aufbereitung), Tuner/Veredler (Lenkrad als Zulieferteil), Fahrzeugaufbereiter, Leasingrückläufer-Aufbereitung.
- Erstansprache **nicht per Kalt-E-Mail an Unternehmen ohne mutmaßliche Einwilligung** (§ 7 Abs. 2 Nr. 2 UWG gilt auch B2B). Besser: Messe (Essen Motor Show, falls Teilnahme belegt), persönlicher Besuch, Telefon im B2B-Bereich nur bei mutmaßlicher Einwilligung (§ 7 Abs. 2 Nr. 1 UWG), LinkedIn-Kontakt, Empfehlungen.
- Technik: B2B-Funktionen in Shopify hängen vom Tarif ab **[PRÜFEN]**. Alternativ Händlerkunden per Kunden-Tag mit eigenem Rabattcode oder Preisliste auf Anfrage.

### 4.7 Kanäle
- **Google & YouTube** ist aktiv. Wegen falscher Meta-Texte, uneinheitlicher Optionen, Bestand 0 und Dubletten leidet der Merchant-Center-Feed vermutlich. **[PRÜFEN]** im Merchant Center unter Diagnose.
- **TikTok @pssattlerei** (Metricool): Inhalte zuerst organisch aufbauen (Werkstatt-Prozess, Vorher/Nachher, Reinigungs-Tutorial). Den TikTok-Shopify-Kanal und den Pixel erst mit Consent-Anbindung aktivieren.
- **Regional:** Google-Unternehmensprofil, „Lenkrad beziehen lassen NRW/Ruhrgebiet“-Landingpage, Montage-Termin als Erlebnis.

---

## 5. Priorisierte Maßnahmenliste

Legende Aufwand: **S** = Stunden, **M** = 1–3 Tage, **L** = > 1 Woche. Wirkung qualitativ: hoch/mittel/gering. Benchmarks werden bewusst nicht angegeben. Erst die Ausgangswerte (Baseline) aus Shopify Analytics erheben, dann vergleichen.

### 5.1 Quick Wins – diese Woche

| # | Maßnahme | Wirkung | Aufwand | Wer/was | Messgröße |
|---|---|---|---|---|---|
| Q1 | **Falsche Meta-Beschreibungen und „ab“-Preise korrigieren** (Reinigungsset, Lenkradtasten, Sets, Schaltwippen, Race Display, Nogaro, T6.1, Iconic; „jetzt online bestellen“ bei Paketen ersetzen durch „Beratung anfragen“) | hoch (Vertrauen, Rechtsrisiko) | S | Shopify-Admin; Texte: SEO Specialist-Agent | Google Search Console: Klickrate der betroffenen URLs; keine Preisabweichungen mehr |
| Q2 | **Bestand 0 klären**: Für Manufakturware „Verkauf fortsetzen“ aktivieren und eine **ehrliche Lieferzeit** auf die Produktseite schreiben; Daytona-Bestand −1 korrigieren | hoch (verkaufbare Produkte statt „Ausverkauft“) | S–M | Inhaber legt Lieferzeiten fest; Admin setzt um | Anzahl aktiver Produkte, die nicht kaufbar sind (Ziel: 0); Add-to-Cart-Rate |
| Q3 | **„Beratung anfragen“-Button + WhatsApp/Telefon** auf allen Paket- und Lenkradseiten (Shopify-Formular, Datenschutzhinweis) | hoch (Pakete) | S–M | Admin/Theme-Editor; Datenschutzerklärung ergänzen | Anzahl Anfragen pro Woche; Anteil Anfragen → Angebot → Auftrag |
| Q4 | **Weihnachts-Einstieg**: Geschenkgutschein aktivieren, Schlüsselcover + Reinigungsset als „Geschenk für Autoliebhaber“-Kollektion, Bestellschluss für Lieferung vor Weihnachten **[PLATZHALTER Datum]** nennen | mittel–hoch (saisonal) | S | Admin; Social-Media-Content-Creator für Posts | Umsatz Einstiegsprodukte; Anzahl Gutscheinverkäufe |
| Q5 | **Cross-Selling** einschalten: Reinigungsset + passendes Schlüsselcover auf Lenkradseiten und im Warenkorb (Search & Discovery: ergänzende Produkte) | mittel (Warenkorbwert) | S | Admin | Durchschnittlicher Bestellwert; Anteil Bestellungen mit ≥ 2 Artikeln |
| Q6 | **Cookie-Banner und Pixel prüfen** (Meta/Google erst nach Einwilligung, Consent Mode v2) | Rechtssicherheit, Datenqualität | S | Admin + Data Privacy Officer-Agent | Einwilligungsrate; keine Pixel-Aufrufe vor Einwilligung (Browser-Test) |
| Q7 | **Live-Prüfung nachholen** (Checkliste 2.2), sobald die Domain freigegeben ist | Grundlage für alle weiteren Maßnahmen | S | Freigabe der Domain in der Sitzung | Checkliste vollständig |
| Q8 | **Baseline erheben**: Sitzungen, Conversion-Rate, Add-to-Cart, Checkout erreicht, Ø Bestellwert, Anfragen, Kanalherkunft (letzte 90 Tage) | Messbarkeit | S | Analytics Reporter-Agent / Shopify Analytics | – (Ausgangswerte) |

### 5.2 In 30 Tagen

| # | Maßnahme | Wirkung | Aufwand | Wer/was | Messgröße |
|---|---|---|---|---|---|
| D1 | **Farbkopien zu einem Produkt mit Varianten zusammenführen** (Lenkräder, Schlüsselcover), 301-Weiterleitungen, saubere Handles ohne „-copy“; Entwürfe aufräumen (Bestand 600 prüfen!) | hoch (Übersicht, SEO, Shopping-Feed, Bewertungen bündeln) | M | Admin; ggf. Shopify-Partner; vorher Export sichern | Anzahl Produkte/Dubletten; 404-Fehler (Search Console); organische Klicks |
| D2 | **Fahrzeugauswahl Marke → Modell**: Filter über Tags/Metafelder (Search & Discovery), Menü „Mein Fahrzeug“ (Audi/BMW/Mercedes/VW → Modell) | hoch (Navigation) | M | Admin/Theme; Tags vereinheitlichen | Nutzung des Filters; Absprungrate der Kollektionsseiten; Suchanfragen ohne Treffer |
| D3 | **Produktseiten-Standard**: Nutzen-Bullets oben, Kompatibilitäts-Tabelle (Modell, Baujahr, Ausstattung, Airbag/HOD), Lieferzeit, Montageablauf, Garantie, FAQ-Block; Optionsnamen vereinheitlichen; „Wunschfarbe“ mit Freitext/Musterprozess | hoch | M | Inhaber liefert Fakten; Content Creator-Agent für Texte | Conversion-Rate Produktseite; Rückfragen zu Kompatibilität (E-Mail/Telefon) |
| D4 | **Alt-Texte für alle Bilder** (Produkt, Modell, Farbe, Material) | mittel (BFSG/Barrierefreiheit, Bildersuche) | S–M | Admin, ggf. Massen-Editor | Anteil Bilder mit Alt-Text (Ziel 100 %) |
| D5 | **Bewertungssystem + Google-Profil** mit Prüfhinweis (§ 5b UWG), QR-Karte bei Abholung | hoch (Vertrauen) | S–M | Inhaber/Werkstatt; App | Anzahl Bewertungen pro Monat; Ø Bewertung |
| D6 | **Newsletter mit Double-Opt-In** + Willkommensstrecke (3–4 Mails), dezentes Pop-up | mittel | M | Email Marketing Strategist-Agent; Shopify Email | DOI-Bestätigungen; Öffnungs-/Klickrate; Umsatz aus E-Mail |
| D7 | **Seite „So funktioniert das Austauschverfahren“** + Ablaufgrafik + Werkstatt-/Teamfotos + „Über uns“ mit echten Fakten | hoch (Pakete) | M | Inhaber, Fotos aus Werkstatt; Visual Storyteller-Agent | Seitenaufrufe → Anfragen; Verweildauer |
| D8 | **Ratenzahlung für Lenkräder** über den Zahlungsdienstleister prüfen/aktivieren; rechtliche Klärung zur Paket-Finanzierung starten | mittel–hoch | S (Ratenzahlung) / M (Finanzierung) | Inhaber, Steuerberatung/Anwalt | Anteil Bestellungen mit Raten; Abbrüche im Checkout |
| D9 | **Merchant-Center-Diagnose** beheben (nach D1/Q1/Q2) | mittel–hoch | S–M | Tracking & Measurement Specialist-Agent | Abgelehnte/eingeschränkte Artikel; Shopping-Klicks |

### 5.3 In 90 Tagen

| # | Maßnahme | Wirkung | Aufwand | Wer/was | Messgröße |
|---|---|---|---|---|---|
| N1 | **Anzahlung/Reservierung** für Pakete (Montageslot buchen) inkl. AGB-Regelung | hoch | M–L | Inhaber + Rechtsprüfung; App/Theme | Reservierungen; Quote Anfrage → Anzahlung → Auftrag |
| N2 | **Muster-Box / Materialproben** als bezahlte Vorstufe zum Paket (verrechenbar) | mittel–hoch | M | Werkstatt (Proben), Admin | Verkaufte Muster-Boxen; Anteil, der später ein Paket kauft |
| N3 | **Konfigurator light** (Fahrzeug → Paket → Farben → Vorschau → Anfrage) | mittel–hoch | L | Shopify-Partner/App; Fotos je Farbkombination | Konfigurator-Starts → Anfragen |
| N4 | **B2B-Programm**: Händlerseite, Konditionen, Musterpaket für Showrooms, persönliche Ansprache regionaler AMG-/M-/RS-Händler und Tuner | hoch (planbares Volumen) | L | Inhaber; Outbound Strategist-/Sales Outreach-Agent (UWG-konform) | B2B-Leads; Händler mit Erstbestellung; B2B-Umsatzanteil |
| N5 | **Content-Motor TikTok/Instagram/YouTube** (Werkstatt, Vorher/Nachher, Pflege-Tutorials) mit Verlinkung auf Fahrzeug-Landingpages | mittel–hoch | laufend | Social-Media-Content-Creator-Agent, Metricool | Profilaufrufe → Shop-Sitzungen (UTM); Anfragen mit Quelle Social |
| N6 | **Fahrzeug-Landingpages** (z. B. „Audi RS6 C8 Interieur“, „Mercedes G-Klasse W463A Interieur“) mit allen passenden Produkten, Referenzen, FAQ | mittel–hoch (SEO, Ads-Zielseiten) | M je Seite | SEO Specialist-Agent | Organische Sitzungen je Seite; Anfragen je Seite |
| N7 | **Kundenbindung**: Pflege-Erinnerung (nur mit Einwilligung), Upgrade-Angebote (Lenkrad-Kunde → Paket), Empfehlungsprogramm (Gutschein für Werber und Geworbenen, transparent) | mittel | M | Email Marketing Strategist-Agent | Wiederkaufrate; Empfehlungen |
| N8 | **Experiment-Routine**: 2–4 A/B-Tests pro Monat (z. B. Button-Text „Beratung anfragen“ vs. „Wunschtermin sichern“, Bildreihenfolge, Lieferzeit-Formulierung) | mittel (kontinuierlich) | S je Test | Growth-/Analytics-Agent; Test-App | Signifikante Gewinner; Conversion-Rate-Verlauf |

---

## 6. Messrahmen (Funnel)

| Stufe | Messgröße | Quelle |
|---|---|---|
| Reichweite | Sitzungen nach Kanal (Organisch, Google Shopping, Social, Direkt) | Shopify Analytics, Search Console, Metricool |
| Interesse | Produktseitenaufrufe je Kategorie; Filter-Nutzung | Shopify Analytics |
| Absicht | Add-to-Cart-Rate (Lenkräder/Zubehör); **Anfragen** (Pakete); WhatsApp-Klicks | Shopify, Formular-Eingang |
| Abschluss | Conversion-Rate; Quote Anfrage → Angebot → Auftrag; Ø Bestellwert | Shopify; einfache Anfrage-Liste (CRM/Tabelle) |
| Bindung | DOI-Abonnenten; Bewertungen; Wiederkauf; Empfehlungen | Shopify Email, Bewertungs-App |

**North-Star-Vorschlag:** *Qualifizierte Anfragen + Bestellungen pro Woche.* Pakete werden über Anfragen verkauft, Lenkräder und Zubehör über den Warenkorb. Darum gehören beide in eine Kennzahl.

---

## 7. Offene Punkte / Platzhalter für den Inhaber
- [ ] Domain `ps-sattlerei.shop` (und ggf. `essen-motorshow.de`) in der Sitzung freigeben → Live-Prüfung (Abschnitt 2.2)
- [ ] Lieferzeiten je Produktgruppe; Termine für die Montage
- [ ] Gültige Preise klären: Reinigungsset 19,90 € oder 20 €? M3-Paket ab 9.990 €?
- [ ] Ist der Bestand von 600 beim Entwurf „Classic Black Badge Leather“ korrekt?
- [ ] Höhe der Anzahlung, Stornoregeln, Altteil-Rückgabe beim Austauschverfahren
- [ ] Finanzierungspartner und Erlaubnislage (§ 34c GewO)
- [ ] Händlerkonditionen B2B
- [ ] Belegbare Vertrauensnachweise: Messeteilnahmen, Zertifikate, Anzahl umgebauter Fahrzeuge – **nur echte Angaben verwenden**
- [ ] Freigabe der Maßnahmen vor jeder Umsetzung

---

## Quellen
- Interner Shopify-Export: `/home/user/digitalisierung-firma/analyse/2026-11-verkauf/daten/produkte-uebersicht.json`
- Websuche, Treffer Ausstellerliste Essen Motor Show (Seite selbst nicht abrufbar): https://essen-motorshow.de/car-exhibition/exhibitor-list/detail/ps-sattlerei-gmbh-dace2
- Rechtsgrundlagen (allgemein, keine Rechtsberatung): UWG §§ 5, 5b, 7; PAngV §§ 11, 17; DSGVO Art. 6, 7, 13; TDDDG § 25; BGB § 312g; GewO § 34c; BFSG
