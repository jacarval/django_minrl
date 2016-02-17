from django.shortcuts import HttpResponse, redirect
from django.http import HttpResponseBadRequest, HttpResponseServerError, HttpResponseNotFound, JsonResponse
import minrl.service as service
import json

def add_url(request):
	if request.method != 'POST':
		return HttpResponseBadRequest()

	print request.POST
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

	url = service.get_url(key)
	
	if url is not None:
		return JsonResponse({'key':key,'url':url.url})
	else:
		return HttpResponseNotFound()