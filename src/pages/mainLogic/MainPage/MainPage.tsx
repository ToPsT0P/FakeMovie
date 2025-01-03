import styles from "./MainPage.module.scss"
import firstWallpaper from "../../../shared/bigIMG/hero banner.svg"
import Navbar from "../../../widgets/navbar/Navbar.tsx";
import filmsPosters from "../../../shared/bigIMG/Films Poster.svg"
import WatchList from "../../../entities/watchList/WatchList.tsx";
import {LogicIdiotArray, LogicIdiotArray1} from "../../../shared/moviesOrSeries(Delete)/LogicIdiotArray.tsx";
import goldenGlobeImage from "../../../shared/bigIMG/Golden Globe.svg"

const MainPage = () => {


    return (
        <div className={styles.wrapper}>
            {/*  TODO Первое поле:  */}
            <div className={styles.wrapper__firstWindow}>
                <Navbar/>
                <img src={firstWallpaper} className={styles.wrapper__firstWindow__image} alt="Ведьмак"/>
                <div className={styles.wrapper__firstWindow__bottomSide}>
                    <div className={styles.wrapper__firstWindow__bottomSide__aboutMovie}>
                        <p className={styles.wrapper__firstWindow__bottomSide__aboutMovie__movieName}>Ведьмак</p>
                        <p className={styles.wrapper__firstWindow__bottomSide__aboutMovie__description}>
                            Геральт из Ривии, мутировавший охотник на монстров по найму,
                            отправляется навстречу своей судьбе в неспокойном мире, где люди
                            зачастую оказываются более злыми, чем звери.
                        </p>
                    </div>
                    <div className={styles.wrapper__firstWindow__bottomSide__filmsPosters}>
                        <img src={filmsPosters} alt=""/>
                    </div>
                </div>

            </div>


            <WatchList watchListArray={LogicIdiotArray} categoryName={"Популярное"}/>
            <WatchList watchListArray={LogicIdiotArray1} categoryName={"Фильмы"}/>


            <div className={styles.wrapper__goldenGlobe}>
                <img src={goldenGlobeImage} className={styles.wrapper__goldenGlobe__image} alt=""/>
                <button>Увидеть Победителей Золотого Глобуса</button>
            </div>
        </div>
    );
};

export default MainPage;