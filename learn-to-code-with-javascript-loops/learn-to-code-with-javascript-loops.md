### Introduction

Computers are great at repetitive tasks. We can make our computer perform a
task over and over again with **loops**.


### Learning Goals

* Create a `while` loop
* Create a `for` loop


### Looping with `while`

A `while` loop needs a **conditional statement** to know when it should stop.
The code within the curly braces `{}` is executed until the conditions have
been met.

```no-highlight
while (conditionalStatement) {
  // do repetitive task
}
```

Since we need to tell the loop when it should stop, let's set up some variables
to help with this task.

```no-highlight
let i = 0;
let count = 3;
let phrase = 'Repetition is the key to learning.';

while (i < count) {
  console.log('#' + i + ' ' + phrase);
  i++;
}
```

The output of this code will be the number of times we have been through the loop,
and our phrase.

```no-highlight
#0 Repetition is the key to learning.
#1 Repetition is the key to learning.
#2 Repetition is the key to learning.
```

In this example, the variable `i` is known as our **index**. It keeps track of the
number of times we have been through the loop. `count` is the number of times
we would like to repeat the code within the **body** of the loop.

The following video demonstrates what is happening when JavaScript is executing
this code example.

{% vimeo_video '184859150' %}


### Adding numbers with `while`

Let's say we wanted to add the numbers between 1 and 100. Doing this by hand
would be rather tedious. Why don't we let the computer do the work?

```no-highlight
let i = 1;
let count = 100;
let sum = 0;

while (i <= 100) {
  sum = sum + i;
  i++;
}

console.log(sum);  // 5050
```


### Looping with `for`

You may have noticed that there is some amount of setup that goes into using a
loop. We need to keep track of the number of times we have been through the loop,
increment that variable each time through the loop, as well as declare when we
should stop the loop.

`for` loops wrap these steps into one line.

```
for (setup; conditionalStatement; increment) {
  // do repetitive task
}
```

Let's convert our first example of a `while` loop to a `for` loop.

```no-highlight
let phrase = 'Repetition is the key to learning.';

for (let i = 0; i < 3; i++) {
  console.log('#' + i + ' ' + phrase);
}
```

`for` loops let us more concisely express the idea of repeating a task.


## Wrap Up

In this lesson, we covered two different ways to loop in the JavaScript language.
Use either a `for` or `while` loop when you want to perform a repetitive task
in JavaScript.
