import React, { useState } from 'react'
import { Button } from '../UI/Button'
import { Card } from '../UI/Card'
import styled from './Tollbar.module.css'

export const Toolbar = ({ dispatch }) => {
    const [searchValueInput, setSearchValueInput] = useState("");

    console.log(searchValueInput)

    dispatch({ type: "SEARCH_VALUE", searchedUser: searchValueInput })

    return (
        <>
            <Card className={styled.toolbar}>
                <Button className={styled.btn} onClick={() => dispatch({ type: 'DELETE_ALL' })}>DELETE ALL USERS</Button>
                <Button className={styled.btn} onClick={() => dispatch({ type: 'RESET_ALL_AGES' })}>RESET ALL AGES</Button>
                <Button className={styled.btn} onClick={() => dispatch({ type: 'SORT_BY_AGES' })}>SORT by Ages</Button>
                <div className="form-group">
                    <label htmlFor="search"> Search: </label>
                    <input
                        placeholder="search.."
                        type="text"
                        id="search"
                        onChange={(event) => {
                            setSearchValueInput(event.target.value);
                        }}
                    />
                </div>
            </Card>
        </>
    )
}
