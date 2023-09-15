import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const location = req.query.location;
  const url = `http://api.weatherapi.com/v1/current.json?key=ebd00e4527ab4cffa3b185351231803&q=${location}&aqi=no`;

  try {
    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
}
