import React from 'react'
import { Button } from './Button'
import { Card } from './Card'

import styled from './ErrorModal.module.css'

export const ErrorModal = ({ title, message, errorHandler }) => {

    const onCloseBtnHandler = () => {
        errorHandler()
    }
    return (
        <>
            <div className={styled.backdrop} onClick={onCloseBtnHandler}></div>
            <Card className={styled.modal}>
                <header className={styled.header}>
                    <h2>{title}</h2>
                </header>
                <div className={styled.content}>
                    <p>{message}</p>
                </div>
                <footer className={styled.actions}>
                    <Button onClick={onCloseBtnHandler}>Close</Button>
                </footer>
            </Card>
        </>
    )
}
