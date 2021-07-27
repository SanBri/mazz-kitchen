import Link from "next/link";

const DashboardLink = ({ title, icn, link = "#" }) => {
  return (
    <>
      <div className='dashboard-item__link'>
        <Link href={link}>
          <a>
            <i className={icn}></i>
            <h5>{title}</h5>
          </a>
        </Link>
      </div>
    </>
  );
};

export default DashboardLink;
