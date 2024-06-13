function add(a, b){
    return a+b;
}
function sub(a, b){
    return a-b;
}

//to make this function accesible outside of this file, it needs to be exported.
// without export add() is like private to this file.

// module.exports = "shruti";   //now in hello.js, console.log(math) will print "shruti"
// module.exports = add; //now we can do, console.log(math(2, 3));
// module.exports = {add, sub};

exports.add = (a, b)=> a*b; //const math = require('./math');
exports.sub = (a, b)=> a/b; //


/*
 so basically there are two ways:
    1.
        exports.add = (a, b)=> a*b; //
        exports.sub = (a, b)=> a/b; //

        const math = require('./math');
        console.log(math.add());

        we can add as many exports as we want.
        all be be exported.

    2.
        module.exports = {
            add,
            sub
        }

        const math = require('./math);
    or destructure like this-
        const {add, sub} = require('./math);      

        cannot write multiple exports like this as next one overrides previous one.
        


 */