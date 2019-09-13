// Utils
const { getValueByEnv } = require('../index');

describe('getValueByEnv', () => {
  it('should return 1 when is in the development or test environment', () => {
    const value = getValueByEnv(1, 2);

    expect(value).toEqual(1);
  });

  it('should return 2 when is in the production environment', () => {
    // Set NODE_ENV equal to production
    process.env.NODE_ENV = 'production';

    const value = getValueByEnv(1, 2);

    expect(value).toEqual(2);
  });
});
