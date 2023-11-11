import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import StoreSearch from './StoreSearch';

describe('<StoreSearch />', () => {
  it('renders the StoreSearch component and calls onSearch', () => {
    const onSearchMock = jest.fn();

    const { getByPlaceholderText, getByText } = render(
      <StoreSearch onSearch={onSearchMock} />
    );

    const inputElement = getByPlaceholderText('Busque por endereço');
    const searchButtonElement = getByText('Buscar');

    expect(inputElement).toBeInTheDocument();
    expect(searchButtonElement).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: '12345' } });
    fireEvent.click(searchButtonElement);

    expect(onSearchMock).toHaveBeenCalledWith('12345');
  });
});
