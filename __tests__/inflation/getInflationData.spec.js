import '@babel/polyfill';
import fetch from 'node-fetch';
import fetchInflationData from '../../src/inflation/getInflationData';

jest.mock('node-fetch');


describe('fetch infation data', () => {
  it('does not fetch if the year or dollar amount are not provided', async () => {
    expect.assertions(2);
    const inflationData = await fetchInflationData();

    expect(fetch).toHaveBeenCalledTimes(0);
    expect(inflationData).toEqual({});
  });
});
