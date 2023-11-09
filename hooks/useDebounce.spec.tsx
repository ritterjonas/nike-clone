import React, { useState } from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { useDebounce } from './useDebounce';

const TestComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 100);

  return (
    <div>
      <input
        type='text'
        data-testid='input'
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <div data-testid='debounced-value'>{debouncedValue}</div>
    </div>
  );
};

test('useDebounce updates the debounced value after the specified delay', async () => {
  const { getByTestId } = render(<TestComponent />);

  const debouncedValueElement = getByTestId('debounced-value');

  expect(debouncedValueElement.textContent).toBe('');

  const input = getByTestId('input');
  fireEvent.change(input, { target: { value: 'updatedValue' } });

  expect(debouncedValueElement.textContent).toBe('');

  await waitFor(() => {
    expect(debouncedValueElement.textContent).toBe('updatedValue');
  });
});
