import express from "express";

const app = express()

const port = 3000

// app.use()

app.listen(port, () => {
    console.log(`App started on port ${port}`)
})