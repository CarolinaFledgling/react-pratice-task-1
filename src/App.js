import { useReducer } from "react";
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

  if (actionDispatched.type === 'DELETE_USER') {
    const filteredUser = latestState.filter((user) => {
      return user.id !== actionDispatched.id
    })

    return filteredUser
  }

  if (actionDispatched.type === 'RESET_AGE') {

    return latestState.map((user) => {
      console.log('user from disptach action', { user })
      if (user.id === actionDispatched.id) {
        console.log('user from id action', { user })
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


  // throw new Error();
  return latestState
}


// [TODO] TASKS TO DO , add buttons in the Toolbar

// Delete all 
// Reset all ages to 0
// Sort by AGE
// EDIT 






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
      <AddUser dispatch={dispatch} users={usersList} />
    </div>
  );
}

export default App;
