import React from 'react'

import styled from './Card.module.css'

export const Card = ({ children, className }) => {
    return (
        <div className={`${className} ${styled.card}`}>{children}</div>
    )
}
