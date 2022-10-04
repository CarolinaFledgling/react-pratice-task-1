import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { AddUser } from "./components/Users/AddUser";

import { v4 as uuidv4 } from 'uuid';

function App() {
  const [usersList, setUsersList] = useState(() => {
    const localStorageValue = localStorage.getItem('users');
    if (localStorageValue) {
      const users = JSON.parse(localStorageValue);
      return users;
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(usersList));
  }, [usersList])

  const addUserHandler = (userName, userSurname, age) => {

    console.log(userName, userSurname, age)

    setUsersList((prevUserList) => {
      const newUserList = [...prevUserList, {
        id: uuidv4(),
        name: userName,
        surname: userSurname,
        age: age,
      }];
      return newUserList;
    });
  };

  const deleteUserHandler = useCallback((id) => {
    console.log(id)

    const filteredUser = usersList.filter((user) => {
      return user.id !== id
    })
    setUsersList(filteredUser)
  }, [usersList])

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} users={usersList} deleteUserHandler={deleteUserHandler} />

    </div>
  );
}

export default App;
