import express from "express"
import {getEdit, postEdit, deleteUser, seeUser, logout, getChangePassword, postChangePassword} from "../controllers/userController"
import { protectorMiddleware, uploadAvatar } from "../middlewares"
const userRouter = express.Router()


userRouter.get("/:id([0-9a-f]{24})", seeUser)
// regex인 ([0-9a-f]{24})를 붙여주던가, 이걸 제일 밑으로 내리던가.
// 안그러면 logout, delete도 아이디로 인식을 해버려서 mongoose에서 const castError = new CastError(); 에러가 뜬다.
userRouter.get("/logout", protectorMiddleware, logout)
userRouter.route("/edit").all(protectorMiddleware).get(getEdit).post(uploadAvatar.single("avatar"), postEdit)
userRouter.route("/change-password").all(protectorMiddleware).get(getChangePassword).post(postChangePassword)
userRouter.get("/delete", deleteUser)

export default userRouter