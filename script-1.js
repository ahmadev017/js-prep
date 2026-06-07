console.log("global execution context starts")
var globalVariable='I am a global variable'; 

function globalFunction(){
    console.log("Inside a global funtion")
}  

console.log(globalVariable)
globalFunction()

console.log("global execution context ends")