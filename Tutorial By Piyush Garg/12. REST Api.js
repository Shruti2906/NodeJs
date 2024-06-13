/*

Restfull API:
    1. rules that api needs to follow to be known as restfull api.

    rules:
        -server client architecture:
                server & client are different entities and they should not be dependednt on each other.
SSR: on client request, server fetches some data from db and returns the html page.
     now, the if the client is browse, it can simply render this html.
        but what if the client is mobile app or alexa etc.
        here client is being dependent on server.
        This is also know as server side rendering(SSR).
        as server itself is proving html that simply can be rendered.

JSON (CSR):  another way of sending response from server is sending data as a raw format like XML or JSON.
        here server send the JSON(which is key value paired data) to client & client used this data to render on its UI.
        -its client side rendering(CSR)

    if you know your client is  always going to be browser then SSR is prefferred to use as its faster to render html received from client.
    CSR is fast.

    2. Always respect all HTTP Methods.

*/