import React, { memo, useContext, useState } from "react";
import { ReducerContext } from "../../ReducerContext";
import { Wrapper } from "../Helpers/Wrapper";
import { Button } from "../UI/Button";
import { Card } from "../UI/Card";
import { ErrorModal } from "../UI/ErrorModal";
import styled from "./AddUser.module.css";
import { UserList } from "./UserList";

const ButtonMemo = memo(() => <Button type="submit">Add User</Button>)

export const AddUser = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredSurname, setEnteredSurname] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  //Context
  const { dispatch, themeToggle } = useContext(ReducerContext)

  // [TODO] add btn which change theme 

  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();

    if (
      enteredAge.trim().length === 0 ||
      enteredName.trim().length === 0 ||
      enteredSurname.trim().length === 0
    ) {
      setError({
        title: "We have a error",
        message: "Please enter a valid name, surname, and age",
      });
      return;
    }
    // to be safe force a conversion of entered age to a number
    if (+enteredAge < 1) {
      setError({
        title: "Invalid field Age",
        message: "Please enter a valid Age (> 0) ",
      });
      return;
    }

    dispatch({ type: 'NEW_USER', name: enteredName, surname: enteredSurname, age: enteredAge })


    setEnteredAge("");
    setEnteredName("");
    setEnteredSurname("");
  };

  const userNameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const userSurnameChangeHandler = (e) => {
    setEnteredSurname(e.target.value);
  };
  const userAgeChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div style={themeToggle ? { background: "#011C27" } : {}}>
      <Wrapper>
        {error && (
          <ErrorModal
            title={error.title}
            message={error.message}
            errorHandler={errorHandler}
          />
        )}
        <Card className={styled.input}>
          <form onSubmit={addUserHandler} autoComplete="off">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={enteredName}
              onChange={userNameChangeHandler}
            />
            <label htmlFor="surname">Surname</label>
            <input
              id="surname"
              type="text"
              value={enteredSurname}
              onChange={userSurnameChangeHandler}
            />
            <label htmlFor="age">Age</label>
            <input
              id="age"
              type="number"
              value={enteredAge}
              onChange={userAgeChangeHandler}
            />
            <ButtonMemo />
          </form>
        </Card>
        <UserList />
      </Wrapper>
    </div>
  );
};
