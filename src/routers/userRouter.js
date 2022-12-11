import express from "express"
import {getEdit, postEdit, deleteUser, seeUser,logout, getChangePassword, postChangePassword} from "../controllers/userController"
import { protectorMiddleware } from "../middlewares"
const userRouter = express.Router()

//userRouter.get("/:id", seeUser)
userRouter.get("/logout", protectorMiddleware ,logout)
userRouter.route("/edit").all(protectorMiddleware).get(getEdit).post(postEdit)
userRouter.route("/change-password").all(protectorMiddleware).get(getChangePassword).post(postChangePassword)
userRouter.get("/delete", deleteUser)

export default userRouter