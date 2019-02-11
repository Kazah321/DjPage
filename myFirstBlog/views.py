from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
	return HttpResponse("Hello, World!")

def myPage(request):
	return render(request, 'myFirstBlog/myPage.html', {})	

def HomeRenderView(request):
	return render(request,'myFirstBlog/home.html',{})

def simpleJs(request):
	return render(request, 'myFirstBlog/simpleJs.html', {})	

def simpleJs2(request):
	return render(request, 'myFirstBlog/simpleJs2.html', {})	

