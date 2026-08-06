const { test } = require('@playwright/test')

test('reseting database', async ({ browser }) => {
	console.log("setting up database")
	const page = await browser.newPage();
	await page.request.get('http://localhost:3003/api/test/reset');
  await page.request.post('http://localhost:3003/api/users', {
     data: {
       name: 'Matti Luukkainen',
       username: 'mluukkai',
       password: 'salainen'
     }
  })
})
