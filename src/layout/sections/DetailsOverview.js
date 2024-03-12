import React from 'react';
import DetailsBasicsBox from '../../components/DetailsBasicsBox';

export default function DetailsOverview({ destination }) {
  const _title = 'Overview';
  const _basics_title = 'Good to know';
  const _basics_language = 'Language';
  const _basics_currency = 'Currency';
  const { name, details, language, currency } = destination;
  return (
    <div className='details'>
      <div className='container'>
        <div className='text__header animation'>{`${name} ${_title}`}</div>
        <div className='row'>
          <div className='col-12 animation'>
            <div className='details__description'>{details}</div>
          </div>
        </div>
        <div className='text__subheader animation'>{_basics_title}</div>
        <div className='row'>
          <DetailsBasicsBox
            title={_basics_language}
            body={language}
          ></DetailsBasicsBox>
          <DetailsBasicsBox
            title={_basics_currency}
            body={currency}
          ></DetailsBasicsBox>
        </div>
      </div>
    </div>
  );
}
