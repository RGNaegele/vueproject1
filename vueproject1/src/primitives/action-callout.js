import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import FlexContainer from './flex-container';
import { useDevice } from '../utils/effects';

import * as styles from './action-callout.module.scss';

export default function ActionCallout({ title, body, button }) {
  const { isMini } = useDevice();
  return (
    <div className={styles.container}>
      <FlexContainer
        direction={isMini ? 'column' : 'row'}
        className={styles.callout}
        align="center"
      >
        <FlexContainer
          className={classNames(styles.calloutText, {
            [styles.calloutTextCollapsed]: isMini,
          })}
          direction="column"
        >
          <h3>{title}</h3>
          <p>{body}</p>
        </FlexContainer>
        {button}
      </FlexContainer>
    </div>
  );
}

ActionCallout.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  button: PropTypes.node.isRequired,
};
