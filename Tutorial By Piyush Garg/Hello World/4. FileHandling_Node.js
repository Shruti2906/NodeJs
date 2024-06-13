//fs is built in node module. which is used to perfrom operations on files. such as read/write/updte/delete(CRUD).

const fs = require("fs");

// fs.watchFile

//sync
//if this line is run again it will override the previously created file.
fs.writeFileSync('./test.txt', 'Hello World, test.txt');    //run node file.js

//Async
fs.writeFile("./test2.txt", "hello async, test2", (err)=>{});


////reading
//sync
const result = fs.readFileSync("./fileToRead.txt", "utf-8");
console.log(result);

//async
fs.readFile("./fileToRead.txt", "utf-8", (err, result)=>{
    if(err){
        console.log("error", err);
    }
    else{
        console.log(result);
    }
});

//  readFile Implementation
// function readFile(path, cb){
//     // its work
//     // const err
//     // const result
//     cb(err, result);
// }
// function cb(err, result){
//     if(err) {/*print err*/}
//     if(result)  {/*print result*/}
// }
// readFile("./file", cb);


//append........
fs.appendFileSync("./test2", `${Date.now()} hello test2\n`);


//copy............
fs.copyFileSync("./fileToRead.txt", "./test.txt");

fs.cpSync("./fileToRead.txt", "./test");


//delete..........
fs.unlinkSync("./test");

//see file stats....
const stat = fs.statSync("./fileToRead.txt");
console.log(stat);
console.log(fs.statSync("./fileToRead.txt").isFile());

//make directory........
fs.mkdirSync("mydir");
fs.mkdirSync("mydir2/a/b", {recursive: true});



// js does not provide this functionality to work with file for security purspose. 
// nodejs provides this.


/*
one of the difference is that, sync function directly return result.
while async function expects callback.
*/




