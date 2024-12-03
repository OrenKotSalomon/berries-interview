import { Fragment, FunctionComponent } from "react";
import SearchFilter from "./SearchFilter/SearchFilter";
import styles from './CardList.module.css'
import { IBerryDetail } from "../../../../Interfaces/IBerryDetail";
import HeightSeperator from "../../../../Shared/Helpers/HeightSeperator";
import useCardlist from "./useCardList";
interface IProps {
    items: IBerryDetail[];
    Comp: FunctionComponent<{ data: IBerryDetail }>;
    setList: (items: IBerryDetail[]) => void
}

const CardList: FunctionComponent<IProps> = ({ items, Comp, setList }) => {
    const {
        handleSearch,
        search,
    } = useCardlist({ items, setList })





    return (
        <div className={styles.container}>
            <SearchFilter search={search} handleSearch={handleSearch} />
            <HeightSeperator height={24} />
            {items.map((item, index) => (
                <Fragment key={index}>
                    <Comp key={index} data={item} />
                    <HeightSeperator height={24} />
                </Fragment>
            ))}
        </div>
    );
};

export default CardList;
