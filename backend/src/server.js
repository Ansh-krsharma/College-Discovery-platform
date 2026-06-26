const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

const collegeRoutes = require("./routes/collegeRoutes");
const authRoutes = require("./routes/auth.routes");
const savedRoutes = require("./routes/savedRoutes");
const compareRoutes = require("./routes/compareRoutes");
const errorMiddleware = require("./middleware/errorMiddleware");

app.get("/", (_, res) => {
  res.json({ message: "College Discovery API" });
});

app.use("/api/colleges", collegeRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/saved", savedRoutes);
app.use("/api/compare", compareRoutes);

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
