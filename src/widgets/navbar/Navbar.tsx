import styles from "./Navbar.module.scss"
import logo from "../../shared/logoWhite.svg"
import searchIco from "../../shared/ico/search.svg"
import userIco from "../../shared/ico/user.svg"
import notifcationIco from "../../shared/ico/notification.svg"

const Navbar = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__options}>
                <img src={logo} className={styles.wrapper__options_img} alt="Лого сайта"/>

                <ul>Home</ul>
                <ul>Pricing</ul>
                <ul>Movies</ul>
                <ul>Series</ul>
                <ul>Collection</ul>
                <ul>FAQ</ul>

            </div>
            <div className={styles.wrapper__userOptions}>
                <img src={searchIco} alt=""/>
                <img src={notifcationIco} alt=""/>
                <img src={userIco} alt=""/>
            </div>
        </div>
    );
};

export default Navbar;