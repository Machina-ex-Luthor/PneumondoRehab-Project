import Header from '@pneumo/components/Header'
import Footer from '@pneumo/components/Footer'
import RegPatientForm from '@pneumo/components/RegPatientForm'
import styles from './regpatient.module.css'

export default function RegPatient() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1>À propos</h1>
        <RegPatientForm />
      </main>
      <Footer />
    </div>
  )
}