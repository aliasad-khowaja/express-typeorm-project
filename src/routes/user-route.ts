import { Application } from "express";
import * as userController from './../controllers/user-controller';

export let routes = (app: Application) => {
    app.route('/user').get( userController.getAllUsers );
    app.route('/user').post( userController.saveUser );
    app.route('/user/:id/files').get( userController.getFilesByUserId );
}