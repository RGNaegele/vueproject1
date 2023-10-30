import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link, useStaticQuery, graphql } from 'gatsby';

import FlexContainer from '../primitives/flex-container';
import ExternalLink from '../primitives/external-link';
import Button from '../primitives/button';
import Logo from '../primitives/logo';
import { Map, Menu, Phone, X } from '../utils/icons';
import { useDevice } from '../utils/effects';

import * as styles from './layout.module.scss';

export default function Layout({ children, transparent, showMap }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isMobile } = useDevice();
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            contactPhone
            address
          }
        }
      }
    `,
  );

  useEffect(() => {
    if (!isMobile && isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  }, [isMobile, isSidebarOpen]);

  let headerLinks;
  if (isMobile) {
    const Icon = isSidebarOpen ? X : Menu;
    headerLinks = (
      <>
        <Icon
          size={40}
          className={styles.mobileIcon}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        {/* eslint-disable-next-line */}
        <div
          onClick={() => setIsSidebarOpen(false)}
          className={classNames(styles.panelOpacity, {
            [styles.panelOpacityOpen]: isSidebarOpen,
          })}
        />
        <div
          className={classNames(styles.panel, {
            [styles.panelOpen]: isSidebarOpen,
          })}
        >
          <FlexContainer direction="column" className={styles.innerPanel}>
            <FlexContainer direction="column" flex="1">
              <Link to="/services" className={styles.mobileLink}>
                Our Services
              </Link>
              <Link to="/providers" className={styles.mobileLink}>
                Our Providers
              </Link>
              <Link to="/forms" className={styles.mobileLink}>
                Forms
              </Link>
              <Link to="/contact" className={styles.mobileLink}>
                Contact Us
              </Link>
              <Link to="/bill-pay" className={styles.mobileLink}>
                Pay My Bill
              </Link>
            </FlexContainer>
            <FlexContainer direction="column">
              <a
                href={`tel:${site.siteMetadata.contactPhone}`}
                className={styles.phoneLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone size={23} className={styles.icon} />
                {site.siteMetadata.contactPhone}
              </a>
              <a
                href={`https://maps.google.com/?q=${site.siteMetadata.address}`}
                className={styles.phoneLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Map size={30} className={styles.icon} />
                {site.siteMetadata.address}
              </a>
            </FlexContainer>
          </FlexContainer>
        </div>
      </>
    );
  } else {
    headerLinks = (
      <FlexContainer align="center">
        <Link to="/services" className={styles.headerLink}>
          Our Services
        </Link>
        <Link to="/providers" className={styles.headerLink}>
          Our Providers
        </Link>
        <Link to="/forms" className={styles.headerLink}>
          Forms
        </Link>
        <FlexContainer
          direction="column"
          align="center"
          className={styles.headerBtn}
        >
          <Link to="/contact">
            <Button isLight>Contact Us</Button>
          </Link>
          <a
            href={`tel:${site.siteMetadata.contactPhone}`}
            className={styles.phoneLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Phone size={18} className={styles.icon} />
            {site.siteMetadata.contactPhone}
          </a>
        </FlexContainer>
      </FlexContainer>
    );
  }

  return (
    <>
      <header
        className={classNames(styles.header, {
          [styles.headerTransparent]: transparent,
        })}
      >
        <FlexContainer
          align="center"
          justify="spacebetween"
          className={styles.content}
        >
          <Logo className={styles.logo} />
          {headerLinks}
        </FlexContainer>
      </header>
      <div className={styles.contentContainer}>{children}</div>
      <footer
        className={classNames(styles.footer, { [styles.footerMap]: showMap })}
      >
        {showMap && (
          <iframe
            title="Papillion Family Medicine"
            className={styles.map}
            frameBorder="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.7730271865603!2d-96.02916798458122!3d41.161303779285504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87938affa177ce2f%3A0x99051011acdead5d!2s555%20Fortune%20Dr%2C%20Papillion%2C%20NE%2068046!5e0!3m2!1sen!2sus!4v1582665820931!5m2!1sen!2sus"
            allowFullScreen
          />
        )}
        <FlexContainer justify="center" className={styles.content}>
          <Logo />
        </FlexContainer>
        <FlexContainer
          justify="spacebetween"
          direction={isMobile ? 'column' : 'row'}
          className={styles.footerSection}
        >
          <FlexContainer
            direction="column"
            align={isMobile ? 'center' : 'flexstart'}
          >
            <ExternalLink
              to={`https://maps.google.com/?q=${site.siteMetadata.address}`}
              className={styles.footerText}
              isLight
            >
              {site.siteMetadata.address}
            </ExternalLink>
            <p className={styles.footerText}>
              <b>Monday - Friday</b> 8:30a - 4:30p
            </p>
          </FlexContainer>
          <FlexContainer
            direction="column"
            align={isMobile ? 'center' : 'flexend'}
          >
            <FlexContainer className={styles.footerText}>
              <Link className={styles.footerLink} to="/bill-pay">
                Pay My Bill
              </Link>
              <Link className={styles.footerLink} to="/contact">
                Contact Us
              </Link>
            </FlexContainer>
            <p className={styles.footerText}>
              Papillion Family Medicine © 2020 | All rights reserved.
            </p>
          </FlexContainer>
        </FlexContainer>
      </footer>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  transparent: PropTypes.bool,
  showMap: PropTypes.bool,
};

Layout.defaultProps = {
  transparent: false,
  showMap: false,
};
