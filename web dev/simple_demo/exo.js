/*var i = 5;
while (i>0) {
  console.log(i)
  i--;
}
console.log("counter done");*/

/*for (var year = 2023; year <= 2025; year++){
  console.log(year) 
  for (var month = 6; month<9; month++) // nested loops 
  {
    console.log("-----", month)
  }
}*/ 
 
 /*for (var num = 1; num<=10; num++){ // take one number go through the whole second loop
  for (var num2=1; num2<= 10; num2++){
    console.log(num + "*"+ num2 + "" + "=", num*num2)
  }
 } */

 /*var cubes = "ABCDEEFG"
 for (var i=0; i<cubes.length; i++){
    var styles = "font-size:10px; border-radius:10px; border:1px solidblue;"
    console.log("%c"+cubes[i],styles)
 }*/
  /*function listArray(arr){
    for(var i = 0; i< arr.length; i++){
      if (arr[i] == 'red'){
        console.log(i+1*100, "tomato")
      }
      else{
        console.log(i*100, arr[i])
      }
      
    }
  }
  var colors =['red','yellow','green','blue'];
  listArray(colors);*/

/*function arrayBuilder(one,two,three){
  var arr=[];
  arr.push(one);
  arr.push(two);
  arr.push(three);
  console.log(arr)
  
}
arrayBuilder('apple','pear','food');*/

// throw new reference

/*try{ 
  //console.log(a+b)
  throw new ReferenceError();
} catch(err){
  console.log(err)
  //console.log("there is an error")
  console.log("this error was a refernce error ... go in the error log")
}
console.log("my program does not stop")
//console.log (a+b);
//console.log("this line is never reached")
//throw new ReferenceError();*/


// OOP
/*var purchase ={
  shoes:100,
  sTax:1.2,
  Tprice:function (){
    var cal = this.shoes* this.sTax;
    console.log('Total is :', cal);
  }
}
purchase.Tprice(); 

var purchase2 ={
  shoes:50,
  sTax:1.2,
  Tprice:function (){
    var cal = this.shoes*this.sTax;
    console.log('Total is :', cal);
  }
}
purchase2.Tprice(); */


// classes : inhertitance 
/*class Animal{
  var myDog = new Animal()// Object.create(Animal)
  console.log(Animal)
}
class Bird extends Animal{

}
class Eagle extends Bird{

}*/
//Encapsulaation

// pattern literals 
//"abcd".match(/d/);
//"abcd".match(/a/);


// prototype  and inheritance 
/*var bird={
  haswings:true,
  canfly:true
}
var eagle = Object.create(bird); 
console.log("eagle", eagle); // prototype 
console.log("eagle has wings :", eagle.haswings);

var penguin = Object.create(bird); 
penguin.canfly =false;
console.log("peguin has wings :", penguin.haswings);
console.log("But penguin can fly :", penguin.canfly);*/


/*
// creating classes 
class Train{
  constructor(colors,lighton){
    this.colors=colors; // this is the future's object instance of the class
    this.lighton=lighton; // each new object will have the properties color and lighton
  }
  toggleLight() { // adding other methods to the class
    this.lighton =!this.lighton
  }
  lightStatus(){
    console.log("is light on? ");
  }
  getself(){
    console.log(this);
  }
  getprototype(){
    var proto = Object.getprototype(this)
    console.log(proto);
  }
}
    // instatiation
    var myTrain1= new Train('red', true);
    var myTrain2= new Train('green', true);
    myTrain1.toggleLight();
    myTrain2.lightStatus();
    console.log(myTrain1 );
    console.log(myTrain2 );
    

    // polymorphism 

   class HighSpeedTrain extends Train{
     // constructor's function
     constructor(passenger,speed ,colors, lightson){
      super(colors,lightson); // pass in the inherited properties and automatiaccly inherits the methods too 
      this.passenger=passenger;
      this.speed=speed;
     }
      togglehighspeed(){
        this.speed=!this.speed;
        console.log("high speed status :", this.speed)
      }
      toggleLight(){
        super.toggleLight(); // override the behaviour of togglelight method
        super.lightStatus();
        console.log("light are 100% operational")
      }
   }
    
   var myTrain5 = new Train ("blue",false);
   var newTrain1 = new HighSpeedTrain(200,false,'green');
   myTrain5.toggleLight();
   myTrain5.lightStatus();
   myTrain5.HighSpeedTrain();*/

   // closures
   // here a variable can be accessed even outside a function with closure 
   /*let myName = 'chacha';

   function printName() {
      console.log(myName) // variable available here inside
   }
   
    printName();
    myName='hyda';
    printName();*/

    // closure  are functions inside functions also 

    /*function outerFunction(outerVariable){
      const outer2 ="hi"
      fetch("url").then(()=>{
        console.log(url)

      })
      return function innerFunction(innerVariable ){
        console.log("Outerfunction" + " :" + outerVariable)
        console.log("innerFunction" + ": " + innerVariable)
        console.log(outer2)
      }
    }

    const newFunction = outerFunction('outside');
    newFunction('inner');

    function outerFunction(url){
      const outer2 ="hi"
// error function
      fetch("url").then(()=>{
        console.log(url)

      })
    }
    const newFunction = outerFunction('outside');
    newFunction('inner');*/
    
    // class constructor 
    /*class StationaryBike{
      constructor(postion,gear){
        this.position = postion
        this.gear=gear
      }
    }
    class Treadmill{
      constructor(position,modes){    
        this.position= position
        this.modes
      }
    }
    class gym {
      constructor(openHours,StationaryBikePos,TreadmillPos){
        this.openHours =openHours
        this.StationaryBike=new StationaryBike(StationaryBikePos,8)
        this.Treadmill=new Treadmill(TreadmillPos,5)
      }
    }
    var boxinggym = new gym("7-22","right corner","left corner")
    console.log(boxinggym.openHours)
    console.log(boxinggym.StationaryBike)
    console.log(boxinggym.Treadmill)*/
    //
    /*const arr =['cha', 'orange','paw'];
    function arrFruit(fruit,index){
      console.log(`${index} is ${fruit}`)
    }
    arr.forEach(arrFruit);*/

    function testVal(String){
      
    if (typeof String  === 'string' ){
      console.log("your value is a string of value :"+ String);
    }
    else{
      console.log("this is not a string please");  
    }
  }
  let test=testVal(23);


 