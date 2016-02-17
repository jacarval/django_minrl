from .models import Url
import random, string

def generate_key(size=6, chars=string.ascii_letters + string.digits):
	return ''.join(random.choice(chars) for _ in range(size))

def add_url(url):
	key = None
	while key is None or key in [entry.key for entry in Url.objects.all()]:
		key = generate_key()
	new_entry = Url(key=key,url=url)
	new_entry.save()
	return key

def get_url(key):
	try:
		url = Url.objects.get(key=key)
	except Url.DoesNotExist:
		return None
	return url