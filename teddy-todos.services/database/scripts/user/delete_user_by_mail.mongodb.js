const emailToDelete = readline.question(
    "Enter the email of the user to delete: "
)

db.users.deleteOne({ email: emailToDelete })
