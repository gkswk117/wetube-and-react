export const recommendedVideo = (req, res) => res.render("home")
export const searchVideo = (req, res) => res.send("Search Videos")

export const watchVideo = (req, res) => {
    return res.send("Watch "+req.params.id+" Videos")
}
export const editVideo = (req, res) => {
    return res.send("Edit "+req.params.id+" Videos")
}
export const deleteVideo = (req, res) => {
    return res.send("Delete "+req.params.id+" Videos")
}
export const uploadVideo = (req, res) => res.send("Upload Videos")