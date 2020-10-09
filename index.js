const express = require("express");
const app =express();

const importData = require("./data.json");

let port =process.env.PORT || 8000;
app.get("/",(req,res) => {
res.send("Hello World");
});

app.get("/covidpatient",(req,res) => {
    res.send(importData);
});

app.listen(port, () => {
    console.log(`App is listening on port http://localhost:${port}`);
});