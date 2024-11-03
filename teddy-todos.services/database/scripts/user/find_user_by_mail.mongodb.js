const userEmail = readline.question("Enter the email of the user: ")
const user = db.users.findOne({ email: userEmail })
if (user) {
    printjson(user)
} else {
    print("User not found")
}
