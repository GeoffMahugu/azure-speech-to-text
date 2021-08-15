import Navbar from 'components/Navbar';
import React from 'react';
import { IoAddSharp, IoClose, IoSendOutline } from 'react-icons/io5';

import '../scss/Chat.scss'

export default function ChatPage() {
    return (
        <div className="page-wrapper">
            <Navbar />
            <div className="main-body-wrapper">
                <div className="chat-section-wrapper">

                    <div className="chat-wrapper">
                        <div className="sender messages">
                            <div className="message last">
                                Dude
                            </div>
                        </div>
                        <div className="receiver messages">
                            <div className="message">
                                Hey!
                            </div>
                            <div className="message">
                                You there?
                            </div>
                            <div className="message last">
                                Hello, how's it going?
                            </div>
                        </div>
                        <div className="sender messages">
                            <div className="message">
                                Great thanks!
                            </div>
                            <div className="message last">
                                How about you?
                            </div>
                        </div>
                    </div>

                    <div className="record-btn-wrapper">
                        <IoAddSharp />
                    </div>

                    {/* <div className="voice-message-wrapper">
                        <div className="voice-message-inner-wrapper">
                            <div className="txt-message-wrapper">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime at facere corrupti quos sapiente iure. Id soluta autem sapiente illum aliquam esse explicabo deserunt eum, aperiam illo voluptatibus eius ipsa.</p>
                            </div>
                            <div className="btn-wrapper">
                                <button className="circle-accent-btn">
                                    <IoClose />
                                </button>
                                <button className="circle-primary-btn">
                                    <IoSendOutline />
                                </button>
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    )
}

