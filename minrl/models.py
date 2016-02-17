from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Url(models.Model):
	key = models.CharField(max_length=10, null=False, unique=True)
	url = models.CharField(max_length=1000)

	def __str__(self):
		return self.key + " | " + self.url