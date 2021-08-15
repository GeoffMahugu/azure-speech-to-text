import React from 'react';
import { Link, useHistory } from 'react-router-dom';


export const HomePage = props => {
    const history = useHistory();

    const navitageToCall = () => {
        history.push('/calls');
    }
    const navitageToHome = () => {
        history.push('/');

    }
    const navitageToNotifications = () => {
        history.push('/notifications');

    }
    const navitageToChats = () => {
        history.push('/chats/1');

    }
    return (
        <div>
            <h1>Home Page</h1>

            <button onClick={navitageToCall}>Call</button>
            <button onClick={navitageToHome}>Home</button>
            <button onClick={navitageToNotifications}>Notifications</button>
            <button onClick={navitageToChats}>Messages</button>
        </div>
    )
}
export default HomePage;
