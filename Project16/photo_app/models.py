from django.db import models

# Create your models here.

# models.py
class ImageData(models.Model):
    name = models.CharField(max_length=50)
    selected_image = models.ImageField(upload_to='images/')