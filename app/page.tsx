import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Carousel from '@pneumo/components/Carousel'
import Timeline from '@pneumo/components/Timeline'

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
        <Image 
            src="/PneumoLogo1.png" // Assurez-vous que c'est le bon chemin vers votre logo
            alt="PulmondoRehab Logo"
            width={300} // Ajustez selon la taille de votre logo
            height={350} // Ajustez selon la taille de votre logo
            className={styles.logo}
          />
        </div>
        <nav className={styles.nav}>
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
      <Carousel />
      <div className={styles.spacer}></div>
      <Timeline />
      <main className={styles.main}>
      </main>
      <footer className={styles.footer}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Développé par {/* Votre nom ou celui de votre entreprise */}
        </a>
      </footer>
    </div>
  )
}