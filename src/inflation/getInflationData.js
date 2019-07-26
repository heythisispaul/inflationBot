import fetch from 'node-fetch';

export default async (year, value) => {
  try {
    const inflationUrl = `http://inflation-api.herokuapp.com/api/?value=${value}&year=${year}`;
    const request = await fetch(inflationUrl);
    const parsedResponse = await request.json();
    const { response } = parsedResponse;
    return response;
  } catch (err) {
    console.log(err);
    return {};
  }
};
