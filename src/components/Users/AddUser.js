import React, { useState } from "react";
import { Button } from "../UI/Button";
import { Card } from "../UI/Card";
import styled from "./AddUser.module.css";

export const AddUser = () => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredSurname, setEnteredSurname] = useState("");
    const [enteredAge, setEnteredAge] = useState("");

    const addUserHandler = (e) => {
        e.preventDefault();

        if (
            enteredAge.trim().length === 0 ||
            enteredName.trim().length === 0 ||
            enteredSurname.trim().length === 0
        ) {
            return;
        }
        // to be safe force a conversion of entered age to a number
        if (+enteredAge < 1) {
            return;
        }

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
    return (
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
    );
};
