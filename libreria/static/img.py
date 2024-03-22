import cv2
import static.assets

class Imagen():
  '''Objeto iterador de imagenes.'''
  def __init__(self, obj):
    #name = n
    self.object = obj

  def __str__(self):
    return f'Imagen {self.object}'
  
  def buscar(self):
    lista = []
    lista.append(self.object)
    return lista
  
libros = Imagen(static.assets).buscar()
libs = []
img = cv2.imread("static/assets/HP1_JKRowling.png", 1)
""""
for i in img:
  print(i)
"""
  # falta solucionar lectura de imagenes
# ya se instalo opencv-python y opencv-python-contrib
print(img)