import express from "express"
import {watchVideo, getEdit, postEdit, getUpload, postUpload} from "../controllers/videoController"

const videoRouter = express.Router()
videoRouter.route("/:id(\\d+)").get(watchVideo)
//videoRouter.get("/:id(\\d+)", watchVideo) 과 같음.
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit)
videoRouter.route("/upload").get(getUpload)
videoRouter.route("/postTestkkk").post(postUpload)

export default videoRouter