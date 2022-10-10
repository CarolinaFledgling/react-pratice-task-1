import React, { useCallback } from "react";
import { Button } from "../UI/Button";
import { Card } from "../UI/Card";
import styled from "./UserList.module.css";

const UserEditElement = React.memo(({ user, dispatch }) => {
    return <li className={styled.wrapperElement}>
        <p>
            {user.name} {user.surname}, {user.age} years old
        </p>
        <Button onClick={() => dispatch({ type: 'DELETE_USER', id: user.id })}>CONFIRM EDIT</Button>

    </li>;
})


const UserListElement = React.memo(({ user, dispatch }) => {
    return <li className={styled.wrapperElement}>
        <p>
            {user.name} {user.surname}, {user.age} years old
        </p>
        <div style={{ display: "flex", flexDirection: "column" }}>
            <Button onClick={() => dispatch({ type: 'DELETE_USER', id: user.id })}>Delete</Button>
            <Button onClick={() => dispatch({ type: 'RESET_AGE', id: user.id })}>Reset Age to 0</Button>
            <Button onClick={() => dispatch({ type: 'RESET_SURNAME', id: user.id })}>Reset SURNAME TO 'Kowalski' </Button>
            <Button onClick={() => dispatch({ type: 'EDIT', id: user.id })}>Edit</Button>
        </div>
    </li>;
})

export const UserList = React.memo(({ users, dispatch }) => {
    console.log(users);

    return (
        <>
            <Card className={styled.toolbar}>
                <Button className={styled.btn} onClick={() => dispatch({ type: 'DELETE_ALL' })}>DELETE ALL USERS</Button>
            </Card>
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
