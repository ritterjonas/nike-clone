import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
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

    const nextButton = screen.getByTestId('next-button');
    const prevButton = screen.getByTestId('prev-button');

    fireEvent.click(nextButton);

    expect(screen.getByText('Encontre seu ideal')).toBeInTheDocument();

    fireEvent.click(nextButton);

    expect(
      screen.getByText('Os melhores preços e promoções')
    ).toBeInTheDocument();

    fireEvent.click(prevButton);

    expect(screen.getByText('Encontre seu ideal')).toBeInTheDocument();
  });
});
