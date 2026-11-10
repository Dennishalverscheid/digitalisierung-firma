# 07 – SEO-Fassung „PSS LED Magnet-Schaltwippen Carbon“

**Stand:** 10.11.2026 · **Produkt:** Entwurf `gid://shopify/Product/15436404719712` (Status DRAFT) · **Shop:** https://ps-sattlerei.shop
**Grundlage:** `07-entwurf-magnet-schaltwippen-input.json`, Stilvorbild `04-produkttexte-final.json` (Schlüssel `7548051619936` und die übrigen Interieur-Teile), Vorlage „Interieur-Teil“ aus `docs/ps-sattlerei-seo-plan.md` Abschnitt 3.2, `backups/shopify/2026-11-04/paket-b-rollout.json` und `collections_redirects_themes.json`, WebSearch vom 10.11.2026.
**Wichtig:** Im Shop wurde nichts geändert. Den Live-Shop konnte ich nicht prüfen, weil WebFetch `ps-sattlerei.shop` in dieser Sitzung nicht auflöst (DNS). Die Domain muss dafür in den Netzwerkeinstellungen freigegeben werden, oder die Projektleitung prüft per `curl`.

---

## 0. Vorab: Kannibalisierung und zwei Befunde

**Kannibalisierung (geprüft ohne GSC, nur über Titel, H1 und Suchintention):**

| Produkt | Titel/H1 (Stand 04.11.) | SEO-Titel | zuständig für |
|---|---|---|---|
| Bestand `7548051619936` | PSS LED Carbon Schaltwippen – passend für Audi RS6 C8 / RS7 C8 / A6 C8 / A7 C8 | LED Carbon Schaltwippen für Audi RS6 C8 \| PS-Sattlerei | „led carbon schaltwippen“, „carbon schaltwippen audi c8 / rs6 / rs7“, „schaltwippen schaltblitz“ |
| **Neu** `15436404719712` | PSS LED Magnet-Schaltwippen Carbon | siehe unten | **„magnet schaltwippen“, „magnetische schaltwippen“, „paddle shifter magnetisch“** |

- Beide Produktnamen enthalten „LED“, „Carbon“ und „Schaltwippen“. Damit Google sie auseinanderhält, steht im neuen Produkt **„Magnet-Schaltwippen“ immer vorne** (SEO-Titel, Meta, Handle, Alt-Texte). Die Wortfolge „LED Carbon Schaltwippen“ übernimmt das neue Produkt nicht.
- **Falls die Magnet-Wippen ebenfalls für die Audi C8-Baureihe passen**, konkurrieren beide Seiten direkt um „Schaltwippen Audi RS6 C8“. Dann gilt: Der SEO-Titel des neuen Produkts nennt **nicht „LED Carbon“**, sondern „Magnet-Schaltwippen für Audi RS6 C8“. Beide Seiten verlinken sich gegenseitig (siehe FAQ-Frage 3 und Abschnitt 4). Zusätzlich klärt der Inhaber, ob das neue Teil das alte ersetzt. In dem Fall: zusammenlegen, das alte Produkt per 301 auf das neue umleiten und auf keinen Fall zwei Seiten parallel betreiben (Frage 9).
- Nach Veröffentlichung in der GSC (Dimensionen Seite + Suchanfrage, Filter „schaltwippen“) prüfen, ob beide URLs in den Top 20 für dieselbe Anfrage auftauchen.

**Befund 1: Kollektion `/collections/interieur-teile` gibt es im Export vom 04.11. nicht.** In `collections_redirects_themes.json` stehen 15 Kollektionen, keine davon heißt „interieur-teile“. Die Projektleitung muss live prüfen, ob sie inzwischen angelegt wurde. Falls nicht, empfehle ich eine **automatische Kollektion** „Interieur-Teile“ mit der Bedingung *Produkttyp = Interieur-Teil*. Darin landen auch LED Carbon Schaltwippen, Race Display, Digitale Lenkradtasten und Black Badge Set, sofern sie denselben Produkttyp tragen [Projektleitung: Produkttyp der vier Bestandsprodukte prüfen].

**Befund 2: Optionsname „Einbau“ weicht vom Shop-Standard ab.** Die übrigen Produkte nennen die Option „Montage durch PS-Sattlerei“. Das geplante Produkt-JSON-LD (`03-ki-sichtbarkeit.md` 3.4) erkennt die Montage-Variante an `pss_opt.name contains 'Montage'`. Bleibt der Name „Einbau“, bekommt die Variante „Ja“ fälschlich Versanddaten. **Empfehlung:** Option umbenennen in „Montage durch PS-Sattlerei“ mit den Werten „Nein (Versand)“ und „Ja“. Die Preise (549 € / 749 €) bleiben unverändert.

---

## 1. Keyword-Recherche (kurz)

### 1.1 Was Wettbewerber in DE verwenden (WebSearch, 10.11.2026)

| Beobachtung | Quelle |
|---|---|
| Deutsche Händler schreiben **„Schaltwippen aus Carbon für [Marke] [Baureihe] ([Baujahre])“**, „Carbon-Schaltwippen für BMW 5er G60 (2024 bis 2026)“, außerdem **„Lenkradschaltpaddles“** | [Euro Premium Parts – BMW 2er F22](https://europremiumparts.com/de-de/products/carbon-paddle-shifters-for-bmw-2-series-f22-2014-to-2021), [Euro Premium Parts – BMW 5er G60](https://europremiumparts.com/de/products/carbon-paddle-shifters-for-bmw-5-series-g60-2024-to-2026), [Euro Premium Parts – Lenkradschaltpaddles Mercedes](https://europremiumparts.com/de/collections/palettes-au-volant-pour-mercedes-benz) |
| Auf eBay.de gibt es Formulierungen wie „Echt Carbon Schaltwippen zum Austausch für Audi A6 S6 RS6 C8 …“ und „Carbon URUS Style Schaltwippen Verlängerungen DSG“. Der Begriff **„Schaltwippen Verlängerung“** ist also gängig (laut Suchzusammenfassung, Angebote wechseln häufig) | [eBay 166937979998](https://www.ebay.de/itm/166937979998), [eBay 223472150840](https://www.ebay.de/itm/223472150840), [eBay 317624019967](https://www.ebay.de/itm/317624019967) |
| Magnetische Wippen für echte Fahrzeuge heißen auch auf deutschsprachigen Shopseiten meist englisch: **„Magnetic Paddle Shifters“**, „MagShift“, teils „LED“ und „Plug & Play“ als Merkmal | [Open Throttle (de) – G-Serie](https://openthrottle.co/de/products/magshift-carbon-fibre-magnetic-paddle-shifters-g-series), [Open Throttle (de) – F-Serie](https://openthrottle.co/de/products/f-series-magnetic-paddle-shifters), [The Carbon Industries – Audi C8](https://www.thecarbonindustries.com/products/magnetic-carbon-fiber-audi-paddle-shifters-a6-a7-s6-s7-rs6-rs7), [Bimmer Plug – BMW G](https://bimmerplug.com/products/magnetic-paddle-shifters-bmw-g-chassis-a90-supra) |
| **„Magnetische Schaltwippen“ ohne Fahrzeugbezug** liefert überwiegend **Sim-Racing**-Treffer (Fanatec, Moza, Simagic, Mods für Logitech G29) | [eBay 336101883418](https://www.ebay.de/itm/336101883418), [German Sim Racing](https://shop.germansimracing.de/products/clubsport-magnetic-paddle-module), [Fanatec](https://www.fanatec.com/eu/de/p/steering-wheel-accessories/cs_mpm/clubsport-magnetic-paddle-module), [Caseking – Simagic](https://www.caseking.de/simagic-push-pull-schaltwippen-kit/GAJO-1513.html) |
| Wettbewerber schreiben, dass ihre Wippen **nur bei Fahrzeugen mit werkseitigen Schaltwippen** funktionieren. Diese Frage stellen Kunden also, deshalb steht sie in der FAQ und in der Fragenliste | [The Carbon Industries – Audi C8](https://www.thecarbonindustries.com/products/magnetic-carbon-fiber-audi-paddle-shifters-a6-a7-s6-s7-rs6-rs7), [JQ Werks Audi B9/8V](https://r44performance.com/products/jq-werks-madtrace%C2%AE-audi-s3-rs3-rs4-rs5-clubsport-magnetic-paddle-shifters-b9-8v) |

**Folgerungen:**
1. Der generische Begriff „magnetische Schaltwippen“ ist wegen der Sim-Racing-Treffer **mehrdeutig**. Er lohnt sich erst **mit Marke/Modell** („magnetische Schaltwippen BMW M3“). Deshalb ist Variante B für SEO deutlich stärker als Variante A.
2. Kunden suchen modellbezogen (Baureihe + Baujahr). Die Liste unter „Passend für“ sollte deshalb Baureihencodes **und** Baujahre nennen, so wie bei den Wettbewerbern.
3. „Schaltwippen verlängert/Verlängerung“ ist ein eigener Begriff. Er passt aber nur, wenn die Wippen **ersetzt** werden und nicht aufgesteckt (Frage 8). Sonst würde eine falsche Erwartung entstehen.

### 1.2 Keyword-Tabelle

Suchvolumen für alle Zeilen: **im Keyword Planner prüfen** (Region Deutschland, zusätzlich Google Trends). Es gibt keine GSC-Daten zu diesem Produkt.

| # | Keyword (Varianten) | Suchintention | Priorität | Zuständige URL | Hinweis |
|---|---|---|---|---|---|
| 1 | magnet schaltwippen, magnet-schaltwippen, magnetische schaltwippen **+ {marke} {modell}** | kommerziell/transaktional | **hoch** | neues Produkt | Hauptkeyword. Ohne Fahrzeugbezug mehrdeutig (Sim-Racing) |
| 2 | paddle shifter magnetisch, magnetic paddle shifter **+ {modell}** | kommerziell | mittel | neues Produkt | Englischer Begriff, in der Tuning-Szene verbreitet. In Meta oder FAQ nur natürlich einbauen, nicht in den Titel |
| 3 | carbon schaltwippen **+ {marke} {modell}** | kommerziell/transaktional | mittel | neues Produkt **nur für Nicht-C8-Modelle** | Für Audi C8 gehört der Begriff dem Bestandsprodukt `7548051619936` |
| 4 | schaltwippen verlängert, schaltwippen verlängerung **+ {modell}** | kommerziell | mittel | neues Produkt | Erst nach Bestätigung „verlängerte Form, Ersatz statt Aufsatz“ (Frage 8) |
| 5 | schaltwippen led, led schaltwippen, schaltwippen schaltblitz | kommerziell | niedrig–mittel | **Audi C8:** Bestandsprodukt. **Andere Modelle:** neues Produkt | „Schaltblitz“ erst verwenden, wenn die LED-Funktion bestätigt ist (Frage 2) |
| 6 | schaltwippen nachrüsten {modell}, schaltwippen tauschen {modell} | informational → transaktional | niedrig | neues Produkt (FAQ) bzw. später Ratgeber | Hängt an Frage 1 (Werks-Schaltwippen nötig?) |
| 7 | schaltwippen einbauen lassen, schaltwippen einbau ruhrgebiet/nrw | lokal/transaktional | niedrig | neues Produkt (Variante „Ja“) | Unterstützt die Einbau-Option in Bergkamen |
| – | lenkradschaltpaddles, schaltpaddel | kommerziell | niedrig | – | Nur beobachten, nicht aktiv besetzen |

**Nicht** verwenden: „OEM“, „original“, „Plug & Play“ (solange nicht bestätigt), „TÜV“, „ABE“, „legal“.

---

## 2. Fertige Felder

Zeichen sind von Hand gezählt, inklusive Leerzeichen.

### 2.1 Variante A: Modell unbekannt, sofort nutzbar

| Feld | Wert | Zeichen |
|---|---|---|
| **Produkttitel (H1)** | PSS LED Magnet-Schaltwippen Carbon | 34 |
| **Handle/URL** | `pss-led-magnet-schaltwippen-carbon` → `/products/pss-led-magnet-schaltwippen-carbon` | – |
| **SEO-Titel** | Magnet-Schaltwippen Carbon mit LED \| PS-Sattlerei | **49** (≤ 60 ✓) |
| **Meta-Beschreibung** | PSS Magnet-Schaltwippen Carbon mit LED: magnetischer Schaltpunkt, verlängerte Form. Passform vorab per FIN prüfen, optional mit Einbau in Bergkamen. | **148** (≤ 155 ✓) |

**Alt-Text-Muster** (je nach Bildinhalt, nur zutreffende verwenden):
1. „PSS LED Magnet-Schaltwippen Carbon – Satz links und rechts“
2. „PSS LED Magnet-Schaltwippen Carbon – Detail Magnetmechanismus“
3. „PSS LED Magnet-Schaltwippen Carbon – LED leuchtet“ (nur, wenn das Bild die LED in Betrieb zeigt)
4. „PSS LED Magnet-Schaltwippen Carbon – am Lenkrad montiert“
5. „PSS LED Magnet-Schaltwippen Carbon – Vergleich mit Serien-Schaltwippe“

Dateinamen vor dem Hochladen sprechend benennen, z. B. `magnet-schaltwippen-carbon-led-satz.jpg`. **Nur eigene Fotos oder Lieferantenbilder mit schriftlichem Nutzungsrecht** verwenden (Frage 7).

**Tags (bereinigt):** `schaltwippen`, `magnet-schaltwippen`, `carbon`, `led`, `interieur-teil`, `PRÜFEN-vor-Veröffentlichung`
- „magnetisch“ entfällt, weil `magnet-schaltwippen` es abdeckt. „LED“ wird zu `led`, einheitlich kleingeschrieben.
- **Nicht** setzen: `sonderanfertigung` (Zukaufteil, Standard-Widerruf 14 Tage) und `versand-spedition` (Paketversand).
- `PRÜFEN-vor-Veröffentlichung` erst entfernen, wenn die Fragen 1–6 beantwortet sind.

### 2.2 Variante B: Muster mit `{MARKE}`/`{MODELL}`

Wird ausgefüllt, sobald der Inhaber die Kompatibilität nennt. `{MODELL}` = **Leitmodell** mit Baureihencode (z. B. „M3 G80“). Weitere Modelle stehen in der Meta-Beschreibung und unter „Passend für“.

| Feld | Muster | Längengrenze |
|---|---|---|
| **Produkttitel (H1)** | PSS LED Magnet-Schaltwippen Carbon passend für {MARKE} {MODELLE} | – (Shop-Schema: „passend für“, mehrere Modelle mit „ / “) |
| **Handle/URL** | `pss-led-magnet-schaltwippen-carbon-{marke}-{leitmodell}` (kleingeschrieben, Umlaute umschreiben, ohne „-fur-“/„-passend-“) | max. ca. 8 Wörter |
| **SEO-Titel** | Magnet-Schaltwippen Carbon {MARKE} {MODELL} \| PS-Sattlerei | fester Teil 42 → **{MARKE} {MODELL} ≤ 18 Zeichen** |
| SEO-Titel (Ausweichform, wenn länger) | Magnet-Schaltwippen für {MARKE} {MODELL} \| PS-Sattlerei | fester Teil 39 → **≤ 21 Zeichen** |
| **Meta-Beschreibung** | Magnet-Schaltwippen mit LED für {MARKE} {MODELL}: verlängerte Form, magnetischer Schaltpunkt. Passform per FIN prüfen, optional mit Einbau in Bergkamen. | fester Teil 136 → **{MARKE} {MODELL} ≤ 19 Zeichen** |

**Rechenbeispiel (keine Kompatibilitätsaussage):** „Magnet-Schaltwippen für Audi RS6 C8 | PS-Sattlerei“ = 50 Zeichen. Meta mit „Audi RS6 C8“ = 147 Zeichen. **Für Audi C8 immer die Ausweichform ohne „Carbon“ verwenden** (Abgrenzung zum Bestandsprodukt, Abschnitt 0).

**Handle bei späterer Änderung:** Wird Variante A veröffentlicht und die Kompatibilität erst danach bekannt, das Handle **nur mit gesetztem Häkchen „Weiterleitung erstellen“ (301)** ändern. Noch besser: Kompatibilität vor der ersten Veröffentlichung klären und direkt das B-Handle verwenden.

**Alt-Text-Muster B:**
1. „PSS LED Magnet-Schaltwippen Carbon für {MARKE} {MODELL} – Satz links und rechts“
2. „… für {MARKE} {MODELL} – Detail Magnetmechanismus“
3. „… für {MARKE} {MODELL} – LED leuchtet“ (nur, wenn das Bild es zeigt)
4. „… für {MARKE} {MODELL} – am Lenkrad montiert“
5. „… für {MARKE} {MODELL} – Vergleich mit Serien-Schaltwippe“

**Tags B:** wie A, zusätzlich `{marke}` (z. B. `bmw`) und `{baureihe}` (z. B. `g80`). Falls die automatischen Markenkollektionen über Tags befüllt werden, den Tag exakt so schreiben wie dort [Projektleitung: Bedingungen der Kollektionen prüfen, sie sind über die API nicht vollständig auslesbar].

---

## 3. Produktbeschreibung (HTML, umsetzungsfertig)

**Hinweise zur Umsetzung:**
- `<!-- FRAGE: … -->`-Kommentare sind im **Seitenquelltext öffentlich sichtbar**. Sie müssen **vor der Veröffentlichung** entfernt bzw. durch die Antwort ersetzt werden. Außerdem kann der Rich-Text-Editor im Shopify-Admin Kommentare beim Bearbeiten verwerfen. Deshalb nur über die API setzen und die Fragen zusätzlich in Abschnitt 5 führen.
- Der Text ist auch **ohne Antworten** sauber: Er behauptet nichts Unbestätigtes zu LED-Funktion, Carbon-Art, Plug & Play, Kabeln oder Lieferzeit.
- Es gibt keinen Zulassungsabsatz, weil das Theme den Sicherheitsblock einblendet. Der Text enthält das Wort „Lenkrad“, damit greift der Auslöser des Snippets `pss-produktsicherheit` (siehe `03-ki-sichtbarkeit.md` Frage 11) [Projektleitung: in der Vorschau prüfen, ob der Block erscheint].
- Kein Widerrufsausschluss: Das Produkt ist ein Standard-Zukaufteil.

### 3.1 Variante A (vollständig)

```html
<p>Die PSS LED Magnet-Schaltwippen Carbon sind ein Satz Schaltwippen für links und rechts mit magnetischem Schaltpunkt, verlängerter Form und integrierter LED. Sie erhalten die Wippen wahlweise per Versand oder mit Einbau in unserer Werkstatt in Bergkamen. Ob sie zu Ihrem Fahrzeug passen, prüfen wir vorab anhand Ihrer FIN.</p>
<!-- FRAGE: Ersetzen die Wippen die Serien-Schaltwippen komplett, oder werden sie auf die vorhandenen Wippen aufgesetzt? Ist das Fahrzeug mit werkseitigen Schaltwippen Voraussetzung? -->
<h2>Highlights</h2>
<ul>
<li>Magnetischer Schaltpunkt</li>
<!-- FRAGE: Magnetischer Schaltpunkt und verlängerte Form stammen aus dem Entwurf – bitte bestätigen. -->
<li>Verlängerte Form, dadurch leichter erreichbar</li>
<li>Integrierte LED im Wippenkörper</li>
<!-- FRAGE: LED-Funktion: Dauerlicht, Schaltblitz oder Farbwahl? Woher kommt das Signal (z. B. Drehzahl)? Danach diesen Punkt konkret formulieren, z. B. „Integrierter Schaltblitz: Eine LED-Sequenz zeigt beim Hochdrehen den Schaltzeitpunkt an“. -->
<!-- FRAGE: Carbon-Oberfläche: Echtcarbon? Matt, glänzend oder Forged Carbon? Danach Punkt ergänzen, z. B. „<li>Echtcarbon, matt</li>“. Falls kein Echtcarbon: Produktname anpassen (Irreführungsgefahr, § 5 UWG). -->
<li>Magnetmechanismus und LED-Elektronik vormontiert</li>
<li>Wahlweise mit Einbau in Bergkamen</li>
</ul>
<h2>Passend für</h2>
<!-- FRAGE: Marke, Modell, Baureihe, Baujahr? Danach hier als Liste einsetzen (siehe Variante B) und den folgenden Absatz entfernen. -->
<p>Die Fahrzeugzuordnung nennen wir Ihnen gern auf Anfrage. Bitte senden Sie uns dafür vor der Bestellung Ihre FIN.</p>
<p><strong>Passform vorab per FIN prüfen:</strong> Lenkrad und Schaltwippen unterscheiden sich je nach Modell, Baujahr und Ausstattung. Senden Sie uns vor der Bestellung Ihre FIN oder ein Foto Ihres Lenkrads an sales@ps-sattlerei.com oder rufen Sie uns an: 02389 / 9953050.</p>
<h2>Lieferumfang &amp; Ablauf</h2>
<ul>
<li><strong>Lieferumfang:</strong> 1 Satz PSS LED Magnet-Schaltwippen Carbon, links und rechts, Magnetmechanismus und LED-Elektronik vormontiert</li>
<!-- FRAGE: Sind Kabel, Adapter oder eine Einbauanleitung enthalten? Falls ja, im Lieferumfang ergänzen. -->
</ul>
<ol>
<li><strong>Bestellung:</strong> Wählen Sie, ob Sie die Wippen per Versand erhalten oder ob die Montage durch die PS-Sattlerei in Bergkamen erfolgen soll.</li>
<li><strong>Passformprüfung:</strong> Wir gleichen Ihre FIN oder Ihr Foto ab und nennen Ihnen dabei die voraussichtliche Lieferzeit.</li>
<!-- FRAGE: Gilt die Lieferzeit von 6–8 Wochen (wie bei Lenkrädern und Teilen) auch für dieses Zukaufteil, oder ist es ab Lager lieferbar? Danach konkret eintragen. -->
<li><strong>Versand oder Einbau:</strong> Versand an Sie oder Ihre Werkstatt – oder Einbau in Bergkamen. Den Einbauaufwand für Ihr Fahrzeug besprechen wir vorab mit Ihnen. Bei Versand empfehlen wir den Einbau durch einen Fachbetrieb.</li>
<!-- FRAGE: Plug & Play oder Codierung nötig? Muss für den Einbau der Airbag ausgebaut werden? Falls ja: „durch unser Personal mit Airbag-Sachkunde“ ergänzen. Erst nach Bestätigung „ohne Codierung“ o. Ä. schreiben. -->
</ol>
<h2>Häufige Fragen</h2>
<h3>Was bedeutet „magnetischer Schaltpunkt“?</h3>
<p>Bei magnetischen Schaltwippen bestimmt ein Magnet, wann die Wippe auslöst und wie sie in die Ausgangsstellung zurückkehrt. Dadurch ist der Schaltpunkt klar spürbar.</p>
<!-- FRAGE: Erklärung für dieses Teil zutreffend? Ggf. anpassen. -->
<h3>Passen die Schaltwippen in mein Fahrzeug?</h3>
<p>Das hängt von Modell, Baujahr und Lenkradausführung ab. Wir prüfen es vor der Bestellung anhand Ihrer FIN oder eines Fotos Ihres Lenkrads. Bitte geben Sie dabei an, ob Ihr Fahrzeug ab Werk Schaltwippen hat.</p>
<h3>Worin unterscheiden sie sich von den PSS LED Carbon Schaltwippen für die Audi C8-Baureihe?</h3>
<p>Bei den <a href="/products/pss-led-carbon-schaltwippen-passend-fur-audi-rs6-c8-rs7-c8-a6-c8-a7-c8">PSS LED Carbon Schaltwippen für die Audi C8-Baureihe</a> bleibt die Wippenmechanik des Serienfahrzeugs erhalten. Die Magnet-Schaltwippen haben dagegen einen magnetischen Schaltpunkt. Welche Ausführung zu Ihrem Fahrzeug passt, klären wir gern im Beratungsgespräch.</p>
<p><small>Marken- und Modellbezeichnungen dienen ausschließlich der Angabe des Verwendungszwecks („passend für“). Die PS-Sattlerei GmbH steht in keiner Verbindung zu den Fahrzeugherstellern.</small></p>
```

### 3.2 Variante B (nur die abweichenden Blöcke)

**Einleitung, erster Satz:**
```html
<p>Die PSS LED Magnet-Schaltwippen Carbon sind ein Satz Schaltwippen für links und rechts, passend für {MARKE} {MODELLE}, mit magnetischem Schaltpunkt, verlängerter Form und integrierter LED. Sie erhalten die Wippen wahlweise per Versand oder mit Einbau in unserer Werkstatt in Bergkamen. Ob sie zu Ihrem Fahrzeug passen, prüfen wir vorab anhand Ihrer FIN.</p>
```

**„Passend für“** ersetzt den Kommentar und den Absatz „Die Fahrzeugzuordnung …“:
```html
<h2>Passend für</h2>
<ul>
<li>{MARKE} {MODELL 1} ({BAUREIHE}, {BAUJAHR VON}–{BAUJAHR BIS})</li>
<li>{MARKE} {MODELL 2} ({BAUREIHE}, {BAUJAHR VON}–{BAUJAHR BIS})</li>
<li>Voraussetzung: {z. B. Fahrzeug mit werkseitigen Schaltwippen – nur nach Bestätigung}</li>
<li>Nicht passend: {falls bekannt}</li>
</ul>
```

**Rechtshinweis B:** „… steht in keiner Verbindung zu **den genannten** Fahrzeugherstellern.“

**FAQ-Frage 3:** Bleibt stehen. Falls die Wippen **für die Audi C8-Baureihe** passen, die Antwort ergänzen: „Beide Ausführungen passen in die C8-Baureihe.“ Im Bestandsprodukt `7548051619936` dann als 4. Frage den Rücklink setzen (Abschnitt 4).

---

## 4. Interne Verlinkung

Grundsatz: Ankertexte abwechseln und **„Magnet“ im Anker** verwenden. So bekommt Google das Unterscheidungsmerkmal zum Bestandsprodukt auch über Links. Links nur dort setzen, wo die Wippen laut Kompatibilität wirklich passen.

| # | Von (Quelle) | Wo auf der Seite | Ankertext | Bedingung |
|---|---|---|---|---|
| 1 | `/collections/interieur-teile` | Produktraster (automatisch) + 1 Satz im Kollektionstext | „magnetische Schaltwippen mit LED“ | Kollektion live prüfen bzw. anlegen (Befund 1) |
| 2 | `/products/pss-led-carbon-schaltwippen-passend-fur-audi-rs6-c8-rs7-c8-a6-c8-a7-c8` | neue 4. FAQ-Frage „Gibt es auch Schaltwippen mit magnetischem Schaltpunkt?“ | „PSS LED Magnet-Schaltwippen Carbon“ | immer (Abgrenzung). Bei C8-Kompatibilität mit dem Satz „auch passend für die C8-Baureihe“ |
| 3 | `/collections/{marke}-lenkrader` (z. B. `/collections/bmw-lenkrader`, `/collections/audi-lenkrader`, `/collections/mercedes-lenkrader`, `/collections/volkswagen-lenkrader`) | Kollektionstext, Absatz „Passendes Zubehör“ | „Magnet-Schaltwippen für {MARKE} {MODELL}“ | nur die Marke(n) laut Kompatibilität |
| 4 | Lenkrad-Produkte derselben Marke/Baureihe, z. B. BMW F-Reihe → `/products/pss-gt-r-carbon-lenkrad-bmw-f-reihe-schwarz`, BMW G-Reihe → `/products/pss-evo-x-carbon-lenkrad-bmw-g-reihe-schwarz`, Audi C8 → `/products/pss-evo-x-carbon-lenkrad-daytona-edition-fur-audi-rs6-rs7` | 1 Satz nach „Lieferumfang & Ablauf“ | „magnetische Schaltwippen mit LED“ / „passende Magnet-Schaltwippen“ | nur wenn die Wippen **an genau dieses Lenkrad** passen. **Achtung:** GT-R und EVO-X BMW enthalten bereits verlängerte Carbon-Schaltwippen im Lieferumfang. Dort nur verlinken, wenn die Magnet-Wippen eine sinnvolle Alternative bzw. ein Upgrade sind [FRAGE AN INHABER] |
| 5 | `/collections/lenkrader` („Alle Lenkräder“) | Kollektionstext, Satz zu Zubehör | „Schaltwippen mit magnetischem Schaltpunkt“ | optional |
| 6 | `/products/pss-black-badge-lenkrad-set-audi-rs6-c8` | 1 Satz | „Magnet-Schaltwippen Carbon“ | nur bei C8-Kompatibilität |
| 7 | `llms.txt` (`03-ki-sichtbarkeit.md` 2.2, Abschnitt „Zubehör“) | neue Zeile | „PSS LED Magnet-Schaltwippen Carbon, passend für {MARKE} {MODELL}“ | nach Veröffentlichung, mit Preis 549 € / 749 € mit Einbau |

**Vom neuen Produkt aus:** Der Link auf das Bestandsprodukt steht bereits in FAQ-Frage 3. Nach Klärung der Kompatibilität zusätzlich auf die Lenkradkollektion der Marke verlinken, z. B. „Carbon-Lenkräder für {MARKE}“ im Einleitungs- oder Ablaufteil.

---

## 5. Fragen an den Inhaber

1. **Kompatibilität:** Für welche Marke(n), Modelle, Baureihen und Baujahre? Sind werkseitige Schaltwippen oder ein bestimmtes Lenkrad (z. B. Sportlenkrad, Lenkradheizung) Voraussetzung? Welche Modelle passen nicht?
2. **LED-Funktion:** Dauerlicht, Schaltblitz oder Farbwahl? Woher kommt das Signal (z. B. Drehzahl über das Fahrzeug)?
3. **Carbon-Oberfläche:** Echtcarbon? Matt, glänzend oder Forged? (Falls kein Echtcarbon, muss „Carbon“ aus dem Namen.)
4. **Plug & Play oder Codierung nötig?** Muss für den Einbau der Airbag ausgebaut werden?
5. **Lieferumfang:** Sind Kabel, Adapter und Einbauanleitung dabei? Ist „1 Satz links und rechts, Mechanik und LED-Elektronik vormontiert“ korrekt?
6. **Lieferzeit:** Gelten auch für dieses Zukaufteil 6–8 Wochen, oder ist es ab Lager lieferbar?
7. **Bilder:** Gibt es eigene Fotos (Satz, Detail Magnet, LED an, eingebaut)? Bei Lieferantenbildern: Liegt das Nutzungsrecht schriftlich vor?
8. **Form und Mechanik:** Bitte „verlängerte Form“ und „magnetischer Schaltpunkt“ bestätigen. Werden die Wippen ersetzt oder aufgesetzt?
9. **Verhältnis zum Bestandsprodukt** „PSS LED Carbon Schaltwippen“ (Audi C8): anderes Teil, Alternative oder Nachfolger? (Davon hängen Zusammenlegen/301 und die Ankertexte ab.)
10. **Einbau-Variante „Ja“ (749 €):** Ort Bergkamen bestätigt. Wie lange dauert der Einbau (am selben Tag)? Dürfen Partnerwerkstätten genannt werden?
11. **Produktsicherheit (GPSR):** Wer ist Hersteller bzw. Importeur (Name, Anschrift, Kontakt)? Gibt es eine Typ- oder Teilenummer und, für die LED-Elektronik, eine CE-Kennzeichnung bzw. Konformitätserklärung? Diese Angaben müssen bei Zukaufteilen im Onlineshop stehen.

---

## Quellen (WebSearch, 10.11.2026)

- [Euro Premium Parts – Schaltwippen aus Carbon für BMW 2er F22](https://europremiumparts.com/de-de/products/carbon-paddle-shifters-for-bmw-2-series-f22-2014-to-2021)
- [Euro Premium Parts – Carbon-Schaltwippen für BMW 5er G60](https://europremiumparts.com/de/products/carbon-paddle-shifters-for-bmw-5-series-g60-2024-to-2026)
- [Euro Premium Parts – Lenkradschaltpaddles für Mercedes-Benz](https://europremiumparts.com/de/collections/palettes-au-volant-pour-mercedes-benz)
- [Open Throttle (de) – MagShift Carbon Magnetic Paddle Shifters G-Serie](https://openthrottle.co/de/products/magshift-carbon-fibre-magnetic-paddle-shifters-g-series)
- [Open Throttle (de) – F-Series Magnetic Paddle Shifters](https://openthrottle.co/de/products/f-series-magnetic-paddle-shifters)
- [The Carbon Industries – Magnetic Carbon Fiber Audi Paddle Shifters A6/A7/S6/S7/RS6/RS7](https://www.thecarbonindustries.com/products/magnetic-carbon-fiber-audi-paddle-shifters-a6-a7-s6-s7-rs6-rs7)
- [Bimmer Plug – Magnetic Paddle Shifters BMW G-Chassis](https://bimmerplug.com/products/magnetic-paddle-shifters-bmw-g-chassis-a90-supra)
- [R44 Performance – JQ Werks MadTrace Audi S3/RS3/RS4/RS5](https://r44performance.com/products/jq-werks-madtrace%C2%AE-audi-s3-rs3-rs4-rs5-clubsport-magnetic-paddle-shifters-b9-8v)
- eBay.de: [166937979998](https://www.ebay.de/itm/166937979998), [223472150840](https://www.ebay.de/itm/223472150840), [317624019967](https://www.ebay.de/itm/317624019967), [336101883418](https://www.ebay.de/itm/336101883418)
- Sim-Racing (Mehrdeutigkeit): [German Sim Racing](https://shop.germansimracing.de/products/clubsport-magnetic-paddle-module), [Fanatec](https://www.fanatec.com/eu/de/p/steering-wheel-accessories/cs_mpm/clubsport-magnetic-paddle-module), [Caseking – Simagic](https://www.caseking.de/simagic-push-pull-schaltwippen-kit/GAJO-1513.html)

Einschränkung: Die Angaben zu Angebotstexten auf eBay beruhen auf den Suchergebnissen und wurden nicht einzeln aufgerufen. Angebote wechseln häufig.
