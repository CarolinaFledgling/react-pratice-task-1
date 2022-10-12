# Simply React app

In  this project, I intend to practice the best way to build React app

This project is divided into 2 branches : main and study-reducer

On branch main I am building a project to practice all these core patterns and concepts that are important for React,
like components, props, state, lifting state, styling…

- where we create a bunch of reused components, 🚀
- where they have small isolated pieces of HTML code and logic 🚀
- where every component really has its own task 🚀

## Focusing on :

- Practicing building reused components 🚀
- Showing Error Modal 🚀
- Conditional Loading Message 🚀
- Implementing modal using React Portal approach. 🚀


After building this small project with basic core patterns I decided to rebuild that 
project to start practicing using useReducer and useMemo hooks.

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

## Focusing on :

- Practicing using useReducer step by step🚀
- Practicing using useMemo 🚀
- Working with JavaScript Arrays Methods 🚀



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
