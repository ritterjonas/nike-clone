import request from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { data } = await request.get(`${process.env.GEOLOCATION_API}/stores`);

    return res.status(200).json(data);
  } catch (err) {
    if (request.isAxiosError(err) && err.response) {
      return res
        .status(err.response.status)
        .json({ error: err.response.statusText });
    }
    return res.status(500);
  }
}
