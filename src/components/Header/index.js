import React from 'react';
import Heading from './heading';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';

const Header = () => (
    <div id="heading" className="heading">        
        <StickyHeader
            header={
                <div className="Header_root">          
                    <Heading/>
                </div>
            }
        >
        </StickyHeader>
    </div>
);

export default Header;