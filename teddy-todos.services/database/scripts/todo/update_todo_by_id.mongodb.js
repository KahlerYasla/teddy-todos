const todoId = readline.question("Enter the Todo ID: ")
const updatedTodo = {
    title: "Updated Todo Title",
    completed: true, // or false, depending on your need
}

db.todos.updateOne({ _id: ObjectId(todoId) }, { $set: updatedTodo })
