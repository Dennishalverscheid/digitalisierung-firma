# 05 – Conversion: Anfrage- und Beratungsweg für ps-sattlerei.shop

**Stand:** 05.11.2026 · **Rolle:** CRO-Lead · **Status:** Entwurf zur Freigabe. Im Shop wurde nichts geändert.

> **Kernthese:** Rund 30.416 Sitzungen und 7 Bestellungen (davon vermutlich 3 Tests) in 12 Monaten zeigen: Ein Lenkrad für 1.690–3.490 € oder ein Interieur-Paket für 14.990–39.900 € kauft fast niemand per „In den Einkaufswagen legen“. Die Produkttexte verlangen sogar selbst eine Prüfung **vor** der Bestellung („Vor Bestellung bitte per Teilenummer/FIN prüfen“). Die Seite bietet dafür aber keinen Weg an. Deshalb brauchen diese Seiten als Hauptaktion **„Beratung anfragen“** mit Passform-Check. Der Kaufbutton bleibt als zweite Option.

---

## 0. Datenbasis und Grenzen dieser Analyse

| Quelle | Genutzt für | Einschränkung |
|---|---|---|
| `scratchpad/live2/startseite.html` (Live-HTML vom 05.11., Theme „Rechtssicher – Entwurf 04.11.2026“, Concept 5.1.0) | Startseite, Header, Footer, Pop-up, Kundenstimmen, Tracking-Pixel, Darstellung des Produktformulars im Abschnitt „Hervorgehobenes Produkt“ | **Die übrigen 12 HTML-Dateien konnte ich nicht öffnen.** Ich hatte keine Shell, um den Ordner aufzulisten, und die Dateinamen ließen sich nicht erraten. Befunde zu Produkt- und Kollektionsseiten, die nur im HTML sichtbar wären, sind deshalb mit **[live prüfen]** markiert. |
| `backups/shopify/2026-11-04/products.json` (Stand 04.11. morgens) | Varianten, Optionsnamen, Preise, Beschreibungstexte für Design Edition RS6 C8, Daytona, GT-R und weitere Produkte | Titel und URLs haben sich durch den Paket-B-Rollout seitdem geändert. Die Optionsnamen und Texte waren vom Rollout nicht betroffen (laut `paket-b-rollout.json` wurden nur Titel, Handle, SEO und Alt-Texte geändert). |
| WebFetch `ps-sattlerei.shop` | – | **Nicht möglich:** DNS-Fehler, die Domain ist in dieser Sitzung nicht freigegeben. |
| Benchmarks | – | **Keine verwendet.** Bei der vorhandenen Datenlage helfen Branchenwerte nicht weiter. Alle Zahlen in diesem Dokument stammen aus dem Briefing, aus `STATUS.md` oder aus dem HTML bzw. JSON. |

**Rechenbasis (aus dem Briefing abgeleitet):** 30.416 Sitzungen ÷ 12 ≈ **2.535 Sitzungen pro Monat**. Davon sind ca. 75 % mobil, also ≈ 1.900 mobile Sitzungen pro Monat. Daraus folgt für die Testplanung: Klassische A/B-Tests mit statistischer Signifikanz sind bei 7 Bestellungen im Jahr **nicht machbar**. Die Tests in Abschnitt 5 sind deshalb als **Vorher-nachher-Vergleiche mit festen Zeiträumen** angelegt. Gemessen werden vor allem Mikro-Conversions (Anfragen, Klicks auf Anruf/WhatsApp), nicht Käufe.

---

## 1. Funnel-Diagnose je Seitentyp

Bewertung: 🔴 hält vom Kauf oder von der Anfrage ab · 🟡 bremst · 🟢 in Ordnung

### 1.1 Seitenübergreifend (Header, Footer, Overlays) – gilt auf jeder Seite

| # | Befund | Beleg aus dem HTML | Wirkung (mobil) | |
|---|---|---|---|---|
| G1 | **Newsletter-Pop-up nach 7 Sekunden, mobil als Vollbild, ohne sichtbares Schließen-Kreuz** | `<newsletter-modal … data-delay="7" data-expiry="30" …>` mit `class="… fixed bottom-0 left-0 h-full w-full"`. Der Schließen-Button hat `class="… drawer__close hidden sm:flex …"`, ist also **unter 640 px ausgeblendet**. Auf dem Handy bleibt nur Wischen oder Tippen auf den Hintergrund. | Wer gerade ein 2.000-€-Lenkrad ansieht, bekommt nach 7 Sekunden einen Vollbild-Dialog „Trag dich jetzt in unseren Newsletter ein!“ ohne erkennbaren Ausgang. Der Dialog kommt alle 30 Tage wieder. | 🔴 |
| G2 | **Kein Telefon und kein WhatsApp im Header oder Menü.** Die Nummer steht nur ganz unten im Footer. | Header-Buttons: Menü, Login (nur Desktop), Warenkorb. Die Telefonnummer steht nur im Footer: `href="tel:+4923899953050"` „+49 (0) 2389 995 30 50“. Menü-Drawer: Home, Interieur, Lenkräder, Accessoires, Zubehör, Kontakt. | Für Beratungsprodukte fehlt die wichtigste Abkürzung. Mobil muss man bis ganz nach unten scrollen. | 🔴 |
| G3 | **„Need help?“ ist ein toter Link** (englisch, ohne Ziel) | `<a class="link text-sm …" role="link" aria-disabled="true">Need help?</a>` – ohne `href`. Er steht im Produktformular (Abschnitt „Hervorgehobenes Produkt“) und vermutlich auch auf allen Produktseiten **[live prüfen]**. | Genau an der Stelle, an der jemand Hilfe sucht, passiert nichts. Das ist der natürliche Platz für „Beratung anfragen“. | 🔴 |
| G4 | **Facebook- und YouTube-Links sind kaputt** | `href="facebook.com/pssattlerei"` und `href="www.youtube.com/@pssattlerei1566"` ohne `https://`. Der Browser löst sie relativ auf, also zu `ps-sattlerei.shop/facebook.com/…`, und landet auf einer **404-Seite**. Betroffen sind Topbar, Menü, Pop-up und Footer. | Wer Social Proof sucht, landet auf einer Fehlerseite. | 🟡 |
| G5 | **Kundenstimmen ohne Quelle** | `<blockquote>…Absolut top!…<cite>— Tom S.</cite>`, „— Daniel N.“, „— Carsten B.“ – ohne Datum, ohne Plattform, ohne Hinweis zur Echtheitsprüfung. | Rechtlich problematisch nach § 5b Abs. 3 UWG (Abschnitt 4). Vertrauen schaffen die Zitate kaum, weil man sie nicht nachprüfen kann. | 🟡 (rechtlich 🔴) |
| G6 | **Partnerlogos ohne Kontext, eines davon als KI-Bild** | Logo-Leiste mit Links zu vest-automotive.de, vanme.de, urban-automotive.co.uk, absolutemotors.eu. Die Bilddatei für Urban Automotive heißt `Gemini_Generated_Image_u80uo6u80uo6u80u.png`. Alle Logos haben `alt=""`. | Es bleibt unklar, ob es echte Partner oder Kunden sind. Ein KI-generiertes Fremdlogo kann Marken- und Irreführungsrisiken auslösen. **[FRAGE AN INHABER: Welche Beziehung besteht zu diesen vier Firmen? Liegt eine Freigabe zur Logo-Nutzung vor? Woher stammt das Urban-Automotive-Logo?]** | 🟡 |
| G7 | **Du und Sie gemischt** | „Wir sind für dich da! Mo - Fr. 09 - 17 Uhr“, „Trag dich jetzt in unseren Newsletter ein!“ neben „Melden Sie sich für unseren Newsletter an“. Die Produkttexte duzen („bringst du den RS6 …“). | Bei Preisen bis 40.000 € wirkt das uneinheitlich. Empfehlung wie im SEO-Plan: durchgehend **Sie**. | 🟡 |
| G8 | **Versandversprechen passt nicht zum Sortiment** | Ankündigungsleiste: „Kostenloser Versand ab 199 €“. Vertrauenszeile: „kostenloser Versand – für Bestellungen ab 199€.“ | Für Pakete mit Einbau vor Ort ist der Satz irrelevant. Wertvoller wäre an dieser Stelle „Einbau in Bergkamen · Beratung Mo–Fr 9–17 Uhr“. | 🟡 |
| G9 | **Toter „About us“-Button auf der Startseite** | `<a class="button button--secondary …" role="link" aria-disabled="true">About us</a>` ohne `href`. | Wer wissen will, wer hinter dem Shop steht, kommt nicht weiter. | 🟡 |
| G10 | **Tab-Titel ändert sich** | `theme.tabAttentionStrings = { nextMessage: "Wir sind noch da 👀" … }` | Kein Conversion-Hebel, wirkt eher unruhig. Abschalten (Theme-Einstellung) ist optional. | 🟢/🟡 |
| G11 | **Mehrere Marketing-Pixel aktiv** | `webPixelsConfigList`: Facebook-Pixel (`pixel_id 967825682366385`), App-Pixel `subdomain: pssattlerei` (PushOwl, Push-Benachrichtigungen), Shopify-Pixel. Die Shopify-Cookie-Leiste ist geladen (`privacy-banner.js`). | Ist die Einwilligung über die Shopify-Cookie-Leiste korrekt eingestellt, ist das in Ordnung. **[live prüfen]:** Erscheint mobil zusätzlich eine PushOwl-Abfrage für Push-Benachrichtigungen? Dann kämen zwei bis drei Overlays übereinander (Cookie-Leiste, Newsletter, Push). | 🟡 |

### 1.2 Startseite

| # | Befund | Beleg | |
|---|---|---|---|
| S1 | Die Haupt-CTAs führen ins allgemeine Sortiment, **nirgends steht ein Beratungsangebot** | Slideshow „YOU DREAM IT. WE BUILD IT.“ → „Produkte entdecken“ (`/collections`). Video-Bereich ebenfalls → „Produkte entdecken“. | 🔴 |
| S2 | **Versprechen ohne Ablauf und widersprüchlich zu den Produkttexten** | „Keine monatelange Wartezeit … du wählst online dein Paket, bestellst, kommst nur zum Umbau und erhältst dein veredeltes Interieur innerhalb von wenigen Tagen.“ Die Design Edition RS6 C8 nennt dagegen „Montage in ca. 3 Werktagen“, und laut SEO-Plan widersprechen sich die Fertigungszeiten (3–5, 4 bzw. 3–6 Wochen). | 🔴 |
| S3 | **Echte Stärken sind schon vorhanden, aber nicht mit Produkten verknüpft** | Vorher/Nachher-Vergleich (`audi_vorher_bild.jpg` / `audi_nachher_bild.jpg`), echte Fotos aus dem Fotoshooting (`SEB_1458.jpg`, `SEB_1488.jpg`), Video. | 🟢 – Material zur Wiederverwendung auf Produktseiten |
| S4 | Preise in ungewohntem Format | `€3.490,00`, `€39.900,00` (`moneyFormat: "€{{amount_with_comma_separator}}"`). Üblich ist in Deutschland „39.900,00 €“ oder „39.900 €“. | 🟡 |
| S5 | „Hervorgehobenes Produkt“ (Carbon Interieur Set RS6 C8) **ohne Kaufbutton, ohne Varianten und ohne Hinweis „inkl. MwSt.“** im Preisblock. Dort stehen nur „Share“, „Need help?“ (tot) und „Alle Details anzeigen“. | `<span class="price__regular">€3.990,00</span>` ohne Steuerhinweis im selben Block **[live prüfen, ob der Hinweis aus dem Rechtssicher-Theme hier fehlt]**. | 🟡 |
| S6 | Bei einer Farbvariante stellt das Farbfeld „Wunschfarbe“ eine echte Farbe dar | Iconic Manufaktur Edition: `title="… - Wunschfarbe" style="--swatch-background: #08ffd5;"` (türkis). | 🟡 – Besucher halten Türkis für eine Standardfarbe |

### 1.3 Produktseite Interieur-Paket: „PSS Design Edition passend für Audi RS6 C8“

Daten aus `products.json` (Produkt 7564657295456, Vorlage `templateSuffix: "design-edition"`):

| Prüfpunkt | Befund (Beleg) | |
|---|---|---|
| **Preis lesbar?** | Varianten: „Rot / Nein (Versand)“ **14.990 €**, „Rot / Ja“ **16.990 €**, Wunschfarbe zum selben Preis. Angezeigt wird der Preis der gewählten Variante im Format „€14.990,00“ **[live prüfen]**. Dass die Montage 2.000 € Aufpreis kostet, sieht man erst nach dem Umschalten. | 🟡 |
| **Varianten klar?** | Der **Optionsname lautet „Rot“** mit den Werten „Rot“ und „Wunschfarbe“. Mobil steht dann „Rot: Rot“. Die zweite Option heißt „Montage durch PS Sattlerei?“ mit den Werten „Nein (Versand)“ und „Ja“. Bei anderen Produkten heißt sie „Montage durch PS-Sattlerei“ mit „Nein Versand“. Bei „Wunschfarbe“ gibt es **kein Feld, um die Farbe anzugeben**. | 🔴 |
| **Was kauft man genau?** | Der Text sagt selbst: „(Exakte Umfänge können je nach Paketvariante variieren.)“ und „exakt nach deiner Konfiguration veredelt“. Den Umfang kann der Kunde online aber nicht festlegen. | 🔴 Ein Kauf per Klick ist hier kaum sinnvoll |
| **Lieferzeit** | Im Text steht nur „Montage in ca. 3 Werktagen“ (Standzeit). **Wie lange die Fertigung bis zum Termin dauert, steht nirgends.** | 🔴 |
| **Versand** | Text: „Alternativ: Versand per Spedition an deine Werkstatt/Partnerwerkstatt“. Die Variante „Nein (Versand)“ hat im Backup `requiresShipping: false`. Laut STATUS wurde das in Paket A korrigiert **[live prüfen]**. | 🟡 |
| **Vertrauen** | 4 Bilder, alle `alt: ""` (vor dem Rollout). Keine Kundenstimme, kein Vorher/Nachher, kein Hinweis auf die Werkstatt. | 🟡 |
| **Kontaktweg** | Kein Anfrage-Button. „Need help?“ ist tot (G3). Kein Telefon in Sichtweite. | 🔴 |
| **Sticky Add-to-Cart** | **[live prüfen]** auf einem Smartphone mit 375 px Breite. Für Pakete wäre eine fixierte Kaufleiste ohnehin die falsche Hauptaktion. Empfehlung: Leiste mit „Beratung anfragen / Anrufen“ (Snippet unten). | – |
| **Wortwahl** | „OEM-nah in Optik und Passform“, „OEM-Look“. „OEM“ steht laut Briefing auf der Verbotsliste → an das Content-Team weitergeben. | 🟡 |

### 1.4 Produktseite Lenkrad: „PSS EVO-X Carbon Lenkrad Daytona Edition für Audi RS6 / RS7“

Produkt 7547762147424:

| Prüfpunkt | Befund (Beleg) | |
|---|---|---|
| Preis | „Daytona Grau / Nein (Versand)“ **1.990 €**. Den Preis der Montage-Variante live prüfen. | 🟢/🟡 |
| Varianten | Der **Optionsname „Daytona Grau“** ist gleichzeitig ein Wert („Daytona Grau“, „Wunschfarbe“). Gemeint ist die Farbe der 12-Uhr-Markierung und der Schaltwippen-Beschriftung. Das erkennt man nur aus dem Text. Bei Wunschfarbe gibt es kein Eingabefeld. | 🔴 |
| **Passform-Check verlangt, aber nicht möglich** | Text: „muss die Kompatibilität vorab individuell geprüft werden (z. B. anhand FIN, Fotos oder Teilenummern)“ und „Eine finale Kompatibilitätsprüfung … erfolgt im Idealfall vor Bestellung“. **Auf der Seite gibt es kein Formular und keinen Upload, nur den toten Link „Need help?“.** | 🔴 **größter Einzelhebel** |
| Lieferzeit | Im Text gibt es keine Angabe. | 🔴 |
| Montage/Airbag | „Der Einbau kann von uns oder durch eine fachkundige Werkstatt … erfolgen, insbesondere wegen der Airbag- und Sicherheitssysteme.“ Dass der Einbau in Bergkamen durch Personal mit Airbag-Sachkunde erfolgt, wird **nicht als Vorteil** genannt. | 🟡 |
| Zulassung | Der Zulassungshinweis kommt aus dem Snippet `pss-produktsicherheit` (laut STATUS) **[live prüfen, ob er mobil oberhalb oder unterhalb des Kaufbuttons steht]**. | – |

### 1.5 Produktseite Lenkrad: „PSS GT-R Carbon Lenkrad passend für BMW F-Reihe – Grau“

Produkt 7524697800800:

| Prüfpunkt | Befund (Beleg) | |
|---|---|---|
| Preis | „Grau / Nein Versand“ **1.690 €**, „Grau / Ja“ **1.890 €**. In der **Beschreibung steht zusätzlich als Text** „1.690 € inkl. MwSt. – … (zzgl. Einbau; ohne Elektronik)“. Doppelte Preisangaben veralten schnell und führen zu Widersprüchen. Beim Montagepreis (1.890 €) ist der Einbau bereits enthalten, der Text sagt aber „zzgl. Einbau“. | 🟡 |
| Varianten | Optionen „Akzent Farbe“ (Grau, Wunschfarbe) und „Montage durch PS-Sattlerei“ (**„Nein Versand“** ohne Klammer) bzw. „Ja“. Die Wertebezeichnung „Nein Versand“ ist mobil unverständlich. | 🔴 |
| Passform | „Die Passform richtet sich nach Lenkrad-Generation / Nabe / Tastenlayout. Vor Bestellung bitte per Teilenummer/FIN prüfen.“ Einen Weg dafür gibt es nicht. | 🔴 |
| Lieferzeit | keine Angabe | 🔴 |
| Bilder | 2 Bilder (vor dem Rollout `alt: ""`). Kein Foto im eingebauten Zustand. | 🟡 |

### 1.6 Produktseite Schlüsselcover (z. B. „PSS Leder Schlüsselcover passend für Mercedes – Rot“)

| Prüfpunkt | Befund | |
|---|---|---|
| Rolle im Funnel | Das ist ein günstiges Einstiegsprodukt, für das ein **Kauf per Klick** passt. Die Seite braucht **keinen** Beratungsbutton (die Schwelle von 1.500 € greift hier nicht). | 🟢 |
| Varianten/Dubletten | 22 fast gleiche Produkte (12 BMW, 6 Mercedes, 4 Audi), zwei davon mit dem Titel „Schwarz“ (siehe SEO-Plan 2.3). Wer eine Farbe sucht, muss durch 22 Kacheln blättern, statt auf einer Seite die Farbe zu wählen. | 🟡 |
| Wunschfarbe | Laut SEO-Texten gibt es das Cover „auch in Wunschfarbe“. Ein Feld für die Farbangabe fehlt **[live prüfen]**. Lösung: ein Eingabefeld für eine Bestellangabe (Line-Item-Property) `properties[Wunschfarbe]` im Produktformular, Abschnitt 2.7. | 🟡 |
| Passform | Welche Schlüsselgenerationen passen, steht nicht da (SEO-Plan, offene Frage). Fehlkäufe und Rücksendungen sind wahrscheinlich. | 🟡 |
| Preis, Lieferzeit, Sticky-Leiste | **[live prüfen]**. Die HTML-Datei lag nicht vor. | – |

### 1.7 Kollektionsseiten (Alle Lenkräder, Interieur-Pakete, Accessoires)

| Befund | Beleg | |
|---|---|---|
| Die Kacheln bieten nur „ansehen“ und „Preis“, **keine Orientierung** wie „mit Montage“ oder „Passform-Check“ | Produktkarten auf der Startseite: Titel, „€39.900,00“, Farbpunkte. Die Schnellansicht-Schaltfläche hat `opacity-0` (Hover) und ist mobil praktisch unsichtbar. | 🟡 |
| Kollektionsnamen uneinheitlich: „Accessoires“ (Menü) und „Accessories“ (Kachel), „Zubehör“ mit **1 Produkt** | Startseiten-Kacheln: „Accessories 22“, „Zubehör 1“ | 🟡 |
| Bei „Interieur Pakete“ (12 Produkte, 2.990–39.900 €) fehlt ein Hinweis auf persönliche Beratung | Der Kollektionstext aus dem SEO-Plan 4.5 enthält bereits „→ Beratung anfragen [PLATZHALTER]“. Das passt zu diesem Konzept. | 🔴 |
| Filter, Sortierung, Anzahl Produkte pro Zeile mobil | **[live prüfen]**. Das HTML lag nicht vor. | – |

---

## 2. Konzept „Beratung anfragen“

### 2.1 Wo der Button erscheint

| Produktgruppe | Hauptaktion | Zweite Aktion |
|---|---|---|
| **Interieur-Pakete und Design Editionen** (alle mit Tag `Interieur Edition`, 2.990–39.900 €) | **„Beratung anfragen“** (gefüllter Button) | „In den Warenkorb“ bleibt zunächst stehen (Test 10 prüft, ob er weg soll) |
| **Lenkräder und Lenkrad-Sets ab 1.500 €** (GT-R 1.690 €, Daytona 1.990 €, Digital Performance Wheel 3.490 € …) | Kaufbutton bleibt Hauptaktion | **„Passform prüfen & beraten lassen“** direkt unter dem Kaufbutton (Umriss-Button) |
| Schlüsselcover, Reinigungsset | Kaufbutton | kein Beratungsbutton, nur die Telefonnummer in der Vertrauensleiste |

**Mobile Anordnung (von oben nach unten):** Bilder → Titel → Preis mit „inkl. MwSt.“ → Varianten → Kaufbutton → **Beratungsbereich (aufklappbar)** → **Vertrauensleiste** (Abschnitt 4.2) → Zulassungshinweis → Beschreibung.
Zusätzlich gibt es eine **fixierte Leiste am unteren Bildschirmrand** (nur mobil): „Beratung anfragen“ und „Anrufen“, optional „WhatsApp“.

### 2.2 Formularfelder

| Feld | Name im Shopify-Kontaktformular | Pflicht | Hinweis |
|---|---|---|---|
| Name | `contact[name]` | ja | `autocomplete="name"` |
| E-Mail | `contact[email]` | ja (Shopify verlangt sie) | `type="email"` |
| Telefon | `contact[phone]` | nein, für Rückruf nötig | `type="tel"` |
| Gewünschter Kontaktweg | `contact[Kontaktweg]` | ja | Rückruf / E-Mail / WhatsApp (nur wenn eine Nummer hinterlegt ist) |
| Rückrufzeit | `contact[Rückrufzeit]` | nein | an die angegebenen Zeiten „Mo–Fr 9–17 Uhr“ angelehnt |
| Fahrzeug | `contact[Fahrzeug]` | ja | „z. B. Audi RS6 C8, Baujahr 2021“ |
| FIN | `contact[FIN]` | nein | 17 Zeichen, Hinweis „Feld E im Fahrzeugschein“ |
| Ihr Wunsch | `contact[body]` | nein | Material, Farbe, Einbau oder Versand |
| Produkt, Produkt-URL, Seiten-URL (mit `?variant=`), Anfrageart | versteckte Felder | automatisch | Damit ist jede E-Mail eindeutig einem Produkt und einer Variante zugeordnet |
| **Fotos** | – | – | **Mit Shopify-Bordmitteln nicht möglich.** Das Shopify-Kontaktformular unterstützt keine Datei-Uploads. Lösung ohne App: Hinweis mit vorbereitetem E-Mail-Link („Fotos per E-Mail senden“, Betreff mit Produktname) bzw. per WhatsApp. Ein echter Upload bräuchte eine Formular-App (mit AVV) – das ist eine spätere Entscheidung. |

Spam-Schutz: Shopify schützt Kontaktformulare automatisch mit hCaptcha. Im HTML ist das sichtbar (`captcha-bootstrap` mit `form[action*='/contact']`, „Durch hCaptcha geschützt“).

### 2.3 Snippet `snippets/pss-beratung-anfragen.liquid` (fertig zum Einsetzen)

**Einbau (macht die Projektleitung, nur an einer unveröffentlichten Theme-Kopie):**
1. Datei `snippets/pss-beratung-anfragen.liquid` mit dem Code unten anlegen.
2. Theme-Editor → Vorlage **Standardprodukt** und Vorlage **`product.design-edition`** → Block **„Benutzerdefiniertes Liquid“** direkt unter den Kaufbuttons einfügen. Inhalt:
   `{% render 'pss-beratung-anfragen', product: product, thanks_url: '/pages/anfrage-danke' %}`
3. Seite `/pages/anfrage-danke` anlegen (Abschnitt 2.4), **bevor** `thanks_url` gesetzt wird. Ohne `thanks_url` zeigt das Snippet die Bestätigung direkt auf der Produktseite an.
4. Testen: eine Anfrage absenden, Eingang prüfen (an die Absender-E-Mail des Shops unter Einstellungen → Benachrichtigungen), Weiterleitung prüfen, mobile Leiste auf iOS und Android prüfen.

```liquid
{%- comment -%}
  PSS – Beratung anfragen  ·  snippets/pss-beratung-anfragen.liquid
  Stand 05.11.2026 · Agentur-Entwurf, vor Livegang an Theme-Kopie testen.

  Aufruf (Block "Benutzerdefiniertes Liquid" in der Produktvorlage):
    {% render 'pss-beratung-anfragen', product: product %}

  Optionale Parameter:
    min_price   Schwelle in Cent, ab der das Snippet erscheint (Standard 150000 = 1.500 €)
    force       true = immer anzeigen (z. B. auf product.design-edition)
    primary     true = als Hauptaktion gestalten (gefüllt, aufgeklappt-Text „Beratung anfragen“)
    sticky      false = mobile Leiste unten ausblenden
    thanks_url  z. B. '/pages/anfrage-danke' – nur setzen, wenn die Seite existiert
    phone       Telefon im E.164-Format (Standard +4923899953050, wie im Footer)
    phone_label Anzeige der Nummer
    whatsapp    nur Ziffern inkl. Ländervorwahl, z. B. '4917…' – leer = kein WhatsApp
    photo_email E-Mail für Fotos (Standard: shop.email)

  Technik: Shopify-Kontaktformular (form 'contact'), keine App, keine externen Skripte.
  Erscheint automatisch bei Produkten ab min_price oder mit Tag "Interieur Edition".
{%- endcomment -%}

{%- liquid
  assign pss_min = min_price | default: 150000
  assign pss_show = false
  if force == true
    assign pss_show = true
  elsif product.price_max >= pss_min
    assign pss_show = true
  elsif product.tags contains 'Interieur Edition'
    assign pss_show = true
  endif

  assign pss_primary = false
  if primary == true or product.tags contains 'Interieur Edition'
    assign pss_primary = true
  endif

  assign pss_sticky = true
  if sticky == false
    assign pss_sticky = false
  endif

  assign pss_phone = phone | default: '+4923899953050'
  assign pss_phone_label = phone_label | default: '02389 / 995 30 50'
  assign pss_wa = whatsapp | default: ''
  assign pss_mail = photo_email | default: shop.email
  assign pss_thanks = thanks_url | default: ''
  assign pss_id = 'pss-ba-' | append: product.id
  assign pss_url = shop.url | append: product.url

  if pss_primary
    assign pss_label = 'Beratung anfragen'
  else
    assign pss_label = 'Passform prüfen & beraten lassen'
  endif

  assign pss_mail_subject = 'Fotos zur Anfrage: ' | append: product.title
  assign pss_wa_text = 'Hallo PS-Sattlerei, ich interessiere mich für: ' | append: product.title | append: ' – ' | append: pss_url
-%}

{%- if pss_show -%}
<style>
  .pss-ba{--pss-fg:rgb(var(--color-base-text,23 23 21));--pss-bg:rgb(var(--color-base-background,255 255 255));--pss-btn:rgb(var(--color-base-button,23 23 23));--pss-btn-fg:rgb(var(--color-base-button-text,255 255 255));--pss-focus:rgb(var(--color-keyboard-focus,155 0 0));margin:16px 0;color:var(--pss-fg)}
  .pss-ba details{border:1px solid rgba(0,0,0,.15);border-radius:12px;background:var(--pss-bg)}
  .pss-ba summary{list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;min-height:48px;padding:12px 16px;border-radius:999px;font-weight:600;font-size:16px;text-align:center}
  .pss-ba summary::-webkit-details-marker{display:none}
  .pss-ba--primary summary{background:var(--pss-btn);color:var(--pss-btn-fg)}
  .pss-ba--secondary summary{border:2px solid var(--pss-btn);color:var(--pss-btn)}
  .pss-ba details[open] summary{border-radius:12px 12px 0 0}
  .pss-ba summary:focus-visible,.pss-ba input:focus-visible,.pss-ba select:focus-visible,.pss-ba textarea:focus-visible,.pss-ba button:focus-visible,.pss-ba a:focus-visible{outline:3px solid var(--pss-focus);outline-offset:2px}
  .pss-ba__intro{margin:8px 0 0;font-size:14px;line-height:1.5}
  .pss-ba__body{padding:16px}
  .pss-ba__field{display:grid;gap:6px;margin:0 0 14px}
  .pss-ba__field label,.pss-ba__legend{font-size:15px;font-weight:600}
  .pss-ba__hint{font-size:13px;line-height:1.4;opacity:.8}
  .pss-ba input[type=text],.pss-ba input[type=email],.pss-ba input[type=tel],.pss-ba select,.pss-ba textarea{width:100%;min-height:48px;padding:10px 12px;font-size:16px;border:1px solid rgba(0,0,0,.35);border-radius:8px;background:#fff;color:inherit;box-sizing:border-box}
  .pss-ba textarea{min-height:110px;resize:vertical}
  .pss-ba fieldset{border:0;padding:0;margin:0 0 14px}
  .pss-ba__radio{display:flex;align-items:center;gap:10px;min-height:44px;font-size:16px}
  .pss-ba__radio input{width:22px;height:22px}
  .pss-ba__submit{width:100%;min-height:52px;border:0;border-radius:999px;background:var(--pss-btn);color:var(--pss-btn-fg);font-size:16px;font-weight:600;cursor:pointer}
  .pss-ba__legal{font-size:12px;line-height:1.5;opacity:.85;margin:12px 0 0}
  .pss-ba__alt{display:flex;flex-wrap:wrap;gap:8px 16px;margin:0 0 16px;font-size:15px}
  .pss-ba__alt a{min-height:44px;display:inline-flex;align-items:center;text-decoration:underline}
  .pss-ba__ok,.pss-ba__err{padding:12px 14px;border-radius:8px;margin:0 0 14px;font-size:15px}
  .pss-ba__ok{background:rgb(var(--color-success-background,247 254 231));color:rgb(var(--color-success-text,77 124 15))}
  .pss-ba__err{background:rgb(var(--color-error-background,255 241 242));color:rgb(var(--color-error-text,190 18 60))}
  .pss-ba__req{color:var(--pss-focus)}
  .pss-ba__bar{display:none}
  @media (max-width:767px){
    .pss-ba__bar{position:fixed;left:0;right:0;bottom:0;z-index:25;display:flex;gap:8px;padding:8px 12px calc(8px + env(safe-area-inset-bottom));background:var(--pss-bg);border-top:1px solid rgba(0,0,0,.15)}
    .pss-ba__bar a{flex:1 1 0;display:flex;align-items:center;justify-content:center;min-height:48px;border-radius:999px;font-size:15px;font-weight:600;text-decoration:none;border:2px solid var(--pss-btn);color:var(--pss-btn)}
    .pss-ba__bar a.pss-ba__bar-main{flex:1.6 1 0;background:var(--pss-btn);color:var(--pss-btn-fg)}
    body:has(.pss-ba__bar){padding-bottom:72px}
  }
  @media (prefers-reduced-motion:reduce){.pss-ba *{transition:none!important}}
</style>

<div class="pss-ba {% if pss_primary %}pss-ba--primary{% else %}pss-ba--secondary{% endif %}" id="{{ pss_id }}">
  {%- form 'contact', id: 'PssBeratungForm-{{ product.id }}', class: 'pss-ba__form' -%}
    <details{% if form.posted_successfully? or form.errors %} open{% endif %}>
      <summary>{{ pss_label }}</summary>
      <div class="pss-ba__body">

        {%- if form.posted_successfully? -%}
          <div class="pss-ba__ok" role="status">
            <p><strong>Vielen Dank – Ihre Anfrage ist bei uns angekommen.</strong></p>
            <p>Wir melden uns persönlich bei Ihnen, auf dem Weg, den Sie gewählt haben. Telefonisch erreichen Sie uns Mo–Fr von 9 bis 17 Uhr unter <a href="tel:{{ pss_phone }}">{{ pss_phone_label }}</a>.</p>
          </div>
          <script>try{window.Shopify&&Shopify.analytics&&Shopify.analytics.publish&&Shopify.analytics.publish('pss_beratung_anfrage',{produkt:{{ product.handle | json }},quelle:'inline'});}catch(e){}</script>
        {%- else -%}

          <p class="pss-ba__intro">Wir prüfen vorab, ob {{ product.title | escape }} zu Ihrem Fahrzeug passt, und beraten Sie zu Material, Farbe, Einbau in Bergkamen oder Versand. Die Anfrage ist unverbindlich.</p>

          <div class="pss-ba__alt">
            <a href="tel:{{ pss_phone }}" data-pss-kanal="telefon">Anrufen: {{ pss_phone_label }}</a>
            {%- if pss_wa != blank -%}
              <a href="https://wa.me/{{ pss_wa }}?text={{ pss_wa_text | url_encode }}" rel="noopener" data-pss-kanal="whatsapp">WhatsApp schreiben</a>
            {%- endif -%}
          </div>

          {%- if form.errors -%}
            <div class="pss-ba__err" role="alert">{{ form.errors | default_errors }}</div>
          {%- endif -%}

          {%- if pss_thanks != blank -%}
            <input type="hidden" name="return_to" value="{{ pss_thanks }}?p={{ product.handle }}">
          {%- endif -%}
          <input type="hidden" name="contact[Anfrageart]" value="Beratung anfragen (Produktseite)">
          <input type="hidden" name="contact[Produkt]" value="{{ product.title | escape }}">
          <input type="hidden" name="contact[Produkt-URL]" value="{{ pss_url }}">
          <input type="hidden" name="contact[Seiten-URL inkl. Variante]" value="{{ pss_url }}" data-pss-url>

          <div class="pss-ba__field">
            <label for="{{ pss_id }}-name">Name <span class="pss-ba__req" aria-hidden="true">*</span></label>
            <input type="text" id="{{ pss_id }}-name" name="contact[name]" autocomplete="name" required aria-required="true" value="{{ form.name }}">
          </div>

          <div class="pss-ba__field">
            <label for="{{ pss_id }}-email">E-Mail <span class="pss-ba__req" aria-hidden="true">*</span></label>
            <input type="email" id="{{ pss_id }}-email" name="contact[email]" autocomplete="email" inputmode="email" required aria-required="true" value="{{ form.email }}">
          </div>

          <div class="pss-ba__field">
            <label for="{{ pss_id }}-tel">Telefon <span class="pss-ba__hint">(für Rückruf oder WhatsApp)</span></label>
            <input type="tel" id="{{ pss_id }}-tel" name="contact[phone]" autocomplete="tel" inputmode="tel" value="{{ form.phone }}">
          </div>

          <fieldset>
            <legend class="pss-ba__legend">Wie dürfen wir Sie kontaktieren? <span class="pss-ba__req" aria-hidden="true">*</span></legend>
            <label class="pss-ba__radio"><input type="radio" name="contact[Kontaktweg]" value="Rückruf" required checked> Rückruf</label>
            <label class="pss-ba__radio"><input type="radio" name="contact[Kontaktweg]" value="E-Mail"> E-Mail</label>
            {%- if pss_wa != blank -%}
              <label class="pss-ba__radio"><input type="radio" name="contact[Kontaktweg]" value="WhatsApp"> WhatsApp</label>
            {%- endif -%}
          </fieldset>

          <div class="pss-ba__field">
            <label for="{{ pss_id }}-zeit">Wann passt ein Rückruf?</label>
            <select id="{{ pss_id }}-zeit" name="contact[Rückrufzeit]">
              <option value="egal">Egal (Mo–Fr 9–17 Uhr)</option>
              <option value="vormittags">Vormittags (9–12 Uhr)</option>
              <option value="mittags">Mittags (12–14 Uhr)</option>
              <option value="nachmittags">Nachmittags (14–17 Uhr)</option>
            </select>
          </div>

          <div class="pss-ba__field">
            <label for="{{ pss_id }}-fzg">Ihr Fahrzeug <span class="pss-ba__req" aria-hidden="true">*</span></label>
            <input type="text" id="{{ pss_id }}-fzg" name="contact[Fahrzeug]" required aria-required="true" aria-describedby="{{ pss_id }}-fzg-hint" placeholder="z. B. Audi RS6 C8, Baujahr 2021">
            <span class="pss-ba__hint" id="{{ pss_id }}-fzg-hint">Marke, Modell und Baujahr genügen.</span>
          </div>

          <div class="pss-ba__field">
            <label for="{{ pss_id }}-fin">FIN <span class="pss-ba__hint">(optional)</span></label>
            <input type="text" id="{{ pss_id }}-fin" name="contact[FIN]" maxlength="17" autocapitalize="characters" autocomplete="off" spellcheck="false" pattern="[A-HJ-NPR-Za-hj-npr-z0-9]{17}" aria-describedby="{{ pss_id }}-fin-hint">
            <span class="pss-ba__hint" id="{{ pss_id }}-fin-hint">17 Zeichen, steht im Fahrzeugschein in Feld E. Damit prüfen wir Ausstattung und Passform genauer.</span>
          </div>

          <div class="pss-ba__field">
            <label for="{{ pss_id }}-wunsch">Ihr Wunsch</label>
            <textarea id="{{ pss_id }}-wunsch" name="contact[body]" aria-describedby="{{ pss_id }}-wunsch-hint">{{ form.body }}</textarea>
            <span class="pss-ba__hint" id="{{ pss_id }}-wunsch-hint">z. B. Wunschfarbe, Nahtfarbe, Einbau in Bergkamen oder Versand, Wunschtermin.</span>
          </div>

          <p class="pss-ba__hint">Fotos von Lenkrad oder Innenraum helfen uns sehr. Sie können sie nach dem Absenden
            <a href="mailto:{{ pss_mail }}?subject={{ pss_mail_subject | url_encode }}">per E-Mail senden</a>{% if pss_wa != blank %} oder per WhatsApp schicken{% endif %}.</p>

          <button type="submit" class="pss-ba__submit">Anfrage senden</button>

          <p class="pss-ba__legal">Pflichtfelder sind mit * markiert. Wir verwenden Ihre Angaben nur, um Ihre Anfrage zu beantworten und Ihnen ein Angebot zu erstellen (Art. 6 Abs. 1 lit. b DSGVO). Zum Schutz vor Spam nutzt unser Shop-System Shopify den Dienst hCaptcha. Einzelheiten finden Sie in unserer <a href="{{ shop.privacy_policy.url | default: '/policies/privacy-policy' }}">Datenschutzerklärung</a>.</p>
        {%- endif -%}
      </div>
    </details>
  {%- endform -%}
</div>

{%- if pss_sticky -%}
  <div class="pss-ba__bar" role="region" aria-label="Schnellkontakt">
    <a href="#{{ pss_id }}" class="pss-ba__bar-main" data-pss-open>{% if pss_primary %}Beratung anfragen{% else %}Beraten lassen{% endif %}</a>
    <a href="tel:{{ pss_phone }}" data-pss-kanal="telefon" aria-label="Anrufen: {{ pss_phone_label }}">Anrufen</a>
    {%- if pss_wa != blank -%}
      <a href="https://wa.me/{{ pss_wa }}?text={{ pss_wa_text | url_encode }}" rel="noopener" data-pss-kanal="whatsapp">WhatsApp</a>
    {%- endif -%}
  </div>
{%- endif -%}

<script>
(function () {
  var root = document.getElementById('{{ pss_id }}');
  if (!root) return;
  var det = root.querySelector('details');
  var form = root.querySelector('form');
  var handle = {{ product.handle | json }};
  function pub(name, data) {
    try { if (window.Shopify && Shopify.analytics && Shopify.analytics.publish) { Shopify.analytics.publish(name, data); } } catch (e) {}
  }
  function openForm() {
    if (det && !det.open) { det.open = true; pub('pss_beratung_geoeffnet', { produkt: handle }); }
  }
  if (location.hash === '#{{ pss_id }}') openForm();
  window.addEventListener('hashchange', function () { if (location.hash === '#{{ pss_id }}') openForm(); });
  document.querySelectorAll('[data-pss-open]').forEach(function (a) { a.addEventListener('click', openForm); });
  if (det) det.addEventListener('toggle', function () { if (det.open) pub('pss_beratung_geoeffnet', { produkt: handle }); });
  document.querySelectorAll('[data-pss-kanal]').forEach(function (a) {
    a.addEventListener('click', function () { pub('pss_kontakt_klick', { produkt: handle, kanal: a.getAttribute('data-pss-kanal') }); });
  });
  if (form) form.addEventListener('submit', function () {
    var u = form.querySelector('[data-pss-url]');
    if (u) u.value = location.href.split('#')[0];
    pub('pss_beratung_absenden', { produkt: handle });
  });
})();
</script>
{%- endif -%}
```

**Hinweise zum Code**
- **Keine externen Skripte:** nur Inline-CSS und ein kleines Inline-Skript. Ohne JavaScript funktioniert das Formular trotzdem (`<details>` öffnet sich nativ, das Formular sendet normal). Es entfallen dann nur das automatische Öffnen über die untere Leiste, die Seiten-URL mit Variante und die Mess-Events.
- **Barrierearm:** sichtbare Labels, `autocomplete`, Hinweistexte per `aria-describedby`, Fokus-Rahmen, Klickflächen mindestens 44–52 px, Schriftgröße 16 px in Feldern (verhindert das Hineinzoomen auf iOS), Fehlermeldungen mit `role="alert"`, Bestätigung mit `role="status"`.
- **Persönliche Daten in Events:** Die Events übertragen **nur den Produkt-Handle und den Kanal**, keine Namen, E-Mails oder FIN.
- **`return_to` für die Danke-Seite:** Diese Weiterleitung beschreibt Shopify nicht verbindlich für Kontaktformulare. Laut Community-Berichten funktioniert sie, teils aber unzuverlässig ([Shopify Community 1](https://community.shopify.com/t/redirect-shopify-newsletter-signup-form-after-submit/49642), [Shopify Community 2](https://community.shopify.com/t/newsletter-signup-form-redirect-on-successful-submission/141520)). Deshalb gibt es die eingebaute Rückfallebene: Ohne `thanks_url` oder ohne Weiterleitung zeigt Shopify die Produktseite mit `?contact_posted=true`, und das Snippet zeigt die Bestätigung an. **Im Test prüfen.**
- **Mobile Leiste:** prüfen, ob das Concept-Theme eine eigene fixierte Kaufleiste hat **[live prüfen]**. Wenn ja, im Aufruf `sticky: false` setzen oder die Theme-Leiste für Pakete abschalten. Zwei fixierte Leisten übereinander sind zu vermeiden.
- **E-Mail-Empfang:** Kontaktformular-E-Mails gehen an die Absender-E-Mail des Shops. **[FRAGE AN INHABER: Soll das sales@ps-sattlerei.com sein? Wer beantwortet Anfragen, und bis wann?]**

### 2.4 Danke-Seite `/pages/anfrage-danke`

Seite im Shopify-Admin anlegen (Vorlage `page`, eigener Seitentitel, **nicht** in Navigation oder Sitemap verlinken). Inhalt:

> **Danke für Ihre Anfrage!**
> Ihre Nachricht ist bei uns angekommen. So geht es weiter:
> 1. Wir sehen uns Ihre Angaben an und prüfen die Passform für Ihr Fahrzeug.
> 2. Wir melden uns bei Ihnen – telefonisch, per E-Mail oder per WhatsApp, wie Sie es gewünscht haben. [FRAGE AN INHABER: Antwortzeit nennen, z. B. „in der Regel innerhalb eines Werktags“ – nur wenn das zuverlässig einzuhalten ist]
> 3. Sie erhalten ein Angebot mit Preis, Ablauf und Termin für Einbau oder Versand.
>
> **Sie haben Fotos?** Senden Sie diese gern an sales@ps-sattlerei.com (Betreff: Ihr Fahrzeug).
> **Eilig?** Rufen Sie uns an: 02389 / 995 30 50 (Mo–Fr 9–17 Uhr).
>
> [Button: Zurück zum Shop] · [Link: So arbeiten wir – Werkstatt in Bergkamen, sobald die Standortseite existiert]

**Mess-Event auf der Danke-Seite** (Block „Benutzerdefiniertes Liquid“ in der Seitenvorlage):

```liquid
<script>
(function () {
  try {
    var p = new URLSearchParams(location.search).get('p') || '';
    var key = 'pss_ba_sent_' + p;
    if (sessionStorage.getItem(key)) return; // kein Doppelzählen beim Neuladen
    sessionStorage.setItem(key, '1');
    if (window.Shopify && Shopify.analytics && Shopify.analytics.publish) {
      Shopify.analytics.publish('pss_beratung_anfrage', { produkt: p, quelle: 'danke-seite' });
    }
  } catch (e) {}
})();
</script>
```

`Shopify.analytics.publish` ist im Live-HTML vorhanden (Web Pixels Manager: `P.publish = …`, später `publishCustomEvent`). Die Events kommen bei einem **benutzerdefinierten Pixel** an (Abschnitt 5.2).

### 2.5 Datenschutz-Hinweistext (zur Prüfung durch Datenschutz/Anwalt)

**Kurztext am Formular** (im Snippet enthalten):
> Wir verwenden Ihre Angaben nur, um Ihre Anfrage zu beantworten und Ihnen ein Angebot zu erstellen (Art. 6 Abs. 1 lit. b DSGVO). Zum Schutz vor Spam nutzt unser Shop-System Shopify den Dienst hCaptcha. Einzelheiten finden Sie in unserer Datenschutzerklärung.

**Ergänzung für die Datenschutzerklärung** (Abschnitt „Kontakt- und Beratungsanfragen“):
> Wenn Sie uns über das Formular „Beratung anfragen“ kontaktieren, verarbeiten wir Ihren Namen, Ihre E-Mail-Adresse, optional Ihre Telefonnummer, Angaben zu Ihrem Fahrzeug, optional die Fahrzeug-Identifizierungsnummer (FIN), Ihre Nachricht sowie das Produkt und die Seite, von der aus Sie anfragen. Wir verwenden diese Daten, um Ihre Anfrage zu beantworten, die Passform zu prüfen und ein Angebot zu erstellen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen). Die Übermittlung erfolgt über unseren Shop-Anbieter Shopify [Angaben zu Shopify wie im bestehenden Shopify-Abschnitt]; zum Schutz vor missbräuchlichen Eingaben setzt Shopify hCaptcha ein [Anbieter, Drittlandübermittlung und Rechtsgrundlage durch den Datenschutzbeauftragten oder Anwalt ergänzen lassen]. Wir löschen Ihre Anfrage, sobald sie erledigt ist und keine gesetzlichen Aufbewahrungspflichten bestehen, spätestens nach [FRAGE AN INHABER: Frist, z. B. 6 Monate ohne Auftrag]. Kommt ein Auftrag zustande, gelten die Aufbewahrungsfristen nach HGB und AO.

Hinweis: Eine Einwilligungs-Checkbox ist für eine Anfrage nicht nötig und sollte nicht ergänzt werden, weil sie eine falsche Rechtsgrundlage nahelegen würde. Das ist keine Rechtsberatung; bitte vor dem Livegang prüfen lassen.

### 2.6 Interne Bearbeitung (damit Anfragen zu Aufträgen werden)

- E-Mail-Filter im Postfach nach „Anfrageart: Beratung anfragen“ → eigener Ordner oder eigenes Label.
- Ein einfaches **Anfragen-Protokoll** (Tabelle): Datum, Produkt, Kanal, Antwort am, Angebot ja/nein, Auftrag ja/nein, Auftragswert. Nur so lässt sich die eigentliche Conversion (Anfrage → Auftrag) messen, denn Pakete werden selten online bezahlt.
- Antwortvorlagen: 1) Passform bestätigt + Angebot, 2) Rückfragen (Fotos, Teilenummer), 3) passt nicht + Alternative. Der **E-Mail-Manager** kann die Vorlagen entwerfen.

### 2.7 Ergänzung für Wunschfarbe (alle Produkte mit Variante „Wunschfarbe“)

Wer online „Wunschfarbe“ kauft, kann heute nirgends angeben, **welche** Farbe er möchte. Lösung ohne App: Im Block „Benutzerdefiniertes Liquid“ ein Textfeld für eine Bestellangabe, das dem Produktformular zugeordnet ist:

```liquid
{%- if product.options_with_values | map: 'values' | join: ',' contains 'Wunschfarbe' -%}
<div class="pss-ba__field" style="margin:12px 0">
  <label for="pss-wunschfarbe-{{ product.id }}">Ihre Wunschfarbe <span style="font-weight:400">(nur bei Variante „Wunschfarbe“)</span></label>
  <input type="text" id="pss-wunschfarbe-{{ product.id }}" name="properties[Wunschfarbe]"
         form="{{ product_form_id | default: 'product-form-' | append: section.id }}"
         placeholder="z. B. Nardograu, Naht in Rot" style="width:100%;min-height:48px;font-size:16px">
</div>
{%- endif -%}
```

**[live prüfen]:** die tatsächliche `id` des Produktformulars im Concept-Theme. Im Abschnitt „Hervorgehobenes Produkt“ heißt sie zum Beispiel `ProductForm-template--…-7536844963936`. Im Feld `form="…"` muss sie exakt stimmen. Den Variantentext laut STATUS Punkt 5 umbenennen („Wunschfarbe – Anfertigung nach Ihren Vorgaben (kein Widerrufsrecht)“).

---

## 3. WhatsApp- und Telefon-Schnellkontakt

### 3.1 Empfehlung

| Kanal | Empfehlung | Umsetzung |
|---|---|---|
| **Telefon** | **Sofort** mobil sichtbar machen: in der unteren Leiste (Snippet), in der Vertrauensleiste und im Menü-Drawer als eigener Punkt „Anrufen: 02389 / 995 30 50“ | `tel:+4923899953050` (die Nummer steht bereits so im Footer). Zeiten nennen: „Mo–Fr 9–17 Uhr“ (so auf der Startseite angegeben). **[FRAGE AN INHABER: Stimmen die Zeiten? Wer nimmt ab? Gibt es eine Mailbox?]** |
| **WhatsApp** | **Erst nach Klärung der Punkte unten.** Dann als **einfacher Link** (`https://wa.me/<Nummer>?text=…`), **kein Chat-Widget** | Im Snippet über den Parameter `whatsapp: '49…'`. Der vorausgefüllte Text enthält Produktname und URL. **[FRAGE AN INHABER: Gibt es eine geschäftliche WhatsApp-Nummer? Mit der WhatsApp-Business-App oder der Business-Plattform (API)?]** |

**Warum ein Link besser ist als ein Widget:**
- Ein Widget lädt in der Regel beim Seitenaufruf Skripte oder Inhalte von Dritten. Das braucht eine Einwilligung (§ 25 TDDDG) und kostet Ladezeit.
- Ein `wa.me`-Link überträgt **nichts**, solange niemand darauf tippt. Erst dann öffnet sich WhatsApp.
- Ein Link braucht keine App und keine externen Skripte. Er passt optisch zum Theme und ist barrierearm.

### 3.2 Rechtliche Hinweise (keine Rechtsberatung; vom Datenschutz prüfen lassen)

1. **Datenschutzerklärung ergänzen:** eigener Abschnitt „Kontakt über WhatsApp“ mit Anbieter (WhatsApp Ireland Ltd. bzw. Meta), verarbeiteten Daten (Telefonnummer, Profilname, Nachrichten, Metadaten), Rechtsgrundlage (Art. 6 Abs. 1 lit. b DSGVO bei Anfragen) und Hinweis auf mögliche Übermittlung in die USA. Außerdem ein Hinweis, dass Kunden alternativ Telefon, E-Mail oder das Formular nutzen können.
2. **WhatsApp-Business-App:** Sie liest standardmäßig das Adressbuch des Geräts aus. Das wird für Unternehmen als datenschutzrechtlich heikel eingestuft. Deshalb ein **eigenes Firmengerät** ohne private Kontakte nutzen bzw. den Adressbuchzugriff sperren. Alternativ die **WhatsApp Business Platform (API)** über einen Dienstleister mit **AVV** nutzen.
3. **Kein Marketing über WhatsApp** ohne ausdrückliche Einwilligung (§ 7 UWG). WhatsApp nur für Antworten auf Kundenanfragen verwenden.
4. **Sensible Daten:** Wer per WhatsApp FIN oder Fotos schickt, entscheidet das selbst. Das Team sollte Fotos mit Kennzeichen nicht weiterverwenden (z. B. für Social Media) ohne Einwilligung.
5. **Aufbewahrung:** Geschäftsbriefe, also Angebote und Auftragsbestätigungen, unterliegen den Aufbewahrungspflichten nach HGB und AO. Verbindliche Angebote deshalb per E-Mail oder PDF verschicken, nicht nur per WhatsApp.
6. **Impressum:** Wird WhatsApp als Kontaktweg genannt, sollte die Nummer zu den Angaben im Impressum passen bzw. dort ergänzt werden.

---

## 4. Vertrauen ohne Fake

### 4.1 Was belegbar eingesetzt werden kann

| Element | Beleg/Voraussetzung | Wo einsetzen | Status |
|---|---|---|---|
| **Echte Werkstatt- und Produktionsfotos** | Fotos aus dem Fotoshooting sind schon im Shop (`SEB_1458.jpg`, `SEB_1488.jpg`). Für weitere Bilder: Team nur mit Einwilligung zeigen, Kennzeichen unkenntlich machen. | Produktseite (Galerie: 1 Bild „in der Werkstatt“), Danke-Seite, Standortseite | teilweise vorhanden |
| **Vorher/Nachher** | Auf der Startseite gibt es schon einen Vorher/Nachher-Vergleich (`audi_vorher_bild.jpg` / `audi_nachher_bild.jpg`). Für Kundenfahrzeuge braucht es eine **schriftliche Freigabe des Halters**. | Produktseiten Lenkrad und Paket: als Galerie-Bild oder eigener Abschnitt „Vorher/Nachher“ | vorhanden, aber nur auf der Startseite |
| **Google-Bewertungen mit Quelle** | Nur echte Bewertungen aus dem Google-Unternehmensprofil, mit **Link zur Quelle**, **Datum** und dem Hinweis nach § 5b Abs. 3 UWG (siehe unten). Keine Auswahl nur der guten Bewertungen als Gesamtbewertung ausgeben. | Startseite statt der heutigen Zitate „Tom S.“ usw., Vertrauensleiste, Danke-Seite | **[FRAGE AN INHABER: Gibt es ein Google-Profil? Wie viele Bewertungen, welcher Schnitt, Link?]** |
| **Airbag-Sachkunde** | Laut Briefing erfolgt der Einbau in Bergkamen durch Personal mit Airbag-Sachkunde. **[FRAGE AN INHABER: Gibt es einen Nachweis (Schulung, Lehrgang, Datum), auf den wir uns beziehen dürfen? Wie genau sollen wir das formulieren?]** | Vertrauensleiste, Montage-Variante, Lenkradseiten | Text vorhanden, Nachweis offen |
| **Standort mit Abholung und Einbau** | Marie-Curie-Straße 12, 59192 Bergkamen (laut Briefing). **[FRAGE AN INHABER: Ist eine Selbstabholung von Lenkrädern möglich? Gibt es Termine nur nach Vereinbarung? Hat die Werkstatt Wartebereich oder Leihwagen?]** | Vertrauensleiste, Produktseiten mit Montage | offen |
| **Ehrlicher Zulassungshinweis** | Keine ABE, kein Teilegutachten. Der Hinweis steht schon im Snippet `pss-produktsicherheit`. Offenheit schafft hier Vertrauen. | direkt unter der Vertrauensleiste, nicht in einem Akkordeon verstecken | vorhanden **[live prüfen: Position]** |
| **Passform-Check vor dem Kauf** | Steht in den Produkttexten. Mit dem Formular aus Abschnitt 2 wird er zum ersten Mal tatsächlich nutzbar. | Vertrauensleiste, Beratungsbutton | wird mit Abschnitt 2 umgesetzt |
| **Klare Ansprechpartner** | Eine Kundenstimme nennt „Dennis und das tolle Team“. **[FRAGE AN INHABER: Möchten Sie mit Name und Foto als Ansprechpartner auftreten (Einwilligung)?]** | Beratungsbereich („Ihr Ansprechpartner: …“) | offen |

**§ 5b Abs. 3 UWG – Pflichthinweis bei Kundenbewertungen.** Wer Bewertungen zugänglich macht, muss angeben, **ob und wie** er sicherstellt, dass sie von Kunden stammen, die das Produkt tatsächlich genutzt oder gekauft haben. Vorschlag, ehrlich formuliert:

> „Die Bewertungen stammen aus unserem Google-Unternehmensprofil (Stand: [Datum]). Wir prüfen nicht, ob alle Verfasser bei uns gekauft haben; Google veröffentlicht Bewertungen nach seinen eigenen Richtlinien. → Alle Bewertungen bei Google ansehen“

Für die drei heutigen Zitate gilt: Entweder Quelle (Google oder Kundenmail mit Einwilligung) und Datum ergänzen und den Hinweis oben anbringen, **oder die Zitate entfernen**. STATUS Punkt 1 nennt das bereits als offenen Punkt.

**Verboten bzw. nicht verwenden** (Briefing-Regel 2): „ABE“, „TÜV-geprüft“, „eintragungsfrei“, „legal“, „OEM“, „Original Audi/BMW“, „Nr. 1“, „Bestseller“, Kundenzahlen ohne Beleg und erfundene Siegel. **Zusätzlich gefunden:** „OEM-Aufnahmen“, „OEM-nah“, „OEM-Look“ in den Texten (Carbon Interieur Set, Design Edition, Race Display) sowie „Handgefertigt in Deutschland“ (R8-Lenkrad) → an das Content-Team bzw. als Frage an den Inhaber.

### 4.2 Vertrauensleiste unter dem Kaufbutton – konkrete Texte

Jeweils 4–5 kurze Zeilen mit Symbol, mobil untereinander. Nur Zeilen verwenden, deren Fakt bestätigt ist. Was noch offen ist, ist markiert.

**Variante A – Lenkräder**
1. **Passform-Check vor dem Kauf:** Senden Sie uns Ihre FIN oder Fotos – wir prüfen, ob das Lenkrad zu Ihrem Fahrzeug passt.
2. **Ihr Original bleibt die Basis:** Metallkern, Airbag, Tasten und Steuergeräte werden von Ihrem Serienlenkrad übernommen.
3. **Einbau in Bergkamen:** durch unser Personal mit Airbag-Sachkunde. [FRAGE AN INHABER: Formulierung und Nachweis bestätigen]
4. **Fertigung:** [FRAGE AN INHABER: X–Y Wochen ab Auftrag; Einbau in der Regel an einem Tag?]
5. **Fragen?** Mo–Fr 9–17 Uhr: 02389 / 995 30 50

**Variante B – Interieur-Pakete und Design Editionen**
1. **Persönliche Beratung:** Umfang, Material und Farben stimmen wir gemeinsam mit Ihnen ab – gern vor Ort mit Materialmustern. [FRAGE AN INHABER: Materialmuster vor Ort verfügbar?]
2. **Kurze Standzeit:** Wir fertigen alle Teile vorab; für den Einbau steht Ihr Fahrzeug ca. 3 Werktage bei uns in Bergkamen.
3. **Fertigung bis zum Einbautermin:** [FRAGE AN INHABER: X–Y Wochen]
4. **Elektronik und Airbags bleiben original:** Veredelt werden nur Verkleidungs- und Dekorteile.
5. **Manufaktur in Bergkamen:** Marie-Curie-Straße 12, 59192 Bergkamen · 02389 / 995 30 50

**Variante C – Schlüsselcover und Pflege**
1. **Aus unserer Sattlerei in Bergkamen** [FRAGE AN INHABER: „handgefertigt“ und „Nappaleder“ bestätigen]
2. **Auch in Ihrer Wunschfarbe** – Farbe einfach im Feld „Wunschfarbe“ angeben (Anfertigung nach Ihren Vorgaben, kein Widerrufsrecht).
3. **Passt zu:** [FRAGE AN INHABER: Schlüsselgenerationen je Marke]
4. **Versand:** [Lieferzeit wie in „Versand & Zahlung“], kostenlos ab 199 €.

**Gemeinsame Zusatzzeile (falls ein Google-Profil existiert):**
„[X,X] von 5 Sternen bei Google ([N] Bewertungen, Stand [Datum]) → ansehen“ plus Pflichthinweis nach § 5b Abs. 3 UWG (Abschnitt 4.1).

---

## 5. Priorisierte Testliste und Tracking

### 5.1 ICE-Liste (Impact, Confidence, Ease je 1–10; Score = Durchschnitt)

Messzeitraum: jeweils **4 Wochen vorher und 4 Wochen nachher** (≈ 2.500 Sitzungen pro Monat). Wo es geht, wird nur eine Maßnahme pro Seitentyp gleichzeitig geändert. Hauptmessgröße sind die **Anfragen pro 1.000 Sitzungen auf Produktseiten**, weil Käufe zu selten für eine Aussage sind.

| # | Maßnahme | Hypothese | Messgröße | Aufwand | I | C | E | **ICE** |
|---|---|---|---|---|---|---|---|---|
| 1 | **Tracking-Grundlage**: benutzerdefiniertes Pixel mit den Events aus 2.3/2.4, Anfragen-Protokoll, Zielwert-Tabelle | Ohne Messung lässt sich keine Maßnahme bewerten | Events kommen an (Test-Anfrage), Protokoll wird wöchentlich gepflegt | S (2–4 Std.) | 8 | 10 | 8 | **8,7** |
| 2 | **„Beratung anfragen“-Snippet** auf Lenkrad- und Paketseiten (Abschnitt 2.3) | Kunden mit Passform-Frage, die heute abspringen, stellen eine Anfrage | Anfragen pro 1.000 Produktseiten-Sitzungen; Anteil Anfragen mit FIN; Anfrage → Angebot → Auftrag | M (4–6 Std. inkl. Test) | 10 | 8 | 7 | **8,3** |
| 3 | **Newsletter-Pop-up mobil abschalten** (oder ≥ 45 s Verzögerung, nur ab der 2. Seite, mit sichtbarem Schließen-Kreuz) | Weniger Abbrüche auf Produktseiten; Beratungsweg wird nicht überdeckt | Absprungrate mobil auf Produktseiten; Newsletter-Anmeldungen (dürfen leicht sinken) | S (unter 1 Std., Theme-Editor) | 6 | 8 | 10 | **8,0** |
| 4 | **Tote und kaputte Links reparieren**: „Need help?“ → Anker zum Beratungsformular bzw. `/pages/contact`; „About us“ verlinken oder entfernen; Facebook- und YouTube-URLs mit `https://` | Kein Vertrauensverlust durch 404-Seiten und tote Klicks | 404-Aufrufe (Shopify-Bericht „Top-Seiten“ bzw. GA4 später); Klicks auf „Need help?“ | S (unter 1 Std.) | 4 | 10 | 10 | **8,0** |
| 5 | **Mobile Schnellkontakt-Leiste** (Anfragen / Anrufen / WhatsApp, Teil des Snippets) | Kunden, die lieber reden, rufen an statt abzuspringen | Event `pss_kontakt_klick` nach Kanal; eingehende Anrufe laut Telefonliste [FRAGE AN INHABER: Lässt sich das zählen?] | S (im Snippet enthalten) | 8 | 7 | 8 | **7,7** |
| 6 | **Varianten klar benennen**: Option „Farbe 12-Uhr-Markierung“ statt „Daytona Grau“ bzw. „Rot“; Montage-Werte „Versand ohne Einbau“ und „Mit Einbau in Bergkamen (+200 €)“; überall gleiche Schreibweise; Feld „Wunschfarbe“ (2.7) | Weniger Unsicherheit bei der Auswahl, weniger Rückfragen | Warenkorb-Rate der Lenkradseiten; Anteil Bestellungen/Anfragen mit Rückfrage zur Variante | M (2–4 Std. Admin, Liste zur Freigabe) | 6 | 8 | 7 | **7,0** |
| 7 | **Vertrauensleiste unter dem Kaufbutton** (Abschnitt 4.2) | Belegte Fakten (Passform-Check, Einbau mit Airbag-Sachkunde, Standort) senken das Risikoempfinden | Warenkorb-Rate und Anfragen pro 1.000 Produktseiten-Sitzungen | S–M (Texte vorhanden, Platzhalter vom Inhaber) | 7 | 6 | 8 | **7,0** |
| 8 | **Ablauf- und Lieferzeitbox** „So läuft es ab“ (Anfrage → Passform-Check → Angebot → Fertigung [X–Y Wochen] → Einbau ca. 3 Werktage bzw. Versand) auf Paket- und Lenkradseiten; Startseitenversprechen „innerhalb von wenigen Tagen“ korrigieren | Klare Erwartungen nehmen die Angst vor langer Standzeit und Ungewissheit | Anfragen pro 1.000 Sitzungen; Anteil Anfragen mit Frage „Wie lange dauert …?“ (sollte sinken) | M (Fakten vom Inhaber) | 7 | 7 | 6 | **6,7** |
| 9 | **Kundenstimmen durch Google-Bewertungen mit Quelle ersetzen** (inkl. § 5b-Hinweis) bzw. die heutigen Zitate mit Quelle versehen; Vorher/Nachher auch auf Produktseiten zeigen | Nachprüfbare Bewertungen und echte Ergebnisse wirken stärker als anonyme Zitate | Klicks auf „Alle Bewertungen ansehen“; Anfragen pro 1.000 Sitzungen | M (abhängig vom Google-Profil) | 6 | 6 | 6 | **6,0** |
| 10 | **Interieur-Pakete ohne Kaufbutton** (nur „Beratung anfragen“ + „ab“-Preis + Ablaufbox), nach 4–6 Wochen mit Maßnahme 2 vergleichen | Bei 10.000–40.000 € verunsichert ein Warenkorb-Button eher; eine einzige klare Aktion bringt mehr Anfragen | Anfragen pro 1.000 Paketseiten-Sitzungen; Aufträge aus Anfragen (Protokoll) | M (Theme-Vorlage `product.design-edition` anpassen) | 8 | 5 | 6 | **6,3** |

**Kleinere Punkte ohne eigenen Test** (einfach umsetzen): Preisformat auf „39.900,00 €“ umstellen (Einstellungen → Allgemein → Währungsformat; PAngV bleibt erfüllt). Du/Sie vereinheitlichen. Farbfeld „Wunschfarbe“ neutral gestalten (z. B. Regenbogen- oder Palettensymbol statt Türkis). Ankündigungsleiste auf „Einbau in Bergkamen · Beratung Mo–Fr 9–17 Uhr“ umstellen. Preisangaben aus den Beschreibungstexten entfernen (GT-R, R8).

**Reihenfolge:** 1 → 4 → 3 → 2 + 5 (zusammen, da ein Snippet) → 6 → 7 → 8 → 9 → 10.

### 5.2 Tracking, das nötig ist

**Stufe 1 – sofort, ohne GA4 (Shopify-Bordmittel)**

| Was | Wie | Messgröße |
|---|---|---|
| Sitzungen, Warenkorb, Checkout, Käufe | Shopify-Analysen (vorhanden): Bericht „Conversion-Trichter“ bzw. „Sitzungen nach Landingpage“, filtern nach Gerät | Warenkorb-Rate je Produktseite und Gerät |
| Beratungsanfragen | 1) E-Mails mit dem Feld „Anfrageart: Beratung anfragen“ zählen (Postfach-Filter) · 2) Event `pss_beratung_anfrage` auf der Danke-Seite bzw. inline | Anfragen pro Woche und Produkt |
| Formular geöffnet / abgeschickt | Events `pss_beratung_geoeffnet`, `pss_beratung_absenden` | Formular-Abbruchquote = abgeschickt ÷ geöffnet |
| Klicks auf Anrufen / WhatsApp | Event `pss_kontakt_klick` mit `kanal` | Klicks pro Kanal |
| Shopify-Standardevents | Kundenereignisse: `page_viewed`, `product_viewed`, `product_added_to_cart`, `checkout_started`, `checkout_completed`, `form_submitted` | Grundtrichter |
| Anfrage → Angebot → Auftrag | Anfragen-Protokoll (Tabelle, Abschnitt 2.6) | **die eigentliche Conversion** für Pakete |

**Benutzerdefiniertes Pixel** (Shopify-Admin → Einstellungen → Kundenereignisse → Benutzerdefiniertes Pixel hinzufügen, Name „PSS Anfragen“). In Stufe 1 wird nur gezählt, nichts an Dritte gesendet:

```js
// Custom Pixel "PSS Anfragen" – Stufe 1: nur prüfen, ob Events ankommen (Browser-Konsole im Testmodus)
const EVENTS = ['pss_beratung_geoeffnet', 'pss_beratung_absenden', 'pss_beratung_anfrage', 'pss_kontakt_klick'];
EVENTS.forEach((name) => {
  analytics.subscribe(name, (event) => {
    console.log('[PSS]', name, event.customData);
  });
});
```

Einstellung beim Pixel: Datenverarbeitung „Analyse“ verlangen. Dann läuft das Pixel nur, wenn die Einwilligung über die Shopify-Cookie-Leiste vorliegt.

**Stufe 2 – später, nach Freigabe: GA4 mit Einwilligung**
- GA4 über die App **„Google & YouTube“** einbinden (sendet Shopify-Standardevents) **oder** im benutzerdefinierten Pixel `gtag` laden. Nur **nach Einwilligung** (§ 25 TDDDG, Art. 6 Abs. 1 lit. a DSGVO) über die Shopify-Cookie-Leiste und **Consent Mode v2**.
- Die eigenen Events als GA4-Events weitergeben (`generate_lead` für `pss_beratung_anfrage`, eigenes Event `contact_click` mit Parameter `method`) und als **Schlüsselereignis** markieren.
- **Keine personenbezogenen Daten** an GA4 senden (keine E-Mail, kein Name, keine FIN). Die Events oben enthalten nur Produkt-Handle und Kanal.
- Datenschutzerklärung um GA4 ergänzen, AVV mit Google abschließen, IP-Kürzung bzw. Datenstandort EU prüfen. Dabei soll der **Tracking & Measurement Specialist** zusammen mit dem **Data Privacy Officer** helfen.
- Facebook-Pixel und PushOwl: prüfen, ob beide wirklich nur nach Einwilligung laden **[live prüfen mit leerem Browserprofil]** und ob PushOwl mobil zusätzlich eine Abfrage zeigt (G11).

**Wochenbericht (ein Blatt):** Sitzungen mobil/Desktop · Produktseiten-Sitzungen Lenkräder/Pakete · Warenkorb-Rate · Käufe · Formular geöffnet / Anfragen · Anruf- und WhatsApp-Klicks · Angebote · Aufträge · Auftragswert.

---

## 6. Offene Fragen an den Inhaber (gesammelt)

1. **Fertigungszeiten:** Lenkrad und Interieur-Paket bis zum Einbautermin (heute widersprüchlich: „wenige Tage“, „ca. 3 Werktage“, 3–6 Wochen).
2. **Anfragen-Bearbeitung:** Wer antwortet, an welche Adresse sollen Formular-E-Mails gehen, welche Antwortzeit ist realistisch?
3. **WhatsApp:** Gibt es eine Geschäftsnummer, mit App oder API? Ist ein Firmengerät vorhanden?
4. **Telefon:** Stimmen „Mo–Fr 9–17 Uhr“? Lassen sich Anrufe zählen?
5. **Google-Unternehmensprofil:** vorhanden? Link, Anzahl Bewertungen, Schnitt?
6. **Kundenstimmen „Tom S.“, „Daniel N.“, „Carsten B.“:** Woher stammen sie (Google, E-Mail)? Gibt es Einwilligung und Datum?
7. **Partnerlogos:** Welche Beziehung besteht zu Vest Automotive, VANME, Urban Automotive und Absolute Motors? Liegt eine Logo-Freigabe vor? Woher stammt das KI-generierte Logo?
8. **Airbag-Sachkunde:** Gibt es einen Nachweis und eine freigegebene Formulierung?
9. **Vor Ort:** Selbstabholung möglich? Materialmuster? Termine nur nach Vereinbarung?
10. **Ansprechpartner:** Soll eine Person mit Name und Foto auftreten?
11. **Schlüsselcover:** Welche Schlüsselgenerationen passen? Sind „handgefertigt“ und „Nappaleder“ korrekt?
12. **Löschfrist** für Anfragen ohne Auftrag (Datenschutz).
13. **Interieur-Pakete:** Soll der Online-Kauf überhaupt möglich bleiben (Test 10)?

---

**Quellen (extern):**
- [Shopify Community – Weiterleitung nach Formularversand (return_to)](https://community.shopify.com/t/redirect-shopify-newsletter-signup-form-after-submit/49642)
- [Shopify Community – Newsletter-Formular, Weiterleitung nach erfolgreichem Absenden](https://community.shopify.com/t/newsletter-signup-form-redirect-on-successful-submission/141520)
- Gesetze: § 5b Abs. 3 UWG, § 7 UWG, § 25 TDDDG, Art. 6 DSGVO, § 312g Abs. 2 Nr. 1 BGB, PAngV (Wortlaut über gesetze-im-internet.de prüfen)
