import { useEffect, useState } from "react";
import "./App.css";
import { AddUser } from "./components/Users/AddUser";
import { UserList } from "./components/Users/UserList";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [usersList, setUsersList] = useState(() => {
    const localStorageValue = localStorage.getItem('users')
    if (localStorageValue) {
      const users = JSON.parse(localStorageValue)
      return users
    }
    return []
  });

  // when the userList changed add to the localStorage 
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(usersList))
  }, [usersList])

  const addUserHandler = (userName, userSurname, age) => {

    console.log(userName, userSurname, age)

    setUsersList((prevUserList) => {
      const newUserList = [...prevUserList, {
        id: uuidv4(),
        name: userName,
        surname: userSurname,
        age: age,
      }]



      return newUserList

    });
  };

  const deleteUserHandler = (id) => {
    console.log(id)

    // filtered list without chosen element
    const filteredUser = usersList.filter((user) => {
      return user.id !== id
    })

    setUsersList(filteredUser)
  }

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} deleteUserHandler={deleteUserHandler} />
    </div>
  );
}

export default App;
