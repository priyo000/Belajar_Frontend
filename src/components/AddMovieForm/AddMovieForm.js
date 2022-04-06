import styles from "./AddMovieForm.module.css"

function AddMovieForm(){
    return(
        <div className={styles.container}>
            <section className={styles.form}>
                <div className={styles.form__right}>
                    <div>
                        <img className={styles.form__container} src="https://addtext.imageonline.co/pictureinput.jpg" alt="Input Img" />
                    </div>
                </div>
                <div className={styles.form__left}>
                    <h2 className={styles.form__title}>Add Movie</h2>
                    <p>Movie Title</p>
                    <input className={styles.form__input} type="text" />
                    <br />
                    <br />
                    <p>Year</p>
                    <input className={styles.form__input} type="text" />
                    <br />
                    <br />
                    <br />
                    <button className={styles.form__button}>Submit</button>
                </div>
            </section>
        </div>
    )
}

export default AddMovieForm