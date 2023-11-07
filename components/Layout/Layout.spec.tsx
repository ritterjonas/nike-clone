import React from 'react';
import { render } from '@testing-library/react';
import Layout from './Layout';

test('renders the Layout component correctly', () => {
  const { getByText } = render(
    <Layout>
      <div data-testid="child-element">Child Content</div>
    </Layout>
  );

  const navbarElement = getByText('navbar');
  expect(navbarElement).toBeInTheDocument();

  const childElement = getByText('Child Content');
  expect(childElement).toBeInTheDocument();
});