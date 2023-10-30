import React from 'react';
import { Link } from 'gatsby';

import * as styles from './logo.module.scss';

export default props => (
  <h1 {...props}>
    <Link to="/" className={styles.link}>
      <div className={styles.logoMajor}>Papillion</div>
      <div className={styles.logoMinor}>Family Medicine</div>
    </Link>
  </h1>
);
