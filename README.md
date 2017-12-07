# vuex-persist-demo

> A demo showcasing different persitance options for passing a Vuex store between multiple Vue instances when navigating a multi-page Vue application. This project demonstrates how to save store data to sessionStorage, localStorage, or within a cookie. This allows for persistence and access of store data which would be cleared (and the store set to its default data object) upon separate page loads.

This demo is built using a multi-page application structure based on the [https://github.com/Plortinus/vue-multiple-pages](vue-multiple-pages) project, and makes use of the [https://github.com/championswimmer/vuex-persist](vuex-persist) plugin.

## Dev

``` bash
# serve with hot reload at localhost:8010
npm install
npm run dev

```

## Pages

[http://localhost:8010/user/index.html](http://localhost:8010/user/index.html)

[http://localhost:8010/customer/index.html](http://localhost:8010/customer/index.html)


## Vuex Persistence Demo

On either of the main pages, there will be displayed several simple interactive counters, with each accessing their own counter value from different store loctions.

1. Default Vuex store object
2. Session storage
3. Local storage
4. Cookie storage

By navigating between pages, closing browser windows, etc., we can see how the counter values are each affected.

Local storage, session storage, and cookies can be viewed and cleared directly within the application tab of the browser developer tools.


## Structure

The Vuex store object is built with three modules, one for each of the main client data persistence options available. There is also a counter value on the Vuex store object which is not peristed loally, to demonstrate the base behavior.

Although we can dictate as much of the Vuex store object we desire to be persisted in each client storage option, for this demo each storage option will persist only one specific module of the Vuex store.

## Features

1. [Vue2](https://github.com/vuejs/vue)
2. [Webpack3](https://github.com/webpack/webpack)
3. [ElementUI](https://github.com/ElemeFE/element)
4. [Eslint](https://github.com/eslint/eslint)
5. [Postcss](https://github.com/postcss/postcss)
6. [Vuex](https://github.com/vuejs/vuex)
7. [vuex-persist](https://github.com/championswimmer/vuex-persist)
