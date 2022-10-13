import React from "react";
import { Button } from "../UI/Button";
import { Card } from "../UI/Card";
import { UserEditElement } from "./UserEditElement/UserEditElement";
import styled from "./UserList.module.css";






const UserListElement = React.memo(({ user, dispatch }) => {

    console.log('user', user)
    return (
        <li className={styled.wrapperElement}>
            <input type="checkbox" onChange={() => dispatch({ type: 'START_CHECKBOX_USER', id: user.id })} />
            <div className={styled.textGroup}>
                <span>{user.name}</span>
                <span>{user.surname},</span>
                <span>{user.age}  years old</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", marginLeft: "auto" }}>
                <Button onClick={() => dispatch({ type: 'DELETE_USER', id: user.id })}>Delete</Button>
                <Button onClick={() => dispatch({ type: 'RESET_AGE', id: user.id })}>Reset Age to 0</Button>
                <Button onClick={() => dispatch({ type: 'RESET_SURNAME', id: user.id })}>Reset SURNAME TO 'Kowalski' </Button>
                <Button onClick={() => dispatch({ type: 'START_EDIT_USER', id: user.id })}>Edit</Button>
            </div>
        </li>
    )
})

export const UserList = React.memo(({ users, dispatch }) => {
    console.log(users);

    return (
        <>

            <Card className={styled.users}>
                {users.length === 0 ? (
                    ""
                ) : (
                    <ul>
                        {users.map((user) => {
                            return (
                                user.isEdit ? <UserEditElement key={`user-${user.id}`} user={user} dispatch={dispatch} /> : <UserListElement key={user.id} user={user} dispatch={dispatch} />

                            );
                        })}
                    </ul>
                )}
            </Card>
        </>
    );
});
