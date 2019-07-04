import {Application} from 'express';
import * as fileController from '../controllers/file-controller';

export let routes = (app: Application) => {
    app.route('/file').get( fileController.getAllFiles );
    app.route('/file').post( fileController.saveFile );
}