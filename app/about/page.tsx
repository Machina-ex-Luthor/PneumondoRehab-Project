import Header from '@pneumo/components/Header'
import Footer from '@pneumo/components/Footer'

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-4">À propos de PneumondoRehab</h1>
        <div className="space-y-4">
          <p>
            PneumondoRehab est une plateforme dédiée à la réhabilitation pulmonaire, conçue pour aider les patients souffrant de maladies respiratoires à améliorer leur qualité de vie grâce à des exercices et des techniques spécialisés.
          </p>
          <p>
            Notre objectif est de fournir un programme de réhabilitation à l\'\effort accessible et efficace, permettant aux patients de suivre leur traitement depuis le confort de leur domicile tout en restant en contact étroit avec leur médecin.
          </p>
          <p>
            Grâce à notre plateforme, les patients peuvent :
          </p>
          <ul className="list-disc pl-6">
            <li>Accéder à des exercices personnalisés pour améliorer leur capacité respiratoire</li>
            <li>Apprendre des techniques de respiration et de gestion du stress</li>
            <li>Suivre leur progression au fil du temps</li>
            <li>Partager automatiquement leurs données d\'\exercices avec leur médecin traitant</li>
          </ul>
          <p>
            En facilitant la communication entre les patients et les professionnels de santé, PneumondoRehab vise à optimiser le suivi médical et à améliorer les résultats du traitement à long terme.
          </p>
          <p>
            Notre équipe de spécialistes en pneumologie et en réhabilitation pulmonaire travaille constamment à l'amélioration de notre programme, en intégrant les dernières avancées scientifiques dans le domaine de la santé respiratoire.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}