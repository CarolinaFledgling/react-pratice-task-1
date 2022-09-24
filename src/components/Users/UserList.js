import React from 'react'
import { Card } from "../UI/Card";
import styled from "./UserList.module.css";

export const UserList = ({ users }) => {
    console.log(users)
    return (<>
        {users.length > 1 ? <Card className={styled.users}>
            <ul>
                {users?.map((user, index) => {
                    return (
                        <li key={index}>
                            {user?.name} {user?.surname}, {user?.age} years old
                        </li>
                    )
                })}
            </ul>
        </Card> : ''}</>

    )
}
