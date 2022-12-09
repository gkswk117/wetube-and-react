import express from "express"
import morgan from "morgan"
import session from "express-session"
import rootRouter from "./routers/rootRouter"
import userRouter from "./routers/userRouter"
import videoRouter from "./routers/videoRouter"
import { localsMiddleware } from "./middlewares"

const app = express()
const loggerMiddleware=(req,res,next)=>{
    console.log("페이지 새로고침------------------------------------------>")
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

app.use(session({
    secret:"Hello!",
    resave: true,
    saveUninitialized: true,
}))
app.use((req, res, next) => {
    req.session.potato += 1;
    console.log("※ session: ")
    console.log(req.session)
    console.log(`id: ${req.session.id} /////////////////////// potato: ${req.session.potato}`)

    req.sessionStore.all((error, sessions) => {
      console.log("※ sessions: ")
      console.log(sessions);
      next();
    });
});
app.use(localsMiddleware)

app.use("/", rootRouter)
app.use("/video", videoRouter)
app.use("/user", userRouter)

//app.get("/", handleHome)

export default app