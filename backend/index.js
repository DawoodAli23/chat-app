require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
app.use("/user", require("./routes/user.routes"));
app.listen(process.env.port, () => {
    console.log(`Server is running on PORT ${process.env.port}`);
});
