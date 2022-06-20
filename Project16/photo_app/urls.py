from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import image_upload_view,success,display_uploaded_images

urlpatterns = [
        path('', image_upload_view, name = 'image_upload')

]

if settings.DEBUG:
        urlpatterns += static(settings.MEDIA_URL,
                        document_root=settings.MEDIA_ROOT)