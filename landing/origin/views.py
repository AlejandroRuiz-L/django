from django.shortcuts import render, HttpResponse

# Create your views here.
def inicio(request):
  return render(request, "index.html", {})

def portafolio(request):
  return render(request, 'portafolio.html', {})

def contacto(request):
  return render(request, 'contacto.html', {})

def perfil(request):
  return render(request, 'perfil.html', {})

def consulta(request):
  return HttpResponse('')