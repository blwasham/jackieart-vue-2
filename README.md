# jackieart-vue-2

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

-----------------------------------------
## Repo Notes
* **Vue instance** - [guide](https://vuejs.org/v2/guide/instance.html) See app.vue. Review life cycle hooks
* **Attribute binding** - v-bind with items on data
* **Conditional rendering** - "Sold" item, "In Stock / Out of Stock" v-if v-else-if v-else
* **List rendering** - v-for in portfolio that calls paintings component. 
    * When iterating over an object, the order is based on the enumeration order of Object.keys(), which is not guaranteed to be consistent across JavaScript engine implementations.
    * Don’t use non-primitive values like objects and arrays as v-for keys. Use string or numeric values instead. 
    * Array Change Detection - 
        * Due to limitations in JavaScript, Vue cannot detect the following changes to an array:
            * When you directly set an item with the index, e.g. vm.items[indexOfItem] = newValue
            * When you modify the length of the array, e.g. vm.items.length = newLength
    * Object Change Detection - 
        * Vue does not allow dynamically adding new root-level reactive properties to an already created instance. However, it’s possible to add reactive properties to a nested object using the Vue.set(object, propertyName, value) method. For example, given: 
* **Event binding** - v-for using arrays or objects
* **Event Modifiers** - [events guide](https://vuejs.org/v2/guide/events.html) Common need to call event.preventDefault() or event.stopPropagation() inside event handlers. Although we can do this easily inside methods, it would be better if the methods can be purely about data logic rather than having to deal with DOM event details. To address this problem, Vue provides event modifiers for v-on. Recall that modifiers are directive postfixes denoted by a dot.
    * .stop
    * .prevent
    * .capture
    * .self
    * .once
    * .passive 
* class & style binginds
* **Forms** - [forms guide](https://vuejs.org/v2/guide/forms.html) See "Thoughts Form"
* **Props/Emitting Events** - See "Portfolio>Painting>AddToCart". Also see "Thoughts" for both passing props(thoughts-list) and emitting event(thoughts-form). Also emit event for addToCart 

## Other Topics
* **Slots** - https://vuejs.org/v2/guide/components-slots.html
* **Vue Router** - https://router.vuejs.org/
* **Vuex** - https://vuex.vuejs.org/guide/



