const express = require("express");
const db = require("./Database/DatabaseConnection"); // Connection Handling MongoDB
const userrouter = require("./Routers/userRouter");
const app = express();
const cors = require("cors");
const {
  errorHandler,
  notFound,
} = require("./middlewares/errorMiddleware");
const PORT = process.env.PORT || 1783;

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.static("public"))

// Define routes
app.use("/api", userrouter);

//Error Handlers
app.use(notFound);
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
