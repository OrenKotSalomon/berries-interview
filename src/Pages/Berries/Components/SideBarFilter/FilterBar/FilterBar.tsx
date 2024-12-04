import { FunctionComponent } from "react";
import styles from "./FilterBar.module.css"

import { getColor } from "../../../../../Shared/Helpers/helpers";
import { IBerryDB } from "../../../../../Interfaces/IBerryDB";
interface IProps {
    selectedFilter: keyof IBerryDB
}

const FilterBar: FunctionComponent<IProps> = ({ selectedFilter }) => {


    // not very proud of this 
    const getPos = (key: keyof IBerryDB): string => {
        switch (key) {
            case 'soft':
                return '24%'
            case 'very-soft':
                return '1%'
            case 'hard':
                return '45%'
            case 'very-hard':
                return '66%'
            case 'super-hard':
                return '91%'
            default:
                return "0%"
        }
    }

    return (
        <div className={styles.capsule}>
            <div className={styles.circle} style={{ boxShadow: `${getColor(selectedFilter)} 0px 0px 25px 15px`, bottom: getPos(selectedFilter) }} />
        </div>
    )
}

export default FilterBar