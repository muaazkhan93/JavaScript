// Question # 01

var a=10
document.write("<h1>Result :</h1><br/>")
document.write("<h3>The value of a is: "+a+"</h3>")
document.write("<h3>--------------------------</h3><br/>")

document.write("<h3>The value of ++a is: "+ ++a +"</h3>")
document.write("<h3>Now the value of a is :"+a+"</h3><br/>")

document.write("<h3>The value of a++ is: "+ a++ +"</h3>")
document.write("<h3>Now the value of a is :"+a+"</h3><br/>")

document.write("<h3>The value of --a is: "+ --a +"</h3>")
document.write("<h3>Now the value of a is :"+a+"</h3><br/>")

document.write("<h3>The value of a-- is: "+ a-- +"</h3>")
document.write("<h3>Now the value of a is :"+a+"</h3><br/>")

// Question # 02

var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("<h3>a is :"+a+"</h3>")
document.write("<h3>b is :"+b+"</h3>")
document.write("<h3>Result is :"+result+"</h3>")

// Question # 03

var yourName=prompt("Enter name")
document.write("<h1>Hello "+yourName+"</h1>")

// Question # 04

var num1=3
var num1= +prompt("Entr a number",3)
document.write("<p>"+num1+" x 1 = "+num1+"</p>")
var num=num1*2
document.write("<p>"+num1+" x 2 = "+num+"</p>")
var num=num1*3
document.write("<p>"+num1+" x 3 = "+num+"</p>")
var num=num1*4
document.write("<p>"+num1+" x 4 = "+num+"</p>")
var num=num1*5
document.write("<p>"+num1+" x 5 = "+num+"</p>")
var num=num1*6
document.write("<p>"+num1+" x 6 = "+num+"</p>")
var num=num1*7
document.write("<p>"+num1+" x 7 = "+num+"</p>")
var num=num1*8
document.write("<p>"+num1+" x 8 = "+num+"</p>")
var num=num1*9
document.write("<p>"+num1+" x 9 = "+num+"</p>")
var num=num1*10
document.write("<p>"+num1+" x 10 = "+num+"</p>")

// Question # 06 

var subject1 = prompt("Enter subject 1")
var subject2 = prompt("Enter subject 2")
var subject3 = prompt("Enter subject 3")

var totalMarks = 100

var obtainMarks1 = +prompt("Enter Marks of 1st subject")
var obtainMarks2 = +prompt("Enter Marks of 2nd subject")
var obtainMarks3 = +prompt("Enter Marks of 3rd subject")

var percentage1 = (obtainMarks1 * 100) / totalMarks
var percentage2 = (obtainMarks2 * 100) / totalMarks
var percentage3 = (obtainMarks3 * 100) / totalMarks
document.write("<table>")
document.write("<tr> <th> Subject </th> <th> TotalMarks </th> <th> ObtainMarks </th> <th> Percentage </th> </tr>");
document.write("<tr> <td> " +subject1+" </td> <td>  "+totalMarks+" </td> <td> "+obtainMarks1+" </td> <td>"+percentage1+" % </td> <td>")
document.write("<tr> <td> " +subject2+" </td> <td>  "+totalMarks+" </td> <td> "+obtainMarks2+" </td> <td>"+percentage2+" % </td> <td>")
document.write("<tr> <td> " +subject3+" </td> <td>  "+totalMarks+" </td> <td> "+obtainMarks3+" </td> <td>"+percentage3+" % </td> <td>")
document.write("</table>")