import { useSelector } from "react-redux";

import PrivatePage from "../component/layout/PrivatePage";
import Section from "../component/common/section";
import Card from "../component/common/card";
import DashboardItem from "../component/dashboard/DashboardItem";

const dashboard = () => {
  const user = useSelector((state) => state.authReducer.user);

  const name = user && user.firstname + " " + user.lastname;

  return (
    <>
      <Section id='dashboard' minHeight='100vh' padding='8rem 8rem 0 8rem'>
        <Card icn={"fas fa-user"} title={name}>
          <DashboardItem />
        </Card>
      </Section>
    </>
  );
};

export default PrivatePage(dashboard);
