import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import * as styles from './external-link.module.scss';

export default function ExternalLink({ to, children, className, isLight }) {
  return (
    <a
      href={to}
      className={classNames(styles.link, className, {
        [styles.linkLight]: isLight,
      })}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

ExternalLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isLight: PropTypes.bool,
};

ExternalLink.defaultProps = {
  className: undefined,
  isLight: false,
};
