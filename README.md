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
