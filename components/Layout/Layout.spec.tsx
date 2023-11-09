import React from 'react';
import { render } from '@testing-library/react';
import Layout from './Layout';

test('renders the Layout component correctly', () => {
  const { getByText, getByTestId } = render(
    <Layout>
      <div data-testid='child-element'>Child Content</div>
    </Layout>
  );

  const navbarElement = getByTestId('navbar');
  expect(navbarElement).toBeInTheDocument();

  const childElement = getByText('Child Content');
  expect(childElement).toBeInTheDocument();
});
