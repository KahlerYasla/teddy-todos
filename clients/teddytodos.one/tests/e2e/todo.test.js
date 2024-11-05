const puppeteer = require("puppeteer")

describe("To-Do Service E2E Tests", () => {
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

    test("User can add a new to-do", async () => {
        await page.goto(`${baseURL}/todos`)

        const newTodoText = "Buy groceries"

        await page.type('input[name="todo"]', newTodoText) // Input field for new to-do
        await page.click('button[type="submit"]') // Submit the new to-do

        // Wait for the new to-do to appear in the list
        await page.waitForSelector(".todo-item", { visible: true })

        const todoItems = await page.$$(".todo-item")
        const lastTodoText = await page.evaluate(
            (el) => el.textContent,
            todoItems[todoItems.length - 1]
        )

        expect(lastTodoText).toBe(newTodoText) // Check if the new to-do is correctly added
    })

    test("User can mark a to-do as complete", async () => {
        await page.goto(`${baseURL}/todos`)

        // Assume there's at least one to-do already added
        await page.waitForSelector(".todo-item", { visible: true })

        const firstTodo = await page.$(".todo-item")
        await firstTodo.click(".mark-complete") // Click the complete button/icon

        // Wait for the to-do to be marked as complete
        await page.waitForSelector(".todo-item.completed", { visible: true })

        const isCompleted = await page.evaluate(
            (el) => el.classList.contains("completed"),
            firstTodo
        )
        expect(isCompleted).toBe(true) // Check that the to-do is marked as completed
    })

    test("User can delete a to-do", async () => {
        await page.goto(`${baseURL}/todos`)

        // Assume there's at least one to-do already present
        await page.waitForSelector(".todo-item", { visible: true })

        const firstTodo = await page.$(".todo-item")
        await firstTodo.click(".delete-todo") // Click the delete button/icon

        // Wait for the to-do to be removed from the list
        await page.waitForFunction(
            () => !document.querySelector(".todo-item"),
            { timeout: 5000 }
        )

        const todoItems = await page.$$(".todo-item")
        expect(todoItems.length).toBe(0) // Check that there are no to-dos left
    })

    test("User sees message when there are no to-dos", async () => {
        // Ensure the user has deleted all to-dos (this assumes setup or a specific test user)
        await page.goto(`${baseURL}/todos`)

        await page.waitForSelector(".empty-todo-message", { visible: true })

        const emptyMessage = await page.$eval(
            ".empty-todo-message",
            (el) => el.textContent
        )
        expect(emptyMessage).toMatch(/You have no to-dos/i) // Check for correct message
    })
})
