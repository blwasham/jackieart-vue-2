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
* **vue instance** - app.vue
* **attribute** binding - v-bind with items on data
* **conditional rendering** - "Sold" item, "In Stock / Out of Stock"
* **list rendering** - v-for in portfolio that calls paintings component
* **Event binding** - 
* **Event Modifiers** - It is a very common need to call event.preventDefault() or event.stopPropagation() inside event handlers. Although we can do this easily inside methods, it would be better if the methods can be purely about data logic rather than having to deal with DOM event details. To address this problem, Vue provides event modifiers for v-on. Recall that modifiers are directive postfixes denoted by a dot.
    * .stop
    * .prevent
    * .capture
    * .self
    * .once
    * .passive 


