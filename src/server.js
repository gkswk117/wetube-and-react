import express from "express"
import morgan from "morgan"

const PORT = 4000
const app = express()

const loggerMiddleware=(req,res,next)=>{
    console.log(`Someone is going to "${req.url}" with method {${req.method}}`)
    next();
}
function handleHome (req, res) {
    return res.send("I love middlewares.");
}
app.use(morgan("dev"))
//middleware를 npm에서 설치해서 사용해봄.
app.use(loggerMiddleware)
//middleware를 직접 만들어서 사용해봄.
app.get("/", handleHome)

app.listen(PORT, ()=>{console.log(`Server listening on port http://localhost:${PORT}`)})