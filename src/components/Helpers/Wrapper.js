import styled from './Wrapper.module.css'

export const Wrapper = ({ children }) => {
    return (<div className={styled.wrapper}>
        {children}
    </div>)
}

// children prop holds all the content,
// you are passing between the opening and closing tag 