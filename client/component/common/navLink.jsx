import Link from "next/link";
import Head from "next/head";

const navLink = ({ text, link, icn, onClick }) => {
  return (
    <>
      <Head>
        <script
          src='https://kit.fontawesome.com/556a7dddee.js'
          crossOrigin='anonymous'
        />
      </Head>
      <div className='navigation-bar__link'>
        <Link href={link}>
          <a onClick={onClick}>
            <p>
              {icn && <i className={icn}></i>} {text}
            </p>
          </a>
        </Link>
        <div className='navigation-bar__line'></div>
      </div>
    </>
  );
};

export default navLink;
