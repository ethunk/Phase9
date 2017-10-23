# Introduction

*Closures* are a theoretical concept and a practical phenomenon in JavaScript.

We need to learn about closures for a couple of reasons. First, we need to be
familiar with this idea when interviewing and in the workplace. Second, we want
to understand how JavaScript works.

## Preface

Closures occur in most programming languages. The reason we learn about closures in the JavaScript part of the course is arbitrary. Both JavaScript and Ruby give [first class support to functions](https://en.wikipedia.org/wiki/First-class_function) (including closures), although they do so in different ways and with varying degrees of community use and discussion. However, as a fact of life, the JavaScript techniques that we need to learn require an explanation of closures. And that brings us here.

## Digging into the definition

With that, a closure is a function that has certain characteristics. From [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) (paraphrased):

> Closures are functions that refer to variables which are defined in an enclosing scope.

Let’s break that down. A closure is:

1. A function
2. It *internally* refers to a variable.
3. That variable is in scope (in other words, it *is* defined and accessible).
4. That variable was defined *external* to the function itself

When the closure is executed:

- The external information may be available or unavailable.
- The internal call to the variable still works.

That’s the long and short of it. To use metaphor, closures internally retain a kind of snapshot of the context in which they were created.

## A Closure in Practice

This distinction of internal versus external matters for understanding a closure. Let’s see an example:

```js
// The variable `name` is defined external to `displayName()`
let name = 'Omid';
let displayName = () => {
  //`name` is called internally
  console.log(name);
}

// `displayName` is invoked and works properly
displayName(); //=> 'Omid'
```

The function `displayName` is a closure. It internally refers to `name`, but `name` was defined externally. And when we execute `displayName`, the console contains the desired output.

Important Note: In JavaScript, a function is not *invoked* until you invoke it with parentheses. Those parentheses can contain arguments or be empty, as above.

But `displayName` is not a very interesting closure, because `name` is in scope when `displayName` is executed. We have to find a situation when the external variable is no longer in scope AND STILL the internal reference to the variable works. That will really prove the point and illustrate what makes closures interesting.

So, to prove that the internal function is actually retaining the variable that was defined externally, we have to ensure that the external information is gone--out of scope. As in this example:

```js
let buildApplePie = () => {
  let mainIngredient = 'apples';
  let otherIngredient = 'cinnamon';

  // Here is the internal function
  let mixIngredients = () => {
    //  It references variables that are external to it
    return `${mainIngredient} and ${otherIngredient}`;
  }

  // The outer function returns the internal function here, but notice the internal function is returned uninvoked.
  return mixIngredients;
}


// We invoke the outer function it to have it return an uninvoked function. We assign it.
let makeTodaysPie = buildApplePie();

// We invoke here, and it works.
makeTodaysPie(); //=> 'apples and cinnamon'
```

The internal function `mixIngredients` is a closure because of the variables `mainIngredient` and `otherIngredient` being defined outside of it and referenced inside. Since the outer function was executed, those variables are no longer available. But the internal function (which was returned by the outer function) still works because it keeps that snapshot of what was in scope when it was defined.

It's almost like closures can't let go of the past. Very cool.

In the end, what makes this example so clear has to do with invocation. The difference between invoked and un-invoked functions turns out to be critically important to prove that a closure has been created. And that’s a feature of JavaScript: a function can be passed around like data without necessarily being invoked. We used that feature of JavaScript to let the internal function wait without being invoked until the outer function finished executing.

## Conclusion

**A closure is just a function. It is special because it remembers the scope in which it was defined**. Even if that scope is gone during execution. The best way to prove that we understand closures is to recognize that they exist and to use them to our advantage. But what's the advantage? We just learned that they exist, but it's not clear what's good about them. This might help.

We told this story by focusing on the internal function--the closure. But the primary advantage was not necessarily part of the closure. Huh? Let's look at the example we used above:

```js
buildApplePie = () => {
  let mainIngredient = 'apples';
  let otherIngredient = 'cinnamon';

  mixIngredients = () => {
    return `${mainIngredient} and ${otherIngredient}`;
  }

  return mixIngredients;
}
```

After we end the definition of `buildApplePie`, we can no longer call `mainIngredient` or `otherIngredient`. Those are only in scope inside `buildApplePie`. However, since JavaScript lets us put a function inside a function, we were able to use those variables without *polluting the global namespace*, which is a fancy way of saying we didn't put a bunch of unecessary variables into scopes where they don't belong. Closures allow us to control (and restrain) the scope of variables that we only need in some contexts, because we let outer variables go out of scope while creating functions that still use the variables internally.

This makes it possible to create more powerful patterns of logic, like the [module pattern](http://eloquentjavascript.net/10_modules.html). There are other uses, thoughts and benefits to consider with closures, but what we have covered so far is a good start.
