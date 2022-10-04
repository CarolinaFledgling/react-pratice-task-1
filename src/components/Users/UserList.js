import React, { useCallback } from "react";
import { Button } from "../UI/Button";
import { Card } from "../UI/Card";
import styled from "./UserList.module.css";

const UserListElement = React.memo(({ user, deleteUserHandler }) => {
    return <li className={styled.wrapperElement}>
        <p>
            {user.name} {user.surname}, {user.age} years old
        </p>
        <Button onClick={() => deleteUserHandler(user.id)}>Delete</Button>
    </li>;
})

export const UserList = React.memo(({ users, deleteUserHandler }) => {
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
                                <UserListElement key={user.id} user={user} deleteUserHandler={deleteUserHandler} />

                            );
                        })}
                    </ul>
                )}
            </Card>
        </>
    );
});
