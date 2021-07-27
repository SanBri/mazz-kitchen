
const SectionIndex = ({title, children}) => {
  return (
    <>
      <div className="section__title">
          <h2>{title}</h2>
      </div>
      <div className="section__content">
        {children}
      </div>
    </>
  )
}

export default SectionIndex
