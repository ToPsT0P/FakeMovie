import styles from "./RegistrationPage.module.scss";
import FormTemplate from "../FormTemplate.tsx";
import backButton from "../../../shared/ico/backButton.svg"
import {useState} from "react";
import {avatars} from "../../../shared/avatar/avatarLogic.tsx";


const RegistrationPage = () => {

    const [isSuccessfulRegister, setIsSuccessfulRegister] = useState<boolean>(false);
    const [userAvatarId, setUserAvatarId] = useState<number>(0)
    const registrationUser = () => {

    //TODO Сделать логику проверки данных
        setIsSuccessfulRegister(true)
    }


    return (
        <div className={styles.wrapper}>
            <img src={backButton} alt="Назад" className={styles.wrapper__backButton}/>

            {!isSuccessfulRegister
            ?
                <FormTemplate authOrLog={"Auth"} submitFunction={registrationUser}/>
            :
                <div className={styles.wrapper__successfulRegister}>
                    <div className={styles.wrapper__successfulRegister__userInfo}>
                        <p className={styles.wrapper__successfulRegister__userInfo__nickname}>Your NickName</p>
                        <img className={styles.wrapper__successfulRegister__userInfo__image} src={avatars[userAvatarId]} alt="Ваш аватар"/>
                        <p className={styles.wrapper__successfulRegister__userInfo__text}>Выберите аватар для своего профиля</p>
                    </div>
                    <div className={styles.wrapper__successfulRegister__avatars}>
                        {avatars.map((avatar, id) => {
                            return <img src={avatar} alt={`avatar${id}`} onClick={() => {setUserAvatarId(id)}}/>
                        })}
                    </div>
                    <button className={styles.wrapper__successfulRegister__button}>Сохранить</button>

                </div>
            }
        </div>
    );
};

export default RegistrationPage;