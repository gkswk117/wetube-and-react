import express from "express"
const PORT = 4000
const app = express()

const logger=(req,res,next)=>{
    console.log(`Someone is going to "${req.url}" with method {${req.method}}`)
    next();
}
const privateMiddleware = (req, res, next)=>{
    const url = req.url
    if(url ==="/protected"){
        return res.send("<h1>Not Allowed</h1>")
    }
    next();
}
function handleHome (req, res) {
    return res.send("I love middlewares.");
}
function handleProtected(req,res){
    console.log("이건 실행되지 않음.")
}
app.use(logger)
app.use(privateMiddleware)
app.get("/", handleHome)
app.get("/protected", handleProtected)

app.listen(PORT, ()=>{console.log(`Server listening on port http://localhost:${PORT}`)})