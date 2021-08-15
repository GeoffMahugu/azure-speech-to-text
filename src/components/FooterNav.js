import React, { useEffect, useState } from 'react'
import '../scss/FooterNav.scss';
import { IoCallOutline, IoHomeOutline, IoNotificationsOutline } from 'react-icons/io5';
import { useHistory, useLocation } from 'react-router-dom';


const FooterNav = props => {
    const history = useHistory();
    const location = useLocation();

    const navitageToHome = () => {
        history.push('/');
    }
    const navitageToCalls = () => {
        history.push('/calls');
    }
    const navitageTonotifications = () => {
        history.push('/notifications');
    }

    return (
        <div className="FooterNavContainer">
            <div className={(location.pathname === '/calls') ? 'footer-icon-wrapper active' : 'footer-icon-wrapper'}>
                <IoCallOutline onClick={navitageToCalls} />
            </div>
            <div className={(location.pathname === '/') ? 'footer-icon-wrapper active' : 'footer-icon-wrapper'}>
                <IoHomeOutline onClick={navitageToHome} />
            </div>
            <div className={(location.pathname === '/notifications') ? 'footer-icon-wrapper active' : 'footer-icon-wrapper'}>
                <IoNotificationsOutline onClick={navitageTonotifications} />
            </div>
        </div>
    )
}


export default FooterNav;
