"""Draw explanatory project diagrams, not application screenshots.
Run with Python 3 and Pillow. No AI image generation or external API is used.
"""
from pathlib import Path
from math import atan2, cos, sin, pi
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[2]
BG, PANEL, INK, MUTED, ACCENT = '#10131d', '#191e2d', '#f5f6fc', '#b1b9ce', '#a2acff'
LINE, AMBER, RED = '#343d59', '#f5c678', '#ffabb5'
FONT = '/System/Library/Fonts/Avenir Next.ttc'

def font(size):
    return ImageFont.truetype(FONT, size)

def base(title, subtitle):
    im = Image.new('RGB', (1600, 900), BG)
    d = ImageDraw.Draw(im)
    d.text((76, 58), title, font=font(66), fill=INK)
    d.text((80, 154), subtitle, font=font(29), fill=MUTED)
    d.line((80, 222, 1520, 222), fill=LINE, width=2)
    return im, d

def text(d, x, y, value, size=28, color=INK, anchor=None):
    d.text((x, y), value, font=font(size), fill=color, anchor=anchor)

def arrow(d, start, end, color=ACCENT, width=3):
    x, y = end
    d.line((*start, *end), fill=color, width=width)
    angle = atan2(y-start[1], x-start[0])
    left = (x-13*cos(angle-pi/6), y-13*sin(angle-pi/6))
    right = (x-13*cos(angle+pi/6), y-13*sin(angle+pi/6))
    d.line((*left,x,y,*right), fill=color, width=width)

def dashbox(d, box, color):
    x0, y0, x1, y1 = box
    for x in range(x0, x1, 22):
        d.line((x,y0,min(x+12,x1),y0), fill=color, width=3)
        d.line((x,y1,min(x+12,x1),y1), fill=color, width=3)
    for y in range(y0, y1, 22):
        d.line((x0,y,x0,min(y+12,y1)), fill=color, width=3)
        d.line((x1,y,x1,min(y+12,y1)), fill=color, width=3)

im, d = base('IncidentLens', 'From driving footage to evidence a person can review.')
centers = [245, 615, 985, 1355]
for a,b in zip(centers,centers[1:]):
    arrow(d, (a+96,435), (b-98,435), LINE, 4)
for x in centers:
    d.ellipse((x-87,348,x+87,522), fill=PANEL, outline=LINE, width=2)
# Source video icon.
x=centers[0]
d.rounded_rectangle((x-49,400,x+49,470), radius=8, outline=ACCENT, width=4)
d.polygon([(x-10,415),(x-10,455),(x+23,435)], fill=ACCENT)
# A magnifier represents analysis, not a rendered application.
x=centers[1]
d.ellipse((x-43,389,x+21,453), outline=ACCENT, width=4)
d.line((x+12,444,x+48,480), fill=ACCENT, width=5)
# Linked evidence documents.
x=centers[2]
d.rounded_rectangle((x-48,388,x+9,461), radius=7, outline=ACCENT, width=3)
d.rounded_rectangle((x-6,411,x+51,484), radius=7, fill=PANEL, outline=ACCENT, width=3)
d.line((x-35,409,x-10,409),fill=ACCENT,width=3)
d.line((x+6,431,x+39,431),fill=ACCENT,width=3)
d.line((x+6,445,x+31,445),fill=ACCENT,width=3)
# Human approval.
x=centers[3]
d.ellipse((x-34,389,x-2,421), outline=ACCENT, width=3)
d.arc((x-51,433,x+13,483),180,360,fill=ACCENT,width=3)
d.line((x+8,446,x+23,461,x+48,428),fill=ACCENT,width=5)
labels=[('Video clips','Input footage'),('AI observations','Timestamped findings'),('Linked evidence','Traceable context'),('Human review','Approve or correct')]
for x,(title,desc) in zip(centers,labels):
    text(d,x,567,title,31,INK,'mt')
    text(d,x,619,desc,24,MUTED,'mt')
text(d,80,762,'Video + analysis + evidence + reviewer approval',30,ACCENT)
text(d,80,816,'Workflow illustration. Prototype not yet runtime-validated.',23,MUTED)
im.save(ROOT/'public/incidentlens-workflow.png',optimize=True)

im,d=base('Model-Assisted QC', 'Flag missed objects and incorrect class labels inside the CVAT workflow.')
d.rounded_rectangle((80,270,915,735),radius=20,fill=PANEL,outline=LINE,width=2)
text(d,112,294,'Annotation issues',29)
# Abstract sample objects make this a concept diagram, not a fake screenshot.
d.ellipse((160,435,285,560),fill='#3e4a78',outline=ACCENT,width=3)
dashbox(d,(135,410,310,585),AMBER)
text(d,115,631,'Missed object',28,AMBER)
arrow(d,(224,619),(224,591),AMBER,3)
d.polygon([(544,443),(624,400),(704,443),(624,486)],fill='#4c5d91',outline=ACCENT,width=3)
d.polygon([(544,443),(624,486),(624,574),(544,530)],fill='#303c62',outline=ACCENT,width=3)
d.polygon([(624,486),(704,443),(704,530),(624,574)],fill='#3d4b78',outline=ACCENT,width=3)
d.rounded_rectangle((515,378,734,594),radius=4,outline=ACCENT,width=3)
text(d,521,342,'Class B',26,RED)
d.line((519,360,616,360),fill=RED,width=2)
text(d,639,342,'Class A',26,ACCENT)
text(d,500,631,'Incorrect class',28,RED)
arrow(d,(620,620),(620,600),RED,3)
# Integration path is deliberately a diagram, with no CVAT chrome or logo.
text(d,1010,286,'Review loop',29)
for y,label in [(355,'CVAT annotations'),(485,'Model-assisted checks'),(615,'Human review')]:
    d.rounded_rectangle((1010,y,1520,y+82),radius=12,fill=PANEL,outline=LINE,width=2)
    text(d,1265,y+23,label,29,INK,'mt')
for y in [437,567]:
    arrow(d,(1265,y+8),(1265,y+38),ACCENT,3)
text(d,80,775,'Flag candidates. People confirm the correction.',30,ACCENT)
text(d,80,826,'Concept diagram. AI Thuc Chien project integrated into CVAT.',23,MUTED)
im.save(ROOT/'public/assisted-qc-workflow.png',optimize=True)
print('Saved two 1600 x 900 project diagrams.')
