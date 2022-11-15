import express from "express"
import {watchVideo, editVideo, deleteVideo, uploadVideo} from "../controllers/videoController"

const videoRouter = express.Router()
videoRouter.get("/upload", uploadVideo)
videoRouter.get("/:id", watchVideo)
videoRouter.get("/:id/edit", editVideo)
videoRouter.get("/:id/delete", deleteVideo)

export default videoRouter