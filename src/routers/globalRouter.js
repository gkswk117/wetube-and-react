import express from "express"
import {join, login} from "../controllers/userController"
import {recommendedVideo, searchVideo} from "../controllers/videoController"

const globalRouter = express.Router()
globalRouter.get("/", recommendedVideo)
globalRouter.get("/join", join)
globalRouter.get("/login", login)
globalRouter.get("/search", searchVideo)

export default globalRouter