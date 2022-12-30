import express from "express"
import {watchVideo, getEdit, postEdit, getUpload, postUpload, deleteVideo} from "../controllers/videoController"
import { protectorMiddleware, uploadVideo } from "../middlewares"

const videoRouter = express.Router()
videoRouter.route("/:id([0-9a-f]{24})").get(watchVideo)
//videoRouter.get("/:id(\\d+)", watchVideo) 과 같음.
videoRouter.route("/:id([0-9a-f]{24})/edit").all(protectorMiddleware).get(getEdit).post(postEdit)
videoRouter.route("/:id([0-9a-f]{24})/delete").all(protectorMiddleware).get(deleteVideo)
videoRouter.route("/upload").all(protectorMiddleware).get(getUpload).post(uploadVideo.single("video") ,postUpload)
export default videoRouter