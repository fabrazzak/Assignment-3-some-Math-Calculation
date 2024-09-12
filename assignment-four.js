

function calculateTax(income, expenses) {

if((income>=0 && expenses >= 0) && income >=expenses ){

const totalDifference=income-expenses;

const tax= totalDifference * (20/100);

return(tax) ;

}else{

return "Invalid Input"

}

}

function sendNotification(email) {

const emailCheck =email.indexOf("@");

if(emailCheck !== -1){

const emailArray= email.split("@")

const userName=emailArray[0];

const domainName=emailArray[1];

const notification= userName + ' sent you an email from ' + domainName;

return notification;}

else{

return("Invalid Email")

}

}

function checkDigitsInName(name) {

if(typeof(name) == "string"){

for (const char of name ){

if(!isNaN(char) && char !== " "){

return true

}

}

return false

}

else{

return " Invalid Input"

}

}

function calculateFinalScore(obj) {

const name = obj.name;

const testScore = obj.testScore;

const schoolGrade= obj.schoolGrade;

const isFFamily=obj.isFFamily;

if(typeof(obj) == "object" ){

if( testScore <= 50 && schoolGrade <=30 ) {

let total = testScore + schoolGrade;

if (total >= 60 && isFFamily == true){

return true

}

else{

return false

}

}

else{

return("this is invalid . score or Grade");

}

}

else{

return "this is invalid "

}

}

function waitingTime(waitTimes , serialNumber) {

if(Array.isArray(waitTimes) == true && typeof(serialNumber) == "number"){

const interviewer=(serialNumber-1) - waitTimes.length;

let interviewTotalTime = 0;

for (const time of waitTimes){

interviewTotalTime += time;

}

const interviewAverageTime= Math.round(interviewTotalTime / waitTimes.length);

const totalWaitingTime= interviewAverageTime * interviewer

return totalWaitingTime

}

else{

return "this is invalid "

}

}