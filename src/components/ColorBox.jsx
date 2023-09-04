import { useState } from "react"
import { randomGradient } from "../util/helper"

export const ColorBox = () => {

    const [randomGradientBg, setRandomGradientBg] = useState(randomGradient())

    return (
        <div className="w-full h-full" style={{ background: `linear-gradient(to right, ${randomGradientBg.from}, ${randomGradientBg.to})` }}>

        </div>
    )
}