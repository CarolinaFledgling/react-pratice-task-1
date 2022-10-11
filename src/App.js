import { useReducer, useEffect } from "react";
import "./App.css";
import { AddUser } from "./components/Users/AddUser";
import { v4 as uuidv4 } from 'uuid';
import { Toolbar } from "./components/Toolbar/Toolbar";

function reducerFn(latestState, actionDispatched) {

  if (actionDispatched.type === "NEW_USER") {
    const newUser = {
      id: uuidv4(),
      name: actionDispatched.name,
      surname: actionDispatched.surname,
      age: actionDispatched.age
    }
    return [...latestState, newUser]
  }

  if (actionDispatched.type === 'DELETE_USER') {
    const filteredUser = latestState.filter((user) => {
      return user.id !== actionDispatched.id
    })

    return filteredUser
  }

  if (actionDispatched.type === 'RESET_AGE') {

    return latestState.map((user) => {
      // console.log('user from disptach action', { user })

      if (user.id === actionDispatched.id) {

        // console.log('user from id action', { user })
        return {
          ...user,
          age: 0
        }
      }
      return user
    })
  }


  if (actionDispatched.type === 'RESET_SURNAME') {
    // return a new array with the list of users, but only in intended user we change the surname 
    const newUserList = latestState.map((user) => {
      if (user.id === actionDispatched.id) {
        return {
          ...user,
          surname: 'Kowalski'
        }
      }
      return user
    })
    return newUserList
  }


  if (actionDispatched.type === 'START_EDIT_USER') {
    const newListUser = latestState.map((user) => {
      if (user.id === actionDispatched.id) {
        return {
          ...user,
          isEdit: true,
        }
      }
      return user
    })
    return newListUser
  }

  if (actionDispatched.type === 'SAVE_EDIT_USER') {
    // console.log('action user', actionDispatched)
    const newListUser = latestState.map((user) => {
      if (user.id === actionDispatched.id) {
        // console.log('edit user', user)
        return {
          ...user,
          name: actionDispatched.name,
          surname: actionDispatched.surname,
          age: actionDispatched.age,
          isEdit: false,
        }

      }

      return user
    })
    return newListUser

  }



  // TOOLBAR actions 

  if (actionDispatched.type === 'DELETE_ALL') {
    return []
  }

  if (actionDispatched.type === 'RESET_ALL_AGES') {
    return latestState.map((user) => {
      return {
        ...user,
        age: 0
      }
    })
  }

  if (actionDispatched.type === 'SEARCH_VALUE') {
    // console.log('search user', actionDispatched)

    // const filteredArray = latestState.filter(user => user.name.toLowerCase().includes(actionDispatched.toLowerCase()))

    // return filteredArray


  }


  if (actionDispatched.type === 'SORT_BY_AGES') {

    console.log('sort', actionDispatched)

    const sortUsersArray = [...latestState]

    sortUsersArray.sort(function (elemA, elemB) {

      console.log('sort array', sortUsersArray)
      const userA = elemA.age
      const userB = elemB.age

      
      if (userA < userB) {

        return 1;
      }

      if (userB > userA) {
        return -1;
      }

    
      return 0
    
    })
    //console.log('sort', sortUsersArray)

    return sortUsersArray
  }



  // throw new Error();
  return latestState
}





// [TODO] TASKS TO DO , add buttons in the Toolbar
// Delete all 
// Reset all ages to 0
// Sort by AGE
// EDIT 



// here we can add initial values if we want 
const initState = [];

function App() {

  // callback fn will get initState
  const [usersList, dispatch] = useReducer(reducerFn, initState, (initState) => {
    const localStorageValue = localStorage.getItem('users');
    if (localStorageValue) {
      const users = JSON.parse(localStorageValue);
      return users;
    }
    return initState;

  })



  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(usersList));
  }, [usersList])




  return (
    <div className="App">
      <Toolbar dispatch={dispatch} />
      <AddUser dispatch={dispatch} users={usersList} />
    </div>
  );
}

export default App;
