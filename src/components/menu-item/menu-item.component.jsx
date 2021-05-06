// import React from 'react';
// import { withRouter } from 'react-router-dom';

// import './menu-item.styles.scss';

// const MenuItem = ({ title,imageUrl,size,history,linkUrl,match }) => {
//     return (
//         <div 
//             className={`${size} menu-item`} 
//             onClick={() => history.push(`${match.url}${linkUrl}`)}>
//             <div 
//                 className='background-image'
//                 style={{ backgroundImage: `url(${imageUrl})`}} 
//             />
//             <div className='content'>
//                 <h1 className='title'>{ title.toUpperCase() }</h1>
//                 <span className='subtitle'>SHOP NOW</span>
//             </div>
//         </div>
//     )
// }

// export default withRouter(MenuItem);

// --------------------------------------------------------------------------------------

import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import './menu-item.styles.scss';

const MenuItem = ({ title,imageUrl,size,history,linkUrl,match, currentUser }) => {
    return (
        <div 
            className={`${size} menu-item`} 
            onClick={() => {
                if (currentUser) {
                    history.push(`${match.url}${linkUrl}`)
                } else {
                    alert('In order to navigate this website you must be signed in.')
                    history.push(`/signin`)
                }
            }}>
            <div 
                className='background-image'
                style={{ backgroundImage: `url(${imageUrl})`}} 
            />
            <div className='content'>
                <h1 className='title'>{ title.toUpperCase() }</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default withRouter(connect(mapStateToProps)(MenuItem));