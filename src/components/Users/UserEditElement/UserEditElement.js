
import React, { useState } from "react";
import { Button } from "../../UI/Button";
import styled from './UserEditElement.module.css'



export const UserEditElement = React.memo(({ user, dispatch }) => {
    
    const [enteredSaveName, setEnteredSaveName] = useState(user.name);
    const [enteredSaveSurname, setEnteredSaveSurname] = useState(user.surname);
    const [enteredSaveAge, setEnteredSavedAge] = useState(user.age);



    const addUserHandler = (e) => {
        e.preventDefault();


        dispatch({ type: 'SAVE_EDIT_USER', name: enteredSaveName, surname: enteredSaveSurname, age: enteredSaveAge, id: user.id })

    };

    const userNameChangeHandler = (e) => {
        setEnteredSaveName(e.target.value);
    };
    const userSurnameChangeHandler = (e) => {
        setEnteredSaveSurname(e.target.value);
    };
    const userAgeChangeHandler = (e) => {
        setEnteredSavedAge(e.target.value);
    };




    return (
        <>
            <li className={styled.wrapperElement}>
                <form>
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
                    <Button onClick={addUserHandler}>Confirm</Button>
                </form>
            </li>
        </>
    );
})

