import React from 'react';
import PropTypes from 'prop-types';

import FlexContainer from '../primitives/flex-container';

import * as styles from './page-title.module.scss';

export default function PageTitle({ title, children }) {
  return (
    <FlexContainer
      className={styles.container}
      direction="column"
      justify="center"
      align="center"
    >
      <h1>{title}</h1>
      {!!children && <p>{children}</p>}
    </FlexContainer>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

PageTitle.defaultProps = {
  children: undefined,
};
