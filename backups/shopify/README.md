# Shopify-Sicherungen ps-sattlerei.shop

Shopify hat keine eingebaute „Zurück auf Stand X“-Funktion. Deshalb wird **vor jeder Änderungsrunde** der betroffene Stand hier gesichert.

## Inhalt einer Sicherung (`JJJJ-MM-TT/`)

| Datei | Inhalt |
|---|---|
| `products.json` | Alle Produkte inkl. Entwürfe: ID, URL-Handle, Titel, Hersteller, Produkttyp, Status, Tags, Beschreibung (HTML), SEO-Titel/-Beschreibung, Optionen, Bild-IDs + Alt-Texte, alle Varianten mit Preis, Vergleichspreis, SKU, Steuerpflicht, Versandpflicht, Gewicht |
| `collections_redirects_themes.json` | Kollektionen (Titel, Text, SEO, Sortierung, Bild), alle URL-Weiterleitungen, Theme-Liste |
| `aenderungsprotokoll.md` | Jede durchgeführte Änderung mit altem und neuem Wert |

**Nicht enthalten:** Bestellungen und Kunden (werden nicht verändert), Bilddateien selbst (liegen unverändert im Shopify-CDN), Theme-Code (Theme-Änderungen erfolgen nur an einer unveröffentlichten Kopie), Rechtstexte (werden über den Rechtstexte-Dienst ersetzt).

## Wiederherstellen

Claude in einer Sitzung mit verbundenem Shopify-Connector sagen:

> „Stelle Produkt X (oder: alle Änderungen aus Paket A) auf den Stand aus `backups/shopify/2026-11-04/` zurück.“

Claude liest die alten Werte aus `products.json` bzw. `aenderungsprotokoll.md` und schreibt sie per Shopify-Schnittstelle zurück. Jede Änderung muss in Shopify bestätigt werden.

## Zusätzliche Sicherung (empfohlen, durch Inhaber)

Shopify-Admin → **Produkte → Exportieren → Alle Produkte → CSV für Excel** und die Datei lokal ablegen. Dieser Export lässt sich über **Produkte → Importieren** (mit „Vorhandene Produkte überschreiben“) direkt in Shopify wieder einspielen.
