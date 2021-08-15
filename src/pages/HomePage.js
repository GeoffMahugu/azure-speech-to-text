import UserCard from 'components/UserCard';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';

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
        <div className="page-wrapper">
            <Navbar />
            <div className="main-body-wrapper">
                <UserCard />
            </div>

            {/* <div className="main-body-wrapper">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis est animi voluptatum distinctio nemo veniam. Magnam obcaecati molestiae iure quasi! Aliquam magni odio suscipit soluta voluptatem dolorem ipsam numquam distinctio.
            </div> */}
            {/* <button onClick={navitageToCall}>Call</button>
            <button onClick={navitageToHome}>Home</button>
            <button onClick={navitageToNotifications}>Notifications</button>
            <button onClick={navitageToChats}>Messages</button> */}
        </div>
    )
}
export default HomePage;
