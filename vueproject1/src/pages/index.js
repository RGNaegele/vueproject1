import React from 'react';
import Img from 'gatsby-image/withIEPolyfill';
import classNames from 'classnames';
import { Link, graphql } from 'gatsby';

import FlexContainer from '../primitives/flex-container';
import ActionCallout from '../primitives/action-callout';
import ExternalLink from '../primitives/external-link';
import { useDevice } from '../utils/effects';
import Section from '../primitives/section';
import Button from '../primitives/button';
import Layout from '../components/layout';
import SEO from '../components/seo';

import * as styles from './index.module.scss';

export default ({ data }) => {
  const { isMobile } = useDevice();

  const imageSection = (img, content) => (
    <div
      className={classNames(styles.imgContainer, {
        [styles.imgContainerMobile]: isMobile,
      })}
    >
      <Img
        fluid={img}
        styles={{
          maxWidth: img.presentationWidth,
          margin: '0 auto',
        }}
      />
      <FlexContainer direction="column" align="center">
        {content}
      </FlexContainer>
    </div>
  );

  return (
    <Layout transparent>
      <SEO title="Home" />
      <div className={styles.heroContainer}>
        <Img
          style={{ height: 500 }}
          fluid={data.hero.childImageSharp.fluid}
          objectPosition="20% 15%"
        />
        <div className={styles.filter} />
        <FlexContainer className={styles.heroTextContainer}>
          <FlexContainer flex="1" justify="flexend" direction="column">
            <h1 className={styles.heroText}>Your Life.</h1>
            <h1 className={styles.heroText}>Your Health.</h1>
            <h1 className={styles.heroText}>Your Family.</h1>
          </FlexContainer>

          {!!data.site.siteMetadata.announcement && !isMobile && (
            <FlexContainer
              justify="flexend"
              direction="column"
              className={styles.messageContainer}
            >
              <div className={styles.message}>
                {data.site.siteMetadata.announcement}
              </div>
            </FlexContainer>
          )}
        </FlexContainer>
      </div>
      <Section isLight>
        <FlexContainer align="center" direction="column">
          <h1 className={styles.header}>Papillion Family Medicine</h1>
          <p className={styles.subHeader}>
            We're here to help you and your family
          </p>
          <a
            href="https://omahamagazine.com/best-of-omaha-2020-results/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.bestOfOmaha}
          >
            <Img
              className={styles.booImage}
              fixed={data.bestOfOmaha.childImageSharp.fixed}
            />
            <FlexContainer align="center" className={styles.flag}>
              Dr. Mantler voted best Family Doctor of Omaha in 2023, 2022, 2021, 2020, and 2019 !
            </FlexContainer>
          </a>
        </FlexContainer>
      </Section>
      <Section>
        <FlexContainer
          justify="spacebetween"
          direction={isMobile ? 'column' : 'row'}
        >
          {imageSection(
            data.office.childImageSharp.fluid,
            <>
              <h3 className={styles.sectionHeader}>Location</h3>
              <p className={styles.sectionParagraph}>
                We are located on Cornhusker Road just west of 72nd Street and
                three minutes from downtown Papillion.
              </p>
              <ExternalLink
                to={`https://maps.google.com/?q=${data.site.siteMetadata.address}`}
                className={styles.sectionLink}
              >
                {data.site.siteMetadata.address}
              </ExternalLink>
            </>,
          )}
          {imageSection(
            data.staff.childImageSharp.fluid,
            <>
              <h3 className={styles.sectionHeader}>
                Our Professional Associates
              </h3>
              <p className={styles.sectionParagraph}>
                Our providers at Papillion Family Medicine take pride in
                providing a wide range of services to meet your needs.
              </p>
              <Link to="/providers" className={styles.sectionLink}>
                Meet Our Providers
              </Link>
            </>,
          )}
        </FlexContainer>
        <ActionCallout
          title="Connect with us"
          body="Find a provider that fits your needs, schedule an appointment, and see what our staff can do for you."
          button={
            <Link to="/contact">
              <Button>Contact Us</Button>
            </Link>
          }
        />
      </Section>
    </Layout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        address
        announcement
      }
    }
    hero: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 80) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    bestOfOmaha: file(relativePath: { eq: "bestofomaha.png" }) {
      childImageSharp {
        fixed(width: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    office: file(relativePath: { eq: "office.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 515, quality: 85) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    staff: file(relativePath: { eq: "staff.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 515, quality: 85) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
  }
`;
