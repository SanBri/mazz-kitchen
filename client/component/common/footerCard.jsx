const FooterCard = ({title, children}) => {
  return (
    <div className="footer-card">
      <div className="footer-card__title">
        <p>{title}</p>
        <div className="footer-card__line"></div>
      </div>
      <div className="footer-card__content">
        {children}
      </div>
    </div>
  )
}

export default FooterCard
