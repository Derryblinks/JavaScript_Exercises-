import {getArea, getPerimeter} from "./Math_util"
console.log(getArea(5,3));
console.log(getPerimeter(4,6));
// let username;
// document.getElementById("myButton").onclick = function(){
//     username = document.getElementById("myText").value;
//     console.log(username);
//     document.getElementById("myLable").innerHTML = "Hello "+ username;
// }

// let y;
// let x;
// let z;

// y = Number(y);
// x = String(x);
// z = Boolean(z)


// console.log(y, typeof y);
// console.log(x, typeof x);
// console.log(z, typeof z);

// let pi = 3.14157;
// let radius = window.prompt("Enter the radius of the Circle: ");
//  radius = Number(radius);
//  let circumference;
//  circumference = pi * radius * 2;
//  circumference = Math.round(circumference);

// console.log("the circumference of the circle is :", circumference);




//this code is to calculate the value of the hypotenus of a triangle


// let Oposite;
// let Hypotenus;
// let Adjacent = window.prompt("Enter the Value for the adjacent: ");
// Adjacent= Number(Adjacent);

// //this calculates the value for the hypotenus
// Oposite = window.prompt("Enter the value for the Opposite: ");
// Oposite = Number(Oposite);
// Oposite = Math.pow(Oposite, 2) ;
// Adjacent =  Math.pow(Adjacent, 2);
// Hypotenus = Math.sqrt(Oposite + Adjacent);
// Hypotenus = Math.round(Hypotenus)
// console.log(Hypotenus);


// let count= 0;

//     document.getElementById("decreaseBtn").onclick = function(){
//     count-=1;
//     document.getElementById("countLable").innerHTML = count;
// }

// document.getElementById("resetBtn").onclick = function(){
//     count=0;
//     document.getElementById("countLable").innerHTML = count;
// }

// document.getElementById("increaseBtn").onclick = function(){
//     count+=1;
//     document.getElementById("countLable").innerHTML = count;
// }


/*

let x = Math.random();
console.log(x);



let fullName = "snoop Dogg"
let firstName;
let lastName;


firstName = fullName.slice(0,fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ")+1);

console.log(firstName);
console.log(lastName);


*/

// let person = {name:"Derrick" , age: 20}

//  person.name ="John";
// let something = 'age';
// person[something] = 30;
// console.log(something);
// console.log(person);


// function greet(name1, name2){
//    console.log("Hello "+ name1 + name2)
// }

/*
function square(number){
    return number*number;
    console.log("this is " +number + " the square of the number you entered")
}
console.log(square(2));


//Constructor sample

function Cirlce(radius){
    this.radius = "radius";
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Cirlce;


//A small javaScript code to check whether a person has susbcribed or not

const blinks = document.getElementById("mycheckbox");
document.getElementById("mysubmission").onclick = function(){
    if(blinks.checked){
        console.log("Thank you for subscribing to our channel");
    }

    else{
            console.log("Hello please you haven't subscribed yet . Kindly do so to be awarded for this hackthon program")
    }
}


// for (i=10; i<20 ; i++){
//     console.log(i +"Happy new year")
// }


//the code below is to calculate the value of a rectangle
/*
let width;
let height;
let area;

width = window.prompt("Enter the value of width");
height = window.prompt("Enter the value of height");

area = getArea(width, height);
console.log("the value of the area is " , area)

function getArea(width, height){
    let result = width*height;
    console.log(result)
}
*/


/*

let adult = checkAge(21);
console.log(adult);

function checkAge(age){
    if(age >= 18){
        console.log("Indeed he's an adult");
    }
    else{
        console.log("No he's not an adult");
    }
}

checkAge(21);

*/

/*
let numbers = [1,2,3,4,5];
let squares = numbers.map(square);
squares.forEach(print);

function square(element){
    return Math.pow(element, 2);
}

function print(element){
    console.log(element);
}

*/

/*
let fruits = ["apple" , "mango", "Banana"];
let Vegetables = ["Carrot", "Onion", "SpringOnion"];
let meals = ["fufu", "Jollof", "friedRice"];

let consumable_Meals =[fruits, Vegetables, meals];

consumable_Meals[0][0]= "Yellow Apples"
for (let list of consumable_Meals){
    for (item of list){
        console.log(item);
    };
};
*/

// let numbers = [1,2,3,4,5,6];
// let high = Math.max(...numbers);
// console.log(high);

// let class1= ["Owusu", "Dorinda" , "Rahina"];
// let class2 = ["Sammy" , "Irene" , "Justice"]
//  class1.push(...class2);
//  console.log(...class1);



//  let a = 10
//  let b = 20 
//  let c  = 30 
 
// console.log(sum(a,b,c,));

// function sum(...numbers){
//     let total = 0;
//     for (let number of numbers){
//         total += number;
//     }
//     return total;

// };

// sum( 1, 3, displayConsole)

// function sum(x,y, callBack){
//     let result = x+y;
//     callBack(result);
// }

// function displayConsole(output){
//     console.log(output);
// }


// let total = sum(2, 3);
// displayConsole(total)

// function sum(x, y){
//     let result = x+ y;
//     return result;
// }

// function displayConsole(output){
//     console.log(output);
// }

// let students = ["spongebob", "patrick", "suqidward"];
// students.forEach(capitalize);
// students.forEach(print);
// function capitalize(element, index, array){
//     array[index] = element[0].toUpperCase() + element.substring(1);

// }
// function print(element){
//     console.log(element);
// }
// console.log(students[0]);


//----------------------------------------------------------------------------------------------
//the following code is to filter all numbers not greater than 18 and group them in a new array

// let age = [18, 17, 16, 19, 20, 30, 29];
// let adult = age.filter(checkAge);
// adult.forEach(print)
// function checkAge(element){
//     return element >=18;
// }

// function print(element){
//     console.log(element);
// }


//the following code deals with the reduce function. it reduces an array to a single value// meaning the following sums up all the values in the array 

// let prices = [5, 10, 15, 20, 25, 30];
// let total = prices.reduce(checkOut);
// console.log(`the total is : $${total}`);

// function checkOut(total, element){
// return total + element;
// }

// the code below is an object oriented programming it's about classes, objects, methods constructors and other oriented fields

// class player{
//     score = 0;
//     Goal = 10;

//     pause(){
//         console.log("The game is paused");
//     }

//     exit(){
//         console.log("You have exited from the game")
//     }
// }

// const player1 = new player;
// console.log(player1.score);
// console.log(player1.Goal);
// player1.pause();
// player1.exit();





//constructor codes are below----------------------------------------------------------------
// class student{
//     constructor(name, age, gpa, residential_status){
//         this.name = name;
//         this.age = age;
//         this.gpa =gpa;
//         this.residential_staus= residential_status;

//     };

//     Emotions(){
//         console.log(`${this.name} is feeling okay at the moment because of his ${this.gpa} gpa `);
//     }
// };

// const student1 = new student("Abigail", 20 , 4.1,  "on-campus");
// console.log(student1.name);
// student1.Emotions();

// const student2 = new student("Derrick", 20, 4.0,  "off-campus");
// //console.log(student2.name +" "+ student1.name);
// console.log(student2.name);
// student2.Emotions();
// //===========================================================================================



// //-------------------------------------------------------------------------------------=====
// //the code below is for static methods. A static method belong to the class and not the objects
// class car{
//     static numberofCars=0;
//     constructor(model){
//         this.model =model;
//         car.numberofCars+=1;
//     }
// }

// const car1 = new car("Ferrari");
// const car2 = new car("Benz");

// console.log(car.numberofCars);

//=========------------------------------------------------------------------------------00-




//the code below is for Inheritance, tyring to see how inheritance works in object oriented programming 
//===============---------------------------------------------------------------------------------------==


// class Animal{
//     alive=true;
//     eat(){
//         console.log(`the ${this.name} is eating`);
//     }
    
//     breathe(){
//         console.log(`the ${this.name} is breathing`);
//     }
// }
// class fish extends Animal{
//     alive=true;
//     name = fish;
//     // eat(){
//     //     console.log(`the ${this.name} is eating`);
//     // }
    
//     breathe(){
//         console.log(`the ${this.name} is breathing`);
//     }

// }

//  class Rabbit extends  Animal {
   
//      }

//      const fish1 = new fish();
//      const rabbit = new Rabbit();
//      console.log(fish1.alive);
//      fish1.breathe();
//==========================================================================================================--------


// the code below serves as the uses of the super keywork in JavaScript. 
//the super keyword refers to the parent class and invokes contructors from the parent class
// class Animal{
//     constructor(name, age, speed){
//         this.name = name;
//         this.age = age;
//         this.speed = speed;

//     }

// }

// class Fish extends Animal{
//     constructor(name, age, speed){
//        super(name, age, speed)

//     }
// }

// class Dog extends Animal{ 
//     constructor(name, age, speed){
//        super(name, age, speed);
//     }

//     }

//     const dog = new Dog("poppi", 2, "fast");
//     const fish = new Fish("tilapia", 1, "slow");

//     console.log(fish.speed);
//     console.log(dog.name);
//     //this is the end of the super keywork usage, it's very nice to use and try and use it 


    //----------------------------------------------------------=================---------------------------
    //The following code demonstrates how to create a getter and setter for an object property using JavaScript.
    //the code below is about getterr ans setters in object oriented programming

    // class car{
    //     constructor(power){
    //         this._power = power;
    //         this._gas = 25;

    //     }
    //     get_power(){
    //         return (`a car with ${this._power}hp is a powerful car`);
    //     }

    //     set gas(value){
    //         if(value>50){
    //             this._gas= value;
    //         }
    //     }
    // }

    // car.gas = 500;
    // const car1 = new car(45);
    // console.log(car1._power);
    // console.log(car.gas);

    //// the above code is for getters and setters................................................
    
// the code below show an anonymour object  the code means you can also pass them as arguments 

// class Card {
//     constructor(key, value){
//         this.key= key,
//         this.value =value;

//     }
// };

// const card1 = new Card("A", "suit");
// const card2 = new Card("B", "Coat");
// const card3 = new Card("A", "Shirt");
// const card4 = new Card("C", "Tie");

// let Cards=[card1, card2, card3, card4];
// console.log(card1.key + card1.value)

//let cards = [new Card("A", "suit"), new Card("B", "Coat"), new Card("A", "Shirt"), new Card("C", "Tie")];
// console.log(card[0].key+card[0].value);
//and you can call them by using their indexes the sample of the code is shown above



//================================================================================================================
//the code below is for try and catch error, it tells or try a code ang give back a response in the catch block
//error = object with a description of something wen twrong 
// Can't open a file
// Lose connection 
// User types incorrect input
// Type_error

// try{
// let x = window.prompt("Hello please can you enter a number");
// x = Number(x);

// if(isNaN(x)) throw  "that wasn't a number"
// console.log(`${x} is a number`);

// if(x =="") throw "Please it's empty you didn't enter any thing"
// }

// catch(error){
//     console.log(error)
// }

// finally{
//     console.log("thanks for following the prompt")
// }

//===========================================================================================================
//===========================================================================================================
// the code below is for the setTimeout method (it's used to set time for an event to happen )


// timer1 = setTimeout(speaker1, 3000);
// timer2 = setTimeout(speaker2, 6000);
// timer3 = setTimeout(speaker3, 9000);

// function speaker1(){
//     window.alert("Hello speaker one is speaking")
// }

// function speaker2(){
//     window.alert("Hello speaker two is speaking")
// }

// function speaker3(){
//     window.alert("Hello speaker three is speaking")
// }

// document.getElementById("button").onclick = function(){
//     clearTimeout(timer1);
//     clearTimeout(timer2);
//     clearTimeout(timer3);
//     console.log("you've spoken already")
// }//=====================================================================================================

/// the code below is used to set the count interval 

// let count = 0;
// let max = window.prompt("Hello enter any number");
// max = Number(max);

// const myTimer= setInterval(countUp, 1000);

// function countUp(){
//     count+=2;
//     console.log(count);
// if(count => max){
//     clearInterval(myTimer);
// }
// }

// the following codes talks about how to invoke new dates

// let date = new  Date();
//  date = date.toLocaleString();
//  console.log(date);

 //let month = date.getFullYear();
//  let day = date.getDate();
//  console.log(day);


// the following code is for promise and callback functions 
 
// let win = false;

// const myPromise = new Promise((request, resolve)=>{
//     if (win){ request("Hello he won")}
//     else{resolve ("Hello he lost")};
// });

// myPromise
// .then((successMessage)=>{
// console.log(successMessage);
// })
// .catch ((errorMessage) => {
// console.log(errorMessage);
// })


const wait = time => new Promise(request=>{
    setTimeout((()=>request()),time)});

wait(5000).then(()=>console.log('five seconds passed'));

//so the above code was  about promises and callback functions 

