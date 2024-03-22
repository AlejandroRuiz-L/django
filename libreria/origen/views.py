from django.shortcuts import render, HttpResponse
from origen.models import *
from static.img import libros as lb, img

# Create your views here.
def consultar(request):
  id = 1
  #falta consultar por id
  authors = Author.objects.all()
  libros = []
  query = Book.objects.all()
  for libro in query:
    libros.append(libro)
  return render(request, 'books/consulta.html', {'libros':libros, 'authors':authors, 'lb':lb, 'img':img})