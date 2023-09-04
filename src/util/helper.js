
export function GetRandomIntInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomGradient() {
    const direction = Math.random() > 0.5 ? "left" : "right"
    var randomColorFrom = {
        r: GetRandomIntInRange(0, 150),
        g: GetRandomIntInRange(0, 150),
        b: GetRandomIntInRange(0, 150)
    }

    if (randomColorFrom.r <= 10 || randomColorFrom.g <= 10) {
        randomColorFrom.r = 150
    }

    const randomColorTo = {
        r: (GetRandomIntInRange(20, 105)) + randomColorFrom.r,
        g: (GetRandomIntInRange(20, 105)) + randomColorFrom.g,
        b: (GetRandomIntInRange(20, 105)) + randomColorFrom.b
    }

    return {
        to: `rgb(${randomColorTo.r},${randomColorTo.g},${randomColorTo.b})`,
        from: `rgb(${randomColorFrom.r},${randomColorFrom.g},${randomColorFrom.b})`
    }

}

export function randomColor() {
    const color = {
        r: GetRandomIntInRange(0, 255),
        g: GetRandomIntInRange(0, 255),
        b: GetRandomIntInRange(0, 255)
    }
    return { ...color, string: `rgb(${color.r},${color.g},${color.b})` }
}