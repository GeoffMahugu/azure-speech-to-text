import FooterNav from 'components/FooterNav';
import Navbar from 'components/Navbar';
import React, { useState } from 'react';
import { fetchUser } from 'utils/chats';
import '../scss/App.scss';

export const CallsPage = props => {

    // @ts-ignore
    const [user] = useState(fetchUser(props.match.params.id));

    return (
        <div className="page-wrapper">
            <Navbar user={user} />
            <div className="main-body-wrapper HomePageContainer">
                <h1 className="def-txt">Call Page</h1>
                <FooterNav />
            </div>
        </div>
    )
}

export default CallsPage;
