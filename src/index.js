const app = require("./ExpressBundle");
const config = require("config");
const port = 3300
const UsersRoutes= require('./routes/users.route');
app.get("/", (req, res) => {
    res.send("Hello. I'm Forum-Api")
});
app.use("/api/v1",UsersRoutes);
app.listen(port, () => {
    console.log("server is running on port: ", port);
});
module.exports = app;
