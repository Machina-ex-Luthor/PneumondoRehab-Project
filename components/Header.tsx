import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
      <Image
          src="/PneumoLog2.png"
          alt="PneumoRehab Logo"
          width={100}
          height={100}
          className={styles.logo}
        />
      <h1 className={styles.logoName}>PneumondoRehab</h1>
      </div>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navItem}>
          Accueil
        </Link>
        <Link href="/about" className={styles.navItem}>
          À propos
        </Link>
        <Link href="/regpatient" className={styles.navItem}>
          Patients
        </Link>
        <Link href="/regmedecin" className={styles.navItem}>
          Médecins
        </Link>
        <Link href="/contact" className={styles.navItem}>
          Contact
        </Link>
        <Link href="/login" className={styles.button}>
          Connexion
        </Link>
      </nav>
    </header>
  )
}