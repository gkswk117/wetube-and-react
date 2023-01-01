import { render } from "pug"
import Video from "../models/Video"
//controller
//Using callback function
// let testVar = {t:"t"}
// export const home = (req, res) => {
//     console.log("Starting Search")
//     Video.find({}, (err, videos)=>{
//         testVar = videos
//         console.log("Finished Search")
//         console.log(`testVar is ${testVar}`)
//         return res.render("home", {pageTitle:"Home", potato: "I love you.", videos:videos})
//     })
//     console.log(testVar)
//     console.log("I finish first.")
// }
//Using Promise
export const home = async(req, res)=>{
    try{
        const videos = await Video.find({}).sort({createdAt: "desc"})
        return res.render("home", {pageTitle:"Home", potato: "I love you.", videos:videos})
    }catch(err){
        console.log(err)
        return res.send("error!!")
    }
}
export const getUpload = (req, res) =>{
    const {id} = req.params
    return res.render("upload", {pageTitle:`Upload`} )
}
export const postUpload = async (req, res) =>{
    // here we will add a video to the videos array.
    const {path: fileUrl} = req.file //(es6문법)
    // const fileUrl = req.file.path 
    try{
        await Video.create({
            fileUrl,
            title:req.body.tomato,
            description:req.body.description,
            hashtags: Video.formatHashtags(req.body.hashtags),
        })
        return res.redirect("/")
    }catch(err){
        console.log(err)
        return res.render("upload", {pageTitle:`Upload`, errorMessage:err._message} )
    }
}
export const watchVideo = async (req, res) => {
    const video = await Video.findById(req.params.id)
    if(!video){
        return res.render("404", {fakeUser:fakeUser})
    }
    return res.render("watch", {pageTitle: video.title, video: video})
}
export const getEdit = async(req, res) => {
    const video = await Video.findById(req.params.id)
    if(!video){
        return res.render("404", {fakeUser:fakeUser})
    }
    return res.render("edit", {pageTitle:`Editing ${video.title}`, video:video})
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
export const deleteVideo = async (req, res) =>{
    await Video.findByIdAndDelete(req.params.id)
    return res.redirect("/")
}
export const searchVideo = async(req, res) => {
    console.log("req.query는")
    console.log(req.query)
    let videos = []
    if(req.query.keyword){
        videos = await Video.find({
            title: { 
                $regex: req.query.keyword
                // https://docs.mongodb.com/manual/reference/operator/query/regex/
            }
        }).sort({createdAt: "desc"})
    }
    return res.render("search", {pageTitle: "Search", videos})
}