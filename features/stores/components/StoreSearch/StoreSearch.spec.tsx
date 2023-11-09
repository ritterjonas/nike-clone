import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import StoreSearch from './StoreSearch';

describe('<StoreSearch />', () => {
  it('renders the StoreSearch component and calls onSearch', () => {
    const onSearchMock = jest.fn();

    const { getByPlaceholderText, getByText } = render(
      <StoreSearch onSearch={onSearchMock} />
    );

    const inputElement = getByPlaceholderText('Busque por endereço ou CEP');
    const searchButtonElement = getByText('Buscar');

    expect(inputElement).toBeInTheDocument();
    expect(searchButtonElement).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: '12345' } });
    fireEvent.click(searchButtonElement);

    expect(onSearchMock).toHaveBeenCalledWith('12345');
  });

  it('does not call onSearch when input length is less than 3 characters', () => {
    const onSearchMock = jest.fn();

    const { getByPlaceholderText, getByText } = render(
      <StoreSearch onSearch={onSearchMock} />
    );

    const inputElement = getByPlaceholderText('Busque por endereço ou CEP');
    const searchButtonElement = getByText('Buscar');

    expect(inputElement).toBeInTheDocument();
    expect(searchButtonElement).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: '12' } });
    fireEvent.click(searchButtonElement);

    expect(onSearchMock).not.toHaveBeenCalled();
  });
});
