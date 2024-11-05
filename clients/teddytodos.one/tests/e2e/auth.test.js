const puppeteer = require("puppeteer")

describe("Auth Module E2E Tests", () => {
    let browser
    let page

    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: true, // Use headless: false if you want to see the browser actions
            slowMo: 50, // Slow down by 50ms to observe actions in non-headless mode
        })
        page = await browser.newPage()
    })

    afterAll(async () => {
        await browser.close()
    })

    // Set base URL
    const baseURL = "http://localhost:3000" // Replace with the actual URL of your app

    test("User can register", async () => {
        await page.goto(`${baseURL}/register`)

        // Enter registration details
        await page.type('input[name="username"]', "testuser")
        await page.type('input[name="email"]', "testuser@example.com")
        await page.type('input[name="password"]', "Test@1234")

        // Submit the registration form
        await page.click('button[type="submit"]')

        // Wait for successful registration message or redirect
        await page.waitForSelector(".welcome-message", { visible: true })

        const welcomeMessage = await page.$eval(
            ".welcome-message",
            (el) => el.textContent
        )
        expect(welcomeMessage).toMatch(/Welcome, testuser/i)
    })

    test("User can log in", async () => {
        await page.goto(`${baseURL}/login`)

        // Enter login details
        await page.type('input[name="email"]', "testuser@example.com")
        await page.type('input[name="password"]', "Test@1234")

        // Submit the login form
        await page.click('button[type="submit"]')

        // Wait for successful login message or redirect to dashboard
        await page.waitForSelector(".dashboard", { visible: true })

        const dashboardText = await page.$eval(
            ".dashboard",
            (el) => el.textContent
        )
        expect(dashboardText).toMatch(/Dashboard/i)
    })

    test("Invalid login shows error message", async () => {
        await page.goto(`${baseURL}/login`)

        // Enter invalid login details
        await page.type('input[name="email"]', "wronguser@example.com")
        await page.type('input[name="password"]', "WrongPassword")

        // Submit the login form
        await page.click('button[type="submit"]')

        // Wait for error message
        await page.waitForSelector(".error-message", { visible: true })

        const errorMessage = await page.$eval(
            ".error-message",
            (el) => el.textContent
        )
        expect(errorMessage).toBe("Invalid username or password")
    })

    test("Session persists on page refresh", async () => {
        await page.goto(`${baseURL}/login`)

        // Log in the user
        await page.type('input[name="email"]', "testuser@example.com")
        await page.type('input[name="password"]', "Test@1234")
        await page.click('button[type="submit"]')

        await page.waitForSelector(".dashboard", { visible: true })

        // Refresh page and check if session is still active
        await page.reload()
        const isLoggedIn = await page.$eval(".dashboard", (el) => !!el)
        expect(isLoggedIn).toBe(true)
    })

    test("User can log out", async () => {
        await page.goto(`${baseURL}/dashboard`)

        // Log out the user
        await page.click("button.logout")

        // Confirm redirect to login page
        await page.waitForSelector(".login-page", { visible: true })

        const loginPageText = await page.$eval(
            ".login-page",
            (el) => el.textContent
        )
        expect(loginPageText).toMatch(/Login/i)
    })
})
