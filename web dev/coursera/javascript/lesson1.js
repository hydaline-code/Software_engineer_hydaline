/*var company =new Object(); //creating a  new object
company.name="facebook";
company.ceo = new Object();
company.ceo.firstname="chacha";
console.log("company ceo is :" + company.ceo.firstname);*/

//object literals

/*var facebook={
  name:"facebook", //properties of the object creations 
  ceo:{
    firstname:"chacha",
  }
};
console.log(facebook);
console.log(facebook.ceo.firstname); */// more specifically

//functions: spaecial types of objects
/*function multiply(x,y){
  return x*y;
} // they are also treated as objects

//console.log(multiply(5,4));
multiply.version = "v.1.0.0";
console.log(multiply.version);
// function factory
function makeMultiplier(mutiplier){ //create a multiplier function
  var myfunc =function(x){ //create a variable myfunc that stores the multiplierby 
    return mutiplier *x; // the function returns multiplier * x
  };
  return myfunc; // return the answer of the multiplierby 
}
var multiplyBy3 =makeMultiplier(3); // create a variable *3 replace 3 with
console.log(multiplyBy3(10));// the multiplier parameter(multiplier=3) 
// to evaluate myfunc= 3*10 =30

// passing function as arguments 

function doOperationOn (x,operation){
  return operation(x);
}
var result = doOperationOn(100,multiplyBy3);// multiplyby3 is a function and also an argument
console.log(result);
//passing variables by values or by reference
//passing by values : does not affect the content of the previous  variable  if the new assignment is reassigned done on primitives types
//passsing by refence: does affect the content of the previous  variable  if the new assignment is reassigned donevariable done on objects types

var a =7;
var b=a;
console.log(a);
console.log(b);
b=5; 
console.log("a after update is :"+ a);
console.log("b after update is :"+ b);
// by reference
var a = { x:7};
var b =a;
console.log(a);
console.log(b);

 b.x=8;
 console.log("a after update is :"+ a.x);
 console.log("b after update is :"+ b.x);

 function changePrimitive(primValue){ // create a function that changes value 
  console.log("in changePrimitive...");
  console.log("before:");// value before is 7
  console.log(primValue); 

  primValue=5; // new  value 
  console.log("after");
  console.log(primValue) // is 5
 }
// invoking the function
 var value =7; //  new value is 7
 changePrimitive(value); // primvalue = value=7 // pass the value 
 console.log("after changeObjectValue, orig value:");
 console.log(value); //value after is 5

 function changeObjectValue(objValue){
  console.log("in changeObjectValue...");
  console.log("before:");// value before is 7
  console.log(objValue); 

  value=5; // new  value 
  console.log("after objValue");
  console.log(objValue) // is 5
 }
 
 var value ={ x:7}; //  new value is 7
 changeObjectValue(value); // primvalue = value=7 // pass the value 
 console.log("after changeObjectValue, orig value:"+ value);*/

 // function constructors,prototype and the "this" keyword

 function test() {
  console.log(this); // point to the global window objects
  this.name ="chacha"// set property on this 
 }
 test();
 console.log(window.name); // name property is created on a window object

 // function constructor : encapsulate data 
 function Circle(radius) { // "C"= constructor
  console.log(this); 
  this.radius= radius;
 }// property of the member object no return value
 // returns instead the value assigned to the property

 // methods are functions that are set on properties of object
 /*this.getArea=
    function (){
      return Math.PI * Math.pow(this.radius, 2);//pi*r*r
    };*/
  // creation of the  prototype 
  Circle.prototype.getArea=
    function (){
      return Math.PI * Math.pow(this.radius, 2);//pi*r*r
    };
    
 //always outside to safe memory and avoid overwriting
 var myCircle = new Circle(12); //new object  created by executing the function
 console.log(myCircle);
 var myCircle2= new Circle(13);
 console.log(myCircle2); // each time an object is created it inherites the getarea function
 // now we want that each time we create a new circle share just the area with different radius 
 // so we will create a circle prtotype 

// objects literals and "this"
var literalCircle ={ // new object created  implicitly
  radius:10,

  getArea:function(){
    console.log(this);// refers to window object which is our circle with radius of 10
    return Math.PI * Math.pow(this.radius, 2);//pi*r*r
  }
};
// call the function
console.log(literalCircle.getArea());

//Arrays : collection of data of any types in js
/*var   array =new Array();
array[0]="hyda";
array[1]="emma";
array[2]="chacha";
array[3]=function (name){
  console.log("hello " + name);
};
array[4]= {
  course: "HTML,CSS & JS"
};
console.log(array);// all the values are output 
console.log(array[4].course);
array[3]("charlene");
array[3](array[1]);
var names = [
  "chacha","chacha2","chacha3"];
console.log(names);
for (var i =0; i<names.length; i++){
  console.log("Hello "+ names[i]);
}

names[99]="jim";
for (var i =0; i<names.length; i++){
  console.log("Hello "+ names[i]);
}

var names = ["chacha","chacha2","chacha3"];
var myobj = {
  names:"chacha",
  course:"html/css/js",
  platform:"coursera"
}; 
//retrieve properties of the var
for (var prop in myobj){
  console.log(prop + ":" + myobj[prop]);
}
// arrays are just objects in javascript

var names2 = ["chacha","chacha2","chacha3"];
for (var name in names2){
  console.log("Hello + " , names2[name]);
}*/


//closures very essential 
// create a function

function makeMultiplier(multiplier){

  function b() {
    console.log("multiplier is : " + multiplier); 
  }

  b();
  return(
    function (x){
      return multiplier * x;
    }
  );

}
  var ansfunction = makeMultiplier(4); // reference to it outer lexical environment
  console.log(ansfunction(2));
  // closure permit to conserve everything outside of the lexical 
  //environment the return 


 
 
 





