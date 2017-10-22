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
