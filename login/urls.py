from django.urls import path, include
from django.views.generic.base import TemplateView
from . import views

urlpatterns = [
    # ex: /polls/
    path('', views.index, name='index'),
    path('', TemplateView.as_view(template_name = 'home.html'), name = 'home'),
    path('social-auth/', include('social_django.urls', namespace='social'))
    # ex: /polls/5/
#     path('<int:question_id>/', views.detail, name='detail'),
#     # ex: /polls/5/results/
#     path('<int:question_id>/results/', views.results, name='results'),
#     # ex: /polls/5/vote/
#     path('<int:question_id>/vote/', views.vote, name='vote'),
]