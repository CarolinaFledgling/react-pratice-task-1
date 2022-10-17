# Simply React app

In  this project, I intend to practice the best way to build React app

- where we create a bunch of reused components, 🚀
- where they have small isolated pieces of HTML code and logic 🚀
- where every component really has its own task 🚀

I'm dividing this project  into 3 branches:

* main
* study-reducer 
* study-context-reducer

### DEMO

[DEMO, deploy from study-reducer branch ](https://delightful-semifreddo-59e69e.netlify.app/)

### Branch main

On branch main I am building a project to practice all these core patterns and concepts that are important for React,
like components, props, state, lifting state, styling…

## Focusing on :

- Practicing building reused components 🚀
- Showing Error Modal 🚀
- Conditional Loading Message 🚀
- Implementing modal using React Portal approach. 🚀
- Adding Local storage to store and retrieve data in the browser.


### Branch study-reducer
After building this small project with basic core patterns I decided to rebuild and extend with more features in order to 
practice using useReducer and useMemo hooks.

Go to branch:  [study-reducer](https://github.com/CarolinaFledgling/react-pratice-task-1/tree/study-reducer)

## Basic features app

- add user to the list 
- delete user from the list 
- edit each user
- reset age in each user on the list
- reset surname in each user on the list
- sort user by age from lowest to highest
- search user by name 
- delete all users
- reset all users age
- reset name in users with checked checkbox 

## Focusing on :

- Practice in using useReducer step by step🚀
- Practice in using useMemo 🚀
- Working with JavaScript Arrays Methods 🚀


### Branch study-context-reducer

On this branch I wanted to learn how to useContext hook.

Go to branch:  [study-context-reducer](https://github.com/CarolinaFledgling/react-pratice-task-1/tree/study-context-reducer)

React context helps us avoid the problem of props drilling.

Props drilling is a term to describe when you pass props down multiple levels to a nested component, 
through components that don't need it.

I created context using **createContext**method, next I wrapped the context Provider around component tree.
I put value which I will need it in components.
Next I read values within components by using the context consumer. 


## Changes added 

- Toggle button to change background color  
- Added Reducer Provider to avoid Props drilling

## What I learned :

- 🚩 Portal 🤔

My first approach with implementing Modal as a overlay on the page,
being rendered to the DOM was not ideal idea, because:

- is not a good structure, not good practice
- if you have such nested overlay content can lead to real problem with styling or with accessibility


To improve that approach I learned about Portal. 
Portals need two things.

1. You need a place you wanna port the Component to 
2. You need to let the Component know that it should have a portal to that place. 

More about Portal in React : [Portal](https://reactjs.org/docs/portals.html#gatsby-focus-wrapper)


- 🚩 useReducer 🤔

When your state become more complex, bigger and combines multiple related states you can use useReducer hook.😬

UseReducer return an array with two values. The latest state and dispatch function that allows you update the state.
So thats kind of the same as for useState, though the state updating fn will work differently.
Instead of just setting a new state value, you will **dispatch an action** and that action will be consumed by the first argument,
you pass to useReducer(**reducerFn**)

**reducerFn** - fn which gets the latest state automatically because this fn will be called by React and it gets the action that was dispatched.
React will call this reducer fn whenever a new action is dispatched. It gets the latest state managed by React and gets the action that was dispatched that triggered this reducer fn execution. **reducerFn** return a new updated state. 


**initialState** - some initial state 🙃

**initFn** - a fn to set initial state in case your initial state is a bit more complex. (e.g the result HTTP requests )


```bash

const[state, dispatchFn] = useReducer(reducerFn, initialState, initFn)


```

- 🚩 useContext hook 🤔

Instead of using render props, we can pass the entire context object to React.useContext() to consume context at the top of our component.

## Run Locally

Clone the project

```bash
  https://github.com/CarolinaFledgling/react-pratice-task-1.git
```

```bash
npm install

npm run start
# or
yarn start

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
