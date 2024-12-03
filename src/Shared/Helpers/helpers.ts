import { Colors } from "../API/constants"

const getColor = (key: string): string => {
    switch (key) {
        case 'soft':
            return Colors['soft']
        case 'very-soft':
            return Colors["very-soft"]
        case 'hard':
            return Colors["hard"]
        case 'very-hard':
            return Colors["very-hard"]
        case 'super-hard':
            return Colors["super-hard"]
        default:
            return "#92de57"
    }
}

const getText = (key: string): string => {
    switch (key) {
        case 'soft':
            return "Soft"
        case 'very-soft':
            return "Very Soft"
        case 'hard':
            return "Hard"
        case 'very-hard':
            return "Very Hard"
        case 'super-hard':
            return "Super Hard"
        default:
            return "#92de57"
    }
}

export {
    getColor,
    getText,
}