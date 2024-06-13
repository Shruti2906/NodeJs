// const math = require('math');  //if we write it like this, it find 'math' in the built in libraries and those which are installed.
const math = require('./math'); //current directory

console.log("hello");

console.log(math);
// console.log(math(2, 3));

// console.log(math.add(10, 20));
// console.log(math.sub(10, 20));

console.log(math.add(10, 20));
// console.log(sub(10, 20));
// console.log(mul(10, 20));
// console.log(div(10, 20));

//to access the function in math.js file we can use require function.
//require() its built in function in nodeJs (its not in js its only in nodeJs).













/*
    we're getting error for these valid js statements :
    
 console.log(window); //Error
 alert("hi"); //Error

   because => chrome's v8 is not directy embedded in to C++.
                which means all of the DOM or window related elements are removed.
                as we knew that nodeJs is going to be used on server side.
                so all DOM manipulation related work i.e UI related things are removed.
                thus, window etc is not available in node. only core functionalities of js are available.
                      i.e  V8 is not added as it it. many features were removed and many were added like file handling, crypto related libraries etc.


NPM (Node package manager):
    -npm init   //npm initialize
                //it create a template, creates a file(package.json) that is used to run project.

package.json: 
    -Its a configuration file.
    -whenever we install/uninstall dependency, deploy, run our node project, we'll use this file.
    -obviously we can write it manually but there are more chances of error so, we simply use - npm init.

write start script.



*/