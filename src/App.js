import { useReducer, useEffect, createContext } from "react";
import "./App.css";
import { AddUser } from "./components/Users/AddUser";
import { v4 as uuidv4 } from "uuid";
import { Toolbar } from "./components/Toolbar/Toolbar";
import { ReducerContext } from "../ReducerContext.js";

// -------------REDUCER

function reducerFn(latestState, actionDispatched) {
  if (actionDispatched.type === "NEW_USER") {
    const newUser = {
      id: uuidv4(),
      name: actionDispatched.name,
      surname: actionDispatched.surname,
      age: actionDispatched.age,
      isCheckBox: false,
    };
    return [...latestState, newUser];
  }

  if (actionDispatched.type === "DELETE_USER") {
    const filteredUser = latestState.filter((user) => {
      return user.id !== actionDispatched.id;
    });

    return filteredUser;
  }

  if (actionDispatched.type === "RESET_AGE") {
    return latestState.map((user) => {
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
  }

  if (actionDispatched.type === "RESET_SURNAME") {
    // return a new array with the list of users, but only in intended user we change the surname
    const newUserList = latestState.map((user) => {
      if (user.id === actionDispatched.id) {
        return {
          ...user,
          surname: "Kowalski",
        };
      }
      return user;
    });
    return newUserList;
  }

  if (actionDispatched.type === "START_EDIT_USER") {
    const newListUser = latestState.map((user) => {
      if (user.id === actionDispatched.id) {
        return {
          ...user,
          isEdit: true,
          isCheckBox: false,
        };
      }
      return user;
    });

    return newListUser;
  }

  if (actionDispatched.type === "SAVE_EDIT_USER") {
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
          isCheckBox: false,
        };
      }

      return user;
    });
    return newListUser;
  }

  if (actionDispatched.type === "START_CHECKBOX_USER") {
    const newListUser = latestState.map((user) => {
      if (user.id === actionDispatched.id) {
        return {
          ...user,
          isCheckBox: true,
        };
      }
      return user;
    });
    return newListUser;
  }

  // TOOLBAR actions

  if (actionDispatched.type === "DELETE_ALL") {
    return [];
  }

  if (actionDispatched.type === "RESET_ALL_AGES") {
    return latestState.map((user) => {
      return {
        ...user,
        age: 0,
      };
    });
  }

  if (actionDispatched.type === "SEARCH_VALUE") {
    console.log("search user", actionDispatched);

    if (actionDispatched.inputValue === "") {
      return latestState;
    }

    const filteredList = latestState.filter((user) => {
      return user.name
        .toLowerCase()
        .includes(actionDispatched.inputValue.toLowerCase());
    });

    console.log("filtered arr", filteredList);
    console.log("latestState", latestState);
    return filteredList;
  }

  if (actionDispatched.type === "SORT_BY_AGES") {
    console.log("sort", actionDispatched);

    // copy of array, not mutate the original state
    const sortUsersArray = [...latestState];

    sortUsersArray.sort(function (elemA, elemB) {
      console.log("sort array", sortUsersArray);
      const userA = elemA.age;
      const userB = elemB.age;
      console.log("userA", userA);
      console.log("userB", userB);

      if (userA > userB) {
        return 1;
      }

      if (userA < userB) {
        return -1;
      }

      return 0;
    });

    console.log("sort", sortUsersArray);

    return sortUsersArray;
  }

  if (actionDispatched.type === "RESET_NAME_CHECKED") {
    const newListUser = latestState.map((user) => {
      if (user.isCheckBox === true) {
        return {
          ...user,
          name: "RESET NAME",
          isCheckBox: false,
        };
      }
      return user;
    });
    return newListUser;
  }

  // throw new Error();
  return latestState;
}

// here we can add initial values if we want
const initState = [];



const ReducerProvider = ({ children }) => {
  // callback fn will get initState
  const [usersList, dispatch] = useReducer(
    reducerFn,
    initState,
    (initState) => {
      const localStorageValue = localStorage.getItem("users");
      if (localStorageValue) {
        const users = JSON.parse(localStorageValue);
        return users;
      }
      return initState;
    }
  );

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(usersList));
  }, [usersList]);

  return (
    <ReducerContext.Provider value={{ usersList, dispatch }}>
      {children}
    </ReducerContext.Provider>
  );
};

function App() {
  return (
    <ReducerProvider>
      <div className="App">
        <Toolbar />
        <AddUser />
      </div>
    </ReducerProvider>
  );
}

export default App;
