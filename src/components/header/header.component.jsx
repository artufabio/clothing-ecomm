import React from 'react';

import  { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.components';
import CartDropdown from '../cart-dropdown/cart-dropdown.components';
import { auth } from '../../firebase/firebase.utils';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = ( {currentUser, hidden} ) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'></Logo>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser 
                ?
                <div className='option' onClick={ () => auth.signOut() }>SIGN OUT</div> 
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon />
        </div>
        { hidden ? null : <CartDropdown /> }
    </div>
);

// const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) => ({
//     currentUser,
//     hidden
// });

// const mapStateToProps = state =>({
//     currentUser: selectCurrentUser(state),
//     hidden: selectCartHidden(state)
// })

// instead of the upper solutions for mapStateToProps, let's use createStructuredSelectors 
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);



// syntax used to destructor nested values
// {user:{currentUser}, cart:{hidden}} 
// currentUser and hidden are destructored from user and cart; user and cart are destructored off of the state