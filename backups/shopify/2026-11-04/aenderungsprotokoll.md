# Änderungsprotokoll 04.11.2026 – Paket A

Alle Änderungen per Shopify Admin API, jeweils vom Inhaber bestätigt, ohne Fehlermeldung. Kontrolle durch Rücklesen aus dem Shop.

## A1 – Falsche Streichpreise entfernt (48 Varianten, 8 Produkte)

Vergleichspreis (`compareAtPrice`) lag unter dem Verkaufspreis. Neu: leer. **Rückgängig:** alten Wert wieder eintragen.

| Produkt-ID | Produkt | Variante | Preis | Vergleichspreis alt → neu |
|---|---|---|---|---|
| 7524697800800 | PSS GT‐R Carbon Lenkrad passend für BMW F-Reihe | Grau / Nein Versand | 1690.00 € | 1390.00 € → leer |
| 7524697800800 | PSS GT‐R Carbon Lenkrad passend für BMW F-Reihe | Grau / Ja | 1890.00 € | 1390.00 € → leer |
| 7524697800800 | PSS GT‐R Carbon Lenkrad passend für BMW F-Reihe | Wunschfarbe / Nein Versand | 1790.00 € | 1390.00 € → leer |
| 7524697800800 | PSS GT‐R Carbon Lenkrad passend für BMW F-Reihe | Wunschfarbe / Ja | 1990.00 € | 1390.00 € → leer |
| 7524701208672 | PSS EVO-X Carbon Lenkrad passend für BMW G-Reihe | Blau / Nein / Nein Versand | 1990.00 € | 1390.00 € → leer |
| 7524701208672 | PSS EVO-X Carbon Lenkrad passend für BMW G-Reihe | Blau / Nein / Ja | 1990.00 € | 1390.00 € → leer |
| 7524701208672 | PSS EVO-X Carbon Lenkrad passend für BMW G-Reihe | Blau / Ja / Nein Versand | 1990.00 € | 1390.00 € → leer |
| 7524701208672 | PSS EVO-X Carbon Lenkrad passend für BMW G-Reihe | Blau / Ja / Ja | 1990.00 € | 1390.00 € → leer |
| 7524701208672 | PSS EVO-X Carbon Lenkrad passend für BMW G-Reihe | Wunschfarbe / Nein / Nein Versand | 2190.00 € | 1390.00 € → leer |
| 7524701208672 | PSS EVO-X Carbon Lenkrad passend für BMW G-Reihe | Wunschfarbe / Nein / Ja | 2190.00 € | 1390.00 € → leer |
| 7524701208672 | PSS EVO-X Carbon Lenkrad passend für BMW G-Reihe | Wunschfarbe / Ja / Nein Versand | 2190.00 € | 1390.00 € → leer |
| 7524701208672 | PSS EVO-X Carbon Lenkrad passend für BMW G-Reihe | Wunschfarbe / Ja / Ja | 2190.00 € | 1390.00 € → leer |
| 7542917202016 | PSS GT‐R Carbon Lenkrad passend für BMW F-Reihe | Rot / Nein Versand | 1690.00 € | 1390.00 € → leer |
| 7542917202016 | PSS GT‐R Carbon Lenkrad passend für BMW F-Reihe | Rot / Ja | 1890.00 € | 1390.00 € → leer |
| 7542917202016 | PSS GT‐R Carbon Lenkrad passend für BMW F-Reihe | Wunschfarbe / Nein Versand | 1790.00 € | 1390.00 € → leer |
| 7542917202016 | PSS GT‐R Carbon Lenkrad passend für BMW F-Reihe | Wunschfarbe / Ja | 1990.00 € | 1390.00 € → leer |
| 7542923231328 | PSS GT‐R Carbon Lenkrad passend für BMW F-Reihe | schwarz / Nein Versand | 1690.00 € | 1390.00 € → leer |
| 7542923231328 | PSS GT‐R Carbon Lenkrad passend für BMW F-Reihe | schwarz / Ja | 1890.00 € | 1390.00 € → leer |
| 7542923231328 | PSS GT‐R Carbon Lenkrad passend für BMW F-Reihe | Wunschfarbe / Nein Versand | 1790.00 € | 1390.00 € → leer |
| 7542923231328 | PSS GT‐R Carbon Lenkrad passend für BMW F-Reihe | Wunschfarbe / Ja | 1990.00 € | 1390.00 € → leer |
| 7542923362400 | PSS GT‐R Carbon Lenkrad passend für BMW F-Reihe | hellblau / Nein Versand | 1690.00 € | 1390.00 € → leer |
| 7542923362400 | PSS GT‐R Carbon Lenkrad passend für BMW F-Reihe | hellblau / Ja | 1890.00 € | 1390.00 € → leer |
| 7542923362400 | PSS GT‐R Carbon Lenkrad passend für BMW F-Reihe | Wunschfarbe / Nein Versand | 1790.00 € | 1390.00 € → leer |
| 7542923362400 | PSS GT‐R Carbon Lenkrad passend für BMW F-Reihe | Wunschfarbe / Ja | 1990.00 € | 1390.00 € → leer |
| 7542946988128 | PSS EVO-X Carbon Lenkrad passend für BMW G-Reihe | Grau / Nein / Nein Versand | 1990.00 € | 1390.00 € → leer |
| 7542946988128 | PSS EVO-X Carbon Lenkrad passend für BMW G-Reihe | Grau / Nein / Ja | 1990.00 € | 1390.00 € → leer |
| 7542946988128 | PSS EVO-X Carbon Lenkrad passend für BMW G-Reihe | Grau / Ja / Nein Versand | 1990.00 € | 1390.00 € → leer |
| 7542946988128 | PSS EVO-X Carbon Lenkrad passend für BMW G-Reihe | Grau / Ja / Ja | 1990.00 € | 1390.00 € → leer |
| 7542946988128 | PSS EVO-X Carbon Lenkrad passend für BMW G-Reihe | Wunschfarbe / Nein / Nein Versand | 2190.00 € | 1390.00 € → leer |
| 7542946988128 | PSS EVO-X Carbon Lenkrad passend für BMW G-Reihe | Wunschfarbe / Nein / Ja | 2190.00 € | 1390.00 € → leer |
| 7542946988128 | PSS EVO-X Carbon Lenkrad passend für BMW G-Reihe | Wunschfarbe / Ja / Nein Versand | 2190.00 € | 1390.00 € → leer |
| 7542946988128 | PSS EVO-X Carbon Lenkrad passend für BMW G-Reihe | Wunschfarbe / Ja / Ja | 2190.00 € | 1390.00 € → leer |
| 7542947119200 | PSS EVO-X Carbon Lenkrad passend für BMW G-Reihe | schwarz / Ja / Ja | 1990.00 € | 1390.00 € → leer |
| 7542947119200 | PSS EVO-X Carbon Lenkrad passend für BMW G-Reihe | schwarz / Ja / Nein Versand | 1990.00 € | 1390.00 € → leer |
| 7542947119200 | PSS EVO-X Carbon Lenkrad passend für BMW G-Reihe | schwarz / Nein / Ja | 1990.00 € | 1390.00 € → leer |
| 7542947119200 | PSS EVO-X Carbon Lenkrad passend für BMW G-Reihe | schwarz / Nein / Nein Versand | 1990.00 € | 1390.00 € → leer |
| 7542947119200 | PSS EVO-X Carbon Lenkrad passend für BMW G-Reihe | Wunschfarbe / Ja / Ja | 2190.00 € | 1390.00 € → leer |
| 7542947119200 | PSS EVO-X Carbon Lenkrad passend für BMW G-Reihe | Wunschfarbe / Ja / Nein Versand | 2190.00 € | 1390.00 € → leer |
| 7542947119200 | PSS EVO-X Carbon Lenkrad passend für BMW G-Reihe | Wunschfarbe / Nein / Ja | 2190.00 € | 1390.00 € → leer |
| 7542947119200 | PSS EVO-X Carbon Lenkrad passend für BMW G-Reihe | Wunschfarbe / Nein / Nein Versand | 2190.00 € | 1390.00 € → leer |
| 7542947676256 | PSS EVO-X Carbon Lenkrad passend für BMW G-Reihe | Rot / Nein / Nein Versand | 1990.00 € | 1390.00 € → leer |
| 7542947676256 | PSS EVO-X Carbon Lenkrad passend für BMW G-Reihe | Rot / Nein / Ja | 1990.00 € | 1390.00 € → leer |
| 7542947676256 | PSS EVO-X Carbon Lenkrad passend für BMW G-Reihe | Rot / Ja / Nein Versand | 1990.00 € | 1390.00 € → leer |
| 7542947676256 | PSS EVO-X Carbon Lenkrad passend für BMW G-Reihe | Rot / Ja / Ja | 1990.00 € | 1390.00 € → leer |
| 7542947676256 | PSS EVO-X Carbon Lenkrad passend für BMW G-Reihe | Wunschfarbe / Nein / Nein Versand | 2190.00 € | 1390.00 € → leer |
| 7542947676256 | PSS EVO-X Carbon Lenkrad passend für BMW G-Reihe | Wunschfarbe / Nein / Ja | 2190.00 € | 1390.00 € → leer |
| 7542947676256 | PSS EVO-X Carbon Lenkrad passend für BMW G-Reihe | Wunschfarbe / Ja / Nein Versand | 2190.00 € | 1390.00 € → leer |
| 7542947676256 | PSS EVO-X Carbon Lenkrad passend für BMW G-Reihe | Wunschfarbe / Ja / Ja | 2190.00 € | 1390.00 € → leer |

## A1 – Versandpflicht korrigiert (2 Varianten)

| Produkt | Variante | Inventory-Item | Versand erforderlich alt → neu |
|---|---|---|---|
| PSS Design Edition passend für Audi RS6 C8 | Rot / Nein (Versand) | 44581380980832 | nein → **ja** |
| PSS Design Edition passend für Audi RS6 C8 | Wunschfarbe / Nein (Versand) | 44581381046368 | nein → **ja** |

## A2 – Hersteller und Produkttyp (79 Produkte inkl. 12 Entwürfe)

Hersteller vorher uneinheitlich, Produkttyp vorher überall leer.

| Produkt-ID | Produkt | Hersteller alt → neu | Produkttyp alt → neu |
|---|---|---|---|
| 7524697800800 | PSS GT‐R Carbon Lenkrad passend für BMW F-Reihe | PS Sattlerei → PS-Sattlerei | leer → Lenkrad |
| 7524701208672 | PSS EVO-X Carbon Lenkrad passend für BMW G-Reihe | PS Sattlerei → PS-Sattlerei | leer → Lenkrad |
| 7524705075296 | PSS Iconic Leder Edition „Royal Blue | Orange“ passend für Mercedes | PS Sattlerei → PS-Sattlerei | leer → Lenkrad |
| 7524706779232 | PSS Classic Carbon Lenkrad – für Mercedes Facelift ab 2018 | PS Sattlerei → PS-Sattlerei | leer → Lenkrad |
| 7525012340832 | PSS EVO-X Carbon Lenkrad – passend für Mercedes Facelift ab 2018 | PS-Sattlerei → PS-Sattlerei | leer → Lenkrad |
| 7525021220960 | PSS EVO-X Carbon Lenkrad – passend für Mercedes Vor Facelift | PS Sattlerei → PS-Sattlerei | leer → Lenkrad |
| 7525031379040 | PSS Classic Black Badge Leather Iconic Edition für Mercedes Facelift ab 2018 | PS Sattlerei → PS-Sattlerei | leer → Lenkrad |
| 7525505138784 | PSS EVO-X Forged Carbon Lenkrad - Iconic Edition passend für Audi RS3 8V / RS4 / RS5 | PS Sattlerei → PS-Sattlerei | leer → Lenkrad |
| 7525506449504 | PSS Evo X Carbon Lenkrad Iconic Edition für Audi R8 / TTRS 4S / TTS | PS Sattlerei → PS-Sattlerei | leer → Lenkrad |
| 7525513298016 | PSS Design Red Classic Edition passend für Mercedes G-Klasse W463A | PSSattlerei → PS-Sattlerei | leer → Interieur-Paket |
| 7536750035040 | PSS Design Edition passend für Audi RS3 8V | PS-Sattlerei → PS-Sattlerei | leer → Interieur-Paket |
| 7536750887008 | PSS Design Edition passend für BMW M3 G-Reihe | PSSattlerei → PS-Sattlerei | leer → Interieur-Paket |
| 7536754262112 | PSS Leder Schlüsselcover passend für Mercedes | PS Sattlerei → PS-Sattlerei | leer → Schlüsselcover |
| 7536783949920 | PSS Leder Schlüsselcover passend für Mercedes | PS Sattlerei → PS-Sattlerei | leer → Schlüsselcover |
| 7536784080992 | PSS Leder Schlüsselcover passend für Mercedes | PS Sattlerei → PS-Sattlerei | leer → Schlüsselcover |
| 7536784375904 | PSS Leder Schlüsselcover passend für Mercedes | PS Sattlerei → PS-Sattlerei | leer → Schlüsselcover |
| 7536784506976 | PSS Leder Schlüsselcover passend für Mercedes | PS Sattlerei → PS-Sattlerei | leer → Schlüsselcover |
| 7536785031264 | PSS Leder Schlüsselcover passend für Mercedes | PS Sattlerei → PS-Sattlerei | leer → Schlüsselcover |
| 7536785522784 | PSS Leder Schlüsselcover passend für BMW | PS-Sattlerei → PS-Sattlerei | leer → Schlüsselcover |
| 7536785555552 | PSS Leder Schlüsselcover passend für BMW | PS Sattlerei → PS-Sattlerei | leer → Schlüsselcover |
| 7536785588320 | PSS Leder Schlüsselcover passend für BMW | PS Sattlerei → PS-Sattlerei | leer → Schlüsselcover |
| 7536802234464 | PSS Leder Schlüsselcover passend für BMW | PS Sattlerei → PS-Sattlerei | leer → Schlüsselcover |
| 7536802332768 | PSS Leder Schlüsselcover passend für BMW | PS Sattlerei → PS-Sattlerei | leer → Schlüsselcover |
| 7536802398304 | PSS Leder Schlüsselcover passend für BMW | PS-Sattlerei → PS-Sattlerei | leer → Schlüsselcover |
| 7536802496608 | PSS Leder Schlüsselcover passend für BMW | PS-Sattlerei → PS-Sattlerei | leer → Schlüsselcover |
| 7536805380192 | PSS Leder Schlüsselcover passend für BMW | PS Sattlerei → PS-Sattlerei | leer → Schlüsselcover |
| 7536805511264 | PSS Leder Schlüsselcover passend für BMW | PS Sattlerei → PS-Sattlerei | leer → Schlüsselcover |
| 7536806002784 | PSS Leder Schlüsselcover passend für BMW | PS Sattlerei → PS-Sattlerei | leer → Schlüsselcover |
| 7536806035552 | PSS Leder Schlüsselcover passend für BMW | PS Sattlerei → PS-Sattlerei | leer → Schlüsselcover |
| 7536806297696 | PSS Leder Schlüsselcover passend für BMW | PS-Sattlerei → PS-Sattlerei | leer → Schlüsselcover |
| 7536816619616 | PSS Leder Schlüsselcover passend für Audi | PS Sattlerei → PS-Sattlerei | leer → Schlüsselcover |
| 7536816750688 | PSS Leder Schlüsselcover passend für Audi | PS Sattlerei → PS-Sattlerei | leer → Schlüsselcover |
| 7536816881760 | PSS Leder Schlüsselcover passend für Audi | PS-Sattlerei → PS-Sattlerei | leer → Schlüsselcover |
| 7536816980064 | PSS Leder Schlüsselcover passend für Audi | PS Sattlerei → PS-Sattlerei | leer → Schlüsselcover |
| 7536826646624 | PSS Nogaro Heritage Edition – Passend für Audi RS6 C8 | PSSattlerei → PS-Sattlerei | leer → Interieur-Paket |
| 7536826843232 | PSS Design Edition passend für Volkswagen T6.1 | PSSattlerei → PS-Sattlerei | leer → Interieur-Paket |
| 7536843456608 | PSS Carbon Interieur Set passend für Audi RSQ8 | PS-Sattlerei → PS-Sattlerei | leer → Interieur-Paket |
| 7536844963936 | PSS Carbon Interieur Set passend für Audi RS6 C8 | PS-Sattlerei → PS-Sattlerei | leer → Interieur-Paket |
| 7542917202016 | PSS GT‐R Carbon Lenkrad passend für BMW F-Reihe | PS Sattlerei → PS-Sattlerei | leer → Lenkrad |
| 7542923231328 | PSS GT‐R Carbon Lenkrad passend für BMW F-Reihe | PS-Sattlerei → PS-Sattlerei | leer → Lenkrad |
| 7542923362400 | PSS GT‐R Carbon Lenkrad passend für BMW F-Reihe | PS Sattlerei → PS-Sattlerei | leer → Lenkrad |
| 7542946988128 | PSS EVO-X Carbon Lenkrad passend für BMW G-Reihe | PS Sattlerei → PS-Sattlerei | leer → Lenkrad |
| 7542947119200 | PSS EVO-X Carbon Lenkrad passend für BMW G-Reihe | PS Sattlerei → PS-Sattlerei | leer → Lenkrad |
| 7542947676256 | PSS EVO-X Carbon Lenkrad passend für BMW G-Reihe | PS Sattlerei → PS-Sattlerei | leer → Lenkrad |
| 7543388471392 | PSS Classic Carbon Lenkrad – für Mercedes Facelift ab 2018 | PS Sattlerei → PS-Sattlerei | leer → Lenkrad |
| 7543388504160 | PSS Classic Carbon Lenkrad – für Mercedes Facelift ab 2018 | PS Sattlerei → PS-Sattlerei | leer → Lenkrad |
| 7543388569696 | PSS Classic Carbon Lenkrad – für Mercedes Facelift ab 2018 | PS Sattlerei → PS-Sattlerei | leer → Lenkrad |
| 7543388766304 | PSS Classic Carbon Lenkrad – für Mercedes Facelift ab 2018 | PS Sattlerei → PS-Sattlerei | leer → Lenkrad |
| 7543391551584 | PSS EVO-X Carbon Lenkrad – passend für Mercedes Facelift ab 2018 | PS-Sattlerei → PS-Sattlerei | leer → Lenkrad |
| 7543391617120 | PSS EVO-X Carbon Lenkrad – passend für Mercedes Facelift ab 2018 | PS-Sattlerei → PS-Sattlerei | leer → Lenkrad |
| 7543391649888 | PSS EVO-X Carbon Lenkrad – passend für Mercedes Facelift ab 2018 | PS-Sattlerei → PS-Sattlerei | leer → Lenkrad |
| 7543392010336 | PSS EVO-X Carbon Lenkrad – passend für Mercedes Facelift ab 2018 | PS-Sattlerei → PS-Sattlerei | leer → Lenkrad |
| 7543393124448 | PSS EVO-X Carbon Lenkrad – passend für Mercedes Vor Facelift | PS Sattlerei → PS-Sattlerei | leer → Lenkrad |
| 7543393157216 | PSS EVO-X Carbon Lenkrad – passend für Mercedes Vor Facelift | PS Sattlerei → PS-Sattlerei | leer → Lenkrad |
| 7543393288288 | PSS EVO-X Carbon Lenkrad – passend für Mercedes Vor Facelift | PS Sattlerei → PS-Sattlerei | leer → Lenkrad |
| 7543393812576 | PSS EVO-X Carbon Lenkrad – passend für Mercedes Vor Facelift (Copy) | PS Sattlerei → PS-Sattlerei | leer → Lenkrad |
| 7543393845344 | PSS EVO-X Carbon Lenkrad – passend für Mercedes Vor Facelift | PS Sattlerei → PS-Sattlerei | leer → Lenkrad |
| 7543398006880 | PSS EVO-X Forged Carbon Lenkrad - Iconic Edition passend für Audi RS3 8V / RS4 / RS5 | PS Sattlerei → PS-Sattlerei | leer → Lenkrad |
| 7543398236256 | PSS EVO-X Forged Carbon Lenkrad - Iconic Edition passend für Audi RS3 8V / RS4 / RS5 | PS Sattlerei → PS-Sattlerei | leer → Lenkrad |
| 7543398563936 | PSS EVO-X Forged Carbon Lenkrad - Iconic Edition passend für Audi RS3 8V / RS4 / RS5 | PS Sattlerei → PS-Sattlerei | leer → Lenkrad |
| 7543398858848 | PSS EVO-X Forged Carbon Lenkrad - Iconic Edition passend für Audi RS3 8V / RS4 / RS5 | PS Sattlerei → PS-Sattlerei | leer → Lenkrad |
| 7544602427488 | PSS Evo X Carbon Lenkrad Iconic Edition für Audi R8 / TTRS 4S / TTS | PS Sattlerei → PS-Sattlerei | leer → Lenkrad |
| 7544602525792 | PSS Evo X Carbon Lenkrad Iconic Edition für Audi R8 / TTRS 4S / TTS | PS Sattlerei → PS-Sattlerei | leer → Lenkrad |
| 7544602591328 | PSS EVO-X Carbon Lenkrad Iconic Edition für Audi R8 / TTRS 4S / TTS | PS Sattlerei → PS-Sattlerei | leer → Lenkrad |
| 7544602624096 | PSS EVO-X Carbon Lenkrad Iconic Edition für Audi R8 / TTRS 4S / TTS | PS Sattlerei → PS-Sattlerei | leer → Lenkrad |
| 7544602689632 | PSS EVO-X Carbon Lenkrad Ipanema Edition für Audi RS6 / RS7 | PS Sattlerei → PS-Sattlerei | leer → Lenkrad |
| 7547762147424 | PSS EVO-X Carbon Lenkrad Daytona Edition für Audi RS6 / RS7 | PS Sattlerei → PS-Sattlerei | leer → Lenkrad |
| 7547767717984 | PSS EVO-X Carbon Lenkrad Iconic Edition für Audi R8 / TTRS 4S / TTS | PS Sattlerei → PS-Sattlerei | leer → Lenkrad |
| 7547778728032 | PSS Digital Performance Wheel – passend für Audi RS6 C8 / RS7 C8 / A6 C8 / A7 C8 | PS Sattlerei → PS-Sattlerei | leer → Lenkrad |
| 7547781087328 | PSS Digitale Lenkradtasten – passend für Audi RS6 C8 / RS7 C8 / A6 C8 / A7 C8 | PS Sattlerei → PS-Sattlerei | leer → Interieur-Teil |
| 7547781709920 | PSS Carbon Interieur Set – passend für Audi RS6 C8 / RS7 C8 / A6 C8 / A7 C8 | PS Sattlerei → PS-Sattlerei | leer → Interieur-Paket |
| 7548023013472 | PSS Black Badge Lenkrad Set – passend für Audi RS6 C8 / RS7 C8 / A6 C8 / A7 C8 | PS Sattlerei → PS-Sattlerei | leer → Lenkrad |
| 7548027666528 | PSS Iconic Manufaktur Edition passend für Audi RS6 C8 | PSSattlerei → PS-Sattlerei | leer → Interieur-Paket |
| 7548051619936 | PSS LED Carbon Schaltwippen – passend für Audi RS6 C8 / RS7 C8 / A6 C8 / A7 C8 | PS Sattlerei → PS-Sattlerei | leer → Interieur-Teil |
| 7548058402912 | PSS Race Display Beifahrerseite – passend für Audi RS6 C8 / RS7 C8 / A6 C8 / A7 C8 | PS Sattlerei → PS-Sattlerei | leer → Interieur-Teil |
| 7548800270432 | PSS EVO-X Digital Carbon Lenkrad Ipanema Edition für Audi RS6 / RS7 | PS Sattlerei → PS-Sattlerei | leer → Lenkrad |
| 7548934979680 | PSS Carbon Schalthebel – passend für Volkswagen Golf 7 Reihe | PS Sattlerei → PS-Sattlerei | leer → Interieur-Teil |
| 7548939173984 | PSS Alcantara Reinigungsset – schonend, effektiv & wie neu | PS Sattlerei → PS-Sattlerei | leer → Pflege |
| 7564657295456 | PSS Design Edition passend für Audi RS6 C8 | PSSattlerei → PS-Sattlerei | leer → Interieur-Paket |

## Nicht über die Schnittstelle möglich – durch Inhaber im Admin

- [ ] Zeitzone: Einstellungen → Allgemein → Zeitzone auf (GMT+01:00) Berlin
- [ ] Gewichte der Varianten (fast alle 0 g) – bitte reale Versandgewichte je Produktgruppe nennen, dann trage ich sie ein

# Paket B – Testlauf (2 Produkte)

| Feld | Alt | Neu |
|---|---|---|
| **Produkt 7536806297696** Titel | PSS Leder Schlüsselcover passend für BMW | PSS Leder Schlüsselcover passend für BMW – Türkis |
| URL | /products/schlusselcover-fur-bmw-autoschlussel-copy-copy-4 | /products/pss-leder-schluesselcover-bmw-tuerkis (alte URL → 301-Weiterleitung, geprüft) |
| SEO-Titel | Nappaleder Schlüsselcover passend für Ihren BMW Autoschlüssel | Leder Schlüsselcover für BMW in Türkis \| PS-Sattlerei |
| SEO-Beschreibung | Nappaleder Schlüsselcover für Ihren BMW Autoschlüssel - in Wunschfarbe - Handgefertigt. Schützen Sie Ihren Schlüssel stilvoll & sicher - jetzt online bestellen | Nappaleder Schlüsselcover für Ihren BMW Autoschlüssel in Türkis oder Wunschfarbe – handgefertigt von PS-Sattlerei. Schützen Sie Ihren Schlüssel stilvoll & sicher. |
| Alt-Texte (2 Bilder) | leer | „PSS Leder Schlüsselcover für BMW Autoschlüssel in Türkis – Bild 1/2“ |
| **Produkt 7543398236256** Titel | PSS EVO-X Forged Carbon Lenkrad - Iconic Edition passend für Audi RS3 8V / RS4 / RS5 | PSS EVO-X Forged Carbon Lenkrad Iconic Edition passend für Audi RS3 8V / RS4 / RS5 – Rot |
| URL | /products/pss-evo-x-forged-carbon-lenkrad-iconic-edition-passend-fur-audi-rs3-8v-rs4-rs5-copy-copy | /products/pss-evo-x-forged-carbon-lenkrad-audi-rs3-8v-rs4-rs5-rot (alte URL → 301-Weiterleitung, geprüft) |
| SEO-Titel | leer | Forged Carbon Lenkrad für Audi RS3 8V, RS4, RS5 – Rot \| PS-Sattlerei |
| SEO-Beschreibung | Carbon Lenkrad Highlights: markanter Motorsport-Look, 12-Uhr-Markierung Kyalami Green, C-Leisten um die Spange lasiert in Kyalami Green - jetzt online bestellen | PSS EVO-X Forged Carbon Lenkrad Iconic Edition in Rot für Audi RS3 8V, RS4 & RS5 – von PS-Sattlerei, auf Wunsch mit Montage in Bergkamen. |
| Alt-Texte (2 Bilder) | leer | „PSS EVO-X Forged Carbon Lenkrad für Audi RS3 8V, RS4, RS5 in Rot – Bild 1/2“ |

# Rechtssicherheit – Runde 1

| Bereich | Änderung | Rückgängig |
|---|---|---|
| Seite „PS-Sattlerei Gewinnspiel Essen Motorshow 2025“ (gid://shopify/Page/103684571232) | veröffentlicht → **ausgeblendet** (Ziehung 09.12.2025 abgelaufen, keine Teilnahmebedingungen) | Seite wieder auf „sichtbar“ |
| Weiterleitungen (8 Stück) | Ziele auf gelöschte/Entwurfs-/falsche Produkte → passende Kollektion: 322300313696, 342188130400, 342640328800 → /collections/audi-lenkrader · 342189211744, 342439329888, 342440444000, 342634102880 → /collections/mercedes-lenkrader · 354916171872 → /collections/audi-interieur-design-pakete | alte Ziele siehe `collections_redirects_themes.json` |
| Theme | Neue **unveröffentlichte** Kopie „Rechtssicher – Entwurf 04.11.2026“ (gid://shopify/OnlineStoreTheme/188199272544) des Live-Themes „Go Live Theme - Concept“ | Kopie löschen; Live-Theme unverändert |
| Theme-Kopie: templates/product.json + product.design-edition.json | Block „Bereits über 2.000+ Kunden“ mit fremden Stockfotos (Leon.png/Kim.png aus anderem Shop) **entfernt** · Hinweis „inkl. MwSt., zzgl. Versandkosten“ (Link Versandseite) unter Titel/Preis · Zahlungs-Icons jetzt automatisch aus aktiven Zahlungsarten statt fest eingebauter SVGs · FAQ Lieferzeit/Versand an tatsächliche Versandeinstellungen angepasst, toter Link „Pflege-Seite“ ersetzt · Design Edition: Tippfehler „Monatgefertig“, Lieferzeit 3–5 → 3–6 Wochen (wie Versandprofil), „weltweit per Spedition“ → „innerhalb Deutschlands, Ausland auf Anfrage“ (Versandprofil Interieur nur DE) | Dateien `theme/*.vorher`; Prüfsummen der hochgeladenen Fassung = `theme/*.nachher` (MD5 e2e6fe30…, c671e1f7…) |
| Rechtstexte (Impressum, Kontakt, Versand) | **nicht geändert** – Connector ohne Berechtigung `write_legal_policies`. Texte zum Einfügen: `docs/ps-sattlerei-rechtstexte-zum-einfuegen.md` | – |
| Seite „PS-Sattlerei Gewinnspiel Essen Motorshow 2025“ | auf Wunsch des Inhabers **endgültig gelöscht**; Inhalt gesichert in `seite_gewinnspiel_geloescht.html`; neue Weiterleitung /pages/gewinnspiel → Startseite | Seite neu anlegen aus Sicherung |
| Theme-Kopie: neuer Baustein `snippets/pss-produktsicherheit.liquid` + Block „pss_safety“ unter dem Warenkorb-Button (beide Produktvorlagen) | Aufklappbarer Block „Produktsicherheit & Herstellerangaben“: Hersteller PS-Sattlerei GmbH mit Anschrift/E-Mail/Telefon (GPSR), Sicherheitshinweis Einbau/Airbag inkl. Montage durch Personal mit Airbag-Sachkunde; bei Lenkrädern bzw. Produkten mit „Lenkrad“ in der Beschreibung zusätzlich Zulassungshinweis (Veredelung, Metallkern original, keine ABE/kein Teilegutachten, Klärung mit TÜV/DEKRA/GTÜ). Vorschau geprüft: Lenkrad ✔ mit Zulassungshinweis, Schlüsselcover ✔ ohne, Design Edition RS6 ✔ mit; keine Liquid-Fehler. Prüfsummen = `theme/*.nachher` | Block aus Vorlage entfernen bzw. Datei löschen |
| Neue Seite „Versand & Zahlung“ (/pages/versand-und-zahlung, gid://shopify/Page/163644047456) + Weiterleitung /policies/shipping-policy → diese Seite (gid://shopify/UrlRedirect/615431340128) | Ersatz für fehlende Versandrichtlinie (Connector ohne Schreibrecht für Richtlinien). Inhalt = tatsächliche Versandeinstellungen. Link „Versandkosten“ im Preishinweis funktioniert damit (geprüft: 301 → 200) | Seite + Weiterleitung löschen |
| Widerrufsbutton | Theme-Kopie: neue Vorlage `templates/page.widerruf.liquid` (MD5 833f7c29…; zweistufig, Kontaktformular) · neue Seite „Vertrag widerrufen“ (gid://shopify/Page/163644375136, /pages/vertrag-widerrufen) · Footer-Menü: + „Versand & Zahlung“, + „Vertrag widerrufen“ · Kundenkonto-Menü: + „Vertrag widerrufen“. Getestet: Seite live erreichbar, Ablauf in Vorschau (iPhone-Emulation) funktioniert, kein Formular abgeschickt | Menüpunkte entfernen, Seite löschen, Vorlage löschen |

## Runde SEO-1 (04.11.2026): SEO-Titel/-Beschreibungen Kollektionen + Korrektur Testlauf

**Vorher-Zustand:**
- Alle 15 Kollektionen: `seo.title` = null, `seo.description` = null. Ausnahme „Alle Lenkräder“ (275328368736): `seo.title` = „Lenkräder“.
- Kollektion „Zubehör“ (279048814688, Handle `leder-schlussel-cover`): `descriptionHtml` = `<p>Beschreibung</p>` (Platzhalter).
- Produkt 7543398236256: SEO-Titel „Forged Carbon Lenkrad für Audi RS3 8V, RS4, RS5 – Rot | PS-Sattlerei“ (68 Zeichen).
- Produkt 7536806297696: SEO-Beschreibung „Nappaleder Schlüsselcover für Ihren BMW Autoschlüssel in Türkis oder Wunschfarbe – handgefertigt von PS-Sattlerei. Schützen Sie Ihren Schlüssel stilvoll & sicher.“ (162 Zeichen).

**Nachher:** Die neuen Werte stehen in `docs/ps-sattlerei-seo-plan.md`, Abschnitt 4 bzw. 8. Zurücksetzen: die alten Werte per `collectionUpdate`/`productUpdate` wieder eintragen.

## Paket B – Rollout (04.11.2026, Freigabe Inhaber im Chat)

Betrifft 63 aktive Produkte (ohne die 2 Testprodukte, Entwürfe unverändert). Je Produkt: Titel, Handle (+301-Weiterleitung über `redirectNewHandle`), SEO-Titel, SEO-Beschreibung und Alt-Texte aller Bilder (162).
- **Alt- und Neuwerte je Produkt:** `paket-b-rollout.json` (Felder `old_title`, `old_handle` → `title`, `handle`, `seoT`, `seoD`, `alts`).
- **Vorher-Zustand:** Handles, SEO und Alt-Texte stehen in `products.json` (Alt-Texte waren leer). Bei farbigen Lenkrädern und Schlüsselcovern trugen Titel und SEO-Titel vor dem Rollout zusätzlich den Farbzusatz „ – Farbe“. Dieser wurde nach der Sicherung von 8:00 Uhr außerhalb dieser Sitzung ergänzt.
- **Weiterleitungen:** Bestehende Weiterleitungen, deren Ziel ein alter Handle war, zeigen jetzt direkt auf den neuen Handle (keine Ketten).

## Kollektionstexte (04.11.2026)
- Neue Beschreibungstexte (`descriptionHtml`) für die Kollektionen Alle Lenkräder, Audi Lenkräder, BMW Lenkräder, Mercedes Lenkräder und Alle Interieur Pakete. **Vorher: alle leer.** Fehlende Fakten wurden nicht als Platzhalter veröffentlicht, sondern neutral formuliert: Fertigungszeit „siehe Produktseite“, keine Liste der Mercedes-Baureihen.
- Zurücksetzen: `descriptionHtml` wieder auf "" setzen.

## Theme-Kopie „SEO-Korrekturen – Entwurf 04.11.2026“ (ID 188204875872, unveröffentlicht)
- Kopie des Live-Themes „Rechtssicher – Entwurf 04.11.2026“ (188199272544).
- `snippets/social-meta-tags.liquid`: strukturierte Unternehmensdaten (JSON-LD AutoPartsStore mit Adresse, Telefon, E-Mail, Logo) nur auf der Startseite angehängt. MD5 vorher 46c927c6… → nachher 530d4f83…. Dateien in `theme-seo/`. Vorschau geprüft: gültiges JSON.
- Offen (manuell im Code-Editor der Kopie): `sections/featured-product.liquid`, Zeilen 256 und 258: `h1` → `h2`.
