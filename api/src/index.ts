const express = require( "express" );
const app = express();
const port = 8080; // default port to listen
const cors =require('cors');
import {router} from './routes/common';

// define a route handler for the default home page
app.use(cors({
origin:'*',
methods: 'GET,POST,OPTIONS,DELETE,PUT'
}))
app.use('/',router);


// start the Express server
app.listen( process.env.PORT || port, () => {
    if(port) console.log( `server started at http://localhost:${ port }` );
    else  console.log( `server started at http://localhost:${ process.env.PORT }` );
} );