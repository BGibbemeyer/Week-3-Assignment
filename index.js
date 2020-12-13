
/*Question 1*/
console.log("Question 1");
console.log(" ");
/* 1.	Create an array called ages that contains the following 
values: 3, 9, 23, 64, 2, 8, 28, 93. */

// let ages = [3, 9, 23, 64, 2, 8, 28, 93];

/*part a*/
console.log("part a");

/* a.	Programmatically subtract the value of the first
element in the array from the value in the last element of
the array (do not use numbers to  reference the last element,
find it programmatically, ages[7] – ages[0] is not allowed).
Print the result to the console. */

// let last = ages[ages.length - 1];
// let first = ages[0];

// let difference = last - first;
// console.log(difference);
console.log("90");
console.log(" ");

/*part b*/
console.log("part b");
console.log("4");
/* b.	Add a new age to your array and repeat the step
above to ensure it is dynamic (works for arrays of 
different lengths). */

// let ages = [3, 9, 23, 64, 2, 8, 28, 93, 7];
// let last = ages[ages.length - 1];
// let first = ages[0];

// let difference = last - first;
// console.log(difference);

console.log(" ");

/*part c*/
console.log("part c");

/*c. Use a loop to iterate through the array and calculate the 
average age. Print the result to the console.*/

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

var total = 0;
    for(var i = 0; i < ages.length; i++) {
            total += ages[i];
}
        var avg = total / ages.length;
console.log(avg);

console.log(" ");

/*Question 2*/
console.log("Question 2");
console.log(" ");

/*Create an array called names that contains the following 
values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.*/

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

/*part a*/
console.log("part a");

/*  a.Use a loop to iterate through the array and
 calculate the average number of letters per name.
 Print the result to the console */

var total = 0;
for (var i = 0; i < names.length; i++){
    total+=names[i].length;    
}
var avg = total/names.length;
console.log(avg);

console.log(" ");

/* part b*/
console.log("part b");
console.log("Sam Tommy Tim Sally Buck Bob");

/* b.Use a loop to iterate through the array again and 
concatenate all the names together, separated by spaces,
and print the result to the console. */

// let result = "";
// for (let i = 0; i < names.length; i++) {
//     result += `${names[i]} `;
//   }
// console.log(result);
console.log("");

/*Question #3
3.	How do you access the last element of any array?*/
console.log("Question #3: names[names.length - 1]");
console.log("");

/*Question #4
4.	How do you access the first element of any array?*/
console.log("Question #4: names[0]");
console.log("");

/*Question #5*/
console.log("Question #5");

/*5.	Create a new array called nameLengths. Write a loop to 
iterate over the previously created names array and add the
length of each name to the nameLengths array.*/

let nameLengths = []

for(let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length)
}
console.log("nameLengths array is: " + nameLengths);
console.log("");

/*Question #6*/
console.log("Question #6");

/*6.	Write a loop to iterate over the nameLengths array and calculate
 the sum of all the elements in the array. Print the result to the console.*/

let sum = 0
 for (let i = 0; i < nameLengths.length; i++) {
sum += nameLengths[i]
 //console.log(sum); This makes it print out the sum after every iteration is complete
 }
console.log(sum); //this prints out the total sum after iterations are complete
console.log("");

/*Question #7
7.	Write a function that takes two parameters, word and n, as arguments and returns 
the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, 
I would expect the function to return ‘HelloHelloHello’).*/
console.log("Question #7");

function concatWord (word, n) {
var theWordRepeated = '';
  while (n > 0) {
    theWordRepeated += word;
    n--;
  }
return theWordRepeated;
}

console.log(concatWord("Kuba", 9));

console.log("");

/*Question #8
8.	Write a function that takes two parameters, firstName and lastName, and returns a full
 name (the full name should be the first and the last name separated by a space). */
 console.log("Question #8");

 function createFullName(firstName, lastName) {
     console.log(firstName + " " + lastName);
 }

 createFullName("Brittaini", "Gibbemeyer");
console.log("");

 /*Question #9
 9.	Write a function that takes an array of numbers and returns true if the sum
  of all the numbers in the array is greater than 100.*/
  console.log("Question #9");

  let numArr = [33, 50, 25];
  let happyArr = [10, 20, 30, 40, 50, 60];
  let sadArr = [1, 2, 3, 4, 5, 10, 15, 20];

function trueDat(myArr) {  //This is the dynamic function which can have any array passed through
  let total = 0;

  for (let x = 0; x < myArr.length; x++) { //Accessing and iterating the array
    total += myArr[x];  //Adding the elements of the array
  }
  if (total > 100) { //if sum(total) is more than 100,
      return true;   //returns true(to computer memory)
  } 
  else {            //if not,
    return false;   //returns false(to computer memory)
  }
}

let solution = trueDat(happyArr); //creates a variable that calls back the return valueof the function
console.log(solution);           //and prints the return value to the console

console.log('');

/*Question #10
10.	Write a function that takes an array of numbers and returns the average of all
the elements in the array.*/
console.log("Question #10");

let anArray = [5, 7, 2];

function createArrayAvg (theArray) {
  let arrSum = 0;
  
  for(a = 0; a < theArray.length; a++) {
    arrSum += theArray[a];
  }
  let arrAvg = arrSum / theArray.length;
  console.log(arrAvg);
}

createArrayAvg(anArray);
console.log(anArray);

console.log("");

/*Question #11
11.	Write a function that takes two arrays of numbers and returns true if the
 average of the elements in the first array is greater than the average of the
  elements in the second array.*/
console.log("Question #11");

let thisArr = [5, 7, 2];
let thatArr = [1, 10, 12, 7];

function createArrayAvg (thisArray) {
  let arrSum = 0;
  
  for(a = 0; a < thisArray.length; a++) {
    arrSum += thisArray[a];
  }
  let thisArrAvg = arrSum / thisArray.length;
  return(thisArrAvg);
}

console.log(createArrayAvg(thisArr) > createArrayAvg(thatArr));

console.log("");

/*Question #12
12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and 
a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket
 is greater than 10.50.*/
console.log("Question #12");

let isHotOutside = true
let moneyInPocket = 15.00

function willBuyDrink(isHotOutside, moneyInPocket) {
  
  if (isHotOutside == true && moneyInPocket > 10.50) {
    return("I'll buy a Smoothie")
  }
}
console.log(willBuyDrink(true, 15.00));
console.log("");

 /*Question #13
13.	Create a function of your own that solves a problem. In comments, write what
 the function does and why you created it.*/
console.log("Question #13");

//I created this push function to show how to push and element to the end of any array
let sunArray = ["clouds", "rain",];

function fillArray (a) {
  sunArray.push(a)
}
fillArray("sunshine");

console.log(sunArray);