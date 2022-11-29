import { render } from "pug"
import Video from "../models/Video"
//fake database
const fakeUser = {
    username: "gkswk",
    loggedIn: false
}
//controller
//Using callback function
// let testVar = {t:"t"}
// export const home = (req, res) => {
//     console.log("Starting Search")
//     Video.find({}, (err, videos)=>{
//         testVar = videos
//         console.log("Finished Search")
//         console.log(`testVar is ${testVar}`)
//         return res.render("home", {pageTitle:"Home", potato: "I love you.", fakeUser:fakeUser, videos:videos})
//     })
//     console.log(testVar)
//     console.log("I finish first.")
// }
//Using Promise
export const home = async(req, res)=>{
    try{
        console.log("Starting Search")
        const videos = await Video.find({})
        console.log(videos)
        console.log("Finished Search")
        return res.render("home", {pageTitle:"Home", potato: "I love you.", fakeUser:fakeUser, videos:videos})
    }catch(err){
        console.log(err)
        return res.send("error!!")
    }
}
export const getUpload = (req, res) =>{
    const {id} = req.params
    return res.render("upload", {pageTitle:`Upload`, fakeUser:fakeUser} )
}
export const postUpload = async (req, res) =>{
    // here we will add a video to the videos array.
    try{
        await Video.create({
            title:req.body.tomato,
            description:req.body.description,
            hashtags: Video.formatHashtags(req.body.hashtags),
        })
        return res.redirect("/")
    }catch(err){
        console.log(err)
        return res.render("upload", {pageTitle:`Upload`, fakeUser:fakeUser, errorMessage:err._message} )
    }
}
export const watchVideo = async (req, res) => {
    const video = await Video.findById(req.params.id)
    if(!video){
        return res.render("404", {fakeUser:fakeUser})
    }
    return res.render("watch", {pageTitle: video.title, video: video, fakeUser:fakeUser})
}
export const getEdit = async(req, res) => {
    const video = await Video.findById(req.params.id)
    if(!video){
        return res.render("404", {fakeUser:fakeUser})
    }
    return res.render("edit", {pageTitle:`Editing ${video.title}`, video:video, fakeUser:fakeUser})
}
export const postEdit = async(req, res)=>{
    // ㅡㅡ Not cool way.
    // const video = await Video.findById(req.params.id)
    // if(!video){
    //     return res.render("404", {fakeUser:fakeUser})
    // }
    // video.title = req.body.title
    // video.hashtags = req.body.hashtags.split(",").map(word => word.startsWith('#')? word :`#${word}`)
    // await video.save()

    //using sexy mongoose function
    const video = await Video.exists({_id : req.params.id})
    if(!video){
        return res.render("404", {fakeUser:fakeUser})
    }
    await Video.findByIdAndUpdate(req.params.id ,{
        title: req.body.title,
        description: req.body.description,
        hashtags: Video.formatHashtags(req.body.hashtags),
    })
    return res.redirect(`/video/${req.params.id}`)
}


export const searchVideo = (req, res) => {
    console.log("req.params는")
    console.log(req.params)
    res.render("search", {pageTitle: "Search", fakeUser:fakeUser})
}