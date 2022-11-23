import "./db"
import Video from "./models/Video"
import app from "./server"
const PORT = 4000

app.listen(PORT, ()=>{console.log(`Server listening on port http://localhost:${PORT}`)})