import MissionCard from './missionCard'

const Mission = () => {
  return (
    <div className="mission">
      <div className="mission__content">
        <MissionCard 
          img="/images/mission-01.svg"
          title="Vous Accompagner"
          text="Nous mettons en place votre projet en prenant le soin d’analyser vos besoins et vos envies afin de mettre en place une stratégie de communication digitale qui convienne à la fois à votre activité mais également à votre public cible. Nous créons ou adaptons votre identité visuelle digitale ensemble afin de rendre celle-ci à la fois personnelle et innovante."
        />
        <MissionCard 
          img="/images/mission-02.svg"
          title="Vous Conseiller"
          text="Nous créons ensemble votre interface web tout en vous formant sur l’utilisation du web ainsi qu’en vous donnant les clés d’une bonne gestion de votre environnement web. Ensemble, nous construisons une relation durable en vous donnant la possibilité d’être à vos côtés afin de vous accompagner dans vos débuts sur le web."
        />
        <MissionCard 
          img="/images/mission-03.svg"
          title="Vous Développer"
          text="Nous développons ensemble tous vos outils web en garantissant le maintien d’une visibilité optimale, d’un suivi sur la sécurité de votre environnement web, la gestion de votre positionnement SEO au cours de la première année ainsi qu’un accompagnement sur la gestion de votre communauté web. Ensemble, nous donnons toutes les chances à votre entreprise d’être présente avec efficacité sur le web."
        />
      </div>
    </div>
  )
}

export default Mission
