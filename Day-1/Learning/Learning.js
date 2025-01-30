console.log("hello world ");
let a=12;
let b=29;
let c=a+b;
console.log("The sum is: ", c);

let penc=12;
let dot=13;
let output="the total price is : "+(penc+dot)+ " rupees";
console.log(output);
console.log("the total price is ", penc+dot, "rupees");

let backtics=`the price is : ${penc+dot} rupees`;
console.log(backtics);
console.log(a++);

console.log(a<b);
if(a<b)
{
  console.log("a is greater than b ");
}
else{
  console.log("b is less than a ");
}

let n=4;
let x='4';
console.log(n==x);
console.log(n===x);
let age =18;

if(age<18){
  console.log("You can not vote");
}
if(age==18){
  console.log("You can vote now ");
}
else 
{
  console.log("bye bye ");
}

let color="red";
// traffic light system
if(color==="yellow")
{
  console.log("slow down ");
}
else if(color==="red")
  {
    console.log("stop");
  }
  if(color==="green")
    {
      console.log("go now ");
    }

  let price = "XL";
  if(price==="XL"){
    console.log("price is Rs =  250 ");
  }
  else if(price==="L"){
    console.log("price is Rs =  200 ");
  }
  else if(price==="M"){
    console.log("price is Rs =  100 ");
  }
  else {
    console.log("Price is Rs =50");
  }

  let str="aSatyam";

  if(str[0]==="a" && str.length>3){
    console.log("Good String ");
  }
  else {
    console.log("This is not a good string ");
  }

  if(true){
    console.log("im true");
  }
  else{
    console.log("it will never run ");
  }
  alert("Hi ! Satyam what are you doing today ");
  let fname=prompt("Enter Your name ");

  console.log(fname);

  let lname=prompt("Enter Your Last name ! ");

  console.log(lname);

console.log(fname+ " "+lname);

  alert("welcome " +fname+lname);

 let na= prompt("Enter Your name  ");
 let ag =prompt("Enter your age" );
 
 alert (`YOU are ${na} and Your age is ${ag}.`);


 let pass=prompt("Enter YOur password");
 console.log(pass.trim());

 let std=["satyam","sharma"];

let sat=prompt("Enter the color name ");
if(sat==1){
  document.write(5 + 6);

}
