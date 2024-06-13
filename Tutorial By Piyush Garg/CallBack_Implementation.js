const fs = require("fs");

//async
// fs.readFile("./modeules.js", "utf-8", (err, result)=>{
//     if(err){
//         console.log("error", err);
//     }
//     else{
//         console.log(result);
//     }
// });

//  readFile Implementation Simulation

function MyreadFile(path, cb){
        setTimeout(()=>{
            let err = null;
            let result = "file content here";

            // Simulate an error (uncomment the line below to test error handling)
            // err = new Error("File not found");

            // Call the callback function with error and result
            cb(err, result);
        }, 1000);
}
function cb(err, result){
    if(err) {console.log("err: ",/**/err)} //print err
    if(result)  {console.log("result: ", result)} //print result
}
MyreadFile("./file", cb);

