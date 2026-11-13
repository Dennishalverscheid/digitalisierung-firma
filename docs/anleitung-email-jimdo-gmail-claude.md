# Anleitung: Jimdo-E-Mails mit Claude verbinden (über Google Workspace / Gmail)

**Ziel:** Claude kann über den Gmail-Connector die Firmenmails lesen, zusammenfassen, sortieren und Antwortentwürfe anlegen. Versenden tust du weiterhin selbst, nach Prüfung.

> Platzhalter in `[ECKIGEN KLAMMERN]` mit deinen Daten ersetzen. Menünamen bei Jimdo können je nach Paket/Version abweichen – im Zweifel Jimdo-Hilfe oder -Support fragen.
> **Passwörter und Zugangsdaten nie in den Chat oder ins Repository schreiben.**

---

## Schritt 0 – Vorab klären (wichtig, entscheidet den Weg)

Google Workspace braucht eine **eigene Domain**, die du bei Google bestätigst. Dafür musst du **DNS-Einträge** deiner Domain `[DEINE-DOMAIN.de]` bearbeiten können (TXT, später ggf. MX).

1. Wo ist die Domain registriert?
   - **Bei Jimdo** (im Paket enthalten) → bei Jimdo nachsehen bzw. beim Support fragen: *„Kann ich für meine Domain eigene TXT- und MX-Einträge setzen?“*
   - **Bei einem anderen Anbieter** (z. B. IONOS, Strato, INWX) → DNS-Einträge dort bearbeiten.
2. Ergebnis notieren: DNS bearbeitbar? **ja / nein**

| DNS bearbeitbar? | Weiter mit |
|---|---|
| **Ja** | **Weg A** – E-Mail komplett zu Google Workspace umziehen (empfohlen, am saubersten) |
| **Nein** | Domain zu einem Anbieter mit DNS-Zugriff umziehen (Jimdo-Website kann bleiben) und dann Weg A – oder bei der Lösung „eigener IMAP-Baustein“ bleiben (siehe Ende) |

**Warum nicht einfach Weiterleitung auf ein kostenloses Gmail?** Technisch ginge das, aber für ein privates Gmail-Konto gibt es keinen Auftragsverarbeitungsvertrag (AVV) – für Firmenmails mit Kundendaten ist das nach DSGVO nicht vertretbar. Und eine Weiterleitung auf ein Workspace-Postfach mit **derselben** Domain funktioniert nicht (die Mail würde wieder bei Jimdo landen). Deshalb: sauberer Umzug.

---

## Weg A – E-Mail zu Google Workspace umziehen

### A1. Google Workspace buchen
1. Auf workspace.google.com ein Konto anlegen, Tarif z. B. **Business Starter** (Preis aktuell auf der Google-Seite prüfen).
2. Als Domain `[DEINE-DOMAIN.de]` angeben („Ich habe bereits eine Domain“).
3. Benutzer anlegen mit **derselben Adresse wie bisher**, z. B. `[name]@[DEINE-DOMAIN.de]`.

### A2. Domain bestätigen (TXT-Eintrag)
1. Google zeigt einen TXT-Eintrag an (beginnt mit `google-site-verification=…`).
2. Diesen bei deinem DNS-Anbieter (Jimdo oder Registrar) als **TXT-Eintrag** für die Domain hinterlegen.
3. In der Google-Admin-Konsole auf „Bestätigen“ klicken (kann bis zu einigen Stunden dauern).

### A3. Alte Mails übernehmen (vor der Umstellung)
1. Admin-Konsole → **Datenmigration** → Quelle: **Anderer IMAP-Server**.
2. IMAP-Server und Port aus deinen Jimdo-Daten eintragen: `[IMAP-SERVER]`, Port `[993]`.
3. Für dein Postfach Benutzername und Passwort angeben (direkt in Googles Formular, nicht im Chat) → Migration starten.

### A4. Mailzustellung umstellen (MX-Einträge)
1. Am besten zu einer ruhigen Zeit (z. B. Freitagabend).
2. Bei deinem DNS-Anbieter die bisherigen **MX-Einträge von Jimdo entfernen** und den MX-Eintrag von Google eintragen (Wert zeigt die Admin-Konsole an, aktuell `smtp.google.com`, Priorität 1).
3. **SPF** (TXT-Eintrag) anpassen: `v=spf1 include:_spf.google.com ~all` – falls es schon einen SPF-Eintrag gibt, nicht doppelt anlegen, sondern ergänzen.
4. In der Admin-Konsole **DKIM** aktivieren (Google erzeugt einen weiteren TXT-Eintrag) und optional **DMARC** setzen.
5. Nach der Umstellung (bis zu 48 Std.) Test: von einem anderen Konto eine Mail an `[name]@[DEINE-DOMAIN.de]` schicken → kommt sie in Gmail an?
6. Danach die Datenmigration (A3) noch einmal laufen lassen, um Mails aus der Umstellungsphase nachzuholen.

### A5. Geräte umstellen
- **Handy:** Jimdo-Konto entfernen, Google-Konto hinzufügen (Gmail-App oder iOS-Mail mit „Google“).
- **Outlook:** Konto als Google-Konto hinzufügen.
- Jimdo-Postfach erst kündigen, wenn alles mindestens 2–4 Wochen sauber läuft.

### A6. Gmail-Connector in Claude verbinden
1. claude.ai → **Einstellungen → Connectors** → **Gmail** verbinden.
2. Mit dem neuen Workspace-Konto anmelden und den Zugriff bestätigen.
3. Test in Claude: *„Lass den E-Mail-Manager meinen Posteingang der letzten 3 Tage durchgehen und fasse zusammen.“*

---

## Datenschutz & Regeln (vor dem Start erledigen)

- [ ] **AVV mit Google** in der Admin-Konsole akzeptieren (Konto → Rechtliches und Compliance → Zusatz zur Datenverarbeitung).
- [ ] **AVV / Datenverarbeitungsbedingungen mit Anthropic** prüfen (Claude-Tarif für Unternehmen; bei Privat-Tarifen nicht für Kundendaten nutzen).
- [ ] Beide Anbieter ins **Verzeichnis von Verarbeitungstätigkeiten** aufnehmen; **Datenschutzerklärung** der Website anpassen (E-Mail-Verarbeitung bei Google, KI-Unterstützung).
- [ ] Regel im Team: **Claude legt nur Entwürfe an – versendet wird nichts ohne Prüfung durch einen Menschen.**
- [ ] Keine Mails an ChatGPT weitergeben, solange kein AVV mit OpenAI besteht.
- [ ] Bei Mitarbeiterpostfächern: Betriebsrat einbeziehen, falls vorhanden (§ 87 Abs. 1 Nr. 6 BetrVG).

---

## Alternative ohne Umzug: eigener IMAP-Baustein

Wenn die Domain/E-Mail bei Jimdo bleiben soll: Claude bekommt über einen kleinen lokalen MCP-Server direkten IMAP/SMTP-Zugriff auf das Jimdo-Postfach (Lesen + Entwürfe). Läuft auf deinem PC mit Claude Desktop/Code, keine Zusatzkosten, Mails bleiben bei Jimdo. Kann bei Bedarf gebaut werden.

---

## Offene Punkte

- [ ] Domain-Registrar und DNS-Zugriff klären (Schritt 0): `[ERGEBNIS]`
- [ ] Jimdo IMAP-Server/Port: `[IMAP-SERVER]` / `[PORT]`
- [ ] Anzahl Postfächer / Nutzer: `[ANZAHL]`
- [ ] Workspace-Tarif und Kosten bestätigt: `[TARIF / PREIS]`
