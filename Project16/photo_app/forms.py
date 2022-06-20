from django import forms
from .models import *
  
class ImageForm(forms.ModelForm):
  
    class Meta:
        model = ImageData
        fields = ['name', 'selected_image']
    