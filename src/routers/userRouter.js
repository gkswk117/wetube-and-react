import express from "express"
import {getEdit, postEdit, deleteUser, seeUser,logout} from "../controllers/userController"
const userRouter = express.Router()

//userRouter.get("/:id", seeUser)
userRouter.get("/logout", logout)
userRouter.route("/edit").get(getEdit).post(postEdit)
userRouter.get("/delete", deleteUser)

export default userRouter