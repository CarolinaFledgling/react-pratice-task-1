import { useState } from "react";
import "./App.css";
import { AddUser } from "./components/Users/AddUser";
import { UserList } from "./components/Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userSurname, age) => {

    console.log(userName, userSurname, age)

    setUsersList((prevUserList) => {
      return (
        [...prevUserList, {
          name: userName,
          surname: userSurname,
          age: age,
        }]

      );
    });
  };

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
