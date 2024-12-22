import styles from "./RegistrationPage.module.scss"
import RegOrLogImage from "../../../shared/LogrRegImage.svg";
import {Link} from "react-router-dom";

const RegistrationPage = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__content}>
                <div className={styles.wrapper__content__userData}>
                    <div className={styles.wrapper__content__userData__greetingText}>
                        <h1 className="text-white text-7xl">Welcome</h1>
                    </div>
                    <div className={styles.wrapper__content__userData__selectOptions}>
                        <Link to={"/FakeMovie/Login"}>LOGIN</Link>
                        <Link to={"/FakeMovie/registration"}>SIGNUP</Link>
                    </div>
                    <div className={styles.wrapper__content__userData__inputs}>
                        <input type="text" placeholder="Full Name"/>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <input type="password" placeholder="Confirm Password"/>
                        <input type="text" placeholder="UserName"/>
                    </div>
                    <div className={styles.wrapper__content__userData__button}>
                        <button>Confirm</button>
                    </div>
                </div>
                <div className={styles.wrapper__content__image}>
                    <img src={RegOrLogImage} alt="Изображение при регистрации или авторизации"/>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;