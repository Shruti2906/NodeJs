/*What is a Callback?
A callback is a function that is passed as an argument to another function and is executed after some event or operation has occurred. In JavaScript, callbacks are used to handle asynchronous operations such as reading files, making HTTP requests, or responding to user interactions.


Why Use Callbacks?
Asynchronous Operations: Callbacks allow you to execute code after an asynchronous operation has completed, without blocking the execution of the rest of your code. This is essential for tasks that take an unknown amount of time to complete, such as network requests or reading from a file.

Code Reusability: Callbacks promote code reusability by allowing you to pass different functions to be executed at different points in your application.

Event Handling: Callbacks are widely used in event-driven programming, where you need to define what should happen when a particular event occurs.
eg
*/

function sendSuccessMail(){
    console.log("user created succesfully...");
}
function addUser(sendSuccessMail){
    //adding user in db.. async operation
    setTimeout(()=>{
        console.log("user added to db");
        sendSuccessMail();
    },1000);    
}
addUser(sendSuccessMail);

console.log("rest code");

