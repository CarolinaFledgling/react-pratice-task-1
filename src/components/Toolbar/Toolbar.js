import React from 'react'
import { Button } from '../UI/Button'
import { Card } from '../UI/Card'
import styled from './Tollbar.module.css'

export const Toolbar = ({dispatch}) => {
    return (
        <>
            <Card className={styled.toolbar}>
                <Button className={styled.btn} onClick={() => dispatch({ type: 'DELETE_ALL' })}>DELETE ALL USERS</Button>
                <Button className={styled.btn} onClick={() => dispatch({ type: 'RESET_ALL_AGES' })}>RESET ALL AGES</Button>
            </Card>
        </>
    )
}
