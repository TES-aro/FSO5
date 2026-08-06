const { test, expect, beforeEach, describe, beforeAll} = require('@playwright/test')

const blog1 = {
	title: "title1",
	author: "me",
	url: "http://me.com/blog"
}

const blog2 = {
	title: "title2",
	author: "you",
	url: "http://you.fi/blog"
}

describe('Blog app', () => {
  beforeEach(async ({ page, request }) => {
	 
    await page.goto('http://localhost:5173')
  })

  test('Login form is shown', async ({ page }) => {
		const locator = page.getByLabel('username');
		await expect(locator).toBeVisible();
  })
})

describe('Login', () => {
	const user = {
 					name: 'Matti Luukkainen',
	        username: 'mluukkai',
	        password: 'salainen'
	}
	beforeEach(async ({ page, request }) => {
		
	    await page.goto('http://localhost:5173')
	})

	test('succeeds with correct credentials', async ({ page }) => {
		await page.getByLabel('username').fill('mluukkai');
		await page.getByLabel('password').fill('salainen');
		await page.getByRole('button', { name: 'login' }).click();

		const locator = page.getByText('blogs')
		await expect(locator).toBeVisible();
    })

	test('fails with wrong credentials', async ({ page }) => {
	  await page.getByLabel('username').fill('mluukkai');
		await page.getByLabel('password').fill('vääräsalasana');
		await page.getByRole('button', { name: 'login' }).click();

	  const locator = page.getByText('wrong credentials');
	  await expect(locator).toBeVisible();
  })
})

describe('When logged in', () => {
  beforeEach(async ({ page, request }) => {
	  
    await page.goto('http://localhost:5173')
    await page.getByLabel('username').fill('mluukkai');
		await page.getByLabel('password').fill('salainen');
		await page.getByRole('button', { name: 'login' }).click();
  })

  test('a new blog can be created', async ({ page }) => {
    await page.getByRole('button', { name: 'Add Blog' }).click();
		await page.getByLabel('title').fill(blog1.title);
		await page.getByLabel('author').fill(blog1.author);
		await page.getByLabel('url').fill(blog2.url);
		await page.getByRole('button', { name: 'add'}).click();

		const locator = page.getByTestId(`${blog1.title} by ${blog1.author}`)
		await expect(locator).toBeVisible();
  })
/*
  test('a blog can be liked', async ({ page }) => {
	  const list = await page.getByRole('listitem')
  	console.log(list)
  	await expect(list.length).toBe(1)
  })
  */
})


