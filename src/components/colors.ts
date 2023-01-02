type ColorProps = {
    RED_GRADIENT: string
    RED_BG: string
    GRAY_BG: string
    HD_RED_BG: string
    HD_GRAY_BG: string
}
export const COLOR: ColorProps = {
    RED_GRADIENT: 'bg-gradient-to-b from-[#82091159]',
    RED_BG: 'bg-[#eacece33]',
    GRAY_BG: 'bg-[#303030f0]',
    HD_RED_BG: 'bg-[#82091159]',
    HD_GRAY_BG: 'bg-[#242424be]'
}

export const colorQuery = (
    activeColor: string,
    focusColor: string,
    intialColor: string
    ) => {
    if (activeColor === COLOR.RED_GRADIENT) {
        return focusColor
    } else {
        return intialColor
    }
};

