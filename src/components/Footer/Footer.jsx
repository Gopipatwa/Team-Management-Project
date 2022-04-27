import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-content">
                <div className="logo">
                    <img className='cosmic-trade-icon' src="/icon/Cosmic-Trades-White-Logo.png" alt="" />
                </div>
                <div className='tab'>
                    <div>
                        <p>
                            <i className="fas fa-toggle-on"></i>
                            Server Toggle</p>
                        <p>
                            <i className="fas fa-toggle-on"></i>
                            TradeSender Toggle
                        </p>
                    </div>
                    <div className="">
                        <p style={{ color: '#ff0000' }}>Missing Trade:</p>
                        <p>
                            {/* <i className="fas fa-exclamation-triangle"></i> */}
                            Troubleshoot
                        </p>
                        <p className='delete-duplication'>
                            {/* <i className="fas fa-trash"></i> */}
                            Delete Duplication
                        </p>
                    </div>
                </div>

                <div className="gmail">
                    <a className="mailto" href="mailto:Finrise@gmail.com" className=""
                    >Finrise@gmail.com</a>
                </div>
            </div>
        </div>
    )
}
export default Footer
