from pathlib import Path
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas

pdf_path = Path(r"c:\Users\joyce\OneDrive\Área de Trabalho\yy\portfolio-gustavo-lima (6)\portfolio\frontend\public\curriculoprogrammer.pdf")

c = canvas.Canvas(str(pdf_path), pagesize=letter)
c.setFont('Helvetica', 16)
c.drawString(72, 720, 'Currículo Gustavo Lima')
c.drawString(72, 690, 'Desenvolvedor Back-end')
c.save()

print(pdf_path)
print(pdf_path.stat().st_size)
