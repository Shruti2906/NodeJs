/**
Middleware = the incoming request first goes to middleware, it can performa security check etc., it can validate the request.

            -if the middleware founds the request is valid it will forward the request to next function i.e to server, which will return response to client.
            but if the middleware founds that the request is invalid it will return the response back to client with proper error msg; it won't forward the request to server.

            -its a function that executes on each request and response.
                it can forward the request further or it can end the req res cycle and return response backwithout forwarding

            one code can have multiple middleware.
            eg
                client request -> middleware1(check(userId, password)) -> middleware2(check(account no)) -> func

                next -> reference to next middleware in out middleware stack.

        Middlewares can
                -execute any code
                -make changes to the req, res object
                -end req-res cycle
                -call the next middleware function in the stack
 */