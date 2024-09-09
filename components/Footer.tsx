import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 PneumoRehab. Tous droits réservés.</p>
      <nav className={styles.footerNav}>
        <a href="/privacy" className={styles.footerLink}>Politique de confidentialité</a>
        <a href="/terms" className={styles.footerLink}>Conditions dutilisation</a>
        <a href="/contact" className={styles.footerLink}>Contactez-nous</a>
      </nav>
    </footer>
  )
}