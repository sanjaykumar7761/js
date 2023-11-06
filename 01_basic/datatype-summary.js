//# Primitive dataType

// 7 types: String, Number, Bollean, null,undefined,
//BigInt

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId)

const bigNumber =345678648231581298734n

//Reference(Non-Primitive dataType)

//Array, Objects, functions

const heros =["shaktiman","naagraj","doga"]
let myObj={
    name:"Sanjay",
    age:22
}

const myFunction=function(){
    console.log("hello")
}
// console.log(myFunction)

console.log(typeof myFunction)