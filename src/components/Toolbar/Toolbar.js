import React, { useContext, useState } from 'react'
import { ReducerContext } from '../../ReducerContext'
import { Button } from '../UI/Button'
import { Card } from '../UI/Card'
import styled from './Tollbar.module.css'

export const Toolbar = () => {

    const { toggleFunction, themeToggle, dispatch } = useContext(ReducerContext)

    return (
        <Card className={styled.toolbar} style={themeToggle ? { background: "#011C27" } : {}} >
            <Button className={styled.btn} onClick={() => dispatch({ type: 'DELETE_ALL' })}>DELETE ALL USERS</Button>
            <Button className={styled.btn} onClick={() => dispatch({ type: 'RESET_ALL_AGES' })}>RESET ALL AGES</Button>
            <Button className={styled.btn} onClick={() => dispatch({ type: 'SORT_BY_AGES' })}>SORT by Ages</Button>
            <Button className={styled.btn} onClick={() => dispatch({ type: 'RESET_NAME_CHECKED' })}>RESET NAME in CHECKED USERS</Button>
            <div className={styled.formGroup}>
                <label htmlFor="search"> Search: </label>
                <input
                    placeholder="search.."
                    type="text"
                    id="search"
                    onChange={(e) => dispatch({ type: "SEARCH_VALUE", inputValue: e.target.value })}
                />
            </div>
            <Button onClick={toggleFunction}>{themeToggle ? `Dark Mode` : `Light Mode`}</Button>
        </Card>
    )
}
