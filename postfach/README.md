# Postfach – E-Mail-Manager (nur lesen + Entwürfe)

Der **E-Mail-Manager** (`.claude/agents/office-email-manager.md`) liest das Firmenpostfach und bereitet **Entwürfe** vor.
**Er sendet nie selbst.** Du prüfst die Entwürfe im Mailprogramm (Ordner „Entwürfe“) und schickst sie selbst ab.

## So ist das abgesichert (drei Ebenen)
1. **Postfach-Server ohne Sendefunktion** – `tools/postfach-mcp/server.mjs` kann nur: Ordner auflisten, Mails auflisten/suchen, Mails lesen, Entwurf ablegen. Kein SMTP, kein Antworten/Weiterleiten, kein Löschen/Verschieben. Ordner werden schreibgeschützt geöffnet; gelesene Mails bleiben **ungelesen**.
2. **Agent mit fester Werkzeug-Liste** – der E-Mail-Manager hat nur Dateien lesen/schreiben und die vier Postfach-Werkzeuge. Keine Shell, kein Internetzugriff, keine anderen Mail-Connectoren.
3. **Sende-Sperre** – `.claude/hooks/sende-sperre.mjs` blockiert im ganzen Projekt jedes Mail-Werkzeug mit „send/reply/forward“ im Namen (z. B. von Gmail-/Outlook-Connectoren) und Shell-Befehle, die direkt Mails verschicken.

## Ablauf
```
Posteingang ──(lesen)──> E-Mail-Manager ──> Übersicht + To-dos (im Chat)
                                   └──> Entwurf im Ordner „Entwürfe“ ──> du prüfst ──> du sendest
```
Typische Aufträge:
- „Lass den E-Mail-Manager den Posteingang durchgehen.“ → priorisierte Übersicht, To-dos, Entwürfe für alles, was eine Antwort braucht
- „Entwirf eine Antwort auf die Mail von Frau X zum Angebot.“
- „Welche Mails seit Montag warten noch auf Antwort?“

Platzhalter `[BITTE PRÜFEN: …]` im Entwurf heißen: Hier fehlt eine Angabe (Preis, Termin, Zusage) – vor dem Senden ergänzen.

## Inhalt dieses Ordners
| Datei | Zweck |
|---|---|
| `firmenton.md` | Ton, Anrede, Grußformel, **Signatur mit Pflichtangaben** – bitte einmal ausfüllen |
| `zustaendigkeiten.md` | Wer intern wofür zuständig ist (für Weiterleitungs-Vorschläge) |
| `vorlagen/` | Textbausteine für wiederkehrende Fälle |
| `entwuerfe/` | Lokale Entwürfe, falls kein Postfach verbunden ist (wird **nicht** ins Repository übertragen) |

## Einrichtung (einmalig)
Zugangsdaten **nur als Umgebungsvariablen/Secrets** der Claude-Code-Umgebung hinterlegen – nie in Dateien im Repository:

| Variable | Beispiel | Pflicht |
|---|---|---|
| `EMAIL_IMAP_HOST` | `imap.gmail.com` | ja |
| `EMAIL_IMAP_PORT` | `993` | nein (Standard 993, TLS) |
| `EMAIL_USER` | `info@firma.de` | ja |
| `EMAIL_PASSWORD` | App-Passwort | ja |
| `EMAIL_FROM` | `Firma GmbH <info@firma.de>` | nein (sonst `EMAIL_USER`) |
| `EMAIL_DRAFTS_FOLDER` | `Entwürfe` | nein (wird automatisch erkannt) |

Außerdem muss die Umgebung den IMAP-Server über Port 993 erreichen dürfen (Netzwerk-Freigabe).

IMAP-Server gängiger Anbieter:
| Anbieter | Server | Hinweis |
|---|---|---|
| Google Workspace / Gmail | `imap.gmail.com` | 2-Faktor + **App-Passwort** nötig |
| IONOS | `imap.ionos.de` | Postfach-Passwort |
| Strato | `imap.strato.de` | Postfach-Passwort |
| GMX / web.de | `imap.gmx.net` / `imap.web.de` | IMAP vorher in den Einstellungen aktivieren |
| T-Online | `secureimap.t-online.de` | E-Mail-Passwort (nicht Login-Passwort) |
| Microsoft 365 / Outlook | – | Microsoft erlaubt kein IMAP mit Passwort mehr → stattdessen Outlook-Connector in claude.ai; dann dessen Lese- und Entwurfs-Werkzeuge in `tools:` des Agenten ergänzen (Senden blockiert die Sende-Sperre) |

Tipp: Wenn möglich ein **eigenes App-Passwort nur für Claude** anlegen – dann lässt sich der Zugang jederzeit einzeln widerrufen.

## Datenschutz
- Mails werden nur in der laufenden Sitzung verarbeitet; lokale Entwürfe in `entwuerfe/` sind per `.gitignore` vom Repository ausgeschlossen.
- Für die Verarbeitung von Kunden-/Mitarbeiterdaten durch Claude sollte ein Auftragsverarbeitungsvertrag (Art. 28 DSGVO) mit Anthropic vorliegen – [BITTE PRÜFEN: AVV vorhanden?].
- Mailinhalte nicht an ChatGPT/Codex weitergeben (siehe `CLAUDE.md`).
