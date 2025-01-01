import { test as setup, expect } from '@playwright/test';
import { baseUrl, email, domain, password } from '../.env.js'
import SETUP_CONSTANTS from '../constants/setup-constants.js'
const authFile = './authenticated_user.json';

setup('login', async ({ page }) => {

// if you want to debug if BE is running un comments below code base
  // fetch(`http://be.e2e.myqampus.com/tt_api/v1/auth/login`, {
  //   method: 'POST',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     "password": password,
  //     "sub_domain": domain,
  //     "remember_me": false,
  //     "fcm_token": "null",
  //     "email": email
  //   })
  // })
  //   .then(res => res.json())
  //   .then(response => {
  //     console.log(response);

  //   }).catch((err) => {
  //     console.log(err, 'err')
  //   })






  // Perform authentication steps. Replace these actions with your own.
  await page.goto(`${baseUrl}/signin`);
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill(email);
  await page.getByPlaceholder('Institute sub-domain').click();
  await page.getByPlaceholder('Institute sub-domain').fill(domain);
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill(password);
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.waitForTimeout(2000)

  // End of authentication steps.
  let signUpSlider = await page.evaluate(() => {
    // Access local storage and retrieve the data
    return localStorage.signUpSlider;
  });


  if (signUpSlider === 'true') {
    await expect(page).toHaveURL(`${baseUrl}/setup-slider`);
    await page.getByPlaceholder('Email').click();

    //Create dynamic email for every testing cycle

    let currentSeconds = await Math.round(new Date().getTime() / 1000)
    let dynamicEmail = `testing${currentSeconds}@gmail.com`
    await page.getByPlaceholder('Email').fill(dynamicEmail);
    await page.getByRole('button', { name: 'Next' }).click();
    await page.waitForTimeout(1000)
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByPlaceholder('Class Name').click();
    await page.getByPlaceholder('Class Name').fill(SETUP_CONSTANTS.DEFAULT_CLASS);
    await page.getByPlaceholder('Section').click();
    await page.getByPlaceholder('Section').fill(SETUP_CONSTANTS.DEFAULT_SECTION);
    await page.getByRole('button', { name: 'Confirm' }).click();
  }
  else {
    await expect(page).toHaveURL(`${baseUrl}/quick-actions`);
  }

  await page.context().storageState({ path: authFile });

});

