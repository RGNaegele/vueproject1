import React from 'react';
import Img from 'gatsby-image';
import { Link, graphql } from 'gatsby';

import FlexContainer from '../primitives/flex-container';
import ActionCallout from '../primitives/action-callout';
import PageTitle from '../components/page-title';
import { useDevice } from '../utils/effects';
import Section from '../primitives/section';
import Button from '../primitives/button';
import Layout from '../components/layout';
import SEO from '../components/seo';

import patientInformation from '../docs/patient-information.pdf';
import hipaa from '../docs/hipaa.pdf';
import medicalHistory from '../docs/medical-history.pdf';
import textConsent from '../docs/text_consent.pdf';
import emailConsent from '../docs/email_consent.pdf';

import * as styles from './forms.module.scss';

export default ({ data }) => {
  const { isMobile } = useDevice();

  return (
    <Layout>
      <SEO title="Forms" />
      <Section isLight>
        <PageTitle title="Forms">
          Before your first visit, each of these forms must be filled out.
        </PageTitle>
        <FlexContainer
          className={styles.imgRow}
          align="spacebetween"
          direction={isMobile ? 'column' : 'row'}
        >
          <FlexContainer
            className={styles.imgContainer}
            direction="column"
            align="center"
            justify="center"
          >
            <h3 className={styles.title}>Patient Information</h3>
            <Img
              className={styles.img}
              fluid={data.information.childImageSharp.fluid}
            />
            <a href={patientInformation} download="patient-information">
              <Button className={styles.btn}>Download Now</Button>
            </a>
          </FlexContainer>
          <FlexContainer
            className={styles.imgContainer}
            direction="column"
            align="center"
            justify="center"
          >
            <h3 className={styles.title}>Permission To Treat</h3>
            <Img
              className={styles.img}
              fluid={data.hipaa.childImageSharp.fluid}
            />
            <a href={hipaa} download="hipaa">
              <Button className={styles.btn}>Download Now</Button>
            </a>
          </FlexContainer>
          <FlexContainer
            className={styles.imgContainer}
            direction="column"
            align="center"
            justify="center"
          >
            <h3 className={styles.title}>Medical History</h3>
            <Img
              className={styles.img}
              fluid={data.history.childImageSharp.fluid}
            />
            <a href={medicalHistory} download="medical-history">
              <Button className={styles.btn}>Download Now</Button>
            </a>
          </FlexContainer>
        </FlexContainer>
        <FlexContainer
          align="spacebetween"
          direction={isMobile ? 'column' : 'row'}
        >
          <FlexContainer
            className={styles.imgContainer}
            direction="column"
            align="center"
            justify="center"
          >
            <h3 className={styles.title}>Text Message Consent</h3>
            <Img
              className={styles.img}
              fluid={data.textConsent.childImageSharp.fluid}
            />
            <a href={textConsent} download="text-consent">
              <Button className={styles.btn}>Download Now</Button>
            </a>
          </FlexContainer>
          <FlexContainer
            className={styles.imgContainer}
            direction="column"
            align="center"
            justify="center"
          >
            <h3 className={styles.title}>Email Consent</h3>
            <Img
              className={styles.img}
              fluid={data.emailConsent.childImageSharp.fluid}
            />
            <a href={emailConsent} download="email-consent">
              <Button className={styles.btn}>Download Now</Button>
            </a>
          </FlexContainer>
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
    history: file(relativePath: { eq: "medical-history.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 328) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    information: file(relativePath: { eq: "patient-information.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 328) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hipaa: file(relativePath: { eq: "hipaa.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 328) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    textConsent: file(relativePath: { eq: "text_consent.png" }) {
      childImageSharp {
        fluid(maxWidth: 328) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    emailConsent: file(relativePath: { eq: "email_consent.png" }) {
      childImageSharp {
        fluid(maxWidth: 328) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
