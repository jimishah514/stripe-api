const express = require( "express" );
const app = express();
const port = 8080; // default port to listen
import * as bodyParser from 'body-parser';
//import * as cors from 'cors';
const cors = require('cors')
import { router } from './routes/common';
const corsOptions = {
  origin: '*',
  methods: 'GET,POST,OPTIONS,DELETE,PUT'
}

app.use(cors(corsOptions))
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use('/',router);

// start the Express server
app.listen( process.env.PORT || port, () => {
    if(port) console.log( `server started at http://localhost:${ port }` );
    else  console.log( `server started at http://localhost:${ process.env.PORT }` );
} );