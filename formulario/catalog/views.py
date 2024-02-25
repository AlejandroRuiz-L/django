from django.shortcuts import render

# Create your views here.
def validar(request):
  return render(request, "formulario.html", [])