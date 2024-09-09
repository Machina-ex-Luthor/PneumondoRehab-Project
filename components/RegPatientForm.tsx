import styles from './RegPatientForm.module.css'

export default function RegPatientForm() {
  return (
    <form className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>Nom</label>
        <input type="text" id="name" name="name" className={styles.input} />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>Email</label>
        <input type="email" id="email" name="email" className={styles.input} />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>Message</label>
        <textarea id="message" name="message" className={styles.input}></textarea>
      </div>
      <button type="submit" className={styles.button}>Envoyer</button>
    </form>
  )
}