from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        # extra_kwargs = {'password': {'write_only': True, 'required': True}}
    
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user

# class UserRegisterSerializer(serializers.ModelSerializer):

#     email = serializers.EmailField(required=True)
#     username = serializers.CharField(required=True)
#     password = serializers.CharField(min_length=8, write_only=True)

#     class Meta:
#         model = settings.AUTH_USER_MODEL
#         fields = ('email', 'username', 'first_name')
#         extra_kwargs = {'password': {'write_only': True}}