import { rewritesRules, redirectRules } from './routes';

describe('rewritesRules', () => {
  test('should have at least one rule', () => {
    expect(rewritesRules).toHaveLength(1);
  });

  test('each rule should have source and destination properties', () => {
    rewritesRules.forEach(rule => {
      expect(rule).toHaveProperty('source');
      expect(rule).toHaveProperty('destination');
    });
  });
});

describe('redirectRules', () => {
  test('should have at least one rule', () => {
    expect(redirectRules).toHaveLength(1);
  });

  test('each rule should have source, destination, and permanent properties', () => {
    redirectRules.forEach(rule => {
      expect(rule).toHaveProperty('source');
      expect(rule).toHaveProperty('destination');
      expect(rule).toHaveProperty('permanent');
    });
  });
});
