import { createContext, useContext, useEffect, useState } from "react";
import { getRandomIntInRange, randomColor } from "../util/helper";

const ColorBoxContext = createContext();

export function ColorBoxProvider({ children }) {

    const [refreshInterval, setRefreshInterval] = useState(500)
    const [animationTime, setAnimationTime] = useState(1000)

    const [color, setColor] = useState(randomColor())
    const [scale, setScale] = useState(100)
    const [rotation, setRotation] = useState(0)
    const [borderRadius, setBorderRadius] = useState(0)

    const [allowHover, setAllowHover] = useState(true)
    const [changeIndividually, setChangeIndividually] = useState(false)

    let intervalId


    useEffect(() => {
        intervalId = setInterval(() => {
            setColor(randomColor())
            setScale(getRandomIntInRange(10, 100))
            setRotation(getRandomIntInRange(0, 179))
            setBorderRadius(getRandomIntInRange(0, 20))
        }, refreshInterval)
    }, [])

    const changeRefreshInterval = (newInterval) => {
        if (intervalId) {
            clearInterval(intervalId)
        }
        setRefreshInterval(newInterval)

        intervalId = setInterval(() => {
            setColor(randomColor())
            setScale(getRandomIntInRange(75, 100))
            setRotation(getRandomIntInRange(0, 179))
            setBorderRadius(getRandomIntInRange(0, 20))
        }, newInterval)
    }



    const value = {
        cb_RandomColor: color,
        cb_Scale: scale,
        cb_Rotation: rotation,
        cb_BorderRadius: borderRadius,

        cb_setting_AllowHover: allowHover,
        cb_setting_RefreshInterval: refreshInterval,
        cb_setting_AnimationTime: animationTime,
        cb_setting_ChangeIndividually: changeIndividually,

        set_cb_setting_AllowHover: setAllowHover,
        set_cb_setting_RefreshInterval: changeRefreshInterval,
        set_cb_setting_AnimationTime: setAnimationTime,
        set_cb_setting_ChangeIndividually: setChangeIndividually
    };

    return (
        <ColorBoxContext.Provider value={value}>{children}</ColorBoxContext.Provider>
    );
}

export const useColorBoxContext = () => useContext(ColorBoxContext);
