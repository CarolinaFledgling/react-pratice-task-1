import { useCallback, useEffect, useReducer, useState } from "react";
import "./App.css";
import { AddUser } from "./components/Users/AddUser";
import { v4 as uuidv4 } from 'uuid';

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

  if( actionDispatched.type === 'DELETE_USER'){
    const filteredUser = latestState.filter((user) => {
      return user.id !== actionDispatched.id
    })

    return filteredUser
  }
  // throw new Error();
  return latestState
}


function App() {

  const [usersList, dispatch] = useReducer(reducerFn, [])

  // const [usersList, setUsersList] = useState(() => {
  //   const localStorageValue = localStorage.getItem('users');
  //   if (localStorageValue) {
  //     const users = JSON.parse(localStorageValue);
  //     return users;
  //   }
  //   return [];
  // });

  // useEffect(() => {
  //   localStorage.setItem('users', JSON.stringify(usersList));
  // }, [usersList])




  return (
    <div className="App">
      <AddUser dispatch={dispatch} users={usersList}  />
    </div>
  );
}

export default App;
