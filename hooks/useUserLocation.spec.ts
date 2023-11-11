import { renderHook, waitFor } from '@testing-library/react';
import { useUserLocation } from './useUserLocation';

const mockGeolocation = {
  getCurrentPosition: jest.fn(),
};

const mockPermissions = {
  query: jest.fn(),
};

beforeEach(() => {
  Object.defineProperty(global.navigator, 'geolocation', {
    value: mockGeolocation,
  });

  Object.defineProperty(global.navigator, 'permissions', {
    value: mockPermissions,
  });
});

test('useUserLocation hook updates location on successful geolocation with permission granted', async () => {
  const mockCoords = {
    latitude: 40.7128,
    longitude: -74.006,
  };

  mockPermissions.query.mockResolvedValueOnce({ state: 'granted' });

  mockGeolocation.getCurrentPosition.mockImplementationOnce(successCallback => {
    successCallback({ coords: mockCoords });
  });

  const { result } = renderHook(() => useUserLocation());

  await waitFor(() => {
    expect(result.current.location).toEqual({
      lat: mockCoords.latitude,
      lng: mockCoords.longitude,
    });
  });
});

test('useUserLocation hook handles geolocation error', async () => {
  mockPermissions.query.mockResolvedValueOnce({ state: 'granted' });

  mockGeolocation.getCurrentPosition.mockImplementationOnce(
    (successCallback, errorCallback) => {
      errorCallback({ message: 'Geolocation error' });
    }
  );

  const { result } = renderHook(() => useUserLocation());

  await waitFor(() => {
    expect(result.current.location).toBeUndefined();
  });
});

test('useUserLocation hook handles denied geolocation permission', async () => {
  mockPermissions.query.mockResolvedValueOnce({ state: 'denied' });

  const { result } = renderHook(() => useUserLocation());

  await waitFor(() => {
    expect(result.current.location).toBeUndefined();
  });
});
