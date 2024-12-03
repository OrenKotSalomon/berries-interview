import { FunctionComponent, } from "react"
import { IBerryDB, IBerryDBKeys } from "../../../../Interfaces/IBerryDB"
import FilterBar from "./FilterBar/FilterBar"
import styles from "./SideBarFilter.module.css"
import FilterOptions from "./FilterOptions/FilterOptions"

interface IProps {
    berries: IBerryDB;
    selectedFilter: string;
    setSelectedFilter: (key: keyof IBerryDB) => void
}


const SideBarFilter: FunctionComponent<IProps> = ({ berries, selectedFilter, setSelectedFilter }) => {


    const keys: (keyof IBerryDBKeys)[] = [
        'super-hard', 'very-hard', "hard", 'soft', 'very-soft',
    ]


    return (
        <div className={styles.container}>
            <FilterBar selectedFilter={selectedFilter} />
            <FilterOptions berries={berries} options={keys} setSelectedFilter={setSelectedFilter} selectedFilter={selectedFilter} />
        </div>
    )

}

export default SideBarFilter