import Image from 'next/image';
import {
  SelectBox,
  SelectContainer,
  SelectItem,
  SelectOverlay,
  SelectPopover,
} from './SelectField.styles';
import { useMemo, useState } from 'react';

type SelectOption = {
  value: string;
  text: string;
};

type SelectFieldProps = {
  placeholder: string;
  value: string;
  onChange: (order: string) => void;
  options: SelectOption[];
};

export default function SelectField({
  placeholder,
  value,
  onChange,
  options,
}: SelectFieldProps) {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = useMemo(() => {
    return options.find(option => option.value === value);
  }, [value, options]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SelectContainer data-testid='select-field'>
      <SelectBox onClick={toggleDropdown} data-testid='select-box'>
        <p>{selectedOption?.text || placeholder}</p>

        <Image
          src='/images/icon_seta_baixo.svg'
          alt='Arrow icon'
          width={12}
          height={12}
          style={isOpen ? { transform: 'rotate(180deg)' } : {}}
        />
      </SelectBox>
      {isOpen && (
        <>
          <SelectPopover data-testid='select-popover'>
            {options.map(option => (
              <SelectItem
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  toggleDropdown();
                }}
              >
                {option.text}
              </SelectItem>
            ))}
          </SelectPopover>
          <SelectOverlay
            onClick={toggleDropdown}
            data-testid='select-overlay'
          />
        </>
      )}
    </SelectContainer>
  );
}
