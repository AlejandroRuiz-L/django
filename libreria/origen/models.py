from django.db import models
from datetime import date

# Create your models here.
class post(models.Model):
  title = models.CharField(max_length=40)
  body = models.TextField()
  date = models.DateField(default=date.today)