import React, { useContext } from 'react';
import CollapsedBox from '../../components/CollapsedBox';
import PolicyContext from '../../context/PolicyContext';

export default function Policy() {
  const _title = 'We present to you the policy of our site.';
  const _subtitle = `We take care of your comfort and safety by providing a top-notch public forum service on the world's great places. Please read the rules and regulations.`;
  const {
    state: { policy: rules },
  } = useContext(PolicyContext);
  return (
    <div className='policy'>
      <div className='container'>
        <div className='row policy__content'>
          <div className='col-6'>
            <div className='policy__content__heading'>
              <div className='policy__content__heading--title animation'>
                {_title}
              </div>
              <div className='policy__content__heading--subtitle animation'>
                {_subtitle}
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='policy__content__body'>
              {rules.map((rule) => (
                <CollapsedBox
                  key={rule.id}
                  header={rule.header}
                  body={rule.p}
                ></CollapsedBox>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
