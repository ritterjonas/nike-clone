import TextField from '@/components/TextField/TextField';
import { SearchContainer } from './StoreSearch.styles';
import { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';
import { RoundedButton } from '@/components/RoundedButton/RoundedButton.styles';
import { useDebounce } from '@/hooks/useDebounce';

type StoreSearch = {
  onSearch: (search: string) => void;
};

export default function StoreSearch({ onSearch }: StoreSearch) {
  const [inputValue, setInputValue] = useState('');
  const isMobile = useIsMobile();

  const debouncedInputValue = useDebounce(inputValue, 500);

  const search = () => {
    if (inputValue.length < 3) {
      return;
    }

    onSearch(inputValue);
  };

  useEffect(() => {
    if (isMobile && debouncedInputValue) {
      search();
    }
  }, [isMobile, debouncedInputValue]);

  return (
    <SearchContainer>
      <TextField
        iconSrc='/images/icon_lupa.svg'
        placeholder='Busque por endereço ou CEP'
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      {!isMobile && (
        <RoundedButton onClick={() => search()}>Buscar</RoundedButton>
      )}
    </SearchContainer>
  );
}
