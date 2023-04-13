require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn");
const cors = require("cors");
const router = require("./Routes/router");
const PORT = process.env.PORT || 6020


app.use(cors());
app.use(express.json());
app.use("/uploads",express.static("./uploads"));
app.use("/files",express.static("./public/files"));

app.use(router);

app.listen(PORT,()=>{
    console.log(`Server start at port no ${PORT}`)
})