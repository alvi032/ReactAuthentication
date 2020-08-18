const express = require('express')
const mongoose = require('mongoose')

const app = express()

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

const db =
    "mongodb://localhost:27017/reactAuthentication";
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Mongo DB Connected Successfully"))
    .catch((err) => console.log(err));

app.listen(5000, () => console.log('App running on port 5000'))