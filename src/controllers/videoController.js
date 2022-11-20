const fakeUser = {
    username: "gkswk",
    loggedIn: true
}
export const recommendedVideo = (req, res) => {
    const videos = [
        {
            title:"First Video",
            rating: 5,
            comments: 2,
            createdAt: "2 minutes ago",
            views:59,
            id:1,
        },
        {
            title:"Second Video",
            rating: 5,
            comments: 2,
            createdAt: "2 minutes ago",
            views:59,
            id:2,
        },
        {
            title:"Third Video",
            rating: 5,
            comments: 2,
            createdAt: "2 minutes ago",
            views:59,
            id:3,
        }
    ]
    res.render("home", {pageTitle: "Home", potato: "I love you.", fakeUser:fakeUser, videos:videos})
}
export const searchVideo = (req, res) => res.render("search", {pageTitle: "Search"})
export const watchVideo = (req, res) => res.render("watch", {pageTitle: "Watch", param: req.params.id})
export const editVideo = (req, res) => {
    return res.send("Edit "+req.params.id+" Videos")
}
export const deleteVideo = (req, res) => {
    return res.send("Delete "+req.params.id+" Videos")
}
export const uploadVideo = (req, res) => res.send("Upload Videos")