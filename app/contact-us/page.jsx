import styles from "./Contact.module.css"
import react from 'react'

export default function Contact() {
    return (
        <div className={styles.fatherBox}>
            <div className={styles.mainBox}>
                <fieldset className={styles.fs}>
                    <legend className={styles.Legend}>Contact Us</legend>
                    <label for="name">Name: </label><br />
                    <input type="text" id="name" name="Name" className={styles.Input} placeholder="John Doe"></input><br />
                    <label for="email">Email: </label><br />
                    <input type="email" id="email" name="Email" className={styles.Input} placeholder="example@gmail.com"></input><br />
                    <label>How did you hear about us? </label><br />
                    <input list="q"  name="Questions" className={styles.Input}></input><br />
                    <datalist id="q">
                        <option value="Family / Friends" />
                        <option value="Newsletter" />
                        <option value="CACNA Facebook" />
                        <option value="Other" />
                    </datalist>
                    <label for="ci">Comments / Inqueires </label><br />
                    <textarea name="message" id="ci" rows="5" cols="30" className={styles.Input} placeholder="This website is amazing"/><br />

                    <button className={styles.submit}>Submit</button>
                </fieldset>
            </div>
        </div>
    )
}