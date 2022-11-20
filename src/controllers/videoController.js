//fake database
const fakeUser = {
    username: "gkswk",
    loggedIn: false
}
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
        views:1,
        id:2,
    },
    {
        title:"Third Video",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views:1000,
        id:3,
    }
]
//controller
export const recommendedVideo = (req, res) => {
    res.render("home", {pageTitle: "Home", potato: "I love you.", fakeUser:fakeUser, videos:videos})
}
export const searchVideo = (req, res) => {
    console.log("req.params는")
    console.log(req.params)
    res.render("search", {pageTitle: "Search", fakeUser:fakeUser})
}

export const watchVideo = (req, res) => {
    const video = videos[req.params.id-1]
    res.render("watch", {pageTitle: "Watch", video: video, fakeUser:fakeUser})
}
export const getEdit = (req, res) => {
    const video = videos[req.params.id-1]
    return res.render("edit", {pageTitle:`Editing ${video.title}`, video:video, fakeUser:fakeUser})
}
export const postEdit = (req, res)=>{
    const id = req.params.id
    console.log("req.body는")
    console.log(req.body)
    videos[id-1].title = req.body.potato
    //가짜 데이터베이스에 정보 입력
    //가짜 데이터베이스는 서버의 메모리에만 존재하니까 서버를 재시작하게 되면 원래 코드에 적혀있던 정보로 되돌아오게 됨.
    //이제 #6.7부터 진짜 데이터베이스(MongoDB)에 정보를 입력하고 저장하는 방법을 배울거다.
    return res.redirect(`/video/${id}`)
}
//연습용 코드
export const getUpload = (req, res) =>{
    return res.render("upload", {pageTitle:`Upload`, fakeUser:fakeUser} )
}
export const postUpload = (req, res) =>{
    // here we will add a video to the videos array.
    console.log(req.body.tomato)
    return res.redirect("/")
}