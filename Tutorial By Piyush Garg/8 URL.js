

//URL:  Uniform Resource Locator

/**
 a Backend developer should know.

    what is url?
    how to parse a url?
    what are the components of url?

    eg.
        https://www.github.com

    components of url:
    protocol: https- hypertext transfer protocol secur
                set of rules that tells browser, how to communicate with the server.

    domain:
        www.github.com
        -its a user friendly/ human friendly name of Ip address the server where this site is stored/running/live.
    
    path:  https://www.github.com/contact,  https://www.github.com/login etc
    nested path:  https://www.github.com/user/profile
    
    Query Parameters:
                extra info which can ne passed with our url.
            eg.
                    https://www.github.com/about?userID=1&search=name+city

                query parameters start after '?' in url.
                & is for adding multiple parameters (like name&city which means  name and city)
                + is for space,
    HTTP Module cannot parse the incoming request url.
    we need to use external package for this.
    -> go to ->  https://www.npmjs.com/
        ->search url -> check install command
        ->in vscode run -> npm i url
        -> module installed, the actual code of this library is added in node_modules.

 */


/**
 
Basic server functionalities are-
-Accepting requests
-parsing the requests to know what user actually wants.
-processing request(fetching from DB etc) and sending response back to client

 */

