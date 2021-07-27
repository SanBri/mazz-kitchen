import Section from "../component/common/section";
import Why from "../component/staff/why";
import Team from "../component/staff/team";

const Staff = () => {
  return (
    <>
      <Section padding='5vh 8rem 0 8rem' id='whySection' minHeight='100vh'>
        <Why />
      </Section>
      <Section padding='0 8rem 0 8rem' id='teamSection' minHeight='90vh'>
        <Team />
      </Section>
    </>
  );
};

export default Staff;
