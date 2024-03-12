import React from 'react';

export default function DetailsBasicsBox({ title, body }) {
  return (
    <div className='col-6'>
      <div className='details__basics animation'>
        <div className='details__basics__title'>{title}</div>
        <div className='details__basics__body'>{body}</div>
      </div>
    </div>
  );
}
