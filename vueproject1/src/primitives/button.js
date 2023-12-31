import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Spinner from './spinner';

import * as styles from './button.module.scss';

export default function Button({
  children,
  className,
  isLoading,
  isLight,
  ...rest
}) {
  let loadingSpinner = null;
  if (isLoading) {
    loadingSpinner = (
      <Spinner isLight={!isLight} size={20} className={styles.spinner} />
    );
  }
  return (
    <button
      {...rest}
      className={classNames(styles.button, className, {
        [styles.buttonLight]: isLight,
      })}
    >
      {loadingSpinner}
      <span
        className={classNames(styles.inner, { [styles.loading]: isLoading })}
      >
        {children}
      </span>
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  isLight: PropTypes.bool,
};

Button.defaultProps = {
  className: undefined,
  isLoading: false,
  isLight: false,
};
