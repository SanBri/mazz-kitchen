import Button from '../common/button'

const Introduction = () => {
  return (
    <div className="introduction">
    <div className="introduction__text">
      <p>Bienvenu(e)s chez Mazz Kitchen, studio de communication digitale spécialisée dans les métiers de bouche et les commerces de proximité.<br />Découvrez toutes nos solutions pour une communication digitale clé en main ainsi que notre équipe à votre écoute du lundi au vendredi de 9h à 18h.<br /> Vous souhaitez nous contacter rapidement et simplement, n’hésitez pas à prendre rendez-vous avec notre équipe rapidement en consultant leurs plannings.</p>
    </div>
    <div className="introduction__buttons">
      <Button>Rendez-Vous Physique</Button>
      <Button>Rendez-Vous Visio</Button>
    </div>
  </div>

  )
}

export default Introduction
