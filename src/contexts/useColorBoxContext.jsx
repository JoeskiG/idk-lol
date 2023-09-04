import { createContext, useContext, useEffect, useState } from "react";
import { GetRandomIntInRange, randomColor } from "../util/helper";

const ColorBoxContext = createContext();

export function ColorBoxProvider({ children }) {

    const [color, setColor] = useState(randomColor())
    const [scale, setScale] = useState(100)
    const [rotation, setRotation] = useState(0)
    const [borderRadius, setBorderRadius] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setColor(randomColor())
            setScale(GetRandomIntInRange(10, 100))
            setRotation(GetRandomIntInRange(0, 179))
            setBorderRadius(GetRandomIntInRange(0, 20))
        }, 500)
    }, [])


    const value = {
        cb_RandomColor: color,
        cb_Scale: scale,
        cb_Rotation: rotation,
        cb_BorderRadius: borderRadius
    };

    return (
        <ColorBoxContext.Provider value={value}>{children}</ColorBoxContext.Provider>
    );
}

export const useColorBoxContext = () => useContext(ColorBoxContext);
