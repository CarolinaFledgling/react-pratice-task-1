import React, { useState } from "react";
import { Wrapper } from "../Helpers/Wrapper";
import { Button } from "../UI/Button";
import { Card } from "../UI/Card";
import { ErrorModal } from "../UI/ErrorModal";
import styled from "./AddUser.module.css";

export const AddUser = ({ onAddUser }) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredSurname, setEnteredSurname] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

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

    onAddUser(enteredName, enteredSurname, enteredAge);

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
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          errorHandler={errorHandler}
        />
      )}
      <Card className={styled.input}>
        <form onSubmit={addUserHandler}>
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
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
