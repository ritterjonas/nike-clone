import React from 'react';
import { render, screen } from '@testing-library/react';
import News from './News';

describe('News Component', () => {
  test('renders left arrow', () => {
    render(<News />);
    const leftArrow = screen.getByTestId('news-arrow-left');
    expect(leftArrow).toBeInTheDocument();
  });

  test('renders right arrow', () => {
    render(<News />);
    const rightArrow = screen.getByTestId('news-arrow-right');
    expect(rightArrow).toBeInTheDocument();
  });

  test('renders SNKRS logo', () => {
    render(<News />);
    const snkrsLogo = screen.getByTestId('news-snkrs-logo');
    expect(snkrsLogo).toBeInTheDocument();
  });

  test('renders text', () => {
    render(<News />);
    const text = screen.getByText('Fique por dentro dos lançamentos SNKRS');
    expect(text).toBeInTheDocument();
  });
});