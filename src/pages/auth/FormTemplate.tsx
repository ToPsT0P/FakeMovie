import {Link} from "react-router-dom";
import RegOrLogImage from "../../shared/LogrRegImage.svg";
import {FC} from "react";
import styles from "./FormTemplate.module.scss"

interface IFormTemplate {
    authOrLog: "Auth" | "Log",
    submitFunction: any,
}

// TODO Подправить интерфейс

const FormTemplate:FC<IFormTemplate> = ({authOrLog, submitFunction}) => {
    return (
        <form onSubmit={submitFunction} className={styles.wrapper__content}>
            <div className={styles.wrapper__content__userData}>
                <div className={styles.wrapper__content__userData__greetingText}>
                    <h1 className="text-white text-7xl">Welcome</h1>
                </div>
                <div className={styles.wrapper__content__userData__selectOptions}>
                    <Link to={"/FakeMovie/Login"}>LOGIN</Link>
                    <Link to={"/FakeMovie/registration"}>SIGNUP</Link>
                </div>
                <div className={styles.wrapper__content__userData__inputs}>
                    {authOrLog === "Auth"
                    ?   <>
                            <input type="text" id="userFullName" placeholder="Full Name"/>
                            <input type="email" id="userEmail" placeholder="Email"/>
                            <input type="password" id="userPassword" placeholder="Password"/>
                            <input type="password" id="userConfirnPassword" placeholder="Confirm Password"/>
                            <input type="text" id="userNickname" placeholder="Your Nickname"/>
                        </>
                    :   <>
                            <input type="text" id="userNickname" placeholder="Your Nickname"/>
                            <input type="password" id="userPassword" placeholder="Password"/>
                        </>
                    }

                </div>
                <div className={styles.wrapper__content__userData__button}>
                    <button type="submit">Confirm</button>
                </div>
            </div>
            <div className={styles.wrapper__content__image}>
                <img src={RegOrLogImage} alt="Изображение при регистрации или авторизации"/>
            </div>
        </form>
    );
};

export default FormTemplate;