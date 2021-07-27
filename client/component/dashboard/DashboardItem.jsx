import DashboardLink from "./DashboardLink";

const DashboardItem = () => {
  return (
    <div className='dashboard-item'>
      <DashboardLink
        icn='fas fa-file'
        title='Gestion des articles'
        link='/dashboard-posts'
      />
      <DashboardLink icn='fas fa-list' title='Gestion des catégories' />
      <DashboardLink
        icn='fas fa-user-lock'
        title='Modifier mon compte'
        link='/dashboard-user-settings'
      />
    </div>
  );
};

export default DashboardItem;
