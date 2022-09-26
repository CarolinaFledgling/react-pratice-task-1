import React from "react";
import ReactDom from "react-dom";
import { Button } from "./Button";
import { Card } from "./Card";

import styled from "./ErrorModal.module.css";

const Backdrop = (props) => {
    return <div className={styled.backdrop} onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
    return (
        <Card className={styled.modal}>
            <header className={styled.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styled.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styled.actions}>
                <Button onClick={props.onCloseBtnHandler}>Close</Button>
            </footer>
        </Card>
    );
};

export const ErrorModal = ({ title, message, errorHandler }) => {
    const onCloseBtnHandler = () => {
        errorHandler();
    };

    return (
        <>
            {ReactDom.createPortal(
                <Backdrop onClick={onCloseBtnHandler} />,
                document.getElementById("backdrop-root")
            )}
            {ReactDom.createPortal(
                <ModalOverlay
                    title={title}
                    message={message}
                    onCloseBtnHandler={onCloseBtnHandler}
                />,
                document.getElementById("overlay-root")
            )}
        </>
    );
};
