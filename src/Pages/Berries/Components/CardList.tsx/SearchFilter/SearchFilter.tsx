import { FunctionComponent } from "react";
import styles from "./SearchFilter.module.css"

interface IProps {
    handleSearch: (text: string) => void
    search: string
}
const SearchFilter: FunctionComponent<IProps> = ({ handleSearch, search }) => {

    return (
        <div className={styles.searchContainer}>
            <input className={styles.inputStyle} value={search} onChange={(e) => handleSearch(e.target.value)} type="text" placeholder="Search by name..." />
        </div>
    )
}


export default SearchFilter