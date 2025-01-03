import styles from "./SubsriptionSuggest.module.scss"

const SubsricptionSuggest = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__defaultSuggest}>

            </div>
            <div className={styles.wrapper__centralSuggest}>
                <div>
                    <p>Популярный</p>
                    <p>6 Месяцев</p>
                </div>

                <div>
                    <p>999Р</p>
                    <p>800Р</p>
                    <p>Отмена в любое время</p>
                    <button>Купить</button>
                </div>
            </div>
            <div className={styles.wrapper__defaultSuggest}>

            </div>
        </div>
    );
};

export default SubsricptionSuggest;