from django.shortcuts import render, redirect
from django.http import HttpResponseBadRequest, HttpResponseServerError, HttpResponseNotFound, JsonResponse
import minrl.service as service
import json

# Create your views here.

def index(request):
 	return render(request, 'minrl/index.html')

def add_url(request):
	if request.method != 'POST':
		return HttpResponseBadRequest()

	url = request.POST.get('url')
	
	if url is None or url == "":
		return HttpResponseBadRequest()

	key = service.add_url(url)

	if key is not None:
		return JsonResponse({'key':key,'url':url})
	else:
		return HttpResponseServerError()

def get_url(request, key): 
	if request.method != 'GET':
		return HttpResponseBadRequest()

	if key is None or key == "":
		return HttpResponseBadRequest()

	resource = service.get_url(key)
	
	if resource is not None:
		return redirect(resource.url)
	else:
		return HttpResponseNotFound()

