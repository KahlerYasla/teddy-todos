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

db.users.insertMany([
    {
        name: "admin",
        email: "admin@teddytodos.com",
        hashedPassword: "your_hashed_password",
        role: "admin",
    },
    {
        name: "test",
        email: "test.cirak@teddytodos.com",
        hashedPassword: "your_hashed_password",
        role: "user",
    },
])

db.todos.insertMany([
    {
        title: "water the plants",
        description: "water the plants in the garden",
        status: "active",
        userId: db.users.findOne({ email: "admin@teddytodos.com" })._id,
    },
    {
        title: "buy milk",
        description: "buy milk from the market",
        status: "active",
        userId: db.users.findOne({ email: "admin@teddytodos.com" })._id,
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
