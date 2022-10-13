import { createContext } from "react";


export const ReducerContext = createContext({ userList: [], dispatch: undefined, theme:'white' });