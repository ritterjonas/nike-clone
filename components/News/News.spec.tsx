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

  test('render logos', () => {
    render(<News />);
    const logos = screen.queryAllByTestId('news-logo');
    expect(logos).toHaveLength(3);
  });

  test('renders text', () => {
    render(<News />);
    expect(
      screen.getByText('Fique por dentro dos lançamentos')
    ).toBeInTheDocument();
    expect(screen.getByText('Encontre seu ideal')).toBeInTheDocument();
    expect(
      screen.getByText('Os melhores preços e promoções')
    ).toBeInTheDocument();
  });
});
