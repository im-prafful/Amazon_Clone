import React from 'react';
import "./Header.css";
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import SearchIcon from '@mui/icons-material/Search';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider.js';
import { auth } from "./firebase";

function Header() {
  const [ {basket, user}, dispatch] = useStateValue();
  const HandleAuthentication = () => {
    if (user){
      auth.signOut();
    }
  }

  return (
    <nav className="header">
      <Link to="/">
        <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""></img>
      </Link>

        <RoomOutlinedIcon className="header_locationIcon"></RoomOutlinedIcon>
        <div className="header_location">
          <span className="address"> Deliver To </span>
          <span className="country"> India </span>        
        </div>

        <div className="header_search">
            <input className="header_searchInput" type="text"/>
            <SearchIcon className="header_searchIcon"></SearchIcon>
        </div>

        <div className="header_nav">
          <div className="header_option">
            <LanguageOutlinedIcon className="header_countryIcon"></LanguageOutlinedIcon>
            <span className="header_option_l2"> EN </span>
          </div>
          <Link to={!user && "/login"}>
            <div className="header_option" onClick={HandleAuthentication}>
              <span className="header_option_l1"> Hello {!user ? "Guest" : user.email}</span>
              <span className="header_option_l2">{user ? "Sign Out" : "Sign In"} </span>
            </div>
          </Link>

          <div className="header_option">
            <span className="header_option_l1"> Returns </span>
            <span className="header_option_l2"> & Orders </span>
          </div>

          <Link to="/checkout">
            <div className="header_optionCart">
              <ShoppingCartOutlinedIcon className="cart_icon"></ShoppingCartOutlinedIcon>
              <span className="header_option_l2 header_basketCount">{basket?.length}</span>
            </div>
          </Link>
        </div>
    </nav>
  );
}

export default Header;