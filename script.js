// // Question:1
// var num1 = 3;
// var num2 = 5;
// var newnum = (`Sum of ${num1} and ${num2} is ${num1+num2}<br/>`);
// document.write(newnum);
// // Question:1 part2 (repeat)
// var newnum = (`Sum of ${num1} and ${num2} is ${num1-num2}<br/>`);
// document.write(newnum);
// var newnum = (`Sum of ${num1} and ${num2} is ${num1*num2}<br/>`);
// document.write(newnum);
// var newnum = (`Sum of ${num1} and ${num2} is ${num1%num2}<br/>`);
// document.write(newnum);
// // Question:3 part a
// var myVariable = "Hello, World!";
// // Question:3 part b
// var variable2 = "undefined";
// document.write(`Value after variable declaration is ${variable2}<br/>`);
// // Question:3 part c
// var num = 6;
// // Question:3 part d
// var inivariable = 5;
// document.write(`Initial value: ${inivariable}<br/>`);
// // Question:3 part e
// // let count = 2;
// // let newcount = ++1;
// // document.write(newcount);
// // Question:3 part f
// let count2 = 5;
// count2++;
// document.write( `Value after increment is:${count2}<br/>`);
// // Question:3 part g
//  let numb1 = 5;
//  let numb2 = 2;
//  let message = (`${numb1+numb2}`);
// // Question:3 part h
// let no1 = 6;
// let no2 = 7;
// document.write(`Value after addition is: ${no1+no2}<br/>`);
// // Question:3 part i
// // let count1 = 2;
// // let newcount1 = ++1;
// // document.write(newcount);
// // Question:3 part j
// let count3 = 11;
// count3++;
// document.write( `Value after decrement is:${count3}<br/>`);
// // // Question:3 part k
// // var varivalue = 6;
// // document.write(`${varivalue/3}`);
// // Question:3 part l

// var instruction = (`The remainder is: 0 <br/>`);
// document.write(instruction);

// // Question:4
// var price = 600 ;
// var cost = `${600*5}`;
// document.write(`Total Cost to buy 5 tickets to a movie is ${cost}PKR `);

// Question:5
// var table = `Table of 4<br/>`;
// document.write(table);
// var sum1 = 4;
// document.write(`${sum1}x1=${sum1*1}<br/>`);
// document.write(`${sum1}x2=${sum1*2}<br/>`);
// document.write(`${sum1}x3=${sum1*3}<br/>`);
// document.write(`${sum1}x4=${sum1*4}<br/>`);
// document.write(`${sum1}x5=${sum1*5}<br/>`);
// document.write(`${sum1}x6=${sum1*6}<br/>`);
// document.write(`${sum1}x7=${sum1*7}<br/>`);
// document.write(`${sum1}x8=${sum1*8}<br/>`);
// document.write(`${sum1}x9=${sum1*9}<br/>`);
// document.write(`${sum1}x10=${sum1*10}<br/>`);

// Question:6 part a & b
var celsiustemp = 25;
var fahrenheittemp = (`${(celsiustemp *9/5+32)}`);
document.write(`25<sup>0</sup>C is ${fahrenheittemp}<sup>0</sup>F <br/>`);
// Question:6 part c & d
var fahrentemp = 70;
var celstemp = (`${(fahrentemp-32)*5/9}`);
document.write(`70<sup>0</sup>F is ${celstemp}<sup>0</sup>C <br/>`);

// Question:7
var heading = `<h1>Shopping Cart</h1>`;
document.write(heading);
var item1 = 650;
var item2 = 100;
var quantity1 = 3;
var quantity2 = 7;
var charges = 100;
var order = (` ${item1+item2+quantity1+quantity2+charges}`);
document.write(`Price of item 1 is ${item1}<br/>`);
document.write(` Quantity of item 1 is ${quantity1}<br/>`);
document.write(`Price of item 2 is ${item2}<br/>`);
document.write(`Quantity of item 2 is ${quantity2}<br/>`);
document.write(`Shipping Charges ${charges}<br/>`);
document.write(`Total cost of your order is ${order}`); 

// Question:8
var head = `<h1>Marks Sheets</h1>`;
document.write(head);
var total = 980;
document.write(`Total Marks: ${total}<br/>`);
var marks = 804;
document.write(`Obtained Marks: ${marks}<br/>`);
document.write (`Percentage: ${marks/total*100}<br/>`);

// Question:9
var main = `<h1>Currency in PKR</h1>`;
document.write(main);
var dollar = 10;
var riyal = 25;
var newdollar = dollar*104.80;
var newriyal = riyal*28;
document.write(`Total Currency in PKR ${newdollar+newriyal}`);

// // Question:10
// let number = 10;
// let result = `${number+5*10/2}`;
// console.log(result);

// Question:11
let header = `<h1>Age Calculator</h1>`;
document.write(header);
let currentYear = 2024;
let birthyear = 2010;
let age1 = currentYear - birthyear;
let age2 = (`${age1-1}`);
document.write(`They are either ${age2} or ${age1} years old`);

// Question:12
let border = `<h1>The Geometrizer</h1>`;
document.write(border);
let radius = 20;
document.write(`Radius of a circle is: ${radius}<br/>`);
let circumference = (2*3.142*20);
document.write(`The circumference is: ${circumference}<br/>`);
document.write(`The area is: ${3.142*radius*radius}<br/>`);

// Question:13

let headcap= `<h1>The Lifetime Supply Calculator</h1>`;
document.write(headcap);
let favsnacks = `chocalate ship`;
document.write(`Favourite Snacks: ${favsnacks}<br/>`);
let currentage = 15;
document.write(`Current age: ${currentage}<br/>`);
let maxage = 65;
document.write(`Max age: ${maxage}<br/>`);
let amount = 3;
document.write(`Amount of snacks per day: ${amount}<br/>`);
let year = `${maxage-currentage}`;
let totalsnacks = `${year *365}`;
document.write(`You will need ${totalsnacks}${favsnacks} to last you until the ripe old age of ${maxage}`);