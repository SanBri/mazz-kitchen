import TeamCard from "./teamCard";

const Team = () => {
  return (
    <div className='team'>
      <div className='team__title'>
        <h2>UNE ÉQUIPE À VOTRE ÉCOUTE POUR VOTRE PROJET</h2>
      </div>
      <div className='team__content'>
        <TeamCard
          image='/images/staff/thomas.png'
          name='THOMAS MILLET-URSIN'
          job='Designer Web - Rédacteur Web'
          text="Mazz Kitchen est un concept que j'ai tiré de mes années d'expérience en restauration. Quand j'ai repris mes études de Graphiste, j'ai souhaité développer mes connaissances dans le web car c'est pour moi la possibilité de franchir un cap en matière de communication pour ce secteur bien souvent lésé dans ce domaine. J'ai sollicité Sandro afin de vous donner la possibilité d'être accompagné dans votre projet par deux entrepreneurs passionnés, engagés, volontaires et motivés."
          icons={{
            facebook: "bludmazz",
            instagram: "bludmazz",
            linkedin: "in/thomas-millet-ursin/",
            behance: "bludmazz",
          }}
        />
        <TeamCard
          image='/images/staff/sandro.png'
          name='SANDRO BRIGNOLI'
          job='Développeur Web'
          text='Développer un site web, c’est à chaque fois un nouveau défi que je souhaite réaliser avec inventivité et persévérance. Il faut savoir faire preuve de créativité, s’adapter rapidement et s’organiser de façon à être efficace. Afin de rester cohérent dans mon travail, j’ai intégrer Mazz Kitchen, pouvant apporter à la fois mon savoir-faire en matière de développement web, ainsi que mon vécu provenant des différentes expériences acquises en travaillant dans les commerces de proximité.'
          icons={{ linkedin: "in/sandro-brignoli/" }}
        />
      </div>
    </div>
  );
};

export default Team;
