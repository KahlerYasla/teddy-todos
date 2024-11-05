const puppeteer = require("puppeteer")

describe("History Service E2E Tests", () => {
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

    test("User can see their history", async () => {
        await page.goto(`${baseURL}/history`)

        // Wait for history items to load
        await page.waitForSelector(".history-item", { visible: true })

        const historyItems = await page.$$(".history-item")
        expect(historyItems.length).toBeGreaterThan(0) // Ensure there is at least one history item
    })

    test("User can filter history by date", async () => {
        await page.goto(`${baseURL}/history`)

        // Interact with filter options (this depends on your actual UI implementation)
        await page.select('select[name="dateFilter"]', "lastMonth") // Example filter selection
        await page.click('button[type="submit"]') // Apply filter

        await page.waitForSelector(".history-item", { visible: true })
        const filteredItems = await page.$$(".history-item")

        // Check that items displayed correspond to the filter applied
        expect(filteredItems.length).toBeGreaterThan(0) // Ensure items are shown after filtering
    })

    test("User sees message when history is empty", async () => {
        // Simulate scenario where user has no history (e.g., using a test user with no history)
        await page.goto(`${baseURL}/history`)

        await page.waitForSelector(".empty-history-message", { visible: true })

        const emptyMessage = await page.$eval(
            ".empty-history-message",
            (el) => el.textContent
        )
        expect(emptyMessage).toMatch(/You have no history items/i) // Check for correct message
    })

    test("User can view details of a history item", async () => {
        await page.goto(`${baseURL}/history`)

        // Wait for history items to load
        await page.waitForSelector(".history-item", { visible: true })

        // Click on the first history item to view details
        const firstHistoryItem = await page.$(".history-item")
        await firstHistoryItem.click()

        // Wait for details to load
        await page.waitForSelector(".history-detail", { visible: true })

        const detailText = await page.$eval(
            ".history-detail",
            (el) => el.textContent
        )
        expect(detailText).toContain("Details for") // Check for expected text in details
    })
})
