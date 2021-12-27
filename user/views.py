from django.shortcuts import render
from rest_framework import viewsets
from django.contrib.auth.models import User
# Create your views here.
from django.http import HttpResponse
from api.serializers import UserSerializer

# def index(request):
#     # return HttpResponse("Hello, world. You're at the polls index.")
#      return render(request, '../staticfiles/index.html')

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer