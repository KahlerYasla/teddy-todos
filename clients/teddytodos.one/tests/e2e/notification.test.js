const puppeteer = require("puppeteer")

describe("Notifications Service E2E Tests", () => {
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

    beforeEach(async () => {
        // Common login before each test, adjust based on your app's login requirements
        await page.goto(`${baseURL}/login`)
        await page.type('input[name="email"]', "testuser@example.com") // Use a valid test user
        await page.type('input[name="password"]', "Test@1234")
        await page.click('button[type="submit"]')
        await page.waitForSelector(".dashboard", { visible: true }) // Wait for dashboard
    })

    test("User can see their notifications", async () => {
        await page.goto(`${baseURL}/notifications`)

        // Wait for notifications to load
        await page.waitForSelector(".notification-item", { visible: true })

        const notificationItems = await page.$$(".notification-item")
        expect(notificationItems.length).toBeGreaterThan(0) // Ensure there is at least one notification item
    })

    test("User can mark notifications as read", async () => {
        await page.goto(`${baseURL}/notifications`)

        // Wait for notifications to load
        await page.waitForSelector(".notification-item", { visible: true })

        const firstNotification = await page.$(".notification-item")
        await firstNotification.click() // Click to mark as read

        await page.waitForSelector(".notification-item.read", { visible: true }) // Ensure it is marked as read
        const isRead = await page.evaluate(
            (el) => el.classList.contains("read"),
            firstNotification
        )
        expect(isRead).toBe(true) // Check that the notification is marked as read
    })

    test("User sees message when there are no notifications", async () => {
        // Simulate scenario where user has no notifications (e.g., using a test user with no notifications)
        await page.goto(`${baseURL}/notifications`)

        await page.waitForSelector(".empty-notification-message", {
            visible: true,
        })

        const emptyMessage = await page.$eval(
            ".empty-notification-message",
            (el) => el.textContent
        )
        expect(emptyMessage).toMatch(/You have no notifications/i) // Check for correct message
    })

    test("User can view details of a notification", async () => {
        await page.goto(`${baseURL}/notifications`)

        // Wait for notifications to load
        await page.waitForSelector(".notification-item", { visible: true })

        // Click on the first notification to view details
        const firstNotification = await page.$(".notification-item")
        await firstNotification.click()

        // Wait for details to load
        await page.waitForSelector(".notification-detail", { visible: true })

        const detailText = await page.$eval(
            ".notification-detail",
            (el) => el.textContent
        )
        expect(detailText).toContain("Notification Details for") // Check for expected text in details
    })
})
