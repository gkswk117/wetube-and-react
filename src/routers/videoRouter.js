import express from "express"
import {watchVideo, getEdit, postEdit, getUpload, postUpload, deleteVideo} from "../controllers/videoController"

const videoRouter = express.Router()
videoRouter.route("/:id([0-9a-f]{24})").get(watchVideo)
//videoRouter.get("/:id(\\d+)", watchVideo) 과 같음.
videoRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit)
videoRouter.route("/:id([0-9a-f]{24})/delete").get(deleteVideo)
videoRouter.route("/upload").get(getUpload).post(postUpload)
export default videoRouter