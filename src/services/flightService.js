import axios from "axios";

export const searchFlights = async ({ from, to, date }) => {
  const options = {
    method: 'GET',
    url: 'https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchFlights',
    params: {
      from,
      to,
      date,
      adults: '1',
      currency: 'USD'
    },
    headers: {
      'X-RapidAPI-Key': '168e648fbamsh8c418541091716cp10ee07jsnb5ea2dd91bc3',
      'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com'
    }
  };

  const res = await axios.request(options);
  return res.data;
};
