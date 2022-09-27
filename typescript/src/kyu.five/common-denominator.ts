
const convertFrac = (lst: [number, number][]): string => {
    const nom = lst.map(p => p[1])
        .reduce((x: number, y: number) => x * y, 0)
    console.log(nom)
    return ''
}

convertFrac([[1, 2], [1, 3], [1, 4]])

export { convertFrac }
