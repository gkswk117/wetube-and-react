import "./db"
import Video from "./models/Video"
import express from "express"
import morgan from "morgan"
import globalRouter from "./routers/globalRouter"
import userRouter from "./routers/userRouter"
import videoRouter from "./routers/videoRouter"

const PORT = 4000
const app = express()
const loggerMiddleware=(req,res,next)=>{
    console.log(`Someone is going to "${req.url}" with method {${req.method}}`)
    next();
}
app.set("view engine", "pug")
app.set("views", process.cwd()+"/src/views")
app.use(morgan("dev"))
//middleware를 npm에서 설치해서 사용해봄.
app.use(loggerMiddleware)
//middleware를 직접 만들어서 사용해봄.

app.use(express.urlencoded({extended:true}))
app.use("/", globalRouter)
app.use("/video", videoRouter)
app.use("/user", userRouter)

//app.get("/", handleHome)

app.listen(PORT, ()=>{console.log(`Server listening on port http://localhost:${PORT}`)})