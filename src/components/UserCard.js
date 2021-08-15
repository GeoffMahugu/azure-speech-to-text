import React from 'react';
import { useHistory } from 'react-router-dom';
import '../scss/UserCard.scss';


const UserCard = ({ user }) => {
    const history = useHistory();

    const navitageToChats = () => {
        history.push(`/chats/${user.id}`);
    }
    return (
        <div className="UserCardContainer mb-20" onClick={navitageToChats}>
            <div className="user-card-avator-wrapper">
                <div className="avator-img-wrapper">
                    <img src={user.img} alt="User Name" />
                </div>
                <div className={(user.status) ? 'status-icon active' : 'status-icon'}>&nbsp;</div>
            </div>
            <div className="user-card-body-wrapper">
                <div className="header-wrapper">
                    <h3>{user.name}</h3>

                    <div className="user-time-wrapper">
                        {user.time}
                    </div>
                </div>
                <div className="body-wrapper">
                    <p> {user.text}</p>

                </div>
            </div>

        </div>
    )
}

export default UserCard;
