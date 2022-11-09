import express from "express"
const PORT = 4000
const app = express()

function handleHome (req, res) {
    console.log("Somebody is tring to go home.")
    return res.send("I still love you.");
}
app.get("/", handleHome)

app.listen(PORT, ()=>{console.log(`Server listening on port http://localhost:${PORT}`)})