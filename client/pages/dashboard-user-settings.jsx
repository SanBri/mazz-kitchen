import PrivatePage from "../component/layout/PrivatePage";
import Section from "../component/common/section";
import Card from "../component/common/card";
import Alert from "../component/layout/Alert.jsx";
import UserSettingsForm from "../component/dashboard/UserSettingsForm";

const dashboardPosts = () => {
  return (
    <Section
      id='dashboardUserSettings'
      minHeight='100vh'
      padding='8rem 8rem 0 8rem'
    >
      <div className='user-settings'>
        <Card
          icn={"fas fa-user-lock"}
          title='Modification du compte'
          linkBack='/dashboard'
          textBack='Administration'
        >
          <Alert />
          <UserSettingsForm />
        </Card>
      </div>
    </Section>
  );
};

export default PrivatePage(dashboardPosts);
