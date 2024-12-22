import styles from "./LoginPage.module.scss"
import FormTemplate from "../FormTemplate.tsx";
import backButton from "../../../shared/ico/backButton.svg";
import {useState} from "react";
import avatar from "../../../shared/avatar/avatar1.svg"
import {Link} from "react-router-dom";

const LoginPage = () => {

    const [isSuccessfulLogin, setIsSuccessfulLogin] = useState<boolean>(false);

    const loginUser = () => {

        // TODO Сделать логику проверки а после данные засовываем в RTK
        setIsSuccessfulLogin(true)
    }

    return (
        <div className={styles.wrapper}>
            <Link to={"/FakeMovie"}>
                <img src={backButton} alt="Назад" className={styles.wrapper__backButton}/>
            </Link>

            {!isSuccessfulLogin
                ?
                <FormTemplate authOrLog={"Log"} handlerFunction={loginUser}/>
                :
                <>
                    <div className={styles.wrapper__successfulLogin}>
                        <img src={avatar} className={styles.wrapper__successfulLogin__img} alt=""/>
                        <p className={styles.wrapper__successfulLogin__userNickname}>Your NickName</p>
                        <p className={styles.wrapper__successfulLogin__congratsText}>Вы усешно зашли на сайт!</p>
                        <button className={styles.wrapper__successfulLogin__button}>На главную страницу</button>
                    </div>
                </>
            }
        </div>
    );
};

export default LoginPage;