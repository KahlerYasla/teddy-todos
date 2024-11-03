const todos = db.todos.find({}).toArray()

printjson(todos)
