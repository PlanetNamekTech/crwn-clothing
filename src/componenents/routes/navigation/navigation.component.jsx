import { Outlet, Link } from 'react-router-dom';
import { useContext } from 'react';
import CartIcon from '../../cart-icon/cart-icon-component';
import CartDropdown from '../../cart-dropdown/cart-dropdown.component'
import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg';
import { UserContext } from '../../../contexts/user.context';
import { CartContext } from '../../../contexts/cart.context';
import './navigation.style.scss';
import { signOutUser } from '../../../utils/firebase/firebase.utils';

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

    return (
      <>
        <div className="navigation">
            <Link className='logo-container' to='/'>
                <CrwnLogo className='logo' />
            </Link>
          <div className="nav-links-container">
            <Link className='nav-link' to='/shop'>
                SHOP
            </Link>
            {
              currentUser ? (
                <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
              ) : (
                <Link className='nav-link' to='/auth'>
                  SIGN IN
                </Link>
              )
            }
            <CartIcon />
            <Link className='nav-link' to='/shop'>
                CONTACT
            </Link>
            
          </div>
          {isCartOpen && <CartDropdown />}
        </div>
        <Outlet />
      </>
    )
  }

export default Navigation;