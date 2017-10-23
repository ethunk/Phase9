### Introduction

Data types allow us to store different types of information. String variables
allow us to store and manipulate textual data. Number variables allow us to
keep a running total of prices, or let us keep track of the current index
within an Array.

In this lesson, we will explore the **object** data type in JavaScript, which
will allow us to combine variables and functions into a package that can be used again and again.

### Learning Goals

* Learn about the **object** data type in JavaScript.
* Learn how to get and set **object properties**.
* Learn about the `this` keyword in JavaScript.

### Objects and State

Objects are a way for programmers to group together data and functions, variables
and methods, **state and behavior**. We use objects as a way to model the outside
world from within the computer. This use of metaphor helps us as developers better
organize our software.

```javascript
let sam = new Object();

sam.name = 'Sam';
sam.age = 32;
sam.occupation = 'Software Developer';
```

In this example, we created a new JavaScript object called `sam`. We then
assigned some **properties** of the `sam` object: name, age, and occupation. We
can retrieve the values of the assigned properties by calling them by name using
**dot notation**.

```javascript
console.log(sam.name);  // 'Sam'
console.log(sam.age);  // 32
```

Another way to access object properties with the **square-bracket notation** `[]`.

```javascript
console.log(sam['name']);  // 'Sam'
console.log(sam['age']);  // 32
```

A more concise way to create this same object is via the **object literal
notation**. 

```javascript
let sam = {
  name: 'Sam',
  age: 32,
  occupation: 'Software Developer'
}
```

The above code example results in the same JavaScript object we created using
**dot notation** above. The syntax above is shorter, and more concise, so that's
typically what you'll encounter when working with JavaScript.

The **properties** of an object keep track of the current **state** of the object.
In this case, the name, age, and occupation we have assigned.

### Objects and Behavior

Data is not the only thing we can group within an object. Functions that are
related to the object can also be tied to it. We typically call these functions,
**methods**.

```javascript
let sam = {
  name: 'Sam',
  age: 32,
  occupation: 'Software Developer',
  isAnAdult() {
    return this.age >= 18;
  },
  greet() {
    return `Hello, my name is ${this.name}.`;
  }
}

sam.isAnAdult();  // true
sam.greet(); // 'Hello, my name is Sam.'
```

In this example, we have defined a method on the `sam` object, which returns
`true` if Sam is over 18, and `false`, otherwise.

To validate that our code is working, let's rewind the clock by **reassigning**
Sam's age, and then calling the `isAnAdult()` method, again.

```javascript
sam.age = 10;
sam.isAnAdult();  // false
```

Our object has **behavior** in the form of methods which we can call on the
object.

**Note**: A common "gotcha" when working with JavaScript forgetting to add
opening and closing parenthesis to the end of a method call. In order to run the
method or function, we **must** include parenthesis.

```javascript
sam.isAnAdult;  // won't execute the function
sam.isAnAdult();  // executes the function and returns true or false
```

### `this`

`this` is a special keyword in JavaScript, which we have decidedly avoided
discussing until now. It gives us a way to access _the caller of the method_.

In the example where we call `sam.isAnAdult()`, `this` is `sam`. The `isAnAdult()`
method is not aware of the variable name of its parent object. The `this`
keyword gives the method a way to access the data and methods within the parent
object.

_This_ is the most clear and concise explanation of `this` the author has found.
If you would like to read more about the concept of `this` in JavaScript, check
out the resources at the end of the article.

### Wrap Up

In this article, we have covered objects in JavaScript. Through the use of
objects, we can group together **state**, the properties we define on an object,
and **behavior**, the methods we define on an object. This grouping of state
and behavior is a foundational concept of the Object-oriented Programming paradigm.

### Resources

* [ECMAScript 6 - Method Properties](http://es6-features.org/#MethodProperties)
* [Understanding JavaScript Function Invocation and "this" - Yehuda Katz](http://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/)
* [You Don't Know JS: this & Object Prototypes](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20&%20object%20prototypes/ch1.md)
