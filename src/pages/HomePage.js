import FooterNav from 'components/FooterNav';
import UserCard from 'components/UserCard';
import React, { useState } from 'react';
import { fetchUser, getChats } from 'utils/chats';
import Navbar from '../components/Navbar';

export const HomePage = props => {
    const [chats] = useState(getChats());
    const [user] = useState(fetchUser(props.match.params.id));

    return (
        <div className="page-wrapper">
            <Navbar user={user} />
            <div className="main-body-wrapper HomePageContainer">

                {(chats) ?
                    <>
                        {chats.map((user) => (
                            <UserCard user={user} key={user.id} />
                        ))}
                    </>
                    :
                    <div>No available chats</div>
                }
                <FooterNav />
            </div>
        </div>
    )
}
export default HomePage;
