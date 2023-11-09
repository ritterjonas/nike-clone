import Image from 'next/image';
import { InputContainer, InputText } from './TextField.styles';

type TextFieldProps = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  iconSrc?: string;
};

export default function TextField({
  iconSrc,
  placeholder,
  value,
  onChange,
}: TextFieldProps) {
  return (
    <InputContainer>
      {iconSrc && (
        <Image src={iconSrc} alt='Input icon' width={12} height={12} />
      )}
      <InputText
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputContainer>
  );
}
