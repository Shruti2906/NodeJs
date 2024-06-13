/**
 create folder Hello World
        ->create file hello.js // even if given no extension and run file nodeJs will consider it as js file as node can only execute js filed.

 */

        console.log("hello");

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