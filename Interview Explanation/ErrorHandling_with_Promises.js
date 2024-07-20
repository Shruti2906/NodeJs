
/*
 Immediate Return of Promise and try...catch Block Ending
When you create a promise inside a try...catch block, the promise is returned immediately. The try...catch block ends as soon as the return statement is executed. Any errors that occur inside the asynchronous code (like the setTimeout callback) will not be caught by the try...catch block, because that block has already finished executing. Instead, those errors need to be handled using .catch on the returned promise.
 */

function asyncOperation(){
    try{
        // throw new Error();
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                    // throw new Error();
                    resolve("promise complete");                    
            }, 0);            
        })
    }catch(err){
        console.log("promise rejected: ");
    }
}

const promise = asyncOperation();
console.log(promise)

promise
.then((data)=>{
    console.log(promise);
    console.log(data)
})
.catch((err)=>{
    console.log(promise);
    console.log("in .then catch")
});


/**
 * Why the .catch Method Doesn't Catch Uncaught Errors in Asynchronous Code
The .catch method in a promise chain only catches errors that are part of the promise lifecycle, i.e., errors that occur during the execution of the promise executor function or explicitly passed to the reject function. When an error is thrown inside an asynchronous callback (like setTimeout) without a try...catch block, it becomes an uncaught exception because it is outside the synchronous execution context of the promise.

thus error thrown in settimeout before resolve() has to be handled in settimeout itself.
eg

function asyncOperation(){
    try{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                try{
                    throw new Error();
                    resolve("promise complete");   
                }
                catch(err){
                    reject(err);
                }
            }, 0);            
        })
    }catch(err){
        console.log("promise rejected: ");
    }
}

 */