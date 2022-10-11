
import React, { useState } from "react";
import { Button } from "../../UI/Button";
import styled from './UserEditElement.module.css'



export const UserEditElement = React.memo(({ user, dispatch }) => {
    const [enteredSaveName, setEnteredSaveName] = useState("");
    const [enteredSaveSurname, setEnteredSaveSurname] = useState("");
    const [enteredSaveAge, setEntereSavedAge] = useState("");

    const [error, setError] = useState();

    const addUserHandler = (e) => {
        e.preventDefault();

        if (
            enteredSaveAge.trim().length === 0 ||
            enteredSaveName.trim().length === 0 ||
            enteredSaveSurname.trim().length === 0
        ) {
            setError({
                title: "We have a error",
                message: "Please enter a valid name, surname, and age",
            });
            return;
        }
        // to be safe force a conversion of entered age to a number
        if (+enteredSaveAge < 1) {
            setError({
                title: "Invalid field Age",
                message: "Please enter a valid Age (> 0) ",
            });
            return;
        }

        dispatch({ type: 'SAVE_EDIT_USER', name: enteredSaveName, surname: enteredSaveSurname, age: enteredSaveAge })

    };

    const userNameChangeHandler = (e) => {
        setEnteredSaveName(e.target.value);
    };
    const userSurnameChangeHandler = (e) => {
        setEnteredSaveSurname(e.target.value);
    };
    const userAgeChangeHandler = (e) => {
        setEntereSavedAge(e.target.value);
    };

    const errorHandler = () => {
        setError(null);
    };


    return (
        <>
            <li className={styled.wrapperElement}>
                <form onSubmit={addUserHandler}>
                    <div className={styled.inputGroup}>
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            type="text"
                            value={enteredSaveName}
                            onChange={userNameChangeHandler}
                        />
                    </div>
                    <div className={styled.inputGroup}>
                        <label htmlFor="surname">Surname</label>
                        <input
                            id="surname"
                            type="text"
                            value={enteredSaveSurname}
                            onChange={userSurnameChangeHandler}
                        />
                    </div>

                    <div className={styled.inputGroup}>
                        <label htmlFor="age">Age</label>
                        <input
                            id="age"
                            type="number"
                            value={enteredSaveAge}
                            onChange={userAgeChangeHandler}
                        />
                    </div>
                    <Button>Save</Button>
                </form>
            </li>
        </>
    );
})

