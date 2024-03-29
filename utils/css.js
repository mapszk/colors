const getIndexNumber = (index) => {
    if (index === 0) return 50
    if (index === 10) return 950
    else return index * 100
}

export const getCssCode = (suggestion) => {
    const mainColor = suggestion[0]
    const secondColor = suggestion[1]
    const thirdColor = suggestion[2]

    return `// CSS Code

:root {
\t${mainColor.scale.map((color, index) => `--${mainColor.name.toLocaleLowerCase().replaceAll(" ", "-")}-${getIndexNumber(index)}: ${color};`).join("\n\t")}

\t${secondColor.scale.map((color, index) => `--${secondColor.name.toLocaleLowerCase().replaceAll(" ", "-")}-${getIndexNumber(index)}: ${color};`).join("\n\t")}

\t${thirdColor.scale.map((color, index) => `--${thirdColor.name.toLocaleLowerCase().replaceAll(" ", "-")}-${getIndexNumber(index)}: ${color};`).join("\n\t")}
}`
}

export const getTailwindCode = (suggestion) => {
    const mainColor = suggestion[0]
    const secondColor = suggestion[1]
    const thirdColor = suggestion[2]
    
    return `// Tailwind config

module.exports = {
    theme: {
    colors: {
        // ...
        ${mainColor.name.toLocaleLowerCase().replaceAll(" ", "-")}: {
            ${mainColor.scale.map((color, index) => `${getIndexNumber(index)}: ${color},`).join("\n\t\t\t")}
        },
        ${secondColor.name.toLocaleLowerCase().replaceAll(" ", "-")}: {
            ${secondColor.scale.map((color, index) => `${getIndexNumber(index)}: ${color},`).join("\n\t\t\t")}
        },
        ${thirdColor.name.toLocaleLowerCase().replaceAll(" ", "-")}: {
            ${thirdColor.scale.map((color, index) => `${getIndexNumber(index)}: ${color},`).join("\n\t\t\t")}
        },
        // ...
    },
    },
}
`
}