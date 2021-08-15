import React from 'react';
import { useHistory } from 'react-router-dom';
import '../scss/UserCard.scss';

export default function UserCard() {
    const history = useHistory();

    const navitageToChats = () => {
        history.push('/chats/1');

    }
    return (
        <div className="UserCardContainer" onClick={navitageToChats}>
            <div className="user-card-avator-wrapper">
                <div className="avator-img-wrapper">
                    <img src="/avators/4.jpeg" alt="User Name" />
                </div>
                <div className="status-icon active">&nbsp;</div>
            </div>
            <div className="user-card-body-wrapper">
                <div className="header-wrapper">
                    <h3>Anna Rose</h3>

                    <div className="user-time-wrapper">
                        3 mins Ago
                    </div>
                </div>
                <div className="body-wrapper">
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sit veritatis sunt a beatae fuga culpa repudiandae eos atque non doloribus accusamus vitae iure dolorum voluptates, obcaecati recusandae nostrum. Doloribus?</p>

                </div>
            </div>

        </div>
    )
}
