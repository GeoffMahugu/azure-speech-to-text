import Navbar from 'components/Navbar';
import { getTokenOrRefresh } from 'utils/token_util';
import React, { useEffect, useRef, useState, } from 'react';
import { IoClose, IoMicOutline, IoSendOutline } from 'react-icons/io5';
import { ResultReason } from 'microsoft-cognitiveservices-speech-sdk';

import '../scss/Chat.scss';
import { fetchUser } from 'utils/chats';
const speechsdk = require('microsoft-cognitiveservices-speech-sdk');


const ChatPage = props => {
    const [user] = useState(fetchUser(props.match.params.id));
    const textArea = useRef();
    const [recodingAudio, setRecordingAudio] = useState(false);
    const [message, setMessage] = useState('');
    const [messageList, setMessageList] = useState(user.messageList);
    const [error, setError] = useState('');
    const [tokenObj, setTokenObj] = useState(null);


    useEffect(() => {
        fetchToken();
    }, []);

    const fetchToken = async () => {
        await getTokenOrRefresh().then((data, err) => {
            setTokenObj(data);
        });
    };
    const recordAudio = async () => {
        setRecordingAudio(true);
        await sttFromMic();
    };

    const cancelRecording = () => {
        setRecordingAudio(false);
        setMessage('');
    };
    const postRecording = () => {

        if (message) {
            const messageObj = {
                text: message,
                sender: true,
            };

            const updated_messageList = [...messageList, messageObj];
            setMessageList(updated_messageList);

            setRecordingAudio(false);
            setMessage('');
        } else {
            if (textArea && textArea !== undefined) {
                const messageObj = {
                    text: textArea.current.value || '',
                    sender: true,
                };
                const updated_messageList = [...messageList, messageObj];
                setMessageList(updated_messageList);

                setRecordingAudio(false);
                setMessage('');
            }
        }

    };



    const sttFromMic = async () => {
        const speechConfig = speechsdk.SpeechConfig.fromAuthorizationToken(tokenObj.authToken, tokenObj.region);
        speechConfig.speechRecognitionLanguage = 'en-US';

        const audioConfig = speechsdk.AudioConfig.fromDefaultMicrophoneInput();
        const recognizer = new speechsdk.SpeechRecognizer(speechConfig, audioConfig);
        await recognizer.recognizeOnceAsync(result => {
            if (result.reason === ResultReason.RecognizedSpeech) {
                setMessage(result.text);
                return result.text;
            } else {
                // displayText = 'ERROR: Speech was cancelled or could not be recognized. Ensure your microphone is working properly.';
                setError('ERROR: Speech was cancelled or could not be recognized. Ensure your microphone is working properly.');
                return false;
            }
        });
    }


    return (
        <div className="page-wrapper">
            <Navbar user={user} />
            <div className="main-body-wrapper">
                <div className="chat-section-wrapper">

                    <div className="chat-wrapper">

                        {(messageList) &&

                            <>
                                {messageList.map(text => (
                                    <div className={(text.sender) ? 'sender messages' : 'receiver messages'}>
                                        <div className="message last">
                                            {text.text}
                                        </div>
                                    </div>

                                ))}
                            </>
                        }

                    </div>

                    <button className="record-btn-wrapper">
                        <IoMicOutline onClick={recordAudio} />
                    </button>

                    {(recodingAudio) &&

                        <div className="voice-message-wrapper">
                            <div className="voice-message-inner-wrapper">
                                <div className="txt-message-wrapper">

                                    {(message) ?
                                        <textarea name="message" id="message" placeholder="Voice text goes here." ref={textArea}>{message}</textarea>
                                        :
                                        <div id="bars">
                                            <div className="bar"></div>
                                            <div className="bar"></div>
                                            <div className="bar"></div>
                                            <div className="bar"></div>
                                            <div className="bar"></div>
                                            <div className="bar"></div>
                                            <div className="bar"></div>
                                            <div className="bar"></div>
                                            <div className="bar"></div>
                                            <div className="bar"></div>
                                        </div>
                                    }


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


export default ChatPage;



