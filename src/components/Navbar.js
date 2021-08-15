import React, { useState } from 'react'
import '../scss/Navbar.scss';
import { IoArrowBack, IoSearch } from 'react-icons/io5';
import { useHistory, useLocation } from 'react-router-dom'


const Navbar = props => {
    const history = useHistory();

    const location = useLocation();
    const [currPage, setCurrPage] = useState(location.pathname);

    console.log(location.pathname);
    const navitageToHome = () => {
        history.push('/');
    }

    return (
        <div className="NavbarContainer">
            {(currPage === '/') ?
                <div className="main-nav-wrapper">
                    <div className="left-nav-wrapper">
                        <div className="logo-wrapper">
                            <h1 className="logo-txt">Navbar</h1>
                        </div>
                    </div>
                    <div className="right-nav-wrapper">
                        <div className="search-icon-wrapper">
                            <IoSearch />
                        </div>
                        <div className="avator-wrapper">
                            <div className="avator-img-wrapper">
                                <img src="/avators/4.jpeg" alt="User Name" />
                            </div>
                            <div className="status-icon active">&nbsp;</div>
                        </div>
                    </div>
                </div>
                :
                <div className="page-nav-wrapper">
                    <div className="left-nav-wrapper">
                        <div className="back-wrapper">
                            <IoArrowBack onClick={navitageToHome} />
                        </div>
                    </div>
                    <div className="center-nav-wrapper">
                        <span className="header-txt">Anna Rose</span>
                    </div>
                    <div className="right-nav-wrapper">

                        <div className="avator-wrapper">
                            <div className="avator-img-wrapper">
                                <img src="/avators/4.jpeg" alt="User Name" />
                            </div>
                            <div className="status-icon active">&nbsp;</div>
                        </div>
                    </div>
                </div>

            }



        </div>
    )
}


export default Navbar;
