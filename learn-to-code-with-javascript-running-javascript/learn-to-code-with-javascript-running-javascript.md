### Introduction

There are many different ways to run JavaScript code. This lesson serves to
demonstrate the different ways you will see JavaScript code executed. We will
also cover our preferred way for trying out and documenting JavaScript code
examples for your own use.


### Learning Goals

* Execute JavaScript code "on the client" (e.g.- in the browser).
* Execute JavaScript code in a REPL within the browser.
* Execute JavaScript examples "on the server," using Node.js.


### Running JavaScript in the Console

```no-highlight
alert('Hello, Student.');
```

When you are learning to code, and you come across an unfamiliar code example,
it is helpful to use a simplified version of the **Scientific Method** as a
guide to your learning.

1. **What do you think will happen?**

    Based on the code provided, and your prior experience, what do you think will
    be the result of the running the code example above?

    Ask yourself, "What do you think will happen?", with every new code sample you
    encounter.

    It's OK if you have no idea. In that case, say, "I'm not sure what will
    happen."

2. **Conduct an experiment.**

    We are scientists! Our laboratory is the computer! Let's run an experiment!

    Open up the JavaScript console in your browser, and type in the example.

    ![Running code within the JavaScript console](https://s3.amazonaws.com/horizon-production/images/javascript-hello-student.png)

3. **Analyze the result.**

    What happened? Did the results of your code meet your expectations based on
    your prior experience? Can you alter the example to show a different message?

4. **Share what you have learned.**

    Explaining _your interpretation_ of how some code does what it does is a key
    step in the learning process.

    Write a blog post. Document your findings in your `challenges` folder. Explain
    the code to yourself, out loud. Have a conversation with a [rubber duck][rubber_duck].
    Go to a local meetup and talk code with your peers.
    Use your medium of choice to talk about what you have learned.


### Running JavaScript in a Single HTML File

For very simple examples, like the `'Hello, Student.'` example above, you can store
them in a single HTML file. Name the file after the code example. In this case,
`jsAlertMessage.html` is a good name.

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>JavaScript</title>
  </head>

  <body>
    <h1>Learn JavaScript!</h1>
    <p>This JavaScript code will cause an alert box to appear.</p>
    <script>
      // write JavaScript within the 'script' tags
      alert('Hello, Student.');
    </script>
  </body>
</html>
```

Executing the example is as simple as opening the `jsAlertMessage.html` file
with your browser (eg- File > Open > then, navigate to `jsAlertMessage.html`).

If you make a change to your code, hold the `Shift` key and click "Refresh", to
make sure the browser loads the file from the disk. Otherwise, it may take
advantage of the browser's caching system, which can cause confusion in debugging.
You can also use the `cmd+shift+r` on a Mac and `ctrl+shift+r` on a Windows machine.

### Running JavaScript in a Project Folder

Let's iterate on the example above, and separate our concerns.
Running code this way is a little more involved, but the key benefit is that
your JavaScript code is in its own separate file.

Create a folder, within your `challenges` folder, named after the **project**.
In this case, `js-alert-message` is a good name.

```no-highlight
challenges
└── js-alert-message
    ├── index.html
    └── main.js
```

```html
<!doctype html>
<!-- index.html -->
<html>
  <head>
    <meta charset="utf-8">
    <title>JavaScript</title>
  </head>

  <body>
    <h1>Learn JavaScript!</h1>
    <p>This JavaScript code will cause an alert box to appear.</p>
    <script src="main.js"></script>  <!-- load javascript -->
  </body>
</html>
```

```javascript
// main.js
alert('Hello, Student.');
```

To run the code, open `js-alert-message/index.html` in your browser.

Constructing code examples using a **project folder** structure is our preferred
way of writing and running JavaScript code. Many of the lessons you retrieve
with `et get` will be presented this way.


### Running JavaScript with an Online REPL

Website such as [JSFiddle](https://jsfiddle.net/) and
[repl.it](https://repl.it/languages/javascript) are great places to try out
code examples within your browser, as well as for sharing examples with others.

**REPL** stand for "Read, Eval, Print, Loop." The JavaScript console within
your browser is a "Read, Eval, Print, Loop."
It's a fancy way of expressing that such tools allow you to interactively execute code.

The downside of these sites is that your code is stored remotely, if at all.
One of the best ways to learn to code is to store examples of what you have
learned on your machine, so you can easily search through them.


### Running JavaScript using Node.js

[Node.js](https://nodejs.org/) takes the Chrome V8 JavaScript engine out of the
browser, and allows you to run JavaScript code from the command line.

```javascript
// fToC.js
'use strict';
let temperatureInF = process.argv[2];
let temperatureInC = (temperatureInF - 32) * 5 / 9;
console.log(temperatureInC);
```

```no-highlight
$ node fToC.js 65
18.333333333333332
```

Running JavaScript code using Node will be covered in depth in later lessons.
For now, we will be primarily running our JavaScript code **in the browser**.


### Wrap Up

In this lesson, we covered the various ways to run JavaScript code. Saving
code examples in **project folders** is our preferred way of documenting code.

[rubber_duck]:https://en.wikipedia.org/wiki/Rubber_duck_debugging
