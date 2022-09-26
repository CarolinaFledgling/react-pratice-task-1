# Simply React app

In that small project I wanted to practice all these core patterns and concepts that are important for React,
like components, props, state, lifting state, styling…


- where we create a bunch of reused components, 🚀
- where they have small isolated pieces of HTML code and logic 🚀
- where every component really has its own task 🚀

## Focusing on :

- Practicing building reused components 🚀
- Showing Error Modal 🚀
- Conditional Loading Message 🚀
- Handling added and delete user form in the list 🚀
- Implementing modal using React Portal approach. 

## What I learned :

My first approach with implementing Modal as a overlay on the page,
being rendered to the DOM was not ideal idea, because:

- is not a good structure, not good practice
- if you have such nested overlay content can lead to real problem with styling or with accessibility
- screen reader has to interpret your HTML code which is being rendered

To improve that approach I learned about Portal. 
Portals need two things.

1. You need a place you wanna port the Component to 
2. You need to let the Component know that it should have a portal to that place. 

More about Portal in React : [Portal](https://reactjs.org/docs/portals.html#gatsby-focus-wrapper)

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
