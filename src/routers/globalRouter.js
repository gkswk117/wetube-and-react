import express from "express"
import {join, login} from "../controllers/userController"
import {home, searchVideo} from "../controllers/videoController"

const globalRouter = express.Router()
globalRouter.get("/", home)
globalRouter.get("/join", join)
globalRouter.get("/login", login)
globalRouter.get("/search", searchVideo)

export default globalRouter