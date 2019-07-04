import * as express from 'express';
import {createConnection} from 'typeorm';
import * as userRoute from './routes/user-route';
import * as fileRoute from './routes/file-route';

import * as appConfig from './app.config';
import * as bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

userRoute.routes( app );
fileRoute.routes( app );

createConnection(appConfig.dbOptions)
.then(async connection => {
    console.log("Connected to DB");
})
.catch(error => console.log("TypeORM connection error: ", error));


app.set('port', process.env.PORT || 3000);
app.listen(app.get("port"), () => {
    console.log(("  App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
    console.log("  Press CTRL-C to stop\n");
});


module.exports = app;