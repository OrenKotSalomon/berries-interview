import { FunctionComponent } from "react"
import HeightSeperator from "./HeightSeperator";




interface IProps {
    width: number;
    height: number;
}
const Divider: FunctionComponent<IProps> = ({ width = 16, height = 1 }) => {


    return (
        <>
            <HeightSeperator height={16} />
            <div style={{ width: width, border: `${height}px solid #ededed`, borderStyle: 'dashed' }} />
            <HeightSeperator height={16} />
        </>
    )
}

export default Divider