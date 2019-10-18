import React from 'react';
import {  createStructuredSelector} from 'reselect';
import { connect } from 'react-redux';

import { selectDirectorySections } from '../../redux/directory/directory.selector';

import MenuItem from '../menu-item/menu-item.component';
import './menu-directory.styles.scss';

const  MenuDirectory = ({ sections }) => {
  console.log('s ',sections)
  return(
    <div className='directory-menu'>
        { sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps}/>
        ))}
    </div>
);

}
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(MenuDirectory);