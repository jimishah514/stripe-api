"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const port = 8080; // default port to listen
const common_1 = require("./routes/common");
// define a route handler for the default home page
app.use('/', common_1.router);
// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map