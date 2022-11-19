from django.db import models

# Create your models here.
class Nota(models.Model):
		contenido = models.CharField(max_length=100, blank=True, default='')

		class Meta:
				ordering = ['id']