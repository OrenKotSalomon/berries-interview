import { FunctionComponent } from "react";
import { IBerryDB, IBerryDBKeys } from "../../../../../Interfaces/IBerryDB";
import { getColor, getText } from "../../../../../Shared/Helpers/helpers";
import styles from './FilterOptions.module.css'
import Divider from "../../../../../Shared/Helpers/Divider";
interface IProps {
    options: (keyof IBerryDBKeys)[];
    berries: IBerryDB;
    setSelectedFilter: (key: keyof IBerryDB) => void
    selectedFilter: string
}


const FilterOptions: FunctionComponent<IProps> = ({ berries, options, setSelectedFilter, selectedFilter }) => {


    return (
        <div>
            {options.map((option, index) => {
                return (
                    <>
                        <div onClick={() => setSelectedFilter(option)} className={styles.textContainer} key={index}>
                            <p className={styles.title} style={{ color: selectedFilter ===option ? getColor(option) : '', fontWeight: 700 }}>{getText(option)}</p>
                            <p className={styles.subTitle}>{berries[option]?.length}</p>
                        </div>
                        {index !== options.length - 1 && <Divider height={1} width={80} />}
                    </>
                )
            })}

        </div>
    )
}

export default FilterOptions