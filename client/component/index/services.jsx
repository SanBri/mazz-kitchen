import ServicesCard from "./servicesCard";

const Services = () => {
  return (
    <div className='services'>
      <div className='services__content'>
        <ServicesCard
          icn='services1.svg'
          number='number1.svg'
          services={[
            "AUDIT/VEILLE DU SITE",
            "RECHERCHE DE MOTS CLÉS",
            "OPTIMISATION DES BACKLINKS",
            "INSERTION CODE SEO",
            "OPTIMISATION DES RÉSEAUX",
            "CERTIFICATION RGPD",
          ]}
        />
        <ServicesCard
          icn='services2.svg'
          number='number2.svg'
          services={[
            "ANALYSE INTERFACE UTILISATEUR",
            "DESIGN DE L'INTERFACE",
            "DESIGN D'INTERACTIONS",
            "CRÉATION DE L'IDENTITÉ DIGITALE",
            "DESIGN DES RÉSEAUX SOCIAUX",
            "CRÉATION DE LA CHARTE GRAPHIQUE",
          ]}
        />
        <ServicesCard
          icn='services3.svg'
          number='number3.svg'
          services={[
            "DÉVELOPPEMENT D'UNE INTERFACE FRONTEND",
            "TABLEAU DE BORD DE PERSONNALISATION",
            "DÉPLOIEMENT DU SITE SUR SERVEUR",
            "GESTION DE LA BASE DE DONNÉES",
            "SITE WEB RESPONSIVE",
            "SÉCURISATION DU SITE",
          ]}
        />
      </div>
    </div>
  );
};

export default Services;
