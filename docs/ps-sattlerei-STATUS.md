# PS-Sattlerei Shop – Projektstatus & Übergabe

**Stand:** 04.11.2026 · **Shop:** ps-sattlerei.shop (Shopify Basic, EUR, Zeitzone jetzt CET) · **Branch:** `claude/festive-hamilton-5j66cl`

Kontext für eine neue Sitzung: Bitte zuerst diese Datei lesen, dann `docs/ps-sattlerei-shop-check.md` und `backups/shopify/2026-11-04/aenderungsprotokoll.md`. Shopify-Connector muss in der neuen Sitzung angemeldet sein; Domain `ps-sattlerei.shop` in der Netzwerkfreigabe.

## Firma & Produkt
Autosattlerei/Manufaktur in Bergkamen: Carbon-/Leder-/Alcantara-Lenkräder (Veredelung von Original-Lenkrädern, Metallkern bleibt original, **keine ABE/Teilegutachten**), Interieur-Pakete/Design Editionen (10.000–40.000 €), Schlüsselcover, Pflege. Marken: Audi, BMW, Mercedes, VW. Montage in Bergkamen durch Personal mit Airbag-Sachkunde. Viele Produkte = Sonderanfertigung („Wunschfarbe“).

## Kennzahlen (Nov 2025 – Nov 2026)
30.416 Sitzungen · 127 Warenkorb-Sitzungen (0,4 %) · 7 Bestellungen (3 vermutl. Tests) · 2.452 € netto Online · Conversion 0,01 % · 75 % mobil · Traffic: direkt 61 %, Google 19 %, Facebook 7 %, Instagram 4 %.
**Kernbefund:** Conversion-Problem, kein Traffic-Problem → erst Shop/Vertrauen/Anfrageweg verbessern, dann Werbung.

## Erledigt ✅
- Vollständige Sicherung (79 Produkte, Kollektionen, Weiterleitungen, Themes): `backups/shopify/2026-11-04/` + Änderungsprotokoll
- **Paket A:** 48 falsche Streichpreise entfernt, Versandpflicht RS6 Design Edition, Hersteller einheitlich „PS-Sattlerei“, Produkttypen gesetzt
- **Paket B – Testlauf (2 Produkte):** neue Titel/URLs (301), SEO-Titel/-Beschreibung, Alt-Texte (BMW-Schlüsselcover Türkis, Audi RS3 Forged Lenkrad Rot)
- 8 fehlerhafte Weiterleitungen korrigiert
- Gewinnspielseite gelöscht (Inhalt gesichert, Weiterleitung auf Startseite)
- Seite „Versand & Zahlung“ + Weiterleitung von /policies/shipping-policy
- Seite „Vertrag widerrufen“ (zweistufig, Kontaktformular) + Links in Footer und Kundenkonto
- **Theme-Kopie „Rechtssicher – Entwurf 04.11.2026“** (ID 188199272544): Preishinweis „inkl. MwSt., zzgl. Versandkosten“, „2.000+ Kunden“-Block mit fremden Fotos entfernt, Block Produktsicherheit/Herstellerangaben (GPSR) + Zulassungshinweis Lenkräder (Snippet `pss-produktsicherheit`), FAQ korrigiert, Zahlungs-Icons automatisch, Widerrufsformular-Vorlage
- Rechtstexte (Impressum, Kontakt, AGB, Widerruf mit Sonderanfertigungs-Regel, Datenschutz) erstellt → laut Inhaber **eingetragen** (`docs/ps-sattlerei-rechtstexte-einfuegen.html`)

- **SEO-Runde (04.11. nachmittags):** SEO-Titel und -Beschreibungen für alle 15 Kollektionen. Fließtexte für 5 Kollektionen. **Paket B Rollout** für 63 aktive Produkte: Titel, URLs ohne „-copy“ mit 301-Weiterleitung, SEO-Texte, 158 Alt-Texte. Alte Weiterleitungen ohne Ketten. Theme-Kopie „SEO-Korrekturen – Entwurf 04.11.2026“ (ID 188204875872) mit LocalBusiness-Daten. Die Theme-Kopie „Rechtssicher“ ist live.

## Offen / zu prüfen ⏳
1. Theme-Kopie „SEO-Korrekturen“: Inhaber ändert h1→h2 in `sections/featured-product.liquid` (Z. 256/258), entfernt den Fettdruck in der FAQ-Frage „Kann ich mein Fahrzeug individuell anpassen lassen?“ und veröffentlicht. Startseiten-Titel und -Beschreibung in den Präferenzen setzen. Kundenstimmen auf der Startseite: Quelle angeben (§ 5b Abs. 3 UWG). 2 Mercedes-Schlüsselcover „Schwarz“ doppelt. 2 Produkte „Carbon Interieur Set RS6 C8“ doppelt – Inhaber fragen
2. **Widerrufsbutton-App** installieren (Empfehlung: „Widerrufsbutton § 356a BGB – mit Eingangsbestätigung“), in App-Einbettungen aktivieren, mit Seite „Vertrag widerrufen“ verknüpfen, Datenschutz ergänzen. Bis dahin Eingangsbestätigungen **manuell am selben Tag** (Vorlage `docs/ps-sattlerei-widerrufsbutton.md`)
3. Datenschutz: Shopify-Automatik auf manuell umgestellt? YouTube-Video (Design Editionen) und Google Maps (Kontaktseite) erst nach Einwilligung laden – **noch nicht geprüft/umgesetzt**; Newsletter Double-Opt-In prüfen
4. Rechtstexte anwaltlich prüfen lassen (Liste in `docs/ps-sattlerei-rechtstexte-zum-einfuegen.md`, Teil 4)
5. Varianten „Wunschfarbe“ umbenennen in „Wunschfarbe – Anfertigung nach Ihren Vorgaben (kein Widerrufsrecht)“ (Liste zur Freigabe vorlegen)
6. **Paket B Rollout** für alle übrigen aktiven Produkte: eindeutige Titel je Farbe, URLs ohne „-copy“ (+301), SEO-Titel/-Beschreibung (Kyalami-Green-Kopierfehler bei RS3-Varianten), Alt-Texte; Vorlage `docs/ps-sattlerei-produktbereinigung.csv`. 12 Entwürfe (u. a. „(Copy)“) – Inhaber fragen, ob löschen
7. Gewichte der Varianten (fast alle 0 g) – Inhaber nach Versandgewichten fragen
8. Kollektionstexte (15 Kollektionen ohne Text), Startseite: 2 × H1, Meta-Titel kürzen
9. Conversion: „Beratung anfragen“ für Pakete 10–40 T€, Bewertungs-App, Anfragen messen
10. Danach Marketing: Tracking (GA4/Consent Mode), Google Merchant Center + Shopping, Social Content (Vorher-Nachher-Reels), Essen Motor Show 2026, Newsletter

## Arbeitsweise (vereinbart)
- Vor jeder Änderungsrunde Sicherung + Eintrag im Änderungsprotokoll
- Erst Testlauf an 2 Produkten, dann Rollout nach Freigabe
- Theme-Änderungen nur an unveröffentlichter Kopie; Inhaber veröffentlicht selbst
- Connector darf keine Rechtstexte (Richtlinien) schreiben und kein Theme veröffentlichen
- Große Theme-Dateien: per `themeFilesUpsert` (TEXT) senden und MD5-Prüfsumme gegen lokale Datei prüfen
