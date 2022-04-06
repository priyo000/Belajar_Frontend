import styles from "./Footer.module.css"
function Footer(){
    return(
        <div className={styles.container}>
            <footer className={styles.footer}>
                <h2 className={styles.footer__title}>Movies App</h2>
                <p className={styles.footer__author}>By Priyo000</p>
            </footer>
        </div>
    )
}

export default Footer