import Link from "next/link";
import SocialNetworks from "../common/socialNetworks";
import Icon from "./icon";

const Header = () => {
  return (
    <header>
      <div className='fixed-header'>
        <div className='fixed-header__logo'>
          <Link href='/'>
            <a>
              <Icon
                src='/images/logo-white.png'
                width='100rem'
                height='38rem'
              />
            </a>
          </Link>
        </div>
        <div className='fixed-header__title'>
          <Icon src='/images/larecetteideale.svg' width='50%' height='50%' />
        </div>
        <div className='fixed-header__social-networks'>
          <SocialNetworks width='30rem' height='30rem' color='yellow' />
        </div>
      </div>
    </header>
  );
};

export default Header;
