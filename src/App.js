import { useReducer, useEffect, useMemo } from "react";
import "./App.css";
import { AddUser } from "./components/Users/AddUser";
import { v4 as uuidv4 } from "uuid";
import { Toolbar } from "./components/Toolbar/Toolbar";

function reducerFn(latestState, actionDispatched) {

  if (actionDispatched.type === "NEW_USER") {
    const newUser = {
      id: uuidv4(),
      name: actionDispatched.name,
      surname: actionDispatched.surname,
      age: actionDispatched.age,
      isCheckBox: false,
    };
    return { ...latestState, userList: [...latestState.userList, newUser] };
  }

  if (actionDispatched.type === "DELETE_USER") {
    const filteredUser = latestState.userList.filter((user) => {
      return user.id !== actionDispatched.id;
    });

    return { ...latestState, userList: filteredUser };
  }

  if (actionDispatched.type === "RESET_AGE") {
    const newUserList = latestState.userList.map((user) => {
      // console.log('user from disptach action', { user })

      if (user.id === actionDispatched.id) {
        // console.log('user from id action', { user })
        return {
          ...user,
          age: 0,
        };
      }
      return user;
    });

    return { ...latestState, userList: newUserList }
  }

  if (actionDispatched.type === "RESET_SURNAME") {
    // return a new array with the list of users, but only in intended user we change the surname
    const newUserList = latestState.userList.map((user) => {
      if (user.id === actionDispatched.id) {
        return {
          ...user,
          surname: "Kowalski",
        };
      }
      return user;
    });

    return { ...latestState, userList: newUserList }
  }

  if (actionDispatched.type === "START_EDIT_USER") {

    const newListUser = latestState.userList.map((user) => {

      if (user.id === actionDispatched.id) {
        return {
          ...user,
          isEdit: true,
          isCheckBox: false,
        };
      }
      return user;
    });

    return { ...latestState, userList: newListUser };
  }

  if (actionDispatched.type === "SAVE_EDIT_USER") {
    // console.log('action user', actionDispatched)
    const newListUser = latestState.userList.map((user) => {
      if (user.id === actionDispatched.id) {
        // console.log('edit user', user)
        return {
          ...user,
          name: actionDispatched.name,
          surname: actionDispatched.surname,
          age: actionDispatched.age,
          isEdit: false,
          isCheckBox: false,
        };
      }

      return user;
    });

    return { ...latestState, userList: newListUser };
  }


  if (actionDispatched.type === 'START_CHECKBOX_USER') {
    const newListUser = latestState.userList.map((user) => {
      if (user.id === actionDispatched.id) {
        return {
          ...user,
          isCheckBox: true,
        }
      }
      return user
    })
    return { ...latestState, userList: newListUser };
  }

  // TOOLBAR actions

  if (actionDispatched.type === "DELETE_ALL") {
    return { ...latestState, userList: [] };
  }

  if (actionDispatched.type === "RESET_ALL_AGES") {
    const newListUser = latestState.userList.map((user) => {
      return {
        ...user,
        age: 0,
      };
    });

    return { ...latestState, userList: newListUser };
  }

  if (actionDispatched.type === "SEARCH_VALUE") {
    return { ...latestState, searchInput: actionDispatched.inputValue };
  }

  if (actionDispatched.type === "SORT_BY_AGES") {
    console.log("sort", actionDispatched);

    // copy of array, not mutate the original state
    const sortUsersArray = [...latestState.userList];

    sortUsersArray.sort(function (elemA, elemB) {
      console.log("sort array", sortUsersArray);
      const userA = Number(elemA.age);
      const userB = Number(elemB.age);
      console.log("[debug] userA", userA);
      console.log("[debug] userB", userB);

      if (userA > userB) {
        return 1;
      }

      if (userA < userB) {
        return -1;
      }

      return 0;
    });

    console.log('sort', sortUsersArray)

    return { ...latestState, userList: sortUsersArray };
  }
  if (actionDispatched.type === 'RESET_NAME_CHECKED') {
    const newListUser = latestState.userList.map((user) => {
      if (user.isCheckBox === true) {
        return {
          ...user,
          name: 'RESET NAME',
          isCheckBox: false,
        }
      }
      return user
    })
    return { ...latestState, userList: newListUser };
  }

  // throw new Error();
  return latestState;
}


// here we can add initial values if we want
const initState = { userList: [], searchInput: '' };

function App() {
  // callback fn will get initState
  const [{ userList, searchInput }, dispatch] = useReducer(
    reducerFn,
    initState,
    (initState) => {
      const localStorageValue = localStorage.getItem("users");
      if (localStorageValue) {
        const users = JSON.parse(localStorageValue);
        return { ...initState, userList: users };
      }
      return initState;
    }
  );

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(userList));
  }, [userList]);

  const filteredUserList = useMemo(() => {
    return userList.filter((user) => {
      return user.name
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    });
  }, [searchInput, userList])

  return (
    <div className="App">
      <Toolbar dispatch={dispatch} />
      <AddUser dispatch={dispatch} users={filteredUserList} />
    </div>
  );
}

export default App;
