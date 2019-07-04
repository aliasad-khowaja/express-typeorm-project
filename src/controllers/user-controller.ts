import {Request, Response} from 'express';
import { UserRepository } from './../repositories/user-repository';
import { FileRepository } from './../repositories/file-repository';
import { BaseResponse } from './../base-response';
import { UserEntity } from './../entities/user-entity';


export let getAllUsers = async (req: Request, res: Response) => {
    console.log("== GET ALL USERS ==");
    let userRepository: UserRepository = new UserRepository();
    let baseResponse: BaseResponse = new BaseResponse();
    try {
        let users = await userRepository.getAllUsers();
        console.log(users);
        baseResponse.isSuccess = true;
        baseResponse.response = JSON.stringify(users);
    } catch (e) {
        console.log( e );
        baseResponse.isSuccess = false;
        baseResponse.response = JSON.stringify(e);
    }
    return res.send(baseResponse);
}

export let saveUser = async (req: Request, res: Response) => {
    console.log("== SAVE USER ==");
    let userRepository: UserRepository = new UserRepository();
    let baseResponse: BaseResponse = new BaseResponse();
    try {
        let user: UserEntity = new UserEntity();
        user.id = req.body.id;
        user.name = req.body.name;
        let result = await userRepository.saveUser(user);
        console.log(result);
        baseResponse.isSuccess = true;
        baseResponse.response = JSON.stringify(result);
    } catch (e) {
        console.log(e);
        baseResponse.isSuccess = false;
        baseResponse.response = JSON.stringify(e);
    }
    return res.send(baseResponse);
}

export let getFilesByUserId = async (req: Request, res: Response) => {
    console.log("== GET FILES BY USER ==");
    let fileRepository: FileRepository = new FileRepository();
    let baseResponse: BaseResponse = new BaseResponse();
    try {
        let files = await fileRepository.getFileByUserId( req.params.id );
        baseResponse.isSuccess = true;
        baseResponse.response = JSON.stringify(files);
    } catch (e) {
        console.log(e);
        baseResponse.isSuccess = false;
        baseResponse.response = JSON.stringify(e);
    }
    return res.send( baseResponse );
}