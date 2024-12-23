import styles from "./MainPage.module.scss"
import firstWallpaper from "../../../shared/bigIMG/hero banner.svg"
import Navbar from "../../../widgets/navbar/Navbar.tsx";

const MainPage = () => {

    return (
        <div className={styles.wrapper}>
        {/*  TODO Первое поле:  */}
            <div className={styles.wrapper__firstWindow}>
                <Navbar/>
                <img src={firstWallpaper} className={styles.wrapper__firstWindow__image} alt="Ведьмак"/>
                <div className={styles.wrapper__firstWindow__aboutMovie}>
                    <p className={styles.wrapper__firstWindow__aboutMovie__movieName}>Ведьмак</p>
                    <p className={styles.wrapper__firstWindow__aboutMovie__description}>
                        Геральт из Ривии, мутировавший охотник на монстров по найму,
                        отправляется навстречу своей судьбе в неспокойном мире, где люди
                        зачастую оказываются более злыми, чем звери.
                    </p>
                </div>
            </div>

            <div className={styles.wrapper__secondWindow}>
                <div className={styles.wrapper__secondWindow__text}>
                    <p className={styles.wrapper__secondWindow__text__name}>Популярное</p>
                    <p className={styles.wrapper__secondWindow__text__seeMore}>Увидеть все</p>
                </div>
                <div className={styles.wrapper__secondWindow__list}>

                </div>
            </div>
        </div>
    );
};

export default MainPage;