import React from 'react';
import ToggleSwitch from './ToggleSwitch';
import './Footer.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-content">
                {/* <div className='tab'> */}

                <ToggleSwitch label="Server" />
                <ToggleSwitch label="TradeSender " />

                <p >Missing Trade: <span>0</span></p>


            </div>
        </div>
    )
}
export default Footer
