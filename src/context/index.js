import React, { useState } from "react";

export const PositionContext = React.createContext();

export const PositionContextProvider = ({ children }) => {
    const [value, setValue] = useState(0);
    const [flags, setFlags] = useState(false);
    const [looksValue, setLooksValue]=useState(false)
    const handleTurn = (isClockWise) => {
        if (isClockWise) {
            setValue((prev) => prev + 15)
        } else {
            setValue((prev) => prev - 15)
        }
    }
    return (
        <PositionContext.Provider value={{ value, looksValue, setLooksValue, setValue, handleTurn, flags,setFlags }}>{children}</PositionContext.Provider>
    )
}