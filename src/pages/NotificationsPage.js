import FooterNav from 'components/FooterNav';
import Navbar from 'components/Navbar';
import React, { useState } from 'react'
import { fetchUser } from 'utils/chats';


export const NotificationsPage = props => {

    const [user] = useState(fetchUser(props.match.params.id));

    return (
        <div className="page-wrapper">
            <Navbar user={user} />
            <div className="main-body-wrapper HomePageContainer">
                <h1 className="def-txt">Notifications Page</h1>
                <FooterNav />
            </div>
        </div>
    )
}

export default NotificationsPage;

