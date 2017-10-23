### Introduction

Up until this point, our JavaScript programs have been linear, executing one
line after another, until the end of the file has been reached.

In this lesson, we will explore how to encapsulate a block of code, so that we
may reuse it in other places within a program.


### Learning Goals

* Learn about JavaScript **functions**
* Explore the concepts of **input** and **output** and how they relate to functions.


### Familiar Functions

At this point, we are familiar with a few of the functions built in to the
JavaScript programming language.

* `prompt()` - Send the user a pop-up message.
* `confirm()` - Ask the user to choose between two options. "OK", which returns
  `true`. "Cancel", which returns `false`.
* `Math.round()` - Which takes a fractional number as an input, and returns a
  whole number.

Each of these functions has some corresponding code which is run when we call
them. The details of _how_ these functions are implemented are abstracted away
from us.

This is a good thing. JavaScript wraps up some functionality and gives it a name.
We don't have to worry about exactly how it was written. We can just use it.

```no-highlight
let message = 'Would you like pancakes for breakfast?';

//              function name
//                 ┌──┴──┐
let userResponse = confirm(message);
//  └─────┬────┘           └──┬──┘
//        |                argument
// stores the return value
```

When we call a function, we provide **input** as arguments, and the return
value of the function is the **output**.


### Creating Reusable Code

Using functions provided to us is great. But, what if we want to create our
own reusable code?

```no-highlight
let addOne = (number) => {
  return number + 1;
}

addOne(5);  // returns 6
addOne(10);  // returns 11
```

We now have a function that is always one-upping us.

Let's dissect this example of an **arrow function**.

* `addOne` - The **function name**
* `number` - The **input** of the function. This is the variable name we will
  use to reference the argument passed into the function.
* `=>` - This combination of characters forms an arrow, pointing to the block
  of code that will be executed when the function is called. This is where
  this type of function declaration gets its name.
* `return` - This indicates what the **output** of the function will be.

To **call** the function, we need to use the name of the function, and give it
an **arugment** within parenthesis.

```no-highlight
addOne(2);
```

The arguments we provide to a function can be an actual value, such as the number
two `2`, or, we can pass in a variable.

```no-highlight
let five = 5;
addOne(five);
```

### Passing Multiple Arguments

If we would like to create a function that takes more than one input, we can
simply separate the argument variable names with a comma.

```no-highlight
let multiply = (a, b) => {
  return a * b;
}

multiply(5, 2);  // returns 10
multiply(3, 6);  // returns 18
```

We can add as many inputs to a function as we would like, but are limited to
only one return value, for now.


### Wrap Up

In this lesson, we covered the concepts of **input** and **output** and how
they relate to **functions** in the JavaScript programming language.
