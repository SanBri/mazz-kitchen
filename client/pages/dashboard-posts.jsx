import PrivatePage from "../component/layout/PrivatePage";
import Section from "../component/common/section";
import Card from "../component/common/card";
import DashboardLink from "../component/dashboard/DashboardLink";
import PostsList from "../component/dashboard/PostsList";
import Alert from "../component/layout/Alert.jsx";

const dashboardPosts = () => {
  return (
    <Section
      id='dashboardPosts'
      minHeight='100vh'
      padding='8rem 8rem 3rem 8rem'
    >
      <Card
        icn={"fas fa-file"}
        title='Gestion des articles'
        linkBack='/dashboard'
        textBack='Administration'
      >
        <div id='addPostLink' className='dashboard-item'>
          <DashboardLink
            icn='fas fa-pencil-alt'
            title='Rédiger un article'
            link='/dashboard-create-post'
          />
        </div>
        <div className='dashboard-posts'>
          <Alert />
          <PostsList />
        </div>
      </Card>
    </Section>
  );
};

export default PrivatePage(dashboardPosts);
