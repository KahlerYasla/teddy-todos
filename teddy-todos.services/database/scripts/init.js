// initialize the database
db = db.getSiblingDB("teddy_todos")

// create collections
db.createCollection("users")
db.createCollection("histories")
db.createCollection("notifications")
db.createCollection("todos")

// create indexes
db.users.createIndex({ email: 1 }, { unique: true })
db.histories.createIndex({ userId: 1 })
db.notifications.createIndex({ userId: 1 })
db.todos.createIndex({ userId: 1 })

// insert data: ----------------------------------------------------------------

// users
db.users.insertMany([
    {
        name: "admin",
        email: "admin@teddytodos.com",
        hashedPassword: "your_hashed_password",
        role: "admin",
    },
    {
        name: "test",
        email: "test@teddytodos.com",
        hashedPassword: "your_hashed_password",
        role: "user",
    },
])

// histories
db.histories.insertMany([
    {
        userId: db.users.findOne({ email: "test@teddytodos.com" })._id,
        action: "create",
        description: "admin created the admin user",
    },
    {
        userId: db.users.findOne({ email: "test@teddytodos.com" })._id,
        action: "create",
        description: "user created the test user",
    },
])

// notifications
db.notifications.insertMany([
    {
        userId: db.users.findOne({ email: "test@teddytodos.com" })._id,
        title: "welcome",
        message: "welcome to teddy todos",
        status: "unread",
    },
    {
        userId: db.users.findOne({ email: "test@teddytodos.com" })._id,
        title: "approaching deadline",
        message: "your task is due soon",
        status: "unread",
    },
])

// todos
db.todos.insertMany([
    {
        title: "water the plants",
        description: "water the plants in the garden",
        status: "active",
        userId: db.users.findOne({ email: "admin@teddytodos.com" })._id,
        dueDate: new Date("2024-12-31T23:59:59"),
    },
    {
        title: "buy milk",
        description: "buy milk from the market",
        status: "active",
        userId: db.users.findOne({ email: "admin@teddytodos.com" })._id,
        dueDate: new Date("2024-12-31T23:59:59"),
    },
])

// scripts: --------------------------------------------------------------------

// load functions from each script file relative to Docker’s /docker-entrypoint-initdb.d path

load(
    "/docker-entrypoint-initdb.d/scripts/history/delete_history_by_id.mongodb.js"
)
load("/docker-entrypoint-initdb.d/scripts/history/find_histories.mongodb.js")

load(
    "/docker-entrypoint-initdb.d/scripts/notification/delete_notification_by_id.mongodb.js"
)
load(
    "/docker-entrypoint-initdb.d/scripts/notification/find_notifications.mongodb.js"
)
load(
    "/docker-entrypoint-initdb.d/scripts/notification/update_notification_by_id.monogdb.js"
)

load("/docker-entrypoint-initdb.d/scripts/todo/find_todos.mongodb.js")
load("/docker-entrypoint-initdb.d/scripts/todo/update_todo_by_id.mongodb.js")

load("/docker-entrypoint-initdb.d/scripts/user/delete_user_by_mail.mongodb.js")
load("/docker-entrypoint-initdb.d/scripts/user/find_user_by_mail.mongodb.js")
load("/docker-entrypoint-initdb.d/scripts/user/update_role_by_mail.mongodb.js")

// history scripts
db.system.js.save({
    _id: "deleteHistoryById",
    value: deleteHistoryById,
})
db.system.js.save({
    _id: "findHistories",
    value: findHistories,
})

// notification scripts
db.system.js.save({
    _id: "deleteNotificationById",
    value: deleteNotificationById,
})
db.system.js.save({
    _id: "findNotifications",
    value: findNotifications,
})
db.system.js.save({
    _id: "updateNotificationById",
    value: updateNotificationById,
})

// todo scripts
db.system.js.save({
    _id: "findTodos",
    value: findTodos,
})
db.system.js.save({
    _id: "updateTodoById",
    value: updateTodoById,
})

// user scripts
db.system.js.save({
    _id: "deleteUserByMail",
    value: deleteUserByMail,
})
db.system.js.save({
    _id: "findUserByMail",
    value: findUserByMail,
})
db.system.js.save({
    _id: "updateRoleByMail",
    value: updateRoleByMail,
})
