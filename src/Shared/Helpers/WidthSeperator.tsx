import { FunctionComponent } from "react"




interface IProps {
    width: number
}
const WidthSeperator: FunctionComponent<IProps> = ({ width = 16 }) => {


    return <div style={{ width: width }} />
}

export default WidthSeperator