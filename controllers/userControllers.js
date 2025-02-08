let users = [
    { id: 1, name: 'raju', email: 'raju@gmail.com', age: 25 },
    { id: 2, name: 'radha', email: 'radha@gmail.com', age: 21 },
    { id: 3, name: 'manju', email: 'manju@gmail.com', age: 32 },
    { id: 4, name: 'arun', email: 'arun@gmail.com', age: 30 },
    { id: 5, name: 'dakshin', email: 'dakshin@gmail.com', age: 24 }
]

const createUser = (req, res) => {
    try {
        const { name, email, age } = req.body
        if (!name || !email || !age) {
            return res.status(400).json({ message: 'Missing required fields' })
        }
        users.push(req.body)
        res.status(201).json({ message: 'User created successfully', users })
    } catch (error) {
        console.log(error);
        res.status(error.code || 500).json({ error: error.message || "Internal server error" })

    }
}

const readAllUsers = (req, res) => {
    res.status(200).json({ message: 'Users fetched successfully', users })
}

const readSingleUser = (req, res) => {
    try {
        const { userId } = req.params
        const user = users.filter((user) => user.id == userId)
        if (!user.length) {
            return res.status(404).json({ message: 'User not found' })
        }
        res.status(200).json({ message: 'User fetched successfully', user })
    } catch (error) {
        console.log(error);
        res.status(error.code || 500).json({ error: error.message || "Internal server error" })
    }
}

const updateUser = (req, res) => {
    try {
        const { userId } = req.params
        const { name, email, age } = req.body
        const updatedUsers = users.map((user) => {
            if (user.id == userId) {
                user.name = name,
                    user.email = email,
                    user.age = age
            }
            return user
        })
        res.status(200).json({ message: 'User updated successfully', users })
    } catch (error) {
        console.log(error);
        res.status(error.code || 500).json({ error: error.message || "Internal server error" })
    }
}

const deleteUser = (req, res) => {
    try {
        const { userId } = req.params
        const filteredUsers = users.filter((user) => user.id !== parseInt(userId))
        if (filteredUsers.length === users.length) {
            return res.status(404).json({ message: 'User not found' })
        }
        users = filteredUsers
        res.status(200).json({ message: 'User deleted successfully', users })
    } catch (error) {
        console.log(error);
        res.status(error.code || 500).json({ error: error.message || "Internal server error" })
    }
}

module.exports = {
    createUser, readAllUsers, readSingleUser, updateUser, deleteUser
}