import emailjs from "emailjs-com";

import Input from "../common/input";
import Submit from "../common/submit";

const QuoteForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_to3ztpi",
        "quote_form",
        "#quoteForm",
        "user_tPwTDDRHO46YX75BGkbxn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const options = ["Restauration", "Commerce", "Artisanat", "Autre"];

  return (
    <form id='quoteForm' onSubmit={sendEmail}>
      <Input
        name='name'
        label='Quel est le nom de votre entreprise ?'
        placeholder='Nom de votre entreprise'
      />
      <Input
        type='select'
        name='activity'
        label="Quel est votre domaine d'activité ?"
        options={options}
      />
      <Input
        name='siret'
        label='N°SIRET de votre enreprise ?'
        placeholder='N°SIRET'
      />
      <Input name='interlocuteur' label='Votre nom' placeholder='Votre nom' />
      <Input
        name='fonction'
        label='Votre fonction'
        placeholder='Votre fonction'
      />
      <Input
        type='email'
        name='email'
        label='Adresse E-mail'
        placeholder='Votre adresse e-mail'
      />
      <Input
        type='tel'
        name='phone'
        label='N°Téléphone'
        placeholder='Votre numéro de téléphone'
      />
      <Input
        type='url'
        name='webSite'
        label='Site Internet (si vous en avez déjà un)'
        placeholder='Votre site internet'
        required={false}
      />
      <Input
        type='textarea'
        name='projet'
        label='Quelques mots sur votre projet'
        placeholder='Décrivez rapidement votre projet'
      />
      <div className='quote-introduction__button'>
        <Submit />
      </div>
    </form>
  );
};

export default QuoteForm;
