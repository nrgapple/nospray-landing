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

  const puppeteer = require("puppeteer")
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  let data
  const navigationPromise = page.waitForNavigation()

  await page.goto(
    "https://www.paplants.state.pa.us/PesticideApplicator/ApplicatorExternalSearch.aspx"
  )

  await page.setViewport({ width: 874, height: 748 })

  await page.waitForSelector("table #ctl00_cphResults_CertId")
  await page.click("table #ctl00_cphResults_CertId")

  await page.type("table #ctl00_cphResults_CertId", id)
  await page.type("table #ctl00_cphResults_LastName", lastName)

  await page.waitForSelector("table #ctl00_cphResults_btnSearch")
  await page.click("table #ctl00_cphResults_btnSearch")

  await page.on("response", async (response: any) => {
    data = response
  })
  await navigationPromise
  try {
    await page.waitForSelector("#table2", { timeout: 3000 })
  } catch (e) {
    console.log("timeout")
    res.status(403).end()
  }
  const element = await page.$(
    "#ctl00_cphResults_rptApplicators_ctl00_CertificationID"
  )
  if (!element) {
    res.status(403).end()
  } else {
    const text = await page.evaluate(
      (element: any) => element.textContent,
      element
    )
    if (id === text) {
      console.log("success")
    }
    await browser.close()
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
}
