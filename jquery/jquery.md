## Learning Objectives

* Practice grabbing DOM elements with jQuery
* Learn to manipulate DOM elements with jQuery

## Intro to jQuery Library

jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and AJAX much simpler with an easy-to-use API that works across a multitude of browsers.

## Getting Started

```no-highlight
$ et get jquery
$ cd jquery
$ bundle install
$ ruby app.rb
```

Navigate to http://localhost:4567/ and open the JS console.

## Syntax

You'll often see a `$` preceding a jQuery selector (as in the examples below). Using `$` is the same as including the name of the library (`jQuery`). For example, `$('h2')` is the same as `jQuery('h2')`.

## Grabbing Elements in jQuery

There are a number of ways to "grab" elements, using CSS selectors, from the DOM.

The `#` refers to an id, `.` refers to a class, and elements don't require any extra punctuation.

Try the following in your JS console:

**By id:** `$("#allston-diner");`
**By class:** `$(".top-bar");`
**By element:** `$("h1");`

## Assigning a jQuery object to a variable

You can assign jQuery objects to variables and then call jQuery functions on those variables, like below:

```javascript
let allstonDiner = $('#allston-diner');
allstonDiner.hide();
```

## Have Some Fun!

To get started, try out the following in your JS console:

**Hiding an element:**

```javascript
$("#allston-diner").hide();
```

**Showing an element:**

```javascript
$("#allston-diner").show();
```

**GET FANCY! FADE OUT!**

```javascript
$("#rosebud").fadeOut();
```

**Changing the styling of element(s):**

```javascript
$("h1").css("color", "lawngreen");
```

or maybe:

```javascript
$(".top-bar").addClass("feature");
```

Why did the top bar disappear? Let's take a look at the CSS for the class `feature.` You'll see that when this class is added to an element, its `visibility` becomes `hidden`!

**Remove an element and then append it somewhere else, then add styling to match that section of the page:**

```javascript
let cafeLunaTitle = $('#cafe-luna-title');
$('#cafe-luna').remove();
$('.resources').append(cafeLunaTitle);
$(cafeLunaTitle).addClass("list-item");
```

`.remove()` is different from `.hide()`, as `.remove()` takes the element out of the DOM completely. `.hide()` simply conceals it.

**Append something new to a list:**

```javascript
let newRestaurant = "Figaro's";
$(".resources").append("<li>" + newRestaurant + "</li>");
```

## Using `$(document).ready()`:

Loading your JavaScript at the bottom of the page will help you avoid trying to manipulate elements that aren't yet loaded onto the page, but `$(document).ready();` is an insurance policy against this problem. It's particularly useful for images or other content which may load after a JS file at the end of the `<body>` or in the `<footer>`.

It's best to only use one or fewer `$(document).ready();` in your JS file as you get started. While technically you can use more than one, it makes things run slightly slower (an optimization concern), more verbose (a style/readability concern) and arguably harder to debug (a developer experience concern).

Using only one `$(document).ready();` also gets you into the good habit of organizing your code into discrete functions.

```javascript
let someFunction = () => {
  //do a thing;
};

let someOtherFunction = () => {
  //do some other thing;
};

$(document).ready(() => {
  //someFunction();
  //someOtherFunction();
});
```

## Moving Away from JS Console

Using `$(document).ready()`, let's add these features:

**Toggle the image:**

```javascript
$("#zaftigs").click(() => {
  $("#zaftigs img").toggle();
});
```

**Append something new to the favorites list from the form (and, afterwards, reset the form field to a blank value):**

```javascript
$("#restaurant-button").click(() => {
  let newRestaurant = $("#restaurant-name").val();
  $("ul").append("<li>" + newRestaurant + "</li>");
  $("#restaurant-name").val("");
});
```

Notice how the above syntax for grabbing the value is different syntactically than in "vanilla," or regular, JS. The last line resets the name field to be an empty string. If you refresh the page, whatever you added will be lost because we did not add it to the database, so the data was not able to persist. Persisting data isn't within the scope of this article, but just as an FYI, you can use AJAX to accomplish this.

Side note: You'll notice the item was added near the top bar as well. This is because there's a `ul` in the topbar, so `$("ul")` is selecting both unordered lists in the DOM.

**Common event listeners:**

```
click()
bind()
preventDefault()
scroll()
```

## Summary

Now that you've gotten an introduction to jQuery, you have some cool DOM manipulation tricks in your toolbox! To get some more inspiration and decide what to do once you grab the item or items you want from the page, check out the [jQuery API documentation](http://api.jquery.com/).

Pro-tip: Don't mix jQuery with "vanilla" JS. When grabbing elements from the DOM with jQuery, we are returned jQuery objects. We can call jQuery effects and events on jQuery objects, but _not_ on objects grabbed with "vanilla" JS.

The below results in an error:

```javascript
let vanilla = document.getElementById("allston-diner")
vanilla.hide();
// => Uncaught TypeError: vanilla.hide is not a function(…)
```

Also, as a cautionary note:

Everything you can do in jQuery can also be written with "vanilla" JavaScript. Therefore, understanding the fundamentals of JavaScript as a language  -- its constructs and syntax, its orientation to particular programming concepts, etc. -- is important in order to effectively use jQuery. You want to be careful not to use jQuery as a crutch to avoid engaging with the internals of JavaScript and, instead, use it as a tool to expedite your work.
