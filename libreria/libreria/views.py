from django.shortcuts import render

def index(request):
  return render(request, 'index.html', {})

def login(request):
  return render(request, 'login.html', {})

def biblioteca(request):
  return render(request, 'biblioteca.html', {})

def registro(request):
  return render(request, 'registro.html', {})

def contacto(request):
  return render(request, 'contacto.html', {})

def recuperar(request):
  return render(request, 'recuperar_contraseña.html', {})