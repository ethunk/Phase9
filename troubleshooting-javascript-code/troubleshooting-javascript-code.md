## Introduction

When writing code, it is inevitable that the output of what you wrote doesn't quite meet your expectations. As a coder, you are equal parts problem solver and private investigator. In this article, we will explore the process of troubleshooting your code when it goes awry.

## Learning Goals

* How to use well-placed `console.log()` statements to investigate issues (or bugs) your code.
* Using `debugger` statements to assist with troubleshooting code issues.

## A Brief History of Computer Bugs

Back before integrated circuits and small-scale transistors were invented, [computers were built using relays and tube electronics](https://www.wired.com/2008/08/dayintech-0807/). Computers were the size of entire offices. It was during this era in computing that Grace Hopper started her career in computing.

On one day in September of 1947, Grace Hopper was running tests on the Mark I Electromechanical Computing Machine. The output wasn't quite right. Further investigation of the problem uncovered [a moth](https://www.wired.com/2013/12/googles-doodle-honors-grace-hopper-and-entomology/) trapped within a relay inside the computer. Arguably, people had been "debugging," or troubleshooting machines before this. However, this event marks the first recorded instance an actual bug being the _source_ of the problem when running computer code.

## Peering Into the Problem with `console.log()`

When writing JavaScript code, think of `console.log()` as your magnifying glass. It will allow us to peer into the value of variables and return values from functions. Let's look at an example.

```js
let isEvenNumber = (number) => {
  if (number % 2 == 0) {
    return false
  } else {
    return true
  }
}
```

Here is some code, but how do we know it works as expected? The best (and only) way to determine if it works is by running it. Take the time to form a hypothesis, first. "Based on the input 10, I expect `isEvenNumber` to return `true`."

Now, that you have a hypothesis, run your experiment.

```js
let isEvenNumber = (number) => {
  if (number % 2 == 0) {
    return false
  } else {
    return true
  }
}

console.log(isEvenNumber(10))
```

What are the results of your experiment? Did the results match your hypothesis?

{% show_hint %}
There is a "bug" in our code. Can you figure out what it is? Try putting a `console.log` statement within your function to see how it is evaluating the `if` statement.

```js
let isEvenNumber = (number) => {
  console.log('The number is: ' + number)
  console.log('The result of number % 2 is: ' + (number % 2))

  if (number % 2 == 0) {
    return false
  } else {
    return true
  }
}

console.log(isEvenNumber(10))
```

{% endshow_hint %}

{% show_solution %}
If the number can be divided by two without a remainder, then the function should return `true`.

```js
let isEvenNumber = (number) => {
  if (number % 2 == 0) {
    return true
  } else {
    return false
  }
}
```

Since `number % 2 == 0` gives us a boolean value (true or false), we can simplify our function.

```js
let isEvenNumber = (number) => {
  return (number % 2 == 0)
}
```
{% endshow_solution %}

## Halting Code Execution with `debugger`

While `console.log()` is useful for inspecting values, sometimes we need to "get into" our code and dig around to find an adequate solution. `debugger` statements allow us to pause the execution of our code, and then experiment.

![JavaScript debugger](https://s3.amazonaws.com/horizon-production/images/js-debugger.png)

In order to view the JavaScript debugger, you will need to open up the Developer Console (Option + Command + J) and refresh the page. JavaScript code execution will stop at the `debugger` statement, and you will be able to access the variables in scope of the `debugger` statement.

## Wrap Up

Troubleshooting code is a significant part of development and becoming a seasoned developer. Don't be afraid to dive in and try something you think might work. Always stop to make a hypothesis, and then test your assumptions. With `console.log()` and `debugger`, you can investigate and dig around in your coding sandbox until you uncover the solution you're looking for.

## Resources

* [Debugging JavaScript (MDN)](https://developer.mozilla.org/en-US/docs/Mozilla/Debugging/Debugging_JavaScript)
* [debugger (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger)
