#!/usr/bin/env python3
"""Erzeugt die Vorschau-Ausmalseiten (SVG) für das JDM-Tuning-Malbuch.

Alle Fahrzeuge sind EIGENE, frei erfundene Entwürfe im Stil der
japanischen Tuning-Szene der 80er/90er/2000er Jahre – ohne Marken,
Logos, Modellnamen oder 1:1-Nachbildungen von Film-/Serienfahrzeugen.

Aufruf:  python3 malbuch.py  ->  schreibt nach ../vorschau/
"""
import math
import os

OUT = os.path.join(os.path.dirname(__file__), "..", "vorschau")
W, H = 850, 1100          # Seitenformat 8,5 x 11 Zoll (100 px = 1 Zoll)
RX, FX = 240, 760         # Radpositionen (Fahrzeug-Koordinaten 0..1000)
WY, WR = 280, 60          # Radmitte y, Reifenradius
SILL = 300                # Unterkante Karosserie
LW = 4                    # Hauptlinienstärke

# --------------------------------------------------------------- Helfer
def arch(cx, r=68):
    dx = math.sqrt(r * r - (SILL - WY) ** 2)
    return f"L {cx+dx:.1f} {SILL} A {r} {r} 0 1 0 {cx-dx:.1f} {SILL} "


def body_bottom(front_x, rear_x):
    return f"L {front_x} {SILL} " + arch(FX) + arch(RX) + f"L {rear_x} {SILL} Z"


def flare(cx, rivets=True):
    """Aufgenietete Kotflügelverbreiterung (Over-Fender)."""
    r = 82
    dx = math.sqrt(r * r - (SILL - WY) ** 2)
    s = f'<path d="M {cx+dx:.1f} {SILL+4} A {r} {r} 0 1 0 {cx-dx:.1f} {SILL+4}" class="b"/>'
    if rivets:
        for a in range(200, 345, 18):
            x = cx + 75 * math.cos(math.radians(a))
            y = WY + 75 * math.sin(math.radians(a))
            s += f'<circle cx="{x:.1f}" cy="{y:.1f}" r="3" class="t"/>'
    return s


def wheel(cx, style):
    s = f'<g class="wheel">'
    s += f'<circle cx="{cx}" cy="{WY}" r="{WR}" class="b fillw"/>'
    s += f'<circle cx="{cx}" cy="{WY}" r="47" class="b"/>'
    # Reifenflanke (Schriftzug-Ring ohne Marke)
    s += f'<circle cx="{cx}" cy="{WY}" r="54" class="t"/>'
    # Bremssattel
    s += (f'<path d="M {cx-30} {WY-25} A 39 39 0 0 1 {cx+5} {WY-39} '
          f'L {cx+3} {WY-30} A 30 30 0 0 0 {cx-24} {WY-19} Z" class="t"/>')
    if style == "spoke5":
        for i in range(5):
            a = math.radians(i * 72 - 90)
            a1, a2 = a - 0.16, a + 0.16
            p = [(cx + 12 * math.cos(a - .4), WY + 12 * math.sin(a - .4)),
                 (cx + 44 * math.cos(a1), WY + 44 * math.sin(a1)),
                 (cx + 44 * math.cos(a2), WY + 44 * math.sin(a2)),
                 (cx + 12 * math.cos(a + .4), WY + 12 * math.sin(a + .4))]
            s += '<path d="M ' + " L ".join(f"{x:.1f} {y:.1f}" for x, y in p) + ' Z" class="m fillw"/>'
    elif style == "spoke6":
        for i in range(6):
            a = math.radians(i * 60)
            for off in (-0.09, 0.09):
                s += (f'<line x1="{cx+11*math.cos(a+off*2):.1f}" y1="{WY+11*math.sin(a+off*2):.1f}" '
                      f'x2="{cx+45*math.cos(a+off):.1f}" y2="{WY+45*math.sin(a+off):.1f}" class="m"/>')
    elif style == "mesh":
        for i in range(10):
            a = math.radians(i * 36)
            b = math.radians(i * 36 + 72)
            s += (f'<line x1="{cx+45*math.cos(a):.1f}" y1="{WY+45*math.sin(a):.1f}" '
                  f'x2="{cx+14*math.cos(b):.1f}" y2="{WY+14*math.sin(b):.1f}" class="t"/>')
            s += (f'<line x1="{cx+45*math.cos(b):.1f}" y1="{WY+45*math.sin(b):.1f}" '
                  f'x2="{cx+14*math.cos(a):.1f}" y2="{WY+14*math.sin(a):.1f}" class="t"/>')
    elif style == "dish":
        s += f'<circle cx="{cx}" cy="{WY}" r="36" class="m"/>'
        s += f'<circle cx="{cx}" cy="{WY}" r="22" class="m"/>'
        for i in range(8):
            a = math.radians(i * 45)
            s += f'<circle cx="{cx+29*math.cos(a):.1f}" cy="{WY+29*math.sin(a):.1f}" r="4" class="t"/>'
    elif style == "steel8":
        for i in range(8):
            a = math.radians(i * 45 + 22.5)
            s += (f'<ellipse cx="{cx+31*math.cos(a):.1f}" cy="{WY+31*math.sin(a):.1f}" rx="9" ry="5" '
                  f'transform="rotate({i*45+22.5} {cx+31*math.cos(a):.1f} {WY+31*math.sin(a):.1f})" class="t"/>')
    s += f'<circle cx="{cx}" cy="{WY}" r="11" class="m fillw"/>'
    for i in range(5):
        a = math.radians(i * 72)
        s += f'<circle cx="{cx+6*math.cos(a):.1f}" cy="{WY+6*math.sin(a):.1f}" r="1.6" class="t"/>'
    return s + "</g>"


def wing(x1, x2, y, posts):
    s = ""
    for px in posts:
        s += f'<path d="M {px-4} {y+10} L {px-6} {y+48} L {px+6} {y+48} L {px+4} {y+10} Z" class="m fillw"/>'
    s += f'<path d="M {x1} {y} Q {(x1+x2)/2} {y-10} {x2} {y+2} L {x2} {y+12} Q {(x1+x2)/2} {y+4} {x1} {y+12} Z" class="b fillw"/>'
    s += f'<path d="M {x1-4} {y-14} L {x1+18} {y-14} L {x1+18} {y+22} L {x1-4} {y+22} Z" class="m fillw"/>'
    return s


# --------------------------------------------------------------- Fahrzeuge
# Jedes Fahrzeug: Karosserie, Fenster, Details, Felgenstil.  Front zeigt nach rechts.
CARS = {
    "kaze": dict(
        name="KAZE", sub="Langschnauzen-Fastback der 90er",
        body=("M 70 300 L 62 262 C 60 240 66 228 80 222 L 120 214 "
              "C 200 190 270 150 340 140 C 400 132 450 132 490 138 "
              "C 530 150 570 180 600 200 C 680 208 780 214 850 228 "
              "C 890 236 912 250 915 268 L 912 296 L 890 300 ") + body_bottom(890, 70),
        window="M 178 212 C 230 192 290 162 345 152 C 400 145 450 146 484 151 C 518 164 546 183 566 200 Z",
        extra=('<line x1="420" y1="146" x2="420" y2="207" class="pillar"/>'
               '<path d="M 590 206 L 598 292 M 392 212 L 388 292" class="m"/>'
               '<rect x="400" y="222" width="26" height="7" rx="3" class="t"/>'
               '<path d="M 120 242 C 300 236 600 232 880 252" class="t"/>'
               '<path d="M 850 232 C 880 238 900 248 908 262 L 880 258 C 868 250 860 242 850 232 Z" class="m"/>'
               '<path d="M 63 246 L 104 238 L 104 256 L 62 262 Z" class="m"/>'
               '<path d="M 578 200 C 572 186 598 180 606 193 Z" class="m fillw"/>'
               '<path d="M 640 238 L 690 236 M 645 248 L 690 246 M 650 258 L 690 256" class="t"/>'
               '<path d="M 870 304 L 930 300 L 928 308 L 870 310 Z" class="m fillw"/>'
               '<path d="M 62 290 L 46 290 L 46 302 L 62 302" class="m"/>'
               '<path d="M 330 286 L 690 286" class="t"/>'
               + wing(48, 190, 166, [100, 150])),
        rims="spoke5", flares=False),

    "ryu": dict(
        name="RYŪ WIDE", sub="Flacher Widebody-Sportler mit Kreiskolben-Sound",
        body=("M 70 296 C 58 270 62 240 90 228 C 170 210 250 170 330 155 "
              "C 400 145 460 146 510 158 C 560 172 600 196 630 208 "
              "C 720 220 810 228 870 250 C 900 262 912 280 906 298 ") + body_bottom(906, 70),
        window="M 200 212 C 250 190 300 166 340 160 C 400 152 455 153 500 164 C 540 178 575 196 596 206 Z",
        extra=('<line x1="430" y1="154" x2="430" y2="208" class="pillar"/>'
               '<path d="M 612 212 L 618 290 M 402 214 L 400 290" class="m"/>'
               '<path d="M 810 232 C 840 236 868 246 884 258 L 852 254 C 838 246 824 240 810 232 Z" class="m"/>'
               '<path d="M 66 252 C 80 246 100 244 116 244 L 112 256 L 64 262 Z" class="m"/>'
               '<path d="M 600 204 C 596 190 622 186 628 198 Z" class="m fillw"/>'
               '<path d="M 680 226 C 720 228 750 232 780 238" class="t"/>'
               '<path d="M 880 300 L 940 298 L 938 306 L 880 309 Z" class="m fillw"/>'
               '<circle cx="64" cy="296" r="8" class="m"/><circle cx="64" cy="296" r="4" class="t"/>'
               + flare(FX) + flare(RX)
               + wing(40, 210, 150, [95, 160])),
        rims="mesh", flares=True),

    "kaminari": dict(
        name="KAMINARI GT", sub="Kantiges Allrad-Coupé, Typ Rennstrecken-Legende",
        body=("M 70 300 L 66 232 L 120 224 L 150 216 C 200 182 260 152 330 146 "
              "L 472 146 C 522 160 570 190 602 206 L 842 214 C 876 216 896 228 900 246 "
              "L 905 296 ") + body_bottom(905, 70),
        window="M 186 214 C 230 186 280 160 335 156 L 468 156 C 510 170 548 190 572 204 Z",
        extra=('<line x1="410" y1="152" x2="410" y2="210" class="pillar"/>'
               '<path d="M 596 210 L 600 292 M 384 214 L 382 292" class="m"/>'
               '<rect x="392" y="224" width="26" height="7" rx="3" class="t"/>'
               '<path d="M 70 246 L 300 238 L 880 236" class="t"/>'
               '<rect x="840" y="228" width="56" height="18" rx="4" class="m"/>'
               '<rect x="68" y="236" width="40" height="16" rx="3" class="m"/>'
               '<path d="M 690 210 L 760 212 L 752 220 L 698 219 Z" class="m"/>'
               '<path d="M 590 204 C 584 190 610 186 616 198 Z" class="m fillw"/>'
               '<path d="M 640 244 L 700 242 L 700 266 L 646 268 Z M 652 250 L 692 249 M 652 258 L 692 257" class="t"/>'
               '<path d="M 880 304 L 935 300 L 933 308 L 880 310 Z" class="m fillw"/>'
               '<path d="M 66 290 L 48 290 L 48 302 L 66 302" class="m"/>'
               + wing(52, 200, 172, [92, 160])),
        rims="spoke6", flares=False),

    "toge": dict(
        name="TŌGE 86", sub="Leichter Bergpass-Hatchback mit Klappscheinwerfern",
        body=("M 82 300 L 76 244 C 77 226 86 212 102 206 C 150 190 220 152 272 142 "
              "L 432 140 C 472 152 520 184 556 204 L 838 220 C 868 222 884 232 888 250 "
              "L 890 296 ") + body_bottom(890, 82),
        window="M 120 206 C 165 190 225 158 275 151 L 428 150 C 465 162 505 186 530 202 Z",
        extra=('<line x1="250" y1="160" x2="250" y2="204" class="pillar"/>'
               '<line x1="398" y1="151" x2="398" y2="204" class="pillar"/>'
               '<path d="M 552 208 L 556 292 M 372 210 L 370 292" class="m"/>'
               '<rect x="380" y="222" width="24" height="7" rx="3" class="t"/>'
               '<path d="M 80 236 L 880 238" class="t"/>'
               # Klappscheinwerfer (ausgeklappt)
               '<path d="M 790 214 L 800 194 L 852 196 L 846 218 Z" class="m fillw"/>'
               '<path d="M 846 198 L 840 216" class="t"/>'
               '<path d="M 76 248 L 112 246 L 112 266 L 78 268 Z" class="m"/>'
               '<path d="M 546 204 C 540 190 566 186 572 198 Z" class="m fillw"/>'
               '<path d="M 870 290 L 900 290 L 900 300 L 870 300" class="m"/>'
               '<path d="M 82 294 L 64 294 L 64 302 L 82 302" class="m"/>'
               # kleine Dachspoiler-Lippe
               '<path d="M 98 206 L 86 200 L 120 196" class="m"/>'),
        rims="steel8", flares=False),

    "shin": dict(
        name="SHIN S", sub="Heckgetriebenes Drift-Coupé",
        body=("M 70 300 L 66 246 C 66 233 72 227 86 225 L 172 218 "
              "C 212 196 262 160 322 150 C 382 142 442 142 492 150 "
              "C 542 166 576 188 606 205 C 690 212 790 218 860 232 "
              "C 890 240 906 255 906 272 L 903 296 ") + body_bottom(903, 70),
        window="M 214 210 C 250 190 290 166 328 160 C 384 152 438 152 486 158 C 522 172 552 188 574 202 Z",
        extra=('<line x1="420" y1="153" x2="420" y2="207" class="pillar"/>'
               '<path d="M 594 210 L 600 292 M 394 212 L 390 292" class="m"/>'
               '<rect x="404" y="222" width="26" height="7" rx="3" class="t"/>'
               '<path d="M 90 244 C 300 238 600 236 890 256" class="t"/>'
               '<path d="M 840 234 C 870 240 892 250 900 262 L 872 260 C 862 252 852 244 840 234 Z" class="m"/>'
               '<path d="M 66 250 L 110 244 L 112 262 L 66 266 Z" class="m"/>'
               '<path d="M 86 225 L 70 214 L 140 214" class="m"/>'
               '<path d="M 582 202 C 576 188 602 182 608 195 Z" class="m fillw"/>'
               '<path d="M 870 304 L 932 300 L 930 308 L 870 310 Z" class="m fillw"/>'
               '<path d="M 66 290 L 48 288 L 48 300 L 66 302" class="m"/>'
               '<path d="M 330 286 L 690 286" class="t"/>'),
        rims="spoke6", flares=False, smoke=True),

    "kaido": dict(
        name="KAIDŌ RACER", sub="Old-School-Straßenkreuzer im Shakotan-Stil",
        body=("M 62 300 L 60 236 L 182 226 C 222 200 252 166 302 158 L 470 156 "
              "C 500 170 540 196 562 210 L 862 220 L 882 228 L 886 296 ") + body_bottom(886, 62),
        window="M 214 220 C 244 196 268 172 306 167 L 466 166 C 492 178 520 196 536 208 Z",
        extra=('<line x1="388" y1="166" x2="388" y2="212" class="pillar"/>'
               '<path d="M 556 214 L 560 290 M 372 216 L 370 290" class="m"/>'
               '<path d="M 62 248 L 880 244" class="t"/>'
               '<circle cx="858" cy="240" r="14" class="m"/><circle cx="858" cy="240" r="8" class="t"/>'
               '<rect x="64" y="234" width="36" height="12" rx="2" class="m"/>'
               # Frontspoiler "Deppa" – weit vorstehende Lippe
               '<path d="M 870 296 L 968 302 L 968 314 L 870 310 Z" class="m fillw"/>'
               # Ölkühler
               '<rect x="880" y="262" width="22" height="26" class="m fillw"/>'
               '<path d="M 880 268 L 902 268 M 880 275 L 902 275 M 880 282 L 902 282" class="t"/>'
               # Takeyari – hochgezogene Auspuffrohre
               '<path d="M 70 294 L 18 150 M 84 294 L 34 150" class="b"/>'
               '<ellipse cx="26" cy="148" rx="12" ry="5" class="m fillw"/>'
               '<path d="M 556 210 C 550 196 576 192 582 204 Z" class="m fillw"/>'
               '<path d="M 160 226 L 160 214 L 200 214" class="m"/>'
               + flare(FX) + flare(RX)),
        rims="dish", flares=True),
}


def car_svg(key, fills=None):
    c = CARS[key]
    f = fills or {}
    body_fill = f.get("body", "#fff")
    win_fill = f.get("window", "#fff")
    s = f'<path d="{c["body"]}" class="b" style="fill:{body_fill}"/>'
    s += f'<path d="{c["window"]}" class="m" style="fill:{win_fill}"/>'
    s += c["extra"]
    s += wheel(RX, c["rims"]) + wheel(FX, c["rims"])
    return s


# --------------------------------------------------------------- Kulissen
def scene_city():
    s = '<circle cx="680" cy="150" r="46" class="m"/>'
    xs = [(40, 330, 110), (150, 250, 90), (240, 380, 120), (360, 210, 100),
          (460, 300, 110), (570, 260, 80), (650, 360, 150)]
    for x, top, w in xs:
        s += f'<rect x="{x}" y="{top}" width="{w}" height="{700-top}" class="m fillw"/>'
        for wy in range(top + 20, 660, 34):
            for wx in range(x + 12, x + w - 16, 24):
                s += f'<rect x="{wx}" y="{wy}" width="12" height="18" class="t"/>'
    # Neon-Schilder (frei erfundene Begriffe)
    s += ('<rect x="262" y="400" width="48" height="190" rx="8" class="b fillw"/>'
          '<text x="286" y="440" class="jp">ド</text><text x="286" y="482" class="jp">リ</text>'
          '<text x="286" y="524" class="jp">フ</text><text x="286" y="566" class="jp">ト</text>')
    s += ('<rect x="478" y="330" width="120" height="56" rx="10" class="b fillw"/>'
          '<text x="538" y="372" class="jp">夜の街</text>')
    s += '<path d="M 0 250 C 200 290 400 270 850 240" class="t"/>'
    return s


def scene_garage():
    s = ""
    for x in (60, 330, 600):
        s += f'<rect x="{x}" y="140" width="60" height="560" class="m fillw"/>'
        s += f'<path d="M {x} 600 L {x+60} 560 M {x} 640 L {x+60} 600 M {x} 680 L {x+60} 640" class="t"/>'
    s += '<rect x="30" y="100" width="790" height="40" class="m fillw"/>'
    for x in (200, 470, 740):
        s += f'<path d="M {x-40} 140 L {x+40} 140 L {x+30} 156 L {x-30} 156 Z" class="m fillw"/>'
        s += f'<path d="M {x-60} 200 L {x-30} 160 M {x+60} 200 L {x+30} 160" class="t"/>'
    s += '<text x="465" y="420" class="jp big">B2</text><rect x="420" y="360" width="90" height="80" rx="10" class="m"/>'
    s += '<path d="M 30 700 L 820 700" class="m"/>'
    return s


def scene_harbor():
    s = '<path d="M 0 560 C 100 550 200 570 300 556" class="t"/>'
    s += ('<path d="M 520 700 L 540 220 L 560 700 M 530 260 L 820 260 L 820 280 L 530 280 '
          'M 560 260 L 700 160 L 720 160 L 720 260 M 760 280 L 760 420" class="m"/>'
          '<rect x="730" y="420" width="60" height="30" class="m fillw"/>')
    for i, (x, y) in enumerate([(40, 600), (190, 600), (40, 500), (340, 600), (190, 500), (115, 400)]):
        s += f'<rect x="{x}" y="{y}" width="150" height="100" class="m fillw"/>'
        for k in range(1, 9):
            s += f'<line x1="{x+k*16}" y1="{y+8}" x2="{x+k*16}" y2="{y+92}" class="t"/>'
    s += '<path d="M 600 700 L 600 640 L 640 600 L 680 640 L 680 700" class="m"/>'
    return s


def scene_touge():
    s = ('<path d="M 0 520 L 120 300 L 200 400 L 330 180 L 470 420 L 560 300 L 700 470 L 850 330" class="m"/>'
         '<path d="M 290 250 L 330 180 L 372 258 L 350 245 L 330 262 L 310 244 Z" class="t"/>'
         '<circle cx="640" cy="140" r="38" class="m"/>')
    for x, y, h in [(40, 600, 120), (110, 620, 100), (720, 600, 130), (790, 625, 95), (180, 640, 80)]:
        s += (f'<path d="M {x} {y-h} L {x-34} {y-h*0.45} L {x-16} {y-h*0.45} L {x-40} {y} L {x+40} {y} '
              f'L {x+16} {y-h*0.45} L {x+34} {y-h*0.45} Z" class="m fillw"/>'
              f'<rect x="{x-6}" y="{y}" width="12" height="20" class="m fillw"/>')
    # Leitplanke
    s += '<path d="M 0 660 L 850 650 M 0 680 L 850 670" class="m"/>'
    for x in range(30, 850, 90):
        s += f'<line x1="{x}" y1="658" x2="{x}" y2="700" class="m"/>'
    # Kurvenschild
    s += ('<rect x="560" y="520" width="70" height="70" rx="6" class="b fillw" transform="rotate(45 595 555)"/>'
          '<path d="M 585 580 L 585 555 C 585 540 605 540 605 525 L 598 532 M 605 525 L 611 533" class="m"/>'
          '<line x1="595" y1="604" x2="595" y2="700" class="m"/>'
          '<text x="250" y="560" class="jp big">峠</text>')
    return s


def scene_drift():
    s = ""
    # Reifenstapel-Barriere
    for x in range(40, 820, 70):
        for k in range(3):
            y = 690 - k * 26
            s += f'<ellipse cx="{x}" cy="{y}" rx="34" ry="13" class="m fillw"/>'
    # Tribüne + Fahnen
    s += '<path d="M 40 420 L 810 420 L 810 600 L 40 600 Z" class="m fillw"/>'
    for y in (460, 500, 540):
        s += f'<line x1="40" y1="{y}" x2="810" y2="{y}" class="t"/>'
    for x in (120, 420, 720):
        s += f'<line x1="{x}" y1="420" x2="{x}" y2="300" class="m"/><path d="M {x} 300 L {x+60} 316 L {x} 334 Z" class="m fillw"/>'
    s += '<rect x="300" y="200" width="250" height="70" rx="10" class="b fillw"/><text x="425" y="250" class="jp">ドリフト</text>'
    return s


def scene_ramen():
    s = ('<path d="M 40 700 L 40 260 L 420 200 L 420 700" class="m fillw"/>'
         '<path d="M 20 270 L 440 196 L 440 226 L 20 300 Z" class="m fillw"/>'
         '<rect x="430" y="330" width="380" height="370" class="m fillw"/>'
         '<rect x="470" y="380" width="120" height="160" class="m"/><rect x="640" y="380" width="120" height="160" class="m"/>')
    # Noren-Vorhang
    for i in range(5):
        x = 90 + i * 60
        s += f'<path d="M {x} 330 L {x+54} 330 L {x+54} 430 L {x} 430 Z" class="m fillw"/>'
    s += '<text x="240" y="400" class="jp">ラーメン</text>'
    # Laternen (Chōchin)
    for x in (110, 230, 350, 520, 700):
        s += (f'<line x1="{x}" y1="150" x2="{x}" y2="232" class="t"/>'
              f'<ellipse cx="{x}" cy="270" rx="30" ry="40" class="m fillw"/>'
              f'<rect x="{x-16}" y="226" width="32" height="8" class="m fillw"/>'
              f'<rect x="{x-16}" y="306" width="32" height="8" class="m fillw"/>'
              f'<path d="M {x-28} 256 Q {x} 262 {x+28} 256 M {x-28} 284 Q {x} 290 {x+28} 284" class="t"/>')
    s += '<path d="M 0 150 Q 425 200 850 150" class="m"/>'
    return s


SCENES = {"city": scene_city, "garage": scene_garage, "harbor": scene_harbor,
          "touge": scene_touge, "drift": scene_drift, "ramen": scene_ramen}

STYLE = """<style>
.b{fill:none;stroke:#000;stroke-width:5;stroke-linejoin:round;stroke-linecap:round}
.m{fill:none;stroke:#000;stroke-width:3.2;stroke-linejoin:round;stroke-linecap:round}
.t{fill:none;stroke:#000;stroke-width:1.8;stroke-linejoin:round;stroke-linecap:round}
.pillar{stroke:#000;stroke-width:9}
.fillw{fill:#fff}
.jp{font-family:'WenQuanYi Zen Hei','Noto Sans CJK JP',sans-serif;font-size:34px;text-anchor:middle;fill:#fff;stroke:#000;stroke-width:1.6}
.big{font-size:60px}
.cov .fillw{fill:#2a2a2a}.cov .t{stroke:#bbb}
.cap{font-family:'Arial Black','Helvetica',sans-serif;font-size:30px;letter-spacing:4px;text-anchor:middle;fill:#fff;stroke:#000;stroke-width:1.6}
.sub{font-family:Helvetica,Arial,sans-serif;font-size:15px;text-anchor:middle;fill:#000}
</style>"""


def smoke(x0, y0):
    s = ""
    for i, (dx, dy, r) in enumerate([(0, 0, 40), (-50, -20, 52), (-110, -10, 60), (-60, -70, 44),
                                       (-150, -60, 56), (-30, -40, 30), (-190, 0, 46)]):
        s += f'<circle cx="{x0+dx}" cy="{y0+dy}" r="{r}" class="m fillw"/>'
    return s


def page(key, scene):
    c = CARS[key]
    sc = 0.78                      # Fahrzeug passt mit Flügel/Spoiler in den Rahmen
    tx = 425 - 493 * sc
    ty = 885 - 340 * sc
    s = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="8.5in" height="11in">{STYLE}'
         f'<rect width="{W}" height="{H}" fill="#fff"/>')
    s += '<defs><clipPath id="inn"><rect x="30" y="30" width="790" height="1040" rx="18"/></clipPath></defs><g clip-path="url(#inn)">'
    s += SCENES[scene]()
    # Straße
    s += '<path d="M 30 700 L 820 700" class="m"/>'
    for x in range(40, 820, 120):
        s += f'<path d="M {x} 950 L {x+70} 950 L {x+66} 962 L {x-4} 962 Z" class="m fillw"/>'
    if c.get("smoke"):
        s += smoke(tx + RX * sc - 30, ty + 250 * sc)
    s += '</g>'
    s += f'<g transform="translate({tx} {ty}) scale({sc})">{car_svg(key)}</g>'
    s += f'<text x="{W/2}" y="1012" class="cap">{c["name"]}</text>'
    s += f'<text x="{W/2}" y="1038" class="sub">{c["sub"]}</text>'
    # Rahmen
    s += f'<rect x="30" y="30" width="{W-60}" height="{H-60}" rx="18" class="b"/>'
    return s + "</svg>"


def cover():
    s = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="8.5in" height="11in">{STYLE}'
         '<defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">'
         '<stop offset="0" stop-color="#0b0620"/><stop offset=".6" stop-color="#3a0d5c"/><stop offset="1" stop-color="#e2337d"/></linearGradient>'
         '<linearGradient id="paint" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ff5a1f"/><stop offset="1" stop-color="#ffb21f"/></linearGradient>'
         '<filter id="glow"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>'
         f'<rect width="{W}" height="{H}" fill="url(#sky)"/>')
    # Skyline-Silhouette
    for x, top, w in [(0, 520, 90), (80, 440, 80), (160, 560, 70), (230, 400, 100), (330, 500, 80),
                      (410, 380, 90), (500, 470, 70), (570, 420, 110), (680, 520, 70), (750, 450, 100)]:
        s += f'<rect x="{x}" y="{top}" width="{w}" height="{760-top}" fill="#140a2a"/>'
        for wy in range(top + 18, 740, 30):
            for wx in range(x + 10, x + w - 12, 20):
                if (wx * 7 + wy * 3) % 5 == 0:
                    s += f'<rect x="{wx}" y="{wy}" width="8" height="12" fill="#ffd36b" opacity=".8"/>'
    s += '<rect x="0" y="760" width="850" height="340" fill="#120c1c"/>'
    s += '<path d="M 0 860 L 850 860" stroke="#ff3fa4" stroke-width="3" filter="url(#glow)"/>'
    s += ('<text x="425" y="140" text-anchor="middle" font-family="Arial Black,Helvetica,sans-serif" font-size="88" '
          'fill="#fff" stroke="#00e5ff" stroke-width="3" filter="url(#glow)" letter-spacing="2">NACHT-DRIFT</text>'
          '<text x="425" y="200" text-anchor="middle" font-family="Helvetica,Arial,sans-serif" font-size="30" fill="#ffd36b" letter-spacing="6">JDM TUNING MALBUCH</text>'
          '<text x="425" y="246" text-anchor="middle" font-family="Helvetica,Arial,sans-serif" font-size="20" fill="#fff">[Anzahl] Motive · Legendäre Street-Racer zum Ausmalen</text>'
          '<text x="425" y="330" class="jp" style="fill:#ff3fa4;stroke:none;font-size:46px" filter="url(#glow)">夜のドリフト</text>')
    s += smoke(25 + RX * 0.8 - 20, 640 + 250 * 0.8).replace('class="m fillw"', 'fill="#ffffff" fill-opacity=".18" stroke="none"')
    car = car_svg("ryu", {"body": "url(#paint)", "window": "#1b2b48"})
    s += f'<g class="cov" transform="translate(25 640) scale(0.8)">{car}</g>'
    s += ('<text x="425" y="1040" text-anchor="middle" font-family="Helvetica,Arial,sans-serif" font-size="18" fill="#bbb">'
          'Für Teens &amp; Erwachsene · Einseitig bedruckt · [Autor/Verlag]</text>')
    return s + "</svg>"


PAGES = [("kaze", "city"), ("ryu", "garage"), ("kaminari", "harbor"),
         ("toge", "touge"), ("shin", "drift"), ("kaido", "ramen")]

if __name__ == "__main__":
    os.makedirs(OUT, exist_ok=True)
    with open(os.path.join(OUT, "00-cover.svg"), "w") as fh:
        fh.write(cover())
    for i, (k, sc) in enumerate(PAGES, 1):
        with open(os.path.join(OUT, f"{i:02d}-{k}.svg"), "w") as fh:
            fh.write(page(k, sc))
    print("ok")
