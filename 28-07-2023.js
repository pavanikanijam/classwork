basics of java script:

to run the java script we need browser because it is scriptiong language
java script is more popular day by day
how to see console -to interact with your debugger for your java script code,right click>>inspect
we use the method called console.log
scripting types are 3 types they are given below:
inline java scripting-writing a code inside html body tag and use script tag inside body tag (or) writing script code inn body of html
example:<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Document</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    
</head>
<body>
   
    <h1>Hello World! in java script</h1>
    <script>
        console.log("hello world! in java script");
    </script>
</body>
</html>
internal  java scripting-writing the  script code in header tag
example:<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Document</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <script>
        console.log("hello world! internal java script");
    </script>
</head>
<body>
   
    <h1>Hello World! in java script</h1>
</body>
</html>
external java scripting-writing an individual file which contain scripting code that file is connect by using script  tag inside the header
example:(index.html):<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Document</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <script>
        console.log("hello world! internal java script");
    </script>
    <script>src="script.js"</script>
</head>
<body>
   
    <h1>Hello World! in java script</h1>
    <script>
        console.log("hello world! inline java script");
    </script>
</body>
</html>

///
(script.js):<script>
        console.log("hello world! external java script");
</script>
higher priority is inline>>internal>> external
execution is based on declaration of the elements
/////////////
basic data  types in java script:
the are 2 datatypes:primitive,non-primitive
primitive data types:number,string,null,and undefined,boolean[undefine is also data type in java script it not just a value]
boolean-store  2 values that is true and false
Non-primitive data types:arrays and objects
 one example for all:(index.html):
 <!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Page Title</title>
    
    <meta name='viewport' content='width=device-width, initial-scale=1'>
     <script src="script.js"></script>
</head>
<body>
    <h1>hello</h1>
</body>
</html>
(script.html): example foe number data types:///
 
var num=1;
console.log(num);
alert("this is the test message\n valuue of num is:"+num)
/////
(script1.js): example foe number and string data types:///

console.log("External js");
var val=10;
console.log("value  of val:"+val);
val="pavani"
console.log("string name is:"+val);
(index.html):
(or)
//
  console.log("External js");
var val=10;
console.log("value  of val:"+val);
 str val1="pavani"
console.log("string name is:"+val1);

if you are run in terminal browser based methods are not there
//// example for num,string and boolean:
console.log("External js");
var val=10;
console.log("value  of val:"+val);
val="pavani"
console.log("string name is:"+val);
var isCheck=true;
console.log("boolean value is:"+isCheck);
/////////
arrays in java script:
////////
java script is most flexible,it behave strictly
declaraction in java script:
there are 2 types for declaration by usin var keyword and let keyword:
     first declaration:
    var num=[1,2,3]
console.log("Array value are:"+num);
 for multiple values:///
 var num=[1,2,3,"pavani",1.5]
var mularr=[10,20,[1,2,3]];
console.log("array values are:"+num);
console.log("multiple array values are:"+mularr);
//////////////
conditional statements
////////////////
////if else
var num=10;
if(num>5){
    console.log("num is greater than 10");
}
else{
    console.log("num is less tha 10");
}


/////if else if
(printing wishes based on time)
var num=17;
if(num>=1 && num<12){
    console.log("Good morning");
}
else if(num>=12 && num<16){
    console.log("good afternopon");

}else if(num>=16 && num<18){
    console.log("good evening");
}
else{
    console.log("good night");
}
//////////
if else
    example(even or odd number):
var num=12;
if(num%2==0){
    console.log(num+" is even number");
}
else {
    console.log(num+"odd number");
}
//////
switch////
    var num=1;
switch(num){
    case 0:
        console.log("it is zero");
        break;
    case 1:
        console.log("it is one");
        break;
    case 2:
        console.log("it is two");
        break;
    default:
        console.log("greater than 2");
        break;
}
///////////
(printing a day in a week)
var num=1;
switch(num){
    case 0:
        console.log("sunday");
        break;
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tues day");
        break;
        var num=1;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;

    default:
        console.log("not entered correct day");
        break;
}



/////////////////
while and do while are same
     var num=prompt("enter any digit");
 var count=0;
 do{
    console.log("hello");
    count++;
 }while(count<num);

///
task1
///
var num=prompt("enter any digit");
var i;
for(i=1;i<=num;i++){
    console.log(i*n);
}/////
task2////
var num=prompt("enter any digit");

var count=1;
do{
   console.log("tables are",num*count)
   count++;
}while(10);
