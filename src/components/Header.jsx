import logo from '../img/LOGO.png';
import classNames from 'classnames';

const Header = ({active, toggleActive}) => {

  return (
    <>
      <header className="header z-10 bg-white fixed w-full h-16">
        <div className="container md:w-3/4 xs:w-4/5 mx-auto justify-between flex items-center min-h-18 max-w-full max-h-full h-20">
          <img src={logo} alt="Logo" className="md:w-max xs:w-3/5 cursor-pointer" />

          <div onClick={toggleActive} className={classNames(`tham tham-e-squeeze tham-w-8`, { 'tham-active': active })}>
            <div className="tham-box">
              <div className="tham-inner" />
            </div>
          </div>

        </div>
      </header>
    </>
  );
};

export default Header;