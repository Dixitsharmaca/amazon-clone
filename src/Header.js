import React from 'react'
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Link from 'react-router-dom/Link';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

  const [{cart, user}, dispatch] = useStateValue();

  const handleAuth = () =>
  {
    if (user) 
    {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to='/'>
        <img 
              className="header_logo"
              src = 'http://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
      </Link>
        
        <div className='header_search'>
            <input className="header_searchInput" type="text"/>

            {/*  Logo */}
            <SearchIcon className="header_searchIcon">

            </SearchIcon>
        </div>

        <div className="header_nav">

          {/*  Hello username and sign in  tag */}
          <Link to={!user &&'/login'}>
            <div onClick={handleAuth} className="header_option">

              <span className='header_optionLineOne'>
                Hello Guest
              </span>
              <span className='header_optionLineTwo'> {user ?
              'Sign Out' : 'Sign In'}
              </span>
            </div>
          </Link>
          
            {/*  returns & orders tag  */}
          <div className="header_option">
          <span className='header_optionLineOne'>
              Returns
            </span>
            <span className='header_optionLineTwo'>
              & Orders
            </span>
          </div>
          
          { /* Your prime tag */}
          <div className="header_option">
          <span className='header_optionLineOne'>
              Your
            </span>
            <span className='header_optionLineTwo'>
              Prime
            </span>
          </div>

          <Link to='/checkout'>
            <div className='header_basketOption'>
              <ShoppingBasketIcon />
              <span className='header_optionLineOne header_basketCount'>
                {cart?.length}
              </span>
            </div>
          </Link>
        </div>
    </div>
  )
}

export default Header
