const http = require("http");  
const express = require("express");

const app = express();

app.get('/', (req, res)=>{
    res.send("hello from home page");
})
app.get('/contact', (req, res)=>{
    res.send("hello from contact page");
})
app.get('/register',(req, res)=>{
    res.send(`Hey ${req.query.name}, you are registered`);
})

//this not required anymore........
/* 
const myHandler = (req, res)=>{  
    
    if(req.url==='/favicon.ico') return res.end();

    let log = `${Date.now()}: ${req.method} ${req.url} a new request received\n`;
    
    const myUrl = url.parse(req.url, true); //queryparameter=true

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
const myServer = http.createServer(app);   
myServer.listen(3000, ()=>console.log("server started"));
*/

app.listen(3000, ()=> console.log("Server Started!!"));


/*
prblem is-
    Out request handler has become very confusing
    -needing to write case for each route
    -required to use different module like url for request parsing,
    similarly we'll need something else for JSON etc.
    -we're handling Everything on scratch level.
So,  I need some library that will write this handler for me.

    ->npm express i
    const express = require("express");
    const app = express();

    app is basically handler function.

express() - It creates and returns an instance of an Express application.
            This instance can be configured with settings, middleware, routes, and error handlers.
            The instance can be used to handle HTTP requests and responses.
        so,
            app is an instance of express.

            makes code clean, modular, easy to write.

But, Express is just a framework, Internally http module is used.            
*/