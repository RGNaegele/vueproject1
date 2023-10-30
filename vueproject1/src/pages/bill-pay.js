import React from 'react';
import { Link } from 'gatsby';

import FlexContainer from '../primitives/flex-container';
import ActionCallout from '../primitives/action-callout';
import PageTitle from '../components/page-title';
import Section from '../primitives/section';
import Button from '../primitives/button';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default () => (
  <Layout showMap>
    <SEO title="Pay My Bill" />
    <Section isLight>
      <PageTitle title="Pay My Bill">
        Payment is processed securely through PayPal by following the link
        below. Please set the “Price per item” to the amount that appears on
        your bill.
      </PageTitle>
      <FlexContainer justify="center">
        <form
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          target="_top"
        >
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="TSBTGG6SH8ZYG" />
          <Button type="submit" name="submit">
            Pay Now
          </Button>
        </form>
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
