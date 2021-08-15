import Navbar from 'components/Navbar';
import React, { useState, } from 'react';
import { IoClose, IoMicOutline, IoSendOutline } from 'react-icons/io5';

import '../scss/Chat.scss'

export default function ChatPage() {
    const [recodingAudio, setRecordingAudio] = useState(false);
    const [message, setMessage] = useState('');

    const recordAudio = () => {
        setRecordingAudio(true);
    }

    const cancelRecording = () => {
        setRecordingAudio(false);
        setMessage('');
    }
    const postRecording = () => {
        setRecordingAudio(false);
        setMessage('');
    }

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

                    <button className="record-btn-wrapper">
                        <IoMicOutline onClick={recordAudio} />
                    </button>

                    {(recodingAudio) &&

                        <div className="voice-message-wrapper">
                            <div className="voice-message-inner-wrapper">
                                <div className="txt-message-wrapper">
                                    <textarea name="message" id="message" placeholder="Voice text goes here.">{message}</textarea>
                                </div>
                                <div className="btn-wrapper">
                                    <button className="circle-accent-btn" onClick={cancelRecording}>
                                        <IoClose />
                                    </button>
                                    <button className="circle-primary-btn" onClick={postRecording}>
                                        <IoSendOutline />
                                    </button>
                                </div>
                            </div>
                        </div>
                    }



                </div>
            </div>
        </div>
    )
}

