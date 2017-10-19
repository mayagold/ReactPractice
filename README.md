# Intro to React

---
---

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
