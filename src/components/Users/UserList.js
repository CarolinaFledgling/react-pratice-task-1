import React from "react";
import { Button } from "../UI/Button";
import { Card } from "../UI/Card";
import styled from "./UserList.module.css";

export const UserList = ({ users, deleteUserHandler }) => {
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

                                <li key={user.id} className={styled.wrapperElement}>
                                    <p>
                                        {user.name} {user.surname}, {user.age} years old
                                    </p>
                                    <Button onClick={()=>deleteUserHandler(user.id)}>Delete</Button>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </Card>
        </>
    );
};
