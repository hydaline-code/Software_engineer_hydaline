var X = "hello chacha";
var message ="in global";

var a = function () { 
  var message ="inside a";
  console.log("a:message =" + message )
}

function b (){
  console.log("b message =" + message)

}
b();
a(); 
var x ;
x =5;
console.log(x);
