import { getDistance } from './geolocation';

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
});
