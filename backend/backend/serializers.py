from django.contrib.auth.models import User, Group
from rest_framework import serializers
from backend.models import Nota

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


class NotaSerializer(serializers.Serializer):
    id = serializers.IntegerField(required=False)
    contenido = serializers.CharField(required=False, allow_blank=True, max_length=100)

    def create(self, validated_data):
        return Nota.objects.create(**validated_data)