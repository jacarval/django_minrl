from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    # Examples:
    # url(r'^$', 'django_url.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^', include('minrl.urls', namespace="minrl")),
    url(r'^admin/', include(admin.site.urls)),
]
