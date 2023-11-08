import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TextField from './TextField';

test('TextField displays the provided placeholder', () => {
  const placeholderText = 'Test Placeholder';
  render(<TextField value="" onChange={() => {}} placeholder={placeholderText} />);
  
  const textFieldElement = screen.getByPlaceholderText(placeholderText);
  expect(textFieldElement).toBeInTheDocument();
});

test('TextField with icon displays the provided icon', () => {
  const iconSrc = '/images/icon_lupa.svg';
  render(<TextField value="" onChange={() => {}} placeholder="Test Placeholder" iconSrc={iconSrc} />);
  const iconElement = screen.getByAltText('Input icon');
  expect(iconElement).toBeInTheDocument();
});

test('TextField triggers onChange when the input value changes', () => {
  let inputValue = '';

  render(<TextField value={inputValue} onChange={(e) => { inputValue = e.target.value }} placeholder="Test Placeholder" />);
  const textFieldElement = screen.getByRole('textbox');

  fireEvent.change(textFieldElement, { target: { value: 'New Value' } });
  expect(inputValue).toBe('New Value');
});
