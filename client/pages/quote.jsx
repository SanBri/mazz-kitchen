import Section from "../component/common/section";
import QuoteIntroduction from "../component/quote/quoteIntroduction";

const Quote = () => {
  return (
    <>
      <Section id='quoteSection' minHeight='100vh' padding='5vh 8rem 0 8rem'>
        <QuoteIntroduction />
      </Section>
    </>
  );
};

export default Quote;
