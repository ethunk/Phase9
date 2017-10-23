### Learning Goals

* Implement a function using JavaScript
* Compare and contrast return values vs. functional side effects
* Evaluate the different ways to create a function with JavaScript

## JavaScript Functions

Javascript's built-in functions likely are familiar to you. Take `alert()`, for example. If you run `alert('Hey, you')` from your console, you will see a small alert pop-up with the text `Hey, you` on the screen. While these built-in functions are valuable, as programmers we want to be able to write our own functions for our specific needs. Calling *function* lets us do just that.

Functions are *central* to the JavaScript programming language.

### JavaScript Function Definition

To follow along, open the Web Development Console, press `Cmd + Option + J` or `Ctrl + Shift + J` in Chrome.

Here we can set the variable `triple` to a function that returns three times an input:

```javascript
let triple = (x) => {
  return 3 * x;
}
```

```no-highlight
> triple(6);
18
```

Functions in JavaScript can be identified by the equals and greater-than sign, which form an arrow `=>`. `x` here is considered a *parameter* and `return 3 * x;` is the *body*, which needs to be wrapped in curly braces. Functions can also have no parameters. Here's an example:

```javascript
let gimmeThree = () => {
  return 3;
};
```

When we call `gimmeThree()` in our console, we see that it returns the number `3`.

```no-highlight
> gimmeThree();
3
```

Let's look at a slightly more complex example of counting the integers from 1 up to a number `x`;


```javascript
let countUpTo = (x) => {
  let count = "";
  for(let i = 1; i <= x; i++) {
    count = count + i + " ";
  }
  return count;
}
```

```no-highlight
> countUpTo(5);
"1 2 3 4 5 "
```

### Passing Functions as Arguments to Other Functions

A really powerful aspect of the language that JavaScript provides for is the ability to pass functions as parameters to other functions:

```javascript
let obiWanKenobi = (name) => {
  return "Use the force, " + name;
}

let darthVader = (name) => {
  return name + ", I am your father.";
}
```

Here we are just defining two functions `obWanKenobi` and `darthVader` which return two different strings based on an input `name`. We can now pass either of those functions to another function `dataHandler`:

```javascript
let dataHandler = (name, func) => {
  return func(name);
}
```

Now let's call `dataHandler` by passing two parameters to it:

```
dataHandler("Luke", obiWanKenobi);
>> "Use the force, Luke"

dataHandler("Luke", darthVader)
>> "Luke, I am your father."
```

Passing functions between one another not only cleans up our code, but allows us to organize and associate powerful actions, especially when we incorporate events.

### Side Effects

In each of the above functions, we *return* a value, by explicitly calling the **return** keyword. But not all functions need to return a value (a function that *doesn't* call the **return** keyword will return the special value `undefined` -- we'll talk more about that later.) Instead, some functions produce *side effects*. Consider the following function:

```javascript
let sayHiYou = () => {
  console.log("Hi, You!");
};
```

```no-highlight
> sayHiYou();
Hi, You!
```

While it looks like this function *returns* a string "Hi, You!", it's actually producing a side effect of printing to the screen.

Say we had both a `console.log` line in the function along with returning the same string "Hi, You!".

```javascript
let sayHiYou = () => {
  console.log("Hi, You!");
  return("Hi, You!");
};
```

```no-highlight
> sayHiYou();
Hi, You!
"Hi, You!"
```

In the above example, the function `SayHiYou` both logs to the console (as a side effect) along with returning the string. The return value is in quotes because it is a `String` data type.

The term *side effect* has a negative connotation to it, but that doesn't have to be the case in programming! You can probably guess there are times when you *want* to produce side effects (like printing to the screen, for example). If a function's sole purpose is returning a value, with no side effects (and no side effect dependencies) we call it a *pure function*. Pure functions, in Javascript, neither depend on nor modify the states of variables outside their scopes. In other words, a pure function will return a consistent result, given the same arguments.

For example:

(1) Impure Function

```javascript
let thinkerPerson = { name: "Wittgenstein" };

let impureFunction = (thing) => {
  let suffix = "Philosopher";

  thing.name = thing.name + ", " + suffix;
}

impureFunction(thinkerPerson);
```

(2) Pure Function

```javascript
let thinkerPerson = { name: "Wittgenstein" };

let pureFunction = (thing) => {
  let suffix = "Philosopher";

  thing = thing + ", " + suffix;

  return thing;
}

pureFunction ( thinkerPerson.name );
```

In example (1), `thinkerPerson` is modified by `impureFunction` while in example (2), it is not. `pureFunction` also neither depends on nor modifies variables outside of its own scope. But what does scope mean?

## Function Arguments and Object Properties

Let's take a look at how function arguments and object properties relate to one another:

```javascript
let rebrand = (theSpaceship) => {
  theSpaceship.brand = "Virgin Galactic";
}

let mySpaceship = {
  brand: "SpaceX",
  model: "Enterprise",
  year: 2028
}
```

Here we define `rebrand` which takes an object and performs a task on it (setting the object's brand to `Virgin Galactic`). Let's take a look at a few things in `console.log` and see what's going on:

```no-highlight
> console.log(mySpaceship.brand)
"SpaceX"
```

That's straightforward. Let's pass mySpaceship to `rebrand` now and then look at the value of `mySpaceship.brand`:

```no-highlight
> rebrand(mySpaceship);
> mySpaceship.brand;
"Virgin Galactic"
```

As you might have expected, the function `rebrand` changed the value of the `brand` property on `mySpaceship`. Even though the object we're changing inside the function is `theSpaceship`, this local variable is acting as a reference to the object we passed in when we invoked `rebrand`. This is an excellent example of **side effects** mentioned previously.

## Functions as First Class Objects

Functions are *first-class objects* in JavaScript, meaning that they have the same behavior as any other object. What's so special about that? Well, while a program is being executed, a function that was constructed can be stored in a data structure. Additionally, as we saw earlier, we can pass the function around as an argument to another function and even have that function be returned as the value of another function!

* Interested in learning more here? See more on [StackOverflow](http://stackoverflow.com/questions/705173/what-is-meant-by-first-class-object) and this [blog post](http://helephant.com/2008/08/19/functions-are-first-class-objects-in-javascript/) about functions as first class objects.

## More on Return Values

By the way, it's worth noting here that to have a function return a value of something other than the default, a *return* statement must be called. Without a return statement, the function will return a default value, namely one of two types: (1) If the function constructor is called with *new*, the default value is the value of *this* (we'll talk more about *this* later); (2) Otherwise, a special value *undefined* is returned. We'll get into *this* and *undefined* later on, but for now, just keep these defaults in mind when constructing a function without an explicit return statement.

## Function declarations vs. expressions in ES5 and ES6

Let's look at a few examples of functions. Each of these has it's own subtleties that we'll discuss in a moment.

(1) Function declaration:

```javascript
function addInSpace(string) {
  return string + "in Space";
}
```

(2) *Anonymous* function expression assigned to `stringInSpace`:

```javascript
var stringInSpace = function(string) {
  return string + "in Space";
}
```

(3) *Anonymous* arrow function expression assigned to `stringInSpace`:

```javascript
let stringInSpace = (string) => {
  return string + "in Space";
}
```

(3) *Named* function `addInSpace` expression assigned to `stringInSpace`:

```javascript
var stringInSpace = function addInSpace(string) {
  return string + "in Space";
}
```

All these look pretty similar, and they do the same thing (add the string `"in Space"` to another string), but there are some key differences:

* Function *declarations* load before code gets executed.
* Function *expressions* load when the JavaScript reaches that line of code.

### A Short Exploration of Function Declarations vs. Expressions

One of the simplest ways to create a new JavaScript function is with a *function declaration*:

```javascript
function eatSpaceFood() {
  alert("You are an astronaut!");
}

eatSpaceFood();
```

The JavaScript interpreter creates a function object (in this case `eatSpaceFood()`) as it parses the JavaScript code, and before the code is run. That allows you, due to a peculiarity of JavaScript called *hoisting* (which we'll talk more about in another article), to call a function "before" it is declared:

```javascript
eatSpaceFood();

function eatSpaceFood() {
  alert("You are an astronaut!");
}
```

*Function expressions* also let us create functions:

```javascript
let eatSpaceFood = function() {
  alert("You are an astronaut!");
}

eatSpaceFood();
```

However, they have with one main difference with *function declarations*. Hoisting doesn't affect *function expressions* so they get evaluated as the code runs.

Why should we prefer one over the other?

*Function declarations* look very similar to how functions and methods might look in other languages, but *function expressions* let us be very specific and about what kind of code we are trying to write. For example, *function declarations* shouldn't be be declared inside `if` statements or loops. In fact, different browsers will handle this kind of behavior differently. If you stick to *function expressions* broadly, you are likely to deal with less naming and scope issues long term.
