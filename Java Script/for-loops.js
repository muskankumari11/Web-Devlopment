//program to add n natural number
// let sum=0
// let n=prompt("enter value of n")
// n=Number.parseInt(n)
// for(let i=0;i<n;i++){
//   sum+=i+1
// }
// console.log("sum of first"+n+"natural number is"+sum)

//program to find factorial of a number using for loop
// let fact=1
// let n=prompt("enter a number")
// n=Number.parseInt(n)
// for(let i=1;i<=n;i++){
//   fact=fact*i
// }
// console.log(fact)
//for in loop
let obj={
  ram:20,
  shyam:40,
  ghan:55,
  mann:18
}
//for-in loop
for(let a in obj){
  console.log("marks of"+a+"are"+obj[a])
}
//for-of loop
for(let b of "ram"){ //here name will be that which is defined in obj
  console.log(b)
}
