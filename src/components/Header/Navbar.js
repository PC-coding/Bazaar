import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import img from '/Users/tappy/Byte/Bazaar/bazaar/src/components/Header/Bazaar_b.png';
import { Link } from 'react-router-dom';
import { useStateValue } from '../Util/StateProvider';
import { auth } from '../Util/firebase';

export default function Navbar(){
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    return(
        <div className='header'>
            <Link to='/'>
                <img src={img} className='header_logo'/>
            </Link>

            <div className='header_search'>
                <input
                className='header_searchInput'
                type='text' />
                <SearchIcon 
                className='header_searchIcon'/>
            </div>


            <div className='header_nav'>
                <Link 
                style={{textDecoration:'None'}}
                to={!user && '/login'}>
                    <div onClick={handleAuthentication}
                    className='header_option'>
                        <span className='header_optionLineOne'>
                            Hello Guest
                        </span>
                        <span className='header_optionLineTwo'>
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>

                <div className='header_option'>
                    <span className='header_optionLineOne'>
                        Returns
                    </span>
                    <span className='header_optionLineTwo'>
                        Orders
                    </span>
                </div>

                <div className='header_option'>
                    <span className='header_optionLineOne'>
                        Your
                    </span>
                    <span className='header_optionLineTwo'>
                        Prime
                    </span>
                </div>
            <Link to='/checkout'>
                <div className='header_optionBasket'>
                    <ShoppingBasketIcon />
                    <span className= 'header_optionLineTwo header_basketCount'>
                    {basket?.length}
                    </span>
                </div>
            </Link>


            </div>
        </div>
    )
}