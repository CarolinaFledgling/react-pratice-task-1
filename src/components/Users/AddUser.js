import React from 'react'
import { Button } from '../UI/Button'
import { Card } from '../UI/Card'
import styled from './AddUser.module.css'

export const AddUser = () => {

    const addUserHandler = (e) => {
        e.preventDefault()
    }
    return (
        <Card className={styled.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">UserName</label>
                <input id="username" type='text' />
                <label htmlFor="age">Age</label>
                <input id="age" type='number' />
                <Button type="submit">Add User</Button>
            </form>
        </Card>

    )
}
