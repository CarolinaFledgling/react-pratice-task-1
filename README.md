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
- Implementing modal using React Portal approach 🚀
- Adding LocalStorage, to save added users 🚀

## What I learned :

🔥 My first approach with implementing Modal as a overlay on the page,
being rendered to the DOM was not ideal idea, because:

- is not a good structure, not good practice
- if you have such nested overlay content can lead to real problem with styling or with accessibility
- screen reader has to interpret your HTML code which is being rendered

To improve that approach I learned about **Portal**.
Portals need two things.

1. You need a place you wanna port the Component to
2. You need to let the Component know that it should have a portal to that place.

More about Portal in React : [Portal](https://reactjs.org/docs/portals.html#gatsby-focus-wrapper)

🔥 I used LocalStorage

LocalStorage is the web Storage API, store data even the browser is closed with no expiration date.

🚩 To use LocalStorage we use methods:

```bash

setItem(): Add key and value to localStorage

```

```bash

getItem(): This is how you get items from localStorage

```

```bash

removeItem(): Remove an item by key from localStorage

```

```bash

clear(): Clear all localStorage

```

🚩 To store values in the LocalStorage object, we should know that it takes two parameters: a key and a value (store strings)

```bash

window.localStorage.setItem('name', 'Karolina');

```

Where name is the **key** and Karolina is the **value**.

🚩 To store arrays or object , you should use **JSON.stringify()** to convert to string

```bash

const person ={
  name:'Karolina',
  age:33,
}

window.localStorage.setItem('user', JSON.stringify(person));

```

🚩 To get items from localStorage, use **getItem()** method, accepts only key parameter, and returns value as a **string**

```bash

window.localStorage.getItem('user');

<!-- return: “{“name”:”Karolina”,”age”:”33”}” -->


```

🚩 To use value, you need to convert it back to an object using **JSON.parse()** method, which convert a JSON string into a JS object.

```bash

JSON.parse(window.localStorage.getItem('user'));

```
😊 MORE about Local Storage [Here](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

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
