require("dotenv").config();
const express = require("express");
const app = express();

app.listen(process.env.port, () => {
    console.log(`Server is running on PORT ${process.env.port}`);
});
