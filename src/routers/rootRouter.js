import express from "express"
import {getSignUp, postSignUp, getLogin, postLogin} from "../controllers/userController"
import {home, searchVideo} from "../controllers/videoController"
import { publicOnlyMiddleware } from "../middlewares"

const rootRouter = express.Router()
rootRouter.get("/", home)
rootRouter.route("/signup").all(publicOnlyMiddleware).get(getSignUp).post(postSignUp)
rootRouter.route("/login").all(publicOnlyMiddleware).get(getLogin).post(postLogin)
rootRouter.get("/search", searchVideo)

export default rootRouter