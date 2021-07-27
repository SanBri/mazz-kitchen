import Button from "./button"

const ConclusionCard = ({title, text, textButton, finalText, onClick}) => {
  return (
    <div className="conclusion-card">
      <div className="conclusion-card__title">
        <h2>{title}</h2>
      </div>
      <div className="conclusion-card__text">
        <p>{text}</p><br />
        <p>{finalText}</p>
      </div>
      <div className="conclusion-card__button">
        <Button 
          children={textButton}
          // onClick={onClick}
        />
      </div>
      
    </div>
  )
}

export default ConclusionCard
