/**
 * Section is a component that defines Section Tag
 * @param {React.Component} children Component to be inserted inside the component
 * @param {string} id an id for the section
 * @param {string} color defines a background-color style CSS, you can use a SASS variable defined in '_variables.scss'
 * @param {number} minHeight defines a min-height CSS value in rem (1 rem = 10 px), 
 * @param {boolean} fixed defines if the section position is fixed, if true you have to define a topPosition param
 * @param {string} topPosition defines the top CSS value (in rem) to place the fixed section 
 * @param {string} marginTop defines the margin-top CSS value to put some space before the section 
 * @param {string} padding defines the padding CSS value (in rem)
 * 
 */

 const Section = ({children, id, fixed, topPosition, marginTop, minHeight, color = "background-prim", padding = "0 2rem 0 2rem" }) => {

  let classDefinition = 'section'
  
  color && ( 
    classDefinition += ` section__solid--${color}`
  )

  let inline = {}
  minHeight && (
    inline.minHeight= `${minHeight}`
  )
  fixed && (
    inline.position = `fixed`,
    inline.top = `${topPosition}rem`  
  )
  marginTop && (
    inline.marginTop = `${marginTop}`
  )
  padding && (
    inline.padding = `${padding}`
  )

  return (
    <section id={id} className={classDefinition} style={inline}>
      {children}
    </section> 
  )
}

export default Section
