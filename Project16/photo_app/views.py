from django.http import HttpResponse
from django.shortcuts import render, redirect
from .forms import *
  
# Create your views here.
def image_upload_view(request):
  
    if request.method == 'POST':
        form = ImageForm(request.POST, request.FILES)
                
  
        if form.is_valid():
            form.save()
            print(form.instance.id)
            image_data = ImageData.objects.get(id=form.instance.id)
            return render(request, 'success_page.html',locals())
    else:
        form = ImageForm()
    return render(request, 'upload_images.html', {'form' : form})
  
