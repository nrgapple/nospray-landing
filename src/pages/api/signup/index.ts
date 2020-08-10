import { NextApiRequest, NextApiResponse } from "next"
import Cors from "cors"

const initMiddleware = (middleware: any) => {
  return (req: any, res: any) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result: any) => {
        if (result instanceof Error) {
          return reject(result)
        }
        return resolve(result)
      })
    })
}

const cors = initMiddleware(
  Cors({
    methods: ["GET", "POST", "OPTIONS"],
  })
)

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res)
  if (req.method !== "POST") {
    res.status(404).end()
  }
  const {
    body: { email, password, id, lastName },
    headers: { origin },
  } = req

  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}?key=${process.env.NEXT_PUBLIC_API_KEY}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        origin: origin!,
      },
      body: JSON.stringify({
        email: email,
        password: password,
        certId: id,
      }),
    }
  )
  res.status(resp.status)
  console.log(resp.status)
  if (resp.status !== 200) {
    const respJson = await resp.json()
    res.send(respJson)
  } else {
    res.end()
  }
}
