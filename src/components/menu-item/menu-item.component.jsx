import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match}) => {
    console.log('match ',match);
    return(
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div
                className='backrgound-image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='sub-title'>Shop now</span>
            </div>
        </div>
        )
    };

export default withRouter(MenuItem);