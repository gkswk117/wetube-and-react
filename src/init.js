import "dotenv/config"
import "regenerator-runtime"
import "./db"
import "./models/Video"
import "./models/User"
import app from "./server"
const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>{console.log(`Server listening on port http://localhost:${PORT}`)})