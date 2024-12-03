import { FunctionComponent } from "react"




interface IProps {
    height: number
}
const HeightSeperator: FunctionComponent<IProps> = ({ height = 16 }) => {


    return <div style={{ height: height }} />
}

export default HeightSeperator