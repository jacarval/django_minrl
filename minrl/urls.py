from django.conf.urls import url

from . import views

urlpatterns = [
	url(r'^$', views.index, name='index'),
	url(r'^add/$', views.add_url, name='add_url'),
	url(r'^(?P<key>[0-9a-zA-Z]+)$', views.get_url, name='get_url'),
]