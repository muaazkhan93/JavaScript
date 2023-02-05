// Question # 01

var num1 = 3;
var num2 = 5;
var sum = num1 + num2;

document.write("The sum of 3 and 5 is " + sum + "<br/>")

// Question # 02

 var num1 = 3;
 var num2 = 5;
 var sum = num1 * num2;

 document.write("The sum of 3 * 5 is " + sum + "<br/>")

// Question # 02 Subtraction

 var num1 = 5;
 var num2 = 4;
 var sum = num1 - num2;

 document.write("The sum of 5 - 4 is " + sum + "<br/>")

// Question # 02 Modulus

var num1 = 10;
 var num2 = 5;
 var sum = num1 % num2;

 document.write("The sum of 10 % 5 is " + sum + "<br/>")

// Question # 02 Division

 var num1 = 10;
 var num2 = 5;
 var sum = num1 / num2;

 document.write("The sum of 10 / 5 is " + sum)

// Question # 03 (a)

var num1;

// Question # 03 (b)

document.write("Value after variable declaration is " + num1 + "<br/>");

// Question # 03 (c)

num1 = 5

// Question # 03 (d)

document.write("Intial value: 5" + "<br/>");

// Question # 03 (e)

num1 = ++num1

// Question # 03 (f)

document.write("like Value after increment is:" + num1 + ",<br/>")

// Question # 03 (g)

num1 = num1 + 7

// Question # 03 (h)

document.write("Value After Addition is:" + num1 + "<br/>")

// Question # 03 (i)

num1 = --num1;

// Question # 03 (j)

document.write("Value After Decrement is:" + num1 + "<br/>")

// Question # 03 (k)

num1 = num1 % 3

// Question # 03 (l)

document.write("The Remainder is:" + num1 + "<br/>")

// Question # 04

var ticketprice = 600
document.write("Total Cost To Buy A 5 Tickets To A Movie Is:" + ticketprice*5 + "<br/>" )

// Question # 05

document.write(" <h2> Table of 5 </h2>");
document.write( " 5 x 1 = 5 " + "<br/>");
document.write( " 5 x 2 = 10" + "<br/>");
document.write( " 5 x 3 = 15" + "<br/>");
document.write( " 5 x 4 = 20" + "<br/>");
document.write( " 5 x 5 = 25" + "<br/>");
document.write( " 5 x 6 = 30" + "<br/>");
document.write( " 5 x 7 = 35" + "<br/>");
document.write( " 5 x 8 = 40" + "<br/>");
document.write( " 5 x 9 = 45" + "<br/>");
document.write( " 5 x 10 = 50"+ "<br/>");

// Question # 06

document.write("<h2> The Temprature Converter </h2>");
var celcius = 32;
var fResult = (celcius * 9/5) + 32;
document.write(" 32<sup>0</sup> C is " + fResult + " <sup>0</sup> F ");

document.write("<br/>");

var farhenhiet = 100;
var cResult = (farhenhiet - 32) * 5/9;
document.write(" 100<sup>0</sup> F is " + cResult + " <sup>0</sup> C " + "<br/>");

// Question # 07

document.write("<h2> Shopping Cart </h2>");

var item1 = 650;
var item2 = 400;
var titem1 = 1200 * 3;
var titem2 = 400 * 2;
var shipping = 100;
var total = item1 + item2 + titem1 + titem2 + shipping;

document.write("Price of item1 is : " + item1 + "<br/>");
document.write("Quantity of item1 is : " + titem1 + "<br/>");
document.write("Price of item1 is : " + item2 + "<br/>");
document.write("Quantity of item2 is : " + titem2 + "<br/>");
document.write("Shipping Charges is : " + shipping + "<br/>");
document.write("Total price is : " + total + "<br/>");

// Question # 08

document.write("<h2> Marks Sheet  </h2>");

var totalMarks = 804;
var marksObtained = 980 ;
var percentage = (totalMarks  / marksObtained )*100;

document.write("TotalMarks : " + totalMarks +  "<br/>" )
document.write("MarksObtained : " + marksObtained + "<br/>" )
document.write("Percentage : " + percentage + "<br/>")

// Question # 09

document.write("<h2>  Currency in PKR  </h2>");

var currency = 1748
document.write("Total Currency in PKR is : "+ currency + "<br/>")

// Question # 10

var num = 15;
var cal = ((num + 5) * 10)/2;
//document.write(cal);

// Question # 11

document.write("<h2> The Age Calculator </h2>");

var currentYear = 2023;
var birthYear = 2005;
var age = currentYear - birthYear;

document.write(" Current Year : " + currentYear + "<br/>");
document.write( "Birth Year : "+ birthYear + "<br/>");
document.write( "Your Age : " + age + "<br/>");

// Question # 12

document.write(" <h2> The Geometrizer </h2> ");

var  π =  3.142;

var radius = 20;
var circumference = 2 *  π * radius;
var area =  π * (radius**2);

document.write("The Radius of the circle is: " + radius + "<br/>");
document.write("The Circumference is: " + circumference + "<br/>");
document.write("The Area is: " + area + "<br/>");

// Question # 13

document.write("<h2> The LifeTime Supply Calculator </h2>")

var favSnack = "Pizza"
var currentAge = 18 //years
var maxAge = 60 //years but convert into days
var maxAgeInDays = 60 * 365
var estAmonutPerDay = 7 //slices
var requiredAmount = (estAmonutPerDay * maxAgeInDays )

document.write(" Favorite Snack: " + favSnack + "<br/>")
document.write(" Current Age: " + currentAge + " Years"  + "<br/>")
document.write(" Estimated Maximun Age: " + maxAge + " Years"  + "<br/>" )
document.write("Amount of snacks per day: " + estAmonutPerDay + " slices" + "<br/>" )
document.write(" You will need " + requiredAmount + " slices of pizza until the ripe old age of " + maxAge + "<br/>")