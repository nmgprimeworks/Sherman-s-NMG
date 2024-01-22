import { Before, After, setDefaultTimeout, Status } from "@cucumber/cucumber"
import { Browser, BrowserContext, Page, chromium } from "@playwright/test"
import { expect } from "@playwright/test"
import { execPath } from "process"
const fs = require("fs-extra")



setDefaultTimeout(1000 * 20 * 2)

let browser: Browser
let bCtx: BrowserContext
let page: Page

Before(async function () {


    
    browser = await chromium.launch({ headless: false, channel: "chrome", args: ['--start-maximized'] })
    bCtx = await browser.newContext({ viewport: null, javaScriptEnabled: true, recordVideo: { dir: "test-results/videos"} })
    page = await bCtx.newPage()
    
    
})

After(async function ({ pickle, result }) {
    console.log(result?.status)
    
    
    if (result?.status == Status.FAILED) {
        const videoPath = await page.video()?.path()
        const img = await page.screenshot({ path: `./test-results/screenshots/${pickle.name}.png`, type: "png" })
        await this.attach(img, "image/png")
        await this.attach(fs.readFileSync(videoPath),'video/webm')
    }



    await page.close()
    await bCtx.close()
    await browser.close()

   

    

})

export function getPage(): Page {
    return page

}

