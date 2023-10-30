import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import * as styles from './section.module.scss';

export default function Section({ children, isLight }) {
  return (
    <div
      className={classNames(styles.section, {
        [styles.light]: isLight,
      })}
    >
      <div className={styles.inner}>{children}</div>
    </div>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  isLight: PropTypes.bool,
};

Section.defaultProps = {
  isLight: false,
};
