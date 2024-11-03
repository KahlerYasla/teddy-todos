db = db.getSiblingDB("your_database_name") // Replace with your database name

// create collections
db.createCollection("users")
db.createCollection("activities")
db.createCollection("notifications")
db.createCollection("todos")

db.users.insertMany([
    {
        name: "Berkay Aslan",
        email: "admin@teddytodos.com",
        hashedPassword: "your_hashed_password",
        role: "admin",
    },
    {
        name: "Selin Cirak",
        email: "selin.cirak@teddytodos.com",
        hashedPassword: "your_hashed_password",
        role: "user",
    },
])

db.activities.insertMany([
    { description: "User logged in", timestamp: new Date() },
    { description: "User created a new todo", timestamp: new Date() },
])
