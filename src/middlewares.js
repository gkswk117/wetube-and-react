import multer from "multer";
import multerS3 from "multer-s3"
import aws from 'aws-sdk'

export const loggerMiddleware=(req,res,next)=>{
    console.log("\n\n\n\n\n페이지 새로고침------------------------------------------>")
    console.log(`Someone is going to "${req.url}" with method {${req.method}}`)
    next();
}
export const localsMiddleware = (req, res, next)=>{
    res.locals.loggedIn = Boolean(req.session.loggedIn)
    res.locals.siteName="Wetube"
    res.locals.loggedInUser = req.session.user || {};
    next()
}
export const protectorMiddleware = (req, res, next) => {
    if (req.session.loggedIn) {
        return next();
    } else {
        console.log("You are not a loggedIn user.")
        return res.redirect("/login");
    }
  };

export const publicOnlyMiddleware = (req, res, next) => {
    if (!req.session.loggedIn) {
        return next();
    } else {
        console.log("You are not a public user.")
        return res.redirect("/");
    }
};

const s3=new aws.S3({
    credentials:{
        accessKeyId: process.env.AWS_ID,
        secretAccessKey: process.env.AWS_SECRET
    }
})

const multerUploader = multerS3({
    s3: s3,
    bucket: "wetube-gkswk117"
})

export const uploadAvatar = multer({
    dest:"uploads/avatars",
    limits:{fileSize:5000000},
    //storage: multerUploader
})
export const uploadVideo = multer({
    dest:"uploads/videos",
    limits:{fileSize:10000000},
    //storage: multerUploader
})