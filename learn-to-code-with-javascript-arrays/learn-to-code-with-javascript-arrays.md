### Lists

Lists are incredibly useful. You probably have a list of tasks you need to complete
this week. Before you make a trip to the grocery store, you make a list of
things to purchase so you won't forget anything. The menu at your favorite Thai
restaurant is a list of dishes the kitchen is stocked to make. The roster for a
classroom is a list of students that should be in attendance.

Programmers need lists, too. We just gave them a funny name.

### Arrays

An array is just an ordered list. You can add items to the list. You can remove
items from the list. And, because our lists exist in the magical realm of the
computer, we can do plenty of crazy things with them. Such as, `reverse` the
order of the items, replace items with specific attributes, or `sort` them.

Let's start calling our lists `Arrays`. That way JavaScript will understand what
we are talking about.

### Array Basics

You will learn the most in this lesson by typing in the examples provided. Open
up the JavaScript console in your browser and follow along.

##### Creating Arrays

```no-highlight
> new Array;
[]
```

Notice that when we called `new Array;`, we received back opening and closing
square brackets: `[]`. Programmers use lists, __\*ahem\*__, arrays, all the
time. This is the shorthand notation for an empty array. We can create a new
array this way:

```no-highlight
> [];
[]
```

An empty array is like a blank canvas. Let's create a new array with some tasks
for us to accomplish, and assign the new array to a variable named `todo`:

```no-highlight
> let todo = ['walk the dog', 'buy milk', 'learn about arrays'];
> todo;
['walk the dog', 'buy milk', 'learn about arrays']
```

##### Array Length

We can find out how many items are in our array by accessing the `length` property.

```no-highlight
> todo.length;
3
```

##### Accessing Items in Arrays

Arrays are a little bit funny about the way we access items. We can access an
item in the array by providing an `index`, which starts at zero. We can ask an
array what exists at any particular index by passing it a number in square
brackets. Try this out:

```no-highlight
> todo[1];
// what happens here?
```

Try out the code above. Don't worry, I'll still be here when you get back.

What did you expect to see when calling `todo[1]`? What did you get in return?
What happens when you try other numbers, such as `0`? What does this experiment
tell us about arrays?

### Indexing Arrays

Array indices start at zero, and go up to the length of the array minus one.
`todo[0]` will return the first item in the array. `todo[2]` will give us the
last item since the length is currently `3`.

We can visually represent our array like so:

```no-highlight
        +-----------+-----------+-----------+
        |           |           |           |
        |   'walk   |   'buy    |  'learn   |
array:  |    the    |   milk'   |   about   |
        |    dog'   |           |  arrays'  |
        |           |           |           |
        +-----------+-----------+-----------+
index:       [0]         [1]         [2]
```

What happens if we try to access `todo[3]` in our array?

```no-highlight
> todo[3];
undefined
```

We get `undefined`, which is JavaScript's way of saying that nothing is there.

Right now, you might be asking yourself, "Why do we start counting at zero
instead of one?" The [answer](http://stackoverflow.com/a/13519429/2675670) to
this is a bit complex.

To explain it simply, think of each cell in the above diagram as a section of
memory. If we know the location first cell, we can get the data in the first
cell, 'walk the dog'. To get to the second cell from the first, we need to move
exactly one cell to the right. To get to the third cell from the first, we need
to move exactly two cells. This is the basis of pointer arithmetic and finding
data in memory. In most every programming language, zero-based arrays indices
are the norm.

### Adding Items

##### `push`

Our array of things to do is growing. Let's amend our list to reflect the
current list of tasks we need to accomplish:

```no-highlight
> todo.push('read the news');
> todo;
['walk the dog', 'buy milk', 'learn about arrays', 'read the news']
```

The `push` method allows us to append items to our array

##### Adding Arrays

We can combine arrays using the `concat` method:

```no-highlight
> let todo1 = ['walk the dog', 'buy milk'];
> let todo2 = ['learn about arrays', 'read the news'];
> let todos = todo1.concat(todo2);
> console.log(todos);
['walk the dog', 'buy milk', 'learn about arrays', 'read the news']
```

Calling the `concat` method on `todo1` returns the combination of `todo1` and
`todo2`. We need to assign this return value to a new variable if we want to
use it later in our code.

##### The `unshift` Method

What if we have a really important task that belongs at the beginning of our
list? Well, via the `unshift` method, we can add items to the front of the
array.

```no-highlight
> todo.unshift('pay the rent!');
> todo;
=> ['pay the rent!', 'walk the dog', 'buy milk', 'learn about arrays', 'read the news']
```

##### The `splice` Method

What if after I learn about arrays, I want to learn more about JavaScript? Well, we
can insert a task into our ordered list of things to do! `splice` takes three
arguments: the index of the position to insert the item, the number of items to
delete, and the item to insert.

```no-highlight
> todo.splice(4, 0, 'learn JavaScript');
> todo;
['pay the rent!', 'walk the dog', 'buy milk', 'learn about arrays', 'learn JavaScript', 'read the news']
```

##### The `indexOf` Method

What if I want to find out the location of an item in my array of things to do?
The `indexOf` method does that for us:

```no-highlight
> todo.indexOf('pay the rent!');
0

> todo.indexOf('read the news');
5
```

##### Reassigning Items in an Array

What if I'm lactose intolerant? Well, we can reassign specific elements in the
array like so:

```no-highlight
> todo[2] = 'buy soy milk';
'buy soy milk'

> todo;
['pay the rent!', 'walk the dog', 'buy soy milk', 'learn about arrays', 'learn JavaScript', 'read the news']
```

It is great to know about all these methods we have available to us for
working with arrays. We have covered quite a bit so far. Don't feel that it is
necessary to commit all of these methods to memory. Just know that they
exist and that you can find them in the
[JavaScript docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
if you might need one of them in the future.

### Removing Items

##### The `shift` Method

Fast forward. It is the future, and we have accomplished some of our tasks. We
paid the rent, walked the dog, read the news, and finished the laundry. Let's
start crossing items off of our virtual list.

First, refresh your terminal, and then reassign the `todo` variable.

```no-highlight
> let todo = ['pay the rent!', 'walk the dog', 'buy soy milk', 'learn about arrays', 'read the news', 'do laundry']
> todo.shift();
'pay the rent!'

> todo.shift();
'walk the dog'

> todo;
['buy soy milk', 'learn about arrays', 'read the news', 'do laundry']
```

##### Before calling `shift`

```no-highlight
        +-----------+-----------+-----------+-----------+-----------+
        |           |           |           |           |           |
        |   'walk   |   'buy    |  'learn   |  'read    |  'do      |
array:  |    the    |    soy    |   about   |   the     |  laundry' |
        |    dog'   |    milk'  |  arrays'  |   news'   |           |
        |           |           |           |           |           |
        +-----------+-----------+-----------+-----------+-----------+
index:       [0]         [1]         [2]         [3]         [4]
```

##### After calling `shift`

```no-highlight
         +-----------+          +-----------+-----------+-----------+-----------+
         |           |          |           |           |           |           |
         |   'walk   |          |   'buy    |  'learn   |  'read    |  'do      |
return:  |    the    |  array:  |    soy    |   about   |   the     |  laundry' |
         |    dog'   |          |    milk'  |  arrays'  |   news'   |           |
         |           |          |           |           |           |           |
         +-----------+          +-----------+-----------+-----------+-----------+
                        index:       [0]         [1]         [2]         [3]
```

The `shift` method allows us to remove an item from the front of our array.
Imagine all of the items being `shift`ed to the left by one place, with the
first item being the return value.

##### Delete an Item

In order to remove an item from an array, we first need to find the index. Then,
we can use `splice` to remove it.

```no-highlight
> let i = todo.indexOf('read the news');
> todo.splice(i, 1);
> todo;
['buy soy milk', 'learn about arrays', 'do laundry']
```

### The `pop` Method

```no-highlight
> todo.pop();
'do laundry'

> todo;
['buy soy milk', 'learn about arrays']
```

The `pop` method removes and returns the last item from
our array. You can think of the `pop` method as the opposite of `push`, since
`push` adds to then end of the array, and `pop` removes from the end of the
array. `unshift` and `shift` are opposites too, except that they operate on the
front of the array. To use an analogy: `push` is to `pop`, as `unshift` is to
`shift`. Now you're talking like a programmer!

### Iterating through Items in an Array

Let's say that I want to print out my `todo` list in a nice format. I can find
the length of my array with the `length` method. Knowing the length of my array,
I can construct a `while` loop, that indexes each item in my array and prints
out the value.

```no-highlight
console.log('My To Do list:');

let todo = ['buy soy milk', 'learn about arrays', 'learn JavaScript'];
let i = 0;

while (i < todo.length) {
  console.log(' * ' + todo[i]);
  i++;
}
```

Let's stop for a second and ask ourselves what's going on with our variable `i` here.
We're using it as a counter to keep track of some data, and in this case, namely the
**index** of the element of the array. `i` is initialized as zero (pointing to the first
element of the array `todo`) and we increment it to go through each index of the
array with `i++`. `i++` is the JavaScript way of saying "take whatever `i` is and
add one to it."

As programmers, we end up looping through arrays quite often. We do this so
often, that the designers of JavaScript have created a method allowing us to iterate
through items in an array without having to keep track of the index. This method
is called the `forEach` method.

```no-highlight
console.log('My To Do list:');

let todo = ['buy soy milk', 'learn about arrays', 'learn JavaScript'];

todo.forEach((item) => {
  console.log(' * ' + item);
});
```

Here, we are using the concept of **iteration** to process each item in the array.

The first time through the `forEach` loop, `item` is assigned to the string `'buy
soy milk'`. We print out an asterisk, to represent a bullet point, and use
string concatenation to join the value of `item`, which is the string
`'buy soy milk'`.

The next time through the `forEach` loop, `item` is assigned to the string `'learn
about arrays'`. We print out an asterisk and the value stored in `item`, which
is `'learn about arrays'`.

The third and final time through the `forEach` loop, `item` is assigned to the
string `'learn JavaScript'`. We print out an asterisk and the value stored in
`item`, which is `'learn JavaScript'`.

You will use the `forEach` method *a lot* when dealing with arrays. Make sure to
commit this method to memory.

### Outro

Here, we mostly dealt with strings as the items in our array, but our array can
hold most anything. Be it integers, real numbers, or even other arrays.

Oh, and one more thing:

```no-highlight
> todo.delete('learn about arrays');
```
