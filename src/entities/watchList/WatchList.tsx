import styles from "./WatchList.module.scss"
import plusButton from "../../shared/ico/plusButton.svg"
import moreButton from "../../shared/ico/moreButton.svg";
import {FC} from "react";



interface IWatchListProps {
    categoryName: string,
    watchListArray: string[]
}
const WatchList:FC<IWatchListProps> = ({categoryName, watchListArray}) => {



    return (
        <div className={styles.wrapper__watchList}>
            <div className={styles.wrapper__watchList__text}>
                <p className={styles.wrapper__watchList__text__name}>{categoryName}</p>
                <p className={styles.wrapper__watchList__text__seeMore}>Увидеть все <img src={moreButton} alt="Увидеть все"/></p>
            </div>
            <div className={styles.wrapper}>
                {watchListArray.map((el, id) => {
                    return (
                        <div className={styles.wrapper__item} key={id}>
                            <div className={styles.wrapper__item__plusButton}>
                                <img src={plusButton} className={styles.wrapper__item__plusButton__ico} alt=""/>
                            </div>
                            <img className={styles.wrapper__item__moviePoster} src={el} alt=""/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default WatchList;