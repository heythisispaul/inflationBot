import fetch from 'node-fetch';

export default async (year, value) => {
  if (!year || !value) {
    console.log('missing a required parameter. The year or the dollar amount were not supplied');
    return {};
  }
  try {
    const inflationUrl = `http://inflation-api.herokuapp.com/api/?value=${value}&year=${year}`;
    const request = await fetch(inflationUrl);
    const parsedResponse = await request.json();
    const { response } = parsedResponse;
    return response;
  } catch (err) {
    console.error(err);
    return {};
  }
};
