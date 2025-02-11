const express = require("express");
const mysql = require("mysql2/promise"); 

const api = express();
const port = 3000;

api.use(express.json());

api.get("/", (req, res) => {
    res.status(200).json({ message: "API is running" });
});

api.listen(port, () => {
    console.log(`The server is running on PORT ${port}`);
});
