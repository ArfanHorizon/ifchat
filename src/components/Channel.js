import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import { useFirestoreQuery } from '../hooks';
// Components
import Message from './Message';
// icon
import { AiOutlineSend } from 'react-icons/ai';

const Channel = ({ user = null }) => {
  const db = firebase.firestore();
  const messagesRef = db.collection('messages');
  const messages = useFirestoreQuery(
    messagesRef.orderBy('createdAt', 'desc')
  );

  const [newMessage, setNewMessage] = useState('');

  const inputRef = useRef();
  const bottomListRef = useRef();

  const { uid, displayName, photoURL } = user;

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  const handleOnChange = e => {
    setNewMessage(e.target.value);
  };

  const handleOnSubmit = e => {
    e.preventDefault();

    const trimmedMessage = newMessage.trim();
    if (trimmedMessage) {
      // Add new message in Firestore
      messagesRef.add({
        text: trimmedMessage,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        displayName,
        photoURL,
      });
      // Clear input field
      setNewMessage('');
      // Scroll down to the bottom of the list
      bottomListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="overflow-auto h-full">
        <div className="py-4 max-w-screen-lg mx-auto">
          <div className="border-b dark:border-gray-600 border-gray-200 py-8 mb-4">
            <div className="font-bold text-3xl text-center">
              <p className="mb-1">Selamat Datang Di</p>
              <p className="mb-3">IF Chat</p>
            </div>
            <p className="text-gray-400 text-center">
              Yuk Mulai Chatting dan Berdiskusi !!! 👇😁
            </p>
          </div>
          <ul>
            {messages
              ?.sort((first, second) =>
                first?.createdAt?.seconds <= second?.createdAt?.seconds ? -1 : 1
              )
              ?.map(message => (
                <li key={message.id}>
                  <Message  userId = {uid}  messageId = {message.uid} {...message} />
                </li>
              ))}
          </ul>
          <span ref={bottomListRef} ></span>
        </div>
      </div>
      <div className="mb-6 mx-4">
        <form
          onSubmit={handleOnSubmit}
          className="flex flex-row bg-gray-200 dark:bg-coolDark-400 rounded-md px-4 py-3 z-10 max-w-screen-lg mx-auto dark:text-white shadow-md"
        >
          <input
            ref={inputRef}
            type="text"
            value={newMessage}
            onChange={handleOnChange}
            placeholder="Ketik pesan kamu disini..."
            className="flex-1 bg-transparent outline-none"
          />
          <button
            type="submit"
            disabled={!newMessage}
            className="uppercase font-semibold text-sm tracking-wider text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <AiOutlineSend size={25} />
          </button>
        </form>
      </div>
    </div>
  );
};

Channel.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
    displayName: PropTypes.string,
    photoURL: PropTypes.string,
  }),
};

export default Channel;
