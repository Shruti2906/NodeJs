//first these modules wil be searched in package.json, if not found then it will will be checked in built in modules.
const http = require("http");   //nodeJs's built in module
const fs = require("fs");
const url = require("url");

//handler=> kis particular request ke liye kya hona chahiye. 
// the 'callback' taken by createServer() is a 'Request Handler' of the request.


const myHandler = (req, res)=>{  //creates a web server, which handles incoming requests.
    // console.log("Req", req);
    console.log("Req.headers", req.headers);

    if(req.url==='/favicon.ico') return res.end();

    let log = `${Date.now()}: ${req.method} ${req.url} a new request received\n`;
    
    const myUrl = url.parse(req.url, true); //queryparameter=true
    console.log("myUrl",myUrl);//http cannot parse the url i.e it cannot identify query parametres etc. it will treat all as url string.

    fs.appendFile("./log.txt", log, (err, data)=>{
        switch(myUrl.pathname){//req.url
            case "/": res.end("Home page");
                break;
            case "/contact": 
                let username = myUrl.query.myname;
                if(req.method==="GET")
                    res.end(`Hello, ${username}`);  //for this url:=> http://localhost:3000/contact?search=1+2&myname=shruti we'll get username=shruti
                    else if(req.method==="POST"){
                        //DB Query
                        read.end("Success");
                    }
                break;
            default:
                res.end("404 not found");
        }        
    })    
}

const myServer = http.createServer(myHandler);   

//in the req parameter of callback; it assigns an object which has all the info of request.
//         such as user who has made request, its IP..etc metadata.

//server need to run on some port.
// port:- can imagine like door of house, which door to assign to which server
//  only one server can run on one port.
myServer.listen(3000, ()=>console.log("server started"));
//this callback to listen() is optional.

/*
 npm start ->  server started listening on port 3000
                    ->as browser made request, the request came to myserver i.e createServer(),
                    ->createServer() called the callBack(), it returned hello.


If we use blocking request here, our users has to wait for long time.
Thus, of you want to support concurrent requests,always use non blocking request.

 */


//res object in detail,?
// res.end()      ?