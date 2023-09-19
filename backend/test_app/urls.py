from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import UserViewSet

router = DefaultRouter()

router.register(r"test", UserViewSet, basename="test")

urlpatterns = []
urlpatterns += router.urls

app_name = "test_app"
