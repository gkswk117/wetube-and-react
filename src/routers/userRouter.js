import express from "express"
import {editUser, deleteUser, seeUser,logout} from "../controllers/userController"
const userRouter = express.Router()

userRouter.get("/:id", seeUser)
userRouter.get("/logout", logout)
userRouter.get("/edit", editUser)
userRouter.get("/delete", deleteUser)

export default userRouter