import { Fragment, FunctionComponent } from "react";
import SearchFilter from "./SearchFilter/SearchFilter";
import styles from './CardList.module.css'
import { IBerryDetail } from "../../../../Interfaces/IBerryDetail";
import HeightSeperator from "../../../../Shared/Helpers/HeightSeperator";
import useCardlist from "./useCardList";
interface IProps {
    items: IBerryDetail[];
    Comp: FunctionComponent<{ data: IBerryDetail }>;
}

const CardList: FunctionComponent<IProps> = ({ items, Comp }) => {
    const {
        handleSearch,
        search,
        list
    } = useCardlist({ items })




    return (
        <div className={styles.container}>
            <SearchFilter search={search} handleSearch={handleSearch} />
            <HeightSeperator height={24} />
            {list.map((item, index) => (
                <Fragment key={index}>
                    <Comp key={index} data={item} />
                    <HeightSeperator height={24} />
                </Fragment>
            ))}
        </div>
    );
};

export default CardList;
