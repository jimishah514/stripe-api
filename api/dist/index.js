"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const port = 8080; // default port to listen
const cors = require('cors');
const common_1 = require("./routes/common");
// define a route handler for the default home page
app.use(cors({
    origin: '*',
    methods: 'GET,POST,OPTIONS,DELETE,PUT'
}));
app.use('/', common_1.router);
// start the Express server
app.listen(process.env.PORT || port, () => {
    if (port)
        console.log(`server started at http://localhost:${port}`);
    else
        console.log(`server started at http://localhost:${process.env.PORT}`);
});
//# sourceMappingURL=index.js.map