import express from "express"
import morgan from "morgan"
import session from "express-session"
import rootRouter from "./routers/rootRouter"
import userRouter from "./routers/userRouter"
import videoRouter from "./routers/videoRouter"

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
app.use(session({
    secret:"Hello!",
    resave: true,
    saveUninitialized: true,
}))
app.use((req, res, next) => {
    req.sessionStore.all((error, sessions) => {
      console.log(sessions);
      next();
    });
  });
app.use(express.urlencoded({extended:true}))
app.use("/", rootRouter)
app.use("/video", videoRouter)
app.use("/user", userRouter)

//app.get("/", handleHome)

export default app