// ques.1 create a variable of type string ans try to add a number to it
let a="ram"
var b=5
console.log(a+b)
//ques.2 use typeof operator to find the datatype of thestring in last ques
console.log(typeof (a+b))
//ques.3 create a const object in js can you change it to hold a number later
const c = {
  name:"ramu",
  class:4,
  isprincipal:false
}
//ques.4 try to add a new key to const object in problem 3 where you able to do it
c['friend']="kammu"
c['name']="shyam"
console.log(c)
//ques.5 write a js program to create a word meaning dictionary of 5 words
const dict={
  appericiate: "recognize the full worth of",
  ataraxia: "a state of freedom from emotional disturbance and anxity",
  yakka: "work, specially hard work"
}
console.log(dict['yakka'])
