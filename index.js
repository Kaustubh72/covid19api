
const express = require("express");
const app =express();


const importData = require("./data.json");

let port =process.env.PORT || 8000;
app.get("/",(req,res) => {
res.send("THIS API IS MADE BY KAUSTUBH SINGH FOR VIT HACK -2020. AS PER PROBLEM STATEMENT GIVEN");
});

app.get("/patient",(req,res) => {
    res.send(importData);
});

app.listen(port, () => {
    console.log(`App is listening on port http://localhost:${port}`);
});
