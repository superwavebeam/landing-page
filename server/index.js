let niceThings = [];

const express = require("express");
const path = require("path");
const Rollbar = require("rollbar")

let rollbar = new Rollbar({
    accessToken: 'e58da62021714565b460484068891e00',
    captureUncaught: true,
    captureUnhandledRejections: true
});

const app = express();
app.use(express.json());

app.get("/", (req, res) => {            
    res.sendFile(path.join(__dirname, "../index.html"));
    rollbar.info('HTML Successful.')
});

app.get("/css", (req, res) => {            
    res.sendFile(path.join(__dirname, "../styles.css"));
});

app.use("/img", express.static(path.join(__dirname, "../img"))); //Because heroku sucks, it doesn't like rendering static files.

app.post("/api/nicethings", (req, res) => {
    const {love} = req.body
    niceThings.push(love)
    res.status(200).send(niceThings)
})

const port = process.env.PORT || 4005;

app.use(rollbar.errorHandler())
app.listen(port, () => console.log(`${port} is ready.`));