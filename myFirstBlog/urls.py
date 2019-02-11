from django.urls import path,re_path

from . import views

urlpatterns =[
	path('index',views.index,name="index"),
	path('myPage',views.myPage,name="myPage"),
	path('simpleJs',views.simpleJs,name="simpleJs"),
    path('simpleJs2',views.simpleJs2,name="simpleJs2"),
]
