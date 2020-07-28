import next, { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id, last },
  } = req

  console.log({ id, last })

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
  await page.type("table #ctl00_cphResults_LastName", last)

  await page.waitForSelector("table #ctl00_cphResults_btnSearch")
  await page.click("table #ctl00_cphResults_btnSearch")

  await page.on("response", async (response: any) => {
    //console.log(response)
    //console.log("here")
    data = response
  })
  await navigationPromise
  try {
    await page.waitForSelector("#table2", { timeout: 3000 })
  } catch (e) {
    console.log("timeout")
    res.status(403).end()
  }
  //page.waitForSelector("#ctl00_cphResults_vsSummary"),
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
        },
        body: JSON.stringify({
          username: 
          plan: plan?.toUpperCase(),
        }),
      }
    )

    res.send(text)
  }
}
