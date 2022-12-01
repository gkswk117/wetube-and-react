import express from "express"
import {getSignUp, postSignUp, login} from "../controllers/userController"
import {home, searchVideo} from "../controllers/videoController"

const rootRouter = express.Router()
rootRouter.get("/", home)
rootRouter.route("/signup").get(getSignUp).post(postSignUp)
rootRouter.get("/login", login)
rootRouter.get("/search", searchVideo)

export default rootRouter