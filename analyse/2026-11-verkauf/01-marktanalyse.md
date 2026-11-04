# Marktanalyse DACH – PS-Sattlerei (Stand: 04.11.2026)

**Ziel:** Mehr Umsatz. Diese Analyse zeigt, wo PS-Sattlerei im DACH-Markt steht, wer die Wettbewerber sind, wie sich die Nachfrage verhält und welche Hebel kurzfristig den meisten Umsatz bringen.

**Methodik und Grenzen (bitte lesen):**
- Die Recherche lief über WebSearch. **WebFetch war in dieser Sitzung gesperrt** (nicht erreichbar: `ps-sattlerei.shop`, `abt-sportsline.de`, `carlexdesign.com`, `individualiseyourcar.com`). Angaben zu Wettbewerbern stammen deshalb aus Suchergebnis-Auszügen. Für eine Prüfung müssen diese Domains in den Netzwerkeinstellungen der Sitzung freigegeben werden.
- Den eigenen Shop konnte ich nicht live ansehen. Shop-Aussagen stützen sich auf `daten/produkte-uebersicht.json` (79 Produkte).
- Suchvolumen-Daten (Google Keyword Planner, Google Trends, SEMrush) standen nicht zur Verfügung. Alle Aussagen zum Suchvolumen sind daher **[NICHT BELEGT]**.
- Kennzeichnungen: **[ANNAHME]** = plausible Einschätzung ohne Beleg, **[NICHT BELEGT]** = nicht gefunden, **[PRÜFEN]** = intern oder rechtlich zu klären.
- Ich habe keine Dritten kontaktiert und nichts im Shop geändert.

---

## 0. Ausgangslage aus den eigenen Produktdaten

Auswertung von `daten/produkte-uebersicht.json`:

| Befund | Detail | Relevanz für Umsatz |
|---|---|---|
| 79 Produkte, davon 67 aktiv und 12 Entwurf (DRAFT) | Entwürfe mit Bestand: u. a. Mercedes Classic Carbon FL (14), EVO-X Mercedes FL (10 + 10), EVO-X Mercedes VFL (30 + 16), Audi RS3 8V Forged (20), Audi R8/TTRS (16 + 20 + 2), Black Badge Leather Mercedes (600 – vermutlich Datenfehler) | Ware liegt auf Lager, ist aber nicht kaufbar |
| **27 von 67 aktiven Produkten haben Bestand ≤ 0** | z. B. alle Audi-RS6/RS7-Lenkräder, Digital Performance Wheel, digitale Lenkradtasten, LED-Schaltwippen, Race Display, beide RS6/RSQ8-Carbon-Sets, mehrere Mercedes- und RS3-Lenkräder; Daytona Edition mit Bestand **-1** | Wenn „Weiterverkaufen bei 0“ nicht aktiv ist, sind diese Produkte **nicht bestellbar** **[PRÜFEN in Shopify]** |
| Farbvarianten als eigene Produkte | z. B. GT-R BMW in 4 Einzelprodukten, 16 einzelne Schlüsselcover, URLs mit „-copy-copy-copy“ | SEO-Signale verteilen sich auf viele Seiten, Bewertungen werden zersplittert, der Shop wirkt unübersichtlich |
| Falsche oder kopierte SEO-Beschreibungen | Das Alcantara-Reinigungsset, die LED-Schaltwippen, das Race Display und die Carbon-Sets tragen die Meta-Beschreibung „Carbon Lenkrad Highlights: Echtcarbon, rote Nähte …“ | Schlechtere Klickrate in Google, irreführend |
| **SEO-Preise passen nicht zum Shop-Preis** | Nogaro RS6: Meta-Text „ab 19.990 €“, Preis 24.990–26.990 €; T6.1: „ab 9.990 €“, Preis 12.990–14.990 €; Iconic RS6: „ab 39.990 €“, Preis 39.900 € | **Rechtsrisiko** (irreführende Preisangabe, § 5 UWG / PAngV) – sofort korrigieren |
| Alt-Texte fehlen | Nur 3 von 79 Produkten haben Alt-Texte | Weniger Sichtbarkeit in der Google-Bildersuche, schlechtere Barrierefreiheit |
| Modellabdeckung | Audi RS3 **8V** (nicht 8Y), RS4/5, RS6/7 C8, R8/TTRS, RSQ8; BMW F- und G-Reihe M; Mercedes AMG „VFL bis 2018“ und „FL ab 2018“; VW nur T6.1 (Paket) und Golf 7 (Entwurf) | Lücken bei aktuellen Volumenmodellen (siehe Abschnitt 4) |

Die PS-Sattlerei GmbH (Marie-Curie-Str. 12, 59192 Bergkamen) steht im Ausstellerverzeichnis der Essen Motor Show. Beschrieben wird sie dort als Autosattlerei für Interieurs nach Kundenwunsch sowie Lenkräder in Carbon und Alcantara. Quelle: https://essen-motorshow.de/car-exhibition/exhibitor-list/detail/ps-sattlerei-gmbh-dace2 – ob der Eintrag für 2026 gilt, ist **[PRÜFEN]**.

---

## 1. Wettbewerber

### 1a. Premium-Tuner und Veredler (Interieur-Pakete, Lenkräder)

| Wettbewerber | URL | Sortiment / Positionierung | Preisniveau (öffentlich) | Kanäle | Auffällige Stärken |
|---|---|---|---|---|---|
| **ABT Sportsline** (Kempten) | https://www.abt-sportsline.de | „RS6 Individual“: Armaturenbrett, Mittelkonsole, Türverkleidungen usw. in Leder/Alcantara; Farben für Leder, Keder und Naht frei wählbar | Laut undatierter Preisliste: Interieur-Paket ca. **10.370 € brutto + 1.500 € Montage**; Lenkrad Carbon/Leder **1.790 € + 125 € Montage**; Lenkrad Leder/Alcantara **590 € + 75 € Montage**; Gesamtpaket „Interieur Line“ 52.900 € (Quelle: Suchauszug aus https://www.abt-sportsline.de/fileadmin/user_upload/ABT_RS6_Individual_Preisliste.pdf und https://www.abt-sportsline.com/fileadmin/abt-sportsline/tuning/Produkte/Individual_Interieur/Interieur-Paket_RS6_Individual_de.pdf). Laut US-Seite ist das Lenkrad-Upgrade **für die neuesten RS6/RS7/RS Q8 nicht verfügbar** (https://us.abt-sportsline.de/tuning/products/abt-individual-interior) | [NICHT GEPRÜFT] – Website nicht abrufbar | Starke Marke, Händlernetz, transparente Preisliste. **Direkter Preisvergleich zu PSS RS6 C8** (PSS Design Edition 14.990–16.990 €) |
| **AC Schnitzer** (Aachen) | https://www.ac-schnitzer.de | Lenkräder für zahlreiche BMW-Modelle inkl. M3 G80, je nach Schaltwippen-Ausstattung mehrere Varianten (https://www.autoblog.nl/nieuws/pimp-je-bmw-leasebak-met-een-ac-schnitzer-stuur-1036287) | [NICHT BELEGT] | [NICHT GEPRÜFT] | BMW-Fokus, Werbung mit „Leasing-tauglich“ (Titel des Artikels: „Pimp je BMW leasebak …“) |
| **BMW M Performance (OEM)** | https://www.bmw.de/de/shop/ls/dp/physical-goods/76507 u. a. | Alcantara-Lenkräder mit Carbonblende | ca. **458–1.665 €** je nach Modell; M3/M4 F8x mit Race-Display **1.665 €**; teils ohne Eintrag in die Fahrzeugpapiere (bmw.de-Shop, Suchauszüge) | Hersteller-Shop, Händler | Originalteil, kein TÜV-Thema → **Preisanker für PSS-BMW-Lenkräder (1.690–2.190 €)** |
| **Techart** (Leonberg) | https://www.techart.de | Porsche-Veredler, angefangen mit eigener Sattlerei, heute mit Carbon-Manufaktur für Innenraum-Zierteile (https://www.autobild.de/artikel/techart-manufaktur-992-gt-street-r-porsche-tuning-21728737.html) | [NICHT BELEGT] | [NICHT GEPRÜFT] | Besetzt das Porsche-Segment, das PSS gar nicht abdeckt |
| **Carlex Design** (Herkunftsland [NICHT BELEGT]) | https://carlexdesign.com/models/audi-rs6-carlex-original/ | RS6-Komplettumbau „Carlex Original“, darin ein Lenkrad aus Glatt- und Lochleder | [NICHT BELEGT] | [NICHT GEPRÜFT] | Sehr aufwendige Designprojekte, international bekannt |
| **Vilner** (Bulgarien) | – | Komplettumbauten von Interieurs; Mercedes Vito mit Alcantara/Nappa für ca. **40.000 €** (https://www.autobild.de/artikel/mercedes-vito-tuning-von-vilner-2772308.html) | Projektpreise | [NICHT GEPRÜFT] | Starke Medienpräsenz (Auto Bild, Carscoops) → Vorbild für PR |
| **Brabus / Mansory / Keyvany** | – | Luxus-Interieurs, vor allem G-Klasse (https://mbpassion.de/2016/12/mansory-widebody-kit-fuer-die-mercedes-benz-g-klasse/, https://www.autoevolution.com/news/keyvany-s-g950-wants-to-be-noticed-tuned-g-wagen-stands-out-like-a-sore-thumb-275663.html) | Interieur-Preise [NICHT BELEGT] | [NICHT GEPRÜFT] | Markenstärke im G-Klasse-Segment (PSS: Design Red Classic Edition G-Klasse 15.990–17.990 €) |

### 1b. Lenkrad-Spezialisten und Neubezug (DE)

| Wettbewerber | URL | Sortiment / Positionierung | Preisniveau (öffentlich) | Auffällige Stärken |
|---|---|---|---|---|
| **individualiseyourcar** (DE) | https://individualiseyourcar.com/en/steering-wheel/steeringwheel-upholestery/ | Neubezug in Leder, Alcantara, Carbon, Forged Carbon; Online-Konfigurator; beschreibt Alcantara als besonders beliebt bei BMW-M-, Audi-S/RS- und AMG-Fahrern | Neubezug Leder **ab 140 €**, Carbon-Lenkräder **ab 790 €** (Suchauszug) | **Konfigurator**, niedriger Einstiegspreis, gleiche Zielgruppe |
| **Lenkradwerk** (Kleinanzeigen-Profi) | https://www.kleinanzeigen.de/pro/lenkradwerk | „Lenkradveredelung im Tauschverfahren“, Leder/Alcantara 1:1 gegen das Original | [NICHT BELEGT] | Bequemes Tauschmodell |
| **Tausch-Anbieter Sprockhövel** (Kleinanzeigen) | (Suchauszug) | Tauschlenkräder u. a. BMW M, Audi TT; Airbag und Blenden werden vom Kundenfahrzeug übernommen | ca. **180–280 €** | Sehr günstig |
| **Lederlenkrad-Service (eBay-Shop)** | https://www.ebay.de/str/lederlenkradservicetomaszkruzolek | Neubezug Leder/Alcantara per Versand | ca. **197–387 €** | Versandmodell, große Reichweite auf eBay |
| **smm-exclusives** (Gronau, NRW) | https://www.kleinanzeigen.de/pro/smm-exclusives | Lenkräder in Leder, Alcantara und Carbon für Audi 8Y/B9/C8 | ca. **799–1.199 €**; C8-Lenkrad 1.099 € | **Regionaler Wettbewerber in NRW**, deckt RS3 8Y ab |
| **carbonrange** (Ludwigsburg) | https://www.kleinanzeigen.de/pro/carbonrange | Carbon-Lenkräder Audi R8/TTRS/RS6/RS3/RS4/RS5, teils mit LED-Performance-Display | z. B. **850 € VB** | LED-Display-Varianten |
| **rr-retrofits** (Greiz) | https://www.kleinanzeigen.de/pro/rr-retrofits | Carbon-Blenden und **digitale Lenkradtasten für A6/S6/RS6 C8**, beheiztes Lenkrad | beheiztes Lenkrad ca. **850 €** | **Direkte Konkurrenz zu den PSS-Digitaltasten (1.990 €)** |
| Regionale Autosattlereien (z. B. Aliti, Köln) | https://www.gelbeseiten.de/gsbiz/cc0e5af4-9b64-4aec-b385-2bb34a52a95e | Alcantara, Austauschsitze, klassische Sattlerarbeiten | [NICHT BELEGT] | Nähe zum Kunden, Handwerksbetrieb |

Forenpreise für einen reinen Neubezug liegen bei **120–220 €** (BMW-Syndikat 2007–2021, https://www.bmw-syndikat.de/bmwsyndikatforum/topic_p140392_Lenkrad_mit_Alcantara_beziehen_-_Kostenfrage_verschiedene_Preise___Kaufberatung.html). Die Werte sind alt und dienen nur als Orientierung.

### 1c. Internationale Anbieter mit Lieferung nach DE / EU

| Anbieter | URL | Positionierung | Preisniveau | Hinweis |
|---|---|---|---|---|
| **BimmerPlug** (US) | https://bimmerplug.com/pages/premium-custom-steering-wheels-designed-for-style-performance | Individuelle Carbon-Lenkräder BMW (inkl. G-Reihe/LCI) und Audi | ca. **800–1.300 USD** | Vergleichbares Design zu PSS, deutlich günstiger |
| **Bavmods** (US) | https://bavmods.com/de/products/custom-bmw-steering-wheels | Individuelle BMW-Carbon-Lenkräder, deutschsprachige Shopseiten | Preise in USD; 2–3 Wochen Fertigung | DE-lokalisierter Shop |
| **CenCal Motorsport** (US) | https://cencalmotorsport.com/products/audi-carbon-fiber-steering-wheel-carbon-fiber-steering-wheel | Carbon-Lenkräder Audi/BMW | [NICHT BELEGT]; 10–15 Tage Fertigung + 5–10 Tage Versand | – |
| **ACM Technik** | https://acmtechnik.com/products/bmw-2-3-4-5-series-lci-g80-g81-g82-g83-g87-g20-g30-carbon-fiber-steering-wheel-2019 | Carbon-Lenkräder BMW G80/G87 u. a.; weltweiter Versand | [NICHT BELEGT] | Airbag muss umgesetzt werden → professioneller Einbau nötig |
| **AutoTecknic** (US) | https://autotecknic.com/products/autotecknic-carbon-alcantara-steering-wheel-trim-g8x-m2-m3-m4 | Carbon/Alcantara-Lenkradblenden BMW G8X | [NICHT BELEGT] | Günstigere Teil-Lösung |
| **China-Ware über eBay/Alibaba** | z. B. https://www.ebay.de/itm/364644480409, https://www.alibaba.fr/product-detail/Custom-Audi-Forged-Carbon-Fiber-Steering_1601669441380.html | Generische Carbon-/LED-Lenkräder | ca. **217 €** (Audi), **430–610 €** (BMW/Audi) | Preisdruck, Qualität und Airbag-Sicherheit unklar → **Vertrauen ist das Verkaufsargument von PSS** |

### 1d. Schlüsselcover

| Anbieter | URL | Preisniveau |
|---|---|---|
| eBay-Händler „zalederetuis“ (handgefertigte Lederhüllen, viele Marken) | https://www.ebay.de/usr/zalederetuis | ca. **30–65 €** |
| kwmobile (Leder, Kaufland) | https://www.kaufland.de/product/467665687/ | ca. **16–17 €** |
| Lederhüllen für Mercedes (eBay, diverse) | https://www.ebay.de/itm/197834178947 | ca. **10–14 €** |
| Mercedes-Händler (Kalbsleder-Schlüsseletui, Italien) | https://store.trivellato.it/en/products/keychain-case | **70 €** |
| **PSS Nappa-Schlüsselcover** | ps-sattlerei.shop | **199–249 €** |

**Einordnung:** Die PSS-Cover kosten etwa das **3- bis 15-Fache** der sichtbaren Alternativen. Ohne klare Premium-Geschichte (Nappa, Manufaktur, passend zum eigenen Interieur, Wunschfarbe, Geschenkverpackung) oder einen Bundle-Vorteil werden sie kaum als Einzelartikel verkauft. Stark sind sie als **Zusatzverkauf zu Lenkrad und Paket** und als **Geschenk** **[ANNAHME]**.

### 1e. Preispositionierung PSS im Vergleich (Lenkräder)

```
China/eBay generisch        ~217 – 610 €
Neubezug/Tausch DE          ~140 – 387 €
Kleinanzeigen-Profis DE     ~799 – 1.199 €
individualiseyourcar Carbon  ab 790 €
BMW M Performance (OEM)     ~458 – 1.665 €
BimmerPlug (USD)            ~800 – 1.300 $
ABT Carbon/Leder RS6         1.790 € + 125 € Montage
PSS Carbon-Lenkräder         1.690 – 2.190 €  (Digital: 3.490 – 3.990 €)
```
PSS liegt preislich auf ABT-Niveau, also an der Spitze des Marktes. Das funktioniert nur, wenn der Shop den Mehrwert sichtbar macht: Manufaktur, Montage vor Ort, Gewährleistung, Airbag-/OEM-Anbauteile, Wunschfarbe, persönliche Beratung. Derzeit fehlt dieser Nachweis teilweise (siehe Abschnitt 4).

---

## 2. Nachfrage und Trends

### 2a. Marktgröße
- Laut BBE-Tuningstudie (vorgestellt am 02.12.2023 auf der Essen Motor Show, Partner u. a. VDAT, AvD, Automechanika) beträgt das Tuningvolumen in Deutschland **über 2 Mrd. €**. Den größten Anteil haben Räder/Reifen und Fahrwerk (https://sneak-preview-automechanika.messefrankfurt.com/content/dam/messefrankfurt-redaktion/automechanika/2024/press/press-release/03-pm-ergebnisse-tuningstudie-2023.pdf, https://wolk-aftersales.com/en/tuning-study-2023-emotional-mobility-car-tuning-and-refinement/).
- Ältere Werte nennen 1,8–1,85 Mrd. € (https://www.t-online.de/auto/technik/id_81016142/tuning-world-bodensee-heisse-kisten-und-frisierte-maedels.html, https://www.schwaebische.de/wirtschaft/blitzendes-chrom-und-brummende-auspuffe-289066), jeweils undatiert.
- **Marktanteil Interieur/Lenkrad: [NICHT BELEGT].** Die vollständige Studie ist kostenpflichtig bei Wolk Aftersales erhältlich.
- Nach der VDAT-Mitgliederbefragung ist die Konkurrenz durch Fahrzeughersteller beim Zubehör ein wachsendes Problem (https://www.autohaus.de/nachrichten/autohandel/vdat-stabile-tuning-umsaetze-2725426). Für PSS heißt das: OEM-Lenkräder wie BMW M Performance setzen den Preisanker.

### 2b. Szene und gefragte Fahrzeuge
- Die Szene wird von **BMW, Audi, VW und Mercedes** geprägt. Sie ist **jung, online-affin und stark vernetzt** (Tuningstudie 2023, Quelle wie oben). Das passt genau zum Markenfokus von PSS.
- Die Tuning World Bodensee 2026 zählte **111.000 Besucher** und über 1.000 Showcars (https://www.vol.at/friedrichshafen-feiert-111-000-tuning-fans/10176149). Die Nachfrage nach Tuning-Events ist also hoch, auch aus Österreich (Vorarlberg).
- Der VW Golf führt im ersten Halbjahr 2026 die Neuzulassungen an (44.625) (https://www.autozeitung.de/zulassungsstatistik-140455.html). Das spricht für eine breite VW-Basis. Ob Golf R/GTI deshalb besonders häufig getunt werden: **[ANNAHME]**.
- Ein **Ranking der meistgetunten Modelle (RS3 8Y, M3 G80, M2 G87, Golf 8 R, RS6 C8, AMG C63) habe ich nicht gefunden: [NICHT BELEGT].** Indizien: Kleinanzeigen-Profis bieten gezielt Lenkräder für **Audi 8Y, B9 und C8** an (smm-exclusives, carbonrange, rr-retrofits, Quellen oben). Dort gibt es also nachweislich Angebot und vermutlich auch Nachfrage.

### 2c. Suchbegriffe (qualitativ)
Konkrete Suchvolumina sind **[NICHT BELEGT]**, da kein Keyword-Tool verfügbar war. Folgende Suchmuster sind durch Foren, Ratgeber und Marktplatz-Angebote belegt:
- **„Lenkrad neu beziehen“ / „Lederlenkrad neu beziehen“**: wiederkehrende Forenthreads und ein Ratgeber bei Auto Bild (https://www.autobild.de/artikel/leder-lenkrad-neu-beziehen-20579521.html, BMW-Syndikat-Threads oben). → Nachfrage nach einem **Neubezug-Service**, den PSS nicht als Shop-Produkt anbietet.
- **„Alcantara Lenkrad“ + Modell**: In Foren wird der Verschleiß von Alcantara diskutiert (BMW-Syndikat). → Chance für das **Alcantara-Reinigungsset** als Zusatzverkauf und für Pflege-Inhalte.
- **„Carbon Lenkrad [Modell]“ / „Carbon Lenkrad RS6 C8 LED“**: viele Marktplatz-Angebote, siehe 1b/1c.
- **„Schlüsselhülle Leder Mercedes/BMW“**: viele Massenangebote zwischen 10 und 70 €, siehe 1d.
- **Empfehlung:** Daten aus Google Search Console und Keyword Planner ziehen (eigene Konten, keine Weitergabe an Dritte) und die Keyword-Liste je Modell belegen. Bis dahin ist alles hier **[ANNAHME]**.

### 2d. Saisonalität und Termine
| Zeitraum | Ereignis | Bedeutung für PSS | Beleg |
|---|---|---|---|
| **27.11. (Preview) / 28.11.–06.12.2026** | **Essen Motor Show**, ca. 500 Aussteller, tuningXperience-Bereich | **Wichtigster Verkaufs- und Leadtermin des Jahres**, laut Ausstellerliste ist PSS dabei [PRÜFEN 2026] | https://www.essen-motorshow.de/news-en/detail-ems/essen-motor-show-2026-the-festival-for-car-enthusiasts-picks-up-speed-2200, https://www.messen.de/de/7678/essen/essen-motor-show/info |
| Nov.–Dez. | Weihnachtsgeschäft | Schlüsselcover, Reinigungsset, Gutscheine | [ANNAHME] – typischer Geschenkzeitraum, keine branchenspezifischen Zahlen gefunden |
| Jan.–Feb. | Winterpause der Fahrzeuge | Gute Zeit für Interieur-Umbau mit 3 Tagen Standzeit, das Auto wird ohnehin wenig gefahren | [ANNAHME] |
| März–Mai | Saisonstart, Tuning-Treffen | Kaufimpuls für Lenkrad und Carbon-Teile vor der Saison | Terminkalender: https://www.autozeitung.de/tuning-treffen-termine-206171.html |
| Frühjahr/Sommer | Tuning World Bodensee u. a. | Reichweite in Süddeutschland und Österreich | https://www.vol.at/friedrichshafen-feiert-111-000-tuning-fans/10176149 |

---

## 3. Zielgruppen

| Zielgruppe | Was sie kauft | Kaufmotiv / Hürde | Belege / Kennzeichnung |
|---|---|---|---|
| **Privat-Enthusiasten (RS/M/AMG-Fahrer, oft 25–45 J.)** | Carbon-Lenkräder, LED-Schaltwippen, Carbon-Sets, Schlüsselcover | Individualität, Optik, „Social-Media-tauglich“. Hürden: hoher Preis, Angst um Airbag und Zulassung, Vertrauen in einen Online-Kauf | Szene jung und online-affin (Tuningstudie 2023); Altersspanne **[ANNAHME]** |
| **Leasingnehmer von Premiumfahrzeugen** | Lenkrad, Carbon-Teile – sofern rückbaubar | Leasingverträge verlangen meist eine **Zustimmung des Leasinggebers** und bei Rückgabe den **Originalzustand**; rückstandslos entfernbare Änderungen gelten als unproblematisch (https://www.adac.de/fahrzeugwelt/magazin/finanzierung/leasing-was-ist-erlaubt/, https://www.mivodo.com/ratgeber/leasing/leasingfahrzeug-tunen/). → Verkaufsargument: **„Original bleibt erhalten, Rückbau vor Rückgabe möglich“** | Ob der Rückbau beim PSS-Austauschverfahren möglich ist: **[PRÜFEN intern]** |
| **Leasing-Rückgabe / Verschleiß** | Neubezug eines abgenutzten Lenkrads | Achtung: **Leichter Lenkradverschleiß wird in vielen Schadenkatalogen als normale Abnutzung akzeptiert** (https://www.autohaus-toennemann.de/wp-content/uploads/2020/04/hyundai_fz_leasingrueckgabe.pdf, https://www.arval.ch/sites/default/files/inline-files/Fahrzeugr%C3%BCckgabe_Factsheet_DE.pdf). Der Druck vor der Rückgabe ist also **geringer als oft vermutet** und betrifft nur Risse und starke Abnutzung | Das Potenzial ist begrenzt, nicht überbewerten |
| **Autohäuser / Gebrauchtwagenhändler (B2B)** | Interieur-Aufbereitung vor dem Verkauf, veredelte Vorführ- und Lagerfahrzeuge, Schlüsselcover als Übergabegeschenk | Höherer Verkaufspreis, schnellere Vermarktung **[ANNAHME]** | Nachfrage [NICHT BELEGT] |
| **Tuner / Werkstätten ohne eigene Sattlerei (B2B-Partner)** | Lenkräder und Interieur als Zulieferteil, Showcar-Ausstattung | Komplettangebot für die eigenen Kunden; ABT zeigt, dass Tuner Interieur-Pakete verkaufen | ABT-Beispiel (Quelle 1a); Partnerbereitschaft [NICHT BELEGT] |
| **Luxus-/G-Klasse-Kunden** | Komplettpakete 15.000–40.000 € | Exklusivität, wenig Standzeit; Konkurrenz durch Brabus/Mansory/Keyvany | Quellen 1a |
| **Gewerbliche VIP-/Shuttle-/Camper-Nutzer (VW T6.1)** | Interieur-Paket T6.1 | Wertigkeit für Fahrgäste **[ANNAHME]** | – |

---

## 4. Chancen und Lücken

### Wo PSS besser aufgestellt ist
1. **Austauschverfahren mit ca. 3 Tagen Standzeit** (aus den Produktdaten). Bei ABT werden Montagekosten separat ausgewiesen; Standzeiten habe ich bei Wettbewerbern nicht gefunden **[NICHT BELEGT]**. Das ist ein starkes Alleinstellungsmerkmal und sollte überall prominent stehen.
2. **Komplettanbieter**: Lenkrad, Carbon-Set, Schaltwippen, Digitaltasten, Race Display, Komplettpaket und Schlüsselcover aus einer Hand. Kleinanzeigen-Anbieter und internationale Shops bieten meist nur Einzelteile.
3. **Breite Plattformabdeckung bei Audi RS6/RS7 C8** (Lenkräder, digitale Tasten, Race Display, Carbon-Set, drei Paketstufen von 14.990 bis 39.900 €). Laut US-Seite bietet ABT das Lenkrad-Upgrade für die neuesten RS6/RS7/RSQ8 nicht an (Quelle 1a). Das ist eine mögliche Lücke für PSS **[PRÜFEN, ob das auch in DE gilt]**.
4. **Montage vor Ort in Bergkamen (NRW)**: Ruhrgebiet, Nähe zur Messe Essen.
5. **Messepräsenz Essen Motor Show** (Ausstellerliste).

### Wo etwas fehlt
| Bereich | Lücke | Beleg / Kennzeichnung |
|---|---|---|
| **Verfügbarkeit** | 27 aktive Produkte mit Bestand ≤ 0, 12 Entwürfe teils mit Lagerbestand | Produktdaten |
| **Rechtssicherheit Preise** | „ab“-Preise in den Meta-Beschreibungen weichen vom Shop-Preis ab | Produktdaten; § 5 UWG |
| **Modelle** | Audi **RS3 8Y** fehlt (nur 8V), wird aber von smm-exclusives angeboten; **VW Golf 8 R/GTI** fehlt; **Mercedes neue Generation** (Lenkradgeneration ab ca. 2021, z. B. W206) fehlt, das Sortiment endet bei „FL ab 2018“; **Porsche** fehlt ganz (Techart besetzt das Segment); BMW M2 G87 / M3 G80 sind nur über Tags abgedeckt | Produktdaten; Modelljahre der Mercedes-Generation **[PRÜFEN]** |
| **Einstiegsprodukt** | Kein Neubezug-Service für das eigene Lenkrad. Markt: 140–387 € | individualiseyourcar, eBay, Kleinanzeigen (Abschnitt 1b) |
| **Vertrauen und Sicherheit** | Keine sichtbaren Angaben zu Airbag-Handling, Gewährleistung, TÜV/Teilegutachten und Leasing-Rückbau **[NICHT GEPRÜFT – Shop nicht abrufbar]**. Allgemein gilt: Lenkradänderungen ohne ABE oder Teilegutachten können eine Einzelabnahme erfordern bzw. die Betriebserlaubnis gefährden (§ 19 StVZO; https://www.tuningblog.eu/en/kategorien/tipps_tuev-dekra-u-co/sportlenkrad-tuning-360893/). Die genaue Rechtslage für PSS-Lenkräder (OEM-Basis mit Original-Airbag?) ist **[PRÜFEN mit TÜV/DEKRA]** | Kunden wägen das gegen das günstige OEM-Teil (BMW: teils kein Eintrag nötig) ab |
| **Online-Reputation** | Keine Google-Bewertungen oder Erfahrungsberichte zu PSS gefunden | Suche „PS-Sattlerei Bergkamen“ ergab nur den Messe-Eintrag **[NICHT BELEGT]** |
| **Social Media** | Präsenz von @pssattlerei per Suche nicht auffindbar (Profile werden nicht indexiert) | **[NICHT GEPRÜFT]** – Kennzahlen z. B. über Metricool oder direkt in der App prüfen |
| **Schlüsselcover-Preis** | 199–249 € gegenüber 10–70 € am Markt | Abschnitt 1d |
| **Finanzierung** | Ob Ratenkauf/Finanzierung im Shop angeboten wird: **[NICHT GEPRÜFT]**. Bei Pakete ab 10.000 € wäre das relevant. Anbieter wie Klarna geben ca. 20 % höhere Checkout-Conversion an (Herstellerangabe, https://docs.klarna.com/klarna-network-distribution/resources/how-to-position-klarna-to-your-partners/) – **nicht unabhängig belegt** | – |
| **Konfigurator** | Wettbewerber (individualiseyourcar, BimmerPlug/Bavmods) arbeiten mit Konfigurator bzw. Presets. PSS bildet Farben über einzelne Produkte ab | Abschnitt 1b/1c |

### Rechtliche Leitplanken (Deutschland)
- **Markenrecht:** „passend für Audi/BMW/Mercedes“ ist als Bestimmungshinweis nach **§ 23 Nr. 3 MarkenG** grundsätzlich zulässig, solange kein Eindruck von Originalware oder autorisiertem Zubehör entsteht. **Herstellerlogos in Werbung und Anzeigen vermeiden** (BGH I ZR 153/14; Übersicht: https://www.it-recht-kanzlei.de/marken-nutzung-zubehoerhandel.html, https://www.ra-plutte.de/markenrecht-alles-wichtige-zu-ersatzteilen-und-zubehoer/). Abgebildete Original-Airbag-Embleme im Produktfoto sind etwas anderes als Logo-Werbung, Ads-Motive sollten aber **[PRÜFEN durch Anwalt]** werden. Die bestehenden Produktnamen („PSS … passend für …“) sind gut gelöst.
- **UWG/PAngV:** Preisangaben müssen einheitlich sein (siehe Befund oben). Nur echte Kundenbewertungen verwenden. Influencer-Kooperationen als Werbung kennzeichnen.
- **Akquise:** Keine Werbe-E-Mails ohne Einwilligung (§ 7 UWG), Newsletter nur mit Double-Opt-In. Auch bei B2B-Telefonaten ist eine mutmaßliche Einwilligung nötig. Messe-Leads nur mit dokumentierter Einwilligung (DSGVO).

---

## 5. Top-10-Empfehlungen (nach Umsatzwirkung sortiert)

Die Umsatzwirkung ist eine qualitative Einschätzung **[ANNAHME]**. Bezifferte Umsatzprognosen sind ohne Shop-Kennzahlen (Besucher, Conversion, Warenkorb) nicht seriös möglich.

| # | Empfehlung | Warum (Beleg) | Aufwand | Zeitpunkt |
|---|---|---|---|---|
| **1** | **Shop bestellbar machen**: (a) die 27 aktiven Produkte mit Bestand ≤ 0 prüfen und bei Fertigung auf Bestellung „Weiterverkaufen“ plus ehrliche Lieferzeit („in Handarbeit gefertigt, Lieferzeit X Wochen“) einstellen; (b) Entwürfe mit Lagerbestand (Mercedes FL/VFL, RS3 8V, R8) prüfen und freischalten; (c) „ab“-Preise in den SEO-Texten korrigieren (UWG). | Produktdaten. Jedes nicht bestellbare Produkt kostet direkt Umsatz | **gering** | sofort, vor der Messe |
| **2** | **Essen Motor Show (28.11.–06.12.) als Verkaufsaktion nutzen**: Messe-Angebot (z. B. Montage-Termin im Januar/Februar mit Messe-Vorteil, „Messepreis“ nur mit korrektem Referenzpreis nach PAngV), Terminbuchung am Stand, Anzahlungen, QR-Code zu Landingpage mit Beratungs- und Terminformular, Newsletter-Anmeldung mit Double-Opt-In. Showfahrzeug RS6 C8 oder G-Klasse. | Größter Tuning-Termin im Umkreis, ca. 500 Aussteller; PSS steht in der Ausstellerliste | **mittel** | jetzt vorbereiten |
| **3** | **Weihnachtsaktion bis ca. 18.12.**: Schlüsselcover und Reinigungsset als Geschenk-Set, **Wertgutscheine** für Lenkrad, Montage oder Pakete, Geschenkverpackung. Nur an Bestandskunden mit Einwilligung und über eigene Kanäle bewerben. | Schlüsselcover sind zum Einzelpreis schwer verkäuflich (Abschnitt 1d), als Geschenk aber plausibel **[ANNAHME]** | **gering** | ab sofort |
| **4** | **Vertrauenspaket auf jeder Produktseite**: Airbag-Handling (Original-Airbag?), Gewährleistung, Montage in Bergkamen, Standzeit 3 Tage, FAQ zu TÜV/Eintragung (nach Klärung mit Prüforganisation), **Leasing-Hinweis „Original bleibt erhalten / Rückbau möglich“** (falls zutreffend), Vorher-Nachher-Fotos, Prozessvideo. Systematisch echte Google-Bewertungen sammeln (nach dem Auftrag, ohne Anreiz). | Preis auf ABT-Niveau bei günstiger Konkurrenz (217–1.199 €). Ohne Vertrauen gewinnt der Preis. Keine Online-Bewertungen gefunden | **mittel** | Dez.–Jan. |
| **5** | **Produktstruktur und SEO aufräumen**: ein Produkt pro Modell mit Farbvarianten (statt Kopien), saubere URLs mit 301-Weiterleitungen, eigene Meta-Texte, Alt-Texte, Landingpages je Modell („Carbon Lenkrad Audi RS6 C8“, „Alcantara Lenkrad BMW M3 G80“, „Interieur Upgrade G-Klasse“). | Produktdaten (Dubletten, falsche Meta-Texte, 76 von 79 Produkten ohne Alt-Text) | **mittel** | Jan.–Feb. |
| **6** | **Ratenzahlung/Finanzierung für Pakete und Lenkräder** sichtbar anbieten (falls noch nicht vorhanden) und mit „ab X €/Monat“ korrekt nach PAngV bewerben. | Warenkörbe von 1.690 bis 39.900 €; Herstellerangaben zur Conversion-Wirkung (nicht unabhängig belegt) | **gering–mittel** | Jan. |
| **7** | **B2B-Partnerprogramm** für Autohäuser, Gebrauchtwagenhändler und Tuner ohne Sattlerei: Händlerkonditionen, Musterfahrzeug, Interieur-Aufbereitung vor dem Verkauf. Ansprache nur rechtskonform (Messe, LinkedIn, Empfehlung, Anfrageformular). | ABT zeigt, dass Tuner Interieur verkaufen; Nachfrage bei Händlern [NICHT BELEGT] | **mittel–hoch** | ab Q1 |
| **8** | **Einstiegsservice „Ihr Lenkrad veredelt“** (Neubezug Leder/Alcantara im Einsende- oder Tauschverfahren) als günstiges Einstiegsprodukt, mit Upgrade-Pfad zum Carbon-Lenkrad. | Belegte Such- und Forennachfrage „Lenkrad neu beziehen“; Markt 140–387 € | **mittel** | Q1, vor dem Saisonstart |
| **9** | **Social-Content-System** (TikTok, Instagram Reels, YouTube): Handwerksprozess, Vorher-Nachher, 3-Tage-Umbau im Zeitraffer, Messe-Content, Pflege-Tipps zu Alcantara (Reinigungsset). Creator-Kooperationen gekennzeichnet. Keine Herstellerlogos als Werbeaufhänger. | Junge, online-affine Zielgruppe (Tuningstudie); Vilner zeigt den Hebel von Medienreichweite | **mittel** | laufend |
| **10** | **Modelllücken schließen** (nach Nachfrageprüfung über Search Console/Keyword Planner): Audi RS3 8Y, VW Golf 8 R/GTI, aktuelle Mercedes-AMG-Lenkradgeneration, BMW M2 G87/M3 G80 als eigene Landingpage. Porsche als Option prüfen. | Wettbewerber decken 8Y/C8 ab (Kleinanzeigen-Profis); Golf führt die Zulassungen an | **hoch** | Q1–Q2 2027 |

---

## 6. Offene Punkte / nächste Schritte
1. Netzwerkfreigabe für `ps-sattlerei.shop`, `abt-sportsline.de`, `carlexdesign.com` und `individualiseyourcar.com` einrichten, dann Shop und Wettbewerberseiten verifizieren (Trust-Elemente, Zahlarten, Social-Links).
2. Shopify-Einstellung „Weiterverkaufen bei 0 Bestand“ je Produkt prüfen (Befund Abschnitt 0).
3. Mit TÜV/DEKRA klären, ob für die PSS-Lenkräder eine Eintragung oder ein Teilegutachten nötig ist. Danach eine FAQ formulieren.
4. Klären, ob beim Austauschverfahren die Originalteile beim Kunden bleiben (Leasing-Argument).
5. Search Console, Keyword Planner und Shop-Analytics auswerten, um Suchvolumen und Conversion zu belegen.
6. Teilnahme an der Essen Motor Show 2026 bestätigen und Standnummer eintragen.

---

### Quellen (Auswahl, alle im Text verlinkt)
- Essen Motor Show 2026: https://www.essen-motorshow.de/news-en/detail-ems/essen-motor-show-2026-the-festival-for-car-enthusiasts-picks-up-speed-2200 · https://www.messen.de/de/7678/essen/essen-motor-show/info · Aussteller PSS: https://essen-motorshow.de/car-exhibition/exhibitor-list/detail/ps-sattlerei-gmbh-dace2
- Tuningstudie 2023: https://sneak-preview-automechanika.messefrankfurt.com/content/dam/messefrankfurt-redaktion/automechanika/2024/press/press-release/03-pm-ergebnisse-tuningstudie-2023.pdf · https://wolk-aftersales.com/en/tuning-study-2023-emotional-mobility-car-tuning-and-refinement/
- VDAT: https://www.autohaus.de/nachrichten/autohandel/vdat-stabile-tuning-umsaetze-2725426
- ABT: https://www.abt-sportsline.de/fileadmin/user_upload/ABT_RS6_Individual_Preisliste.pdf · https://us.abt-sportsline.de/tuning/products/abt-individual-interior
- BMW M Performance: https://www.bmw.de/de/shop/ls/dp/physical-goods/76507 · https://www.bmw.de/de/shop/ls/dp/physical-goods/12450
- individualiseyourcar: https://individualiseyourcar.com/en/steering-wheel/steeringwheel-upholestery/
- Kleinanzeigen: https://www.kleinanzeigen.de/pro/smm-exclusives · https://www.kleinanzeigen.de/pro/carbonrange · https://www.kleinanzeigen.de/pro/rr-retrofits · https://www.kleinanzeigen.de/pro/lenkradwerk
- International: https://bimmerplug.com/pages/premium-custom-steering-wheels-designed-for-style-performance · https://bavmods.com/de/products/custom-bmw-steering-wheels · https://acmtechnik.com/products/bmw-2-3-4-5-series-lci-g80-g81-g82-g83-g87-g20-g30-carbon-fiber-steering-wheel-2019
- Leasing: https://www.adac.de/fahrzeugwelt/magazin/finanzierung/leasing-was-ist-erlaubt/ · https://www.mivodo.com/ratgeber/leasing/leasingfahrzeug-tunen/ · https://www.leasingmarkt.de/magazin/leasing/leasing-rueckgabe
- Markenrecht: https://www.it-recht-kanzlei.de/marken-nutzung-zubehoerhandel.html · https://www.ra-plutte.de/markenrecht-alles-wichtige-zu-ersatzteilen-und-zubehoer/
- Vilner: https://www.autobild.de/artikel/mercedes-vito-tuning-von-vilner-2772308.html · Techart: https://www.autobild.de/artikel/techart-manufaktur-992-gt-street-r-porsche-tuning-21728737.html
