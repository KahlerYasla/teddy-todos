const emailToUpdate = readline.question(
    "Enter the email of the user to update: "
)

console.log("roles:")

const roles = db.roles.find().toArray()

roles.forEach((role, index) => {
    console.log(`${index + 1}. ${role.name}`)
})

const roleIndex = readline.questionInt("Enter the number of the role: ")

const role = roles[roleIndex - 1]

const user = db.users.findOne({ email: emailToUpdate })

if (user) {
    db.users.updateOne({ email: emailToUpdate }, { $set: { role: role._id } })
    print("User updated")
} else {
    print("User not found")
}
