from django.db import models

# Create your models here.
class contact(models.Model):
  nombre = models.CharField(max_length=40)
  apellido = models.CharField(max_length=40)
  correo = models.EmailField(max_length=40)
  mensaje = models.TextField()

  def __str__(self):
    return self.nombre
