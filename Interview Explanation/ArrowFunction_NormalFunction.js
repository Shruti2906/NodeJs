/*
What is an Arrow Function?

An arrow function is a concise way to write functions in JavaScript, introduced in ES6. It uses a new syntax that allows for a shorter syntax for writing function expressions.

Differences Between Arrow Functions and Normal Functions

1.syntax

2. this Binding:

        Arrow Function: Does not have its own this context. It captures the this value from its enclosing context (lexical scoping).    
        const obj = {
            value: 42,
            getValue: function() {
                return () => this.value;
            }
        };

        const valueFunction = obj.getValue();
        console.log(valueFunction()); // Output: 42

        Normal Function: Has its own this context
        const obj = {
            value: 42,
            getValue: function() {
                return function() {
                    return this.value;
                };
            }
        };

        const valueFunction = obj.getValue();
        console.log(valueFunction()); // Output: un defined

3. Usage as Methods:
        Arrow Function: Not suitable for methods that need their own this context.
        const obj = {
        value: 42,
        getValue: () => this.value
        };

        console.log(obj.getValue()); // Output: undefined

        Normal Function: Suitable for methods that need their own this context
        const obj = {
        value: 42,
        getValue: function() {
                return this.value;
            }
        };

        console.log(obj.getValue()); // Output: 42

4. Constructor Functions:
        Arrow Function: Cannot be used as constructor functions and will throw an error if used with new.
        const Person = (name) => {
            this.name = name;
        };

        const person = new Person('Alice'); // Error: Person is not a constructor

        Normal Function: Can be used as constructor functions.
        function Person(name) {
            this.name = name;
        }

        const person = new Person('Alice');
        console.log(person.name); // Output: Alice

5. Arguments Object:
    Arrow Function: Does not have an arguments object. Use rest parameters instead
        const func = () => {
            console.log(arguments);
        };

        func(); // Error: arguments is not defined
                

        Normal Function: Has an arguments object.
        function func() {
            console.log(arguments);
        }

        func(1, 2, 3); // Output: [Arguments] { '0': 1, '1': 2, '2': 3 }

----------------------------------------------------------------------------

Why Use Arrow Functions?
        Conciseness: Arrow functions are shorter and more concise, which makes the code easier to read and write.
        Lexical this: Arrow functions do not have their own this context, which can simplify handling of this in certain scenarios like event handlers or array methods.
        No arguments Object: Encourages the use of more explicit rest parameters, which can make the code more readable.

Which One is Better?
        The choice between a   rrow functions and normal functions depends on the use case:

Arrow Functions:

    Best for short, concise functions.
    When you need lexical scoping for this.
    For array methods (e.g., map, filter, reduce).
    Not suitable for methods that require their own this context or for use as constructors.

Normal Functions:

    Best for methods within objects that require their own this context.
    Suitable for constructor functions.
    When you need the arguments object.


-------------------------------------------------------------------------------------------------




*/
