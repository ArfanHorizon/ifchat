import React from 'react';
import PropTypes from 'prop-types';
import { formatRelative } from 'date-fns';
import { id } from 'date-fns/locale'


const formatDate = date => {
  let formattgl = '';
  if (date) {
    // format tgl ke tgl biasa
    formattgl = formatRelative(date, new Date(), {locale: id});
    formattgl =
      formattgl.charAt(0).toUpperCase() + formattgl.slice(1);
  }
  return formattgl;
};


const Message = ({
  userId,
  messageId,
  createdAt = null,
  text = '',
  displayName = '',
  photoURL = '',
}) => {
  if (!text) return null;

  const messageClass = userId === messageId  ? 'sent' : 'received';
  return (
    <div className={`${messageClass} px-4 py-4 rounded-md hover:bg-gray-50 dark:hover:bg-coolDark-600 overflow-hidden flex items-start`}>
      {photoURL ? (
        <img
          src={photoURL}
          alt="Avatar"
          className="rounded-full mr-4"
          width={45}
          height={45}
        />
      ) : null}
      <div>
        <div className={`${messageClass} flex items-center mb-1 mr-2`}>
          {displayName ? (
            <p className={` mr-2 text-primary-500`}>  {displayName}</p>
          ) : null}
          {createdAt?.seconds ? (
            <span className="text-gray-500 text-xs mr-2">
              {formatDate(new Date(createdAt.seconds * 1000))}
            </span>
          ) : null}
        </div>
        <p className='mr-4'>{text}</p>
      </div>
    </div>
  );
};

Message.propTypes = {
  text: PropTypes.string,
  createdAt: PropTypes.shape({
    seconds: PropTypes.number,
  }),
  displayName: PropTypes.string,
  photoURL: PropTypes.string,
};

export default Message;
