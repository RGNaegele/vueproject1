import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import classNames from 'classnames';

import FlexContainer from '../primitives/flex-container';
import PageTitle from '../components/page-title';
import { useDevice } from '../utils/effects';
import Section from '../primitives/section';
import Layout from '../components/layout';
import SEO from '../components/seo';

import * as styles from './providers.module.scss';

export default ({ data }) => {
  const { isMobile } = useDevice();
  return (
    <Layout>
      <SEO title="Our Providers" />
      <Section isLight>
        <PageTitle title="Our Providers">
          Meet the team at Papillion Family Medicine, who takes pride in
          providing a wide range of services to meet your needs.
        </PageTitle>
        <FlexContainer
          direction={isMobile ? 'column' : 'row'}
          align="center"
          className={classNames(styles.rowContainer, {
            [styles.rowContainerMobile]: isMobile,
          })}
        >
          <Img
            className={styles.img}
            fluid={data.mantler.childImageSharp.fluid}
          />
          <FlexContainer direction="column" className={styles.description}>
            <h3>Edward Mantler, MD</h3>
            <p>
              For over 25 years I have been married to my one true love and
              soulmate the Reverend Doctor Janice Japp. I am dad to Walter and
              Evangeline, two of the best kids ever. Walter attends UNL and
              Evangeline attends the University of Iowa. I love the Beatles,
              chocolate, sports and games of all types. Go Huskers, 49ers, and
              SF Giants. Go Hawkeyes as long as they are not playing Nebraska.
            </p>
          </FlexContainer>
        </FlexContainer>
      </Section>
      <Section>
        <FlexContainer
          direction={isMobile ? 'column' : 'row'}
          align="center"
          className={classNames(styles.rowContainer, {
            [styles.rowContainerMobile]: isMobile,
          })}
        >
          {isMobile && (
            <Img
              className={styles.img}
              fluid={data.naegele.childImageSharp.fluid}
            />
          )}
          <FlexContainer direction="column" className={styles.description}>
            <h3>Robert Naegele, MD</h3>
            <p>
              I graduated from Creighton University School of Medicine in 1993,
              and subsequently completed one year of surgical internship and a
              Family Medicine residency in 1997 at the University of Nebraska
              Medical Center.
            </p>
            <p>
              I enjoy treating patients of all ages across the lifespan, and
              take a particular interest in older adults. I find it rewarding to
              help patients manage multiple medical issues, always with the
              goals of living longer and better. While older adults make up a
              significant portion of my practice, I also have a heart for
              children and young families.
            </p>
            <p>
              When not working, I'm usually at home with my family, supervising
              homework, going for a run, or playing a World War II boardgame
              with my longtime friend and gameboard rival, Dr. Ed Mantler.
            </p>
          </FlexContainer>
          {!isMobile && (
            <Img
              className={styles.img}
              fluid={data.naegele.childImageSharp.fluid}
            />
          )}
        </FlexContainer>
      </Section>
      <Section isLight>
        <FlexContainer
          direction={isMobile ? 'column' : 'row'}
          align="center"
          className={classNames(styles.rowContainer, {
            [styles.rowContainerMobile]: isMobile,
          })}
        >
          <Img
            className={styles.img}
            fluid={data.dorwart.childImageSharp.fluid}
          />
          <FlexContainer direction="column" className={styles.description}>
            <h3>Brooke Dorwart, PA-C</h3>
            <p>
              Brooke Dorwart received her Masters of Physician Assistant Studies
              from UNMC. She started working at Papillion Family Medicine in
              2018. Brooke obtained her undergraduate degree in Nutrition
              Exercise Science at UNL. She continues to use her knowledge from
              her undergraduate degree by educating patients about preventative
              medicine for a healthy lifestyle. Brooke enjoys family medicine as
              it allows for continuity of care throughout life. She has
              particular interest in taking care of the elderly population and
              women's health. When not at work, you can find Brooke and her
              husband enjoying the outdoors. A few of their favorite activities
              to do together include: gardening, hiking, and kayaking.
            </p>
          </FlexContainer>
        </FlexContainer>
      </Section>
      <Section>
        <FlexContainer
          direction={isMobile ? 'column' : 'row'}
          align="center"
          className={classNames(styles.rowContainer, {
            [styles.rowContainerMobile]: isMobile,
          })}
        >
          {isMobile && (
            <Img
              className={styles.img}
              fluid={data.borns.childImageSharp.fluid}
            />
          )}
          <FlexContainer direction="column" className={styles.description}>
            <h3>Erin Borns, PA-C</h3>
            <p>
              Erin Borns graduated from UNMC with a Master's in Physician
              Assistant Studies in 2014. She has been at Papillion Family
              Medicine since 2015. She grew up in South Dakota where she met her
              husband, Spencer. They share their home with their daughter and
              golden retriever.
            </p>
            <p>
              Erin has special interests in preventative medicine, specifically
              a focus on diet and exercise as being cornerstone to overall good
              health. She has further interests in diabetic care and women's
              health. She enjoys family medicine as it offers the ability to
              help patients with both short and long term goals. Professional,
              trusting relationships are an important part of her patient care
              approach. She encourages patient questions and a patient's
              knowledge in their own health and treatment choices.
            </p>
            <p>
              In her free time Erin enjoys reading books, dog walks, yoga and
              cooking healthy meals. Her and her husband also enjoy traveling
              and hiking when they are able.
            </p>
          </FlexContainer>
          {!isMobile && (
            <Img
              className={styles.img}
              fluid={data.borns.childImageSharp.fluid}
            />
          )}
        </FlexContainer>
      </Section>
    </Layout>
  );
};

export const query = graphql`
  query {
    mantler: file(relativePath: { eq: "mantler.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 280, quality: 80) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    naegele: file(relativePath: { eq: "naegele.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 280, quality: 80) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    dorwart: file(relativePath: { eq: "dorwart.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 280, quality: 80) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    borns: file(relativePath: { eq: "borns.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 280, quality: 80) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
  }
`;
