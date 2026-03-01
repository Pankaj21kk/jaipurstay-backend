const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors({
  origin: "*",
  credentials: true
}));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("JaipurStay Backend Running");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});

const propertyRoutes = require("./routes/propertyRoutes");
app.use("/api/properties", propertyRoutes);
const bookingRoutes = require("./routes/bookingRoutes");

const ownerRoutes = require("./routes/ownerRoutes");

app.use("/api/owner", ownerRoutes);

app.use("/api/bookings", bookingRoutes);



