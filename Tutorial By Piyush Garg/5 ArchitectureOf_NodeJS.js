const fs = require("fs");
const os = require("os")
/*

client-user of server

client ->  makes request to -> server.

on Node Server Side:
    Event Queue:
        as soon as request comes it gets queued in Event Queue.
    Event Loop:
        keep watch on event queue. and picks up requests from event queue(based on FIFO) to get processed.
    Blocking(Sync) & Non Blocking Request(Async):
        The request could be blocking or non blocking.

        Non Blocking(Async):
            -Its a simple request it gets processed and response is send back to server.

        Blocking(Sync):
            -this request goes to thread pool.
    
        Thread Pool:
            -pool of thread which has all the threads.
        Thread:
            'threads' are responsible for performing your 'blocking operation'.
            (we can imagine as a worker which does some work for you.)
            -Each blocking request is assigned a thread.

        Blocking Operation -> I need a thread/worker, assign a worker & make him work -> Thread pool.

            Thread pool checks if any thread is available (as thread available are limited).
            & if thread is available, thread pool assigns it to the blocking request; once the request(task) is complete, the thread is given back to thread pool and return the result.


Thread pool:
    -there are limited no of threads.
    -"by default 4."  i.e Default Thread Pool Size is 4.
    -if all workers(threads) are busy, the blocking request has to wait. 
    -So, Its Not Good Thing to write Blocking operations.
          Its good thing to always n always have non blocking operations.
    -Can We Increase the Number of Threds? and if Yes How Many?
   => it can be increase to how many number of CPU cores you have.
        eg.
            say the server we've rented has 8 core cpu, max threads I can create is 8. cannot create 9th thread.


OS Module:
    -It gives your machine's CPU info.
    console.log(os.cpus()[0].model)
    console.log(os.cpus().length);


Blocking & non-Blocking operations:
    - 
        Blocking/sync..........
            console.log("1");
            const result = fs.readFileSync("./modules.js", "utf-8");
            console.log(result);
            console.log("2");
            //output:   1
            //          file content
            //          2

        //Non Blocking/Async..........
            console.log("1");
            fs.readFile("./modules.js", "utf-8", (err, result)=>{
                if(err){
                    console.log("err: "+err);
                }
                if(result){
                    console.log("result: ", result);
                }
            });
            console.log("2");
            //output:   1
            //          2
            //          file content
            // it did not block the main thread..next operations gets performed without blocking

If we use blocking request here, our users has to wait for long time.
Thus, of you want to support concurrent requests,always use non blocking request.





 */
// what is blocking non blocking in node ?
// what if thread is not available in tne thread pool.
//but why  do we have sync/async methods in the module itself? can't we write it in async function/
// how to increase thread in event pool

//Blocking/sync..........
console.log("1");
const result = fs.readFileSync("./modules.js", "utf-8");
console.log(result);
console.log("2");
//output:   1
//          file content
//          2

//Non Blocking/Async..........
console.log("1");
fs.readFile("./modules.js", "utf-8", (err, result)=>{
    if(err){
        console.log("err: "+err);
    }
    if(result){
        console.log("result: ", result);
    }
});
console.log("2");
//output:   1
//          2
//          file content
// it did not block the main thread..next operations gets performed without blocking



// OS.................
console.log(os.cpus()[0].model)
console.log(os.cpus().length);
