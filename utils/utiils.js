
import SETUP_CONSTANTS from '../constants/setup-constants'
import { baseUrl } from '../.env.js'


export const selectCampusAndSection = (page) => {
    return new Promise(async (resolve, reject) => {
        try {
            await page.goto(`${baseUrl}/quick-actions`)
            await page.getByText('Select Campus', { exact: true }).click();
            await page.getByText(SETUP_CONSTANTS.DEFAULT_CAMPUS).click();
            await page.getByText('Select Class').first().click();
            await page.getByText(SETUP_CONSTANTS.DEFAULT_CLASS).click();
            await page.waitForTimeout(1000);
            await page.getByText('Select Section').first().click();
            await page.getByText(SETUP_CONSTANTS.DEFAULT_SECTION, { exact: true }).click();
            resolve(true)
        } catch (error) {

            reject("issue in select campus and section function" + error)
        }
    })

}

export const selectCampus = (page) => {
    return new Promise(async (resolve, reject) => {
        try {
            await page.goto(`${baseUrl}/quick-actions`)
            await page.getByText('Select Campus', { exact: true }).click();
            await page.getByText(SETUP_CONSTANTS.DEFAULT_CAMPUS).click();
            resolve(true)
        } catch (error) {
            reject("issue in select campus" + error)
        }
    })
}

