import Section from "../component/common/section";
import SectionIndex from "../component/index/sectionIndex";
import Hero from "../component/index/hero";
import Introduction from "../component/index/introduction";
import Mission from "../component/index/mission";
import Services from "../component/index/services";
import Strategy from "../component/index/strategy";
import Conclusion from "../component/index/conclusion";

const Index = () => {
  return (
    <>
      <Section padding='5vh 0 0 0' id='heroSection' minHeight='50vh'>
        <Hero />
      </Section>
      <Section
        padding='10rem 0 0em 0'
        id='introductionSection'
        minHeight='50vh'
      >
        <SectionIndex title='ET SI ON CHANGEAIT (VRAIMENT) LES CHOSES ?'>
          <Introduction />
        </SectionIndex>
      </Section>
      <Section
        padding='1rem 5rem 3rem 5rem'
        id='introductionTransition'
        minHeight='10vh'
      >
        <p>
          Nous vous proposons la mise en place d’une stratégie de communication
          digitale complète, interactive et innovante, mais vous pouvez
          également bénéficier d’un service en particulier (voir ci-dessous)
          selon vos besoins, nous vous mettrons en contact avec les membres de
          l’équipe concernés par votre demande. <br />
          On vous attend !
        </p>
      </Section>
      <Section id='missionSection' minHeight='82vh' padding='1rem 0 0 0'>
        <SectionIndex title='NOTRE MISSION'>
          <Mission />
        </SectionIndex>
      </Section>
      <Section
        id='serviceSection'
        color='color-primary-white'
        padding='1rem 0 0 0'
      >
        <SectionIndex title='NOS SERVICES'>
          <Services />
        </SectionIndex>
      </Section>
      <Section id='strategySection' minHeight='90vh' padding='1rem 0 0 0'>
        <p></p>
        <SectionIndex title='VOTRE STRATÉGIE DE COMMUNICATION DIGITALE'>
          <Strategy />
        </SectionIndex>
      </Section>
      <Section id='conclusionSection' minHeight='55vh' color='background-prim'>
        <Conclusion />
      </Section>
    </>
  );
};

export default Index;
