const express = require( "express" );
const app = express();
const port = 8080; // default port to listen
import {router} from './routes/common';

// define a route handler for the default home page
app.use('/',router);

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );