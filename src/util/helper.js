
export function getRandomIntInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomGradient() {
    const direction = Math.random() > 0.5 ? "left" : "right"
    var randomColorFrom = {
        r: getRandomIntInRange(0, 150),
        g: getRandomIntInRange(0, 150),
        b: getRandomIntInRange(0, 150)
    }

    if (randomColorFrom.r <= 10 || randomColorFrom.g <= 10) {
        randomColorFrom.r = 150
    }

    const randomColorTo = {
        r: (getRandomIntInRange(20, 105)) + randomColorFrom.r,
        g: (getRandomIntInRange(20, 105)) + randomColorFrom.g,
        b: (getRandomIntInRange(20, 105)) + randomColorFrom.b
    }

    return {
        to: `rgb(${randomColorTo.r},${randomColorTo.g},${randomColorTo.b})`,
        from: `rgb(${randomColorFrom.r},${randomColorFrom.g},${randomColorFrom.b})`
    }

}

export function randomColor() {
    const color = {
        r: getRandomIntInRange(0, 255),
        g: getRandomIntInRange(0, 255),
        b: getRandomIntInRange(0, 255)
    }
    return { ...color, string: `rgb(${color.r},${color.g},${color.b})` }
}