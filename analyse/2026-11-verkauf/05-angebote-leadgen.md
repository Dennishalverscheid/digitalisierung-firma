# 05 – Angebote & Anfrage-Strecken (Offer & Lead Gen)

**PS-Sattlerei · Stand: 04.11.2026 · Status: ENTWURF zur internen Freigabe – nichts davon ist veröffentlicht oder im Shop geändert.**

> Grundlage: `daten/produkte-uebersicht.json` (79 Shopify-Einträge). Die Produktseiten auf ps-sattlerei.shop waren aus dieser Sitzung nicht abrufbar (Domain im Netzwerk der Cloud-Sitzung nicht freigegeben). Aussagen zu Garantie, Lieferzeit, Zahlungsarten, Gutachten/Eintragung usw. sind deshalb **nicht geprüft** und als `[KLÄREN]` markiert.
> Alle Garantien, Bundle-Preise und Konditionen sind **Vorschläge** und müssen vom Inhaber auf Machbarkeit (Kapazität, Marge, Haftung) geprüft werden. Vor Veröffentlichung: AGB/Garantietexte rechtlich prüfen lassen (Legal Compliance Checker bzw. Anwalt).

---

## 0. Ausgangslage: Wo das Angebot heute Wert verliert

Bewertung nach der Wertgleichung *Wert = (Traumergebnis × Wahrscheinlichkeit des Erfolgs) ÷ (Wartezeit × Aufwand)*, aus Sicht eines Käufers eines RS6/M3/G63:

| Hebel | Einschätzung (1–10) | Begründung aus den Daten |
|---|---|---|
| Traumergebnis | 8 | Starkes Produkt: Manufaktur, Wunschfarbe, Alcantara/Nappa/Carbon, modellspezifisch. |
| **Wahrscheinlichkeit (Vertrauen)** | **3** | **Schwächster Hebel.** Keine sichtbaren Belege im Datensatz (Referenzen, Vorher/Nachher je Modell, Garantie-Aussagen). 76 von 79 Produkten ohne Alt-Texte; mehrere Titel doppelt (10 doppelte aktive Titel) – wirkt unaufgeräumt. Bei 12.000–40.000 € Kaufpreis entscheidet Vertrauen, nicht Preis. |
| Wartezeit | 7 | Echter Vorteil: Austauschverfahren mit ca. 3 Werktagen Standzeit. Wird aber nur in einzelnen SEO-Texten erwähnt, nicht als Kernversprechen. |
| **Aufwand für den Käufer** | **4** | Fahrzeug hinbringen, 3 Tage ohne Auto, Farbe am Bildschirm wählen („Wunschfarbe“ ohne Muster), Passform-Unsicherheit (Facelift/Vor-Facelift, HOD, Spurhalteassistent). |

**Konsequenz:** Die nächsten Arbeitsstunden gehören *Vertrauen* (Belege, Zusagen, Vorab-Check) und *Aufwand-Reduktion* (Muster per Post, Hol-/Bringservice, Video-Beratung) – **nicht** Rabatten.

**Auffälligkeiten mit Verkaufs- bzw. Rechtsrelevanz (vor jeder Kampagne beheben):**

1. **Preisangaben in SEO-Beschreibungen widersprechen den Shop-Preisen** (Irreführungsrisiko § 5 UWG, PAngV):
   - Nogaro Heritage Edition RS6 C8: SEO „ab 19.990 €“ – Shop-Preis 24.990–26.990 €.
   - VW T6.1 Design Edition: SEO „ab 9.990 €“ – Shop-Preis 12.990–14.990 €.
   - Iconic Manufaktur Edition RS6 C8: SEO „ab 39.990 €“ – Shop-Preis 39.900 €.
   - Alcantara-Reinigungsset: Datensatz 20 €, kommuniziert 19,90 € → `[KLÄREN]` welcher Preis gilt.
2. **27 aktive Produkte mit Bestand ≤ 0** (u. a. viele Lenkräder, Carbon-Sets, Digital Wheel). Wenn das Fertigung auf Bestellung ist: Shopify auf „Weiterverkaufen bei 0“ + Lieferzeit-Hinweis stellen; sonst sind diese Seiten verlorene Anfragen.
3. **Mercedes-Lenkräder mit hohem Bestand liegen als Entwurf** (z. B. Black Badge Leather Iconic FL: Bestand 600 – vermutlich Datenfehler; EVO-X Vor-Facelift: 30) – `[KLÄREN]`. Ware auf Lager ist das ideale Material für Weihnachten/Frühjahr (Lieferfähigkeit sofort).

---

## 1. Angebots-Architektur: Einstieg → Kern → Premium

### 1.1 Die Leiter

| Stufe | Rolle | Produkte (lt. Datensatz) | Preisband | Ziel |
|---|---|---|---|---|
| **Einstieg** | Erstkauf, Geschenk, „PSS anfassen“ | Alcantara-Reinigungsset, Leder-Schlüsselcover (Audi/BMW/Mercedes) | 19,90/20 € · 199–249 € | Kunde + E-Mail-Einwilligung gewinnen, Qualität spürbar machen |
| **Kern** | Hauptumsatz online | Carbon-/Leder-Lenkräder, Black Badge Lenkrad Set, Schaltwippen, Carbon-Sets | 690–3.990 € | Häufigster Abschluss, Brücke zum Paket |
| **Premium** | Hoher Deckungsbeitrag, Beratung nötig | Design / Heritage / Iconic Editionen (RS3, RS6, M3, G-Klasse, T6.1) | 9.990–39.900 € | Über Anfrage-Strecke, nicht über „In den Warenkorb“ |

**Leitprinzip:** Jede Stufe enthält einen natürlichen Schritt zur nächsten:
- Schlüsselcover-Käufer bekommt eine Karte im Paket: „Ihr Lenkrad in derselben Farbe – Materialmuster kostenlos anfordern“ (QR-Code).
- Lenkrad-Käufer bekommt nach Montage ein Angebot für das passende Paket mit **Anrechnung** des Lenkrads (Vorschlag, siehe 1.2 C).

### 1.2 Bundles (Vorschlag)

> Bundle-Preise sind neue, eigenständige Preise. Die Summe der Einzelpreise darf als Orientierung genannt werden, **wenn** alle Einzelteile tatsächlich zu diesen Preisen im Shop angeboten werden. Kein Streichpreis-Effekt mit fiktiven Werten. Der Rabattbetrag ist Platzhalter `[X €]`, bis der Inhaber die Marge geprüft hat.

**A) „Matching Set“ – Lenkrad + Schlüsselcover in identischer Farbe/Naht**
- Inhalt: beliebiges Lenkrad + Schlüsselcover passend zur Marke, gleiche Leder-/Nahtfarbe.
- Wert für den Kunden: einheitlicher Look, ein Ansprechpartner, ein Farbabgleich.
- Preislogik: Einzelpreise z. B. EVO-X BMW G-Reihe 1.990 € + Schlüsselcover 199 € = 2.189 €. Bundle-Vorschlag: Schlüsselcover zum Bundle-Preis von `[X €]` oder Pflegeset gratis dazu.
- Warum: Erhöht Warenkorb um ca. 10 % ohne Lenkrad-Preis anzutasten.

**B) „Erste-Hilfe Alcantara“ – Pflegeset als Standard-Beigabe**
- Jedes Lenkrad/Paket enthält das Reinigungsset (Einkaufswert gering) + Pflegeanleitung.
- Wirkt auf „Wahrscheinlichkeit“: Kunde weiß, wie er das Material lange schön hält. Reduziert Reklamationen durch falsche Pflege.

**C) „Upgrade-Pfad“ – Lenkrad-Anrechnung auf das Interieur-Paket (Vorschlag)**
- Wer innerhalb von `[12]` Monaten nach Lenkrad-Kauf ein Interieur-Paket für dasselbe Fahrzeug bestellt, bekommt `[X €]` angerechnet (sofern das Paket ein Lenkrad enthält und das gekaufte Lenkrad weiterverwendet bzw. zurückgenommen werden kann).
- `[KLÄREN]`: technisch/kalkulatorisch machbar? Klare Bedingungen schriftlich.
- Warum: Senkt das Risiko des Erstkaufs („ich verbaue mir nichts“) und macht jeden Lenkrad-Kunden zum Paket-Lead.

**D) Audi RS6/RS7 C8 „Cockpit Komplett“** (größte Produkttiefe im Sortiment)
- Digital Performance Wheel (3.490 €) oder EVO-X Digital Carbon (3.990 €) + LED Carbon Schaltwippen (490–690 €) + Digitale Lenkradtasten (1.990 €) + Race Display Beifahrerseite (1.990 €) + Carbon Interieur Set (2.990–4.490 €).
- Einzelpreis-Summe je nach Variante ca. 10.950–13.150 € → Paketpreis `[FESTLEGEN]`, Montage in einem Termin.
- Warum: Kunde, der ein Teil will, will meist den ganzen Look; ein Termin statt drei spart beiden Seiten Aufwand. Brücke zur Design/Iconic Edition.

**E) „Black Badge Einstieg“** – Black Badge Lenkrad Set Audi C8 (690–790 €) als günstigster Einstieg in die Lenkrad-Welt, mit Upgrade-Gutschrift auf ein Voll-Lenkrad `[KLÄREN]`.

### 1.3 Garantien & Zusagen (alle als **Vorschlag**, nur wenn der Betrieb sie sicher halten kann)

> Rechtliche Leitplanken: Eine freiwillige Garantie (§ 443 BGB) muss nach § 479 BGB klar formuliert sein, Name/Anschrift des Garantiegebers, Inhalt, Dauer und Geltungsbereich nennen und darauf hinweisen, dass die gesetzlichen Gewährleistungsrechte unberührt bleiben. Mit „Garantie“ nur werben, was im Garantietext steht (§ 5 UWG). Bei Anfertigung nach Kundenspezifikation (Wunschfarbe) besteht in der Regel **kein Widerrufsrecht** (§ 312g Abs. 2 Nr. 1 BGB) – daher keine „Geld-zurück-wenn-nicht-zufrieden“-Garantie auf Maßanfertigungen versprechen, sondern Zusagen *vor* Produktionsstart.

| # | Zusage (Vorschlag) | Wirkt auf | Risiko für den Betrieb | Voraussetzung |
|---|---|---|---|---|
| G1 | **Passform-Zusage nach Vorab-Check:** „Wir prüfen Ihr Fahrzeug anhand FIN und Fotos vor der Bestellung. Passt das Teil trotz positivem Check nicht, passen wir kostenlos an oder nehmen es zurück.“ | Wahrscheinlichkeit | Niedrig, wenn Check sauber | Checkliste FIN/Ausstattungscodes (HOD, Spurhalte, FL/VFL) |
| G2 | **Farb-Freigabe vor Produktion:** Kunde erhält Materialmuster bzw. Foto der zugeschnittenen Teile und gibt frei; bis dahin kostenlose Änderung der Farbwahl. | Wahrscheinlichkeit, Aufwand | Gering (verlängert Durchlauf um wenige Tage) | Musterbestand |
| G3 | **Festpreis-Zusage:** Nach Vorab-Check gilt der schriftlich genannte Endpreis inkl. Montage – keine Nachforderungen. | Wahrscheinlichkeit | Mittel – nur mit sauberem Check | Kalkulationsschema |
| G4 | **Standzeit-Zusage (nur Interieur-Pakete):** „Ihr Fahrzeug ist innerhalb von `[3]` Werktagen fertig. Dauert es länger, übernehmen wir `[Mietwagen bis X €/Tag]`.“ | Wartezeit | Mittel – nur geben, wenn 3 Tage historisch sicher eingehalten wurden `[KLÄREN]` | Auswertung der bisherigen Montagen |
| G5 | **Verarbeitungsgarantie `[X]` Jahre** auf Nähte und Verklebung (über die gesetzliche Gewährleistung hinaus). | Wahrscheinlichkeit | Abhängig von Reklamationsquote `[KLÄREN]` | Garantietext nach § 479 BGB |

**Empfehlung:** Mit G1 + G2 starten (fast ohne Risiko, sehr starker Vertrauenseffekt). G4/G5 erst nach Prüfung der eigenen Zahlen.

### 1.4 Zusatzleistungen, die Aufwand und Wartezeit senken

| Leistung | Beschreibung | Preisvorschlag | Aufwand-Hebel |
|---|---|---|---|
| **Vorab-Check per FIN/Fotos** | Kunde lädt FIN, 4 Innenraumfotos, Foto Lenkrad-Rückseite/Tasten hoch; Antwort mit Passform-Bestätigung + Festpreis innerhalb `[48 h]` | kostenlos | Unsicherheit weg, qualifiziert Leads |
| **Materialmuster per Post** | Box mit Leder-, Alcantara-, Carbon- und Nahtmustern (siehe 2.2) | `[kostenlos / Schutzgebühr X € mit Anrechnung]` | Farbe in echt sehen |
| **Hol- und Bringservice** | Abholung per Fahrer oder Transporter im Radius `[X km]`; darüber Pauschale | `[ab X €]` bzw. ab Paketwert `[X €]` inklusive | 3 Tage ohne eigene Fahrt |
| **Ersatzfahrzeug** | Für Paketkunden während der Standzeit | `[KLÄREN: Kooperation Autovermietung]` | Standzeit wird schmerzfrei |
| **Video-Beratung** | 20 Minuten mit dem Sattler, Muster in die Kamera | kostenlos | Kein Anfahrtsweg für Beratung |
| **Montage beim Partner** | Montage über B2B-Partner in Kundennähe (siehe Kapitel 4) | `[Partnerpreis]` | Kürzere Wege bundesweit |
| **Zahlung in Raten** | z. B. Anzahlung + Rest bei Abholung; Finanzierung über Zahlungsanbieter `[KLÄREN]` | – | Senkt Einstiegshürde. Achtung: Werbung mit Finanzierung braucht Pflichtangaben (§ 17 PAngV) |

---

## 2. Lead-Magnete & Anfragewege für Hochpreisiges

Grundregel: **Kein Lead-Magnet geht live, bevor die Nachfass-Strecke (E-Mails, Rückruf-Zuständigkeit, nächstes Angebot) steht.** Für jede E-Mail-Strecke: Double-Opt-In, Einwilligungstext mit Zweck, Widerrufshinweis, Protokollierung (Art. 7 DSGVO, § 7 UWG). Formular-/Uploaddaten (FIN, Fotos, Kennzeichen) sind personenbezogen → Datenschutzerklärung ergänzen, Löschfristen festlegen, Uploads nicht über unverschlüsselte Mail.

### 2.1 Vorab-Check „Passt das zu meinem Fahrzeug?“ (Typ: Problem lösen) – **Priorität 1**

- **Aufbau:** Landingpage → kurzes Formular (Marke/Modell/Baujahr, FIN, Fotos, Wunschprodukt) → Bestätigungsseite „Wir melden uns innerhalb von `[48 h]`“ → persönliche Antwort mit Passform-Bestätigung, Festpreis und Terminvorschlag.
- **Handlungsaufruf:** „Kostenlosen Fahrzeug-Check starten“ / auf Produktseiten: „Unsicher, ob es passt? FIN prüfen lassen“.
- **Platzierung:** Jede Lenkrad- und Paketseite (neben „In den Warenkorb“), Navigation, Instagram-Bio.
- **Benötigte Inhalte:** Foto-Anleitung (welche 4 Fotos), Liste der Ausstattungsmerkmale (HOD, Spurhalteassistent, FL/VFL, Schaltwippen), Antwortvorlagen, interne Zuständigkeit.
- **Nachfass:** Tag 0 Antwort · Tag 3 Erinnerung mit Materialmuster-Angebot · Tag 10 Anruf (nur wenn Kunde Telefon angegeben und Rückruf gewünscht hat).
- **Warum stark:** Löst die häufigste Kaufbremse (Kompatibilität), qualifiziert den Lead mit FIN – wertvollster Lead-Typ im Sortiment.

### 2.2 Materialmuster-Box (Typ: Kostprobe) – **Priorität 2**

- **Aufbau:** Box im PSS-Design mit 6–10 Mustern (Nappa in Hauptfarben, Alcantara, Carbon matt/glänzend/Lasur, Nahtfaden-Karte, ggf. Muster mit 12-Uhr-Markierung), gedruckte Karte „So läuft Ihr Projekt“, QR-Code zum Vorab-Check und zur Video-Beratung.
- **Handlungsaufruf:** „Materialien in Ihren Händen – Musterbox anfordern“.
- **Schwelle:** Für Paket-Interessenten kostenlos; für reine Lenkrad-Interessenten Schutzgebühr `[X €]`, bei Bestellung angerechnet (verhindert Sammler).
- **Benötigte Inhalte:** Musterbestand, Verpackung, Begleitkarte, Versandprozess, Feld „Fahrzeugmodell“ im Formular.
- **Nachfass:** Versandmail → Tag 2 nach Zustellung „Haben Sie Ihre Favoriten?“ mit Link zur Video-Beratung → Tag 7 Moodboard-Angebot (2.3).
- **Warum stark:** Haptik ist das Produkt. Wer Nappa und Alcantara in der Hand hält, entscheidet schneller.

### 2.3 Interieur-Moodboard / Konfigurator „Ihr Cockpit in Ihrer Farbe“ (Typ: Problem lösen)

- **Stufe 1 (sofort machbar, ohne Software):** Formular mit Farbwahl → Sattler/Designer erstellt aus Fahrzeugfoto ein Moodboard (Bildbearbeitung) und sendet es als PDF.
- **Stufe 2 (später):** Online-Konfigurator für 3–4 Top-Modelle (RS6 C8, M3 G-Reihe, G-Klasse, RS3) mit Farbflächen (Leder, Alcantara, Naht, 12-Uhr-Markierung). Ergebnis per E-Mail (Double-Opt-In).
- **Handlungsaufruf:** „Ihr Wunsch-Interieur kostenlos visualisieren lassen“.
- **Benötigte Inhalte:** Freigestellte Innenraumfotos je Modell, Farbpalette, Kapazität für ca. `[X]` Moodboards/Woche, Vorlage.
- **Hinweis:** Visualisierungen als „unverbindliche Darstellung, Farbabweichungen möglich“ kennzeichnen.
- **Warum:** Kunde investiert Zeit in „sein“ Design → höhere Abschlussbereitschaft; das Moodboard wird oft geteilt (Weiterempfehlung).

### 2.4 Vorher/Nachher-Galerie je Modell (Typ: Bildung/Beleg)

- **Aufbau:** Eine Seite je Modell (RS6 C8, RS3 8V, M3 G-Reihe, G-Klasse W463A, T6.1, BMW F-/G-Lenkräder, Mercedes AMG-Lenkräder): Vorher-Foto, Nachher-Foto, verwendete Materialien, Standzeit, Paketname, Link zum Produkt + Vorab-Check.
- **Handlungsaufruf:** „Das will ich auch für meinen [Modell] – Projekt anfragen“.
- **Benötigte Inhalte:** `[REFERENZ EINFÜGEN]` – echte Projektfotos mit **schriftlicher Einwilligung** der Kunden (Kennzeichen unkenntlich, keine Personen ohne Einwilligung), Kurztext je Projekt. Keine erfundenen Projekte, keine Fremdbilder.
- **Warum:** Hebt „Wahrscheinlichkeit“ am stärksten. Gleichzeitig SEO-Inhalt („RS6 C8 Interieur Umbau“).

### 2.5 Video-Beratung mit dem Sattler (Typ: Kostprobe)

- **Aufbau:** Terminbuchung (Kalender-Tool, DSGVO-konformer Anbieter mit AV-Vertrag) → 20 Min. Video → Zusammenfassung + Angebot per E-Mail innerhalb `[24 h]`.
- **Handlungsaufruf:** „20 Minuten Videoberatung – Muster live sehen“.
- **Benötigte Inhalte:** Kalender, Musterwand im Hintergrund, Gesprächsleitfaden (Fahrzeug, Nutzung, Budgetrahmen, Zeitpunkt, Entscheider), Angebotsvorlage.
- **Warum:** Für 12.000–40.000 € kauft niemand ohne Gespräch. Spart Anfahrt bis zur Entscheidung.

### 2.6 Ratgeber „Interieur-Umbau ohne Risiko: 7 Fragen vor der Auftragsvergabe“ (Typ: Bildung)

- **Aufbau:** Kurzes PDF/Webseite: Material (Nappa vs. Alcantara), Austausch- vs. Neubezug im Fahrzeug, Standzeit, Airbag/Elektronik (HOD), Garantie, Pflege, Wiederverkaufswert `[KLÄREN: belegbar?]`.
- **Handlungsaufruf:** „Checkliste herunterladen“ (E-Mail + Modell).
- **Warum:** Holt Käufer früh ab (problembewusst, noch nicht lösungsbewusst) und positioniert das Austauschverfahren als Standard. Sachlich bleiben – keine herabsetzenden Vergleiche mit Wettbewerbern (§ 6 UWG).

### 2.7 Anfragewege – Übersicht

| Weg | Für | Antwortzeit-Ziel | Zuständig |
|---|---|---|---|
| Vorab-Check-Formular | Lenkrad + Paket | `[48 h]` | `[NAME]` |
| Musterbox-Formular | Paket (Lenkrad mit Schutzgebühr) | Versand `[2 Werktage]` | `[NAME]` |
| Video-Termin | Paket | Termin binnen `[5 Werktagen]` | Sattlermeister |
| Telefon/WhatsApp Business | alle | Rückruf am selben Tag | `[NAME]` – WhatsApp nur mit geprüfter Datenschutz-Lösung `[KLÄREN]` |
| Warenkorb | Einstieg + Kern | – | Shop |

**Messgrößen je Weg:** Anfragen/Woche, Anteil mit FIN, Angebotsquote, Abschlussquote, Ø-Auftragswert. Ziel-/Vergleichswerte `[ERHEBEN]` – heute liegen keine Daten vor.

---

## 3. Saisonale Aktionen

### Rechtliche Leitplanken (für beide Aktionen)

- **§ 11 PAngV:** Bei jeder Preisermäßigung gegenüber Verbrauchern ist der **niedrigste Gesamtpreis der letzten 30 Tage vor der Ermäßigung** als Bezugspreis anzugeben. Prozent-Rabatte („-10 %“) beziehen sich ebenfalls auf diesen Preis. Keine Streichpreise aus UVP-Fantasie, keine kurzfristigen Preiserhöhungen vor der Aktion.
- **Ausnahmen beachten:** Bundles mit neuem Gesamtpreis, Gratis-Zugaben und Gutschein-Boni sind keine Preisermäßigung eines Einzelprodukts → oft einfacher und sicherer. Bedingungen trotzdem klar angeben (§ 5a UWG: Aktionszeitraum, Teilnahmebedingungen, Mindestbestellwert).
- **Echte Fristen:** „Nur bis 14.12.“ nur, wenn danach wirklich endet (keine Verlängerung als Masche – § 5 UWG, Anhang Nr. 7).
- **Gutscheine (Steuer):** Gutschein nur für eine Warengruppe mit einheitlichem Steuersatz und Leistungsort = **Einzweck-Gutschein** (USt bei Ausgabe, § 3 Abs. 14 UStG); Wertgutschein für das ganze Sortiment = **Mehrzweck-Gutschein** (USt bei Einlösung, § 3 Abs. 15 UStG) → mit Steuerberatung (Tax Strategist) abstimmen und in der Buchhaltung getrennt erfassen.
- **Gutschein-Gültigkeit:** Regelverjährung 3 Jahre zum Jahresende (§ 195, § 199 BGB); kürzere Befristung in AGB nur eingeschränkt zulässig → Empfehlung: 3 Jahre, Hinweis auf Gutschein.
- **Newsletter:** Nur an Empfänger mit Double-Opt-In; Bestandskunden-Ausnahme (§ 7 Abs. 3 UWG) nur für **ähnliche** Produkte, mit Widerspruchshinweis bei Erhebung und in jeder Mail.

### 3.1 Weihnachten 2026 – „Handgemacht. Für Autoliebhaber.“

**Angebote:**

| Baustein | Inhalt | Rechtssichere Mechanik |
|---|---|---|
| **Geschenkset „Schlüssel & Pflege“** | Leder-Schlüsselcover + Alcantara-Reinigungsset in Geschenkverpackung mit Karte | Bundle-Preis `[X €]` (Einzelpreise 199–249 € + 19,90 €); oder: Geschenkverpackung + Pflegeset als Zugabe ab Kauf eines Schlüsselcovers |
| **Wert-Gutschein** | 100 / 250 / 500 € und frei wählbar, digital (PDF) + gedruckt in Box | Optional Bonus: „Ab 500 € Gutscheinwert + `[X €]` Bonusguthaben“ (Bonus mit klaren Bedingungen) – keine Preisermäßigung i. S. d. § 11 PAngV, trotzdem rechtlich prüfen lassen |
| **Lenkrad-Gutschein** | Gutschein über ein Lenkrad nach Wahl, inkl. Vorab-Check für das Fahrzeug des Beschenkten. In der Geschenkbox: Materialmuster + Gutscheinkarte | Mehrzweck-Gutschein (Wertbetrag z. B. 1.690 / 1.990 €) – Beschenkter wählt Modell/Farbe nach Weihnachten → löst Passform- und Farbproblem des Schenkenden |
| **Lager-Lenkräder** | Sofort lieferbare Lenkräder (aktuell teils als Entwurf mit Bestand, `[KLÄREN]`) | Kommunikation „Lieferung vor Weihnachten“ – nur für tatsächlich vorrätige Ware |

**Zeitplan:**

| Datum | Maßnahme |
|---|---|
| bis 11.11.2026 | Preise/SEO-Texte korrigieren (Kap. 0), Gutschein-Produkte im Shop als Entwurf anlegen, Steuerfrage Gutscheine klären, Geschenkverpackung bestellen |
| 12.–17.11. | Fotos Geschenkset + Gutscheinbox; Landingpage „Geschenke“; Newsletter-Strecke schreiben; Freigabe Inhaber |
| 18.11. | Start: Geschenkseite live, Instagram/TikTok/YouTube-Content (Fertigung eines Schlüsselcovers, „Geschenk-Unboxing“) |
| 19.11.–1.12. | Hinweis: Wer „Black Week“-Rabatte fährt, braucht stabile Preise seit mind. 30 Tagen. **Empfehlung: kein Preisnachlass, sondern Zugabe/Bundle** – passt besser zur Manufaktur-Positionierung |
| 24.11. | Newsletter 1 (Double-Opt-In-Liste): Geschenkideen |
| 3.12. | Newsletter 2: Lenkrad-Gutschein („Das Geschenk, das er sich nie selbst gönnt“) |
| `[KLÄREN: ca. 14.12.]` | Letzter Bestelltag physischer Versand vor Weihnachten (abhängig von Versanddienstleister und Fertigungszeit Schlüsselcover/Wunschfarbe) |
| 15.–24.12. | Nur noch digitale Gutscheine (PDF sofort per E-Mail) bewerben |
| 27.12.–31.01.2027 | Einlöse-Strecke: E-Mail an Gutschein-Empfänger mit Vorab-Check-Link → frühe Pipeline für die Frühjahrsmontagen |

### 3.2 Tuning-Saisonstart Frühjahr 2027 – „Bereit für die Saison“

Idee: Der Engpass im Frühjahr ist **Montagekapazität**, nicht Nachfrage. Deshalb über Terminvergabe verkaufen statt über Rabatte – echte Knappheit, ehrlich kommuniziert.

**Angebote:**
- **„Winter-Slot“ (Jan–Feb):** Wer im Januar/Februar montieren lässt (ohnehin Standzeit-Saison), erhält Hol-/Bringservice inklusive oder Pflegeset + Schlüsselcover als Zugabe. Glättet die Auslastung.
- **Frühjahrs-Terminkalender:** Öffentlich sichtbare, **echte** Zahl freier Montagetermine März–Mai `[aus Planung]`. Reservierung per Anzahlung `[X €]`, angerechnet.
- **Saisonstart-Bundle Audi C8 „Cockpit Komplett“** (1.2 D) und „Matching Set“ (1.2 A).
- **Partner-Aktion:** Partnerbetriebe (Kap. 4) erhalten Aktionsmaterial für ihre Saisonkunden.
- **Präsenz:** Tuning-Treffen/Messen in der Region `[KLÄREN: welche, Termine 2027]` mit Musterbox und Vorher/Nachher-Exponat – Ausstellungsstück eines Lenkrads zum Anfassen.

**Zeitplan:**

| Zeitraum | Maßnahme |
|---|---|
| Dez. 2026 | Montagekapazität März–Mai 2027 planen; Foto-/Videoproduktion von 2–3 Projekten (mit Einwilligung) für Vorher/Nachher |
| 07.01.2027 | Start „Winter-Slot“-Kommunikation; Vorab-Check-Kampagne an Gutschein-Empfänger und Interessenten |
| 15.01.–15.02. | Musterbox-Kampagne (Social, Partner) |
| 01.02. | Frühjahrs-Terminkalender öffnen, Anzahlungs-Reservierung |
| Feb.–März | Messe-/Treffen-Planung, Partnermaterial ausliefern |
| 01.03.–30.04. | Saisonstart-Kommunikation: „Noch [X] Termine im April“ (nur echte Zahlen, laufend aktualisiert) |
| Mai | Auswertung: Anfragen je Weg, Abschlussquote, Ø-Auftragswert |

---

## 4. B2B-Partnerprogramm (Autohäuser, Tuner, Leasing-Aufbereiter)

### 4.1 Angebot

| Partnerstufe | Für wen | Leistung PS-Sattlerei | Leistung Partner | Konditionen (Vorschlag) |
|---|---|---|---|---|
| **Empfehlungspartner** | Autohäuser (Verkauf/Service), Tuner ohne eigene Sattlerei | Musterbox + Display für den Showroom, Vorab-Check für Partnerkunden, Provisions-Tracking (Code/Link) | Empfiehlt, leitet Anfragen weiter | Provision `[X %]` auf Netto-Auftragswert nach Zahlung |
| **Montagepartner** | Tuner/Werkstätten mit Elektronik-Know-how | Teile im Austauschverfahren, Schulung Montage, technischer Support | Montiert Lenkräder/Teile beim Endkunden | Händlerpreis `[X % unter VK]`, Schulung `[Datum]` |
| **Aufbereitungspartner** | Leasing-Rückläufer-Aufbereiter, Gebrauchtwagenhändler | Instandsetzung/Neubezug abgenutzter Lenkräder und Sitzwangen `[KLÄREN: Leistung im Portfolio?]`, Mengenpreis, feste Durchlaufzeit | Liefert Fahrzeuge/Teile gebündelt | Rahmenvertrag, Staffelpreise `[FESTLEGEN]` |
| **Veredelungspartner Neuwagen** | Autohäuser mit Performance-Modellen (RS, M, AMG) | „Manufaktur-Option“ zum Neuwagenverkauf, gemeinsame Auslieferung | Verkauft Paket mit dem Fahrzeug | Marge `[X %]`, Co-Branding nach Absprache |

**Warum das funktioniert:** Autohaus und Tuner haben den Kunden im richtigen Moment (Kauf, Service, Saisonstart). PS-Sattlerei liefert, was sie selbst nicht können. Für Leasing-Aufbereiter zählt ein vorhersagbarer Preis pro Fahrzeug und eine feste Durchlaufzeit.

**Hinweise:** Schriftlicher Partnervertrag (Provision, Gewährleistung/Haftung bei Montage durch Partner, Markennutzung). „Passend für Audi/BMW/Mercedes“ ist als Bestimmungsangabe zulässig, Herstellerlogos/-marken im Partnermaterial nicht wie eine Herstellerkooperation verwenden (§ 23 MarkenG, § 5 UWG). Bei Montage durch Dritte: Zuständigkeit für Airbag/Elektronik klar regeln `[KLÄREN]`.

### 4.2 Rechtssichere Ansprache

Wichtige Korrektur zur Aufgabenstellung: Nach **§ 7 Abs. 2 Nr. 2 UWG** braucht Werbung per **E-Mail** – auch an Unternehmen – eine **vorherige ausdrückliche Einwilligung**. Die *mutmaßliche* Einwilligung reicht nur für **Telefonanrufe bei Unternehmen** (§ 7 Abs. 2 Nr. 1 UWG). Kalt-E-Mails an Autohäuser sind deshalb zu unterlassen.

| Kanal | Zulässigkeit | Vorgehen |
|---|---|---|
| **Telefon** | B2B mit mutmaßlicher Einwilligung: konkreter, sachlicher Bezug zum Geschäft des Angerufenen (z. B. Autohaus mit RS/M/AMG-Bestand, Aufbereiter) | Gezielte Liste (öffentlich: Betriebsart, Marken), kurzer Gesprächsleitfaden, Ziel: Termin vor Ort mit Musterbox. Ergebnis dokumentieren; Widerspruch sofort sperren |
| **Persönlicher Besuch / Messe** | zulässig | Musterbox + ausgebautes Lenkrad mitbringen. Visitenkarte mit Bitte um Erlaubnis für Info-Mail → Einwilligung dokumentieren |
| **Brief / Postwurf** | zulässig, solange kein erkennbarer Widerspruch | Hochwertiges Mailing mit Ledermuster + Antwortkarte/QR-Code |
| **LinkedIn / Xing** | rechtlich nicht abschließend geklärt; Nachrichten können wie E-Mail-Werbung bewertet werden | Konservativ: persönliche Vernetzung, keine Massen-Werbenachrichten; nach Antwort/Interesse Termin vereinbaren |
| **E-Mail** | nur nach ausdrücklicher Einwilligung oder auf Anfrage | Nach Telefonat: „Darf ich Ihnen die Unterlagen per E-Mail senden?“ → Zustimmung notieren |
| **Bestehende Kontakte** | Werkstätten/Händler, mit denen schon gearbeitet wurde | Persönlich ansprechen – Warm-Outreach zuerst (schnellster Validierungsweg) |

**Vorgehen nach der 100er-Regel (angepasst an den Betrieb):** 100 Tage lang je Werktag `[10]` qualifizierte Anrufe/Besuche statt Massenaussendung. Ziel nach 100 Tagen: `[X]` aktive Partner. Erst wenn 3–5 Partner nachweislich Aufträge bringen, Programm ausbauen.

**Gesprächseinstieg Telefon (Leitfaden-Auszug):**
> „Guten Tag, [Name], PS-Sattlerei – wir fertigen Lenkräder und Interieurs für RS-, M- und AMG-Modelle im Austauschverfahren, das Fahrzeug steht nur rund drei Werktage. Ich rufe an, weil Sie [Modelle] im Bestand bzw. in der Werkstatt haben. Hätten Sie nächste Woche 15 Minuten, damit ich Ihnen Material und Ablauf vor Ort zeige? Ich bringe Muster mit.“

---

## 5. Fertige Texte (Entwürfe, Freigabe erforderlich)

### 5.1 Angebots-Überschriften

1. **Ihr Interieur. Neu gefertigt. In drei Werktagen eingebaut.**
2. **Erst prüfen, dann bestellen: Kostenloser Passform-Check per Fahrgestellnummer.**
3. **Leder, Alcantara, Carbon – erst fühlen, dann entscheiden. Musterbox anfordern.**
4. **Das Lenkrad, das zu Ihrem Fahrzeug passt – und zu Ihrem Schlüssel.**
5. **Manufaktur statt Massenware: Handgefertigt in Deutschland.** `[KLÄREN: Fertigungsort belegen]`
6. **Ihr RS6 C8. Komplett veredelt. Ein Termin.**
7. **Sie wählen die Farbe. Wir machen den Rest – inklusive Abholung.** `[nur wenn Hol-/Bringservice angeboten wird]`
8. **Das Geschenk, das er sich nie selbst gönnen würde: der PSS Lenkrad-Gutschein.**

### 5.2 Landingpage Interieur-Pakete – 3 Abschnitte

**Abschnitt 1 – Versprechen (Hero)**

> ## Ihr Cockpit in Manufakturqualität – mit nur rund drei Werktagen Standzeit
> Wir fertigen Armaturenbrett, Türverkleidungen, Mittelarmlehne und Lenkrad für Ihr Fahrzeug vorab in unserer Sattlerei – in Leder, Alcantara und Carbon, mit Naht- und Akzentfarbe nach Ihrem Wunsch. Weil wir im Austauschverfahren arbeiten, steht Ihr Fahrzeug nicht wochenlang, sondern in der Regel nur rund drei Werktage bei uns.
>
> **[Kostenlosen Fahrzeug-Check starten]**  ·  [Materialmuster anfordern]
>
> Verfügbar u. a. für Audi RS6 C8 und RS3 8V, BMW M3 G-Reihe, Mercedes G-Klasse W463A und VW T6.1 – Pakete ab 9.990 € `[Preis vor Veröffentlichung mit Shop abgleichen]`.

**Abschnitt 2 – So läuft Ihr Projekt ab (Aufwand & Risiko senken)**

> ## In vier Schritten zu Ihrem neuen Interieur
> **1. Fahrzeug-Check:** Sie senden uns Fahrgestellnummer und ein paar Fotos. Wir prüfen Ausstattung und Passform und nennen Ihnen einen verbindlichen Festpreis. `[Festpreis-Zusage nur nach Freigabe G3]`
> **2. Material wählen:** Sie erhalten unsere Musterbox oder beraten sich per Video mit unserem Sattler. Vor Produktionsstart geben Sie Ihre Farbauswahl frei.
> **3. Fertigung:** Wir fertigen Ihre Teile vorab in unserer Manufaktur – Ihr Fahrzeug fahren Sie in dieser Zeit weiter.
> **4. Einbau:** Sie bringen Ihr Fahrzeug zum vereinbarten Termin `[oder wir holen es ab]`. Nach rund drei Werktagen erhalten Sie es mit neuem Interieur zurück – inklusive Pflegeset und Pflegeanleitung.

**Abschnitt 3 – Vertrauen (Belege, Zusagen, Fragen)**

> ## Warum Kunden uns ihr Fahrzeug anvertrauen
> - **Vorher/Nachher:** [REFERENZ EINFÜGEN – Projektfotos je Modell mit Einwilligung des Kunden]
> - **Kundenstimmen:** [REFERENZ EINFÜGEN – nur echte, belegbare Bewertungen; Herkunft angeben, § 5b Abs. 3 UWG]
> - **Unsere Zusage:** Passt ein Teil trotz positivem Fahrzeug-Check nicht, passen wir es kostenlos an oder nehmen es zurück. `[Vorschlag G1 – nur nach Freigabe]`
> - **Gewährleistung:** Es gelten die gesetzlichen Gewährleistungsrechte. `[ggf. Verarbeitungsgarantie G5 ergänzen]`
>
> **Häufige Fragen**
> *Was passiert mit meinen Originalteilen?* – `[KLÄREN: Rücknahme/Einlagerung/Rückgabe im Austauschverfahren]`
> *Bleiben Airbag, Lenkradheizung, Handerkennung und Tasten funktionsfähig?* – `[KLÄREN: je Modell]`
> *Brauche ich eine Eintragung?* – `[KLÄREN: Gutachten/Eintragungspflicht je Produkt]`
> *Kann ich in Raten zahlen?* – `[KLÄREN]`
>
> **[Projekt anfragen]**  ·  [Videoberatung buchen]

### 5.3 Anfrageformular „Interieur-Projekt anfragen“

| # | Feld | Typ | Pflicht | Zweck |
|---|---|---|---|---|
| 1 | Anrede / Vorname / Nachname | Text | Nachname Pflicht | Ansprache |
| 2 | E-Mail | E-Mail | ja | Antwort mit Angebot |
| 3 | Telefon | Tel. | nein | Rückruf, nur wenn gewünscht |
| 4 | Rückruf gewünscht? | Checkbox | nein | Einwilligung für Anruf |
| 5 | Marke | Auswahl (Audi, BMW, Mercedes-Benz, Volkswagen, andere) | ja | Zuordnung |
| 6 | Modell / Baureihe | Text oder abhängige Auswahl | ja | Passform |
| 7 | Baujahr / Erstzulassung | Monat/Jahr | ja | FL/VFL |
| 8 | Fahrgestellnummer (FIN) | Text (17 Zeichen) | nein (empfohlen) | Vorab-Check |
| 9 | Fotos Innenraum (max. 6) | Upload | nein | Ist-Zustand, Ausstattung |
| 10 | Was interessiert Sie? | Mehrfachauswahl: Lenkrad, Interieur-Paket, Carbon-Teile, Schlüsselcover, Sonstiges | ja | Angebot |
| 11 | Material-/Farbwunsch | Freitext | nein | Vorbereitung Beratung |
| 12 | Gewünschter Zeitraum | Auswahl: so schnell wie möglich, 1–3 Monate, später, noch offen | ja | Priorisierung |
| 13 | Budgetrahmen | Auswahl: bis 2.500 €, 2.500–10.000 €, 10.000–20.000 €, über 20.000 €, noch offen | nein | Passendes Angebot |
| 14 | Hol-/Bringservice interessant? | Ja/Nein | nein | Zusatzleistung |
| 15 | Musterbox zusenden? | Ja/Nein (+ Lieferadresse bei Ja) | nein | Lead-Magnet |
| 16 | Datenschutz-Hinweis | Text + Link zur Datenschutzerklärung | – | Art. 13 DSGVO (Zweck: Bearbeitung der Anfrage) |
| 17 | Newsletter | **separate, nicht vorausgewählte** Checkbox, Double-Opt-In | nein | Werbeeinwilligung getrennt von der Anfrage |

Button: **„Kostenlos und unverbindlich anfragen“**. Bestätigungsseite: Zeitzusage `[48 h]`, nächster Schritt, Link zur Videoberatung.

### 5.4 Weihnachts-Aktionstext (Newsletter / Landingpage)

> **Betreff:** Handgemacht verschenken – Geschenke für Autoliebhaber
>
> **Ein Geschenk, das man jeden Tag in der Hand hält.**
>
> Für Menschen, die ihr Auto lieben, gibt es kaum etwas Persönlicheres als Details in Manufakturqualität. Deshalb haben wir zu Weihnachten drei Geschenkideen zusammengestellt:
>
> **Das Geschenkset „Schlüssel & Pflege“** – ein handgefertigtes Schlüsselcover aus Nappaleder, passend für Audi, BMW oder Mercedes, zusammen mit unserem Alcantara-Reinigungsset in der PSS-Geschenkbox. Für `[BUNDLE-PREIS]` €.
>
> **Der PSS-Wertgutschein** – frei wählbar ab `[X]` €, für alles aus unserer Sattlerei. Auf Wunsch als gedruckte Karte in der Geschenkbox oder sofort als PDF per E-Mail.
>
> **Der Lenkrad-Gutschein** – für den großen Wunsch. Der Beschenkte wählt Modell, Leder und Farbe selbst und erhält vorab einen kostenlosen Passform-Check für sein Fahrzeug. In der Geschenkbox liegen bereits erste Materialmuster.
>
> Bestellungen mit Versand bis zum `[DATUM]` erreichen Sie voraussichtlich vor Heiligabend. Digitale Gutscheine erhalten Sie sofort.
>
> **[Geschenke entdecken]**
>
> *Gutscheine sind 3 Jahre gültig (bis 31.12.2029) und nicht in bar auszahlbar `[mit AGB abgleichen]`. Angebot gültig vom 18.11. bis 24.12.2026 bzw. solange der Vorrat reicht `[Vorrat konkret angeben, falls begrenzt]`.*
>
> *Sie erhalten diese E-Mail, weil Sie sich für unseren Newsletter angemeldet haben. [Abmelden]*

---

## 6. Reihenfolge der Umsetzung (Angebot → Magnet → Nachfass → Kanal → Verstärker)

1. **Woche 1:** Preis-/SEO-Fehler beheben, Bestandslogik klären, Zusagen G1/G2 freigeben.
2. **Woche 1–2:** Vorab-Check-Formular + Antwortvorlagen + Zuständigkeit (ohne funktionierende Nachfass-Strecke kein Livegang). Weihnachtsangebote live ab 18.11.
3. **Woche 2–4:** Musterbox produzieren, Video-Beratung einrichten, erste 2–3 Vorher/Nachher-Projekte mit Einwilligung dokumentieren.
4. **Ab Dezember:** **Ein** Hauptkanal für Endkunden (Empfehlung: organischer Content Instagram/TikTok/YouTube mit Vorher/Nachher + Werkstatt-Einblicken – passt zur Manufaktur und ist bereits über den Social-Media-Content-Creator vorbereitbar). Parallel nur Warm-Outreach an Bestandskunden und bekannte Betriebe.
5. **Ab Januar 2027:** B2B-Telefon/Besuch nach Kapitel 4; Bezahlwerbung erst, wenn Anfrage-→-Abschluss-Quote und Ø-Auftragswert gemessen sind und die Kundengewinnungskosten tragbar sind (Zielverhältnis Kundenwert : Gewinnungskosten mindestens 3 : 1).

**Offene Punkte für den Inhaber (`[KLÄREN]`):** gültige Preise (Kap. 0), Bestands-/Entwurfslogik, Lieferzeiten, Originalteile im Austauschverfahren, Gutachten/Eintragung, Airbag/Elektronik je Modell, tatsächliche Einhaltung der 3 Werktage, Reklamationsquote, Zahlungsarten/Finanzierung, Hol-/Bringservice-Radius, Musterbox-Kosten, Provisions-/Händlerkonditionen, echte Referenzen mit Einwilligung.
