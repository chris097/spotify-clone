type ColorProps = {
    RED_GRADIENT: string
    RED_BG: string
    GRAY_BG: string
}
export const COLOR: ColorProps = {
    RED_GRADIENT: 'bg-gradient-to-b from-[#82091159]',
    RED_BG: 'bg-[#eacece33]',
    GRAY_BG: 'bg-[#303030f0]'
}

export const colorQuery = (activeColor:string) => {
    if (activeColor === COLOR.RED_GRADIENT) {
        return COLOR.RED_BG
    } 
    return COLOR.GRAY_BG
};

