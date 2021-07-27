import Section from "../common/section";
import NavBar from "../common/navBar";
import Header from "../common/header";
import Footer from "../common/footer";

const Layout = ({ children }) => {
  return (
    <div className='container'>
      <Section id='headerSection' color='color-primary-black' topPosition='0'>
        <NavBar />
      </Section>
      <Section
        id='fixedHeaderSection'
        color='color-primary-black'
        fixed={true}
        topPosition='0'
        padding='0'
        minHeight='5vh'
      >
        <Header />
      </Section>
      {children}
      <Section id='footerSection' minHeight='35vh'>
        <Footer />
      </Section>
    </div>
  );
};

export default Layout;
