let c = myFunction(4,3);
document.getElementById("demo0").innerHTML = c;
function myFunction(a,b){
    return a*b;
}

function myFunction(x,y){
    if (y == undefined){
        y = 2;
    }
    return x*y;
}
document.getElementById("demo1").innerHTML = myFunction(3);

function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
  let z = sum(4, 9, 16, 25, 29, 100, 66, 77);
  document.getElementById("demo2").innerHTML = z;

const myObject = {
    firstname: "james",
    lastname: "gan",
    fullname: function() {
        return this.firstname + " " + this.lastname;
    }
}
document.getElementById("demo3").innerHTML = myObject.fullname();

const person ={
    fullName: function(city,country){
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
const person1 = {
    firstName:"henry",
    lastName:"cavil"
}
const person2 = {
    firstName:"harly",
    lastName:"queen"
}
document.getElementById("demo4").innerHTML = person.fullName.call(person2,"oslo","norway");

document.getElementById("demo5").innerHTML = Math.max(2,8,4);

const persons = {
    Firstname: "jack",
    Lastname: "sparrow",
    display: function(){
        let x =document.getElementById("demo6").innerHTML = this.Firstname + "" + this.Lastname;
    }
}
let display = persons.display.bind(persons);
setTimeout(display, 3000);

function add() {
  let counter = 0;
  counter += 1;
  return counter;
}
function myFunction(){
  document.getElementById("demo7").innerHTML = add();
}

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;

  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const myCar = new Car("Ford", 2014);
document.getElementById("demo8").innerHTML =
"My car is " + myCar.age() + " years old.";

let hello = "";
hello = () =>{
  return "hello all!";
}
document.getElementById("demo9").innerHTML = hello();
