const express = require('express')
const { createUser, readAllUsers, readSingleUser, updateUser, deleteUser } = require('../controllers/userControllers')
const userRoutes = express.Router()

userRoutes.post("/createuser", createUser)
userRoutes.get("/readallusers", readAllUsers)
userRoutes.get("/readsingleuser/:userId", readSingleUser)
userRoutes.put("/updateuser/:userId", updateUser)
userRoutes.delete("/deleteuser/:userId", deleteUser)
module.exports = userRoutes