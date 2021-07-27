import ConclusionCard from "../common/conclusionCard"

const Contact = () => {
  return (
    <div className="contact">
      <ConclusionCard 
      title="NOUVEAU DANS LE GAME ?"
      text="Vous souhaitez vous lancer et faire de votre entreprise une machine dynamique sur le web ? Nous vous proposons de nous rencontrer en Visio ou en Physique afin de discuter de votre projet et de mettre en place la meilleure stratégie de communication digitale pour atteindre vos objectifs :"
      finalText="Accédez à notre espace agenda pour la prise de rendez-vous."
      textButton="Prendre Rendez-Vous Avec Notre Équipe"
      />
      <ConclusionCard 
      title="ENVIE DE CHANGEMENT ?"
      text="Vous avez déjà des idées pour votre projet, une identité visuelle définie, un site web déjà conçu… Vous êtes curieux et vous aimeriez avoir une estimation de nos services afin de travailler sur votre stratégie de communication digitale :"
      finalText="Accédez à notre espace pro pour la réalisation d’un devis sur-mesure."
      textButton="Votre Devis Personnalisé"
      />
    </div>
  )
}

export default Contact
