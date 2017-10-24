# Intro to React
##### Notes from GA course

# Props

Essentially make your app flexible.

Format: ```{this.props.property}```:

* ```this``` refers to the specific component instance.

* ```this.props``` will collect all the props for this component instance.

* ```this.props.property``` pulls the name property from this.props.

**Note:** The ```{}``` syntax in JSX renders the result of any expression inside it.

### Multiple props

If we have many props, it can get difficult to keep track of them all when passing everything in to render a component.

**Best Practice:**

* Organize values in some kind of object. (Do this in your ```index.js``` file)
* Pass props to the component from that object.

### Nesting components

We can call an object during the ```render``` ```return``` method — and that object can contain component calls.

* Pass a variable as a parameter. For example, pass the whole ```comments``` array with ```<Comment body={this.props.comments} />.```

* OR write a JavaScript expression inside brackets.

### Reusability

Components allow us to compartmentalize code and easily reuse parts we create.

We simply set the value of props and the component defines how everything should be displayed.

**This factors out redundancy.** Especially formatting.

Building and reusing components becomes especially powerful the more complex components become.

Imagine building a component for video search results inside YouTube.

The props list is huge:
* ton of links
* time information
* preview images
* options to add the result to a playlist
* and all sorts of other things.

---
---

## Review Guide: Introduction to React
Below, you'll find key terms, key code snippets and tools, best practices, and further reading - all covering the basics of React.

### Key Terms & Definitions


* **React**:
  * A framework created by developers at Facebook. It is aimed at being the 'view' of your Javascript application. It focuses on creating a component-based architecture.

* **Component**:
  * An independent, reusable piece of your user interface. A basic component looks like this:
```js
class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <p>Howdy</h1>
      </div>
    )
  }
}
```


* **JSX**:
  * A standard that React uses to represent HTML elements as XML tags. It looks like a template language but is much more powerful. Each JSX tag represents a React element, and a React class is composed of multiple elements. You express your visual user interface through nested JSX tags that can render additional components. JSX is not required for React, but it is incredibly useful.
  * JSX can look just like HTML, with `<h1>Hello world!</h1>`, but it can also get far more complicated.

* **Nested Component**:
  - Components called inside another component (like calling Comment components within a blog Post). Here is a diagram of the flow of information for a Comment component nested inside (called by!) a Post component:


* **Props**:
  * Arguments passed into a component, as though they were arguments to a function. The component can then use this data to render something or pass the data on to another component. For example, your `App.js` could have
```js
  ReactDOM.render(
  <Hello name={"Nick"} />,
  document.getElementById('root')
);
```
And your `Hello.js` component could have
```js
class Hello extends Component {
  render () {
    return (
      <h1>Hello {this.props.name}!</h1>
    )
  }
}
```

* **Virtual DOM**:
  * A virtual representation, or abstraction, of the DOM. React doesn't apply your changes to the DOM directly. While it creates and manipulates elements, it does so through custom React objects. The results of that manipulation are then rendered to the DOM. This prevents you from having to focus on constantly changing the state of a `<div>` tag.
  * The virtual DOM is automatically updated in React with the method `ReactDOM.render()`
  * When your `index.js` is processed, your virtual DOM is compared to the regular DOM, and only the element specified in `ReactDOM.render()` on the page updates.


### Other Key Code Snippets and Tools

* `<Component_Name />` uses **the name of the component to render**. Inside the `Component_Name` component, you return the content to render (in that component's render method).

* `create-react-app`:
  * A tool created by Facebook that will help you set up a barebones React app instantly, so you can just install the package and get coding.

* `document.getElementById('root')` finds **the DOM element to append that content to**. This argument can be any element on the page. Here, we're simply appending it to an element with the id `root`.


* `export default`
  * Usages: `export default Hello` or `export default Comment`. There is always a component name that's exported!
  * This call, at the bottom of a file containing at least one component, specifies the default named component to be imported by files. The `default` keyword means that anything else we try to import anything from this file that the app can't find, JavaScript will automatically revert to importing the named component here instead.
  * Only one default export is allowed per file.

* `render()`
  * Every component has, at minimum, a `render` method. The `render` method is what renders the component to the screen, so it controls what is displayed for this component. From the `render` method, we return what we want to display - for example, some JSX like `<h1>Hello world!</h1>`
  * Importantly, each `return` can only support one outermost element, so often there is a `div` wrapping the rest of the JSX.

```js
class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <p>Howdy</h1>
      </div>
    )
  }
}
```


* `ReactDOM.render()`
  - In your topmost file (for example, `index.js`), this defines what will be put on the screen. In the example below, we are rendering what `Component_Name` returns at the `root` element on the page.
  * Usage:
```js
  ReactDOM.render(
    <Component_Name />,
    document.getElementById('root')
  )
```



### Best Practices:

- Each component should be in a file unto itself.
  - Don't put multiple components into one Javascript file.
- Do not automatically render elements on the DOM *inside* its own component class definition.
  - If you look through your files, you'll see in your component classes, you define a `render()` method for that component, which is great.
  - That class then is called by `ReactDOM.render()` in **a different place, outside that class definition** (likely index.js).
  - In some tutorials or older code, you may find examples of `ReactDOM.render()` inside a component.
  - You should **avoid** this at all cost; this was an older technique in past versions of React.

### Further Reading

* [React.js Conf 2015 introduction](https://www.youtube.com/watch?v=KVZ-P-ZI6W4&feature=youtu.be&t=510)
  * We'd recommend starting around the 8:35 mark and watching until 16:30.
* [Official React Documentation on JSX](https://facebook.github.io/react/docs/jsx-in-depth.html)
  * This includes tutorials, documentation, and a community
* [More on the Virtual DOM](https://www.youtube.com/watch?v=-DX3vJiqxm4)
  * A 35 minute, in-depth video on everything involving the Virtual DOM
* [React without JSX](http://jamesknelson.com/learn-raw-react-no-jsx-flux-es6-webpack/).
  * A blog post on using React without JSX, in case you ever find yourself in this scenario

---
---

# Pete Hunt: Secrets of React's Virtual DOM

##### Why we built a virtual DOM, how it compares to other systems, and its relevance to the future of browser technologies.

“The art of programming is the art of organizing complexity, of mastering multitude and avoiding its bastard chaos as effectively as possible.” Edsger Dijkstra

### Data binding

Solves a critical problem, namely, that visualizing processes that evolve over time is much harder than visualizing a consistent snapshot at a certain point in time.

**Data binding** syncs state in your UI with state in your data model so you don't have to visualize change.

Think of it as a polyfill for reactive JS/DOM.

"All non-trivial abstractions, to some degree, are leaky."

Goal: reliable, predictable software. Simplicity is a prereq for reliability. This means **no interleaving**.

**Simple !== Familiar**

---
---

# State

Values stored in a component's state are mutable attributes. Mutable means "changeable."

We can access state values using this.state.val

Setting up and modifying state requires multiple steps —
* first explicitly declaring the mutation
* then defining methods to update our state

### ```constructor (props) {}```

The first thing we always put in a constructor is a call to ```super()```.
* "When this class is created, you should still do the default initialization for this class."

### ```.setState``` Method

Whenever we run .setState:

* Our component calculates the difference ("diff") between the current DOM and the virtual DOM node

* Then, it figures out how to update the state of the DOM in as few manipulations as possible

* It only replaces the current DOM with parts that have changed. This is a core advantage of React. Much better performance.

**In React, state just represents the state of data on our page. Something saved to state in React is not automatically saved to a database or to local storage. If you refresh the page, all state is lost.**

### State and Lifecycle

[React Documentation](https://reactjs.org/docs/state-and-lifecycle.html)

In applications with many components, it’s very important to free up resources taken by the components when they are destroyed. This is called “unmounting” in React.

We can declare special methods on the component class to run some code when a component mounts and unmounts.

These methods are called “lifecycle hooks”.

The ```componentDidMount()``` hook runs after the component output has been rendered to the DOM.

The ```componentWillUnmount()``` hook tears down components.

While ```this.props``` is set up by React itself and ```this.state``` has a special meaning, you are free to add additional fields to the class manually if you need to store something that is not used for the visual output.

### Using State Correctly


1. Do Not Modify State Directly
  1. The only place where you can assign this.state is the constructor.
  1. use ```setState()``` to modify state
  1. ex:
      ```
      // Wrong
      this.state.comment = 'Hello';
      // Correct
      this.setState({comment: 'Hello'});
      ```
1. State Updates May Be Asynchronous
  1. React may batch multiple ```setState()``` calls into a single update for performance.
  1. Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.
  1. To fix this, use a second form of ```setState()``` that accepts a function rather than an object.
    1. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument:
    ```
    // Correct
    this.setState((prevState, props) => ({
      counter: prevState.counter + props.increment
    }));
    ```
1. State Updates are Merged
  1. When you call ```setState()```, React merges the object you provide into the current state.
1. Data Flows Down
  1. Neither parent nor child components can know if a certain component is stateful or stateless, and they shouldn’t care whether it is defined as a function or a class.
  1. This is why state is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it.
  1. A component may choose to pass its state down as props to its child components: ie render ```{this.state.date.toLocaleTimeString()}```
  1. This also works for user-defined components
  1. This is commonly called a “top-down” or “unidirectional” data flow. Any state is always owned by some specific component, and any data or UI derived from that state can only affect components “below” them in the tree.
  1. In React apps, whether a component is stateful or stateless is considered an implementation detail of the component that may change over time. You can use stateless components inside stateful components, and vice versa.

### When to not use React

* If site content is static (mostly) rather than dynamic / frequently updated
* If you are not using large data sets or repeating content

---
---

# Review Guide: React State


### Key Terms & Definitions

* **Constructor**
  * A constructor is only called once, when the component is initially created.
  * Constructors say, "When you create an instance of this class, do this."
  * If you aren't doing anything special, you don't need to define a constructor method
    * It happens automatically for you using the default constructor inherited from the basic class (in our case, the `Component` class)
  * If you have a defined constructor method, the first line of it will always be `super()`.
    * `super()` means: "When this class is created, you should still do the default initialization for this class."
  * Refer to the "Key Code Snippets - Constructor" section below for an example

* **Map**
  - While not a key concept for React, map is a very handy thing to know.
  - A map is like a `for` loop.
    - With `map`, you make a new variable and with it iterate through each item in an array.
  - Refer to the "Key Code Snippets - Map" section below for examples.

* **State**
  * A `state` is in a component. It is similar to a `prop`, but it is used for data that changes over time.
  * Like `props`, which we access with `this.props.val`, we can access `state` values using `this.state.val`
  * Set initial state in the `constructor` method of a component, creating a name and an initial value
  * `state` just represents the state of data on our page. Something saved to `state` in React is not automatically saved to a database or to local storage. If you refresh the page, all `state` is lost.
  * Refer to the "Key Code Snippets - State" section below for examples



### Key Concepts
* **What triggers a UI change:**
  - In a React component, an update in either the `state` or `props` will trigger the method cascade that can lead to a `render`.
  - Our component calculates the difference ("diff") between the current DOM and the virtual DOM node
  - Then, it figures out how to update the state of the DOM in as few manipulations as possible
    - It only replaces the current DOM with parts that have changed.
    - This is one of React's core advantages.

- **Do not:**
  - Don't automatically render elements on the DOM *inside* their own component class definitions.
    - In a component class, you should define a `render` method for that component.
    - That class then is called by `ReactDOM.render` in **a different place, outside that class definition** (likely `index.js`).
  - In some tutorials or older code, you may find examples of `ReactDOM.render` inside a component, but you should avoid this at all costs; this was an older technique used in past versions of React.

- **Important Reminder**
  - Remember that `state` and `props` are not the same thing.
    - `State` represents the _state_ of your user interface component, and is changeable based on a user action (e.g. clicking a button to increase mood)
    - `props` are passed in to a component and not changeable by that component (e.g. the user's name might be passed in to be displayed)


### Key Code Snippets - Constructor

**A component with an empty constructor**

```js
class Hello extends Component {
  // what should happen when the component is first created
  constructor () {
    // make call to parent class' (Component) constructor
    super()
  }

  // what should the component render
  render () {
    //  ....
  }
}
```


### Key Code Snippets - Map

**General `map` Syntax**

```js
let <new_Variable_Name> = <the_Array_We_Are_Iterating>.map( (local_Variable_Name_to_Loop, index) => (
  <what_To_Do_With_Each_Item_in_Loop>
))
```

**Specific `map` Example**
Here's a simple example that makes a new array by adding `!` to each element of an array:

```js
const phrases = ['ice cream', 'dinosaurs', 'hobbits'] // the array

let excitedPhrases = phrases.map( (phrase, index) => {
  return newPhrase = phrase + '!'
})
// excitedPhrases is ["ice cream!", "dinosaurs!", "hobbits!"]
```


### Key Code Snippets - State

**Setting an initial state**
```js
constructor (props) {
  // make call to parent class' (Component) constructor
  super()
  // define an initial state
  this.state = {
    moodPoints: 1 // initialize this.state.moodPoints to be 1
  }
}
```

**Changing a state's value**

```js
increaseMood(e) {
  this.setState({
    moodPoints: this.state.moodPoints + 1
  })
}
```

**Using a state's value**
```html
<p>You are this happy: {this.state.moodPoints}</p>
```


### Further Reading

The links below are optional, but they're great resources for you.

- [Official React Documentation on State and Lifecycle](https://facebook.github.io/react/docs/state-and-lifecycle.html).
  - Specifically, this covers what should and should not go in state.


This is a list of documentation to help you learn more about binding and events:
- [React form documentation](https://facebook.github.io/react/docs/forms.html)
- [A list of events React supports](https://facebook.github.io/react/docs/events.html#supported-events)
- [How to handle events](https://facebook.github.io/react/docs/handling-events.html)

---
---

# ES6

ES6 is also called ES2015.

It refers to a set of language features that were added to the ECMAScript standard (JavaScript, for our intents and purposes).

**More changes are set to be adopted this year, which will be called ES8 and ES2017.**

The entire set of modern features from ES6 onward is sometimes referred to as "ESNext."

Features allow for:
* More concise (as in, less) code.
* Easier-to-read & easier-to-maintain code.
* Fun code! We'll see syntax that looks like a little rocket ship.

**React development assumes knowledge and use of ES6**

### Babel

Babel:

Takes your ES6 (and beyond) code and transpiles it into browser-friendly ES5.

Babel comes built-in with any project started using Create React App. This means your production build is ready for deployment.

Support for new language features is coming to browsers. Chrome already allows for them all.

Remember: ES6 is the JavaScript that you write, whereas JSX is just what your components will render to the actual screen.

Babel can transpile JSX to plain JavaScript — just like it transpiles ES6 JavaScript to ES5 - but they are not the same thing!

### Most Important Features

* ```const``` and ```let```
* Arrow functions
* Object literal shorthand
* Template literals
* Imports and modules

**Note: Semicolons are optional in ES6.** However, whether or not to use them is under constant debate in the wider programming community. *Can choose to include for clarity*

### ```const``` and ```let ```

* If you assign a ```const``` to a primitive type (such as a string, number, or boolean), you can't change its value at all.
  * This does not mean that a const is immutable: we can change a property of an object or add an item to an array. You just cannot change the object's reference.

* ```let``` has the same assignment rules as ```var```

**Why not use ```var```?**

Because ```var``` in JavaScript is scoped to the nearest parent function, it can be a bit unpredictable.

Using ```let``` is more predictable and straightforward.

let is a block scoped variable, so its value is scoped to the nearest curly braces {}, rather than to the whole function.

Thus, within a loop, let will create a new instance for each iteration instead of changing the original variable.

let makes the scope of i appear only inside the curly braces of the for loop.

With more predictable scope, let variables are easier to keep track of visually than vars and less likely to introduce bugs to your code.

### Imports and Modules

In ES6, you can import modules directly without declaring them as global variables.

This makes namespacing your app a non-issue.

You can also export multiple modules from a file.

### Arrow Functions & Implicit Returns

Using let or const with a function is not necessary, but in some cases it's good practice (more on that later).

If the function does nothing except a return:

``` javascript
// traditional
function addTwo(num) {
  return num + 2;
}

// arrow syntax
const addTwo = num => {
  return num + 2;
}

// now even further simplified
const addTwo = num => num + 2;
```

If there is no block following the arguments of an arrow function (meaning nothing in { } brackets), whatever follows is the return value of the function.

One "gotcha" to be aware of with implicit returns is that object literals must be wrapped in parentheses.

``` javascript
const isItActive = isActive => ({ active: isActive });
```

This function only returns one thing, but because it implicitly returns an object literal, it must be wrapped in parentheses.

### ```this``` binding

Whatever hack you've been using, you don't need it anymore! Arrow functions don't change the definition of this.

If ```this``` is already defined in the scope and you call an arrow function, you can access this directly.

### Object Literal Shorthand

If you want to assign a variable as the value of the key of the same name, you don't have to write it twice.

Having two different variables with the same name and setting them equal to each other is a pretty common practice.

``` javascript
const price = 100;

const item = {
  price
};
```

### Template Literals   ${ }

Template literals bring string interpolation to JavaScript.

This means we can create dynamic strings with more readable syntax.

```javascript
const greeting = name => `Hi, ${name}.`;
```

### Functional Components

* Simpler way of declaring React components because React class components give you properties that you don't always need (such as state, methods like setState).

Some components are purely presentational.

They take ```props``` and render the user interface.

When created as a React class, these components usually just contain a ```render``` method.

Rather than create them as classes, you can write them as functions.

A React functional component takes the ```props``` object as its argument and returns JSX.

Written as a class:

``` javascript
class Name extends React.Component {
  render() {
    return (
      <div>
        Name: {this.props.firstName} {this.props.lastName}
      </div>
    )
  }
}
```

As a functional component:
``` javascript
const Name = props => (
  <div>
    Name: {props.firstName} {props.lastName}
  </div>
)
```

**Use a functional component:**
* If you don't need anything special.
* If you are just returning JSX to render something.

**Use a class:**
* If you need your component to be stateful (That is, if you need the ability to use setState to respond to changes).
* If you need life cycle methods (if you need to do something when the component mounts, receives props, or unmounts).
* If you need a ref (that is, a reference to the DOM element rendered by the component).

**Functional Components are Declarative**
Rather than telling the DOM how to render the UI we want (which nodes to change and how), we can use JSX to "declare" how we want the markup to look, and React alters the DOM accordingly.


### Component Lifecycle

*These methods happen automatically, but you can call them to modify them.*

The lifecycle falls into three main pieces: mounting, updating, and unmounting.

You can use these methods to perform actions based on what's happening on the DOM.

componentDidMount, for example, is called immediately after a component is rendered to the DOM.

componentWillUnmount is called immediately before a component is removed from the DOM.


### Initializing

Methods include:
* constructor()
  *  This is sometimes referred to as a combination of getInitialState() and getDefaultProps().
* componentWillMount()
  * usually only needed in advanced use cases such as server rendering.
* componentDidMount()
  * called once, immediately after your component is rendered to the DOM. If you want to make an AJAX request when your component first renders, do it here. Also used to bind event listeners to your component.
* render()
  * called in two parts of the component lifecycle - at the beginning, when the component is being initiated/mounted, and when the component is being updated.
  * return JSX using the component's props and state.
  * You should never set state in render.

### Updating
* componentWillReceiveProps(newProps)
  * called anytime your component receives new props
  * If you need to change the state of your component based on changes in the props, do it here.
  * In a simple app, you generally won't need componentWillReceiveProps.
* shouldComponentUpdate(), componentWillUpdate(), componentDidUpdate()
  * performance optimizations
* render()

### Destruction / Unmounting
* componentWillUnmount()

In JavaScript classes, methods aren't bound by default. If you pass a component's method to a child component without binding it, it can lose its context and not behave the way you intend. To get around this, we bind class methods. This is another common use of the constructor method.

When a method is "bound" to a component, it means that, when the method is invoked, this will refer to the component and not to the context that invoked the method.

### unidirectional data flow

When several components in a view need to share state, you lift, or hoist, the state so that it's available to all the components that need it.

Define the state in the highest component you can, so that you can pass it to any components which will need it.

It's important to take time to define the app's structure before you start writing code. **Define the components and the state we need before we write the code.**

* Sketch out your app.
* Identify the components you need.
* Identify the state you need.
* Identify where that state needs to live.

### Immutability

Treating data as immutable makes application development easier.

Data mutations can be hard to track (say, in a debugger).

The array methods map, filter, and reduce return modified copies of the array and don't mutate the originals.

Similarly, there are ways to change data in objects that don't mutate the originals. ES6's ```Object.assign``` is useful for this:

```
const newObject = Object.assign({}, anObject, { foo: 'barrrrr' })
```

There are several mature JavaScript libraries that provide immutable data types and/or immutable methods that can make maintaining immutable data types simple.

One of the most popular is [Immutable.js](https://facebook.github.io/immutable-js) from Facebook, which provides immutable data types like List, Stack, Map, OrderedMap, Set, OrderedSet, and Record — and methods for making changes to your data like set, get, delete, and update.

---
---

# Review Guide: ES6 and Intermediate React
Below, you'll find key terms, key concepts, key code snippets, and further reading - all covering the basics of ES6, functional components, component lifecycle, unidirectional flow, and immutable data.

### Key Terms & Definitions

* **Arrow Functions**
  - This is a more concise syntax for declaring functions.
  - It can be simplified further if the function does nothing except a return.
  - `const addTwo = num => num + 2;`
  - Arrow functions don't change the definition of `this`.
  - If `this` is already defined in the scope and you call an arrow function, you can access `this` directly.
  * Refer to the "Key Code Snippets" section below for examples

* **Component Lifecycle**
  - React class components have lifecycle methods that are invoked at certain stages of a component's "life" on the DOM. Some of the life cycle methods you'll use frequently include:
    - `constructor()`: Initializes state, binds methods.
    - `componentDidMount()`: Makes AJAX requests, gets DOM refs, binds event listeners, sets `state` if necessary.
    - `componentWillUnmount()`: Unbinds event listeners, performs other clean up.
    - `componentWillReceiveProps()`: Updates `state` based on changes in components.
    - `render()`: Returns markup/UI.
  - React components' lifecycle events fall into three broad categories:
    - Initializing/mounting
    - Updating
    - Destruction/unmounting


![Life Cycles](https://ga-instruction.s3.amazonaws.com/json/REACT/assets/unit3/React_Component_Lifecycle.png)

* **ES6**
  * ES6 is also referred to or part of ES2015, ECMAScript, and ESNext.
  * ES6 is a standardized specification of JavaScript features introduced in 2015.
  * ES6 adds many new features, such as:
    * Arrow functions - `const doStuff = stuff => stuff + 5;`
    * `const` and `let` - `const name = 'Jim'`; `let age = 25;`
    * Object literal shorthand - `const name = 'Jim', jim = { name };`
    * Template literals - `const greet = person => 'Hi, ${person.firstName} ${person.lastName};'`
    * Imports and modules - `import MyModule from './MyModule';`
  * Refer to specific sections below for further information.

* **`const` and `let`**
  * `const` and `let` are new keywords for declaring variables: `const name = 'Jim'`; `let age = 25;`
  * `const` can't be reassigned; `let` can be.
  * `let` exists for block scoping.
  * Refer to the "Key Code Snippets" section below for examples


* **Functional Components**
  - A React functional component takes the `props` object as its argument and returns JSX.
  - It can have logic in it - but it's written as a function!
  - Here's a component written regularly, as a class:
  ```js
  class Name extends React.Component {
    render() {
      return (
        <div>
          Name: {this.props.firstName} {this.props.lastName}
        </div>
      );
    }
  }
  ```
  - Now here's the same component as a functional component:
  ```js
  const Name = props => (
    <div>
      Name: {props.firstName} {props.lastName}
    </div>
  );
  ```

* **Immutable Data Types**
  - Something that is **immutable** is something that cannot be changed.
  - State and props are to be treated as immutable; `const` variables are immutable.
  - Use immutable methods and immutable libraries to make maintaining immutable data types simple - see the Further Reading section.
    - The array methods `map`, `filter`, and `reduce` return modified copies of the array and don't mutate the originals.
    - ES6's `Object.assign` is a way to change data in objects that doesn't mutate the originals.


* **Object Literal Shorthand**
  - If you want to assign a variable as the value of the key of the same name, you don't have to write it twice. Before we would have:
  ```js
  const price = 100;

  const item = {
    price: price,
  };
  ```
  turns into:
  ```js
  const price = 100;

  const item = {
    price,
  };
  ```

* **Template Literals**
  -  Create dynamic strings with more readable syntax.
  ```js
  const name = 'Mike';
  const greeting = `Hi, ${name}.`;
  ```

* **Unidirectional Flow**
  - In React applications, data usually flows from the top down.
    - This is called unidirectional flow.
  - Define the state in the highest component you can, so that you can pass it to any components which will need it.


### Key Concepts

* **`const` vs `let`**
  - It's best practice to use `const` and `let`, rather than `var`, whenever possible
    - Including defining functions!
    - If the variable's value _will_ or _might_ change (unless you need a global scope) you'll likely declare it as a `let`.

* **When do you use a functional component?**
  * Use a **class** if you need:
    - Your component to be stateful (That is, if you need the ability to use `setState` to respond to changes).
    - Lifecycle methods (if you need to do something when the component mounts, receives `props`, or unmounts).
    - A `ref` (that is, a reference to the DOM element rendered by the component)
  * And only if you _don't_ need any of those things:
    - Use a functional component.


### Key Code Snippets - `const`

- `const` and `let` are new keywords for declaring variables.
- `const` can't be reassigned.
  - However, this does _not_ mean that a `const` is immutable.
  - JavaScript assigns by reference.
  - This means that a variable can't be reassigned entirely, but we *can* change a property of an object or add an item to an array.

Using `const`, this is **not** correct or doable - **it will throw an error, because a `const` variable cannot be reassigned.**
```js
const hi = 'hello';
hi = 'goodbye';
```

**However**, using `const`, this **is** correct and doable.

```js
const anObject = {
  hi: 'hello',
  animal: `muffin`
};
```

We can set:

```js
anObject.animal = 'puppy';
```

The new value of `anObject` is now:

```js
{
  hi: 'hello',
  animal: 'puppy'
}
```


### Key Code Snippets - `let`

- `const` and `let` are new keywords for declaring variables.
- `let` has the same assignment rules as `var`.
  - The value and reference of a `let` variable can change.
- `let` is a **block scoped** variable, so its value is scoped to the nearest curly braces {}, rather than to the whole function.

**Simple `let` example**

```js
let hi = 'hello';
hi = 'goodbye';
```
**`let` example of scoping**

```js
function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // curly braces = different variable
    console.log(x);  // Prints 2
  }
  console.log(x);  // Prints 1
}
```


### Key Code Snippets - Arrow functions

**Simple arrow function example:**
- In regular JavaScript
```js
function multiply(x, y) {
  return x * y;
}
```

- Same function using ES6 arrow syntax. Differences:
  - Declare the function as a variable: `var multiply`.
  - Pass in the parameters (here, `x` and `y`) after an equal sign
  - Put arrow function symbol `=>`
  - Put actual function definition

```js
const multiply = (x, y) => {
  return x * y;
}
```

**Implicit return example:**
- If the function only returns in one line:

```js
const addTwo = num => x * y;
```



### Further Reading

The links below are optional, but they're great resources for you.


##### Other links of interest to reinforce this learning
- [Facebook's Guide to Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html)
- [Facebook's Documentation on Components](https://facebook.github.io/react/docs/react-component.html).
- [Side Effect Definition](https://en.wikipedia.org/wiki/Side_effect_(computer_science))
  - Thse should be avoided in the `constructor`, so server requests shouldn't be made there. The accepted answer on this [Stack Overflow question](http://stackoverflow.com/questions/41612200/in-react-js-should-i-make-my-initial-network-request-in-componentwillmount-or-co), provided by a member of the React team at Facebook, gives more detail.
- [`window.setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)
- [Recursion Definition](https://en.wikipedia.org/wiki/Recursion_(computer_science)
  - This is good to know as that's what `incrementSpeed` is
- [Non-official Immutable Libraries](https://gist.github.com/jlongster/bce43d9be633da55053f)
- [Official Immutable.js from Facebook](https://facebook.github.io/immutable-js/)
  - One of several mature JavaScript libraries that provide immutable data types and/or immutable methods that can make maintaining immutable data types simple.
  - This which provides immutable data types like `List`, `Stack`, `Map`, `OrderedMap`, `Set`, `OrderedSet`, and `Record` — and methods for making changes to your data like `set`, `get`, `delete`, and `update`.
  - Just use the types and methods provided, and the library takes care of immutability for you.

#### Some of the features from ES6 and beyond we did _not_ cover, if you'd like to read about ES6 further:

- [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)/[Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [Generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
- [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Array Spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)
- [Array and Object Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [Object Rest Spread](https://babeljs.io/docs/plugins/transform-object-rest-spread/)

##### Complex topics not covered for your optional future further study
- [A Cartoon Guide To Flux by Lin Clark](https://code-cartoons.com/a-cartoon-guide-to-flux-6157355ab207#.m53psmlww)
- [Redux State Management Library](http://redux.js.org/)


---
---

# React Router

## Browser History Mechanics

We can write JavaScript programs that invoke browser mechanics, ie ```window.history.back() ```  and ```window.history.forward()```.

React broke old, traditional browser history mechanics and led to the introduction of new ways for websites to control what back and forward really mean.


A page is a whole HTML file that your browser downloads and displays. You know you're navigating between two different pages when you see your browser screen go blank then slowly load in a totally new page.

Pages can be all on the same site or on many different sites.

A site is a domain.

Routing defines what content is displayed when someone visits a certain URL.

A route pairs a URL with the content that should be displayed for that URL.

The ```/``` path is a special path called the root. It loads the home page.

Website URLs are generally split into succinct, descriptive, hierarchical categories.

### Old websites

* Spread their content across multiple pages.
* Use URLs to route users to different pages.
* Use URLs with hashtags to take the user to different content on the same page.

### Modern Single-Page Applications

Modern web apps serve up just one page and then change parts of its contents, without having to reload the entire page or send users to another page.

This is fast & persistent.

Single-page applications break the initial design of browser history mechanics.

Why is this? The back and forward actions were built specifically to go back and forth between different pages.

Because single-page apps only change their own content — without actually sending users to different web pages — the notion of back and forward is lost.

When users press the back button in a single-page application, they go back off of the single page, completely out of the SPA.

### Modern Browser History Mechanics

A few years ago, committees devised a way to upgrade the old browser history mechanics to accommodate modern SPAs.

The modern HTML5 specification (published in October 2014) introduced new browser history mechanics that make it easy to browse "back" and "forward" in single-page applications, even while actually staying on the same page.

HTML5 introduced:

```
.pushState()

.replaceState()
```

These are functions that allow web pages to save custom history data to the browser.

For example, if a Gmail user is looking at their search results page, Gmail can use ```.pushState``` to add the page to their custom browser history, aka  to save information in the browser about what the user is currently doing in the application.

Now, if the user clicks on an email and then clicks "back," they return to the search page — instead of a completely different site.

React Router automatically manages browser history when the user navigates between content.

React Router is actually a third-party library.

### General syntax for creating routes

React Router uses some of its own components to define how URLs are routed to your components and to create links to those routes.

You must have one ```<Router>``` component that wraps itself around multiple ```<Route>``` components.

Each ```<Route>``` component has two pieces:

* ```path``` - This defines the URL path that leads to the component.

* ```component``` - This defines what component users will see when they navigate to the path.

A single route looks like this:

```
<Route path="/contacts" component={Contact} />
```

The ```exact``` attribute means the component associated with the route will only be shown if users are at exactly that URL path.

If you forget to include the ```exact``` keyword, when someone navigates to ```/contact``` they will actually see two components, because ```/``` is a partial match for ```/contact.```

Important:  all the <Route> components are wrapped inside one <div>.


### ```<Link /> ```

This creates ```<a>``` tags and automatically integrates modern HTML5 browser history mechanics for the single-page application. It has one attribute:

```
to:
```

This designates what path to navigate to when the user clicks the link.

React strips out whitespace (e.g., spaces, returns, tabs) between elements.

We must insert a space manually by writing ```{' '}``` in order to get spaces between our links.

---
---

# APIs, Heroku

API commonly refers to web URLs that can be accessed for data: an API is a service that provides raw data for public use.

Why recreate data when we don't have to?

You want the information to be returned as quickly as possible, so users aren't waiting forever for your page to load.

All of this information — from all of these browsers and all of these servers — has to travel through the network. That's almost certainly the slowest part of the request cycle.

All data sent via HTTP are strings... but what we really want to pass between web applications is structured data.

Thus, native data structures can be serialized into a string representation of the data.

* JSON
* XML

JSON stands for "JavaScript object notation" and has become a universal standard for serializing native data structures for transmission.

XML stands for "eXtensible markup language".

While the majority of APIs are free to use, many of them require an API "key" that identifies the developer requesting data access. This is done to regulate usage and prevent abuse. Some APIs also rate-limit developers, meaning they have caps on the free data allowed during a given time period.

When you are call an API that require a key, it's up to you to store that key somewhere private. It is the only proof that you are you and that you are allowed to call that API.

It is essential that you not push your API keys to a public GitHub repo.

This is especially true when working with Amazon Web Services (AWS). [Or else](https://wptavern.com/ryan-hellyers-aws-nightmare-leaked-access-keys-result-in-a-6000-bill-overnight)...

### Dynamically manipulate the DOM with API data

```
fetch()
```

allows us to build single-page applications that do not require refreshes.

AJAX stands for "asynchronous JavaScript and XML." It's the method through which we are able to make HTTP requests. The standard requests we will make are GET, POST, PUT, PATCH, and DELETE.

Fetching JSON using JavaScript:

```javascript
fetch(url)
  .then((response) => {
    // Here you get the data to modify or display as you please
    })
  })
  .catch((error) => {
    // If there is any error, you will catch it here
  })
```

### React and APIs

Make API calls in ```componentDidMount()``` - if you need to load data from a remote endpoint, this is a good place to instantiate the network request.


The ```fetch()``` call involves many callbacks with several different functions. In order to preserve the initial context of our React component, we need to create a new variable, ```base```, to keep track of the original value of the this keyword. Saving the original value of ```this``` to ```base``` allows us to access methods like ```this.setState()``` through ```base.setState()``` throughout all of the different functions.

Example:

```
import React, {Component} from 'react';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shakeSpeare: ""
    }
  }

  componentDidMount() {
    // save a reference to `this` because the value of `this` will change
    // inside the different callback functions.
    var base = this

    // fetch a poem
    let poemApi = 'http://ShakeItSpeare.com/api/poem';
    fetch(poemApi)
      .then((response) => {
        return response.json()
      }).then((json) => {
          base.setState({ shakeSpeare: json.poem });
      }).catch((ex) => {
        console.log('An error occured while parsing!', ex)
      })
  }

  render() {
    let poetry = this.state.shakeSpeare;
    if (this.state.shakeSpeare) {
      return (
        <div>
        <h1>My favorite Shakespeare poem:</h1>
        {poetry}
        </div>
        } else {
          return (
            <div>
              <h1>My favorite Shakespeare poem:</h1>
              "Loading"
            </div>
          )
        }
     )
  }
}
```

# Imperative and Declarative Programming

### Imperative

* Outline what they need to do. (Pseudocode)
* Write it out step by step.
* Focuses on the why, how, where, and when your code executes.
* Allows precise control over your code and line-by-line code execution — you're writing every single thing that happens.

Imperative is commonly found in object-oriented programming environments where you focus on a line-by-line execution path, working with objects.

### Declarative

Instead of writing every single step yourself — i.e., instead of explicitly writing the why, how, where, and when of your program — this method only cares about what you want.

Instead of taking the time to write out a specific set of instructions to receive a result, you focus on just one thing: the result.

With modern web development's focus on simplicity, some developers have been leveraging declarative techniques.

React.js is one framework that uses a declarative approach. Vue.js is another. You'll find that many asynchronous JavaScript techniques rely on declarative programming techniques for ease of readability.

Neither method is incorrect, but declarative code tends to lead to DRY, clean code. And a final fun fact: Functional programming is a subset of declarative programming.

If you've ever used a functional language, such as Haskell or Lisp, or written calculus, you've likely written declarative code.


---
---

# Deploying a React App to Heroku

Terminal

* ```create-react-app your_app_name_here```
* ```cd $your_app_name_here```
* ```git init``` within the React application
  * Heroku CLI requires Git to handle versioning for deployment
* ```heroku create your_app_name_here --buildpack https://github.com/mars/create-react-app-buildpack.git```
  * Buildpack: set of scripts that Heroku will use to read React.js code and rebuild it to be hosted on the web
* Output:
  ```
  Creating app... done, ⬢ your_app_name_here
 Setting buildpack to https://github.com/mars/create-react-app-buildpack.git... done
 https://your_app_name_here.herokuapp.com/ | https://git.heroku.com/your_app_name_here.git
 ```
* ```git add -A```
* ```git commit -m "commit_message"```
* ```git push heroku master```
* ```heroku open```


By default, React Router (not included) uses hash-based URLs like https://example.com/index.html#/users/me/edit. This is nice and easy for getting started with local development, but for a public app you probably want real URLs like https://example.com/users/me/edit.

Create a ```static.json``` file to configure the web server for clean ```browserHistory``` URLs with React Router:

```
{
  "root": "build/",
  "clean_urls": false,
  "routes": {
    "/**": "index.html"
  }
}
```

### CORS

A CORS proxy is a service that allows developers (probably you) to access resources from other websites without having to own that website.

Limiting who can access your web server is important in web security - otherwise, someone could (for example) write code that runs on https://acatwebsite.com/ and changes all the content to be dogs.

CORS stands for "Cross-Origin Resource Sharing". CORS is a web standard that websites use to make sure that things accessing them (like you trying to get a cat picture) are safe.

When you try to go to a website where only one side is using CORS on the backend, you'll get an error saying that you aren't allowed to access the resource.

With a CORS proxy, you don't have to know anything about setting up CORS (unless you're interested in researching yourself!); it takes care of this for you. You just need the proxy, and then you can embed all the cat pictures you want.

Add ```"proxies"``` to ```static.json```:

```
{
  "proxies": {
    "/api/": {
      "origin": "${API_URL}"
    }
  }
}
```

Then, point the React UI app to a specific back-end API using the CLI:

```heroku config:set API_URL="https://api.example.com"
```

---
---

# Review Guide: APIs, Programming Types, and Heroku
Below, you'll find key terms, key code snippets, and further reading - all covering the basics of APIs, imperative and declarative programming, and Heroku.

### Key Terms & Definitions


* **API**
  * Stands for "application program interface"
  * A service that provides raw data for public use - usually in JSON or XML
  * For example, you can call the ISS API to get a list of all astronauts currently on the ISS by sending a request to `http://api.open-notify.org/astros.json`
  - Not all APIs are open; some require an API key (which isn't always free!). The API call will not work without it.
    - For example, this API call will not work: `http://api.openweathermap.org/data/2.5/weather?zip=60614,us`
    - However, if we add a key at the end, this API call will work: `http://api.openweathermap.org/data/2.5/weather?zip=60614,us&appid=052f26926ae9784c2d677ca7bc5dec98`

* **Declarative Programming**
  - As compared to Imperative Programming
  - When writing a program, you focus on just one thing: the result
  - Any asynchronous JavaScript techniques rely on declarative programming techniques for ease of readability
  - React is a JavaScript framework that uses a declarative approach
  - See the **Key Code Snippets** section for an example

* `fetch`
  - A request to a server - imagine literally requesting to "fetch" data.
  - Using the `fetch` method in a program is how you call an API
  - In React, your `fetch` requests will be in the `componentDidMount()` method
  - See "Key Code Snippets" for `fetch` examples

* **Heroku**
  - Heroku is a cloud platform that allows developers to quickly deploy applications to the internet.
  - It's free for your first five apps, and an excellent way to deploy an application live.

* **Imperative Programming**
  - As compared to Declarative Programming
  - An approach to programming where you write every single thing that happens.
  - This focuses on the _why_, _how_, _where_, and _when_ of a program.
  - It allows precise control over your code and line-by-line code execution
  - Commonly found in object-oriented programming environments
  - See the **Key Code Snippets** section for an example

* **JSON**
  * Stands for "JavaScript object notation"
  * A universal standard for serializing native data structures for transmission
  * It is lightweight, easy to read, and quick to parse.
  * Information is separated with braces {} and commas:

```json
  {
    "users": [
      {"name": "Superman", "id": 0},
      {"name": "Wonder Woman", "id": 1},
      {"name": "Black Panther", "id": 2}
    ]
  }
```

* **XML**
  * Stands for "eXtensible markup language".
  - While difficult to read, it remains a major format because of legacy usage across the web.
  - XML uses open tags and close tags, just like HTML. It looks like this:

```html
<users>
  <user id="0">
    <name>Superman</name>
  </user>
  <user id="1">
    <name>Wonder Woman</name>
  </user>
  <user id="2">
    <name>Black Panther</name>
  </user>
</users>
```


### Key Code Snippets

* **Fetch**
**`fetch` skeleton code**

```js

// In plain JavaScript
fetch(url)
  .then(function(response) {
    // Here you get the data to modify or display as you please
    })
  })
  .catch(function(ex) {
    // If there is any error, you will catch it here
  });


// Using ES6**

fetch(url)
  .then((response) => {
    // Here you get the data to modify or display as you please
    })
  })
  .catch((ex) => {
    // If there is any error, you will catch it here
  });
```

**Actual `fetch` example (using ES6) to get a list of astronauts currently on the ISS**

```js
let issApi = 'http://api.open-notify.org/astros.json'; /* what API are we calling? We get this URL from the ISS server*/
fetch(issApi)     // Call fetch() on that API URL
  .then((response) => {     // take the response provided by the server
    return response.json()  //  and return it with as JSON
  }).then((json) => {       // Take that JSON
    console.log('JSON from the ISS', json)   // Log it to the console
  }).catch((ex) => {    // If an error occurs instead of getting information back, catch it
    console.log('An error occured while parsing!', ex)    // Log the error to the console
  });
```

**Declarative and Imperative Programming**

To do the following pseudocode:

```
ask everyone in the room to line up
for every person in the line
  ask each person to come to the front of the room
  ask each person to speak their name
```

In each programming method:
```js

let room = ['Miguel', 'Katie', 'Susana', 'Shakira'];

//With **declarative** programming:

room.forEach((person) => {
  console.log("Declarative way: " + person);
});

// Conversely, with **imperative** programming:

for (let i = 0; i < room.length; i++) {
  let person = room[i];
  console.log("Imperative way: " + person);
}
```


### Further Reading

The links below are optional, but they're great resources for you to reinforce and augment the learning here.

- [Can I Use?](https://caniuse.com/)
  - An excellent website which allows you to search a programming feature (such as `fetch` or `CSS Transforms`) and returns which browsers support it.

**APIs:**

- [`fetch` in general on MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch).
  - It is important to note that while this is an ES6 standard, [some browsers](http://caniuse.com/#search=fetch) do not support it, including Internet Explorer (although Edge does).
  - You may need a polyfill for live projects. If you need one for a production project, [GitHub's polyfill](https://github.com/github/fetch) is very popular.

- [React documentation on `componentDidMount()`](https://facebook.github.io/react/docs/react-component.html#componentdidmount)
  - If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

- [Programmable Web API Directory](http://www.programmableweb.com/apis/directory)
  - A list of open APIs

- [JSON View plugin](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en).
  - A Chrome plugin which renders JSON to a more readable format


**Ways to deploy an app and CORS:**
  - [Heroku Docs](https://blog.heroku.com/deploying-react-with-zero-configuration#new-zero-configuration-experience)
  - [create-react-app docs](https://github.com/facebookincubator/create-react-app)
  - [Heroku buildpack for create-react-app](https://github.com/mars/create-react-app-buildpack#quick-start)
  - [URLs with React Router](https://github.com/mars/create-react-app-buildpack#routing-clean-urls)
    - So users have clean URLs
  - [MDN CORS documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS) 
