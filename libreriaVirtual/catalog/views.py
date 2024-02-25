from django.shortcuts import render

# Create your views here.
def saludar(request, name, age):
  context={
    'name':name,
    'age':age
  }
  return render(request, 'saludo.html', context)