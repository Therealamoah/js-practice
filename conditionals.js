//arrays
 let student = ["David" ,"Kayzier" ,"Sam" ,"Isaac"]


 //for loop
for(let b=1; b < student.length; b++)
console.log(student[b]);

//else  if
let correct=20
 if(correct >=80){
   console.log("a")
 }else if (correct >= 70){
    console.log("b")
 }else if(correct >= 60){
    console.log("c")
 }
 else(console.log ("fail"))

//if else
let age = 21
if(age >= 17){
    console.log("discount applied")
}else {
    console.log("no discount")
} 


//odd or even number
let number = 20; 
if(number % 4 === 0) {
    console.log("even" );
} else {
    console.log("odd");
}

//pizza party
let pizzas = 5;
 let people = 6;
let totalSlices = pizzas * 8;
 let slicesPerPerson = Math.floor(totalSlices / people);
 let leftover = totalSlices % people;

 console.log("Each person gets " + slicesPerPerson + " slices.");
console.log("Leftover slices: " + leftover);

//book reading
let book = 30
let pages = 15
if(book % pages ){
    console.log("reads 2 pages a day");
}else{
    console.log("none")
}


//grading system
let score = 35
if(score >= 90){
    console.log("A");
}else if (score >= 80){
    console.log("B");
}else if (score >=70){
    console.log("C");
}else if (score >= 60){
    console.log=("D");
}else{
    console.log("f")
}

//guessing feedback
let secret =7;
if(secret == 7){
    console.log("correct");
}else if (secret >= 15){
    console.log("too high");
}else{
    console.log("too low")
}