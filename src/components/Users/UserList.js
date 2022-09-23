import React from 'react'
import { Card } from "../UI/Card";
import styled from "./UserList.module.css";

export const UserList = ({ users }) => {
    return (
        <Card className={styled.users}>
            <ul>
                {users.map((user) => {
                    return (
                        <li>
                            {user.name} {user.surname}, {user.age} years old
                        </li>
                    )
                })}
            </ul>
        </Card>
    )
}
