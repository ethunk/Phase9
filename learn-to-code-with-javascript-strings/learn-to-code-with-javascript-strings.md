### Introduction

Programming is about manipulating data. Working with numbers is great, but what
if we want to process text?

In this lesson, we will explore how to store and manipulate strings of character
data in JavaScript.


### Learning Goals

* Learn about the **String data type**.
* Get input from the user via the `prompt()` function.
* Combine strings, using string **concatenation**, to form new words and sentences.


### The String Data Type

**Strings** are how we store words and text in the JavaScript language. To
create a new string, define a new variable, and set it equal to some text
surrounded by **quotes**.

```javascript
let name = 'Queequeg';
```

We can use single-quotes, or double-quotes to create a new string. We will try
to stick with single-quotes, since
[Google's Style Guide](https://google.github.io/styleguide/javascriptguide.xml?showone=Strings#Strings)
prefers this method of defining strings.

Strings can be as long or as short as we want.

```javascript
let marksTheSpot = 'x';

let theWhaleChapterOne = 'Call me Ishmael. Some years ago- never mind how long \
  precisely- having little or no money in my purse, and nothing particular to \
  interest me on shore, I thought I would sail about a little and see the watery \
  part of the world. It is a way I have of driving off the spleen and regulating \
  the circulation. Whenever I find myself growing grim about the mouth; whenever \
  it is a damp, drizzly November in my soul; whenever I find myself \
  involuntarily pausing before coffin warehouses, and bringing up the rear of \
  every funeral I meet; and especially whenever my hypos get such an upper hand \
  of me, that it requires a strong moral principle to prevent me from \
  deliberately stepping into the street, and methodically knocking people\'s \
  hats off- then, I account it high time to get to sea as soon as I can. This is \
  my substitute for pistol and ball. With a philosophical flourish Cato throws \
  himself upon his sword; I quietly take to the ship. There is nothing \
  surprising in this. If they but knew it, almost all men in their degree, some \
  time or other, cherish very nearly the same feelings towards the ocean with me.'
```

When creating multi-line strings, we need a **backslash** character at the end,
to signify that the string continues on the next line.

With the phrase `methodically knocking people\'s hats off`, we have to **escape**
the single-quote with a backslash. Otherwise, JavaScript thinks we are done
writing our string.

Here are a few of the more important **escape sequences**.

| Escape Sequence   | Description  |
| ----------------- | ------------ |
| `\t`              | Tab          |
| `\n`              | Newline      |
| `\s`              | Space        |
| `\'`              | Single-quote |
| `\"`              | Double-quote |
| `\\`              | Backslash    |

We can put some room between our messages with the newline character `\n`.

```javascript
let dialog = 'It is not down on any map;\n\ntrue places never are.';
console.log(dialog);
```

output

```no-highlight
It is not down on any map;

true places never are.
```

We can even use the newline character to make a nicely formatted list.

```javascript
let todoList = 'TODO\n----\n * learn javascript\n * write ocean navigation app\n * retire\n';
console.log(todoList);
```

output

```no-highlight
TODO
----
 * learn javascript
 * write ocean navigation app
 * retire
```


### Nouns and Verbs

A helpful analogy, when working with code, is to think of the variables you
define as **nouns** within the story you are writing. Our nouns have
**properties**. For instance, we can ask a noun of the String type how long it
is.

```no-highlight
> let name = 'Queequeg';
> console.log(name.length);
8
```

We can perform actions with these nouns by calling the methods, or **verbs**,
defined by the data type. Here is a sampling of some of the verbs defined on
all strings.

```no-highlight
> let phrase = 'Towards thee I roll, thou all-destroying but unconquering whale. ';

> let shout = phrase.toUpperCase();
> console.log(shout);
TOWARDS THEE I ROLL, THOU ALL-DESTROYING BUT UNCONQUERING WHALE.

> let reiterate = phrase.repeat(3);
> console.log(reiterate);
Towards thee I roll, thou all-destroying but unconquering whale. Towards thee I roll, thou all-destroying but unconquering whale. Towards thee I roll, thou all-destroying but unconquering whale.

> let changeCourse = phrase.replace('whale', 'narwhal');
> console.log(changeCourse);
Towards thee I roll, thou all-destroying but unconquering narwhal.
```

`.toUpperCase()`, `.repeat()`, and `.replace()` are just some of the actions we
can ask our String nouns to perform.

There are many other methods defined on Strings. Take a moment to skim the
[documentation on Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Methods_2).

Do any of these methods seem interesting or useful?


### Getting User Input

We can prompt the user for string data using the `prompt()` function.

Our programs are now interactive!

![](https://s3.amazonaws.com/horizon-production/images/javascript-prompt.png)

`prompt()` can take multiple arguments. The first being the message displayed to
the user. The second being the default value.

Try this out in the JavaScript console.

```no-highlight
let message = 'Please enter the moniker you will be called while sailing the High Seas.';
let defaultName = 'Ishmael';
let sailorName = prompt(message, defaultName);
```

The name entered by the user will be stored in the `sailorName` variable, which
we can then use in our program.


### Combining Strings

The `+` operator allows us to combine strings together to form new strings. This
is one way we can make our programs dynamic.

```no-highlight
let message = 'Please enter the moniker you will be called while sailing the High Seas.';
let defaultName = 'Ishmael';
let sailorName = prompt(message, defaultName);

let greeting = 'Call me ' + sailorName + '.';
console.log(greeting);
```

This process of adding strings together is known as **string concatenation**.


### Wrap Up

In this lesson, we covered how to manipulate text data using the **String** data
type. We also learned how to get and store input from the user, to create
interactive programs.
