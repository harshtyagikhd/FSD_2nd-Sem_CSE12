function calculateResult(){
let n = parseInt(document.getElementById("subjects").value);

if(n <= 0 || document.getElementById("subjects").value === ""){
alert("Please enter a valid number of subjects");
return;
}

let total = 0;

for(let i=1;i<=n;i++){
let input = prompt("Enter marks for Subject " + i + " (0-100)");

if(input === null || input === ""){
alert("Invalid marks entered!");
return;
}

let marks = parseFloat(input);

if(marks < 0 || marks > 100){
alert("Marks should be between 0 and 100");
return;
}

total = total + marks;
}

let average = total / n;
let grade;
let result;

if(average >= 90){
grade = "A+";
}
else if(average >= 75){
grade = "A";
}
else if(average >= 60){
grade = "B";
}
else if(average >= 50){
grade = "C";
}
else{
grade = "F";
}

if(average >= 40){
result = "PASS";
}
else{
result = "FAIL";
}

document.getElementById("result").innerHTML =
"Total Marks: " + total + "<br>" +
"Average Marks: " + average.toFixed(2) + "<br>" +
"Grade: " + grade + "<br>" +
"Result: " + result;
}