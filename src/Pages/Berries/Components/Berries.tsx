import { FunctionComponent } from "react"
import styles from "./Berries.module.css"
import useBerries from "./useBerries"

import WidthSeperator from "../../../Shared/Helpers/WidthSeperator"
import HeightSeperator from "../../../Shared/Helpers/HeightSeperator"
import CardList from "./CardList.tsx/CardList"
import Card from "./Card/Card"
import SideBarFilter from "./SideBarFilter/SideBarFilter"




interface IProps {

}

const Berries: FunctionComponent<IProps> = () => {
    const {
        berries,
        selectedFilter,
        setSelectedFilter,
        list, setList,
        loading, items = []

    } = useBerries()



    return (
        <section className={styles.container}>
            <div className={styles.titleContainer} >
                <h1 className={styles.title}>Pok'e Berries</h1>
                <h3 className={styles.subTitle}>How tough are you ?</h3>
            </div>
            <HeightSeperator height={24} />
            <div className={styles.flexRowContainer}>
                <SideBarFilter berries={berries} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
                <>
                    <WidthSeperator width={24} />
                    <div className={styles.dividerVertical} />
                    <WidthSeperator width={24} />
                </>

                {loading ? <p>loading....</p> : <CardList list={list} items={items} Comp={Card} setList={setList} />}

            </div>
        </section>
    )
}


export default Berries