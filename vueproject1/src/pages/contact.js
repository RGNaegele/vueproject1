import React, { useState, useMemo } from 'react';
import { Link, graphql } from 'gatsby';

import FlexContainer from '../primitives/flex-container';
import ActionCallout from '../primitives/action-callout';
import ExternalLink from '../primitives/external-link';
import PageTitle from '../components/page-title';
import Section from '../primitives/section';
import Button from '../primitives/button';
import Layout from '../components/layout';
import SEO from '../components/seo';

import * as styles from './contact.module.scss';

const FORMSPREE_KEY = 'xeqkdako'; // Production
// const FORMSPREE_KEY = 'xzbgrpvo'; // Testing
const RESULT = { ERROR: 'ERROR', SUCCESS: 'SUCCESS' };
const getInitialForm = () => ({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
});

export default ({ data }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState();
  const [form, setForm] = useState(getInitialForm());

  const onInputUpdate = key => e => {
    if (result) {
      setResult();
    }
    setForm({ ...form, [key]: e.target.value });
  };

  const isValid = useMemo(
    () =>
      !!form.firstName &&
      !!form.lastName &&
      !!form.email &&
      !!form.subject &&
      !!form.message,
    [form],
  );

  const submit = () => {
    setIsLoading(true);
    fetch(`https://formspree.io/${FORMSPREE_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _subject: 'New Website Inquiry', ...form }),
    })
      .then(() => {
        setIsLoading(false);
        setForm(getInitialForm());
        setResult(RESULT.SUCCESS);
      })
      .catch(() => {
        setIsLoading(false);
        setResult(RESULT.ERROR);
      });
  };

  return (
    <Layout showMap>
      <SEO title="Connect With Us" />
      <Section isLight>
        <PageTitle title="Connect With Us">
          <b>For emergencies, please call 911.</b> If you need to set up an
          appointment or for any additional questions or concerns calls us at{' '}
          <ExternalLink to={`tel:${data.site.siteMetadata.contactPhone}`}>
            {data.site.siteMetadata.contactPhone}
          </ExternalLink>{' '}
          or fill out the contact form below. Please allow up to two business
          days for our staff to contact you.
        </PageTitle>
        <FlexContainer direction="column" className={styles.form}>
          <FlexContainer className={styles.formRow}>
            <FlexContainer flex="1" direction="column" className={styles.left}>
              <label htmlFor="firstName">First Name *</label>
              <input
                id="firstName"
                value={form.firstName}
                onChange={onInputUpdate('firstName')}
              />
            </FlexContainer>
            <FlexContainer flex="1" direction="column" className={styles.right}>
              <label htmlFor="lastName">Last Name *</label>
              <input
                id="lastName"
                value={form.lastName}
                onChange={onInputUpdate('lastName')}
              />
            </FlexContainer>
          </FlexContainer>
          <FlexContainer flex="1" direction="column" className={styles.formRow}>
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              value={form.email}
              onChange={onInputUpdate('email')}
            />
          </FlexContainer>
          <FlexContainer flex="1" direction="column" className={styles.formRow}>
            <label htmlFor="subject">Subject *</label>
            <input
              id="subject"
              value={form.subject}
              onChange={onInputUpdate('subject')}
            />
          </FlexContainer>
          <FlexContainer flex="1" direction="column" className={styles.formRow}>
            <label htmlFor="message">Message or Question *</label>
            <textarea
              id="message"
              rows="5"
              value={form.message}
              onChange={onInputUpdate('message')}
            />
          </FlexContainer>
          <FlexContainer align="center">
            <Button onClick={submit} disabled={!isValid} isLoading={isLoading}>
              Submit
            </Button>
            {result === RESULT.ERROR && (
              <span className={styles.error}>
                An error has occurred. Please call use at{' '}
                {data.site.siteMetadata.contactPhone}
              </span>
            )}
            {result === RESULT.SUCCESS && (
              <span className={styles.success}>Submission Successful!</span>
            )}
          </FlexContainer>
        </FlexContainer>
        <ActionCallout
          title="Pay my bill"
          body={
            <>
              Make a payment today using our online payment gateway. Call us at{' '}
              <ExternalLink to={`tel:${data.site.siteMetadata.contactPhone}`}>
                {data.site.siteMetadata.contactPhone}
              </ExternalLink>{' '}
              to make a payment over the phone.
            </>
          }
          button={
            <Link to="/bill-pay">
              <Button>Pay Now</Button>
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
        contactPhone
      }
    }
  }
`;
