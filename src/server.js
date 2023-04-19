import express from "express"
import morgan from "morgan"
import session from "express-session"
import rootRouter from "./routers/rootRouter"
import userRouter from "./routers/userRouter"
import videoRouter from "./routers/videoRouter"
import { loggerMiddleware, localsMiddleware } from "./middlewares"

const app = express()

app.set("view engine", "pug")
app.set("views", process.cwd()+"/src/views")
app.use(morgan("dev"))
//middleware를 npm에서 설치해서 사용해봄. 많이 쓰이는 (morgan) 미들웨어
app.use(loggerMiddleware)
//middleware를 직접 만들어서 사용해봄.
app.use(express.urlencoded({extended:true}))

app.use(session({
    secret:"Hello!",
    resave: true,
    saveUninitialized: true,
}))
// Session 연습
app.use((req, res, next) => {
    req.session.potato += 1;
    console.log("※ current session: \n", req.session)
    console.log(`※ current session.id: \n ${req.session.id} /////////////////////// session.potato: ${req.session.potato}`)

    req.sessionStore.all((error, sessions) => {
      console.log("※ sessions: \n", sessions)
      next();
    });
});
app.use(localsMiddleware)
app.use("/uploads", express.static("uploads"))
app.use("/test", express.static("assets"))
// 서버한테 assets 폴더의 내용물을 /test 주소를 통해 공개하라고 하는 것.(#9.3 4:25~)
app.use("/", rootRouter)
app.use("/video", videoRouter)
app.use("/user", userRouter)

//app.get("/", handleHome)

export default app