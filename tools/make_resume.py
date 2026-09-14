"""Regenerate the one-page resume PDF.

    pip install reportlab
    python tools/make_resume.py

Writes assets/Roman-Krzmarzick-Resume.pdf, which resume.html embeds.
Edit the text below, re-run, commit, push.
"""
import os
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "assets", "Roman-Krzmarzick-Resume.pdf")

W, H = letter
M = 66
INK = HexColor("#231b12"); MUT = HexColor("#64553f"); GOLD = HexColor("#b06a12"); LINE = HexColor("#d8c9ae")

c = canvas.Canvas(OUT, pagesize=letter)
c.setTitle("Roman Krzmarzick - Resume"); c.setAuthor("Roman Krzmarzick")
y = H - 70

c.setFillColor(INK); c.setFont("Helvetica-Bold", 25); c.drawString(M, y, "Roman Krzmarzick"); y -= 20
c.setFont("Helvetica", 11.5); c.setFillColor(GOLD)
c.drawString(M, y, "Mechanical Engineering Major"); y -= 16
c.setFont("Helvetica", 9); c.setFillColor(MUT)
c.drawString(M, y, "Bettendorf, Iowa   ·   (563) 370-1673   ·   romankrzmarzick@gmail.com"); y -= 13
c.drawString(M, y, "github.com/romankrzmarzick   ·   linkedin.com/in/roman-krzmarzick-969500424"); y -= 14
c.setStrokeColor(GOLD); c.setLineWidth(1.4); c.line(M, y, W - M, y); y -= 22

def section(title):
    global y
    c.setFillColor(GOLD); c.setFont("Helvetica-Bold", 9.5); c.drawString(M, y, title.upper())
    c.setStrokeColor(LINE); c.setLineWidth(0.7)
    tw = c.stringWidth(title.upper(), "Helvetica-Bold", 9.5)
    c.line(M + tw + 8, y + 2.5, W - M, y + 2.5); y -= 17

def wrap(text, font, size, max_width):
    words, lines, cur = text.split(" "), [], ""
    for w in words:
        trial = (cur + " " + w).strip()
        if c.stringWidth(trial, font, size) <= max_width or not cur: cur = trial
        else: lines.append(cur); cur = w
    if cur: lines.append(cur)
    return lines

def entry(left, right, sub=None, bullets=(), gap=13):
    global y
    c.setFillColor(INK); c.setFont("Helvetica-Bold", 10.5); c.drawString(M, y, left)
    if right:
        c.setFont("Helvetica", 9); c.setFillColor(MUT); c.drawRightString(W - M, y, right)
    y -= 13
    if sub:
        c.setFont("Helvetica-Oblique", 9.5); c.setFillColor(MUT); c.drawString(M, y, sub); y -= 13
    c.setFont("Helvetica", 9.5)
    for b in bullets:
        for i, line in enumerate(wrap(b, "Helvetica", 9.5, (W - M) - (M + 12))):
            if i == 0: c.setFillColor(MUT); c.drawString(M + 2, y, "–")
            c.setFillColor(INK); c.drawString(M + 12, y, line); y -= 12.5
    y -= gap

section("Education")
entry("St. Ambrose University", "Expected 2030", "B.S. Mechanical Engineering  ·  Davenport, Iowa",
      ["Freshman, Fall 2026 – present."])
entry("Pleasant Valley High School", "Graduated 2025", "Bettendorf, Iowa", ["3.6 GPA."], gap=16)

section("Work Experience")
entry("Soccer Referee", "2023 – 2025, 2026 – Present", "US Soccer (USSF)  ·  Quad Cities, IA",
      ["Officiated youth matches with a referee crew over 3 seasons — enforced rules in real time and managed "
       "disputes with coaches and parents on the sideline.",
       "Paused for a year abroad; resumed on returning home."],
      gap=16)

section("Projects  ·  github.com/romankrzmarzick")
entry("RPS Shoot", "Python", None,
      ["Built a Rock-Paper-Scissors-Lizard-Spock card game with 4 AI opponents, from a random "
       "baseline up to a 2nd-order Markov chain that predicts the player's next move from their last two.",
       "Drew every card and icon from pygame shapes, no image files, across a menu, match, and stats screen."])
entry("2D Platformer Game", "Python", None,
      ["Built a platformer with 6 movement mechanics (run, jump, crouch, dash, wall climb, wall jump) "
       "and a timer system that makes the controls feel responsive.",
       "Rendered at 320x180 and scaled 5x for a pixel-art look."])
entry("Tic-tac-toe", "Python", None,
      ["Built a tic-tac-toe game with 2 computer opponents; the harder one follows a 5-step "
       "priority (win, block, center, corner, random).",
       "Designed the board to scale from 3x3 to 5x5 or 7x7 by changing one constant."],
      gap=16)

section("Extracurriculars")
entry("Men's Soccer", "Fall 2026 – Present", "St. Ambrose University",
      ["Train and compete with the team while carrying a full engineering course load."],
      gap=16)

section("Skills")
skills = [("CAD:", "SolidWorks"), ("Programming:", "Python"), ("Tools:", "Git & GitHub")]
col = max(c.stringWidth(l, "Helvetica-Bold", 9.5) for l, _ in skills) + 10
for label, val in skills:
    c.setFont("Helvetica-Bold", 9.5); c.setFillColor(INK); c.drawString(M, y, label)
    c.setFont("Helvetica", 9.5); c.drawString(M + col, y, val); y -= 14

c.save()
print("wrote resume, bottom y =", y)
