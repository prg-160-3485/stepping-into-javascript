// JavaScript Document

function getAverage (a,b,c,d,e){
	
	var average = (a + b + c + d + e) /3; //local variable
	console.log(average);
	return average;
	
}

var myResult = getAverage(2,4,6,8,10); //global variable

function logResult(){

	console.log("the average is " + myResult + " inside the function");

}

logResult();