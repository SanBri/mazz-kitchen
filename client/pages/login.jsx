import Card from "../component/common/card";
import Section from "../component/common/section";
import LoginForm from "../component/login/LoginForm";
import Alert from "../component/layout/Alert.jsx";

const login = () => {
  return (
    <Section id='loginSection' minHeight='40rem' padding='10vh 8rem 0 8rem'>
      <Card title='Connexion' icn='fas fa-fingerprint'>
        <Alert />
        <LoginForm />
      </Card>
    </Section>
  );
};

export default login;
