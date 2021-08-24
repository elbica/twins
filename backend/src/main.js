const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const loginRouter = require("./routes/login");

const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

//Swagger 사용 관련해서 선언되었습니다!
const swaggerDefinition = {
  info: {
    // API informations (required)
    title: "Twin_App", // Title (required)
    version: "1.0.0", // Version (required)
    description: "Twin App project", // Description (optional)
  },
  host: "localhost:3000", // Host (optional)
  basePath: "/", // Base path (optional)
};

// Options for the swagger docs
const options = {
  // Import swaggerDefinitions
  swaggerDefinition,
  // Path to the API docs
  apis: ["./module/user.js"],
};

const swaggerSpec = swaggerJSDoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(bodyParser.json());
mongoose
  .connect("mongodb://localhost:27017/twin-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected");
  });

app.get("/", (request, response) => {
  response.send("API Default Page.");
});

app.use("/login", loginRouter);

/**
 * @swagger
 * Testing
 */

app.listen(3000);
