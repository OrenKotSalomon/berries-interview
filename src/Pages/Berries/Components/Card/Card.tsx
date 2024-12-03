import { FunctionComponent } from "react";
import { IBerryDetail } from "../../../../Interfaces/IBerryDetail";
import styles from './Card.module.css'
import WidthSeperator from "../../../../Shared/Helpers/WidthSeperator";
const image = "https://logowik.com/content/uploads/images/346_raspberry_pi_logo.jpg"

interface ICard {
    data: IBerryDetail
}
const Card: FunctionComponent<ICard> = ({ data }) => {
    return (
        <div className={styles.cardContainer}>

            <WidthSeperator width={6} />
            <div className={styles.imageContainer}>
                <img src={image} className={styles.imageStyles} />
            </div>
            <div className={styles.textContainer}>
                <p>{data.name}</p>
                <Flavor flavors={data.flavors} />
            </div>
            <WidthSeperator width={24} />
        </div>
    )
}

interface IFlavor {
    flavors: Array<{
        flavor: {
            name: string;
            url: string;
        };
        potency: number;
    }>;
}
const Flavor: FunctionComponent<IFlavor> = ({ flavors }) => {
    return <div className={styles.flavorContainer}>
        {flavors.map((flav, i) => {
            if (flav.potency == 0) return null
            return <div className={styles.flav}>
                {flav.flavor.name}
            </div>

        })}
    </div>
}



export default Card