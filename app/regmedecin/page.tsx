import Header from '@pneumo/components/Header'
import Footer from '@pneumo/components/Footer'
import RegMedecinForm from '@pneumo/components/RegMedecinForm'
import styles from './regmedecin.module.css'

export default function RegMedecin() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <RegMedecinForm />
      </main>
      <Footer />
    </div>
  )
}