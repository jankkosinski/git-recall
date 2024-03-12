import React from 'react';

export default function SimpleSection({
  title,
  description,
  revert_order = false,
  children,
}) {
  return (
    <div className='simple-section'>
      <div className='container'>
        <div className='row'>
          {revert_order ? <div className='col-6'>{children}</div> : null}
          <div className='col-6'>
            <div className='simple-section__body'>
              <div className='text__header animation'>{title}</div>
              <div className='simple-section__body__text animation'>
                {description}
              </div>
            </div>
          </div>
          {!revert_order ? <div className='col-6'>{children}</div> : null}
        </div>
      </div>
    </div>
  );
}
