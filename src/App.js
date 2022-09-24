import { useState } from "react";
import "./App.css";
import { AddUser } from "./components/Users/AddUser";
import { UserList } from "./components/Users/UserList";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userSurname, age) => {

    console.log(userName, userSurname, age)

    setUsersList((prevUserList) => {
      return (
        [...prevUserList, {
          id: uuidv4(),
          name: userName,
          surname: userSurname,
          age: age,
        }]

      );
    });
  };

  const deleteUserHandler = (id) => {
    console.log(id)

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
