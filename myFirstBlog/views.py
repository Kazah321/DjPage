from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
	return HttpResponse("Hello, World!")

def myPage(request):
	return render(request, 'myFirstBlog/myPage.html', {})	

def HomeRenderView(request):
	return render(request,'myFirstBlog/home.html',{})