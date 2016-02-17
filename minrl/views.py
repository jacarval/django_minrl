from django.shortcuts import render, HttpResponse
import minrl.api as api

# Create your views here.

def index(request):
 	return render(request, 'minrl/index.html')

def add_url(request):
	return api.add_url(request)

def get_url(request, key):
	return api.get_url(request,key)

