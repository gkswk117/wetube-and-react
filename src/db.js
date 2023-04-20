import mongoose from "mongoose"

mongoose.connect(process.env.DB_URL)

mongoose.connection.on("error", (err)=>{console.log("DB Error is => ", err)})
mongoose.connection.once("open", ()=>console.log("Connected to DB"))
