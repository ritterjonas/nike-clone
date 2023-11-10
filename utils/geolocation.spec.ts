import { getDistance, isCoordinates, parseCoordinates } from './geolocation';

const user = {
  lat: -16.1215901710532,
  long: -48.39803935435456,
};

describe('Geolocation utils', () => {
  describe('getDistance function', () => {
    describe('should return distance in km', () => {
      test('test 1', () => {
        const mock = {
          lat: -16.6582703345688,
          long: -49.2594889500795,
        };

        const distance = getDistance(user.lat, user.long, mock.lat, mock.long);
        expect(distance).toEqual(101.49487690941834);
      });

      test('test 2', () => {
        const mock = {
          lat: -23.4203996425119,
          long: -47.16403706665317,
        };

        const distance = getDistance(user.lat, user.long, mock.lat, mock.long);
        expect(distance).toEqual(740.2390245502291);
      });

      test('test 3', () => {
        const mock = {
          lat: -19.9535235453997,
          long: -44.0217101714788,
        };

        const distance = getDistance(user.lat, user.long, mock.lat, mock.long);
        expect(distance).toEqual(581.686947612894);
      });
    });
  });

  describe('isCoordinates function', () => {
    it('returns true for valid coordinates', () => {
      expect(isCoordinates('37.7749,-122.4194')).toBe(true); // Latitude e longitude válidas
      expect(isCoordinates('90.0000,180.0000')).toBe(true); // Latitude e longitude no máximo
      expect(isCoordinates('-90.0000,-180.0000')).toBe(true); // Latitude e longitude no mínimo
      expect(isCoordinates('0.0000,0.0000')).toBe(true); // Latitude e longitude zero
    });

    it('returns false for invalid coordinates', () => {
      expect(isCoordinates('37.7749,-200.0')).toBe(false); // Longitude inválida
      expect(isCoordinates('100.0,180.0000')).toBe(false); // Latitude inválida
      expect(isCoordinates('91.0000,181.0000')).toBe(false); // Latitude e longitude fora do alcance
      expect(isCoordinates('notacoordinate')).toBe(false); // Entrada inválida
      expect(isCoordinates('37.7749 -122.4194')).toBe(false); // Espaço em branco inválido
    });
  });

  describe('parseCoordinates function', () => {
    it('parses valid coordinates', () => {
      const coordinates = '37.7749, -122.4194';
      const result = parseCoordinates(coordinates);
      expect(result).toEqual({ lat: 37.7749, lng: -122.4194 });
    });

    it('parses coordinates with different formats', () => {
      const coordinates = '90.0, 180.0';
      const result = parseCoordinates(coordinates);
      expect(result).toEqual({ lat: 90.0, lng: 180.0 });
    });

    it('returns null for invalid coordinates', () => {
      const coordinates = 'notacoordinate';
      const result = parseCoordinates(coordinates);
      expect(result).toBeNull();
    });
  });
});
