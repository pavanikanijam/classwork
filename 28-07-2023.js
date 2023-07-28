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
console.log(isCheck);
