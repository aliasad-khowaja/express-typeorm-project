import {FileEntity} from './../entities/file-entity';
import {getManager} from 'typeorm';

export class FileRepository {

    getAllFiles() {
        return getManager().getRepository(FileEntity).find();
    }

    saveFile(file: FileEntity) {
        return getManager().getRepository(FileEntity).save(file);
    }

    deleteFile(file: FileEntity) {
        return getManager().getRepository(FileEntity).delete(file);
    }

    getFile(fileId: number) {
        return getManager().getRepository(FileEntity).findOne(fileId);
    }

    getFileByUserId(userId: number) {
        return getManager().query('select * from file where userId = ' + userId);
    }

}