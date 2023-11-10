import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SelectField from './SelectField';

const options = [
  { value: 'option1', text: 'Opção 1' },
  { value: 'option2', text: 'Opção 2' },
  { value: 'option3', text: 'Opção 3' },
];

describe('<SelectField />', () => {
  it('render the placeholder when no option is selected', () => {
    render(
      <SelectField
        placeholder='Selecione'
        value=''
        onChange={() => {}}
        options={options}
      />
    );
    const placeholderElement = screen.getByText('Selecione');
    expect(placeholderElement).toBeInTheDocument();
  });

  it('render the selected option', () => {
    render(
      <SelectField
        placeholder='Selecione'
        value='option2'
        onChange={() => {}}
        options={options}
      />
    );
    const selectedOptionElement = screen.getByText('Opção 2');
    expect(selectedOptionElement).toBeInTheDocument();
  });

  it('toggles the dropdown when clicked', () => {
    render(
      <SelectField
        placeholder='Selecione'
        value=''
        onChange={() => {}}
        options={options}
      />
    );
    const selectBoxElement = screen.getByTestId('select-box');
    fireEvent.click(selectBoxElement);

    const selectPopoverElement = screen.getByTestId('select-popover');
    expect(selectPopoverElement).toBeInTheDocument();
  });

  it('calls onChange and closes the dropdown when an option is selected', () => {
    const handleChange = jest.fn();
    render(
      <SelectField
        placeholder='Selecione'
        value=''
        onChange={handleChange}
        options={options}
      />
    );

    const selectBoxElement = screen.getByTestId('select-box');
    fireEvent.click(selectBoxElement);

    const optionElement = screen.getByText('Opção 1');
    fireEvent.click(optionElement);

    expect(handleChange).toHaveBeenCalledWith('option1');

    const selectPopoverElement = screen.queryByTestId('select-popover');
    expect(selectPopoverElement).toBeNull();
  });

  it('closes the dropdown when clicking outside the options', () => {
    render(
      <SelectField
        placeholder='Selecione'
        value=''
        onChange={() => {}}
        options={options}
      />
    );

    const selectBoxElement = screen.getByTestId('select-box');
    fireEvent.click(selectBoxElement);

    const selectOverlayElement = screen.getByTestId('select-overlay');
    fireEvent.click(selectOverlayElement);

    const selectPopoverElement = screen.queryByTestId('select-popover');
    expect(selectPopoverElement).toBeNull();
  });
});
