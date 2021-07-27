import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/auth";

import NavLink from "./navLink";
import Icon from "./icon";
import Button from "./button";

const NavBar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated
  );

  return (
    <nav>
      <div className='navigation-bar'>
        <div className='navigation-bar__logo'>
          <Link href='/'>
            <a>
              <Icon src='./icons/black/logo.svg' />
            </a>
          </Link>
        </div>
        <div className='navigation-bar__links'>
          <NavLink text='Pourquoi Mazz Kitchen ?' link='/staff' />
          <NavLink text='Nos Offres &amp; Tarifs' link='/tarifs' />
          <NavLink text='Actualités' link='/posts' />
          <NavLink text='À propos' link='#' />
        </div>
        {isAuthenticated && (
          <div className='navigation-bar__admin'>
            <Link href='/dashboard'>
              <a>
                <Button className='btn btn__nav'>Administration</Button>
              </a>
            </Link>
            <NavLink
              text='Déconnexion'
              icn='fas fa-sign-out-alt'
              link='/'
              onClick={() => {
                dispatch(logout());
              }}
            ></NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
