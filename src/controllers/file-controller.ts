import {Request, Response, response} from 'express';
import { FileRepository } from './../repositories/file-repository';
import { BaseResponse } from './../base-response';
import { UserEntity } from './../entities/user-entity';
import { UserRepository } from './../repositories/user-repository';
import { FileEntity } from './../entities/file-entity';

export let getAllFiles = async (req: Request, res: Response) => {
    console.log("== GET ALL FILES ==")
    let fileRepository: FileRepository = new FileRepository();
    let baseResponse: BaseResponse = new BaseResponse();
    try {
        let files = await fileRepository.getAllFiles();
        console.log(files);
        baseResponse.isSuccess = true;
        baseResponse.response = JSON.stringify(files);
    } catch (e) {
        console.log(e);
        baseResponse.isSuccess = false;
        baseResponse.response = JSON.stringify(e);
    }
    return res.send(baseResponse);
}

export let saveFile = async (req: Request, res: Response) => {
    console.log("== SAVE FILE ==")
    let fileRepository: FileRepository = new FileRepository();
    let userRepository: UserRepository = new UserRepository();
    let baseResponse: BaseResponse = new BaseResponse();
    try {
        let file: FileEntity = new FileEntity();
        file.name = req.body.name;
        file.user = await userRepository.getUser( req.body.userId );
        let result = await fileRepository.saveFile( file );
        baseResponse.isSuccess = true;
        baseResponse.response = JSON.stringify(result);
    } catch (e) {
        console.log(e);
        baseResponse.isSuccess = false;
        baseResponse.response = JSON.stringify(e);
    }
    return res.send(baseResponse);
}