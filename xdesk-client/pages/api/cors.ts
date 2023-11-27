import Cors from 'cors';
import { middleware } from 'helpers'

// Initialize the cors middleware
const cors = middleware.initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)

export default async function handler(req: any, res: { json: (arg0: { message: string; }) => void; }) {
  // Run cors
  await cors(req, res)

  // Rest of the API logic
  res.json({ message: 'Hello Everyone!' })
}