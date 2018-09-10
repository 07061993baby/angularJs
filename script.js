var app = angular.module('MyApp', []);
app.controller('MyController', function($scope) {

$scope.validate = function(){
	var name=document.form.name.value, email=document.form.email.value, comments=document.form.comments.value; 
var namelocation = document.getElementById("namelocation"), emaillocation = document.getElementById("emaillocation"),commentlocation = document.getElementById("commentlocation")
var status=false;  
if(!name){
namelocation.innerHTML=  
"Please enter your name";  
} else{
namelocation.innerHTML="";  
} 
if(!email){
emaillocation.innerHTML=  
"Please enter your email";  
} else if(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)){
emaillocation.innerHTML="";  
} else{
emaillocation.innerHTML=  
"Please enter correct email";  
}
if(!comments){
	commentlocation.innerHTML="Please enter Characters";
}
else if(comments.length<5){  
commentlocation.innerHTML= "Please enter 5 characters";  
} else {
commentlocation.innerHTML="";  
} 
if(name && /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email) && comments){
	alert('sucessfull!!');
	 $scope.employee = {};
	document.getElementsByClassName('form-button mgtop20')[0].click();
}
}

$scope.cancel = function() {
         $scope.employee = {};
         namelocation.innerHTML="";
         emaillocation.innerHTML="";
         commentlocation.innerHTML= "";  
        };
		
});