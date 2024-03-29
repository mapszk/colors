import { model } from "../config/ai"

export const getColorData = async (color) => {
    const result = await model.generateContent(`
        You will be asked for a 3 color palette, each color with a generated name of one word and a brightness scale of 11 values ordered from the darkest to the brightest.
        The first color is generated with hex code I will give you, the other two colors are suggestions created by you
        The response must be just a json array with the following structure:
        [
            {
                "name": "generated name", // generated one word name for the asked color
                "scale": [...] //  generated color scale for the asked color in order
            },
            {...}, // second color suggestion
            {...} // third color suggestion
        ]
        Do not use backticks and single quotes in the response
        
        Question: Give a color palette for this color ${color}
    `)
    const response = await result.response
    const text = response.text()
    return text
}