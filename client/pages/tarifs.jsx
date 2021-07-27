import Section from "../component/common/section";
import Contact from "../component/tarifs/contact";
import Offers from "../component/tarifs/offers";

const Tarifs = () => {
  return (
    <>
      <Section padding='5vh 8rem 0 8rem' id='offersSection'>
        <Offers />
      </Section>
      <Section padding='0 8rem 0 8rem' id='contactSection'>
        <Contact />
      </Section>
    </>
  );
};

export default Tarifs;
