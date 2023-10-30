import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';

import FlexContainer from '../primitives/flex-container';
import ActionCallout from '../primitives/action-callout';
import PageTitle from '../components/page-title';
import { useDevice } from '../utils/effects';
import Section from '../primitives/section';
import Layout from '../components/layout';
import Button from '../primitives/button';
import SEO from '../components/seo';

import * as styles from './services.module.scss';

export default () => {
  const { isMobile } = useDevice();
  return (
    <Layout>
      <SEO title="Our Services" />
      <Section isLight>
        <PageTitle title="Our Services" />
        <FlexContainer direction={isMobile ? 'column' : 'row'}>
          <FlexContainer
            direction="column"
            flex="2"
            className={styles.description}
          >
            <p>
              We offer a wide range of services from infant to adults, including
              prenatal and end of life care. Physicals, women’s health exams,
              laboratory services and x-ray are available on site. We are able
              to do minor surgical procedures such as removal of warts, skin
              tags, and cancerous skin lesions. Conditions we treat include but
              are not limited to the following: heart disease, hypertension,
              cholesterol, diabetes, anxiety, depression, and chronic pain. We
              treat injuries from sports, Motor Vehicle accidents, and Worker
              Compensation. Our providers are able to admit to every major
              hospital in the area. Our on-site specialists include Thomas
              Dobleman, MD, ENT and the team of providers from Midwest Allergy
              and Asthma Clinic: Drs. Brownell, Nelson, Nilsson, Segura and
              Shakir.
            </p>
            <h3>Papillion Health Plaza</h3>
            <p>
              We are an independent part of Papillion Health Plaza. The Plaza is
              comprised of a group of various health professionals including:
              Papillion Pediatric Dentistry, FitMade Training and Nutrition,
              Fyzical Therapy, Manahan Eye Associates, Midwest Health
              Psychology, and Holistic Family Healthcare.
            </p>
          </FlexContainer>
          <FlexContainer
            direction="column"
            flex="1"
            className={classNames(styles.individual, {
              [styles.individualMobile]: isMobile,
            })}
          >
            <h3 className={classNames({ [styles.hiddenTitle]: !isMobile })}>
              Individual Services
            </h3>
            <div className={styles.service}>Physicals</div>
            <div className={styles.service}>Women's Health Exams</div>
            <div className={styles.service}>Prenatal Care</div>
            <div className={styles.service}>X-Rays</div>
            <div className={styles.service}>On-Site Labs</div>
            <div className={styles.service}>End of Life Care</div>
          </FlexContainer>
        </FlexContainer>
        <ActionCallout
          title="Insurance"
          body={
            <>
              <span>
                We accept all insurance plans except Nebraska Medicaid. We work
                with you to contain your health care costs to a range you will
                find affordable.
              </span>
              <span className={styles.contactText}>
                <i>Contact us for further information.</i>
              </span>
            </>
          }
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
