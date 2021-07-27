import QuoteForm from '../quote/quoteForm'

const QuoteIntroduction = () => {

  return (
    <div className="quote-introduction">
      <div className="quote-introduction__title">
        <h1>VOTRE DEVIS PERSONNALISÉ</h1>
      </div>
      <div className="quote-introduction__text">
        <p>Afin de vous proposer le service qui corresponde à vos attentes nous mettons à votre disposition ce formulaire qui nous permettra d’identifier vos besoins et de vous proposer un devis complet rapidement.</p>
        <p>Donnez-nous une perspective de votre projet afin que nous puissions répondre à votre demande tout en vous garantissant les meilleurs tarifs et les meilleurs délais.<br />Le devis sera validé après rendez-vous téléphonique, physique ou visio.</p>
      </div>
      <div className="quote-introduction__form">
        <QuoteForm />
      </div>
    </div>
  )
}

export default QuoteIntroduction
