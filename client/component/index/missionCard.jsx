import Icon from '../common/icon'

const MissionCard = ({img, title, text}) => {
  return (
    <div className="mission-card">
      <div className="mission-card__image">
        <Icon
          src={img}
          width="auto"
          height={300}
        />
      </div>
      <div className="mission-card__title">
        <h3>{title}</h3>
      </div>
      <div className="mission-card__text">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default MissionCard
