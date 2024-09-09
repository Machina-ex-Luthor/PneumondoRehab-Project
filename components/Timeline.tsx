import Image from 'next/image'
import styles from './Timeline.module.css'

const timelineItems = [
  {
    title: "image1",
    content: "Les exercices respiratoires sont essentiels pour améliorer la capacité pulmonaire...",
    image: "/RespiRehabSlide1.png"
  },
  {
    title: "image1",
    content: "Le renforcement musculaire aide à améliorer l'endurance globale...",
    image: "/RespiRehabSlide2.png"
  },
  {
    title: "image1",
    content: "Les exercices respiratoires sont essentiels pour améliorer la capacité pulmonaire...",
    image: "/RespiRehabSlide3.png"
  },
  {
    title: "image1",
    content: "Le renforcement musculaire aide à améliorer l'endurance globale...",
    image: "/RespiRehabSlide1.png"
  },
  {
    title: "image1",
    content: "Les exercices respiratoires sont essentiels pour améliorer la capacité pulmonaire...",
    image: "/RespiRehabSlide2.png"
  },
  {
    title: "image1",
    content: "Le renforcement musculaire aide à améliorer l'endurance globale...",
    image: "/RespiRehabSlide3.png"
  }
  // Ajoutez d'autres éléments selon vos besoins
];

export default function Timeline() {
  return (
    <div className={`container ${styles.timelineContainer}`}>
      <div className="row">
        <div className="col-md-12">
          <div className={styles.timeline}>
            {timelineItems.map((item, index) => (
              <div key={index} className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}>
                <div className={styles.timelineContent}>
                  <Image src={item.image} alt={item.title} width={300} height={200} />
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}