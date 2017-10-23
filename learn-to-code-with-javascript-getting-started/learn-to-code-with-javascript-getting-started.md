### Introduction

There are three core technologies in the universe of contemporary web
development.

- **HTML** defines the _structure_ of the websites we create. The
text within a web page is wrapped with HTML tags, such as heading, paragraph, or
division tags, to give structure to the text.
- **CSS** defines the _presentation_
of that structure. What fonts are used, the size, shape, and hue of the page
structure are defined using the language of Cascading Style Sheets.
- **JavaScript** allows us to give our web pages _behavior_.


### Learning Goals

* Set up your JavaScript development environment.
* Review the history of the JavaScript language and why it was created.
* Execute JavaScript code in a web browser.
* Write comments in HTML, CSS, and JavaScript


### A Brief History of JavaScript

Mocha, LiveScript, or **JavaScript** as it is know today, is the brainchild of
Brendan Eich. He created a prototype of the language in about ten days in
May of 1995 while working for Netscape. The language was created to execute
on the client-side, within the Netscape web browser, with the purpose of
launching [Java applets](https://en.wikipedia.org/wiki/Java_applet).

Developers quickly learned they could use the JavaScript to do much
more than launch Java applets. JavaScript is a fully-fledged
programming language that originally executed exclusively within the client's browser.
It is used to alter web pages dynamically and create interactive user interfaces.
Now, it's difficult to imagine a World Wide Web without this technology.

In an effort to standardize the language across browsers, the European
Computer Manufacturers Association (ECMA) took on the challenge of creating
a formal definition of the JavaScript language, known as
[ECMAScript](https://en.wikipedia.org/wiki/ECMAScript). Different versions
of this specification have been released over the years (e.g., ES5, ES6). It
is the role of **JavaScript engines** to implement this specification (e.g.,
Chrome V8, Mozilla SpiderMonkey).

So, if we want to execute JavaScript, all we need is a modern web browser.


### Getting Set Up

Our JavaScript development environment will consist of the following:

* [Atom Text Editor](https://atom.io/)
* [Chrome Web Browser](https://www.google.com/chrome/browser/desktop/index.html)

Take a moment to download and install these applications before continuing
with this lesson.


### Running JavaScript

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>JavaScript</title>
  </head>

  <body>
    <!-- HTML defines the structure of the page -->
    <h1>Learn JavaScript!</h1>
    <div id="main"></div>
  </body>

  <script>
    // JavaScript defines the behavior
    let element = document.getElementById("main");
    element.innerHTML = "JavaScript is Awesome!";
  </script>
</html>
```

Open up the Atom editor and **type out** the example above. It is important to
continue to get practice writing out the syntax you're learning. Sometimes,
copy and pasting will rob you of an opportunity to refine your understanding of
syntax and formatting.

Once you've typed out the example above,
save it to a file called `hello-world.html` in your `challenges` folder.

Now, open up that file in the Chrome Web Browser:

* Open Chrome
* Click `File`, then `Open File...`
* Navigate to the `challenges` folder
* Double-click the `hello-world.html` file


### What's Happening?

![Hello World JavaScript Example](https://s3.amazonaws.com/horizon-production/images/javascript-hello-world.png)

When the browser loads the HTML document, it creates the HTML elements defined
within the `<body></body>` tags. Then, the code within the `<script></script>` is
executed by the browser, adding the text `"JavaScript is Awesome!"` to the page.

All of this happens in milliseconds, so it seems instantaneous to us.


### Running Small Examples

We can also execute JavaScript code **in the browser**, without having to save
the code to a file. Open up the JavaScript Developer Console in Chrome
(View > Developer > JavaScript Console), and try the following examples:

```javascript
alert('This is an annoying popup alert! Wow!');
```

```javascript
5 + 10
```

```javascript
let mainElement = document.getElementById('main');
mainElement.innerHTML = 'Hello World!';
```

Executing code this way gives us a quick and easy way to try out examples we
read about, and validate our understanding of the subject.

### A Separation of Concerns

Currently, our `hello-world.html` file contains two different languages: HTML, and JavaScript.

We can do better. By organizing our code into separate files, we can define a
clear distinction between the **structure**, **presentation**, and **behavior** of our code.

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
    <div id="main"></div>
  </body>
  <script src="main.js"></script>  <!-- load javascript -->
</html>
```

```javascript
// main.js
let element = document.getElementById("main");
element.innerHTML = "JavaScript is Awesome!";
```

In the example above, our `index.html` references an external JS file. We place
the JavaScript reference at the end of the file,
so that the HTML is loaded and displayed first.

Separating our HTML, JS into individual files will be the preferred
method of writing our JavaScript code examples, moving forward.
We like setting up our code this way because:

* It keeps things organized for us as developers
* External JS files can be referenced by other web pages, so we don't have to repeat ourselves
* External JS files can be cached, resulting in end user performance benefits

### Commenting Code

When writing code, it is sometimes helpful to leave messages to yourself or
others. Throughout the following lessons, we will include comments in order to
help clarify the ideas being presented.

To that end, it is helpful to be able to distinguish between what is a comment
and what is actual code that will be executed.

##### Comments in HTML

```html
<!-- This is an HTML comment -->
```

##### Comments in JavaScript

```javascript
// This is a single-line JavaScript comment

/*
This is a
multi-line
JavaScript
comment.
*/
```

### Installing a Linter

Formatting your code can be a stumbling point when you are learning to
program. Luckily, there are tools to help us out. A **linter** gives us immediate
visual feedback about the code we write. Did we miss a semicolon? Did we forget
a closing parenthesis? A linter will give us this feedback immediately, so we
can spend more time focusing on learning the concepts of programming, and less
time troubleshooting syntax errors.

Install the **linter-jshint** package in Atom by following these steps:

![Atom linter-jshint package](https://s3.amazonaws.com/horizon-production/images/atom-linter-jshint.png)

* Open Atom
* Open `Preferences`
* Click the `Install` tab
* Type `linter-jshint` into the search box, and press Enter
* Click the `Install` button for the `linter-jshint` package

**Inline Mode**

After linter-jshint has installed, click 'Settings', and enable "Lint Inline
JavaScript".

**Tell JSHint to use ES6 Syntax**

Create a new file in your home directory called `.jshintrc`.
To do so, you can execute the following command on the command line:

```no-highlight
touch ~/.jshintrc
```

You can then open this file in your editor, by opening it with atom:

```no-highlight
atom ~/.jshintrc
```

Add the following configuration settings to that file:

```no-highlight
{
  "esversion": 6
}
```

We will talk about ES6 and why this configuration is important in a subsequent lesson.

[JSHint Options](http://jshint.com/docs/options/)

### Wrap Up

In this article, we covered the history of the JavaScript language. We set up
our JavaScript development environment, and we learned how to execute
JavaScript code in the browser. In future articles, we will cover the
JavaScript programming language in more detail.


### Resources

* [A Short History of JavaScript](https://www.w3.org/community/webed/wiki/A_Short_History_of_JavaScript)
* [How JavaScript Was Created - Speaking JavaScript](http://speakingjs.com/es5/ch04.html)
* [JavaScript - Wikipedia](https://en.wikipedia.org/wiki/JavaScript)
* [Chrome V8][V8_Wikipedia]
* [Mozilla SpiderMonkey](https://en.wikipedia.org/wiki/SpiderMonkey)
* [How to easily open files and URLs from the command line - David Wheeler](http://www.dwheeler.com/essays/open-files-urls.html)

[V8_Wikipedia]:https://en.wikipedia.org/wiki/V8_(JavaScript_engine)
