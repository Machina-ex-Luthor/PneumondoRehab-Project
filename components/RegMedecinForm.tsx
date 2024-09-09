import styles from './RegMedecinForm.module.css'

export default function RegMedecinForm() {
  return (
    <form className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="nom" className={styles.label}>Nom</label>
        <input type="text" id="nom" name="nom" className={styles.input} />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="prenom" className={styles.label}>Prénom</label>
        <input type="text" id="prenom" name="prenom" className={styles.input} />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="dateNaissance" className={styles.label}>Date de<br />Naissance</label>
        <input type="date" id="dateNaissance" name="dateNaissance" className={styles.input} />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="adresse" className={styles.label}>Adresse</label>
        <input type="text" id="adresse" name="adresse" className={styles.input} />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="codePostal" className={styles.label}>Code Postal</label>
        <input type="text" id="codePostal" name="codePostal" className={styles.input} />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="ville" className={styles.label}>Ville</label>
        <input type="text" id="ville" name="ville" className={styles.input} />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="sexe" className={styles.label}>Sexe</label>
        <select id="sexe" name="sexe" className={styles.input}>
          <option value="">Sélectionnez</option>
          <option value="M">Masculin</option>
          <option value="F">Féminin</option>
          <option value="A">Autre</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="nir" className={styles.label}>NIR</label>
        <input type="text" id="nir" name="nir" className={styles.input} />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="diagnostic" className={styles.label}>Diagnostic</label>
        <textarea id="diagnostic" name="diagnostic" className={styles.input}></textarea>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="medecin" className={styles.label}>Médecin</label>
        <input type="text" id="medecin" name="medecin" className={styles.input} />
      </div>
      <button type="submit" className={styles.button}>Enregistrer</button>
    </form>
  )
}