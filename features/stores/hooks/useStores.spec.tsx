import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import { useStores } from './useStores'; // Alterar o caminho para o seu arquivo
import { StoreLocation } from '../types/Stores.types';

const TestComponent = () => {
  const { stores, error, loading } = useStores();
  return (
    <div>
      {loading && <p>Carregando...</p>}
      {error && <p>Erro: {error.message}</p>}
      {stores && (
        <ul>
          {stores.map(store => (
            <li key={store.number}>{store.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

jest.mock('axios');
const mockStores: StoreLocation[] = [
  {
    name: 'Store 1',
    number: 123,
    latitude: '-22.912607',
    longitude: '-47.054530',
    adress: 'Rua das Flores, 123 - Centro, Rio Claro - SP, 13500-000',
  },
  {
    name: 'Store 2',
    number: 124,
    latitude: '-22.912707',
    longitude: '-47.051530',
    adress: 'Rua das Frutas, 124 - Centro, Rio Claro - SP, 13501-000',
  },
];
const mockError = new Error('Algo deu errado');

describe('useStores hook', () => {
  test('should render the component with store name', async () => {
    (axios.get as jest.Mock).mockResolvedValue({ data: mockStores });

    render(<TestComponent />);

    expect(screen.getByText(/Carregando/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/Store 1/i)).toBeInTheDocument();
      expect(screen.getByText(/Store 2/i)).toBeInTheDocument();
    });
  });

  test('deve renderizar um componente com mensagem de erro', async () => {
    (axios.get as jest.Mock).mockRejectedValue(mockError);

    render(<TestComponent />);

    expect(screen.getByText(/Carregando/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/Erro/i)).toBeInTheDocument();
      expect(screen.getByText(/Algo deu errado/i)).toBeInTheDocument();
    });
  });
});
