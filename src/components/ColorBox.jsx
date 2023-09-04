import { useEffect, useState } from "react"
import { GetRandomIntInRange, randomColor } from "../util/helper"
import { useColorBoxContext } from "../contexts/useColorBoxContext"

export const ColorBox = () => {

    const { cb_RandomColor, cb_Scale, cb_Rotation, cb_BorderRadius } = useColorBoxContext()

    const [isHover, setIsHover] = useState(false)
    const [hoverColor, setHoverColor] = useState({ string: "#fff" })

    // const [randomGradientBg, setRandomGradientBg] = useState(randomColor())
    // const [scale, setScale] = useState(100)
    // const [rotation, setRotation] = useState(0)

    // useEffect(() => {
    //     setInterval(() => {
    //         setRandomGradientBg(randomColor())
    //         setScale(GetRandomIntInRange(10, 100))
    //         setRotation(GetRandomIntInRange(0, 179))
    //     }, 2)
    // }, [])

    const handleMouseEnter = () => {
        setIsHover(true)
    }

    const handleMouseLeave = () => {
        setIsHover(false)
    }


    return (
        <div
            className="w-full h-full"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="w-full h-full"

                style={
                    {
                        transition: !isHover ? "all cubic-bezier(0.4, 0, 0.2, 1) 1s" : "",
                        backgroundColor: !isHover ? cb_RandomColor.string : hoverColor.string,
                        scale: `${cb_Scale}%`,
                        rotate: `${cb_Rotation}deg`,
                        borderRadius: `${cb_BorderRadius}%`
                    }
                }
            >

            </div>
        </div>

    )
}